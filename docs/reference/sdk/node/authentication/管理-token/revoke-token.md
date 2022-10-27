# 撤销 Token

<LastUpdated />

此文档介绍如何撤销 `access_token` 和 `refresh_token`。

:::hint-danger
注意：如果你使用在本地校验 `access_token` 和 `refresh_token` 的方式，在撤回 `access_token` 和 `refresh_token` 时，务必在本地清除 `access_token` 和 `refresh_token` 的缓存，否则本地校验的结果将还是有效的。详情请见[校验 access_token](./introspect-token.md)。
:::

## 撤销 Token

此接口用于撤销已经签发的 `access_token` 和 `refresh_token`。

## 请求参数

| 名称  | 类型   | <div style="width:80px">是否必填</div> | 默认值 | <div style="width:300px">描述</div> | <div style="width:200px"></div>示例值</div> |
| ----- | ------ | -------------------------------------- | ------ | ----------------------------------- | ------------------------------------------- |
| token | string | 是                                     | -      | Access Token 或者 Refresh Token     | `some-randon-string`                        |

## 示例代码

```typescript
import { AuthenticationClient, Models } from 'authing-node-sdk';

const authenticationClient = new AuthenticationClient({
  // 需要替换成你的 Authing 应用 ID
  appId: 'AUTHING_APP_ID',
  // 需要替换成你的 Authing 应用密钥
  appSecret: 'AUTHING_APP_SECRET',
  // 需要替换成你的 Authing 应用域名
  appHost: 'AUTHING_APP_HOST',
  // 需要替换成你的 Authing 应用回调地址
  redirectUri: 'AUTHING_APP_REDIRECT_URI'
});

(async () => {
  const result = await authenticationClient.revokeToken(
    // 需要替换成真实的 access_token 或 refresh_token
    'REPLACE_ME_WITH_REAL_CODE'
  );
  console.log(JSON.stringify(result, null, 2));
})();
```

## 请求响应

类型： `IntrospectTokenResult`

| 名称    | 类型 | <div style="width:80px">是否必含</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ------- | ---- | -------------------------------------- | ----------------------------------- | ------------------------------------- |
| success | bool | 是                                     | 是否撤回成功                        | `true`                                |

示例结果：

```json
true
```
