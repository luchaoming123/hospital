<style scope>
    body{
        background: #FAFAFA;
        background-image: none!important;
    }
    .index_all{
        .contents_detail{
            width: 84%;
            background: #FAFAFA;
            .title_tagss{
                height: 50px;
                background: #FFFFFF;
                width: 100%;
                border-top: 3px solid #E6655F;
                border-bottom: 1px solid #ECECEC;
                padding-left: 20px;
                display: flex;
                align-items: center;
                font-family: PingFangSC-Medium;
                font-size: 14px;
                color: #4E5056;
                .postitaons{
                    position: absolute;
                }
                .postitao_ctr{
                    width: 84%;
                    text-align: center;
                    .center_tlt{
                        font-family: PingFangSC-Regular;
                        font-size: 12px;
                        color: #9B9B9B;
                    }
                }

            }
            .title{
                margin: 10px;
                background: #FAFAFA;
                .box_centr{
                    background: #FAFAFA;
                    .box_ant{
                        border-radius: 6px;
                        height: 260px;
                        border: 1px solid #ececec;
                        margin: 10px;
                        padding: 20px 30px;
                        background: #FFFFFF;
                        box-shadow: 0 4px 4px 0 rgba(34,44,75,0.10);
                        .name{
                            font-family: PingFangSC-Regular;
                            font-size: 12px;
                            color: #9B9B9B;
                            line-height: 14px;
                        }
                        .values{
                            font-family: HelveticaNeue;
                            font-size: 14px;
                            color: #000000;
                            line-height: 14px;
                            margin-left: 20px;
                        }
                        .title_name{
                            font-weight: bold;
                            font-family: PingFangSC-Medium;
                            font-size: 18px;
                            color: #000000;
                            display: flex;
                            justify-content: space-between;
                            .tsts{
                                display: flex;
                                .line_col{
                                    position: relative;
                                    left: -30px;
                                    background-color: #E6655F;
                                    width: 4px;
                                    height: 17px;
                                    top:5px;
                                }
                            }
                            .naids{
                                position: relative;
                                top:-15px;
                            }

                        }
                        .boxs_btns{
                            margin-top: 30px;
                            .click_btn{
                                background: #FFFFFF;
                                border: 1px solid #E7E7E7;
                                border-radius: 22px;
                                width: 100%;
                                height: 40px;
                                font-family: PingFangSC-Medium;
                                font-size: 14px;
                                color: #E6655F;
                                cursor: pointer;
                            }
                        }

                        .name_color{
                            font-family: PingFangSC-Regular;
                            font-size: 12px;
                            color: #E6655F;
                            line-height: 14px;
                            padding: 0 5px;
                        }
                        .content_val_one{
                            display: flex;
                        }
                        .content_val_two{
                            display: flex;
                            flex-wrap: nowrap;
                        }
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
        height: 860px!important;
    }


    .box_logo_bottom{
        display: flex;
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #A4A0A2;
        letter-spacing: 0.67px;
        line-height: 30px;
        margin-left: 30px;
        padding-bottom: 30px;
        background: #FAFAFA;
        .xu_ni_new{
            width: 16%;
        }
    }
</style>
<template>
    <div class="index_all">
        <baisis_msg></baisis_msg>

        <div class="box_flowing">
            <div class="xu_ni"></div>
            <div class="contents_detail">
                <div class="title_tagss">
                    <div class="postitaons">
                        <i style="font-size: 8px;color: #D8D8D8;" class="icon iconfont icon-arrow-"></i>

                        <span>首页</span>
                    </div>
                    <div class="postitao_ctr">
                        <i style="font-size: 8px;color: #D8D8D8;" class="icon iconfont icon-remind-"></i>
                        <span class="center_tlt">请选择测试项目</span>
                    </div>
                </div>
                <div class="title" style="background: #f8f8f9">
                    <Row class="box_centr">
                        <Col span="8">
                        <div class="box_ant" shadow>
                            <div class="title_name">
                                <div class="tsts">
                                    <div class="line_col"></div>
                                    <span>VR产检</span>
                                </div>
                                <div class="naids">
                                    <!--<i style="font-size: 60px;color: #D8D8D8;" class="icon iconfont icon-fuchan-"></i>-->
                                    <img width="60" height="60" src="../images/fuchan-01.png" alt="">
                                </div>
                            </div>
                            <div class="content_val_one">
                                <i style="font-size: 16px;color: #D8D8D8;margin-top:-4px;" class="icon iconfont icon-baogao-"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                                <div class="name">报告数量：</div>
                                <div class="values">12</div>
                            </div>
                            <br>
                            <div class="content_val_two">
                                <i style="font-size: 16px;color: #D8D8D8;margin-top:-4px;" class="icon iconfont icon-zuixin-"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                                <div class="name">最新报告：</div>
                                <div class="values">2016-10-10</div>
                                <div class="name_color">（未读）</div>
                            </div>
                            <div class="boxs_btns">
                                <Button class="click_btn" @click="view_data()" type="primary" shape="circle">查看报告</Button>
                            </div>
                        </div>
                        </Col>
                        <Col span="8">
                        <div class="box_ant" shadow>
                            <div class="title_name">
                                <div class="tsts">
                                    <div class="line_col"></div>
                                    <span>压力反应测试</span>
                                </div>
                                <div class="naids">
                                    <!--<i style="font-size: 60px;color: #D8D8D8;" class="icon iconfont icon-fanying-"></i>-->
                                    <img width="60" height="60" src="../images/fanying-01.png" alt="">
                                </div>
                            </div>
                            <div class="content_val_one">
                                <i style="font-size: 16px;color: #D8D8D8;margin-top:-4px;" class="icon iconfont icon-baogao-"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                                <div class="name">报告数量：</div>
                                <div class="values">12</div>
                            </div>
                            <br>
                            <div class="content_val_two">
                                <i style="font-size: 16px;color: #D8D8D8;margin-top:-4px;" class="icon iconfont icon-zuixin-"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                                <div class="name">最新报告：</div>
                                <div class="values">2016-10-10</div>
                                <div class="name_color">（未读）</div>
                            </div>
                            <div class="boxs_btns">
                                <Button class="click_btn" @click="view_data()" type="primary" shape="circle">查看报告</Button>
                            </div>
                        </div>
                        </Col>
                        <Col span="8">
                        <div class="box_ant" shadow>
                            <div class="title_name">
                                <div class="tsts">
                                    <div class="line_col"></div>
                                    <span>VR体能测试</span>
                                </div>
                                <div class="naids">
                                    <!--<i style="font-size: 60px;color: #D8D8D8;" class="icon iconfont icon-tinengceshi-"></i>-->
                                    <img width="60" height="60" src="../images/tinengceshi-01.png" alt="">
                                </div>
                            </div>
                            <div class="content_val_one">
                                <i style="font-size: 16px;color: #D8D8D8;margin-top:-4px;" class="icon iconfont icon-baogao-"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                                <div class="name">报告数量：</div>
                                <div class="values">12</div>
                            </div>
                            <br>
                            <div class="content_val_two">
                                <i style="font-size: 16px;color: #D8D8D8;margin-top:-4px;" class="icon iconfont icon-zuixin-"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                                <div class="name">最新报告：</div>
                                <div class="values">2016-10-10</div>
                                <div class="name_color">（未读）</div>
                            </div>
                            <div class="boxs_btns">
                                <Button class="click_btn" @click="view_data()" type="primary" shape="circle">查看报告</Button>
                            </div>
                        </div>
                        </Col>
                    </Row>
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
    import baisis_msg from './basis_msg.vue';
    export default {
        data () {
            return {
                theme3: 'dark'
            }
        },
        components:{
            baisis_msg
        },
        methods:{
            exit(){

            },
            view_data(){
                this.$router.push({ name: 'search', params: { userId: 123 }})
            }
        }
    }
</script>
