<template>
  <div id="index-wrap">
    <router-view  class="content-wrap"></router-view>
    <ul class="nav-wrap">
      <router-link class="item ac" tag="li" to="/"><van-icon name="send-gift-o"/>预定</router-link>
      <router-link class="item" tag="li" to="/ActivePage"><van-icon name="gem-o"/>活动</router-link>
      <router-link class="item" tag="li" to="/FindPage"><van-icon name="location-o"/>领券</router-link>
      <router-link class="item" tag="li" to="/UserPage"><van-icon name="friends-o"/>我的</router-link>
    </ul>
  </div>
</template>

<script>
import $ from 'jquery';
import { Icon } from 'vant';
export default {
  components: {
    "van-icon":Icon,
  },
  data:function(){
    return{

    }
  },
  methods:{

  },
  mounted() {
    $(".item").click(function(){
        $(this).addClass("ac").siblings().removeClass("ac");
    })
  },
}
</script>

<style lang="scss">
#index-wrap{
  background-color: $main-bc;
  display: flex;
  flex-flow:column nowrap;
  height: 100vh;
  .content-wrap{
    flex-grow: 1;
    overflow:hidden;
  }
  .nav-wrap{
    flex: 0 0 auto;
    height: 55px;
    width: 100%;
    border-top: 1px #eaeaea solid;
    display: flex;
    li{
      width: 93px;
      padding-top: 8px;
      flex: 1;
      text-align: center;
      font-size: 13px;
      line-height: 27px;
      .van-icon{
        display: block;
        font-size: 20px;
        line-height: 20px;
      }
    }
    .ac{
      color: $main-cl;
    }
  }
}
</style>
