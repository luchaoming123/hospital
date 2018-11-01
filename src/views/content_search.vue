<style scope>
    .search_content{
        .detail_show{
            margin-left: 240px;
            .title{
                margin:0 20px;
                .time_limit{
                    display: flex;
                    margin: 20px;
                    justify-content: space-between;
                    .time_limit_p{
                        display: flex;
                        .name{
                            line-height: 34px;
                            margin-right: 10px;
                        }
                    }
                    .time_limit_confirm{
                        margin-right:100px;
                    }

                }
                .tables{
                    padding: 20px;
                }
            }
        }
    }
</style>
<template>
    <div class="search_content">
        <baisis_msg></baisis_msg>
        <div class="detail_show">
            <div class="title" style="background: #f8f8f9">
                <Card title="进行筛选" icon="ios-options" :padding="0" shadow >
                    <div class="time_limit">
                        <div class="time_limit_p">
                            <div class="name">
                                送检时间:
                            </div>
                            <DatePicker  type="daterange" split-panels placeholder="Select date" style="width: 200px"></DatePicker>
                        </div>
                        <div class="time_limit_confirm">
                            <Button  style="padding: 5px 60px" type="primary">搜索</Button>
                        </div>
                    </div>
                    <div class="tables">
                        <Table border :columns="columns1" :data="data1"></Table>
                    </div>
                </Card>
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
