<template>
  <div class="home">
   <div>
     <van-nav-bar
     title="首页">
       <van-icon name="search" slot="left" />
       <van-icon name="shopping-cart-o" slot="right" />
     </van-nav-bar>
   </div>
   <!-- 轮播图 -->
   <div class="swppic">
     <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(item,index) in imagesItem" :key="index" class="swppicItem">
        <img v-lazy="item.imgsrc" alt="">
        </van-swipe-item> 
    </van-swipe>
   </div>
  </div>
</template>

<script>
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
      ]
       
      
    }
  }
}
</script>
<style lang="scss">
  .swppic{
    height:4rem;
  }
  .swppicItem img{
    width: 100rem;
    height:4rem;
  }
</style>
