<template>
  <div>
    <div :style="{ display: chooseLocation ? '' : 'none' }" class="cover-all">
      <form class="choose-location">
        <svg class="go-back-icon" @click="toMsite()">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-left"></use>
        </svg>
        <div class="title">选择地址</div>
        <input type="search" placeholder="请输入地址" autofocus="autofocus" class="search-input" v-model="placeWord" @change="nearby">
      </form>
      <div class="choose-location-height"></div>
      <!--搜索到的地址展示-->
      <section>
        <div class="address" v-for="(address, index) in addressList" @click="chooseAddress(index)">
          <p class="address-cell-1">{{address.name}}</p>
          <p class="address-cell-2">{{address.address}}</p>
        </div>
      </section>
      <!--没有搜到地址-->
      <section class="padt4" :style="{ display: addressList.length===0 ? '':'none' }">
        <section class="nodatatip">
          <img src="//github.elemecdn.com/eleme/fe-static/master/media/empty/no-shop.png">
          <h3>没有搜索结果</h3>
          <p>换个关键字试试</p>
          <!---->
        </section>
      </section>
    </div>

    <div :class=" isGetLocation ? '' : 'unscrollable' ">
      <header class="header">
        <div class="header-top">
          <div class="location">
            <svg class="location-icon">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#location"></use>
            </svg>
            <span class="location-text" @click="showChooseLocation()">{{ msiteTitle }}</span>
            <svg class="down-arrow-icon">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow"></use>
            </svg>
          </div>
          <!---->
        </div>
        <form action="">
          <input type="text" placeholder="搜索商家、商品" aria-label="搜索商家、商品" class="search">
        </form>
        <div class="hot-words"></div>
      </header>

      <section class="nodatatip">
        <img src="//github.elemecdn.com/eleme/fe-static/master/media/empty/error-locate.png">
        <h3>定位失败</h3>
        <button @click="showChooseLocation()">手动选择地址</button>
      </section>

      <foot></foot>

      <div class="back-top">
        <svg class="back-icon">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#back-top.7a234e5"></use>
        </svg>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import "../../style/common";
  @import "../../style/mixin";

  .choose-location{
    position: fixed;
    width: 100%;
    color: #fff;
    background-color: #0096ff;
    text-align: center;
    font-size: .32rem;
    padding-bottom: .32rem;

    .go-back-icon{
      position: absolute;
      left: .333333rem;
      top: .333333rem;
      fill: #fff;
      width: .533333rem;
      height: .533333rem;
    }

    .title{
      line-height: 1.173333rem;
      font-size: .48rem;
      color: #fff;
    }

    .search-input{
      margin-top: .133333rem;
      width: 90%;
      height: .733333rem;
      border-radius: .733333rem;
      padding: 0 .48rem;
      font-size: .346667rem;
    }

  }

  .choose-location-height{
    height: 2.346667rem;
  }

  .address{
    font-size: .32rem;
    background-color: #fff;
    padding: .266667rem .4rem;

    .address-cell-1{
      font-weight: 700;
      font-size: .373333rem;
    }

    .address-cell-2{
      color: #999;
      font-size: .32rem;
    }
  }

  .padt4{
    padding-top: 4rem;
  }

  .header{
    padding: .266667rem .373333rem;
    background-color: #0096ff;
    color: #fff;
    height: 3.253333rem;

    .header-top{
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
      justify-content: space-between;
      height: .92rem;

      .location{
        width: 60%;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;

        .location-icon{
          width: .346667rem;
          height: .413333rem;
          fill: #fff;
        }

        .location-text{
          margin: 0 .133333rem;
          font-size: .48rem;
          max-width: 80%;
          white-space: nowrap;
          overflow: hidden;
          color: #fff;
        }

        .down-arrow-icon{
          width: .186667rem;
          height: .093333rem;
          fill: #fff;
        }
      }
    }

    .search{
      display: block;
      margin: .2rem 0;
      width: 100%;
      height: .96rem;
      text-align: center;
      border-radius: .96rem;
      box-shadow: 0 0.026667rem 0.066667rem 0 rgba(0,0,0,.2);
      color: #333;
      font-size: .346667rem;
    }

    .hot-words{
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
      white-space: nowrap;
      overflow-x: auto;
    }
  }

  .nodatatip {
    margin-top: 4em;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;

    img {
      display: block;
      width: 4rem;
      height: 2.266667rem;
    }

    h3 {
      margin: .333333rem 0 .266667rem;
      color: #6a6a6a;
      font-weight: 400;
      font-size: .453333rem;
    }

    button {
      padding: .266667rem 0;
      width: 3.2rem;
      border: none;
      border-radius: .053333rem;
      background-color: #56d176;
      color: #fff;
      text-align: center;
      font-size: 1.2em;
      font-family: inherit;
    }
  }

  .back-top{
    position: fixed;
    right: .4rem;
    bottom: 2rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 1.133333rem;
    height: 1.133333rem;
    border: 1px solid #999;
    border-radius: 50%;
    background: #fff;
    -webkit-transition: opacity .3s;
    transition: opacity .3s;

    .back-icon{
      display: block;
      width: .533333rem;
      height: .533333rem;
      fill: #999;
    }
  }

</style>
<script>
    import {mapMutations} from 'vuex'
    import {cityGuess,msiteAdress,searchplace} from '../../service/getData'

    import foot from '../../components/footer/footer'

    export default{
        data(){
            return{
                geohash: '',
                msiteTitle: '获取地址中...',//地址
                isGetLocation: false,//是否已获取地址信息
                chooseLocation: false,//是否要选择地址
                placeWord: '',//搜索地址的关键字
                addressList: [],//搜索地址返回数据
            }
        },
        components:{
            foot,
        },
        beforeMount(){
            this.geohash =this.$store.state.geohash;
            //保存geohash
            this.save_geohash(this.geohash);
            //获取地址信息
            msiteAdress(this.geohash).then(res => {
              this.record_address(res);
              this.msiteTitle = res.name;
              this.isGetLocation = true;
            });
        },
        mounted(){
            cityGuess().then(res => {
              this.record_address(res);
            })
        },
        methods:{
            ...mapMutations([
                'record_address',
                'save_geohash'
            ]),
            showChooseLocation(){
                this.chooseLocation = true;
                this.isGetLocation = true;
            },
            toMsite(){
                this.chooseLocation = false;
                this.isGetLocation = false;
            },
            nearby(){
                if(this.placeWord){
                    searchplace(this.placeWord).then(res => {
                        this.addressList = res;
                    });
                }
            },
            chooseAddress(index){
              this.geohash = this.addressList[index]['geohash'];
              this.record_address(this.addressList[index]);
              this.msiteTitle = this.addressList[index].name;
              this.chooseLocation = false;
              this.isGetLocation = false;
            }
        }
    }
</script>
