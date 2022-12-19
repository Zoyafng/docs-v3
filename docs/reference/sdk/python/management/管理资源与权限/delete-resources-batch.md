# 批量删除资源

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

批量删除资源，允许通过资源 Id 列表进行批量删除，同时允许权限空间加资源 Code 列表进行批量删除，资源 Id 列表和资源 Code 列表同时必须存在一个，如果两个都存在，则以资源 Id 列表为主

## 方法名称

`ManagementClient.delete_resources_batch`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| namespace | string | 否 | - | 所属权限分组(权限空间)的 Code  | `default` |
| codeList | string[] | 否 | - | 资源 Code 列表 数组长度限制：50。 | `["code1","code2"]` |
| ids | string[] | 否 | - | 资源 Id 列表 数组长度限制：50。 | `["6250f12d5dxxxx9bcfcf784b","6250f12d5dxxxx9bcfcf784b"]` |




## 请求响应

类型： `IsSuccessRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#IsSuccessDto">IsSuccessDto</a> | 操作是否成功 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "success": true
  }
}
```

## 数据结构


### <a id="IsSuccessDto"></a> IsSuccessDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| success | boolean | 是 | 操作是否成功   |  `true` |


