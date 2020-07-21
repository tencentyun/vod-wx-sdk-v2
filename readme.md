# vod-wx-sdk-v2

Tencent cloud vod sdk for wechat mini program


## Installation

1. npm 

````bash
npm install vod-wx-sdk-v2
````
参考微信小程序 [npm 支持](https://developers.weixin.qq.com/miniprogram/dev/devtools/npm.html)

2. 直接引入文件

````js
const VodUploader = require("../../../dist/vod-wx-sdk-v2.js");
````

具体可以参考 [demo](./demo/pages/index/index.js) 


## Features

* [x] 视频文件上传
* [x] 视频指定封面上传

## Docs

- [前置流程说明](https://cloud.tencent.com/document/product/266/9219)
- [接口说明](https://cloud.tencent.com/document/product/266/18177#.E6.8E.A5.E5.8F.A3.E6.8F.8F.E8.BF.B0)
- [使用指引](https://cloud.tencent.com/document/product/266/18177)

## Contributing

1. `git clone` this project
1. `npm install`
1. `npm run test`
1. fix the bug or add new feature
1. `npm run build`

## License

[MIT](./LICENSE)
