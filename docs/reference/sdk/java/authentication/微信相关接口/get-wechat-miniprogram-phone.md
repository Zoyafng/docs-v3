# 获取小程序的手机号

<!--
  警告⚠️：
  不要直接修改该文档，
  https://github.com/Authing/authing-docs-factory
  使用该项目进行生成
-->

<LastUpdated />



## 方法名称

`AuthenticationClient.getWechatMiniprogramPhone`

## 请求参数

| 名称 | 类型 | <div style="width:80px">是否必填</div> | 默认值 | <div style="width:300px">描述</div> | <div style="width:200px"></div>示例值</div> |
| ---- | ---- | ---- | ---- | ---- | ---- |
| code | string | 是 | - | `open-type=getphonecode` 接口返回的 `code`  |  |
| extIdpConnidentifier | string | 是 | - | 微信小程序的外部身份源连接标志符  | `my-wxapp` |




## 示例代码

```java
package test.authentication;

import cn.authing.sdk.java.client.AuthenticationClient;
import cn.authing.sdk.java.dto.GetWechatMiniProgramPhoneDto;
import cn.authing.sdk.java.dto.GetWechatMiniProgramPhoneRespDto;
import cn.authing.sdk.java.model.AuthenticationClientOptions;
import cn.authing.sdk.java.util.JsonUtils;

public class GetWechatMiniprogramPhoneTest {
    // 需要替换成你的 Authing App ID
    private static final String APP_ID = "AUTHING_APP_ID";
    // 需要替换成你的 Authing App Secret
    private static final String APP_SECRET = "AUTHING_APP_SECRET";
    // 需要替换成你的 Authing App Host
    private static final String APP_HOST = "AUTHING_APP_HOST";

    public static void main(String[] args) throws Throwable {
        AuthenticationClientOptions clientOptions = new AuthenticationClientOptions();
        clientOptions.setAppId(APP_ID);
        clientOptions.setAppSecret(APP_SECRET);
        clientOptions.setAppHost(APP_HOST);

        AuthenticationClient client = new AuthenticationClient(clientOptions);

        GetWechatMiniProgramPhoneDto reqDto = new GetWechatMiniProgramPhoneDto();
        reqDto.setCode("xxx");
        reqDto.setExtIdpConnidentifier("my-wxapp");
        GetWechatMiniProgramPhoneRespDto response = client.getWechatMiniprogramPhone(reqDto);
        System.out.println(JsonUtils.serialize(response));
    }
}

```




## 请求响应

类型： `GetWechatMiniProgramPhoneRespDto`

| 名称 | 类型 | 描述 |
| ---- | ---- | ---- |
| statusCode | number | 业务状态码，可以通过此状态码判断操作是否成功，200 表示成功。 |
| message | string | 描述信息 |
| apiCode | number | 细分错误码，可通过此错误码得到具体的错误类型。 |
| requestId | string | 请求 ID。当请求失败时会返回。 |
| data | <a href="#GetWechatMiniProgramPhoneDataDto">GetWechatMiniProgramPhoneDataDto</a> | 响应数据 |



示例结果：

```json
{
  "statusCode": 200,
  "message": "操作成功",
  "requestId": "934108e5-9fbf-4d24-8da1-c330328abd6c",
  "data": {
    "phoneNumber": "+86188xxxx8888",
    "purePhoneNumber": "188xxxx8888",
    "countryCode": "86"
  }
}
```

## 数据结构


### <a id="GetWechatMiniProgramPhoneDataDto"></a> GetWechatMiniProgramPhoneDataDto

| 名称 | 类型 | <div style="width:80px">是否必填</div> | <div style="width:300px">描述</div> | <div style="width:200px">示例值</div> |
| ---- |  ---- | ---- | ---- | ---- |
| phoneNumber | string | 是 | 包含区号的手机号   |  `+86188xxxx8888` |
| purePhoneNumber | string | 是 | 不包含区号的手机号   |  `188xxxx8888` |
| countryCode | string | 是 | 区号   |  `86` |


