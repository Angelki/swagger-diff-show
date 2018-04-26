const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const SwaggerDiff = require("swagger-diff");
const axios = require("axios");
const fs = require("fs");
const moment = require("moment");
moment.locale("zh-cn");
const path = require("path");
const diffs = require("./routes/api/diffs");
const app = express();
// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let oldSpecCivil = "public/civil.json";
let oldSpecDeco = "public/deco.json";
let newJson;
app.use("/public", express.static(path.join(__dirname, "public")));
//监听api更改 保存成文件
setInterval(() => {
  //新获取的api
  const newSpecCivil = "http://dev.api.civil.decobim.com/v1/v2/api-docs";
  axios
    .get(newSpecCivil)
    .then(res => {
      // console.log(res.data);
      newJson = JSON.stringify(res.data);
    })
    .catch(err => console.log(err));

  let config = "public/config.json";
  //civil
  SwaggerDiff(oldSpecCivil, newSpecCivil, config)
    .then(diff => {
      // console.log(JSON.stringify(diff.errors) === "[]");
      if (
        JSON.stringify(diff.errors) === "[]" &&
        JSON.stringify(diff.warnings) === "[]" &&
        JSON.stringify(diff.infos) === "[]" &&
        JSON.stringify(diff.unmatchDiffs) === "[]"
      ) {
        return console.log("土建 api未发生任何改变~");
      }
      const oStr = JSON.stringify(diff);
      // console.log(oStr);
      time = moment().format("LLLL");
      fs.writeFile(`public/diffs/diff_${time}.json`, oStr, err => {
        if (err) {
          return console.log(err);
        }
        console.log("写入成功");
        fs.writeFile(`public/civil.json`, newJson, err => {
          if (err) {
            return console.log(err);
          }
        });
      });
    })
    .catch(err => console.log(err));
  const newSpecDeco = "http://dev.api.decobim.com/v1/v2/api-docs";
  axios
    .get(newSpecDeco)
    .then(res => {
      // console.log(res.data);
      newJson = JSON.stringify(res.data);
    })
    .catch(err => console.log(err));

  // deco
  SwaggerDiff(oldSpecDeco, newSpecDeco, config)
    .then(diff => {
      // console.log(JSON.stringify(diff.errors) === "[]");
      if (
        JSON.stringify(diff.errors) === "[]" &&
        JSON.stringify(diff.warnings) === "[]" &&
        JSON.stringify(diff.infos) === "[]" &&
        JSON.stringify(diff.unmatchDiffs) === "[]"
      ) {
        return console.log("装饰api未发生任何改变~");
      }
      const oStr = JSON.stringify(diff);
      // console.log(oStr);
      time = moment().format("LLLL");
      fs.writeFile(`public/deco_diffs/diff_${time}.json`, oStr, err => {
        if (err) {
          return console.log(err);
        }
        console.log("写入成功");
        fs.writeFile(`public/deco.json`, newJson, err => {
          if (err) {
            return console.log(err);
          }
        });
      });
    })
    .catch(err => console.log(err));
}, 1000);

// Routes
app.use("/api/diffs", diffs);
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
