## 订阅事件
- managementClient.SubEvent(eventCode string, onSuccess func(msg []byte), onError func(err error))
> 使用 WebSocket 方式订阅 authing 产生的事件，eventCode 为事件编码，可在 [Authing API Explorer
](https://api-explorer.authing.cn/) 中查看可使用的事件。


### 参数
- eventCode `<string>`  事件编码
- onSuccess `<func(msg []byte)>` 成功处理函数
- onError `<func(err error)>` 失败处理函数

### 示例
```go
func main() {
    ErrChan := make(chan error, 1)
    client, err := management.NewManagementClient(
        &management.ManagementClientOptions{
            AccessKeyId:     "ACCESS_KEY_ID",
            AccessKeySecret: "ACCESS_KEY_SECRET",
            Host:            "AUTHING_HOST",         // 私有化部署时需填写
            WssHost:         "AUTHING_SOCKET_HOST",  // 私有化部署时需填写
        },
    )
    if err != nil {
        log.Println(err)
        ErrChan <- err
    }
    client.SubEvent("EVENT_CODE", func(msg []byte) {
        fmt.Println(string(msg))
    }, func(err error) {
        fmt.Println(err)
        ErrChan <- err
    })
    <-ErrChan
}
```

## 发布事件
- managementClient.PubEvent(eventCode string, data interface{}) *dto.IsSuccessRespDto

### 参数
- eventCode `<string>`  事件编码
- data `<interface{}>` 事件体

### 示例
```go
type UserEvent struct {
    Id   string `json:"id"`
    Name string `json:"name"`
}
func TestClient_PubEvent(t *testing.T){
    ErrChan := make(chan error, 1)
    client, err := management.NewManagementClient(
        &management.ManagementClientOptions{
            AccessKeyId:     "ACCESS_KEY_ID",
            AccessKeySecret: "ACCESS_KEY_SECRET",
            Host:            "AUTHING_HOST",         // 私有化部署时需填写
            WssHost:         "AUTHING_SOCKET_HOST",  // 私有化部署时需填写
        },
    )
    if err != nil {
        log.Println(err)
    }
    data := &UserEvent{
        Id:   "3242342232323443",
        Name: "golang-management-test",
    }
    resp := client.PubEvent("EVENT_CODE", data)
    fmt.Println(resp)
}
```
