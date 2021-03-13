<template>
  <div>
    <div id="main" style="width: 687px;height:193px;"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    var that = this; // 保留this指向vue界面的状态
    var authtoken;
    //token获取
    const baseurl1 = "/api/v3/auth/tokens";
    this.$axios({
      method: "POST",
      url: baseurl1,
      data: {
        auth: {
          identity: {
            methods: ["password"],
            password: {
              user: {
                name: "EdBric",
                password: "19@iotat",
                domain: {
                  name: "EdBric"
                }
              }
            }
          },
          scope: {
            domain: {
              name: "EdBric"
            }
          }
        }
      },
      headers: {
        "Content-Type": "application/json;charset=UTF-8"
      }
    }).then(res => {
      console.log(res)
      var headers = res.headers;
      var arry = [];
      let x;
      let i = 0;
      //获取x-auth-token
      for (x in headers) {
        arry[i] = headers[x];
        i++;
      }
      this.token = arry[15];
      authtoken = arry[15];
      //获取温度数据
      var baseurl2 =
        "/iotat/v5/iot/09340f52b60025af2ffec01a2c1ba7d2/devices/8781fe96-2b37-471f-820e-fa092bb2d67d/shadow";
      this.$axios({
        method: "GET",
        url: baseurl2,
        headers: {
          "X-Auth-Token": authtoken
        }
      }).then(res => {
        console.log(res);
        that.Temperature = res.data.shadow[0].reported.properties.Temperature;
        that.luminance = res.data.shadow[0].reported.properties.luminance;
        that.Humidity = res.data.shadow[0].reported.properties.Humidity;
        that.event_time = res.data.shadow[0].reported.event_time;
        that.myEcharts(that.Temperature,that.luminance,that.Humidity,that.event_time);
      });
    });
    
  },
  data() {
    return {
      event_time: "",
      Humidity: "",
      Temperature: "",
      luminance: ""
    };
  },
  methods: {
    myEcharts(Temperature,luminance,Humidity,event_time) {
      console.log(Temperature,luminance,Humidity)
      let temperatureArry=[],
          luminanceArry=[],
          humidityArry=[];
      temperatureArry.push(Temperature);
      luminanceArry
            // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("main"));

      // 指定图表的配置项和数据
      var option = {
        color: ["#4472C5", "#ED7C30", "#80FF80", "#FF8096", "#800080"],
        title: {
          text: "番茄种植数据参数"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        legend: {
          right: "15px",
          data: ["温度", "湿度", "光照"],
          icon: "pin",
          selectedMode: true
        },
        grid: {
          show: false,
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "温度",
            type: "line",
            emphasis: {
              focus: "series"
            },
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "湿度",
            type: "line",
            emphasis: {
              focus: "series"
            },
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: "光照",
            type: "line",
            emphasis: {
              focus: "series"
            },
            data: [180, 225, 190, 184, 190, 230, 110]
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  }
};
</script>

<style scoped></style>
