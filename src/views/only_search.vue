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
                    margin: 100px 250px 0 0;

                }
                .time_limit_confirm{
                    text-align: center;
                    .button_click{
                        padding: 5px 60px;
                        margin: -30px 0 30px;
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
                        <DatePicker :open="true" size="large" type="daterange" split-panels placeholder="Select date" style="width: 200px"></DatePicker>
                    </div>
                    <div class="time_limit_confirm">
                        <Button class="button_click" style="" type="primary">开始查询</Button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import $ from 'jquery'
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
        mounted(){
            $(".input_show").find('input').hide()
            $(".input_show").find('i').hide()
        },
        methods:{
            exit(){

            }
        }
    }
</script>
