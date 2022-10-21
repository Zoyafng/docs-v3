# 消息服务

<LastUpdated/>

## 发送短信

```swift
func sendSms(phone: String, phoneCountryCode: String? = nil, channel: Channel, completion: @escaping(Response) -> Void)
```

**请求参数**

* *phone* 手机号
* *channel* 枚举值 Channel, 短信通道，指定发送此短信的目的

**示例代码**

```swift
AuthClient().sendSms(phone: "188xxxx8888", channel: .login) { res in
    if (res.statusCode == 200) {
        // response.data
    }
}
```

## 发送邮件

```swift
func sendEmail(email: String, channel: Channel, completion: @escaping(Response) -> Void)
```

**请求参数**

* *email* 邮箱
* *channel* 枚举值 Channel, 指定发送此邮件的目的

**示例代码**

```swift
AuthClient().sendEmail(email: "test@example.com", channel: .login) { res in
    if (res.statusCode == 200) {
        // response.data
    }
}
```

