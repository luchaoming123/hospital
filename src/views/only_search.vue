<style scope>
    .search_only{
        .detail_show{
            margin-left: 240px;
            .title{
                margin: 0 20px;
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
</style>
<template>
    <div class="search_only">
        <baisis_msg></baisis_msg>
        <div class="detail_show">
            <div class="title" style="background: #f8f8f9">
                <Card title="进行筛选" icon="ios-options" :padding="0" shadow >
                    <div class="input_show">
                        <DatePicker :open="true" type="daterange" split-panels placeholder="Select date" style="width: 200px"></DatePicker>
                    </div>
                    <div class="time_limit_confirm">
                        <Button class="button_click" style="" type="primary">开始查询</Button>
                    </div>
                </Card>
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
