# 获取用户授权资源的结构列表

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

该接口主要用于获取用户授权的资源列表，通过权限空间 Code、用户 id、资源 Code 获取用户资源的授权列表。
  
  ### 示例
  
  - 入参

```json
{
  "namespaceCode": "examplePermissionNamespace",
  "userId": "63721xxxxxxxxxxxxdde14a3",
  "resourceCode": "exampleResourceCode"
}
```

- 出参

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "apiCode": 20001,
  "data":{
    "namespaceCode": "exampleNamespaceCode",
    "resourceCode": "exampleResourceCode",
    "permissionBo": {
        "resourceId": "63xxxxxxxxxxxxx999",
        "resourceType": "TREE",
        "nodeAuthActionList": [
            {
                "name": "1",
                "code": "1",
                "children": [
                    {
                        "name": "1-1",
                        "code": "1-1",
                        "children": [],
                        "actions": [
                            "read",
                            "get"
                        ]
                    }
                ],
                "actions": [
                    "read"
                ]
            },
            {
                "name": "2",
                "code": "2",
                "children": [
                    {
                        "name": "2-1",
                        "code": "2-1",
                        "actions": [
                            "read"
                        ]
                    }
                ],
                "actions": [
                    "get"
                ]
            }
        ]
    }
  }
}
```
  

## 方法名称

`ManagementClient.GetUserResourceStruct`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| resourceCode | string | 是 | - | 资源 Code  | `exampleResourceCode` |
| userId | string | 是 | - | 用户 ID   | `6301ceaxxxxxxxxxxx27478` |
| namespaceCode | string | 是 | - | 权限空间 Code  | `examplePermissionNamespace` |




## 请求响应

类型： `GetUserResourceStructRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#GetUserResourceStructDataDto">GetUserResourceStructDataDto</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "namespaceCode": "namespaceCode",
    "resourceCode": "resourceCode",
    "permissionBo": {
      "resourceId": "resourceId",
      "resourceType": "TREE",
      "nodeAuthActionList": {
        "code": "123",
        "value": "示例资源策略节点",
        "name": "数据资源",
        "action": "read",
        "children": "[{\"code\":\"code1\",\"name\":\"子节点1\",\"value\":\"子节点值\",\"enabled\":false,\"action\":\"Create\",\"children\":[{\"code\":\"code2\",\"name\":\"子节点2\",\"value\":\"子节点2值\",\"enabled\":true,\"action\":\"Get\"}]}]"
      }
    }
  }
}
```

## 数据结构


### <a id="GetUserResourceStructDataDto"></a> GetUserResourceStructDataDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| namespaceCode | string | 是 | 权限空间code   |  `namespaceCode` |
| resourceCode | string | 是 | 资源code   |  `resourceCode` |
| permissionBo |  | 是 | 数据资源权限操作列表 嵌套类型：<a href="#TreePermissionDto">TreePermissionDto</a>。  |  |


### <a id="TreePermissionDto"></a> TreePermissionDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| resourceId | string | 是 | 资源id   |  `resourceId` |
| resourceType | string | 是 | 资源类型，STRING/ARRAY/TREE   |  `TREE` |
| nodeAuthActionList | array | 是 | 树结构节点列表 嵌套类型：<a href="#DataResourcePolicyTreeStructs">DataResourcePolicyTreeStructs</a>。  |  |


### <a id="DataResourcePolicyTreeStructs"></a> DataResourcePolicyTreeStructs

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| code | string | 是 | 数据资源策略节点 Code, 同层级唯一   |  `123` |
| value | string | 否 | 数据资源策略节点 Value   |  `示例资源策略节点` |
| name | string | 是 | 数据资源节点名称 ，同层级唯一   |  `数据资源` |
| action | string | 是 | 数据资源策略节点 action 动作   |  `read` |
| enabled | boolean | 是 | 数据资源策略节点是否开启动作   |  |
| children | array | 否 | 子节点数据,子节点数据最多五个层级   |  `[{"code":"code1","name":"子节点1","value":"子节点值","enabled":false,"action":"Create","children":[{"code":"code2","name":"子节点2","value":"子节点2值","enabled":true,"action":"Get"}]}]` |


