<template>
    <div class="box">   
     <!-- <a href="#"> -->
          <div class="img"><img src="https://cn.vuejs.org/images/logo.png" ></div> 
          <div class="text">
                 <h3>提示文字</h3>
          </div>
     <!-- </a> -->
  </div>
</template>
<style>
    /* //设置遮罩层的大小 */
.box{
       position: relative;
       width: 350px;
       height: 350px;
}
/* //设置遮罩层中图片的大小 */
.box .img img{
       position: relative;
       width: 350px;
       height: 350px;
       max-width: 100%;
}
/* //设置提示文字的样式 */
.box .text {
       position: absolute;
       /* //这里还是子绝父相，使用最多 */
       top: 0;
       bottom: 0;
       left: 0;
       right: 0;
       text-align: center;
       -webkit-backface-visibility: hidden;
       /* //隐藏旋转元素的背面 */
       backface-visibility: hidden;
       background: rgba(0, 0, 0, 0.6);   
       /* //设置背景的透明度 */
       opacity: 0;
       -webkit-transition: all 0.35s ease-in-out;   
       /* //ease-in-out设置提示信息以慢速度开始和结束的过渡效果 */
       -moz-transition: all 0.35s ease-in-out;
       transition: all 0.35s ease-in-out;
       /* //加浏览器的私有前缀是考虑到兼容性问题 */
}
/* //下面这个很重要❤ */
.box:hover .text {
       opacity: 1;    
       /* //opacity从0变成1，从透明到不透明 */
}

</style>
