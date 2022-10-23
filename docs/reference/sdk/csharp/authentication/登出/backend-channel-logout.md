# 后端登出

<LastUpdated />

根据不同端和具体使用场景，我们提供了**前端登出**和**后端登出**两种登出方式：

- **前端登出**：前端登出指的是用户在前端访问登出地址，登出之后服务器会清除用户的登录态。这种登出方式一般需要借助浏览器的参与，需要在浏览器环境下使用。CSharp SDK 提供了生成登出地址的方法，开发者可以引导用户在前端访问此地址。
- **后端登出**：后端登出指的是在后端服务中调用撤销 `AccessToken` 的方法，使用户的 `AccessToken` 失效，实现登出的效果，适合使用 Token 的方式管理登录态的场景。

此部分文档介绍生成后端撤回用户 `AccessToken` 的方法。

## 请求参数

| 名称  | 类型   | <div style="width:80px">是否必填</div> | 默认值 | <div style="width:300px">描述</div> | <div style="width:200px"></div>示例值</div> |
| ----- | ------ | -------------------------------------- | ------ | ----------------------------------- | ------------------------------------------- |
| token | string | 是                                     | -      | 用户的 `access_token`               | `xxxxxx`                                    |


## 示例代码

```csharp
using System.Threading.Tasks;
using Authing.CSharp.SDK.Models.Authentication;
using Authing.CSharp.SDK.Services;

namespace ConsoleApplication
{
    public class Program
    {
        static void Main(string[] args)
        {
            MainAsync().GetAwaiter().GetResult();
        }

        private static async Task MainAsync()
        {
            // 设置初始化参数
            AuthenticationClientInitOptions clientOptions = new AuthenticationClientInitOptions
            {
                AppId = "AUTHING_APP_ID",// Authing 应用 ID
                AppSecret = "AUTHING_SECRET",// Authing 应用密钥
                AppHost = "AUTHING_DOMAIN", // Authing 应用域名，如 https://example.authing.cn
                RedirectUri = "AUTHING_REDIRECTURI",// Authing 应用配置的登录回调地址
            };

            // 初始化 AuthenticationClient
            AuthenticationClient authenticationClient = new AuthenticationClient(clientOptions);

            var success = authenticationClient.RevokeToken("xxxxxx");
        }
    }
}
```


## 请求响应

类型： `string`

示例结果：

```txt
xxxxxxxx
```

