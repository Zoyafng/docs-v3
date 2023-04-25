## 订阅事件
- managementClient.sub(eventCode,callback,errCallback)
> 使用 WebSocket 方式订阅 authing 产生的事件，eventCode 为事件编码，可在 [Authing API Explorer
](https://api-explorer.authing.cn/) 中查看可使用的事件。

### 参数
- eventCode `<String>`  事件编码
- callback `<Function>` 自定义接收器
- errCallback `<Function>` 自定义错误接收器

### 示例
```javascript
import { ManagementClient } from 'authing-node-sdk'

const managementClient = new ManagementClient({
  accessKeyId: "ACCESS_KEY_ID",
  accessKeySecret: "ACCESS_KEY_SECRET",
  retryTimes: 0 // socket 连接失败重试次数
})

managementClient.sub("authing.user.created", (msg: string) => {
  console.log(msg);
}, (err) => {
  console.log(err);
})
```

## 发布事件
- managementClient.pub(eventCode, data)

### 参数
- eventCode `<String>`  事件编码
- data `<String>` 事件体

### 示例
```javascript
managementClient.pub("CUSTOM_EVENT", JSON.stringify({
    "email": "test@example.com",
    "phone": "188xxxx8888",
    "name": "张三",
    "customData": {
        "school": "pku",
        "age": 22
    },
}))
```
