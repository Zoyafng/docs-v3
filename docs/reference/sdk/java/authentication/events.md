
## 订阅事件


### 方法名称

- authenticationClient.subEvent(eventCode,receiver)

### 请求参数

- eventCode `<String>`  事件编码
- receiver `<Receiver>` 自定义接收器

### 示例代码

```java
AuthenticationClientOptions authenOptions = new AuthenticationClientOptions();
authenOptions.setAppId(APP_ID); // Authing 应用 ID
authenOptions.setAppSecret(APP_SECRET); // Authing 应用密钥

AuthenticationClient authenticationClient = new AuthenticationClient(authenOptions);
authenticationClient.subEvent("yourapp.event.code", new Receiver() {
    @Override
    public void onReceiverMessage(String msg) {
        System.out.println(msg);
    }
});
```


## 发布事件
- authenticationClient.pubtEvent(eventCode, data)

### 请求参数

- eventCode `<String>`  事件编码
- data `<Object> ` 事件体


### 示例代码

```java
AuthenticationClientOptions authenOptions = new AuthenticationClientOptions();
authenOptions.setAppId(APP_ID); // Authing 应用 ID
authenOptions.setAppSecret(APP_SECRET); // Authing 应用密钥

AuthenticationClient authenticationClient = new AuthenticationClient(authenOptions);
String eventData = "{\"id\":\"myid\",\"createdAt\":1675579686427,\"updatedAt\":1675579686427}";
CommonResponseDto result = authenticationClient.pubtEvent("yourapp.event.code", eventData);
System.out.println(result);
```
