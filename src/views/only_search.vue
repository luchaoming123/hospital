<style scope>
    .search_only{
        .detail_show{
            display: flex;
            .title{
                background: #FFFFFF!important;
                box-shadow: 0 4px 4px 0 rgba(34,44,75,0.10);
                border: 1px solid #efefef;
                .input_show{
                    height: 400px;
                    display: flex;
                    justify-content: center;
                    margin: 10px 300px 100px 0;
                    position: relative;
                    .shadow_display_none{
                        height: 52px;
                        position: absolute;
                        z-index: 1000;
                        width: 100%;
                        background-color: #fff;
                    }
                    .box_data{
                        position: absolute;
                        bottom: -30px;
                        left: 36%;
                        display: flex;
                        font-family: PingFangSC-Regular;
                        font-size: 12px;
                        color: #9B9B9B;
                        line-height: 14px;
                    }
                }
                .time_limit_confirm{
                    text-align: center;
                    .button_click{
                        padding: 5px 60px;
                        margin: -30px 0 30px;
                        background: #E6655F;
                        border-radius: 22px;
                        height: 40px;
                        width: 240px;
                        border: 1px solid #E6655F;
                    }
                }
            }
        }
    }

    .box_flowing{
        display: flex;
    }
    .xu_ni{
        width: 16%;
        height: 900px;
    }

    .el-date-table td.end-date span, .el-date-table td.start-date span{
        background-color: #E6655F!important;
        opacity: 1!important;
    }
    /*.in-range div{
        background-color: #E6655F!important;
        opacity: 0.3!important;
    }*/
    .today span{
        color: #E6655F!important;
    }
</style>
<template>
    <div class="search_only">
        <baisis_msg></baisis_msg>
        <div class="detail_show">
            <div class="xu_ni"></div>
            <div class="contents_detail">
                <div class="title_tagss">
                    <div class="postitaons">
                        <i style="font-size: 8px;color: #D8D8D8;" class="icon iconfont icon-arrow-"></i>

                        <span>首页</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <i style="font-size: 8px;color: #D8D8D8;" class="icon iconfont icon-arrow-"></i>

                        <span>压力反应测试</span>
                    </div>
                    <div class="postitao_ctr">
                        <i style="font-size: 8px;color: #D8D8D8;" class="icon iconfont icon-remind-"></i>
                        <span class="center_tlt">请选择送检时间范围</span>
                    </div>
                </div>
                <div class="title" style="background: #f8f8f9">
                    <div class="input_show">
                        <div class="shadow_display_none"></div>
                        <el-date-picker
                                v-model="value6"
                                type="daterange"
                                format="yyyy-MM-dd "
                                @change="date_change()"
                                @blur="date_change_two()"
                                style="position: relative"
                        >
                        </el-date-picker>

                        <div class="box_data">
                            <div style="width: 320px">
                               <i style="font-size: 14px;color: #D8D8D8;margin-top:-4px;" class="icon iconfont icon-time-"></i>
                                &nbsp;&nbsp;
                                <span>开始时间：</span>
                                <span>{{start_time}}</span>
                            </div>
                            <div>
                                <i style="font-size: 14px;color: #D8D8D8;margin-top:-4px;" class="icon iconfont icon-time-"></i>
                                &nbsp;&nbsp;
                                <span>结束时间：</span>
                                <span>{{end_time}}</span>
                            </div>
                        </div>

                    </div>
                    <div class="time_limit_confirm">
                        <Button class="button_click" style="" v-on:click="search_list()" type="primary" shape="circle">开始查询</Button>
                    </div>
                </div>
            </div>

        </div>

        <div class="box_logo_bottom">
            <div class="xu_ni_new"></div>
            <img height="30" src="../images/mindfrog.png" alt="">

            <span>
                &nbsp;&nbsp;&nbsp;&nbsp;Copyright © Mindfrog All rights reserved
            </span>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery'
    import baisis_msg from './basis_msg.vue'
    export default {
        data () {
            return {
                value6: '',
                start_time:'',
                end_time:''
            }
        },
        components:{
            baisis_msg
        },
        mounted(){
            $('.el-date-editor ').click();
        },
        methods:{
            exit(){

            },
            date_change(e){
                console.log(this.value6);
                $('.el-date-editor ').click();

                let start_time=this.value6[0];
                let end_time=this.value6[1];

                let datas=new Date(start_time);
                let y=datas.getFullYear();
                let m=datas.getMonth()+1;
                let d=datas.getDate();
                let ds=datas.getDay();
                switch (ds){
                    case 1:
                        ds='一';
                        break;
                    case 2:
                        ds='二';
                        break;
                    case 3:
                        ds='三';
                        break;
                    case 4:
                        ds='四';
                        break;
                    case 5:
                        ds='五';
                        break;
                    case 6:
                        ds='六';
                        break;
                    case 7:
                        ds='天';
                        break;
                }
                this.start_time=y+'-'+m+'-'+d+'  '+'星期'+ds;

                let datas_=new Date(end_time);
                let y_=datas_.getFullYear();
                let m_=datas_.getMonth()+1;
                let d_=datas_.getDate();
                let ds_=datas_.getDay();
                switch (ds_){
                    case 1:
                        ds_='一';
                        break;
                    case 2:
                        ds_='二';
                        break;
                    case 3:
                        ds_='三';
                        break;
                    case 4:
                        ds_='四';
                        break;
                    case 5:
                        ds_='五';
                        break;
                    case 6:
                        ds_='六';
                        break;
                    case 7:
                        ds_='天';
                        break;
                }
                this.end_time=y_+'-'+m_+'-'+d_+'  '+'星期'+ds_;
            },
            date_change_two(){
                $('.el-date-editor ').click();
            },
            search_list(){
                this.$router.push({ name: 'index', params: { userId: 123 }})
            }
        }
    }
</script>
