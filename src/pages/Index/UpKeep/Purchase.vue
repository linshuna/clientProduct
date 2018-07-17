<template>
    <div class="purchase-wrap mask">
        <div class="details-hd clearfix">
            <img src="../../../assets/images/maintain.png" alt="" class="hd-img fl">
            <div class="hd-info fl">
                <p class="car-name">德国顶级波箱油&nbsp;(12L)</p>
                <p class="car-number">宝马专用波箱油</p>
                <p class="car-many">x1</p>
                <p class="car-money">¥2815</p>
            </div>
        </div>


        <ul class="details-bd">
            <li>
                <div class="section">
                    <p class="left">选择汽车</p>
                    <img src="../../../assets/images/rightArrow.png" alt="" class="cell-img">
                </div>
            </li>
            <li class="cell">
                <p class="left">服务门店</p>
                <img src="../../../assets/images/rightArrow.png" alt="" class="cell-img">
            </li>
            <li class="cell">
                <p class="left">预约时间</p>
                <img src="../../../assets/images/rightArrow.png" alt="" class="cell-img">
            </li>
            <li class="cell">
                <p class="left">用户姓名</p>
                <input type="text" placeholder="请输入姓名" class="cell-input">
            </li>
            <li class="cell">
                <p class="left">用户电话</p>
                <input type="number" placeholder="请输入电话号码" class="cell-input">
            </li>

        </ul>
    </div>
</template>

<script>
    export default {
        name: "Purchase"
    }
</script>

<style lang="scss" scoped>
    .mint-navbar {
        background-color: #fff;
        border-bottom: 1px solid #eaeaea;
    }

    .mint-tab-item {
        margin: 0 .92rem;
        height: .84rem;
    }

    .mint-navbar .mint-tab-item.is-selected {
        border-bottom: 2px solid #fa9e15;
        color: #fa9e15;
    }

    .details-hd {
        width: 7.5rem;
        height: 2.78rem;
        background-color: #ffffff;
        .hd-img {
            width: 2.06rem;
            height: 2.12rem;
            margin: .3rem .32rem 0 .22rem;
            background-color: #ff0;
            position: relative;
        }

        .car-name {
            margin-top: 0.34rem;
            height: 0.4rem;
            font-size: 0.28rem;
            line-height: 0.4rem;
            color: #3b3b3b;
        }
        .car-many {
            height: 0.4rem;
            color: #9d9d9d;
            position: absolute;
            right: 0.34rem;
            font-size: 0.24rem;
            top: 0.75rem;
        }
        .car-number {
            height: 0.14rem;
            line-height: .34rem;
            font-size: 0.24rem;
            color: #d6d6d6;
        }
        .car-money {
            padding-top: 1.1rem;
            bottom: 0;
            height: 0.4rem;
            line-height: 0.4rem;
            color: #7e7f7e;
        }
        .edit-icon {
            position: absolute;
            top: 0.24rem;
            right: 0.24rem;
            width: 0.28rem;
            height: 0.28rem;
        }

    }

    .details-bd {
        margin-top: 0.2rem;
        /*padding: 0 .26rem;*/
        background-color: #fff;

        .section {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: 1.28rem;
            font-size: 0.28rem;
            border-bottom: 0.2rem solid #efeff4;
            padding-left: 0.24rem;
            padding-right: 0.34rem;
            .cell-img{
                width: 0.16rem;
                height: 0.16rem;
            }
        }
        .cell {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: 1.08rem;
            font-size: 0.28rem;
            border-bottom: 1px solid #eaeaea;
            padding-left: 0.24rem;
            padding-right: 0.34rem;
            .left {
                color: #333;
            }

            .cell-input {
                width: 80%;
            }
            .cell-img {
                width: 0.16rem;
                height: 0.16rem;
            }
            .right {
                color: #999;
            }
        }
    }

    .footer {
        margin-top: 0.1rem;
    }

    .footer_top {
        height: 0.42rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-left: 0.24rem;
        padding-right: 0.5rem;
    }

    .footer_top_right {
        display: flex;
        flex-direction: row;
    }

    .footer_footer {
        background-color: #fff;
    }

    .footer_footer_msg {
        display: flex;
        justify-content: space-between;
        padding-left: 0.24rem;
        padding-right: 0.5rem;
        height: 0.96rem;
        align-items: center;
        border-bottom: 1px solid #efefef;
    }

    .footer_footer_msg_right {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

    .footer_footer_msg_left p {
        font-size: 0.28rem;
        color: #333
    }

    .footer_footer_msg_right_pone {
        font-size: 0.30rem;
        color: #333;
    }

    .footer_footer_msg_right_ptwo {
        color: #ccc;
    }

    .rightArrow {
        width: 0.1rem;
        height: 0.1rem;
        padding-left: 0.08rem;
    }

</style>