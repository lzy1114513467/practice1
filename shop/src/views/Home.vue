<template>
  <div class="containner">
   <div class="nav">
     <van-nav-bar title="首页" class="nav-title">
       <van-icon name="search" slot="left" />
       <van-icon name="shopping-cart-o" slot="right" />
     </van-nav-bar>
   </div>
   <!-- 轮播图 -->
   <div class="swppic">
     <van-swipe :autoplay="3000" >
      <van-swipe-item v-for="(item,index) in imagesItem" :key="index" class="swppicItem" >
        <img v-lazy="item.imgsrc" alt="">
        </van-swipe-item> 
    </van-swipe>
   </div>
   <!-- 热门商品 -->
   <div class="hot">
      <p class="hot-title">热门商品</p>
       <swiper class="hot-swiper" :options="swiperOption">

         <swiper-slide v-for="(item,index) in hotProducts" :key="index">
           <div class="hot-swiper-content">
             <img :src="item.img" alt="">
             <div>{{item.name}}</div>
             <div>￥{{item.price}}</div>
           </div>
         </swiper-slide>
      
      </swiper>
   </div>
   <!-- 推荐商品 -->
   <div class="varity">
     <p>推荐商品</p>
      <ul class="varity-ul" v-for="(item,index) in varityItem" :key="index">
        <li class="varity-ul-item">
          <img :src="item.img" alt="">
          <div>{{item.name}}</div>
          <div>{{item.price}}</div>
        </li>
      </ul>
   </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
 
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import axios from 'axios'
import url from '@/service.config.js'
export default {
  data(){
    return{
      imagesItem:[
        {
          name:"img1",
          imgsrc:'https://img.yzcdn.cn/vant/apple-1.jpg'
        },{
          name:"img2",
          imgsrc:'https://img.yzcdn.cn/vant/apple-2.jpg'
        },{
          name:"img3",
          imgsrc:'https://img.yzcdn.cn/vant/apple-1.jpg'
        }
      ],
       hotProducts:[

         {name:"手扶牧草收割机",
          img:"http://www.nongji1688.com/file/upload/201905/07/0920193925858.jpg",
         price:"3600",
         company:"曲阜市重机械制造有限公司",
         city:"曲阜市"
         },{name:"手扶牧草收割机",
          img:"http://www.nongji1688.com/file/upload/201905/07/0920193925858.jpg",
         price:"3600",
         company:"曲阜市重机械制造有限公司",
         city:"曲阜市"
         },{name:"手扶牧草收割机",
          img:"http://www.nongji1688.com/file/upload/201905/07/0920193925858.jpg",
         price:"3600",
         company:"曲阜市重机械制造有限公司",
         city:"曲阜市"
         },{name:"手扶牧草收割机",
          img:"http://www.nongji1688.com/file/upload/201905/07/0920193925858.jpg",
         price:"3600",
         company:"曲阜市重机械制造有限公司",
         city:"曲阜市"
         },{name:"手扶牧草收割机",
          img:"http://www.nongji1688.com/file/upload/201905/07/0920193925858.jpg",
         price:"3600",
         company:"曲阜市重机械制造有限公司",
         city:"曲阜市"
         },{name:"手扶牧草收割机",
          img:"http://www.nongji1688.com/file/upload/201905/07/0920193925858.jpg",
         price:"3600",
         company:"曲阜市重机械制造有限公司",
         city:"曲阜市"
         },{name:"手扶牧草收割机",
          img:"http://www.nongji1688.com/file/upload/201905/07/0920193925858.jpg",
         price:"3600",
         company:"曲阜市重机械制造有限公司",
         city:"曲阜市"
         },{name:"手扶牧草收割机",
          img:"http://www.nongji1688.com/file/upload/201905/07/0920193925858.jpg",
         price:"3600",
         company:"曲阜市重机械制造有限公司",
         city:"曲阜市"
         },{name:"手扶牧草收割机",
          img:"http://www.nongji1688.com/file/upload/201905/07/0920193925858.jpg",
         price:"3600",
         company:"曲阜市重机械制造有限公司",
         city:"曲阜市"
         },{name:"手扶牧草收割机",
          img:"http://www.nongji1688.com/file/upload/201905/07/0920193925858.jpg",
         price:"3600",
         company:"曲阜市重机械制造有限公司",
         city:"曲阜市"
         },
      ],
      swiperOption: {
         slidesPerView:3
        },
        varityItem:[
        //   {name:"手扶牧草收割机",
        //   img:"http://www.nongji1688.com/file/upload/201905/07/0920193925858.jpg",
        //  price:"3600",
        //  company:"曲阜市重机械制造有限公司",
        //  city:"曲阜市"
        //  },{name:"手扶牧草收割机",
        //   img:"http://www.nongji1688.com/file/upload/201905/07/0920193925858.jpg",
        //  price:"3600",
        //  company:"曲阜市重机械制造有限公司",
        //  city:"曲阜市"
        //  },{name:"手扶牧草收割机",
        //   img:"http://www.nongji1688.com/file/upload/201905/07/0920193925858.jpg",
        //  price:"3600",
        //  company:"曲阜市重机械制造有限公司",
        //  city:"曲阜市"
        //  },{name:"手扶牧草收割机",
        //   img:"http://www.nongji1688.com/file/upload/201905/07/0920193925858.jpg",
        //  price:"3600",
        //  company:"曲阜市重机械制造有限公司",
        //  city:"曲阜市"
        //  },{name:"手扶牧草收割机",
        //   img:"http://www.nongji1688.com/file/upload/201905/07/0920193925858.jpg",
        //  price:"3600",
        //  company:"曲阜市重机械制造有限公司",
        //  city:"曲阜市"
        //  },{name:"手扶牧草收割机",
        //   img:"http://www.nongji1688.com/file/upload/201905/07/0920193925858.jpg",
        //  price:"3600",
        //  company:"曲阜市重机械制造有限公司",
        //  city:"曲阜市"
        //  },{name:"手扶牧草收割机",
        //   img:"http://www.nongji1688.com/file/upload/201905/07/0920193925858.jpg",
        //  price:"3600",
        //  company:"曲阜市重机械制造有限公司",
        //  city:"曲阜市"
        //  },{name:"手扶牧草收割机",
        //   img:"http://www.nongji1688.com/file/upload/201905/07/0920193925858.jpg",
        //  price:"3600",
        //  company:"曲阜市重机械制造有限公司",
        //  city:"曲阜市"
        //  },{name:"手扶牧草收割机",
        //   img:"http://www.nongji1688.com/file/upload/201905/07/0920193925858.jpg",
        //  price:"3600",
        //  company:"曲阜市重机械制造有限公司",
        //  city:"曲阜市"
        //  },{name:"手扶牧草收割机",
        //   img:"http://www.nongji1688.com/file/upload/201905/07/0920193925858.jpg",
        //  price:"3600",
        //  company:"曲阜市重机械制造有限公司",
        //  city:"曲阜市"
        //  },{name:"手扶牧草收割机",
        //   img:"http://www.nongji1688.com/file/upload/201905/07/0920193925858.jpg",
        //  price:"3600",
        //  company:"曲阜市重机械制造有限公司",
        //  city:"曲阜市"
        //  },{name:"手扶牧草收割机",
        //   img:"http://www.nongji1688.com/file/upload/201905/07/0920193925858.jpg",
        //  price:"3600",
        //  company:"曲阜市重机械制造有限公司",
        //  city:"曲阜市"
        //  },{name:"手扶牧草收割机",
        //   img:"http://www.nongji1688.com/file/upload/201905/07/0920193925858.jpg",
        //  price:"3600",
        //  company:"曲阜市重机械制造有限公司",
        //  city:"曲阜市"
        //  },{name:"手扶牧草收割机",
        //   img:"http://www.nongji1688.com/file/upload/201905/07/0920193925858.jpg",
        //  price:"3600",
        //  company:"曲阜市重机械制造有限公司",
        //  city:"曲阜市"
        //  },{name:"手扶牧草收割机",
        //   img:"http://www.nongji1688.com/file/upload/201905/07/0920193925858.jpg",
        //  price:"3600",
        //  company:"曲阜市重机械制造有限公司",
        //  city:"曲阜市"
        //  },{name:"手扶牧草收割机",
        //   img:"http://www.nongji1688.com/file/upload/201905/07/0920193925858.jpg",
        //  price:"3600",
        //  company:"曲阜市重机械制造有限公司",
        //  city:"曲阜市"
        //  },{name:"手扶牧草收割机",
        //   img:"http://www.nongji1688.com/file/upload/201905/07/0920193925858.jpg",
        //  price:"3600",
        //  company:"曲阜市重机械制造有限公司",
        //  city:"曲阜市"
        //  },
        ]
      
    }
  },
  components: {
    swiper,
    swiperSlide
  }, 
  created() {
    let url1 = 'https://api.apiopen.top/getWangYiNews'
    let url2 =  'http://www.lzy.com/getlist'
    let url3 =  url.getvarityItem;
    axios.get(url3).then(
      (res)=>{
        console.log(res);
        this.varityItem = res.data;
      }
    ).catch(
      (err)=>{
        console.log("错误");
      }
    );
  },
}
</script>
<style lang="scss">
.containner{
  background: #ccc;
 
  margin-bottom: 2rem;
}
.nav-title{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99!important;

}
  .swppic{
    height:4rem;
    margin-top: 1.5rem;
  }
  .swppicItem img{
    width: 100rem;
    height:4rem;
  }
  .hot{
    margin-top: 0.2rem;
    background: white;
    &-title{
      width: 100%;
      height: 0.5rem;
      padding-left: 0.2rem;
      line-height: 0.5rem;
      box-sizing: border-box;
    }
    &-swiper{
      &-content{
        width: 2rem;
        text-align: center;
        img{
          width: 3rem;
          height: 3rem;
        }
      }
    }
  }
  //推荐商品
  .varity{
    padding-left: 0.2rem;
    margin-top: 0.2rem;
    background-color: white;
    display:block;
    overflow:hidden;
    
    &-ul{
      float: left;
      text-align: center;
      
      &-item{
       
        margin: 0 auto;
         margin-left: 1.2rem;
        img{
          width: 4rem;
          height: 4rem;
        }
      }
    }
  }
</style>
