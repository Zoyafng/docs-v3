# 检查数据资源名称或者 Code 是否可用

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

检查数据资源名称或者 Code 在权限空间内是否有效,通过数据资源名称或者数据资源 Code 以及所属权限空间 Code,判断在指定的权限空间内是否可用。

### 数据资源 Code 有效示例

- 入参

```json
{
  "namespaceCode": "examplePermissionNamespace",
  "resourceCode": "test"
}
```

- 出参

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "apiCode": 0,
  "data": {
      "isValid": "true"
    }
}
```

### 数据资源名称有效示例

- 入参

```json
{
  "namespaceCode": "examplePermissionNamespace",
  "resourceName": "test"
}
```

- 出参

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "apiCode": 0,
  "data": {
      "isValid": "true"
    }
}
```

### 数据资源 Code 无效示例

- 入参

```json
{
  "namespaceCode": "examplePermissionNamespace",
  "resourceCode": "test"
}
```

- 出参

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "apiCode": 0,
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
      "isValid": "false",
      "message": "data resource code already exist"
  }
}
```
  

## 方法名称

`ManagementClient.checkDataResourceExists`

## 请求参数

类型： `CheckDataResourceExistsDto`

| 名称            | 类型     | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
|---------------|--------|------------------------------------|-----------------------------------|-----------------------------------|------------------------------------|
 | namespaceCode | string | 是                                  | -                                 | 数据资源所属的权限空间 Code                  | `examplePermissionNamespace`       |
 | resourceName  | string | 否                                  | -                                 | 数据资源名称,权限空间内唯一                    | `示例数据资源名称`                         |
 | resourceCode  | string | 否                                  | -                                 | 数据资源 Code,权限空间内唯一                 | `dataResourceTestCode`             |




## 示例代码

```java
package test.management;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.CheckDataResourceExistsDto;
import cn.authing.sdk.java.dto.CheckParamsDataResourceResponseDto;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;


public class CheckDataResourceExistsTest {
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

        CheckDataResourceExistsDto request = new CheckDataResourceExistsDto();
        request.setNamespaceCode("examplePermissionNamespace");
        request.setResourceName("示例树数据资源名称");

        CheckParamsDataResourceResponseDto response1 = client.checkDataResourceExists(request);
        System.out.println(JsonUtils.serialize(response1));

        request.setNamespaceCode("examplePermissionNamespace");
        request.setResourceCode("treeResourceCode");

        CheckParamsDataResourceResponseDto response2 = client.checkDataResourceExists(request);
        System.out.println(JsonUtils.serialize(response2));
    }

}
```




## 请求响应

类型： `CheckParamsDataResourceResponseDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#CheckParamsDataResourceRespDto">CheckParamsDataResourceRespDto</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "isValid": "false",
    "message": "data resource name already exist"
  }
}
```

## 数据结构


### <a id="CheckParamsDataResourceRespDto"></a> CheckParamsDataResourceRespDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| isValid | boolean | 是 | 数据资源名称或者 Code 校验是否有效   |  `false` |
| message | string | 否 | 数据资源名称或者 Code 校验失败提示信息,如果校验成功, message 不返回   |  `data resource name already exist` |


