---
meta:
  - name: description
    content: Java SDK
---

# {{$localeConfig.brandName}} - Java SDK SAML 模块

<LastUpdated/>

安全断言标记语言（英语：Security Assertion Markup Language，简称 SAML，发音 sam-el）是一个基于 XML 的开源标准数据格式，它在当事方之间交换身份验证和授权数据，尤其是在身份提供者和服务提供者之间交换。

## 初始化

初始化 AuthenticationClient 时需传递 AuthenticationClientOptions 参数，其部分属性列如下：

- `appId` \<String\> 应用 ID，必填。
- `secret` \<String\> 应用密钥，必填。
- `host` \<String\> 应用完整地址，如 https://sample-app.authing.cn，不带最后的斜线 '/'。
- `redirectUri` \<String\> 业务回调 URL，必填。详情请查看[授权码模式](https://docs.authing.cn/v2/guides/federation/oidc.html#%E6%8E%88%E6%9D%83%E7%A0%81%E6%A8%A1%E5%BC%8F)。
- `protocol` \<ProtocolEnum\> 协议类型，可选值为 `OIDC`、`OAUTH`、`SAML`、`CAS`，默认为 `OIDC`。
- `tokenEndPointAuthMethod` \<AuthMethodEnum\> 获取 token 端点验证方式，可选值为 `CLIENT_SECRET_POST`、`CLIENT_SECRET_BASIC`、`NONE`，默认为 `CLIENT_SECRET_POST`。
- `introspectionEndPointAuthMethod` \<AuthMethodEnum\> 检验 token 端点验证方式，可选值为 `CLIENT_SECRET_POST`、`CLIENT_SECRET_BASIC`、`NONE`，默认为 `CLIENT_SECRET_POST`。
- `revocationEndPointAuthMethod` \<AuthMethodEnum\> 撤回 token 端点验证方式，可选值为 `CLIENT_SECRET_POST`、`CLIENT_SECRET_BASIC`、`NONE`，默认为 `CLIENT_SECRET_POST`。

### 示例

```java
// 使用 AppId 和 appHost 进行初始化
AuthenticationClientOptions options = new AuthenticationClientOptions();
options.setAppId("AUTHING_APP_ID");
options.setAppHost("AUTHING_APP_HOST");
options.setProtocol(ProtocolEnum.SAML.getValue());
AuthenticationClient authenticationClient = null;
try {
    authenticationClient = new AuthenticationClient(options);
} catch (IOException | ParseException e) {
    e.printStackTrace();
}
```

## 生成 SAML2 协议的用户登录链接

authenticationClient.buildAuthorizeUrl()

> 生成 SAML2 协议的用户登录链接

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
// 拼接 SAML2 登录链接
//options.setProtocol(ProtocolEnum.SAML.getValue());

IOidcParams iOidcParams = new IOidcParams();
iOidcParams.setRedirectUri("AUTHING_REDIRECTURI");
iOidcParams.setNonce("nonce test");
String oidcString = authenticationClient.buildAuthorizeUrl(iOidcParams);
```

### 示例数据

```http
https://oidc1.authing.cn/api/v2/saml-idp/5f17a529f64fb009b794a2ff
```
