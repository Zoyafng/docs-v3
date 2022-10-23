# 后端登出

<LastUpdated />

根据不同端和具体使用场景，我们提供了**前端登出**和**后端登出**两种登出方式：

- **前端登出**：前端登出指的是用户在前端访问登出地址，登出之后服务器会清除用户的登录态。这种登出方式一般需要借助浏览器的参与，需要在浏览器环境下使用。Node SDK 提供了生成登出地址的方法，开发者可以引导用户在前端访问此地址。
- **后端登出**：后端登出指的是在后端服务中调用撤销 `access_token` 的方法，使用户的 `access_token` 失效，实现登出的效果，适合使用 Token 的方式管理登录态的场景。

此部分文档介绍生成后端撤回用户 `access_token` 的方法。

## 请求参数

| 名称  | 类型   | <div style="width:80px">是否必填</div> | 默认值 | <div style="width:300px">描述</div> | <div style="width:200px"></div>示例值</div> |
| ----- | ------ | -------------------------------------- | ------ | ----------------------------------- | ------------------------------------------- |
| token | string | 是                                     | -      | 用户的 `access_token`               | `xxxxxx`                                    |


## 示例代码

```php
<?php

require "vendor/autoload.php";
use Authing\AuthenticationClient;

// Authing 应用 ID
$AUTHING_APP_ID = "AUTHING_APP_ID";
// Authing 应用密钥
$AUTHING_APP_SECRET = "AUTHING_APP_SECRET";
// Authing 应用域名，如 https://example.authing.cn。注意：Host 地址为示例样式，不同版本用户池的应用 Host 地址形式有所差异，实际地址以 自建应用->应用配置->认证配置 下 `认证地址 `字段为准。
$AUTHING_APP_HOST = "AUTHING_APP_HOST";
// Authing 应用配置的登录回调地址
$AUTHING_APP_REDIRECT_URI = "AUTHING_APP_REDIRECT_URI";

// 初始化 AuthenticationClient
$authenticationClient = new Authing\AuthenticationClient(
    array(
        "appId" => $AUTHING_APP_ID,
        "appSecret" => $AUTHING_APP_SECRET,
        "appHost" => $AUTHING_APP_HOST,
        "redirectUri" => $AUTHING_APP_REDIRECT_URI
    )
);


// 撤回用户的 access_token，使其失效
$success = $authenticationClient->revokeToken("ACCESS_TOKEN");
print_r($success);


// 之后再调用验证 access_token 方法检查 access_token 的合法性时，将会得到 token 已失效的结果
$data = $authenticationClient->introspectToken("ACCESS_TOKEN");
print_r($data);
```

## 请求响应

类型： `boolean`

示例结果：

```txt
true
```

