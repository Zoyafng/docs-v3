# 获取用户在登录应用下被授权资源列表

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

获取用户指定资源权限列表，用户获取在某个应用下所拥有的资源列表

## 方法名称

`AuthenticationClient.getUserAuthResourcePermissionList`

## 请求参数

类型： `GetUserAuthResourcePermissionListDto`

| 名称        | 类型    | <div style="width:80px">是否必填</div> | 默认值 | <div style="width:300px">描述</div> | <div style="width:200px"></div>示例值</div> |
|-----------|-------|------------------------------------|-----|-----------------------------------|------------------------------------------|
| resources | array | 是                                  | -   | 数据资源路径列表,                         | `["exampleResource"]`                    |

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

public class GetUserAuthResourcePermissionListTest {
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

    List<String> list = new ArrayList<>();
    list.add("strResourceCode");
    list.add("arrayResourceCode");
    list.add("treeExampleResourceCode/children1Code");
    list.add("treeExampleResourceCode/children1Code/children2Code");
    GetUserAuthResourcePermissionListDto dto = new GetUserAuthResourcePermissionListDto();
    dto.setResources(list);
    GetUserAuthResourcePermissionListRespDto userAuthResourcePermissionList = clientAuth
        .getUserAuthResourcePermissionList(dto);
    System.out.println(JsonUtils.serialize(userAuthResourcePermissionList));
  }
}

```

## 请求响应

类型： `GetUserAuthResourcePermissionListRespDto`

| 名称         | 类型                                                                                               | 描述                               |
|------------|--------------------------------------------------------------------------------------------------|----------------------------------|
| statusCode | number                                                                                           | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message    | string                                                                                           | 描述信息                             |
| apiCode    | number                                                                                           | 细分错误码，可通过此错误码得到具体的错误类型。          |
| data       | <a href="#GetUserAuthResourcePermissionListDataDto">GetUserAuthResourcePermissionListDataDto</a> | 响应数据                             |

示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "apiCode": 0,
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "permissionList": [
      {
        "namespaceCode": "examplePermissionNamespace",
        "actions": [
          "get",
          "read",
          "write",
          "delete"
        ],
        "resource": "treeResourceCode1"
      }
    ]
  }
}
```

## 数据结构

### <a id="GetUserAuthResourcePermissionListDataDto"></a> GetUserAuthResourcePermissionListDataDto

| 名称             | 类型    | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div>                                                     | <div style="width:200px">示例值</div> |
|----------------|-------|------------------------------------|---------------------------------------------------------------------------------------|------------------------------------|
| permissionList | array | 是                                  | 权限列表 嵌套类型：<a href="#GetUserResourcePermissionList">GetUserResourcePermissionList</a>。 |                                    |

### <a id="GetUserAuthResourcePermissionList"></a> GetUserAuthResourcePermissionList

| 名称            | 类型     | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
|---------------|--------|------------------------------------|-----------------------------------|------------------------------------|
| namespaceCode | string | 是                                  | 权限空间 code                         | `examplePermissionNamespace`       |
| actions       | array  | 是                                  | 数据资源权限操作列表                        | `["get","read","write","delete"]`  |
| resource      | string | 是                                  | 资源路径                              | `treeResourceCode1`                |

