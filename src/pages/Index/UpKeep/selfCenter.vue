<template>
    <div class="selfCenter-wrap mask">
       <ul class="selfCenter">
           <li>
               <div class="selfCenter_top">
                   <img src="" alt="">
                   <p class="selfCenter_top_p">谢勇强</p><p class="selfCenter_top_pd">2018.07.09 13:00</p>
               </div>
           </li>
       </ul>
    </div>
</template>

<script>
    export default {
        name: "selfCenter"
    }
</script>

<style scoped>
    .selfCenter_top{
        height: 1.04rem;
        background-color: #fff;
        display: flex;
        align-items: center;
        padding: 0.3rem;
        position: relative;
        border-bottom: 1px solid #efefef;
    }
    .selfCenter_top img {
        display: inline-block;
        width: 0.72rem;
        height: 0.72rem;
        background-color: #55b625;
    }
    .selfCenter_top_p{
        padding-left: 0.18rem;
        height: 0.4rem;
        color: #4f5256;
    }
    .selfCenter_top_pd{
        position: absolute;
        right: 0.28rem;
        height: 0.34rem;
        font-size: 0.24rem;
        color: #ababad;
    }
</style>