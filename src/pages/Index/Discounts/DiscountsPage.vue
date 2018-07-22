<template>
    <div class="discounts-wrap mask">
        <div class="discounts">
            <div class="nav"></div>
            <ul class="banner-list">
                <li v-for="item in ActivityList">
                    <!--<img :src="item.pic" alt="">-->
                    <img src="../../../assets/images/特惠3_20180722164421.png" alt="">
                    <div class="times"><p>倒计时</p>:<p>{{time}}</p></div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {getActivity} from '../../../utils/api.js'

    export default {
        name: 'Discounts',
        data() {
            return {
                ActivityList: [],
                day: 0, hr: 0, min: 0, sec: 0,
                time: '',
                flag: false


            }
        },
        components: {},
        created() {

        },
        mounted() {
            this._getActivity()
            this.time = setInterval(() => {
                if (this.flag == true) {
                    clearInterval(time)
                }
                this.countdown()
            }, 1000)
        },
        methods: {
            _getActivity() {
                getActivity().then(res => {
                    this.ActivityList = res
                    // console.log(res[1].starttime);
                })
            },
            countdown() {          //倒计时
                getActivity().then(res => {
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
                    hr = hr > 9 ? hr : '0' + hr
                    min = min > 9 ? min : '0' + min
                    sec = sec > 9 ? sec : '0' + sec
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
    .discounts mask {

    }
    .discounts{
        position: relative;
        min-height: 17rem;
        background-color: #F3F3F3;
    }
    .nav {
        background-image: url('../../../assets/images/特惠背景_20180722164427.png');
        background-size: 100%;
        height: 3.66rem;
    }

    .discounts {
        .banner-list {
            padding-bottom: 2rem;
            position: absolute;
            margin-top: -.3rem;

            /*background-color: #fff;*/

            /*background-color: #f00;*/
            left: 50%;
            transform: translateX(-50%);
            li {
                /*margin-top: .2rem;*/
                min-height: 2.5rem;
                /*background-color: #fff;*/
                img {
                    width: 6.5rem;
                    /*height: 3.6rem;*/
                    display: inline-block;
                    border-radius: 10px;
                }
                .times {
                    display: flex;
                    font-size: 0.25rem;
                    margin-top: -.75rem;
                    margin-left: 2.4rem;
                    color: #fff;
                    p:last-child {
                        margin-left: .2rem;


                    }
                }
            }
        }
    }

</style>
