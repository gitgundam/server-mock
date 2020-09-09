# 这是使用nodejs实现一个用于简易mock数据的server
## 具体实现的思路是这样的
首先要用node.js开启服务器,端口8888
- 第一步,让浏览器打开[http://localhost:8888](http://localhost:8888) 服务器响应,服务器向浏览器发送index.html
- 第二步,浏览器加载index.html,html中写了ajax,发送ajax请求[http://localhost:8888/getWeather] 到服务器
- 第三步,收到浏览器发送的ajax请求带上的'/getWeather'接口,于是向浏览器返回JSON的字符串
- 第四部,浏览器收到服务器返回的JSON字符串传,将其转换成对象,添加到span标签中
- 最终输入[http://localhost:8888] 实现下面的效果
- 

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200909155529250.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L01TNjMyNF9aQUtV,size_16,color_FFFFFF,t_70#pic_center)
