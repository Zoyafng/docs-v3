## 订阅事件
- authenticationClient.Sub(eventCode,callback,errCallback)

### 参数
- eventCode `<String>`  事件编码
- callback `<Action<string>>` 自定义接收器
- errCallback `<Action<string>>` 自定义错误接收器

### 示例
```csharp
using Authing.CSharp.SDK.Models.Authentication;
using Authing.CSharp.SDK.Services;

AuthenticationClient authenticationClient = new AuthenticationClient({
  appId: "AUTHING_APP_ID",
  appSecret: "APP_SECRET",
  appHost: "YOUR_APP_HOST",
  accessToken: "TOKEN",
})

 authenticationClient.Sub("authing.user.updated", message =>
{
    Console.WriteLine(message);
}, error =>
{
    Console.WriteLine(message);
});
```

## 发布事件
- authenticationClient.PubEvent(eventCode, data)

### 参数
- eventCode <String>  事件编码
- eventData <String> 事件体

### 示例
```csharp
using Authing.CSharp.SDK.Models.Authentication;
using Authing.CSharp.SDK.Services;

AuthenticationClient authenticationClient = new AuthenticationClient({
  appId: "AUTHING_APP_ID",
  appSecret: "APP_SECRET",
  appHost: "YOUR_APP_HOST",
  accessToken: "TOKEN",
})
await authenticationClient.PubEvent("authing.user.updated",
"[{\"username\":\"qidong\",\"password\":\"123456\"},{\"username\":\"qidong\",\"password\":\"123456\"}]");
```
