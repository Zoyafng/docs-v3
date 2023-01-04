# 字符串类型资源鉴权

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

字符串类型资源鉴权，支持用户对一个或者多个字符串资源进行权限判断

## 方法名称

`AuthenticationClient.checkPermissionByStringResource`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | 默认值 | <div style="width:300px">描述</div> | <div style="width:200px"></div>示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| resources | string[] | 是 | - | 数据资源路径列表,  | `["exampleResource"]` |
| action | string | 是 | - | 数据资源权限操作, read、get、write 等动作  | `get` |




## 示例代码

```ts
import { AuthenticationClient, Models } from 'authing-node-sdk';

const authenticationClient = new AuthenticationClient({
  // 需要替换成你的 Authing AppId、 Secret 和 Host
  appId: 'AUTHING_APP_ID',
  appSecret: 'AUTHING_APP_SECRET',
  appHost: 'AUTHING_APP_HOST'
});

(async () => {

  // 请先调用登录接口获取 access_token，并调用 setAccessToken 方法设置 access_token
  authenticationClient.setAccessToken("REPLACE_ME_WITH_REAL_ACCESS_TOKEN");

  const result = await authenticationClient.checkPermissionByStringResource({
    action: 'get',
    resources: ['stringExampleResourceCode1', 'stringExampleResourceCode2']
  });


  console.log(JSON.stringify(result, null, 2));
})();

```




## 请求响应

类型： `CheckResourcePermissionsRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。 |
| data | <a href="#CheckResourcePermissionDataDto">CheckResourcePermissionDataDto</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "apiCode": 20001,
  "data": {
    "checkResultList": [{
      "namespaceCode": "examplePermissionNamespace",
      "action": "get",
      "resource": "exampleResource",
      "enabled": true
    }]
  }
}
```

## 数据结构


### <a id="CheckResourcePermissionDataDto"></a> CheckResourcePermissionDataDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| checkResultList | array | 是 | 检查结果列表 嵌套类型：<a href="#CheckResourcePermissionRespDto">CheckResourcePermissionRespDto</a>。  |  |


### <a id="CheckResourcePermissionRespDto"></a> CheckResourcePermissionRespDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| namespaceCode | string | 是 | 权限空间 Code   |  `examplePermissionNamespace` |
| action | string | 是 | 数据资源权限操作   |  `get` |
| resource | string | 是 | 资源路径   |  `exampleResource` |
| enabled | boolean | 是 | 用户在某个权限空间下是否具有该数据资源的某个操作   |  `true` |


