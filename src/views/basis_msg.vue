<style scope>
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
        margin-left: 240px;
        padding: 20px;
    .tops_title{
        display: flex;
        justify-content: space-between;
    .tops_title_one{
        display: flex;
    .titles{
        height: 34px;
        line-height: 34px;
        font-size: 16px;
        padding: 0 10px;
    }
    }
    .tops_title_two{

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
                    <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
                    <div class="titles">
                        icefrog医疗数据查询系统
                    </div>
                </div>
                <div class="tops_title_two">
                    <Button type="primary"  icon="ios-power" @click="exit">
                        退出当前患者档案
                    </Button>
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
