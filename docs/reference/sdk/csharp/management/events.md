## 订阅事件
- managementClient.sub(eventCode,callback,errCallback)
> 使用 WebSocket 方式订阅 authing 产生的事件，eventCode 为事件编码，可在 [Authing API Explorer
](https://api-explorer.authing.cn/) 中查看可使用的事件。

### 参数
- eventCode `<String>`  事件编码
- callback `< Action<string>>` 自定义接收器
- errCallback `<Action<string>>` 自定义错误接收器

### 示例
```csharp
using Authing.CSharp.SDK.Models;
using Authing.CSharp.SDK.Services;

ManagementClientOptions options = new ManagementClientOptions()
{
    AccessKeyId = "ACCESS_KEY_ID",
    AccessKeySecret = "ACCESS_KEY_SECRET",
    WebsocketUri = "WEBSOCKET_URI",
};

managementClient.sub("authing.user.created", (msg: string) => {
  console.log(msg);
}, (err) => {
  console.log(err);
})
```

## 发布事件
- managementClient.PubEvent(eventCode, data)

### 参数
- EventRequestDto
- EventRequestDto.EventType `<String>`  事件编码
- EventRequestDto.EventData `<String>` 事件体

### 示例
```csharp
using Authing.CSharp.SDK.Models;
using Authing.CSharp.SDK.Services;

ManagementClientOptions options = new ManagementClientOptions()
{
    AccessKeyId = "ACCESS_KEY_ID",
    AccessKeySecret = "ACCESS_KEY_SECRET",
    WebsocketUri = "WEBSOCKET_URI",
};

var result= await managementClient.PubEvent(new EventRequestDto
{
    EventType = "authing.user.updated",
    EventData = "[{\"username\":\"张三\",\"password\":\"123456\"},{\"username\":\"张三\",\"password\":\"123456\"}]" }
);
```
