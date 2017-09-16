<template>
  <div class="loginBox">
    <Tabs>
      <TabPane label="登录" icon="person">
        <Form ref="formCustom1" :model="formCustom1" abel-position="left" :rules="ruleCustom1" :label-width="80">
          <FormItem label="用户名：" prop="name">
            <Input type="text" v-model="formCustom1.name" placeholder="请输入你的用户名"></Input>
          </FormItem>
          <FormItem label="密码：" prop="passwd">
            <Input type="password" v-model="formCustom1.passwd" placeholder="请输入你的六位数密码" :maxlength=6></Input>
          </FormItem>
          <FormItem>
            <Button type="primary" @click="handleSubmit1('formCustom1')">登录</Button>
            <Button type="ghost" @click="handleReset('formCustom1')" style="margin-left: 8px">重置</Button>
          </FormItem>
        </Form>
      </TabPane>
      <TabPane label="注册" icon="person-add">
        <Form ref="formCustom" :model="formCustom" abel-position="left" :rules="ruleCustom" :label-width="80">
          <FormItem label="用户名：" prop="name">
            <Input type="text" v-model="formCustom.name" placeholder="请输入你的用户名"></Input>
          </FormItem>
          <FormItem label="密码：" prop="passwd">
            <Input type="password" v-model="formCustom.passwd" placeholder="请输入你的六位数密码" :maxlength=6></Input>
          </FormItem>
          <FormItem label="确认密码：" prop="passwdCheck">
            <Input type="password" v-model="formCustom.passwdCheck" placeholder="请再次输入你的六位数密码" :maxlength=6></Input>
          </FormItem>
          <FormItem>
            <Button type="primary" @click="handleSubmit('formCustom')">注册</Button>
            <Button type="ghost" @click="handleReset('formCustom')" style="margin-left: 8px">重置</Button>
          </FormItem>
        </Form>
      </TabPane>
    </Tabs>
  </div>
</template>
<script>
  export default {
    beforeCreate () {
//      console.log(window)
//      var user = JSON.parse(window.sessionStorage.getItem('shop_user'))
//      console.log(user)
//      if (user && user._id) {
//        this.$Message.success('用户已经登录，准备跳转，请稍后。。')
//        setTimeout(function () {
//          window.location.href = '/home?_id=' + user._id
//        }, 2000)
//      }
//      this.$http.get('http://localhost:3000/login?_id=123456')
//        .then((data) => {
//          console.log(data)
//        }).catch((err) => {
//          console.log(err)
//        })
    },
    data () {
      const validatePass = (rule, value, callback) => {
        if (value === '') {
          this.formCustom.passwd = ''
          callback(new Error('请输入密码'))
        } else if (!this.checkNumber(value)) {
          this.formCustom.passwd = ''
          return callback(new Error('请输入6位数字密码'))
        } else if (this.weakPasswd.some(function (item) { return item === value })) {
          this.formCustom.passwd = ''
          return callback(new Error('请输入强度高的6位数字密码'))
        } else {
          if (this.formCustom.passwdCheck !== '') {
            // 对第二个密码框单独验证
            this.$refs.formCustom.validateField('passwdCheck')
          }
          callback()
        }
      }
      const validatePassCheck = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'))
          this.formCustom.passwdCheck = ''
        } else if (!this.checkNumber(value)) {
          this.formCustom.passwdCheck = ''
          return callback(new Error('请输入6位数字密码'))
        } else if (this.weakPasswd.some(function (item) { return item === value })) {
          this.formCustom.passwdCheck = ''
          return callback(new Error('请输入强度高的6位数字密码'))
        } else if (value !== this.formCustom.passwd) {
          callback(new Error('两次输入密码不一致!'))
          this.formCustom.passwdCheck = ''
        } else {
          callback()
        }
//        setTimeout(() => {
//          console.log(60, this.formCustom)
//        }, 1000)
      }
      const validatepassword = (rule, value, callback) => {
        console.log(value)
        if (value === '') {
          this.formCustom1.passwd = ''
          return callback(new Error('请输入密码'))
        } else if (!this.checkNumber(value)) {
          this.formCustom1.passwd = ''
          return callback(new Error('请输入6位数字密码'))
        } else if (this.weakPasswd.some(function (item) { return item === value })) {
          this.formCustom1.passwd = ''
          return callback(new Error('请输入强度高的6位数字密码'))
        } else {
          callback()
        }
//        // 模拟异步验证效果
//        setTimeout(() => {
//          console.log(72, this.formCustom1)
//        }, 1000)
      }
      const validateAge = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('用户名不能为空'))
          this.formCustom1.name = ''
          this.formCustom.name = ''
        } else {
          callback()
        }
      }
      return {
        formCustom: {
          passwd: '',
          passwdCheck: '',
          name: ''
        },
        formCustom1: {
          passwd: '',
          name: ''
        },
        ruleCustom: {
          passwd: [
            { validator: validatePass, trigger: 'blur' }
          ],
          passwdCheck: [
            { validator: validatePassCheck, trigger: 'blur' }
          ],
          name: [
            { validator: validateAge, trigger: 'blur' }
          ]
        },
        ruleCustom1: {
          passwd: [
            { validator: validatepassword, trigger: 'blur' }
          ],
          name: [
            { validator: validateAge, trigger: 'blur' }
          ]
        },
        weakPasswd: ['111111', '222222', '333333', '444444', '555555', '666666', '777777', '888888', '999999', '123456', '234567', '345678', '456789']
      }
    },
    methods: {
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          console.log(valid)
          if (valid) {
            console.log(valid)
            let _id = this.generateUUID()
            let cryptoKey = this.$crypto.createHmac('sha256', 'shopping').update(this.formCustom.name).digest('hex')
            let pasd = this.$crypto.createHmac('sha256', cryptoKey).update(this.formCustom.passwd).digest('hex')
            let userData = {
              _id: _id,
              name: this.formCustom.name,
              password: pasd
            }
            this.$http({
              method: 'post',
              url: '/user',
              data: userData
            })
              .then((data) => {
                if (data.status === 200 && data.data.mark) {
                  this.$Message.success('注册成功!请稍后。。')
                  sessionStorage.setItem('shop_user', JSON.stringify(userData))
                  setTimeout(function () {
                    window.location.href = '/home?_id=' + _id
                  }, 2000)
                }
              })
              .catch((err) => {
                console.log(err)
              })

//            this.$Message.success('注册成功!请稍后。。')
//            console.log(window, global, this)
//            global.sessionStorage.setItem('shop_user', JSON.stringify(data))
//            setTimeout(function () {
//              window.location.href = '/home?_id=' + _id
//            }, 2000)
          }
        })
      },
      handleSubmit1 (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            console.log(this.formCustom1)
            let cryptoKey = this.$crypto.createHmac('sha256', 'shopping').update(this.formCustom1.name).digest('hex')
            let pasdd = this.$crypto.createHmac('sha256', cryptoKey).update(this.formCustom1.passwd).digest('hex')
            let data = {
              password: pasdd,
              name: this.formCustom1.name
            }
            // 查询用户信息
            this.$http.post('/login', data)
              .then((data) => {
                console.log(data)
                if (status === 200 && data.data.mark) {
                  this.$Message.success('登录成功!请稍后。。')
                  sessionStorage.setItem('shop_user', JSON.stringify(data))
                }
              })
              .catch((err, state) => {
                console.log(err, state)
              })
//            if (this.formCustom1.name === 'zdy' && this.formCustom1.passwd === '147258') {
//              var _id = '1'
//              var data = {
//                _id: _id,
//                name: this.formCustom1.name
//              }
//
//              setTimeout(function () {
//                window.location.href = '/home?_id=' + _id
//              }, 2000)
//              window.location.href = '/'
//            } else {
//              this.$Message.success('用户名密码错误!')
//            }
          }
        })
      },
      handleReset (name) {
        this.$refs[name].resetFields()
      },
      checkNumber (theObj) {
        var reg = /^\d{6}$/
        if (reg.test(theObj)) {
          return true
        }
        return false
      },
      generateUUID () {
        var d = new Date().getTime()
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
          var r = (d + Math.random() * 16) % 16 | 0
          d = Math.floor(d / 16)
          return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
        })
        return uuid
      }
    },
    watch: {
      'formCustom.name': {
        handler (val, oldVal) {
          console.log(val, oldVal)
          if (val) {
            console.log(this.serverAddress)
            let url = `/user?name=${val}`
            console.log(url)
            this.$http.get(url)
              .then((result) => {
                console.log(result.data.mark)
                if (!result.data.mark) {
                  this.$Message.error('用户名已占用，请重新输入。。')
                }
              })
              .catch((err, state) => {
                console.log(err, state)
              })
          }
        },
        deep: true
      }
    }
  }
</script>

<style>
  body{
    background: url("../assets/img/login-bg.jpg");
  }
  .loginBox{
    position: fixed;
    width: 320px;
    top: 20%;
    left: 50%;
    margin-left: -160px;
    border: 1px solid #2d8cf0;
    border-radius: 5px;
    padding: 15px;
    box-shadow: 1px 1px 10px #00bcd4;
    background: #fff;
  }
  .ivu-tabs-nav{
    width: 100%;
  }
  .ivu-tabs-nav .ivu-tabs-tab{
    width: 50% !important;
  }
  .ivu-tabs-ink-bar{
    width: 50% !important;
  }
</style>
