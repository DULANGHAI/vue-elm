import axios from 'axios'

/**
 * 开发环境用本地测试数据
 * 产品环境用真实数据
 * */
if(process.env.NODE_ENV == 'development'){
  /**
   * 获取默认地址
   * */
  var cityGuess = () => axios.get( '/v1/cities', {
    params: {
      type: 'guess'
    }
  }).then(res => {return res.data;});

  /**
   * 获取msite页面地址信息
   * */
  var msiteAdress = (geohash) => axios.get( '/v2/pois/' + geohash).then(res => {return res.data});

  /**
   * 获取搜索地址信息
   * */
  var searchplace = (word) => axios.get('/bgs/poi/search_poi_nearby',{
    params:{
      keyword: word,
      offset: 0,
      limit: 20
    }
  }).then(res => {return res.data;});

}else{
  var cityGuess = () => axios.get( 'https://mainsite-restapi.ele.me/v1/cities?type=guess');
}

export {
  cityGuess,
  msiteAdress,
  searchplace,
}
