## 订阅事件
- authenticationClient.sub(eventCode,callback,errCallback)

### 参数
- eventCode `<String>`  事件编码
- callback `<Function>` 自定义接收器
- errCallback `<Function>` 自定义错误接收器


### 示例
```javascript
const authenticationClient = new AuthenticationClient({
  appId: "AUTHING_APP_ID",
  appSecret: "APP_SECRET",
  appHost: "YOUR_APP_HOST",
  accessToken: "TOKEN",
  retryTimes: 0 // socket 连接失败重试次数
})

authenticationClient.sub("authing.user.created", (msg: string) => {
  console.log(msg);
}, (err) => {
  console.log(err);
})
```

## 发布事件
- authenticationClient.pub(eventCode, data)

### 参数
- eventCode `<String>`  事件编码
- data `<String>` 事件体

### 示例
```javascript
authenticationClient.pub("CUSTOM_EVENT", JSON.stringify({
    "email": "test@example.com",
    "phone": "188xxxx8888",
    "name": "张三",
    "customData": {
        "school": "pku",
        "age": 22
    },
}))
```
