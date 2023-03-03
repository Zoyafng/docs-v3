# 获取用户在登录应用下指定资源权限列表

<!--  
  警告⚠️：  
  不要直接修改该文档，  https://github.com/Authing/authing-docs-factory  
  使用该项目进行生成  
-->  

<LastUpdated />  

获取用户指定资源的权限列表,用户获取某个应用下指定资源的权限列表。

## 方法名称

`AuthenticationClient.getUserAuthResourcePermissionList`

## 请求参数

类型： `GetUserAuthResourcePermissionListDto`

| 名称        | 类型       | <div style="width:80px">是否必填</div> | 默认值 | <div style="width:300px">描述</div> | <div style="width:200px"></div>示例值</div> |
|-----------|----------|------------------------------------|-----|-----------------------------------|------------------------------------------|
| resources | string[] | 是                                  | -   | 数据资源路径列表,                         | `["exampleResource"]`                    |

## 示例代码

```ts  
import { AuthenticationClient, Models } from 'authing-node-sdk';

const authenticationClient = new AuthenticationClient({
    // 需要替换成你的 Authing AppId、 Secret 和 Host
    appId: 'AUTHING_APP_ID',
    appSecret: 'AUTHING_APP_SECRET',
    appHost: 'AUTHING_APP_HOST'
});

(async () => {  
  
    const user =  await authenticationClient.signInByUsernamePassword("用户名","密码");  
    // 请先调用登录接口获取 access_token，并调用 setAccessToken 方法设置 access_token  
    authenticationClient.setAccessToken(user.data.accessToken);  
    const result = await authenticationClient.getUserAuthResourcePermissionList({    
      resources: ['treeExampleResourceCode/childrenCode', 'treeExampleResourceCode/childrenCode/childrenCode']  
  });
    console.log(JSON.stringify(result, null, 2));
})();
``` 


## 请求响应

类型： `GetUserAuthResourcePermissionListRespDto`

| 名称         | 类型                                                                                               | 描述                               |
|------------|--------------------------------------------------------------------------------------------------|----------------------------------|
| statusCode | number                                                                                           | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message    | string                                                                                           | 描述信息                             |
| apiCode    | number                                                                                           | 细分错误码，可通过此错误码得到具体的错误类型。          |
| requestId  | string                                                                                           | 请求 ID。当请求失败时会返回。                 |
| data       | <a href="#GetUserAuthResourcePermissionListDataDto">GetUserAuthResourcePermissionListDataDto</a> | 响应数据                             |


示例结果：


```json
{
  "statusCode": 200,
  "message": "操作成功",
  "data": {
    "permissionList": {
      "namespaceCode": "examplePermissionNamespace",
      "actions": "[\"get\",\"read\",\"write\",\"delete\"]",
      "resource": "treeResourceCode/childrenCode"
    }
  }
}
```  

## 数据结构


### <a id="GetUserAuthResourcePermissionListDataDto"></a> GetUserAuthResourcePermissionListDataDto


| 名称             | 类型                              | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div>                                                     | <div style="width:200px">示例值</div> |
|----------------|---------------------------------|------------------------------------|---------------------------------------------------------------------------------------|------------------------------------|
| permissionList | GetUserResourcePermissionList[] | 是                                  | 权限列表 嵌套类型：<a href="#GetUserResourcePermissionList">GetUserResourcePermissionList</a>。 |                                    |  



### <a id="GetUserAuthResourcePermissionList"></a> GetUserAuthResourcePermissionList


| 名称            | 类型       | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
|---------------|----------|------------------------------------|-----------------------------------|------------------------------------|
| namespaceCode | string   | 是                                  | 权限空间 code                         | `examplePermissionNamespace`       |
| actions       | string[] | 是                                  | 数据资源权限操作列表                        | `["get","read","write","delete"]`  |
| resource      | string   | 是                                  | 资源路径                              | `treeResourceCode/childrenCode`    |