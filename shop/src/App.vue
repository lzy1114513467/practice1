<template>
  <div id="app">
    <div id="nav">
      <ul class="footbar">
        <li class="footbarItem">
          <router-link to="/">首页</router-link>
          </li>
        <li class="footbarItem">
          <router-link to="mine">我的</router-link>
          </li>
        <li class="footbarItem">
          <router-link to="classfy">分类</router-link>
          </li>
        <li class="footbarItem">
          <router-link to="shoppingcar">购物车</router-link>
          </li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
.footbar{
  display:flex;
  background: #ccc;
  position:fixed;
  bottom: 0;
  width: 100%;
  height: 1rem;
  line-height: 1rem;
}
.footbarItem{
  flex-grow: 1;
  text-align: center;
  font-size: 18px;
}
</style>
