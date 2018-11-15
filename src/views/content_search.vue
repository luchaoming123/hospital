<style scope>
    .search_content{
        .detail_show{
            display: flex;
            flex-direction: row;
            .title{
                margin:20px 30px;
                background: #FFFFFF!important;
                box-shadow: 0 4px 4px 0 rgba(34,44,75,0.10);
                .time_limit{
                    display: flex;
                    padding: 10px;
                    align-items: center;
                    .time_limit_p{
                        display: flex;
                        .name{
                            line-height: 34px;
                            margin-right: 10px;
                        }
                    }
                    .time_limit_confirm{
                        margin-left: 20px;
                        cursor: pointer;
                        background: #E6655F;
                        border-radius: 22px;
                        text-align: center;
                        height: 28px;
                        width: 100px;
                        line-height: 28px;

                        font-family: PingFangSC-Regular;
                        font-size: 12px;
                        color: #FFFFFF;

                    }

                }
                .tables{
                    padding: 20px;
                    .table_real{
                        width: 100%;
                        text-align: left;
                        th{
                            font-family: PingFangSC-Regular;
                            font-size: 12px;
                            color: #9B9B9B;
                            text-align: center;
                            line-height: 14px;
                            height: 50px;
                        }
                        td{
                            font-family: PingFangSC-Regular;
                            font-size: 14px;
                            color: #4E5056;
                            text-align: center;
                            line-height: 14px;
                            height: 60px;
                            border-bottom: 1px solid #ECECEC;
                        }
                        tbody{
                            background: #F9F9F9;
                            height: 560px!important;
                            overflow-y: scroll;
                        }
                    }
                }
            }
        }
    }

    .xu_ni{
        width: 16%;
        height: 900px;
    }
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
            background-color: #FFFFFF;
            .box_centr{
                background-color: #FFFFFF;
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

    .line_fc{
        background: #ECECEC;
        height: 1px;
        width: 100%;
    }
    .line_colss{
        width: 4px;
        height: 17px;
        position: relative;
        left:-10px;
        background: #E6655F;
        top:7px;
    }
    .buton_choise{
        display: flex;
        justify-content: center;
        width: 100%;
        padding-bottom: 30px;
        .btin{
            background: #FFFFFF!important;
            border: 1px solid #E7E7E7;
            border-radius: 22px;
            width: 180px;
            height: 40px;
            font-family: PingFangSC-Medium;
            font-size: 14px;
            color: #000000;
            line-height: 40px;
            cursor: pointer;
            text-align: center;
            span{
                position: relative;
                bottom: 4px;
            }
        }
        .btin:hover{
            color: #000000!important;
        }
    }


    .alert_css{
        padding:0 20px;
        .titles{
            font-family: PingFangSC-Regular;
            font-size: 14px;
            color: #4E5056;
            line-height: 14px;
            padding: 20px 10px 10px 0;
        }

        .name_black{
            font-family: PingFangSC-Regular;
            font-size: 14px;
            color: #9B9B9B!important;
            text-align: center;
            line-height: 14px;
            background: #F9F9F9;
        }
        td{
            border: 1px solid #D8D8D8;
            width: 200px;
            height: 40px;
            text-align: center;

            font-family: PingFangSC-Regular;
            font-size: 14px;
            color: #000000;
            text-align: center;
            line-height: 14px;
        }
        .butoton_box{
            display: flex;
            justify-content: center;
        }
    }


    .ivu-date-picker-cells-cell-selected:hover em, .ivu-date-picker-cells-cell-selected em{
        background-color: #E6655F!important;
    }
    .ivu-date-picker-cells-focused em{
        box-shadow: inset 0 0 0 1px #E6655F!important;
    }
    .ivu-date-picker-cells-cell-today em:after{
        background:  #E6655F!important;
    }
    .ivu-input:focus, .ivu-input:hover{
        border-color: #E6655F!important;
    }
    .ivu-date-picker-focused input{
        border-color: #E6655F!important;
    }
    .ivu-input:focus{
        box-shadow: none!important;
    }

    button:hover,input:hover{
        border-color: #E6655F!important;
    }
    button:focus,input:focus{
        border-color: #E6655F!important;
    }
    button:visited,input:visited{
        border:1px solid #E6655F!important;
    }
</style>
<template>
    <div class="search_content">
        <baisis_msg></baisis_msg>
        <div class="detail_show">
            <div class="xu_ni"></div>
            <div class="contents_detail">
                <div class="title_tagss">
                    <div class="postitaons">
                        <i style="font-size: 8px;color: #D8D8D8;" class="icon iconfont icon-arrow-"></i>

                        <span>首页</span>&nbsp;&nbsp;&nbsp;
                        <i style="font-size: 8px;color: #D8D8D8;" class="icon iconfont icon-arrow-"></i>

                        <span>压力反应测试</span>
                    </div>
                    <div class="postitao_ctr">
                        <i style="font-size: 8px;color: #D8D8D8;" class="icon iconfont icon-remind-"></i>
                        <span class="center_tlt">请选择报告</span>
                    </div>
                </div>
                <div class="title" style="background: #f8f8f9">
                    <div class="time_limit">
                        <div class="time_limit_p">
                            <div class="line_colss"></div>&nbsp;&nbsp;&nbsp;
                            <i style="font-size: 14px;color: #D8D8D8;margin-top: 7px" class="icon iconfont  icon-time-"></i>&nbsp;&nbsp;&nbsp;
                            <div class="name">
                                送检时间:
                            </div>
                            <DatePicker  type="daterange" split-panels placeholder="Select date" style="width: 200px"></DatePicker>
                        </div>

                        <div class="time_limit_confirm">
                            <i style="font-size: 14px;color: #fff;margin-top: 7px" class="icon iconfont icon-search-"></i>&nbsp;&nbsp;重新搜索
                        </div>

                    </div>
                    <div class="line_fc"></div>
                    <div class="tables">
                        <table class="table_real">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>报告编号</th>
                                    <th>送检时间</th>
                                    <th>报告时间</th>
                                    <th>送检医生</th>
                                    <th>送检人员</th>
                                    <th>报告字段1</th>
                                    <th>报告字段2</th>
                                    <th>报告字段3</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style="text-align: right;width: 50px">
                                        <Radio style="color: #D75E5B!important;"></Radio>
                                    </td>
                                    <td style="width: 80px">123456</td>
                                    <td style="font-size: 12px">123456</td>
                                    <td style="font-size: 12px;">123456</td>
                                    <td>123456</td>
                                    <td>123456</td>
                                    <td>123456</td>
                                    <td style="color: #E6655F">839 <i style="transform: rotate(-180deg);color: #E6655F;font-size: 8px" class="icon iconfont icon-down-"></i></td>
                                    <td style="color: #7FC765">839 <i style="transform: rotate(-180deg);color: #7FC765;font-size: 8px" class="icon iconfont icon-down-"></i></td>
                                    <td style="cursor: pointer" @click="click_alert()"><i style="font-size: 20px;color: rgb(204,204,204)" class="icon iconfont icon-baogao-"></i></td>
                                </tr>
                                <tr>
                                    <td style="text-align: right;width: 50px"><Radio style="color: #D75E5B;"></Radio></td>
                                    <td style="width: 80px">123456</td>
                                    <td style="font-size: 12px">123456</td>
                                    <td style="font-size: 12px;">123456</td>
                                    <td>123456</td>
                                    <td>123456</td>
                                    <td>123456</td>
                                    <td style="color: #E6655F">839 <i style="transform: rotate(-180deg);color: #E6655F;font-size: 8px" class="icon iconfont icon-down-"></i></td>
                                    <td style="color: #7FC765">839 <i style="transform: rotate(-180deg);color: #7FC765;font-size: 8px" class="icon iconfont icon-down-"></i></td>
                                    <td style="cursor: pointer" @click="click_alert()"><i style="font-size: 20px;color: rgb(204,204,204)" class="icon iconfont icon-baogao-"></i></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="buton_choise">

                        <Button @click="view_caht()" class="btin" type="primary" shape="circle">
                            <i style="font-size: 22px;color: #D8D8D8;" class="icon iconfont icon-tubiao-"></i>&nbsp;&nbsp;
                            <span>按图标展示</span>
                        </Button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button @click="pai_ming()" class="btin" type="primary" shape="circle">
                            <i style="font-size: 22px;color: #D8D8D8;" class="icon iconfont icon-ranking-"></i>&nbsp;&nbsp;
                            <span>查看排名</span>
                        </Button>
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
        <!--弹框-->
        <Modal
                v-model="modal6"
                title="报告编号：13251"
                :loading="loading"
                fullscreen
                @on-ok="asyncOK" width="1200">
                <div class="alert_css">
                    <div class="titles">
                        患者信息
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <td class="name_black">姓名</td><td>张三</td>
                                <td class="name_black">性别</td><td>张三</td>
                                <td class="name_black">身高</td><td>张三</td>
                            </tr>
                            <tr>
                                <td class="name_black">体重</td><td>张三</td>
                                <td class="name_black">年龄</td><td>张三</td>
                                <td class="name_black">血型</td><td>张三</td>
                            </tr>
                            <tr>
                                <td class="name_black">过敏史</td><td>张三</td>
                                <td class="name_black">病院编号</td><td>张三</td>
                                <td class="name_black">患者类型</td><td>张三</td>
                            </tr>
                            <tr>
                                <td class="name_black">送检科室</td><td>张三</td>
                                <td class="name_black">诊断结果</td><td colspan="3" >张三</td>
                            </tr>
                        </tbody>
                    </table>

                    <div class="titles">
                        患者信息
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <td class="name_black">编号</td><td class="name_black">编号</td>
                                <td class="name_black">编号</td><td class="name_black">编号</td>
                            </tr>
                            <tr>
                                <td>体重</td><td>张三</td>
                                <td>年龄</td><td>张三</td>
                            </tr>
                            <tr>
                                <td>体重</td><td>张三</td>
                                <td>年龄</td><td>张三</td>
                            </tr>
                        </tbody>
                    </table>

                    <div class="titles">
                        患者信息
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <td class="name_black">姓名</td><td>张三</td>
                                <td class="name_black">性别</td><td>张三</td>
                                <td class="name_black">身高</td><td>张三</td>
                            </tr>
                            <tr>
                                <td class="name_black">体重</td><td>张三</td>
                                <td class="name_black">年龄</td><td>张三</td>
                                <td class="name_black">血型</td><td>张三</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            <div slot="footer" style="text-align: center;margin: 10px 0 20px 0">
                <div class="butoton_box">
                    <Button shape="circle" style="width: 140px"><i style="font-size: 20px;color: #D8D8D8;" class="icon iconfont icon-export-"></i> 导出</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Button shape="circle" style="width: 140px"><i style="font-size: 20px;color: #D8D8D8;" class="icon iconfont icon-print-"></i> 打印</Button>
                </div>

            </div>
        </Modal>
    </div>
</template>

<script>
    import baisis_msg from './basis_msg.vue'
    export default {
        data () {
            return {
                modal6: false,
                loading: true,
                columns1: [
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
                data1: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 33,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 45,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 55,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ]
            }
        },
        components:{
            baisis_msg
        },
        methods:{
            exit(){

            },
            asyncOK () {
                setTimeout(() => {
                    this.modal6 = false;
                }, 2000);
            },
            click_alert(){
                this.modal6 = true
            },
            view_caht(){
                this.$router.push({ name: 'echart', params: { userId: 123 }})
            },
            pai_ming(){
                this.$router.push({ name: 'sort', params: { userId: 123 }})
            }
        }
    }
</script>
