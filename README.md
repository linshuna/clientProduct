# e-client

### src目录说明

<pre>
├── build               // 构建服务和webpack配置
├── config              // 项目不同环境的配置
├── dist                // 项目build目录
├── index.html          // 项目入口文件
├── package.json        // 项目配置文件
├── src                 // 生产目录
│   ├── assets          // 公共的css js img资源        
│   ├── components      // 公用组件
│   ├── pages           // 页面组件
│   ├── App.vue         // 主页面 
│   ├── store           // vuex状态管理器
│   ├── utils           // 工具合集
│   ├── router          // 路由配置器
│   └── main.js         // Webpack 预编译入口
</pre>

## Build Setup

``` bash
# 项目的正确打开方式
npm install

npm run dll

npm run dev

npm run build

npm run build --report
```

## utlis工具使用说明

### api.js
```js
将对应的页面请求方法写在这里面进行统一管理
在组件内用 import { apiName } from '/utils/api.js' 引入所需的api方法
调用,params为请求参数,如无则不传,res已经过滤为response.data
apiName(params).then(res=>{
  console.log(res);
})
```

### utils.js

常用工具函数写在这个js里面

### axios.js

已经封装好了get,post两个常用请求方法,如需新增也在此增加

