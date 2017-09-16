<template>
  <div>
    <Table stripe :columns="columns1" :data="data1"></Table>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        index: '我是首页',
        columns1: [
          {
            type: 'selection',
            width: 60,
            align: 'center'
          },
          {
            title: '创建时间',
            key: 'createTime'
          },
          {
            title: '名称',
            key: 'name'
          },
          {
            title: '单价',
            key: 'price'
          },
          {
            title: '数量',
            key: 'number'
          },
          {
            title: '类别',
            key: 'type'
          },
          {
            title: '总价',
            key: 'total'
          },
          {
            title: '所需时间',
            key: 'time'
          },
          {
            title: '操作',
            key: 'action',
            fixed: 'right',
            width: 60,
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'text',
                    size: 'small'
                  }
                }, '查看')
              ])
            }
          }
        ],
        data1: []
      }
    }
  }
</script>


<style scoped>

</style>
