# 错误处理

Authing 小程序 SDK 所有方法都会返回 `Promise`，且提供了完善的错误处理机制。

你可以使用数组解构的方式获取 SDK 返回结果：

- 第一个参数 [error](https://docs.pre.authing.cn/v3/reference/sdk/miniapp/quick.html#errordata) 不为 `null` 时表示有错误产生，此时第二个参数是 `undefined`。

- 第二个参数作为成功返回的数据，如果没有异常，`error` 会被设为 `null`，第二个成功的数据就会被返回。

以获取用户信息为例：

``` typescript
const [error, userInfo] = await authing.getUserInfo()

if (error) {
  wx.showToast({
    title: error.message
  })
} else {
  console.log(userInfo)
}
```
