# 获取租户数据

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />



## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
 | tenantId | string  | 是 | - | 租户 ID  | `60b49eb83fd80adb96f26e68` |
 | withMembersCount | boolean  | 否 | - | 是否增加返回租户成员统计  |  |
 | withAppDetail | boolean  | 否 | - | 增加返回租户下 app 简单信息  |  |



  
## 请求响应

类型： `TenantSingleRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#UpdateTenantDto">UpdateTenantDto</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "tenantId": "60b49eb83fd80adb96f26e68",
    "appIds": "[\"a\",\"b\"]"
  }
}
```

## 数据结构


### <a id="UpdateTenantDto"></a> UpdateTenantDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| tenantId | string | 是 | 租户 ID   |  `60b49eb83fd80adb96f26e68` |
| name | string | 是 | 租户名   |  |
| appIds | array | 是 | 租户关联的应用 ID   |  `["a","b"]` |
| css | string | 是 | 自定义 CSS   |  |
| defaultLoginTab | string | 是 | 默认登录 Tab   |  |
| defaultRegisterTab | string | 是 | 默认注册 Tab   |  |
| passwordTabConfig | string | 是 | 密码登录页配置   |  |
| loginTabs | string | 是 | 登录 Tab 列表   |  |
| registerTabs | string | 是 | 注册 Tab 列表   |  |
| extendsFields | string | 是 | 注册信息补全配置   |  |
| ssoPageCustomizationSettings | string | 是 | 页面自定义配置   |  |


