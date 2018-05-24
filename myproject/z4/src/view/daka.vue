<template>
  <div class="yd-flexview">
    <Header></Header>
    <Clockin></Clockin>
    <Lishi></Lishi>
  </div>

</template>

<script>
  import Header from '../components/header'
  import Lishi from '../components/ClockInList'
  import Clockin from '../components/clockin'

  export default {

    components: {
      Header,
      Lishi,
      Clockin
    },



  }
</script>

<style scoped>

</style>
