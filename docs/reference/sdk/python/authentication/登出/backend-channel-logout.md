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

```python
from authing import AuthenticationClient

# 初始化 AuthenticationClient
authentication_client = AuthenticationClient(
    # Authing 应用 ID
    app_id='AUTHING_APP_ID',

    # Authing 应用密钥
    app_secret='AUTHING_APP_SECRET',

    # Authing 应用地址，如 https://example.authing.cn
    app_host='AUTHING_APP_HOST',

    # Authing 应用配置的登录回调地址
    redirect_uri='AUTHING_APP_REDIRECT_URI',
)

success = authentication_client.revoke_token("xxxx")
print(success)
```


## 请求响应

类型： `boolean`

示例结果：

```txt
true
```

