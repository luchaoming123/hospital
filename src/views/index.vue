<style scope>
    .index_all{
        .contents_detail{
            margin-left: 240px;
            .title{
                margin: 20px;
                .box_centr{
                    margin: 0 20px;
                    .box_ant{
                        background: #ffffff;
                        border-radius: 6px;
                        height: 220px;
                        border: 1px solid rgb(52,144,241);
                        margin: 20px;
                        box-shadow:0 0 1px #dcdcdc;
                        padding: 20px;
                        cursor:pointer;
                        .title_name{
                            font-size: 16px;
                            font-weight: bold;
                        }
                        .name_color{
                            color: rgb(78,163,154);
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

</style>
<template>
    <div class="index_all">
        <baisis_msg></baisis_msg>
        <div class="contents_detail">
            <div class="title" style="background: #f8f8f9">
                <Card title="进行筛选" icon="ios-options" :padding="0" shadow >

                    <Row class="box_centr">
                        <Col span="8">
                            <div class="box_ant" shadow>
                                <br>
                                <div class="title_name">
                                    VR产检报告
                                </div>
                                <br>
                                <br>
                                <div class="content_val_one">
                                    <div class="name">报告数量：</div>
                                    <div>12</div>
                                </div>
                                <br>
                                <div class="content_val_two">
                                    <div class="name">最新报告：</div>
                                    <div>2016-10-10</div>
                                    <div class="name_color">（未读）</div>
                                </div>
                            </div>
                        </Col>
                        <Col span="8">
                        <div class="box_ant" shadow>
                            <br>
                            <div class="title_name">
                                VR产检报告
                            </div>
                            <br>
                            <br>
                            <div class="content_val_one">
                                <div class="name">报告数量：</div>
                                <div>12</div>
                            </div>
                            <br>
                            <div class="content_val_two">
                                <div class="name">最新报告：</div>
                                <div>2016-10-10</div>
                                <div class="name_color">（未读）</div>
                            </div>
                        </div>
                        </Col>
                        <Col span="8">
                        <div class="box_ant" shadow>
                            <br>
                            <div class="title_name">
                                VR产检报告
                            </div>
                            <br>
                            <br>
                            <div class="content_val_one">
                                <div class="name">报告数量：</div>
                                <div>12</div>
                            </div>
                            <br>
                            <div class="content_val_two">
                                <div class="name">最新报告：</div>
                                <div>2016-10-10</div>
                                <div class="name_color">（未读）</div>
                            </div>
                        </div>
                        </Col>
                    </Row>
                </Card>
            </div>
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

            }
        }
    }
</script>
