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
  //调用文件遍历方法
  fileDisplay(filePath);
  //文件遍历方法
  function fileDisplay(filePath) {
    //根据文件路径读取文件，返回文件列表

    fs.readdir(filePath, (err, files) => {
      if (err) {
        return console.warn(err);
      }
      var allDiffs = [];
      //遍历读取到的文件列表
      files.forEach(filename => {
        //获取当前文件的绝对路径
        let filedir = path.join(filePath, filename);
        //根据文件路径获取文件信息，返回一个fs.Stats对象
        fs.stat(filedir, (error, stats) => {
          if (error) {
            console.warn("获取文件stats失败");
          } else {
            var isFile = stats.isFile(); //是文件
            var isDir = stats.isDirectory(); //是文件夹
            if (isFile) {
              // console.log(filedir); // 读取文件内容
              var content = fs.readFileSync(filedir, "utf-8");
              // console.log(content); // string
              // console.log(JSON.parse(content));
              allDiffs.unshift(JSON.parse(content));
              console.log(allDiffs);
              // res.json(content);
            }
            if (isDir) {
              // return;
              fileDisplay(filedir); //递归，如果是文件夹，就继续遍历该文件夹下面的文件
            }
          }
        });
      });
      // res.json(allDiffs);
      // console.log(allDiffs);
    });
  }
});

module.exports = router;
