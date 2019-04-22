# 基于react的全屏loading插件  

## React-loader-dev  
动画库样式基于spinkit

## 安装  

```shell
npm i -S react-loading-dev
``` 

## 使用  

```js
import Eloading from 'react-loading-dev'
<Eloading bgColor={string} name={string} preview={string}/>
```

## 参数
### bgColor  
| 参数名称 | Type | 可选 | Default |
|- | :-: | :-:|  -: |
|bounce | string | rgba,十六进制 |  bgColor: '#1f4954',preview: 'rgba(0, 0, 0, .3)'|
|spinner | string | rgba,十六进制 | bgColor: '#d35400',preview:'#fff'|
|rect | string | rgba,十六进制 | bgColor: '#1abc9c',preview: '#fff' |
|cube | string | rgba,十六进制 | bgColor: '#2980b9',preview: '#fff' |
|scaleout | string | rgba,十六进制 | bgColor: '#7f8c8d',preview: '#fff' |
|dot | string | rgba,十六进制 | bgColor: '#ffcb65',preview: '#fff' |
|circle | string | rgba,十六进制 | bgColor: '#d35400',preview: '#fff' |
|skCircle | string | rgba,十六进制 | bgColor: '#27ae60',preview: '#fff' |
|skGrid | string | rgba,十六进制 | bgColor: '#d35400',preview: '#fff' |
|fading | string | rgba,十六进制 | bgColor: '#2c3e50',preview: '#fff' |
|folding | string | rgba,十六进制 | bgColor: '#1abc9c',preview: '#fff' |


### preview string 仅部分动画支持: 'bounce', 'spinner', 'rect', 'cube', scaleout', 'dot', 'skGrid', 