# 判断用户在同层级资源下的权限

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

该接口主要用于判断用户在同层级资源下的权限，通过权限空间 Code 、用户 ID、资源操作、资源或资源子节点查询用户是否有该同级资源的权限。
  
### 判断用户在同层级字符串资源权限示例

```json
{
  "namespaceCode": "examplePermissionNamespace",
  "userId": "63721xxxxxxxxxxxxdde14a3",
  "action": "read"
  "resource":"strResourceCode1"
}
```

### 判断用户在同层级数组资源权限示例

```json
{
  "namespaceCode": "examplePermissionNamespace",
  "userId": "63721xxxxxxxxxxxxdde14a3",
  "action": "read",
  "resource":"arrayResourceCode1"
}
```

### 判断用户在同层级树资源权限示例

```json
{
  "namespaceCode": "examplePermissionNamespace",
  "userId": "63721xxxxxxxxxxxxdde14a3",
  "action": "read",
  "resource":"/treeResourceCode1/structCode1",
  "resourceNodeCodes": ["resourceStructChildrenCode1","resourceStructChildrenCode2","resourceStructChildrenCode3"]
}
```
  

## 方法名称

`ManagementClient.CheckUserSameLevelPermission`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| resource | string | 是 | - | 资源路径  | `/treeResourceCode1/structCode1` |
| action | string | 是 | - | 数据资源权限操作  | `read` |
| userId | string | 是 | - | 用户 ID  | `63721xxxxxxxxxxxxdde14a3` |
| namespaceCode | string | 是 | - | 权限空间 Code  | `examplePermissionNamespace` |
| resourceNodeCodes | string[] | 否 | - | 当前树资源路径子节点code  | `["resourceStructChildrenCode1"]` |




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

		reqDto := &dto.CheckUserSameLevelPermissionDto{
		NamespaceCode: "examplePermissionNamespace",
		UserId:        "63721xxxxxxxxxxxxdde14a3",
		Action:        "get",
		Resource:      "strResourceCode",
	}
	respDto := client.CheckUserSameLevelPermission(reqDto)
	fmt.Println(respDto)
}
```




## 请求响应

类型： `CheckUserSameLevelPermissionResponseDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#CheckUserSameLevelPermissionDataDto">CheckUserSameLevelPermissionDataDto</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "checkLevelResultList": {
      "action": "get",
      "resourceNodeCode": "treeResourceStructChildrenCode1",
      "enabled": true
    }
  }
}
```

## 数据结构


### <a id="CheckUserSameLevelPermissionDataDto"></a> CheckUserSameLevelPermissionDataDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| checkLevelResultList | array | 是 | 响应结果列表 嵌套类型：<a href="#CheckUserSameLevelPermissionRespDto">CheckUserSameLevelPermissionRespDto</a>。  |  |


### <a id="CheckUserSameLevelPermissionRespDto"></a> CheckUserSameLevelPermissionRespDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| action | string | 是 | 数据资源权限操作   |  `get` |
| resourceNodeCode | string | 否 | 树资源节点code   |  `treeResourceStructChildrenCode1` |
| enabled | boolean | 是 | 是否拥有 action 权限   |  `true` |


