<style scope>
    body{
        background: #FAFAFA;
        background-image: none;
    }
    .box_all{
        .aside{
            z-index: 10000;
            background-color: #515a6e;
            position: fixed;
            left: 0;
            width: 240px;
            height: 100%;
            color: #ffffff;
            font-size: 16px;
            text-align: center;
            top: 64px;
            .name{
                text-align: right;
            }
            .name_large{
                text-align: center;
                font-size: 20px;
            }
            .imgs{
                border-radius: 50%;
                width: 100px;
                height: 100px;
                box-shadow:0 0 10px #000;
            }
        }
        .box_content{
            background: #373737;
            height: 64px;
            .tops_title{
                display: flex;
                justify-content: space-between;
                .tops_title_one{
                    display: flex;
                    .diatitle{
                        .titles{
                            font-size: 16px;
                            padding: 0 10px;
                            font-family: HelveticaNeue-Medium;
                            font-size: 16px;
                            color: #FFFFFF;
                            letter-spacing: 0.67px;
                            line-height: 26px;
                        }
                        .titles_alias{
                            font-family: PingFangSC-Regular;
                            font-size: 8px;
                            color: #A4A0A2;
                            letter-spacing: 0.2px;
                        }
                    }

                }
                .tops_title_two{
                    font-family: HelveticaNeue;
                    font-size: 12px;
                    color: #A4A0A2;
                    text-align: right;
                    line-height: 64px;
                    padding-right: 50px;
                    cursor: pointer;
                    i{
                        color: #D8D8D8;
                        position: relative;
                        top:3px;
                    }
                }

            }
            .tops{
                background-color: #ffffff;
                padding:6px 20px 6px 20px;
                margin: 0 -20px;
            }
            .contents_detail{
                margin-top: 20px;
            }
        }

    }

</style>
<template>
    <div class="box_all">
        <div class="aside">
            <br>
            <br>
            <div class="demo-avatar">
                <img class="imgs" src="https://i.loli.net/2017/08/21/599a521472424.jpg" alt="">
            </div>
            <br>
            <Row>
                <Col class="name_large" span="24">张学友</Col>
            </Row>
            <br>
            <Button type="primary">返回首页</Button>
            <br>
            <br>
            <Row>
                <Col class="name" span="12">性别：</Col>
                <Col span="12">男</Col>
            </Row>
            <br>
            <Row>
                <Col class="name" span="12">身高：</Col>
                <Col span="12">180cm</Col>
            </Row>
            <br>
            <Row>
                <Col class="name" span="12">体重：</Col>
                <Col span="12">70kg</Col>
            </Row>
            <br>
            <Row>
                <Col class="name" span="12">年龄：</Col>
                <Col span="12">40岁</Col>
            </Row>
            <br>
            <Row>
                <Col class="name" span="12">血缘：</Col>
                <Col span="12">O型</Col>
            </Row>
            <br>
            <Row>
                <Col class="name" span="12">过敏源：</Col>
                <Col span="12">暂无</Col>
            </Row>
            <br>
            <Row>
                <Col class="name" span="12">病院编号：</Col>
                <Col span="12">12345</Col>
            </Row>
            <br>
            <Row>
                <Col class="name" span="12">患者类型：</Col>
                <Col span="12">普通</Col>
            </Row>
            <br>
            <Row>
                <Col class="name" span="12">送检科室：</Col>
                <Col span="12">内科</Col>
            </Row>
            <br>
            <Row>
                <Col class="name" span="12">诊断结果：</Col>
                <Col span="12">待定</Col>
            </Row>
            <br>

        </div>
        <div class="box_content">
            <div class="tops_title">
                <div class="tops_title_one">
                    <i style="font-size: 50px;" class="icon iconfont icon-danao---"></i>
                    <div class="diatitle">
                        <div class="titles">
                            脑认知数据平台
                        </div>
                        <div class="titles_alias">
                            BRAIN COGNITIVE DATA PLATFORM
                        </div>
                    </div>
                </div>
                <div class="tops_title_two">
                    <i style="font-size: 20px;" class="icon iconfont icon-logout-"></i>
                    &nbsp;
                    <span>退出当前患者档案</span>
                </div>
            </div>
            <br>
            <div class="tops">
                <Breadcrumb>
                    <BreadcrumbItem to="/">首页</BreadcrumbItem>
                    <BreadcrumbItem>VR产检报告</BreadcrumbItem>
                </Breadcrumb>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                theme3: 'dark'
            }
        },
        methods:{
            exit(){

            }
        }
    }
</script>
