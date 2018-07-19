<template>
    <div class="evaluate-wrap mask">
        <ul class="ul_setion" v-for="item in evaluateList">
            <li>
                <div class="section">
                    <div class="section_big">
                        <img src="../../assets/images/个人中心-默认头像icon.png" class="section_img">
                        <div class="section_top">
                            <div class="section_top_top">
                                <p>{{item.buyname}}</p>
                                <p>{{item.buycarNo}}</p>
                                <p class="p_data">{{item.addtime}}</p>
                            </div>
                            <div class="section_top_center">
                                <p class="section_top_center_p">服务态度</p>
                            </div>
                            <div class="section_center" >
                                <span class="section_top_center_span" v-for="(items,index) in item.label">{{items[index]}}</span>
                            </div>
                            <div class="section_top_footer">{{item.message}}</div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import {
        getEvaluate

    } from '../../utils/api'

    export default {
        name: "evaluate",

        data() {
            return {
                // buycarNo: '',
                // buyname: '',
                // label: '',
                // message: '',
                evaluateList: []
            }
        },

        mounted() {
            this._getEvaluate()
        },
        methods: {
            _getEvaluate() {
                getEvaluate().then(res => {
                    this.evaluateList = res
                    // console.log(res[0].addtime);
                    console.log(res);
                    console.log(res[0].label);
                })
            }
        }

    }


</script>

<style scoped>
    .ul_setion{
        border-top: 1px solid #efefef;
    }
    .section {
        display: flex;
        width: 7.5rem;
        height: 3.08rem;
        /*background-color: #f00;*/
        background-color: #fff;
    }

    .section_img {
        width: 1rem;
        height: 1rem;
        position: absolute;
        left: 0.28rem;
        top: 0.3rem;
        border-radius: 100%;
    }

    .section_top_top {
        display: flex;
        flex-direction: row;

    }

    .section_top {
        margin-left: 1.56rem;
    }

    .section_big {
        margin-top: 0.4rem;
        width: 7.5rem;
        padding-right: 3%;
    }

    .p_data {
        position: absolute;
        right: 3%;
    }

    .section_top_center_span{
        display: inline-block;
        width: 1rem;
        height: 0.4rem;
        background-color: #ff6d83;
        /*color: #fff;*/
        border-radius: 10rem;
        text-align: center;
        margin-right: 0.08rem;
    }

    .section_top_footer,
    .section_center,
    .section_top_center p {
        margin-top: 3%;
    }

</style>
