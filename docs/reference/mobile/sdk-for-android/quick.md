# 快速开始

<LastUpdated/>

## 第一步：新建 Android 工程

<img src="./images/create_project1.png" alt="drawing" width="800"/>

<img src="./images/create_project2.png" alt="drawing" width="800"/>


::: hint-info
注意：Minimum SDK 版本 Android 7.0。
:::

## 第二步：添加 Guard 依赖

在工程根目录的 build.gradle	(4.2+以后的版本 AndroidStudio 创建的新工程在 setting.gradle) 文件里面需包含 mavenCentral：

 ```groovy
 buildscript {
    repositories {
        mavenCentral()
        // other repositories
    }
 }
 ```

在主工程的 build.gradle 文件里面添加依赖：

```groovy
implementation 'cn.authing:authing-android-sdk:+'
```

## 第三步：初始化

在应用启动时调用：

```java
// context is application or initial activity
// ”AUTHING_APP_ID“ is obtained from the Authing console
Authing.init(context, "AUTHING_APP_ID");
```

::: hint-info
注意：AUTHING_APP_ID 是应用 ID，不是用户池 ID，请先[前往控制台获取](https://docs.authing.cn/v2/guides/faqs/get-app-id-and-secret.html)。
:::



