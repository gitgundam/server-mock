const http  = require('http') //把http变成对象

const fs = require('fs') //引入fs模块

const url = require('url') //把url变成对象

const server = http.createServer((req,res)=> {

let urlObj = url.parse(req.url)

  console.log(urlObj)//看看url对象里是什么
  //第三步,收到浏览器发送的ajax请求带上的'/getWeather'接口,于是向浏览器返回JSON的字符串
  if(urlObj.pathname === '/getWeather'){
    res.end(JSON.stringify({data:'晴'}))
  }else{
    //第一步,让浏览器打开http://localhost:8888,服务器响应,服务器向浏览器发送index.html
    res.end(fs.readFileSync(__dirname + '/index.html'))
  }
})

server.listen(8888)

console.log('open http://localhost:8888')