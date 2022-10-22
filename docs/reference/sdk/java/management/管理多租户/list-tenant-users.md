# 获取/搜索租户成员列表

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />


此接口用于获取用户列表，支持模糊搜索，以及通过用户基础字段、用户自定义字段、用户所在部门、用户历史登录应用等维度筛选用户。

### 模糊搜素示例

模糊搜索默认会从 `phone`, `email`, `name`, `username`, `nickname` 五个字段对用户进行模糊搜索，你也可以通过设置 `options.fuzzySearchOn`
决定模糊匹配的字段范围：

```json
{
  "keywords": "北京",
  "options": {
    "fuzzySearchOn": [
      "address"
    ]
  }
}
```

### 高级搜索示例

你可以通过 `advancedFilter` 进行高级搜索，高级搜索支持通过用户的基础信息、自定义数据、所在部门、用户来源、登录应用、外部身份源信息等维度对用户进行筛选。
**且这些筛选条件可以任意组合。**

#### 筛选状态为禁用的用户

用户状态（`status`）为字符串类型，可选值为 `Activated` 和 `Suspended`： 

```json
{
  "advancedFilter": [
    {
      "field": "status",
      "operator": "EQUAL",
      "value": "Suspended"
    }
  ]
}
```

#### 筛选邮箱中包含 `@example.com` 的用户

用户邮箱（`email`）为字符串类型，可以进行模糊搜索：

```json
{
  "advancedFilter": [
    {
      "field": "email",
      "operator": "CONTAINS",
      "value": "@example.com"
    }
  ]
}
```

#### 根据用户的任意扩展字段进行搜索

```json
{
  "advancedFilter": [
    {
      "field": "some-custom-key",
      "operator": "EQUAL",
      "value": "some-value"
    }
  ]
}
```

#### 根据用户登录次数筛选

筛选登录次数大于 10 的用户：

```json
{
  "advancedFilter": [
    {
      "field": "loginsCount",
      "operator": "GREATER",
      "value": 10
    }
  ]
}
```

筛选登录次数在 10 - 100 次的用户：

```json
{
  "advancedFilter": [
    {
      "field": "loginsCount",
      "operator": "BETWEEN",
      "value": [10, 100]
    }
  ]
}
```

#### 根据用户上次登录时间进行筛选

筛选最近 7 天内登录过的用户：

```json
{
  "advancedFilter": [
    {
      "field": "lastLoginTime",
      "operator": "GREATER",
      "value": new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
    }
  ]
}
```

筛选在某一段时间内登录过的用户：

```json
{
  "advancedFilter": [
    {
      "field": "lastLoginTime",
      "operator": "BETWEEN",
      "value": [
        new Date(Date.now() - 14 * 24 * 60 * 60 * 1000),
        new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
      ]
    }
  ]
}
```

#### 根据用户曾经登录过的应用筛选

筛选出曾经登录过应用 `appId1` 或者 `appId2` 的用户：

```json
{
  "advancedFilter": [
    {
      "field": "loggedInApps",
      "operator": "IN",
      "value": [
        "appId1",
        "appId2"
      ]
    }
  ]
}
```

#### 根据用户所在部门进行筛选

```json
{
  "advancedFilter": [
    {
      "field": "department",
      "operator": "IN",
      "value": [
        {
          "organizationCode": "steamory",
          "departmentId": "root",
          "departmentIdType": "department_id",
          "includeChildrenDepartments": true
        }
      ]
    }
  ]
}
```

  

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| tenantId | string | 是 | - | 租户 ID  |  |
| keywords | string | 否 | - | 搜索关键字  |  |
| page | string | 否 | - | 页码  |  |
| limit | string | 否 | - | 每页获取的数据量  |  |
| withCustomData | boolean | 否 | - | 是否返回自定义字段  |  |
| withIdentities | boolean | 否 | - |   |  |
| withDepartmentIds | boolean | 否 | - | 是否返回部门信息  |  |



  
## 请求响应

类型： `TenantUserListPaginatedRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#TenantUserListPagingDto">TenantUserListPagingDto</a> | 数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "list": {
      "tenantId": "60b49eb83fd80adb96f26e68",
      "userPoolId": "60b49eb83fd80adb96f26e68"
    }
  }
}
```

## 数据结构


### <a id="TenantUserListPagingDto"></a> TenantUserListPagingDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| totalCount | number | 是 | 记录总数   |  |
| list | array | 是 | 响应数据 嵌套类型：<a href="#TenantUserDto">TenantUserDto</a>。  |  |


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


