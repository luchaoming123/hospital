<style scope>
    .login_on{
        display: flex;
        justify-content: center;
        .form{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: 200px;
            height: 400px;
            width: 700px;
            background-color: #fff;
            border-radius: 8px;
            padding: 20px;
            border: 1px solid #e6e6e6;
            box-shadow:0 0 1px #dcdcdc;
            text-align: center;
            .title_remind{
                margin: 30px 0 10px 0;
                width: 300px;
                text-align: left
            }
            .input_val{
                margin: 10px 0;
            }
            .button_clil{
                margin: 10px 0;
            }
            .icon_top{
                display: flex;
                .top_left{
                    width: 100px;
                    height: 100px;
                    background-color: #e6e6e6;
                    border-radius: 6px;
                    color: #ffffff;
                    font-size: 16px;
                    line-height: 100px;
                    text-align: center;
                }
                .line_column{
                    height: 100px;
                    width: 4px;
                    border-radius: 6px;
                    background-color: #2baee9;
                    margin: 0 20px;
                }
                .words{
                    font-size: 20px;
                    font-weight: bold;
                    width: 150px;
                }
            }
        }
    }
</style>
<template>
    <div class="login_on">
        <div class="form">
            <div class="icon_top">
                <div class="top_left">
                    系统icon
                </div>
                <div class="line_column"></div>
                <div class="words">
                    icefrog医疗数据查询系统用户数据信息查询
                </div>
            </div>
            <div class="title_remind" >请输入用户编号：</div>
            <div class="input_val">
                <Input v-model="value" placeholder="input something..." style="width: 300px" />
            </div>
            <div class="button_clil">
                <Button  icon="ios-search" type="primary" style="width: 300px">开始查询</Button>
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
        components:{

        },
        methods:{
            exit(){

            }
        }
    }
</script>
