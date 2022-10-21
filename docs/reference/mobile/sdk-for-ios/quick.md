# 快速开始

<LastUpdated/>

## 操作步骤
### 步骤 1：新建 iOS 工程

![](./images/create_project1.png)

![](./images/create_project2.png)

### 步骤 2：在工程中添加 SDK 依赖

- 在 Xcode 菜单栏右上角选择 **File** 点击 **Add Packages** 。

- 在 Swift Package 搜索栏输入：https://github.com/Authing/authing-ios-sdk-v3 。

- 依赖规则选择 **Up to Next Major Version 1.0.0** 。

<br>

### 步骤 3：初始化

1. 在 AppDelegate 或 SceneDelegate 中加入 import Authing 。

2. 调用 Authing.start() 参数传入 [应用 ID](https://docs.authing.cn/v2/guides/faqs/get-app-id-and-secret.html)。

> Objective-C 项目需创建 Bridging-Header 桥接文件让 OC 与 Swift 互通。

```swift
import Authing

Authing.start(<#AUTHING_APP_ID#>)
 ```
 
<br>