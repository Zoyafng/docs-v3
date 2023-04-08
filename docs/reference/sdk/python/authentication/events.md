## 订阅事件
- authenticationClient.sub_event(event_code,receiver)

### 请求参数
- event_Code `<string>`  事件编码
- receiver `<function>` 自定义接收器

### 代码示例
```python
client = AuthenticationClient(app_id="xxx",
                         app_host="https://myapp_site.authing.cn",
                         app_secret="xxx",
                         websocket_host="wss://events.authing.cn"
                         )
sign_in_resp = client.sign_in_by_email_password(
    email="sxy_1@qq.com",
    password="111"
)
# 获取 access_token
access_token = sign_in_resp["data"]["access_token"]
# 之后使用此 access_token 调用 AuthenticationClient 的 set_access_token 方法，AuthenticationClient 便可以调用获取用户资料、修改用户资料、获取角色列表等要求登录才能访问的接口了。
client.set_access_token(access_token)

client.sub_event("authing.user.updated",lambda msg:{
    print(msg)
})
```

## 发布事件
- authenticationClient.pubt_event(eventCode, data)

### 请求参数
- event_code `<string>` 事件编码
- data `<dict>` 事件体

### 代码示例
```python
client = AuthenticationClient(app_id="63f759f4fdc9e3c2f3e74738",
                         app_host="https://sxysdk.hydra.authing-inc.co",
                         app_secret="54fecbfd8e28b3f7c84daade9207543f",
                         websocket_host="wss://events.hydra.authing-inc.co"
                         )
sign_in_resp = client.sign_in_by_email_password(
    email="sxy_1@qq.com",
    password="111"
)
# 你可以从 sign_in_resp 中得到用户的 access_token，此 access_token 代表了用户访问接口的凭证
access_token = sign_in_resp["data"]["access_token"]
# 之后使用此 access_token 调用 AuthenticationClient 的 set_access_token 方法，AuthenticationClient 便可以调用获取用户资料、修改用户资料、获取角色列表等要求登录才能访问的接口了。
client.set_access_token(access_token)
event_code = "custom_aouaw.sxytestevent"
data = {"id":"myid"}
print(client.put_event(event_code,data))
```
