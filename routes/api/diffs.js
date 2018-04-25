const express = require("express");
const router = express.Router();
const SwaggerDiff = require("swagger-diff");
const fs = require("fs");
const path = require("path");

const moment = require("moment");
moment.locale("zh-cn");

router.get("/test", (req, res) => res.json({ msg: "Users Works" }));

router.post("/", (req, res) => {});

//获取当前的api和默认api的diff
router.get("/", (req, res) => {
  const filePath = path.resolve("public/diffs");
  var allDiffs = []; //所有的diff
  let files = fs.readdirSync(filePath);

  for (let i = 0; i < files.length; i++) {
    //获取当前文件的绝对路径
    let filedir = path.join(filePath, files[i]);
    //根据文件路径获取文件信息，返回一个fs.Stats对象
    let stats = fs.statSync(filedir);
    var isFile = stats.isFile(); //是文件
    var isDir = stats.isDirectory(); //是文件夹
    if (isDir) {
      return res.json({ error: "diffs目录下不应该出现文件夹" });
    }
    var content = fs.readFileSync(filedir, "utf-8");
    allDiffs.unshift(JSON.parse(content));
  }

  res.json(allDiffs);
});

module.exports = router;
