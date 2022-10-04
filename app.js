const Koa = require('koa')

// 应用程序对象，对象上包含了很多中间件
const app = new Koa()

function test() {
  console.log('hello, herman')
}

// 注册
app.use(test)

app.listen(3000)