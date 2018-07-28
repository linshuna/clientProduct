<template>
    <div class="HelpConent-wrap">
        <div class="help-conent">
            <h3 class="Ttitle">{{PconentList.title}}</h3>
            <div class="Pconent" v-html="PconentList"></div>
        </div>

    </div>
</template>

<script>
    import {getHelpDetails} from '../../utils/api.js'

    export default {
        data() {
            return {
                id:'',
                PconentList:''
            }
        },
        created: function () {
            this.id = this.$route.params.help_id
        },
        mounted: function () {
            this._getHelPconent()
        },
        methods: {
            _getHelPconent(){
                getHelpDetails({help_id: this.id}).then(res =>{ //子路由获取父路由参数  这里是help_id
                    this.PconentList = this.$options.filters.unescape(res.content)
                })
            }
        }
    }
</script>

<style scoped>
    .Ttitle{
        text-align: center;
        font-size: .35rem;
    }
    .help-conent {
        padding: 0.3rem;
        background-color: white;
        font-size: 0.3rem;
    }
    .Pconent{
        padding: .3rem;
    }
    .Pconent img{
      width:100%;
    }
</style>