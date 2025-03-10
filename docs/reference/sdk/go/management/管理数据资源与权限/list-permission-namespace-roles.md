# 分页查询权限空间下所有的角色列表

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

分页查询权限空间下所有的角色列表，分页获取权限空间下所有的角色列表。

## 方法名称

`ManagementClient.ListPermissionNamespaceRoles`

## 请求参数

类型： `ListPermissionNamespaceRolesDto`


| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
 | code | string  | 是 | - | 权限分组唯一标志符 Code  | `examplePermissionNamespace` |
 | page | number  | 否 | 1 | 当前页数，从 1 开始  | `1` |
 | limit | number  | 否 | 10 | 每页数目，最大不能超过 50，默认为 10  | `10` |
 | query | string  | 否 | - | 角色 Code 或者名称  | `test` |




## 示例代码

```go
package main

import (
	"fmt"
	"github.com/Authing/authing-golang-sdk/v3/dto"
	"github.com/Authing/authing-golang-sdk/v3/management"
)

func main() {
	options := management.ManagementClientOptions{
		AccessKeyId:     "AUTHING_ACCESS_KEY_ID", // Authing Access Key ID
		AccessKeySecret: "AUTHING_ACCESS_KEY_SECRET", // Authing Access Key Secret
	}
	
	// 初始化 ManagementClient
	client, err := management.NewManagementClient(&options)
	if err != nil {
		// The exception needs to be handled by the developer.
	}

		reqDto := &dto.ListPermissionNamespaceRolesDto{
		Page:  1,
		Limit: 10,
		Query: "exampleRole",
		Code:  "examplePermissionNamespace",
	}
	respDto := client.ListPermissionNamespaceRoles(reqDto)
	fmt.Println(respDto)
}
```




## 请求响应

类型： `PermissionNamespaceRolesListPaginatedRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#PermissionNamespaceRolesListPagingDto">PermissionNamespaceRolesListPagingDto</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "list": {
      "name": "角色名称",
      "code": "role1",
      "description": "这是一个示例角色的描述",
      "namespace": "system",
      "updatedAt": "2022-07-03T02:20:30.000Z"
    }
  }
}
```

## 数据结构


### <a id="PermissionNamespaceRolesListPagingDto"></a> PermissionNamespaceRolesListPagingDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| totalCount | number | 是 | 记录总数   |  |
| list | array | 是 | 响应数据 嵌套类型：<a href="#PermissionNamespaceRolesListRespDto">PermissionNamespaceRolesListRespDto</a>。  |  |


### <a id="PermissionNamespaceRolesListRespDto"></a> PermissionNamespaceRolesListRespDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| name | string | 是 | 角色名称   |  `角色名称` |
| code | string | 是 | 角色 Code   |  `role1` |
| description | string | 否 | 角色 描述信息   |  `这是一个示例角色的描述` |
| namespace | string | 是 | 权限空间 Code   |  `system` |
| updatedAt | string | 是 | 更新时间   |  `2022-07-03T02:20:30.000Z` |


