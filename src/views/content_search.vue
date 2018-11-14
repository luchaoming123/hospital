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

                    }

                }
                .tables{
                    padding: 20px;
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
                width: 100%;
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
                        <span class="center_tlt">请选择测试项目</span>
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
                            <i style="font-size: 14px;color: #D8D8D8;margin-top: 7px" class="icon-search-"></i>&nbsp;&nbsp;重新搜索
                        </div>
                    </div>
                    <div class="line_fc"></div>
                    <div class="tables">
                        <Table border :columns="columns1" :data="data1"></Table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import baisis_msg from './basis_msg.vue'
    export default {
        data () {
            return {
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

            }
        }
    }
</script>
