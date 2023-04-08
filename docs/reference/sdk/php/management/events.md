## 订阅事件
- $management->sub("eventName", $callback, $errCallback, 5000);
> 使用接口可以订阅 authing 产生的事件，eventCode 为事件编码，可在 authing 控制台 查看。

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
