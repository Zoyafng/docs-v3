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

```go
package main

import (
	"fmt"
	"github.com/Authing/authing-golang-sdk/v3/authentication"
	"github.com/Authing/authing-golang-sdk/v3/dto"
)

var authenticationClient *AuthenticationClient
var options = AuthenticationClientOptions{
	AppId:       "AUTHING_APP_ID", // Authing 应用 ID
	AppSecret:   "AUTHING_APP_SECRET", // Authing 应用密钥
	AppHost:      "AUTHING_APP_HOST", // Authing 应用域名，如 https://example.authing.cn。注意：Host 地址为示例样式，不同版本用户池的应用 Host 地址形式有所差异，实际地址以 自建应用->应用配置->认证配置 下 `认证地址 `字段为准。
	RedirectUri: "AUTHING_APP_REDIRECT_URI", // Authing 应用配置的登录回调地址
}

func main() {

	var err error
	// 初始化 AuthenticationClient
	authenticationClient, err = NewAuthenticationClient(&options)
	if err != nil {
		panic(err)
	}

	resp, err := authenticationClient.RevokeToken(
		"test@example.com", 
		"test", 
		dto.SignInOptionsDto{}
	)
    fmt.Println(resp)
}
```

## 请求响应

类型： `boolean`

示例结果：

```txt
true
```

