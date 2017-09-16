<template>
  <div class="layout" :class="{'layout-hide-text': spanLeft < 5}">
    <Row type="flex">
      <i-col :span="spanLeft" class="layout-menu-left">
        <sidebar></sidebar>
      </i-col>
      <i-col :span="spanRight">
        <div class="layout-header">
          <my-header class="header"></my-header>
        </div>
        <div class="layout-breadcrumb">
          <Breadcrumb>
            <Breadcrumb-item>
              <router-link to="">用户管理</router-link>
            </Breadcrumb-item>
            <Breadcrumb-item>
              <router-link to="">用户信息</router-link>
            </Breadcrumb-item>
            <Breadcrumb-item>详情</Breadcrumb-item>
          </Breadcrumb>
        </div>
        <div class="layout-content">
          <div class="layout-content-main">
            <router-view></router-view>
          </div>
        </div>
        <div class="layout-copy">
          2017-2018&copy; TalkingData
        </div>
      </i-col>
    </Row>
  </div>
</template>

<script>
  import Sidebar from '@/components/Sidebar'
  import MyHeader from '@/components/MyHeader'

  export default {
    name: 'Home',
    components: {
      Sidebar,
      MyHeader
    },
    data () {
      return {
        spanLeft: 5,
        spanRight: 19
      }
    },
    computed: {
    },
    methods: {
      getName (name) {
        console.log(name)
      }
    }
  }
</script>

<style>
  body,h1,h2,h3,h4,h5,h6,hr,p,blockquote,dl,dt,dd,ul,ol,li,pre,form,fieldset,legend,button,input,textarea,th,td {
    margin: 0;
    padding: 0
  }

  html,body{
    width: 100%;
    height: 100%;
  }
  html {
    color: #000;
    overflow-y: scroll;
  }

  body,button,input,select,textarea {
    font: 12px arial
  }

  h1,h2,h3,h4,h5,h6 {
    font-size: 100%
  }

  em {
    font-style: normal
  }

  small {
    font-size: 12px
  }

  ul,ol {
    list-style: none
  }

  a {
    text-decoration: none
  }

  a:hover {
    text-decoration: underline
  }

  legend {
    color: #000
  }

  fieldset,img {
    border: 0
  }

  button,input,select,textarea {
    font-size: 100%
  }

  table {
    border-collapse: collapse;
    border-spacing: 0
  }

  img {
    -ms-interpolation-mode: bicubic
  }

  textarea {
    resize: vertical
  }

  .left {
    float: left
  }

  .right {
    float: right
  }

  .overflow {
    overflow: hidden
  }

  .hide {
    display: none
  }

  .block {
    display: block
  }

  .inline {
    display: inline
  }
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .layout-breadcrumb{
    padding: 10px 15px 0;
  }
  .layout-content{
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
  }
  .layout-content-main{
    padding: 10px;
  }
  .layout-copy{
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
    position: absolute;
    width: 100%;
    height: 32px;
    line-height: 32px;
    bottom: 0;
  }
  .layout-menu-left{
    background: #464c5b;
  }
  .layout-header{
    height: 60px;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
    background: #464c5b;
  }
  .layout-logo-left{
    width: 90%;
    height: 30px;
    border-radius: 3px;
    margin: 15px auto;
  }
  .layout-ceiling-main a{
    color: #9ba7b5;
  }
  .layout-hide-text .layout-text{
    display: none;
  }
  .ivu-col{
    transition: width .2s ease-in-out;
  }
  .ivu-menu-dark {
    background: #464c5b;
  }
  .ivu-row-flex{
    height: 100%;
  }
  .header{
    display: flex;
    display: -webkit-flex; /* Safari */
    flex-flow: row nowrap;
    justify-content: space-between;
  }
</style>
