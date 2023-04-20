## 订阅事件
- $management->sub("eventName", $callback, $errCallback, 5000);
> 使用 WebSocket 方式订阅 authing 产生的事件，eventCode 为事件编码，可在 [Authing API Explorer
](https://api-explorer.authing.cn/) 中查看可使用的事件。

### 参数
- event_code `<String>`  事件编码
- callback `<Function>` 自定义接收器
- err_callback `<Function>` 自定义错误接收器
- delay `<number>` 轮询延迟（默认 10s）

### 示例
```php
<?php
require __DIR__ . '/vendor/autoload.php';  // 看情况引入

use Authing\ManagementClient;

$management = new ManagementClient([
    "accessKeyId" => "ACCESS_KEY_ID",
    "accessKeySecret" => "ACCESS_KEY_SECRET",
    "socketHost" => "WEBSOCKET_URI",
]);

$callback = function ($data) {
    echo "收到消息: " . $data . "\n";
};

$errCallback = function ($error) {
    echo "发生错误: " . $error . "\n";
};

$management->sub("authing.test.event", $callback, $errCallback, 5000);
```
