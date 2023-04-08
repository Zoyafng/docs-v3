## 订阅事件
- managementClient.subEvent(eventCode,receiver)

使用接口可以订阅 authing 产生的事件，eventCode 为事件编码，可在 authing 控制台 查看。

### 请求参数
- eventCode `<String>`  事件编码
- receiver `<Receiver>` 自定义接收器

### 代码示例

```java
ManagementClientOptions clientOptions = new ManagementClientOptions();
clientOptions.setAccessKeyId("ACCESS_KEY_ID");
clientOptions.setAccessKeySecret("ACCESS_KEY_SECRET");


ManagementClient managementClient = new ManagementClient(clientOptions);
managementClient.subEvent("authing.user.created", new Receiver() {
    @Override
    public void onReceiverMessage(String msg) {
        System.out.println(msg);
    }
});
```

## 发布事件
- managementClient. pubEvent(eventCode, data)

使用接口可以发布自定义事件，eventCode 为事件编码，可在 authing 控制台 查看。


### 请求参数
- eventCode `<String>`  事件编码
- data `<Object>` 事件体

### 代码示例
```java
ManagementClientOptions clientOptions = new ManagementClientOptions();
clientOptions.setAccessKeyId(ACCESS_KEY_ID);
clientOptions.setAccessKeySecret(ACCESS_KEY_SECRET);
ManagementClient client = new ManagementClient(clientOptions);

String eventData = "{\"data\":\"your_data\"";
CostGetAllRightItemRespDto result = client.pubtEvent("yourapp.event.code", eventData);
System.out.println(result);
```
