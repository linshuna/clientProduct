<template>
    <div class="discounts mask" >

        <ul class="banner-list">
            <li v-for="item in ActivityList">
                <img :src="item.pic" alt="">
                <div class="times"><p>倒计时</p>:<p>{{time}}</p></div>
            </li>
        </ul>
    </div>
</template>

<script>
    import { getActivity } from '../../../utils/api.js'
    export default {
        name: 'Discounts',
        data() {
            return {
                ActivityList: [],
                day: 0, hr: 0, min: 0, sec: 0,
                time:'',
                flag : false


            }
        },
        components: {},
        created() {

        },
        mounted() {
            this._getActivity()
            this.time = setInterval(()=>{
                if(this.flag == true){
                    clearInterval(time)
                }
                this.countdown()
            },1000)
        },
        methods: {
            _getActivity() {
                getActivity().then(res => {
                    this.ActivityList = res
                    // console.log(res[1].starttime);
                })
            },
            countdown () {          //倒计时
                getActivity().then(res =>{
                    console.log(res[1].starttime);
                    // 目标日期时间戳
                const end = Date.parse(new Date(res[1].starttime))
                // 当前时间戳
                const now = Date.parse(new Date())
                // 相差的毫秒数
                const msec = end - now
                // 计算时分秒数
                let day = parseInt(msec / 1000 / 60 / 60 / 24)
                let hr = parseInt(msec / 1000 / 60 / 60 % 24)
                let min = parseInt(msec / 1000 / 60 % 60)
                let sec = parseInt(msec / 1000 % 60)
                // 个位数前补零
                hr = hr > 9 ? hr :'0' + hr
                min = min > 9 ? min :'0' + min
                sec = sec > 9 ? sec :'0' + sec
                // 控制台打印
                console.log(`${day}天 ${hr}小时 ${min}分钟 ${sec}秒`)
                // 一秒后递归
                this.time = `${day}天${hr}小时${min}分${sec}秒`
                // setTimeout(function () {
                //     countdown()
                // }, 1000)
                })

            }
        },
    }

</script>

<style lang="scss" scoped>
    .discounts mask{

    }
    .discounts {
        .banner-list {
            padding-bottom: 2rem;
            position: relative;
            min-height: 17rem;
            background-color: #efefef;
            /*background-color: #f00;*/
            li {
                margin-top: .2rem;
                min-height: 4rem;
                background-color: #fff;
                img {
                    width: 7.5rem;
                    height: 3.6rem;
                }
                .times{
                    display: flex;
                    position: absolute;
                    right: .3rem;
                    font-size: 0.25rem;
                    p:last-child{
                        margin-left: .2rem;

                    }
                }
            }
        }
    }

</style>
