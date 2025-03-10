# 获取数据资源列表

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

获取数据资源列表,可通过数据资源名称、数据资源 Code 和数据资源所属权限空间 Code 列表进行指定筛选。

## 方法名称

`ManagementClient.listDataResources`

## 请求参数

类型： `ListDataResourcesDto`

| 名称             | 类型     | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div>                             |
|----------------|--------|------------------------------------|-----------------------------------|-----------------------------------|----------------------------------------------------------------|
 | page           | number | 否                                  | 1                                 | 当前页数，从 1 开始                       | `1`                                                            |
 | limit          | number | 否                                  | 10                                | 每页数目，最大不能超过 50，默认为 10             | `10`                                                           |
 | query          | string | 否                                  | -                                 | 关键字搜索，可以是数据资源名称或者数据资源 Code        | `资源1`                                                          |
 | namespaceCodes | array  | 否                                  | -                                 | 权限数据所属权限空间 Code 列表 数组长度限制：50。     | `["examplePermissionNamespace1","examplePermissionNamespac2"]` |




## 示例代码

```java
package test.management;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.ListDataResourcesDto;
import cn.authing.sdk.java.dto.ListDataResourcesPaginatedRespDto;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;


public class ListDataResourcesTest {
    // 需要替换成你的 Authing Access Key ID
    private static final String ACCESS_KEY_ID = "AUTHING_ACCESS_KEY_ID";
    // 需要替换成你的 Authing Access Key Secret
    private static final String ACCESS_KEY_SECRET = "AUTHING_ACCESS_KEY_SECRET";

    public static void main(String[] args) throws Throwable {
        ManagementClientOptions clientOptions = new ManagementClientOptions();
        clientOptions.setAccessKeyId(ACCESS_KEY_ID);
        clientOptions.setAccessKeySecret(ACCESS_KEY_SECRET);
        // 如果是私有化部署的客户，需要设置 Authing 服务域名
        // clientOptions.setHost("https://api.your-authing-service.com");
        ManagementClient client = new ManagementClient(clientOptions);

        ListDataResourcesDto request = new ListDataResourcesDto();
        request.setPage(1);
        request.setLimit(10);
        request.setNamespaceCodes("examplePermissionNamespace1,examplePermissionNamespace2");

        ListDataResourcesPaginatedRespDto response = client.listDataResources(request);
        System.out.println(JsonUtils.serialize(response));
    }

}
```




## 请求响应

类型： `ListDataResourcesPaginatedRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#DataResourcesPaginatedRespDto">DataResourcesPaginatedRespDto</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "list": {
      "resourceName": "示例数据资源名称",
      "resourceCode": "dataResourceTestCode",
      "type": "TREE",
      "description": "示例数据资源描述",
      "namespaceCode": "examplePermissionNamespace",
      "namespaceName": "示例权限空间",
      "authorizationNum": 1,
      "updatedAt": "2022-07-03T02:20:30.000Z"
    }
  }
}
```

## 数据结构


### <a id="DataResourcesPaginatedRespDto"></a> DataResourcesPaginatedRespDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| totalCount | number | 是 | 记录总数   |  |
| list | array | 是 | 响应数据 嵌套类型：<a href="#ListDataResourcesRespDto">ListDataResourcesRespDto</a>。  |  |


### <a id="ListDataResourcesRespDto"></a> ListDataResourcesRespDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| resourceName | string | 是 | 数据资源名称,权限空间内唯一   |  `示例数据资源名称` |
| resourceCode | string | 是 | 数据资源 Code,权限空间内唯一   |  `dataResourceTestCode` |
| type | string | 是 | 数据资源类型，目前支持树结构（TREE）、字符串（STRING）、数组（ARRAY）   | TREE |
| description | string | 否 | 数据资源描述   |  `示例数据资源描述` |
| namespaceCode | string | 是 | 数据资源所属的权限空间 Code   |  `examplePermissionNamespace` |
| namespaceName | string | 是 | 数据资源所属的权限空间名称   |  `示例权限空间` |
| authorizationNum | number | 是 | 数据资源关联授权的数量   |  `1` |
| updatedAt | string | 是 | 数据资源更新时间   |  `2022-07-03T02:20:30.000Z` |


