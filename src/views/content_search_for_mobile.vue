<style scope>
   .table_show_us{
       margin: 10px 15px;
       padding: 10px;
       background: #FFFFFF;
       border: 1px solid #ECECEC;
       box-shadow: 0 4px 4px 0 rgba(34,44,75,0.10);
       .title_mob{
           font-family: PingFangSC-Medium;
           font-size: 14px;
           color: #000000;
           margin-bottom: 10px;
       }
       .title_title{
           font-family: PingFangSC-Regular;
           font-size: 12px;
           color: #4E5056;
           padding: 5px 0;
       }
       .hopital_name{
           font-family: PingFangSC-Regular;
           font-size: 12px;
           color: #4E5056;
           line-height: 7px;
           height: 20px;
       }
       .line_css_mob{
           background: #ECECEC;
           height: 1px;
           width: 100%;
           margin-bottom: 5px;
       }
       .rebak_to_search{
           background: #FFFFFF;
           border: 1px solid #E7E7E7;
           border-radius: 15px;
           height: 30px;
           cursor: pointer;
           text-align: center;
           line-height: 30px;
           margin: 0 10px;
       }
       .msg_for_hopital{
           height: 30px;
           line-height: 30px;
           display: flex;
           justify-content: space-between;
           font-size: 12px;
           color: #9B9B9B;
           .value_msg{
               font-family: PingFangSC-Regular;
               font-size: 12px;
               color: #000000;
               text-align: right;
           }
       }
   }
</style>
<template>
    <div>
        <div class="mobile_phone">
            <basis_msg_mobile title_value="无"></basis_msg_mobile>
            <div class="table_show_us">
                <div class="title_mob">
                    报告编号：201500
                </div>

                <div style="margin-bottom: 10px">
                    <div class="title_title"></div>
                    <div class="hopital_name">患者信息</div>
                    <div class="line_css_mob"></div>
                    <div class="msg_for_hopital"><span>姓名</span><span class="value_msg">张三</span></div>
                    <div class="msg_for_hopital"><span>体重</span><span class="value_msg">张三</span></div>
                    <div class="msg_for_hopital"><span>过敏史</span><span class="value_msg">张三</span></div>
                    <div class="msg_for_hopital"><span>送检科室</span><span class="value_msg">张三</span></div>
                </div>
                <div style="margin-bottom: 10px">
                    <div class="title_title"></div>
                    <div class="hopital_name">患者信息</div>
                    <div class="line_css_mob"></div>
                    <div class="msg_for_hopital"><span>姓名</span><span class="value_msg">张三</span></div>
                    <div class="msg_for_hopital"><span>体重</span><span class="value_msg">张三</span></div>
                    <div class="msg_for_hopital"><span>过敏史</span><span class="value_msg">张三</span></div>
                    <div class="msg_for_hopital"><span>送检科室</span><span class="value_msg">张三</span></div>
                </div>

                <div class="rebak_to_search">返回</div>

            </div>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery';
    import basis_msg_mobile from './basis_msg_mobile.vue';
    export default {
        data () {
            return {

            }
        },
        components:{
            basis_msg_mobile
        },
        mounted(){

        },
        methods:{

        }
    }
</script>
