#基于react的全屏loading插件  

##React-loader-dev  
动画库样式基于spinkit

##安装
```js
npm i -S react-loading-dev
```  

##使用
```js
import Eloading from 'react-loading-dev'
<Eloading bgColor={'背景色'} name={'动画名称'} preview={'前景色'}/>
```

##参数
bgColor string: 支持rgb,rgba, 十六进制.  
name string: 'bounce', 'spinner', 'rect', 'cube', 'scaleout', 'dot', 'circle', 'skCircle', 'skGrid', 'fading', 'folding'.  
preview string 仅部分动画支持: 'bounce', 'spinner', 'rect', 'cube', scaleout', 'dot', 'skGrid', 