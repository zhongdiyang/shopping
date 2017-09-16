/**
 * Created by Administrator on 2017/9/11.
 */
let express = require('express')
let bodyParser = require('body-parser')

let app = express()

// post 请求需设置的两个全局参数
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const port = 3000

// 临时的数组，用来存储用户
let arr = [{ _id: '756856f5-e39e-4bb4-b07a-72038a4d10d8',
  name: '111',
  password: '111112' }]

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', ' 3.2.1')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})

// 登录模块
app.post('/login', function (req, res) {
  console.log(req.body)
  console.log(arr)
  if (req.body.name && req.body.password) {
    let dataMark = arr.some((item) => {
      console.log(item.name, req.body.name)
      return item.name === req.body.name && item.password === req.body.password
    })
    if (dataMark) {
      res.send(200, JSON.stringify({mes: '登录成功！', mark: true}))
    } else {
      res.send(200, JSON.stringify({mes: '用户名密码错误！', mark: false}))
    }
  }
})

// 用户模块

app.get('/user', (req, res) => {
  if (req.query) {
    if (req.query.name && !req.query.password) {
      // 获取数据库中所有的用户名信息
      // let data = ['zd', '123', '456']
      let dataMark = arr.some((item) => item.name === req.query.name)
      let renderData = {
        state: 200
      }
      if (dataMark) {
        //
        renderData.mes = '用户名已存在！'
        renderData.mark = false
        res.send(200, JSON.stringify(renderData))
      } else {
        renderData.mes = '用户名可以使用！'
        renderData.mark = true
        res.send(200, JSON.stringify(renderData))
      }
    }
  }
})

  // 用户注册
app.post('/user', (req, res) => {
  console.log(req.body)
  if (req.body) {
    // 进行数据库的插入操作
    arr.push(req.body)
    res.send(200, JSON.stringify({mes: 'success', mark: true}))
  } else {
    res.send(405, JSON.stringify({mes: 'fail', mark: false}))
  }
})

console.log('已开启服务器，端口：' + port)
app.listen(port)
