# 获取单个租户成员

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

根据用户 ID 或租户成员 ID 获取租户成员信息

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
 | tenantId | string  | 是 | - | 租户 ID  |  |
 | linkUserId | string  | 否 | - | 关联的用户池级别的用户 ID  |  |
 | memberId | string  | 否 | - | 租户成员 ID  |  |



  
## 请求响应

类型： `TenantUserSingleRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#TenantUserDto">TenantUserDto</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "tenantId": "60b49eb83fd80adb96f26e68",
    "userPoolId": "60b49eb83fd80adb96f26e68"
  }
}
```

## 数据结构


### <a id="TenantUserDto"></a> TenantUserDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| tenantId | string | 是 | 租户 ID   |  `60b49eb83fd80adb96f26e68` |
| userPoolId | string | 是 | 用户池 ID   |  `60b49eb83fd80adb96f26e68` |
| username | string | 是 | 用户名   |  |
| name | string | 是 | 姓名   |  |
| nickname | string | 是 | 昵称   |  |
| email | string | 是 | 邮箱   |  |
| phone | string | 是 | 手机   |  |
| address | string | 是 | 地址   |  |
| birthdate | string | 是 | 生日   |  |
| blocked | boolean | 是 | 是否锁定   |  |
| isTenantAdmin | boolean | 是 | 是否为租户管理员   |  |
| lastIP | string | 是 | 最后登录 IP   |  |
| lastLoginApp | string | 是 | 最后登录应用   |  |
| lastLoginAppLogo | string | 是 | 最后登录应用 Logo   |  |
| lastLoginAppName | string | 是 | 最后登录应用名称   |  |
| loginsCount | number | 是 | 登录次数   |  |
| memberId | string | 是 | 租户成员 ID   |  |
| linkUserId | string | 是 | 关联的用户池级别的用户 ID   |  |


