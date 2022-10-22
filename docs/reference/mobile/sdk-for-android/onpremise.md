# 私有化部署

<LastUpdated/>

如果你使用的是私有化部署的 Authing IDaaS 服务，需要指定此 Authing 私有化实例的 `host`，需要在调用 Authing.init() **之前**先调用:

```java
Authing.setHost(String host)；   
```

- *`host`* 是[私有化域名](https://docs.authing.cn/v2/guides/customize/domain/customized-domain.html)，如：mycompany.com

如果你不清楚如何获取，可以联系 Authing IDaaS 服务管理员。