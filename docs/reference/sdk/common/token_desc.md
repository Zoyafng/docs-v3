### 什么是 Id Token

[OIDC (OpenID Connect) 协议](https://openid.net/specs/openid-connect-core-1_0.html)对 [OAuth 2.0 协议](https://www.rfc-editor.org/rfc/rfc6749)最主要的一个扩展就是 **ID Token** 数据结构。当一个用户经过 OIDC 认证之后，可以获取到他的 **ID Token**，**ID Token** 相当于该用户的身份凭证，你可以理解为他的**身份证**。

ID Token 本质上是一个 **JSON Web Token**(JWT), 所以你可以很轻松获取到该用户的用户资料，同时 JWT 的机制也确保了 ID Token 的内容不会
被其他人恶意伪造和篡改。如果你想了解更多 JWT 相关的内容，可以阅读[什么是 JWT Token](https://docs.pre.authing.cn/v2/concepts/jwt-token.html)。

一个示例的 ID Token 如下所示：

```
eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2MmVhYTk1ZmNhMWM1OTZjNTk5YjY3OWYiLCJhdWQiOiI2MmY3MzNhNzE0OGJmOTU4YWYxZTU0MTAiLCJpYXQiOjE2NjA4MDE1MjEsImV4cCI6MTY2MjAxMTEyMSwiaXNzIjoiaHR0cHM6Ly9zYWRkZGYuY2oubWVyZWl0aC5jb20vb2lkYyIsIm5vbmNlIjoiVGpESkRUaFcwaCIsIm5hbWUiOm51bGwsImdpdmVuX25hbWUiOm51bGwsIm1pZGRsZV9uYW1lIjpudWxsLCJmYW1pbHlfbmFtZSI6bnVsbCwibmlja25hbWUiOm51bGwsInByZWZlcnJlZF91c2VybmFtZSI6bnVsbCwicHJvZmlsZSI6bnVsbCwicGljdHVyZSI6Imh0dHBzOi8vZmlsZXMuYXV0aGluZy5jby9hdXRoaW5nLWNvbnNvbGUvZGVmYXVsdC11c2VyLWF2YXRhci5wbmciLCJ3ZWJzaXRlIjpudWxsLCJiaXJ0aGRhdGUiOm51bGwsImdlbmRlciI6IlUiLCJ6b25laW5mbyI6bnVsbCwibG9jYWxlIjpudWxsLCJ1cGRhdGVkX2F0IjoiMjAyMi0wOC0xN1QwNjozNToyOC4zNzZaIiwiZW1haWwiOm51bGwsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwicGhvbmVfbnVtYmVyIjpudWxsLCJwaG9uZV9udW1iZXJfdmVyaWZpZWQiOmZhbHNlfQ.KDCWkSCxek_-fuRzH7kq8lU_NYMYZKns4gquUoyosi0
```

这是一个通过 `Base64` 编码（非加密）的字符串，你可以非常简单得通过[各种语言客户端](https://jwt.io/)解码以及验证它的内容：

```json
{
  "sub": "user_id",
  "aud": "app_id",
  "iat": 1660211717,
  "exp": 1661421317,
  "iss": "https://your_domain.authing.cn/oidc",
  "nonce": "r7HSS7s_HW",
  "name": null,
  "given_name": null,
  "middle_name": null,
  "family_name": null,
  "nickname": null,
  "preferred_username": null,
  "profile": null,
  "picture": "https://files.authing.co/authing-console/default-user-avatar.png",
  "website": null,
  "birthdate": null,
  "gender": "U",
  "zoneinfo": null,
  "locale": null,
  "updated_at": "2022-08-11T09:55:15.267Z",
  "email": "test@example.com",
  "email_verified": false,
  "phone_number": null,
  "phone_number_verified": false
}
```

其中有几个重要的字段：

- `sub`: 用户 ID；
- `aud`: Authing 应用 ID；
- `iss`: 签发此 Token 的 OIDC Issuer

其他的则是用户的一些其他用户信息。

**有个 `id_token` 之后，你可以知道用户的身份（`sub`），从而和你业务系统中的业务数据关联起来；你还可以基于用户的个人资料进行展示。**

### 什么是 Access Token

`access_token` 是用户访问后端资源的凭证，请求后端服务器的时候，**你应该在 authorization 请求头中携带 access_token（而非 id_token）**。以 `CURL` 为例：

```bash
$ curl -i --request GET \\
--url http://localhost:5000/api/protected \\
--header 'Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlRmTE90M0xibjhfYThwUk11ZXNzYW1xai1vM0RCQ3MxLW93SExRLVZNcVEifQ.eyJqdGkiOiJTUWxFSGRzTk54MDc4TThwT1R6djMiLCJpYXQiOjE2MTk1MzA4MzQsImV4cCI6MTYxOTUzNDQzNCwic2NvcGUiOiJvcGVuaWQiLCJpc3MiOiJodHRwczovL29pZGMxLmF1dGhpbmcuY24vb2lkYyIsImF1ZCI6IjYwNTA3NTFhZWQwZjI5YmY3NzIzYzdhOCIsImF6cCI6IjVmMTdhNTI5ZjY0ZmIwMDliNzk0YTJmZiJ9.QsthJdDM5TNtfQOAzy6EwuedK9r03SzkgE2GQkQCLv8SZJhg-tOIKzHqjDDUmRTkJPLl3HHQTUAzfS3UUYwOiah3smiYF7ynx6jukaoGyHTIgXXwavUVmD5j-mnD3kZrLAo-dh5BLBQfLiiE_WlOkQvnKC160K9ETuwQlhx1TGJts0-sMsjsiRx28EJvdrdWw8CVHGiQVzvCE6kHkYmkO6VTkgEnHNqpRpdB0IysIeKUOWezgGZE-Dmtyam6c8nXW_lr798B194zVyjSOuwGt1tqEfRpBDYiD_ER29aWjH2UbI0pjko_15Ldqno9RgehTJXv5suQ6zdfrER-6b5Bmg'
```

`access_token` 是有一定实效期限的，当 `access_token` 过期时，你就需要使用 `refresh_token` 换取新的 `access_token` 。

### 什么是 Refresh Token

一个 `refresh_token` 就是一个用于获取新的 `access_token` 的特殊 Token，每次换取新的 `access_token` 时，你会再次得到一个新的 `refresh_token`。你的系统应该安全得存储 `refresh_token`，因为 `refresh_token` 可以让用户在一个相对长时间的期限内维持登录态。

如果你想获取 `refresh_token`，当你在[发起 OIDC 登录](#tag/登录/跳转到%20Authing%20登录)的时候，需要在 `scope` 中添加 `offline_access`。


</details>
