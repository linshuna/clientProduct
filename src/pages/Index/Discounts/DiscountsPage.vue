<template>
    <div class="discounts-wrap mask">
        <div class="discounts">
            <div class="nav"></div>
            <ul class="banner-list">
<<<<<<< HEAD
                <li v-for="(item,index) in ActivityList">
                    <!--<img :src="item.pic" alt="">-->
                    <img :src="item.pic" alt="">
                    <div class="times">
                      <p>倒计时</p>:
                      <p>{{item.djs}}</p>
                    </div>
=======
                <li v-for="item in ActivityList">
                    <!--<img :src="item.pic" alt="">-->
                    <img src="../../../assets/images/特惠3_20180722164421.png" alt="">
                    <div class="times"><p>倒计时</p>:<p>{{time}}</p></div>
>>>>>>> 61cf0832abcd706603c243b3e1776be136ec67f6
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
<<<<<<< HEAD
function InitTime(starttime,endtime){
    var dd,hh,mm,ss = null;
    var time = new Date(endtime).getTime() - new Date().getTime();
    if(time<=0){
        return '结束'
    }else{
        dd = Math.floor(time / 1000 / 60 / 60 / 24);
        hh = Math.floor((time / 1000 / 60 / 60) % 24);
        mm = Math.floor((time / 1000 / 60) % 60);
        ss = Math.floor((time / 1000) % 60);
        var str = dd+"天"+hh+"小时"+mm+"分"+ss+"秒";
        return str;
    }
}
=======
>>>>>>> 61cf0832abcd706603c243b3e1776be136ec67f6
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
<<<<<<< HEAD
          
          this.$nextTick(()=>{
            this._getActivity();
            let _this = this;
            setInterval( ()=> {
              for (var key in _this.ActivityList) {
                  var aaa = new Date(_this.ActivityList[key]["endtime"] ).getTime();
                  var bbb = new Date().getTime();
                  var rightTime = aaa - bbb;
                  if (rightTime > 0) {
                      var dd = Math.floor(rightTime / 1000 / 60 / 60 / 24);
                      var hh = Math.floor((rightTime / 1000 / 60 / 60) % 24);
                      var mm = Math.floor((rightTime / 1000 / 60) % 60);
                      var ss = Math.floor((rightTime / 1000) % 60);
                  }
                  _this.$set(_this.ActivityList[key],'djs',dd + "天" + hh + "小时" + mm + "分" + ss + "秒")
              }
            }, 1000)
          })
            
=======
            this._getActivity()
            this.time = setInterval(() => {
                if (this.flag == true) {
                    clearInterval(time)
                }
                this.countdown()
            }, 1000)
>>>>>>> 61cf0832abcd706603c243b3e1776be136ec67f6
        },
        methods: {
            _getActivity() {
                getActivity().then(res => {
                    this.ActivityList = res
                    res.map((item,index)=>{
                      this.$set(item,'djs',InitTime(item.starttime,item.endtime));
                    })
                })
            },
<<<<<<< HEAD

            countdown(index) {          //倒计时
                // 目标日期时间戳
                const end = Date.parse(new Date())
                // 当前时间戳
                const now = Date.parse(new Date('2018-1-10'))
                 // 相差的毫秒数
                const msec = end - now
                // 计算时分秒数
                let day = parseInt(msec / 1000 / 60 / 60 / 24)
                let hr = parseInt(msec / 1000 / 60 / 60 % 24)
                let min = parseInt(msec / 1000 / 60 % 60)
                let sec = parseInt(msec / 1000 % 60)
                // 个位数前补零
                hr = hr > 9 ? hr : '0' + hr
                min = min > 9 ? min : '0'+ min
                sec = sec > 9 ? sec : '0'+ sec;
                // 控制台打印
                // console.log(`${day}天 ${hr}小时 ${min}分钟 ${sec}秒`)
                // console.log(day,hr,min,sec)
                this.$set(this.ActivityList[index],'day',day)
                this.$set(this.ActivityList[index],'hr',hr)
                this.$set(this.ActivityList[index],'min',min)
                this.$set(this.ActivityList[index],'sec',sec)
                const _this = this;
                let timer =  setInterval(() => {
                    if (this.flag == true) {
                        clearInterval(timer)
                    }
                    // 一秒后递归
                    _this.countdown(index)
                }, 1000)  
=======
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
>>>>>>> 61cf0832abcd706603c243b3e1776be136ec67f6

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
<<<<<<< HEAD
        background-image: url('../../../assets/images/特惠背景.png');
=======
        background-image: url('../../../assets/images/特惠背景_20180722164427.png');
>>>>>>> 61cf0832abcd706603c243b3e1776be136ec67f6
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
