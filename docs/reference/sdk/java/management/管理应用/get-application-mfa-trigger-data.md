# 获取应用下用户 MFA 触发数据

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />

获取应用下用户 MFA 触发数据

## 方法名称

`ManagementClient.getMfaTriggerData`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:60px">默认值</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| appId | string | 是 | - | 应用 ID  | `6229ffaxxxxxxxxcade3e3d9` |
| userId | string  | 是 | - | 用户 ID  | `6229ffaxxxxxxxxcade3e3d9` |
| userIdType | string  | 否 | user_id | 用户 ID 类型，默认值为 `user_id`，可选值为：<br>- `user_id`: Authing 用户 ID，如 `6319a1504f3xxxxf214dd5b7`<br>- `phone`: 用户手机号<br>- `email`: 用户邮箱<br>- `username`: 用户名<br>- `external_id`: 用户在外部系统的 ID，对应 Authing 用户信息的 `externalId` 字段<br>- `identity`: 用户的外部身份源信息，格式为 `<extIdpId>:<userIdInIdp>`，其中 `<extIdpId>` 为 Authing 身份源的 ID，`<userIdInIdp>` 为用户在外部身份源的 ID。<br>示例值：`62f20932716fbcc10d966ee5:ou_8bae746eac07cd2564654140d2a9ac61`。<br>  | `user_id` |





## 示例代码

```java
package test.management;

import cn.authing.sdk.java.client.ManagementClient;
import cn.authing.sdk.java.dto.GetMapInfoRespDto;
import cn.authing.sdk.java.dto.GetMfaTriggerDataDto;
import cn.authing.sdk.java.model.ManagementClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

public class GetMfaTriggerDataTest {
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

        GetMfaTriggerDataDto getMfaTriggerDataDto = new GetMfaTriggerDataDto();
        getMfaTriggerDataDto.setUserId("64355exxxxxxxxx11d8ae12dc");
        getMfaTriggerDataDto.setAppId("64355exxxxxxxxx11d8ae12dc");
        GetMapInfoRespDto response = client.getMfaTriggerData(getMfaTriggerDataDto);
        System.out.println(JsonUtils.serialize(response));
    }
}

```




## 请求响应

类型： `GetMapInfoRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#MfaTriggerData">MfaTriggerData</a> | 用户 MFA 触发数据 |


示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "mfaToken": "xxxxxxx",
    "mfaPhone": null,
    "mfaPhoneCountryCode": null,
    "mfaEmail": null,
    "nickname": null,
    "username": null,
    "phone": null,
    "phoneCountryCode": null,
    "faceMfaEnabled": true,
    "totpMfaEnabled": true,
    "applicationMfa": [
      {
        "mfaPolicy": "EMAIL",
        "status": 1,
        "sort": 0
      }
    ]
  }
}
```

## 数据结构


### <a id="MfaTriggerData"></a> MfaTriggerData

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| mfaToken | string | 是 | MFA Token   |  `xxxxxxx` |
| applicationMfa | array | 是 | MFA 配置类型：<a href="#ApplicationMfaDto">ApplicationMfaDto</a>。  |  |
| mfaPhone | string | 否 | MFA 绑定的手机号   |  `null` |
| mfaPhoneCountryCode | string | 否 | MFA 绑定的手机区号   |  `null` |
| mfaEmail | string | 否 | MFA 绑定的邮箱   |  `null` |
| nickname | string | 否 | 用户昵称   |  `null` |
| username | string | 否 | 用户名   |  `null` |
| phone | string | 否 | 用户手机号   |  `null` |
| phoneCountryCode | string | 否 | 用户手机区号   |  `null` |
| faceMfaEnabled | boolean | 否 | 人脸校验是否开启   |  `true` |
| totpMfaEnabled | boolean | 否 | OTP 校验是否开启   |  `true` |

### <a id="ApplicationMfaDto"></a> ApplicationMfaDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| mfaPolicy | string | 是 | MFA 类型   |  `EMAIL` |
| status | number | 是 | 是否开启状态   |  1 |
| sort | number | 是 | 排序   |  0 |

