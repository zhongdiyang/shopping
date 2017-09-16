<template>
  <Menu active-name="1" theme="dark" width="auto" :open-names="['3']" accordion on-open-change="getName">
    <h1 class="layout-logo-left">
      {{ title }}
    </h1>
    <Submenu name="1">
      <template slot="title">
        <Icon type="stats-bars"></Icon>
        内容展示
      </template>
      <Menu-group title="开支">
        <Menu-item name="1-1">衣</Menu-item>
        <Menu-item name="1-2">食</Menu-item>
        <Menu-item name="1-3">住</Menu-item>
        <Menu-item name="1-4">行</Menu-item>
        <Menu-item name="1-5">其他</Menu-item>
        <Menu-item name="1-6">总计</Menu-item>
      </Menu-group>
      <Menu-group title="收入">
        <Menu-item name="1-7">工资收入</Menu-item>
        <Menu-item name="1-8">上月结余</Menu-item>
      </Menu-group>
    </Submenu>
    <Submenu name="2">
      <template slot="title">
        <Icon type="ios-paper"></Icon>
        内容管理
      </template>
      <Menu-item name="2-1">新增每次消费</Menu-item>
      <Menu-item name="2-2">修改有误消费</Menu-item>
      <Menu-item name="2-3">增加收入金额</Menu-item>
    </Submenu>
    <Submenu name="3">
      <template slot="title">
        <Icon type="ios-people"></Icon>
        用户管理
      </template>
      <Menu-item name="3-1">用户信息详情</Menu-item>
      <Menu-item name="3-2">新增用户信息</Menu-item>
      <Menu-item name="3-3">查询用户信息</Menu-item>
      <Menu-item name="3-4">修改用户信息</Menu-item>
    </Submenu>
  </Menu>

</template>

<script>
export default {
  name: 'sidebar',
  data () {
    return {
      theme2: 'dark',
      title: '购物管理系统1.0'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1{
    font-size: 16px;
    text-align: center;
    color: #fff;
    line-height: 32px;
    background: #464c5b;
  }
</style>
