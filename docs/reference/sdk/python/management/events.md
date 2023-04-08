## 订阅事件
- managementClient.sub_event(event_code,receiver)
> 使用接口可以订阅 authing 产生的事件，event_code 为事件编码，可在 authing 控制台查看。

### 参数
- event_code `<string>`  事件编码
- receiver `<Receiver>` 自定义接收器

### 示例
```python
client = ManagementClient(access_key_id="63f60a8e31e6ebd92080dc7d",
                     access_key_secret="00711487506bc4a92cfada3520b76d7f",
                     websocket_host="wss://events.hydra.authing-inc.co"
                     )
client.sub_event("authing.user.updated",lambda msg:{
    print(msg)
})
```

## 发布事件

- managementClient. pub_event(eventCode, data)
> 使用接口可以发布自定义事件，event_code 为事件编码，可在 authing 控制台查看。

### 参数
- event_code `<string>`  事件编码
- data `<dict>` 事件体

### 示例
```python
client = ManagementClient(access_key_id="xxx",
                          host="https://core.authing.cn",
                     access_key_secret="xxx",
                     websocket_host="wss://events.authing.cn"
                     )
event_code = "custom_aouaw.sxytestevent"
data = {"id":"myid"}
print(client.put_event(event_code,data))
```
