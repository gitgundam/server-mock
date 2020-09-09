const http  = require('http') //把http变成对象

const fs = require('fs') //引入fs模块,主要用来加载文件的

const url = require('url') //把url变成对象

const server = http.createServer((req,res)=> {
  let pathObj=url.parse(req.url,true)
  //使用switch,在不同场景下使用不同的代码块,default为不存在case情况时执行
  switch(pathObj.pathname){
    case'/getWeather'://如果get请求发送在url后面带上?city=beijing
    if(pathObj.query.city === 'beijing'){
      res.end(JSON.stringify({city:'beijing',weather:'sunny'}))
    }else{//如果get请求发送在url后面带上?city=其他城市
      res.end(JSON.stringify({city:pathObj.query.city,weather:'unknown'}))
    }
    default:
      try{//如果是默认网址展示首页,如果其他pathname就读取其他pathname的文件地址.
        let pathname = pathObj.pathname === '/' ? '/index.html' : pathObj.pathname
        res.end(fs.readFileSync(__dirname+pathname))
      }catch(e){
        res.writeHead(404,'NotFound')
        res.end('<h1>404NotFound~</h1>')}
  }
})
server.listen(8080)//监听8080端口