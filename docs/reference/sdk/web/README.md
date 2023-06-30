# Web SDK

Authing Web SDK 为开发者提供了简单易用的函数来实现浏览器端的单点登录效果，它是一款基于 [OIDC](https://docs.authing.cn/v2/guides/federation/oidc.html) 标准的 Web 应用认证侧 SDK，你可以通过调用 SDK 与 Authing 完成集成，帮你实现浏览器内多个应用跨主域的[单点登录](https://docs.authing.cn/v2/guides/app-new/sso/)效果。

Authing Web SDK 可以帮你实现浏览器内多个应用跨主域的单点登录效果，**目前只适合单独使用**，暂不支持与 Guard 或其他 SDK 混用。

Authing Web SDK 目前支持的功能如下：

|功能|说明|
|----|----|
|loginWithRedirect|跳转登录|
|loginWithPopup|弹窗登录|
|isRedirectCallback|判断当前 URL 是否为 Authing 登录回调 URL，结合 getLoginState 实现静默登录|
|getLoginState|获取登录态|
|getUserInfo|获取用户信息|
|logoutWithRedirect|退出登录|

除此之外，Authing Web SDK 未来将陆续从 [authing-js-sdk](https://docs.authing.cn/v2/reference/sdk-for-node/authentication/) 中迁移所有可在浏览器中运行的 Authing 大部分认证类功能，并集成 Authing 最新的 V3 版认证类 API，为用户提供更好的使用体验。

## 代码地址

|条目|说明|
|-----|----|
|最新版本|5.1.8|
|仓库地址|[https://github.com/authing/authing-js-sdk](https://github.com/authing/authing-js-sdk)|

<br>

<span style="background-color: #215ae5; a:link:color:#FFF; padding:8px; border-radius: 4px;">
  <a href="./quick.html" style="color:#FFF;">快速开始 →</a>
</span>
