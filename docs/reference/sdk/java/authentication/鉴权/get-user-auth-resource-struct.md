# 获取用户在登录应用下被授权资源列表

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

获取用户授权的资源列表，用户获取某个应用下的某个资源所授权的结构列表，通过不同的资源类型返回对应资源的授权列表。
## 方法名称

`AuthenticationClient.getUserAuthResourceStruct`

## 请求参数

类型： `GetUserAuthResourceStructDto`

| 名称       | 类型     | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
|----------|--------|------------------------------------|-----------------------------------|-----------------------------------|------------------------------------|
| resource | string | 是                                  | -                                 | 数据资源 Code                         | `exampleResourceCode`              |


## 示例代码

```java
package test.authentication;

import cn.authing.sdk.java.client.AuthenticationClient;
import cn.authing.sdk.java.dto.GetUserAuthResourcePermissionListDto;
import cn.authing.sdk.java.dto.GetUserAuthResourcePermissionListRespDto;
import cn.authing.sdk.java.dto.LoginTokenRespDto;
import cn.authing.sdk.java.dto.SignInOptionsDto;
import cn.authing.sdk.java.model.AuthenticationClientOptions;
import cn.authing.sdk.java.util.JsonUtils;
import java.util.ArrayList;
import java.util.List;

public class GetUserAuthResourceStructTest {
  // 需要替换成你的 Authing App ID
  private static final String APP_ID = "AUTHING_APP_ID";
  // 需要替换成你的 Authing App Secret
  private static final String APP_SECRET = "AUTHING_APP_SECRET";
  // 需要替换成你的 Authing App Host
  private static final String APP_HOST = "AUTHING_APP_HOST";
  // 需要替换成你的 Authing Access Token
  private static final String ACCESS_TOKEN = "AUTHING_ACCESS_TOKEN";

  public static void main(String[] args) throws Throwable {

    AuthenticationClientOptions clientOptions = new AuthenticationClientOptions();
    clientOptions.setAppId(APP_ID);
    clientOptions.setAppSecret(APP_SECRET);
    clientOptions.setAppHost(APP_HOST);
    
    AuthenticationClient clientSing = new AuthenticationClient(clientOptions);
    LoginTokenRespDto response = clientSing.signInByUsernamePassword(
        "用户名",
        "密码",
        new SignInOptionsDto());
    clientOptions.setAccessToken(response.getData().getAccessToken());
    AuthenticationClient clientAuth = new AuthenticationClient(clientOptions);
    GetUserAuthResourceStructDto dto = new GetUserAuthResourceStructDto();
    dto.setResource("resourceCode");
    GetUserAuthResourceStructRespDto userAuthResourceStruct = clientAuth
        .getUserAuthResourceStruct(dto);
    System.out.println(JsonUtils.serialize(userAuthResourceStruct));
  }
}
```

## 请求响应

类型： `GetUserAuthResourceStructRespDto`

| 名称         | 类型                                                                               | 描述                               |
|------------|----------------------------------------------------------------------------------|----------------------------------|
| statusCode | number                                                                           | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message    | string                                                                           | 描述信息                             |
| apiCode    | number                                                                           | 细分错误码，可通过此错误码得到具体的错误类型。          |
| requestId  | string                                                                           | 请求 ID。当请求失败时会返回。                 |
| data       | <a href="#GetUserAuthResourceStructDataDto">GetUserAuthResourceStructDataDto</a> | 响应数据                             |

示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "apiCode": 0,
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "namespaceCode": "namespaceCode",
    "resourceCode": "resourceCode",
    "resourceType": "TREE",
    "treeResourceAuthAction": {
      "nodeAuthActionList": [
        {
          "code": "123",
          "name": "树数据资源",
          "value": "示例树资源策略节点",
          "actions": "read",
          "children": [
            {
              "code": "code1",
              "name": "子节点1",
              "value": "子节点值",
              "actions": [
                "create"
              ],
              "children": [
                {
                  "code": "code2",
                  "name": "子节点2",
                  "value": "子节点2值",
                  "actions": [
                    "get"
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
```

## 数据结构

### <a id="GetUserAuthResourceStructDataDto"></a> GetUserAuthResourceStructDataDto

| 名称                     | 类型     | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div>                                                                                                                                                                                                              | <div style="width:200px">示例值</div> |
|------------------------|--------|------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------|
| namespaceCode          | string | 是                                  | 权限空间 Code                                                                                                                                                                                                                                      | `namespaceCode`                    |
| resourceCode           | string | 是                                  | 数据资源 Code                                                                                                                                                                                                                                      | `resourceCode`                     |
| resourceType           | string | 是                                  | 数据资源类型，嵌套类型，<a href="#ResourceType">ResourceType</a>。目前支持树结构（TREE）、字符串（STRING）、数组（ARRAY）三种类型，根据不同的类型返回不同的结构。<br>- `STRING`: 字符串类型结果 StrResourceAuthAction。 <br>- `ARRAY`: 数组类型 ArrResourceAuthAction。<br>- `TREE`: 树类型 TreeResourceAuthAction。 |                                    |
| strResourceAuthAction  | object | 否                                  | 字符串资源授权结构,嵌套类型：<a href="#StrResourceAuthAction">StrResourceAuthAction</a>。                                                                                                                                                                     |
| arrResourceAuthAction  | object | 否                                  | 数组资源授权结构,嵌套类型：<a href="#ArrResourceAuthAction">ArrResourceAuthAction</a>。                                                                                                                                                                      ||
| treeResourceAuthAction | object | 否                                  | 树资源授权结构,嵌套类型：<a href="#TreeResourceAuthAction">TreeResourceAuthAction</a>。                                                                                                                                                                     |

### <a id="ResourceType"></a> ResourceType

| 名称     | 类型   | 描述    |
|:-------|:-----|-------|
| STRING | enum | 字符串类型 |
| ARRAY  | enum | 数组类型  |
| TREE   | enum | 树类型   |

### <a id="StrResourceAuthAction"></a> StrResourceAuthAction

| 名称      | 类型     | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
|---------|--------|------------------------------------|-----------------------------------|------------------------------------|
| value   | string | 是                                  | 字符串数据资源的 Value                    | `resourceValue`                    |
| actions | array  | 是                                  | 字符串数据资源的权限操作列表                    | `["read","get"]`                   |

### <a id="ArrResourceAuthAction"></a> ArrResourceAuthAction

| 名称      | 类型    | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div>    |
|---------|-------|------------------------------------|-----------------------------------|---------------------------------------|
| values  | array | 是                                  | 数组数据资源的 Values                    | `["resourceValue1","resourceValue2"]` |
| actions | array | 是                                  | 数组数据资源的的权限操作列表                    | `["read","get"]`                      |

### <a id="TreeResourceAuthAction"></a> TreeResourceAuthAction

| 名称                 | 类型    | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div>                    | <div style="width:200px">示例值</div> |
|--------------------|-------|------------------------------------|------------------------------------------------------|------------------------------------|
| nodeAuthActionList | array | 是                                  | 树结构节点列表,嵌套类型：<a href="#TreeStructs">TreeStructs</a>。 | -                                  |

### <a id="TreeStructs"></a> TreeStructs

| 名称       | 类型     | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div>                              | <div style="width:200px">示例值</div>                                                                                                                                            |
|----------|--------|------------------------------------|----------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| code     | string | 是                                  | 树资源节点 Code, 同层级唯一                                              | `123`                                                                                                                                                                         |
| name     | string | 是                                  | 树资源节点名称 ，同层级唯一                                                 | `数据资源`                                                                                                                                                                        |
| value    | string | 否                                  | 树资源节点 Value                                                    | `示例资源策略节点`                                                                                                                                                                    |
| actions  | array  | 是                                  | 树数据资源策略节点的权限操作列表                                               | `read`                                                                                                                                                                        |
| children | object | 否                                  | 子节点数据,子节点数据最多五个层级,嵌套类型：<a href="#TreeStructs">TreeStructs</a>。 | `[{"code":"code1","name":"子节点1","value":"子节点值","enabled":false,"action":"create","children":[{"code":"code2","name":"子节点2","value":"子节点2值","enabled":true,"action":"get"}]}]` |


