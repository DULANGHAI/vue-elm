import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'

Vue.use(Vuex);

const state = {
  latitude: '',//纬度
  longitude: '',//经度
  geohash: 'wtw3sm0q087',//地址geohash值
  userInfo: null, //用户信息
};

export default new Vuex.Store({
  state,
  mutations
})
