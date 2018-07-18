<template>
    <div class="HelpConent-wrap mask">
        <div class="help-conent">
           <h3 class="Ttitle">{{PconentList.title}}</h3>
            <p class="Pconent">&nbsp;&nbsp;&nbsp;{{PconentList.content}}</p>
        </div>

    </div>
</template>

<script>
    import {getHelpDetails} from '../../utils/api.js'

    export default {
        data() {
            return {
                PconentList:''
            }
        },
        created: function () {
        },
        mounted: function () {
            this._getHelPconent()
        },
        methods: {
            _getHelPconent(){
                getHelpDetails().then(res =>{
                    this.PconentList = res
                    console.log(this.PconentList);
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

</style>