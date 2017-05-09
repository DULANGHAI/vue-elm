export default {
  /**
   * 保存经纬度
   * */
  record_address(state, { latitude, longitude }){
    state.latitude = latitude;
    state.longitude = longitude;
  },
  /**
   * 保存geohash
   * */
  save_geohash(state, geohash){
    state.geohash = geohash;
  },

}
