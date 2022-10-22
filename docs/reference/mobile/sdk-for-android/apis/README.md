# APIs

<LastUpdated/>

通过 API SDK 提供了丰富完善的认证用户及管理用户 API，来帮你应用完成用户的认证以及管理。

若存粹完全使用 API 的方式来完成登录注册等认证流程，你需要独立构建自己的登录注册等 UI 界面。

​	

## 错误处理

Authing Android API SDK 方法在请求接口时，不会抛出 Exception（网络错误除外），除非特殊说明，所有的方法返回值都会包含两个状态码：`statusCode` 和 `apiCode`：

- `statusCode`: `statusCode` 为请求状态码，不包含具体的业务错误信息。**当且仅当 `statusCode` 为 `200` 时，表示接口请求成功**，此时不会带有 `apiCode`。`statusCode` 不为 `200` 的情况下， 表示接口请求失败或者需要进行额外操作（比如登录接口需要进行 MFA 二次验证），你需要对此进行关注，进行必要的错误处理。每个 `statusCode` 对应一个类型的错误， 具体的错误分类请见下文。在大多数情况下，除非你需要对某些特定的异常做出响应，否则你只需要关注 `statusCode`，不需要关注 `apiCode`。
- `apiCode`: `apiCode` 为业务状态码，每个 `apiCode` 具备特定的错误含义，具体的 `apiCode` 列表见下文。`apiCode` 只会在 `statusCode` 非 200 且错误原因具备业务含义时才会返回。
- `requestId`: 请求 ID，当请求失败时会返回。如果你在使用 Node SDK 的过程中遇到了错误，可以使用此 `requestId` 咨询 Authing 开发人员。

详细的 `statusCode` 列表和 `apiCode` 请见[错误码](https://docs.pre.authing.cn/v3/reference/other/error-code.html)。
