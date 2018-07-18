<template>
    <div class="guideWrap mask">
        <p class="hotQuestion" v-for="item in defaultList">热点问题</p>

        <ul v-for="item in defaultList">
            <router-link to="/UserCenter/HelpConent">
                <li>
                    <span>{{item.title}}</span>
                    <div class="selfRight">
                        <img src="../../assets/images/rightArrow.png" alt="" class="rightArrow">
                    </div>
                </li>
            </router-link>
        </ul>

    </div>

</template>
<script>
    import {getHelpCenter} from "../../utils/api";

    export default {
        name: 'App',
        data() {
            return {
                defaultList: []
            }
        },
        created: function () {
        },
        mounted: function () {
            this._getHelpCenter()
        },
        methods: {
            _getHelpCenter() {
                getHelpCenter().then(res => {
                    this.defaultList = res
                    console.log(this.defaultList);
                })
            }
        }
    }

</script>
<style lang="scss" scoped>
    .guideWrap {
        width: 100%;
        height: 100%;
        font-size: .28rem;
        overflow: hidden;
        .hotQuestion {
            width: 100%;
            padding: .2rem;
            text-align: left;
            font-size: .26rem;
        }
        ul {
            width: 100%;
            background: #ffffff;
            padding-left: .2rem;
            box-sizing: border-box;
            .userLogo {
                padding: .6rem 0 !important;
            }
            li {
                width: 100%;
                position: relative;
                height: 1.1rem;
                line-height: 1.1rem;
                text-align: left;
                font-size: 0.28rem;
                border-bottom: solid 1px #efefef;
                .selfRight {
                    position: absolute;
                    right: .2rem;
                    top: 50%;
                    transform: translate(0, -50%);
                }
                .grayColor {
                    color: #bfbfbf;
                    font-size: .24rem;
                }
                img {
                    display: inline-block;
                }
                .defaultLogo {
                    width: 1rem;
                    height: 1rem;
                    vertical-align: middle;
                }
                .rightArrow {
                    width: .15rem;
                    padding-left: .15rem;
                    vertical-align: middle;
                }
            }
        }
    }

</style>
