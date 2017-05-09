<template>
    <div>
      <footer class="footer">
        <div class="foot-guide">
          <router-link to="/msite" class="guide-item">
            <svg class="icon">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#index.18edf5a"></use>
            </svg>
            <span class="icon-word currentPage">外卖</span>
          </router-link>

          <router-link to="/msite" class="guide-item">
            <svg class="icon">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#discover-regular.8ef537f"></use>
            </svg>
            <span class="icon-word">发现</span>
          </router-link>

          <router-link to="/msite" class="guide-item">
            <svg class="icon">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#order-regular.41c17f8"></use>
            </svg>
            <span class="icon-word">订单</span>
          </router-link>

          <router-link to="/msite" class="guide-item">
            <svg class="icon">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#profile-regular.c151d62"></use>
            </svg>
            <span class="icon-word">我的</span>
          </router-link>
        </div>
      </footer>
    </div>
</template>
<style lang="scss" scoped>
  @import "../../style/mixin";

  .footer{
    height: 1.6rem;
  }
  .foot-guide{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    @include flex();
    @include flex-center();
    padding-top: .12rem;
    background-color: $fc;
    height: 1.333333rem;
    box-shadow: 0 -0.026667rem 0.053333rem rgba(0,0,0,.1)
  }
  .guide-item{
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: block;
    width: 0;
    text-align: center;
  }
  .icon{
    width: .533333rem;
    height: .533333rem;
  }
  .icon-word{
    display: block;
    color: #666;
    font-size: .266667rem;
  }
  .currentPage{
    color: #0089dc;
  }
</style>
<script>
    export default{
        data(){
            return{

            }
        }
    }
</script>
