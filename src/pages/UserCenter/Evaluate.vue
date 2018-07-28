<template>
    <div class="evaluate-wrap mask">
        <template v-if="evaluateList&&evaluateList.length>0">
        <ul class="ul_setion" v-for="item in evaluateList">
            <li>
                <div class="section">
                    <div class="section_big">
                        <img :src="item.pic" class="section_img">
                        <div class="section_top">
                            <div class="section_top_top">
                                <p>{{item.name}}</p>
                                <!--<p>{{item.buycarNo}}</p>-->
                                <p class="p_data">{{item.addtime}}</p>
                            </div>
                            <div class="section_top_center">
                                <p class="section_top_center_p">我的点评</p>
                                <div class="star-box">
                                    <score-lv :stars='parseInt(item.evaluatenum-0)'></score-lv>
                                </div>
                            </div>

                            <!--<div class="section_center" >-->
                                <!--<span class="section_top_center_span" v-for="(items,index) in item.label">{{items[index]}}</span>-->
                            <!--</div>-->
                            <div class="section_top_footer">{{item.message}}</div>
                        </div>
                    </div>
                </div>

            </li>
        </ul>
        </template>
        <template v-else>
            <no-data-tip :tipData="{typeTipe:0,conTip:'暂无评论'}"></no-data-tip>
        </template>
    </div>

</template>

<script>
    import {getEvaluate} from '../../utils/api'
    import {score} from "mixins";
    import { Toast } from 'mint-ui';
    import noDataTip from '@/components/noDataTip'

    export default {
        components:{
            'no-data-tip': noDataTip
        },
        name: "evaluate",
        mixins: [score],
        data() {
            return {
                evaluateList: [],
                clientvid:0
            }
        },

        mounted() {
            // this._getEvaluate()
            let getStorage = this.$store.getters.getStorage;        //获取用户ID
            if(getStorage){
                this.clientvid = this.$store.getters.getStorage.vid;
                this._getEvaluate()
            }
        },
        methods: {
            _getEvaluate() {
                getEvaluate({clientvid: this.clientvid}).then(res => {
                    if (res&&!res.errorCode) {
                        this.evaluateList = res
                    }else{
                        // Toast('暂无点评')
                    }
                    // console.log(res[0].addtime);
                    // console.log(res);

                    // console.log(this.clientvid);
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
        min-height: 2.5rem;
        /*background-color: #f00;*/
        background-color: #fff;
        border-bottom: 1px solid #efefef;
    }

    .section_img {
        width: 1rem;
        height: 1rem;
        position: absolute;
        left: 0.28rem;
    }

    .section_top_top {
        display: flex;
        flex-direction: row;

    }

    .section_top {
        margin-left: 1.56rem;
    }

    .section_big {
        padding-top: 0.4rem;
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
    .section_top_center{
        display: flex;
    }
    .section_top_footer,
    .section_center,
    .section_top_center p {
        margin-top: 3%;

    }
    .section_top_footer{
        position: absolute;
        left:.3rem;
    }
    .star-box{
        display: flex;
        align-items: center;
        margin-top:2.3%;
        margin-left: .1rem;
    }


</style>
