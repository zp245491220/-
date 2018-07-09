可以参考亚马逊的aws  lambda函数

理解：将一些无状态的函数计算抽离出来，独立部署和运算，通过函数的方式去调用
好处：传统的微服务中，每个服务中都有可能有一些只是计算的函数，运行时间很短暂，但是会一直处于内存中，函数计算就可以把这部分剥离出来，独立部署
后续微服务中无状态的服务也可以通过这种方式部署和执行，比如用户鉴权，定时计算的脚本等等

阿里云开通函数计算：https://fc.console.aliyun.com/overview/cn-shanghai
开通之后新建服务，新建函数。函数可以支持nodejs，python，java，go等语言
新建好之后，如果是http触发器，那么就可以通过http连接去请求，并得到返回值

serverless集成部署
如果函数多了，本地修改代码之后怎么直接生效到阿里云
参考：https://github.com/aliyun/serverless-aliyun-function-compute
实际为：把账户的东西交给插件，本地修改好代码之后，执行serverless的deploy命令，即可让阿里云中的函数生效，如果配合jekins发布，效果更佳。
