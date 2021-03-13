<template>
  <div>
    <el-container id="page">
      <el-aside width="73px">
        <div class="asidelogo1">
          <img src="../assets/thermometer2.png" />
        </div>
        <div class="asidelogo2">
          <img @click="topage2" src="../assets/insect1.png" />
        </div>
      </el-aside>
      <el-main class="left">
        <div class="left_logo">
          <div class="tittle1">植物研究实验室</div>
          <div class="tittle2">Plant research laboratory</div>
        </div>
        <div class="room1">
          <div class="tomatoroom1">小番茄培养室</div>
          <div class="tomatoroom2">Small tomato cultivation room</div>
        </div>
        <div class="tomato_picture">
          <img src="../assets/tomato.jpg" alt="" />
        </div>
        <div class="room2">
          <div class="orchidroom1">兰花培养室</div>
          <div class="orchidroom2">Small orchid cultivation room</div>
        </div>
        <div class="orchid_picture">
          <img src="../assets/orchid.jpg" alt="" />
        </div>
        <div class="room3">
          <div class="Polygonatumroom1">黄精培养室</div>
          <div class="Polygonatumroom2">Polygonatum sibiricum room</div>
        </div>
        <div class="Polygonatum_picture">
          <img src="../assets/Polygonatum.jpg" alt="" />
        </div>
      </el-main>
      <el-main class="middle">
        <div class="middle_tittle">
          恭祝四川省“挑战杯”大学生课外学术科技作品竞赛顺利举行
        </div>
        <div class="live_tittle">植物组培室（直播）</div>
        <div class="live">
          <iframe
            src="static/video.html"
            width="687px"
            height="450px"
            frameborder="0"
          ></iframe>
        </div>
        <div class="parameter">植物组培室实验参数</div>
        <div class="parameter_form">
          <!-- <img src="../assets/page1.png" alt="" /> -->
          <parameter-form></parameter-form>
        </div>
      </el-main>
      <el-main class="right">
        <div class="iconfont right_tittle">&#xe5ca;植物生长检测</div>
        <div class="right_status">小番茄1株生长状态-实时监测</div>
        <div class="right_statusform">
          <div class="growdata">果苗生长数据</div>
          <div class="growlength">长度：{{ length }}</div>
          <div class="growheight">宽度：{{ height }}</div>
          <div class="livestatus">果苗实时状态</div>
          <div class="statusdata">{{ livestasus }}</div>
          <div class="check">果苗虫害检查</div>
          <div class="checkdata">{{ checkdata }}</div>
          <div class="Testing">果苗果实检测</div>
          <div class="Testingdata">{{ Testingdata }}</div>
        </div>
        <div class="growfrom">生长情况曲线图</div>
        <div
          id="myChart"
          :style="{
            width: '300px',
            height: '250px',
            position: 'absolute',
            left: '1130px',
            top: '770px'
          }"
        >
          <!-- <img src="../assets/zxt.png" alt="">  class="growfrom_data"  -->
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import parameterForm from '../components/parameterForm.vue';
export default {
  components: { parameterForm },
  data() {
    return {
      length: "200mm",
      height: "210mm",
      livestasus: "正常",
      checkdata: "健康",
      Testingdata: "无果实"
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    topage2() {
      this.$router.push("/page2");
    },
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      const myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      var option = {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [43, 55, 58, 65, 70, 73, 76],
            type: "line",
            showSymbol: true
          }
        ],
        label: {
          show: true
        }
      };
      myChart.setOption(option);
    }
  }
};
</script>

<style>
@font-face {
  font-family: "iconfont";
  src: url("../assets/iconfont/iconfont.eot");
  src: url("../assets/iconfont/iconfont.eot?#iefix") format("embedded-opentype"),
    url("../assets/iconfont/iconfont.woff2") format("woff2"),
    url("../assets/iconfont/iconfont.woff") format("woff"),
    url("../assets/iconfont/iconfont.ttf") format("truetype"),
    url("../assets/iconfont/iconfont.svg#iconfont") format("svg");
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 20px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#page {
  /* left: 0px;
  top: 0px; */
  position: relative;
  margin: 0 auto;
  width: 1440px;
  height: 1028px;
  border-radius: 10px;
  background-color: rgba(244, 244, 244, 1);
}
.el-aside {
  text-align: center;
  line-height: 200px;
  padding-top: 20px;
  border-right: 1px solid #bbbbbb;
}
.el-aside .asidelogo1 {
  position: absolute;
  left: 17px;
  top: 319px;
}
.el-aside .asidelogo1 img {
  width: 43px;
  height: 43px;
}
.el-aside .asidelogo2 {
  position: absolute;
  left: 17px;
  top: 605px;
}
.el-aside .asidelogo2 img {
  width: 43px;
  height: 43px;
}
.el-main {
  text-align: center;
  line-height: 160px;
  padding: 23px;
}
.left {
  width: 316px;
  border-right: 1px solid #bbbbbb;
}
.left .left_logo {
  width: 270px;
}
.left .left_logo .tittle1 {
  position: absolute;
  left: 96px;
  top: 102px;
  width: 196px;
  height: 42px;
  color: rgba(30, 101, 159, 1);
  font-size: 28px;
  text-align: left;
  font-family: SourceHanSansSC-regular;
}
.left .left_logo .tittle2 {
  position: absolute;
  left: 96px;
  top: 143px;
  width: 166px;
  height: 21px;
  color: rgba(92, 92, 92, 1);
  font-size: 12px;
  text-align: left;
  font-family: SourceHanSansSC-regular;
}
.left .room1 .tomatoroom1 {
  position: absolute;
  left: 96px;
  top: 227px;
  color: rgba(92, 92, 92, 1);
  font-size: 20px;
  text-align: left;
  font-family: SourceHanSansSC-regular;
}
.left .room1 .tomatoroom2 {
  position: absolute;
  left: 96px;
  top: 255px;
  width: 270px;
  height: 18px;
  color: rgba(92, 92, 92, 1);
  font-size: 12px;
  text-align: left;
  font-family: SourceHanSansSC-regular;
}
.left .tomato_picture {
  position: absolute;
  width: 257px;
  height: 165px;
  left: 96px;
  top: 350px;
}
.left .tomato_picture img {
  width: 257px;
  height: 165px;
  border-radius: 10px;
}
.left .room2 .orchidroom1 {
  position: absolute;
  left: 96px;
  top: 468px;
  width: 100px;
  height: 30px;
  color: rgba(92, 92, 92, 1);
  font-size: 20px;
  text-align: left;
  font-family: SourceHanSansSC-regular;
}
.left .room2 .orchidroom2 {
  position: absolute;
  left: 96px;
  top: 496px;
  width: 270px;
  height: 18px;
  color: rgba(92, 92, 92, 1);
  font-size: 12px;
  text-align: left;
  font-family: SourceHanSansSC-regular;
}
.left .orchid_picture {
  position: absolute;
  left: 96px;
  top: 588px;
  width: 257px;
  height: 165px;
}
.left .orchid_picture img {
  width: 257px;
  height: 165px;
  border-radius: 10px;
}
.left .room3 .Polygonatumroom1 {
  position: absolute;
  left: 96px;
  top: 709px;
  width: 100px;
  height: 30px;
  color: rgba(92, 92, 92, 1);
  font-size: 20px;
  text-align: left;
  font-family: SourceHanSansSC-regular;
}
.left .room3 .Polygonatumroom2 {
  position: absolute;
  left: 96px;
  top: 737px;
  width: 270px;
  height: 18px;
  color: rgba(92, 92, 92, 1);
  font-size: 12px;
  text-align: left;
  font-family: SourceHanSansSC-regular;
}
.left .Polygonatum_picture {
  position: absolute;
  left: 96px;
  top: 829px;
  width: 257px;
  height: 165px;
}
.left .Polygonatum_picture img {
  width: 257px;
  height: 165px;
  border-radius: 10px;
}
.middle {
  width: 724px;
  border-right: 1px solid #bbbbbb;
}
.middle .middle_tittle {
  position: absolute;
  left: 408px;
  top: 67px;
  width: 687px;
  height: 60px;
  line-height: 60px;
  border-radius: 10px 10px 10px 10px;
  background-color: rgba(63, 203, 176, 1);
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0);
  color: rgba(255, 255, 255, 1);
  font-size: 22px;
  font-family: SourceHanSansSC-regular;
}
.middle .live_tittle {
  position: absolute;
  left: 408px;
  top: 171px;
  width: 240px;
  height: 39px;
  color: rgba(30, 101, 159, 1);
  font-size: 26px;
  text-align: left;
  font-family: SourceHanSansSC-regular;
}
.middle .live {
  position: absolute;
  left: 408px;
  top: 290px;
  width: 687px;
  height: 394px;
  border-radius: 10px 10px 10px 10px;
}
.middle .parameter {
  position: absolute;
  left: 408px;
  top: 687px;
  width: 240px;
  height: 39px;
  color: rgba(30, 101, 159, 1);
  font-size: 26px;
  text-align: left;
  font-family: SourceHanSansSC-regular;
}
.middle .parameter_form  {
  position: absolute;
  left: 408px;
  top: 840px;
  width: 687px;
  height: 193px;
  border-radius: 10px 10px 10px 10px;
}
.right {
  width: 326px;
}
.right .right_tittle {
  position: absolute;
  left: 1150px;
  top: 171px;
  width: 270px;
  height: 39px;
  color: rgba(30, 101, 159, 1);
  font-size: 26px;
  text-align: left;
  font-family: SourceHanSansSC-regular;
}
.right .right_status {
  position: absolute;
  left: 1139px;
  top: 219px;
  width: 270px;
  height: 30px;
  color: rgba(92, 92, 92, 1);
  font-size: 20px;
  text-align: left;
  font-family: SourceHanSansSC-regular;
}
.right .right_statusform {
  position: absolute;
  background-image: url(../assets/backgroundtomato.jpg);
  left: 1132px;
  top: 320px;
  width: 283px;
  height: 410px;
  opacity: 0.86;
  border-radius: 10px;
}
.right .right_statusform .growdata {
  position: absolute;
  left: 9px;
  top: 40px;
  width: 125px;
  height: 25px;
  line-height: 20px;
  opacity: 0.8;
  border-radius: 10px 10px 10px 10px;
  background-color: rgb(255, 255, 255);
  color: rgba(30, 101, 159, 1);
  font-size: 20px;
  text-align: left;
  font-family: SourceHanSansSC-bold;
  border: 1px solid rgba(187, 187, 187, 1);
}
.right .right_statusform .growlength {
  position: absolute;
  padding-left: 10px;
  left: 9px;
  top: 80px;
  width: 112px;
  height: 22px;
  line-height: 20px;
  opacity: 0.8;
  border-radius: 10px 10px 10px 10px;
  background-color: rgb(255, 255, 255);
  color: rgba(0, 0, 0, 1);
  font-size: 14px;
  text-align: left;
  font-family: SourceHanSansSC-bold;
  border: 1px solid rgba(187, 187, 187, 1);
}
.right .right_statusform .growheight {
  position: absolute;
  padding-left: 10px;
  left: 135px;
  top: 80px;
  width: 112px;
  height: 22px;
  line-height: 20px;
  opacity: 0.8;
  border-radius: 10px 10px 10px 10px;
  background-color: rgb(255, 255, 255);
  color: rgba(0, 0, 0, 1);
  font-size: 14px;
  text-align: left;
  font-family: SourceHanSansSC-bold;
  border: 1px solid rgba(187, 187, 187, 1);
}
.right .right_statusform .livestatus {
  position: absolute;
  left: 9px;
  top: 120px;
  width: 125px;
  height: 25px;
  line-height: 20px;
  opacity: 0.8;
  border-radius: 10px 10px 10px 10px;
  background-color: rgb(255, 255, 255);
  color: rgba(30, 101, 159, 1);
  font-size: 20px;
  text-align: left;
  font-family: SourceHanSansSC-bold;
  border: 1px solid rgba(187, 187, 187, 1);
}
.right .right_statusform .statusdata {
  position: absolute;
  padding-left: 10px;
  left: 9px;
  top: 160px;
  width: 48px;
  height: 22px;
  line-height: 20px;
  opacity: 0.8;
  border-radius: 10px 10px 10px 10px;
  background-color: rgb(255, 255, 255);
  color: rgba(0, 0, 0, 1);
  font-size: 18px;
  text-align: left;
  font-family: SourceHanSansSC-bold;
  border: 1px solid rgba(187, 187, 187, 1);
}
.right .right_statusform .check {
  position: absolute;
  left: 9px;
  top: 200px;
  width: 125px;
  height: 25px;
  line-height: 20px;
  opacity: 0.8;
  border-radius: 10px 10px 10px 10px;
  background-color: rgb(255, 255, 255);
  color: rgba(30, 101, 159, 1);
  font-size: 20px;
  text-align: left;
  font-family: SourceHanSansSC-bold;
  border: 1px solid rgba(187, 187, 187, 1);
}
.right .right_statusform .checkdata {
  position: absolute;
  padding-left: 10px;
  left: 9px;
  top: 240px;
  width: 48px;
  height: 22px;
  line-height: 20px;
  opacity: 0.8;
  border-radius: 10px 10px 10px 10px;
  background-color: rgb(255, 255, 255);
  color: rgba(0, 0, 0, 1);
  font-size: 18px;
  text-align: left;
  font-family: SourceHanSansSC-bold;
  border: 1px solid rgba(187, 187, 187, 1);
}
.right .right_statusform .Testing {
  position: absolute;
  left: 9px;
  top: 280px;
  width: 125px;
  height: 25px;
  line-height: 20px;
  opacity: 0.8;
  border-radius: 10px 10px 10px 10px;
  background-color: rgb(255, 255, 255);
  color: rgba(30, 101, 159, 1);
  font-size: 20px;
  text-align: left;
  font-family: SourceHanSansSC-bold;
  border: 1px solid rgba(187, 187, 187, 1);
}
.right .right_statusform .Testingdata {
  position: absolute;
  padding-left: 10px;
  left: 9px;
  top: 320px;
  width: 64px;
  height: 22px;
  line-height: 20px;
  opacity: 0.8;
  border-radius: 10px 10px 10px 10px;
  background-color: rgb(255, 255, 255);
  color: rgba(0, 0, 0, 1);
  font-size: 18px;
  text-align: left;
  font-family: SourceHanSansSC-bold;
  border: 1px solid rgba(187, 187, 187, 1);
}
.right .growfrom {
  position: absolute;
  left: 1128px;
  top: 687px;
  width: 182px;
  height: 39px;
  color: rgba(30, 101, 159, 1);
  font-size: 26px;
  text-align: left;
  font-family: SourceHanSansSC-regular;
}
.right .growfrom_data img {
  position: absolute;
  left: 1130px;
  top: 810px;
  width: 257px;
  height: 187px;
}
</style>
