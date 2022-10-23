# 前端登出

<LastUpdated />

根据不同端和具体使用场景，我们提供了**前端登出**和**后端登出**两种登出方式：

- **前端登出**：前端登出指的是用户在前端访问登出地址，登出之后服务器会清除用户的登录态。这种登出方式一般需要借助浏览器的参与，需要在浏览器环境下使用。Node SDK 提供了生成登出地址的方法，开发者可以引导用户在前端访问此地址。
- **后端登出**：后端登出指的是在后端服务中调用撤销 `access_token` 的方法，使用户的 `access_token` 失效，实现登出的效果，适合使用 Token 的方式管理登录态的场景。

此部分文档介绍生成前端登出链接的方法。

## 请求参数

| 名称                  | 类型   | <div style="width:80px">是否必填</div> | 默认值 | <div style="width:300px">描述</div>                                                                                                                             | <div style="width:200px"></div>示例值</div> |
| --------------------- | ------ | -------------------------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| postLogoutRedirectUri | string | 否                                     | -      | 登出后的回调地址，此地址必须要在应用配置中的登出回调 URL中进行配置。设置此参数时必须同时传递 idTokenHint。          | `https://example.com/homepage`              |
| idTokenHint           | string | 否                                     | -      | 用户的 `id_token`，当设置了 postLogoutRedirectUri 时此参数必填。id_token 作为用户访问此端点的请求凭证，防止出现第三方放置恶意登出地址的情况诱导用户点击的情况。 | `xxxxxxxx`                                  |
| state                 | string | 否                                     | -      | 自定义中间状态，为任意随机字符串，用户登出之后回调到你配置的回调地址时，会同时携带此 state。                                                                    | `some-random-string`                        |


## 示例代码

```java
import cn.authing.sdk.java.client.AuthenticationClient;
import cn.authing.sdk.java.dto.*;
import cn.authing.sdk.java.model.AuthenticationClientOptions;

// 设置初始化参数
AuthenticationClientOptions clientOptions = new AuthenticationClientOptions();
clientOptions.setAppId("AUTHING_APP_ID"); // Authing 应用 ID
clientOptions.setAppSecret("AUTHING_APP_SECRET"); // Authing 应用密钥
clientOptions.setAppHost("AUTHING_APP_HOST"); // Authing 应用域名，如 https://example.authing.cn
clientOptions.setRedirectUri("AUTHING_APP_REDIRECT_URI"); // Authing 应用配置的登录回调地址

// 初始化 AuthenticationClient
AuthenticationClient authenticationClient = new AuthenticationClient(clientOptions);

// 构建登出链接
BuildLogoutUrlParams params = new BuildLogoutUrlParams();
params.setPostLogoutRedirectUri("https://example.com/homepage");
// 用户的 id_token 可以通过登录接口获取
params.setIdTokenHint("xxxx");
params.setState("xxxxx");
String url = client.buildLogoutUrl(params);
System.out.println(url);
```


## 请求响应

类型： `string`

示例结果：

```txt
https://example.authing.cn/oidc/session/end?post_logout_redirect_uri=xxx&id_token_hint=xxxx&state=xxxx
```
