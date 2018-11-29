<template>
    <div>
    <Button type="primary" @click="getsome">Display dialog box</Button>
    <Modal
        v-model="modal1"
        title="Common Modal dialog box title"
        @on-ok="ok"
        @on-cancel="cancel">
        <p>{{ pieData }}</p>

    </Modal>
    </div>
</template>
<script>
import { getVersino } from '@/api/routers'
export default {
  data () {
    return {
      modal1: false,
      pieData: [
        {value: 335, name: '直接访问'},
        {value: 310, name: '邮件营销'},
        {value: 234, name: '联盟广告'},
        {value: 135, name: '视频广告'},
        {value: 1548, name: '搜索引擎'}
      ]
    }
  },
  methods: {
    ok () {
      getVersino().then((Response) => {
        console.log(Response)
      })
      this.$Message.info('Clicked ok')
    },
    cancel () {
      this.$Message.info('Clicked cancel')
    },
    getsome () {
      getVersino().then((response) => {
        console.log(response.data.value)
      })
    }
  }
}
</script>
