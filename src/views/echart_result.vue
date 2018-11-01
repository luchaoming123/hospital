<style scope>
    .echart_result{
        .contents_des{
            margin-left: 240px;
            .title{
                margin: 0 20px;
            }
            .view_chart{
                padding: 30px;
            }
            .view_chart_title_cons{

                padding: 30px;

                .view_chart_title{
                    padding: 20px 0;
                    .name{
                        font-weight: bold;
                    }
                }
            }
        }
    }
</style>
<template>
    <div class="echart_result">
        <baisis_msg></baisis_msg>
        <div class="contents_des">
            <div class="title" style="background: #f8f8f9">
                <Card title="图标展示" icon="ios-options" :padding="0" shadow >
                    <div class="view_chart_title_cons">
                        <Row class="view_chart_title">
                            <Col class="name" span="2">
                            报告送检时间：
                            </Col>
                            <Col span="2">
                            2018-01-10
                            </Col>
                            <Col span="1">
                            至
                            </Col>
                            <Col span="2">
                            2018-03-10
                            </Col>
                        </Row>
                        <Row class="view_chart_title">
                            <Col class="name" span="3" >
                            图标内包含的报告编号：
                            </Col>
                            <Col span="21">
                            12345，12354，54541，44545
                            </Col>
                        </Row>
                    </div>
                    <Row>
                        <Col span="12" class="view_chart">
                            <div id="main_one" style="height: 400px;"></div>
                        </Col>
                        <Col span="12" class="view_chart">
                            <div id="main_two" style="height: 400px;"></div>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="12" class="view_chart">
                            <div id="main_three" style="height: 400px;"></div>
                        </Col>
                        <Col span="12" class="view_chart">
                            <div id="main_four" style="height: 400px;"></div>
                        </Col>
                    </Row>
                </Card>

            </div>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery';
    import baisis_msg from './basis_msg.vue';
    import echarts from 'echarts';
    export default {
        data () {
            return {


            }
        },
        components:{
            baisis_msg
        },
        mounted(){


            /**
             * 表一
             * */
                // 基于准备好的dom，初始化echarts实例
            var myChart_one = echarts.init(document.getElementById('main_one'));
            // 绘制图表
            myChart_one.setOption(this.echart_one());
            /**
             * 表二
             * */
            // 基于准备好的dom，初始化echarts实例
            var myChart_two = echarts.init(document.getElementById('main_two'));

            // 绘制图表
            myChart_two.setOption(this.echart_two());

            /**
             * 表三
             * */
            // 基于准备好的dom，初始化echarts实例
            var myChart_three = echarts.init(document.getElementById('main_three'));

            // 绘制图表
            myChart_three.setOption(this.echart_three());

            /**
             * 表四
             * */
                // 基于准备好的dom，初始化echarts实例
            var myChart_four = echarts.init(document.getElementById('main_four'));

            // 绘制图表
            myChart_four.setOption(this.echart_four());

        },
        methods:{
            exit(){

            },
            echart_one(){
                var base = +new Date(1968, 9, 3);
                var oneDay = 24 * 3600 * 1000;
                var date = [];

                var data = [Math.random() * 300];

                for (var i = 1; i < 20000; i++) {
                    var now = new Date(base += oneDay);
                    date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
                    data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
                }

                var date=date;

                var option = {
                    tooltip: {
                        trigger: 'axis',
                        position: function (pt) {
                            return [pt[0], '10%'];
                        }
                    },
                    title: {
                        left: 'center',
                        text: '大数据量面积图',
                    },
                    toolbox: {
                        feature: {
                            dataZoom: {
                                yAxisIndex: 'none'
                            },
                            restore: {},
                            saveAsImage: {}
                        }
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: date
                    },
                    yAxis: {
                        type: 'value',
                        boundaryGap: [0, '100%']
                    },
                    dataZoom: [{
                        type: 'inside',
                        start: 0,
                        end: 10
                    }, {
                        start: 0,
                        end: 10,
                        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                        handleSize: '80%',
                        handleStyle: {
                            color: '#fff',
                            shadowBlur: 3,
                            shadowColor: 'rgba(0, 0, 0, 0.6)',
                            shadowOffsetX: 2,
                            shadowOffsetY: 2
                        }
                    }],
                    series: [
                        {
                            name:'模拟数据',
                            type:'line',
                            smooth:true,
                            symbol: 'none',
                            sampling: 'average',
                            itemStyle: {
                                color: 'rgb(255, 70, 131)'
                            },
                            areaStyle: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: 'rgb(255, 158, 68)'
                                }, {
                                    offset: 1,
                                    color: 'rgb(255, 70, 131)'
                                }])
                            },
                            data: data
                        }
                    ]
                };

                return option;

            },
            echart_two(){
                var option={
                    title: {
                        text: '折线图堆叠'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
                    },
                    grid: {
                        left: '3%',
                            right: '4%',
                            bottom: '3%',
                            containLabel: true
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    xAxis: {
                        type: 'category',
                            boundaryGap: false,
                            data: ['周一','周二','周三','周四','周五','周六','周日']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            name:'邮件营销',
                            type:'line',
                            stack: '总量',
                            data:[120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                            name:'联盟广告',
                            type:'line',
                            stack: '总量',
                            data:[220, 182, 191, 234, 290, 330, 310]
                        },
                        {
                            name:'视频广告',
                            type:'line',
                            stack: '总量',
                            data:[150, 232, 201, 154, 190, 330, 410]
                        },
                        {
                            name:'直接访问',
                            type:'line',
                            stack: '总量',
                            data:[320, 332, 301, 334, 390, 330, 320]
                        },
                        {
                            name:'搜索引擎',
                            type:'line',
                            stack: '总量',
                            data:[820, 932, 901, 934, 1290, 1330, 1320]
                        }
                    ]
                }
                return option;
            },
            echart_three(){

                var colors = ['#5793f3', '#d14a61', '#675bba'];


                var option = {
                    color: colors,

                    title: {
                        left: 'left',
                        text: '多 X 轴示例',
                    },
                    tooltip: {
                        trigger: 'none',
                        axisPointer: {
                            type: 'cross'
                        }
                    },
                    legend: {
                        data:['2015 降水量', '2016 降水量']
                    },
                    grid: {
                        top: 70,
                        bottom: 50
                    },
                    xAxis: [
                        {
                            type: 'category',
                            axisTick: {
                                alignWithLabel: true
                            },
                            axisLine: {
                                onZero: false,
                                lineStyle: {
                                    color: colors[1]
                                }
                            },
                            axisPointer: {
                                label: {
                                    formatter: function (params) {
                                        return '降水量  ' + params.value
                                            + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                                    }
                                }
                            },
                            data: ["2016-1", "2016-2", "2016-3", "2016-4", "2016-5", "2016-6", "2016-7", "2016-8", "2016-9", "2016-10", "2016-11", "2016-12"]
                        },
                        {
                            type: 'category',
                            axisTick: {
                                alignWithLabel: true
                            },
                            axisLine: {
                                onZero: false,
                                lineStyle: {
                                    color: colors[0]
                                }
                            },
                            axisPointer: {
                                label: {
                                    formatter: function (params) {
                                        return '降水量  ' + params.value
                                            + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                                    }
                                }
                            },
                            data: ["2015-1", "2015-2", "2015-3", "2015-4", "2015-5", "2015-6", "2015-7", "2015-8", "2015-9", "2015-10", "2015-11", "2015-12"]
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    series: [
                        {
                            name:'2015 降水量',
                            type:'line',
                            xAxisIndex: 1,
                            smooth: true,
                            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
                        },
                        {
                            name:'2016 降水量',
                            type:'line',
                            smooth: true,
                            data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7]
                        }
                    ]
                };
                return option;
            },
            echart_four(){
                var option = {
                    xAxis: {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: [120, 200, 150, 80, 70, 110, 130],
                        type: 'line',
                        symbol: 'triangle',
                        symbolSize: 20,
                        lineStyle: {
                            normal: {
                                color: 'green',
                                width: 4,
                                type: 'dashed'
                            }
                        },
                        itemStyle: {
                            normal: {
                                borderWidth: 3,
                                borderColor: 'yellow',
                                color: 'blue'
                            }
                        }
                    }]
                };
                return option;
            }
        }
    }
</script>
