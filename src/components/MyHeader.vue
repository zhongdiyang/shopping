<template>
  <div>
    <div class="box greet">欢迎进入购物管理系统！</div>
    <div class="box login-box">
      <div class="login" v-if="false">
        <a href="javascript:void(0)">登录</a>
        <span>|</span>
        <a href="javascript:void(0)">注册</a>
      </div>
      <div class="l-success" >
        <Dropdown>
          <a href="javascript:void(0)">
            {{ username }}
            <Icon type="arrow-down-b"></Icon>
          </a>
          <Dropdown-menu slot="list">
            <Dropdown-item>驴打滚</Dropdown-item>
            <Dropdown-item>炸酱面</Dropdown-item>
            <Dropdown-item>豆汁儿</Dropdown-item>
            <Dropdown-item>冰糖葫芦</Dropdown-item>
            <Dropdown-item>北京烤鸭</Dropdown-item>
          </Dropdown-menu>
        </Dropdown>
        <span>|</span>
        <a href="javascript:void(0)">退出</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyHeader',
  data () {
    return {
      title: '购物管理系统1.0',
      theme1: 'dark',
      username: 'zdy'
    }
  }
}
</script>


<style scoped>
  .box{
    height: 60px;
    padding: 0 15px;
    line-height: 60px;
    color: azure;
    font-size: 14px;
  }
  .greet{
    margin-left: 30%;
  }
  .login span{
    margin: 0 2px;
  }
  .l-success a,.login a{
    display: -webkit-inline-box;
    padding: 0 30px;
    color: azure;
    font-size: 14px;
  }
  .l-success a:hover,.login a:hover{
    background: #363e4f;
  }
</style>
