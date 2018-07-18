<template>
    <div class="discounts mask">
        <ul class="banner-list">
            <li v-for="item in ActivityList">
                <img :src="item.pic" alt="">
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
            }
        },
        components: {},
        created() {

        },
        mounted() {
            this._getActivity()
        },
        methods: {
            _getActivity() {
                getActivity().then(res => {
                    this.ActivityList = res
                    console.log(res[0].pic);
                })
            }
        },
    }

</script>

<style lang="scss" scoped>
    .discounts {
        .banner-list {
            padding-bottom: 2rem;
            li {
                margin-top: .2rem;
                img {
                    width: 7.5rem;
                    height: 3.6rem;
                }
            }
        }
    }

</style>
