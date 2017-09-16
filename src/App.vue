<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>

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
  .app{
    width: 100%;
    height: 100%;
  }
</style>
