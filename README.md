# 原生Node开发博客
## 创建项目目录
...
mkdir blog
cd bog
mkdir bin
touch server.js
npm init
npm install corss-env save-dev
...
## 配置package.josn
>配置入口文件 和scripts快捷键 npm 
run ev --->nodemon bin/server.js
...
{
  "name": "blog",
  "version": "1.0.0",
  "main": "./bin/server.js",
  "scripts": {
    "dev": "nodemon ./bin/server.js"
  },
  "author": "pupeng",
  "license": "ISC",
  "devDependencies": {
    "cross-env": "^7.0.2"
  },
  "bin": {
    "blog": "server.js"
  },
  "dependencies": {},
  "keywords": [],
  "description": ""
}