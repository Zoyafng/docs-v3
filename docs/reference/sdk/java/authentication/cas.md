---
meta:
  - name: description
    content: Java SDK
---

# {{$localeConfig.brandName}} - Java SDK CSA 模块

<LastUpdated/>

CAS 是 Central Authentication Service 的缩写，中央认证服务，一种独立开放指令协议。

## 初始化

初始化 AuthenticationClient 时的参数：

- `appId` \<String\> 应用 ID，必填。
- `appHost` \<String\> 应用完整地址，如 https://sample-app.authing.cn，不带最后的斜线 '/'。
- `protocol` \<ProtocolEnum\> 协议类型，可选值为 `OIDC`、`OAUTH`、`SAML`、`CAS`，默认为 `OIDC`。

### 示例

```java
// 使用 AppId 和 AppHost 进行初始化
AuthenticationClientOptions options = new AuthenticationClientOptions();
options.setAppId("AUTHING_APP_ID");
options.setAppHost("AUTHING_APP_HOST");
// 协议
options.setProtocol(ProtocolEnum.CAS.getValue());
AuthenticationClient authenticationClient = null;
try {
    authenticationClient = new AuthenticationClient(options);
} catch (IOException | ParseException e) {
    e.printStackTrace();
}
```

## 生成 CAS 协议的用户登录链接

authenticationClient.buildAuthorizeUrl(options)

> 生成 CAS 协议的用户登录链接

### 参数

- `options` \<IOidcParams\> 发起授权登录时需要填写的参数。详情请见[使用 OIDC 授权码模式](https://docs.authing.cn/v2/federation/oidc/authorization-code/)。
- `options.scope` \<String\> 请求的权限项目，选填，OIDC 协议默认为 `openid profile email phone address`，OAuth 2.0 协议默认为 `user`。
- `options.nonce` \<String\> 随机字符串，选填，默认自动生成。
- `options.state` \<String\> 随机字符串，选填，默认自动生成。
- `options.responseMode` \<String\> 响应类型，选填，可选值为 `query`、`fragment`、`form_post`；默认为 `query`，即通过浏览器重定向发送 code 到回调地址。
- `options.responseType` \<String\> 响应类型，选填，可选值为 `code`、`code id_token token`、`code id_token`、`code id_token`、`code token`、`id_token token`、`id_token`、`none`；默认为 `code`，授权码模式。
- `options.redirectUri` \<String\> 回调地址，必填，默认为 SDK 初始化时的 redirectUri 参数。

### 示例

```java
// 拼接 CAS 登录链接
//options.setProtocol(ProtocolEnum.CAS.getValue());

IOidcParams iOidcParams = new IOidcParams();
iOidcParams.setRedirectUri("AUTHING_REDIRECTURI");
iOidcParams.setNonce("nonce test");
String oidcString = authenticationClient.buildAuthorizeUrl(iOidcParams);
```

### 示例数据

```http
https://oidc1.authing.cn/cas-idp/5f17a529f64fb009b794a2ff/login?service=https://example.com
```
