# 撤销数据策略

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

删除数据策略相关的主体授权，通过授权主体 ID、授权主体类型和数据策略 ID 进行删除。

## 方法名称

`ManagementClient.revokeDataPolicy`

## 请求参数

类型： `DeleteAuthorizeDataPolicyDto`


| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| targetType | string | 是 | - | 主体类型,包括 USER、GROUP、ROLE、ORG 四种类型  | `USER` |
| targetIdentifier | string | 是 | - | 主体 ID ，包含用户 ID、用户组 ID、角色 ID、组织机构 ID  | `6301cexxxxxxxxxxxxxxxxx78` |
| policyId | string | 是 | - | 数据策略 ID  | `60b49xxxxxxxxxxxxxxx6e68` |




## 示例代码

```ts
import { ManagementClient, Models } from 'authing-node-sdk';

// 初始化 ManagementClient
const managementClient = new ManagementClient({
  // 需要替换成你的 Authing Access Key ID
  accessKeyId: 'AUTHING_ACCESS_KEY_ID',
  // 需要替换成你的 Authing Access Key Secret
  accessKeySecret: 'AUTHING_ACCESS_KEY_SECRET',
  // 如果是私有化部署的客户，需要设置 Authing 服务域名
  // host: 'https://api.your-authing-service.com'
});

(async () => {

  const result = await managementClient.revokeDataPolicy({
    policyId: '60b49xxxxxxxxxxxxxxx6e68',
    targetIdentifier: '6301cexxxxxxxxxxxxxxxxx78',
    targetType: DeleteAuthorizeDataPolicyDto.targetType.USER,
  });

  console.log(JSON.stringify(result, null, 2));
})();

```




## 请求响应

类型： `CommonResponseDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。 |
| requestId | string | 请求 ID。当请求失败时会返回。 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c"
}
```

## 数据结构


