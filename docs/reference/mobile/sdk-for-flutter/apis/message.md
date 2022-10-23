# 消息服务

<LastUpdated/>

## 发送短信

```dart
static Future<AuthResult> sendSms(String phone, String channel, [String? phoneCountryCode]) async
```

**请求参数**

* *phone* 手机号
* *channel* 枚举值 Channel, 短信通道，指定发送此短信的目的。

**示例代码**

```dart
AuthResult result = await AuthClient.sendSms("188xxxx8888", "channel");
// result
```

## 发送邮件

```dart
static Future<AuthResult> sendEmail(String email, String channel) async
```

**请求参数**

* *email* 邮箱
* *channel* 枚举值 Channel, 指定发送此邮件的目的。

**示例代码**

```dart
AuthResult result = await AuthClient.sendEmail("test@example.com", "channel");
// result
```

