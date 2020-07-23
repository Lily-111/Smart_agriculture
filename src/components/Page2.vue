<template>
  <div>
    <el-container id="page">
      <el-aside width="73px">
        <div class="asidelogo1">
          <img @click="topage1" src="../assets/thermometer1.png">
        </div>
        <div class="asidelogo2">
          <img src="../assets/insect2.png">
        </div>
      </el-aside>
      <el-main class="left">
        <div class="left_logo">
          <div class="tittle1">自调节园区</div>
          <div class="tittle2">Plant research laboratory</div>
        </div>
        <div class="room1">
          <div class="tomatoroom1">一号园区</div>
          <div class="tomatoroom2">No.1 Plantation Park</div>
        </div>
        <div class="tomato_picture"><img src="../assets/tomato.jpg" alt=""></div>
        <div class="room2">
          <div class="orchidroom1">二号园区</div>
          <div class="orchidroom2">No.2 Plantation Park</div>
        </div>
        <div class="orchid_picture"><img src="../assets/orchid.jpg" alt=""></div>
        <div class="room3">
          <div class="Polygonatumroom1">三号园区</div>
          <div class="Polygonatumroom2">No.3 Plantation Park</div>
        </div>
        <div class="Polygonatum_picture"><img src="../assets/Polygonatum.jpg" alt=""></div>
      </el-main>
      <el-main class="middle">
        <div class="middle_tittle">涪韩科技全体成员：恭祝2020全国大学生物联网设计竞赛顺利举行</div>
        <div class="live_tittle">园区灌溉情况 </div>
        <div class="map">
          <img src="../assets/map.png">
        </div>
        <div class="hei" v-bind:style="{display:show}" @click="stop">
          <img src="../assets/1.png" alt="">
        </div>
        <button class="download" @click="download">无人机灌溉路线图下载</button>
        <div class="parameter">气象信息 </div>
        <div class="parameter_form">
          <iframe src="static/weather.html" width="689px" height="250px" frameborder="0"></iframe>
        </div>
      </el-main>
      <el-main class="right">
        <div class="iconfont right_tittle">&#xe5ca;监测点信息</div>
        <div class="card1">
          <div class="card_top">
            <div class="number">编号:{{ carddata[0].card_number }} <span v-if="!carddata[0].danger"
                class="iconfont tb">&#xe62f;</span> <span v-if="carddata[0].danger" class="iconfont tb2">&#xe55b;</span>
            </div>
            <div class="location">位置:{{ carddata[0].card_location }}</div>
          </div>
          <div class="card_bottom">
            <div class="line">
              <span class="mr15">温度：{{ carddata[0].temperature }}°C</span>
              <span class="ml15">含氮量：{{ carddata[0].htl }}mg/kg</span>
            </div>
            <div class="line">
              <span class="mr15">光照：{{carddata[0].illumination}}lux</span>
              <span class="ml15">含磷量：{{ carddata[0].hll }}mg/kg</span>
            </div>
            <div class="line">
              <span class="mr15">湿度：{{ carddata[0].humidity }}%rh</span>
              <span class="ml15">含钾量：{{carddata[0].hjl}}mg/kg</span>
            </div>
          </div>
        </div>
        <div class="card2">
          <div class="card_top">
            <div class="number">编号:{{ carddata[1].card_number }} <span v-if="!carddata[1].danger"
                class="iconfont tb">&#xe62f;</span> <span v-if="carddata[1].danger" class="iconfont tb2">&#xe55b;</span>
            </div>
            <div class="location">位置:{{ carddata[1].card_location }}</div>
          </div>
          <div class="card_bottom">
            <div class="line">
              <span class="mr15">温度：{{ carddata[1].temperature }}°C</span>
              <span class="ml15">含氮量：{{ carddata[1].htl }}mg/kg</span>
            </div>
            <div class="line">
              <span class="mr15">光照：{{carddata[1].illumination}}lux</span>
              <span class="ml15">含磷量：{{ carddata[1].hll }}mg/kg</span>
            </div>
            <div class="line">
              <span class="mr15">湿度：{{ carddata[1].humidity }}%rh</span>
              <span class="ml15">含钾量：{{carddata[1].hjl}}mg/kg</span>
            </div>
          </div>
        </div>
        <div class="card3">
          <div class="card_top">
            <div class="number">编号:{{ carddata[2].card_number }} <span v-if="!carddata[2].danger"
                class="iconfont tb">&#xe62f;</span> <span v-if="carddata[2].danger" class="iconfont tb2">&#xe55b;</span>
            </div>
            <div class="location">位置:{{ carddata[2].card_location }}</div>
          </div>
          <div class="card_bottom">
            <div class="line">
              <span class="mr15">温度：{{ carddata[2].temperature }}°C</span>
              <span class="ml15">含氮量：{{ carddata[2].htl }}mg/kg</span>
            </div>
            <div class="line">
              <span class="mr15">光照：{{carddata[2].illumination}}lux</span>
              <span class="ml15">含磷量：{{ carddata[2].hll }}mg/kg</span>
            </div>
            <div class="line">
              <span class="mr15">湿度：{{ carddata[2].humidity }}%rh</span>
              <span class="ml15">含钾量：{{carddata[2].hjl}}mg/kg</span>
            </div>
          </div>
        </div>
        <div class="card4">
          <div class="card_top">
            <div class="number">编号:{{ carddata[3].card_number }} <span v-if="!carddata[3].danger"
                class="iconfont tb">&#xe62f;</span> <span v-if="carddata[3].danger" class="iconfont tb2">&#xe55b;</span>
            </div>
            <div class="location">位置:{{ carddata[3].card_location }}</div>
          </div>
          <div class="card_bottom">
            <div class="line">
              <span class="mr15">温度：{{ carddata[3].temperature }}°C</span>
              <span class="ml15">含氮量：{{ carddata[3].htl }}mg/kg</span>
            </div>
            <div class="line">
              <span class="mr15">光照：{{carddata[3].illumination}}lux</span>
              <span class="ml15">含磷量：{{ carddata[3].hll }}mg/kg</span>
            </div>
            <div class="line">
              <span class="mr15">湿度：{{ carddata[3].humidity }}%rh</span>
              <span class="ml15">含钾量：{{carddata[3].hjl}}mg/kg</span>
            </div>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: 'none',
      carddata: [{
        card_number: 'FH01-001',
        card_location: '一号园区(100,200)',
        danger: false,
        temperature: 26.5,
        illumination: 30,
        humidity: 56,
        htl: 131,
        hll: 40,
        hjl: 190
      },
      {
        card_number: 'FH01-002',
        card_location: '一号园区(100,2000)',
        danger: false,
        temperature: 27,
        illumination: 30,
        humidity: 66,
        htl: 129,
        hll: 50,
        hjl: 195
      },
      {
        card_number: 'FH01-003',
        card_location: '一号园区(100,200)',
        danger: false,
        temperature: 26.5,
        illumination: 35,
        humidity: 60,
        htl: 131,
        hll: 38,
        hjl: 169
      },
      {
        card_number: 'FH01-004',
        card_location: '一号园区(1000,250)',
        danger: true,
        temperature: 28,
        illumination: 30,
        humidity: 26,
        htl: 150,
        hll: 66,
        hjl: 200
      }],
      card_number: 'FH01-001',
      card_location: '一号园区(600，500)',
      danger: true
    }
  },
  mounted () {
    // var that = this// 保留this指向vue界面的状态
    this.$axios({
      method: 'POST',
      url: 'https://iam.cn-north-4.myhuaweicloud.com/v3/auth/tokens',
      params: {
        auth: {
          identity: {
            methods: ['password'],
            password: {
              user: {
                name: 'EdBric',
                password: '19@iotat',
                domain: {
                  name: 'EdBric'
                }
              }
            }
          },
          scope: {
            domain: {
              name: 'EdBric'
            }
          }
        }
      },
      headers: {
        'X-Auth-Token': '***',
        'User-Agent': 'API Explorer',
        'Content-Type': 'application/json;charset=UTF-8'
      }
    }).then(res => {
      console.log(res)// res变量获取到的打印出来
      console.log(res.data.data) // 请求成功返回的数据
    })
  },
  methods: {
    topage1 () {
      this.$router.push('/page1')
    },
    download () {
      this.show = 'block'
    },
    stop () {
      this.show = 'none'
    }

  }
}
</script>

<style scoped>
@font-face {
  font-family: "iconfont";
  src: url("../assets/iconfont/iconfont.eot");
  src: url("../assets/iconfont/iconfont.eot?#iefix") format("embedded-opentype"),
    url("../assets/iconfont/iconfont.woff2") format("woff2"),
    url("../assets/iconfont/iconfont.woff") format("woff"),
    url("../assets/iconfont/iconfont.ttf") format("truetype"),
    url("../assets/iconfont/iconfont.svg#iconfont") format("svg");
}
.hei {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding-bottom: -1000rem;
  background: rgba(0, 0, 0, 0.1);
  z-index: 100;
}
.hei img {
  position: absolute;
  top: 210px;
  left: 435px;
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 20px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.mr15 {
  /* text-align: left; */
  margin-right: 15px;
}
.ml15 {
  /* text-align: right; */
  margin-left: 15px;
}

#page {
  /* left: 0px;
  top: 0px; */
  position: relative;
  margin: 0 auto;
  width: 1440px;
  height: 1028px;
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
  /* background-color: #e9eef3; */
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
  padding-top: 19px;
  left: 408px;
  top: 67px;
  width: 687px;
  height: 41px;
  line-height: 20px;
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
/* .middle .map {
  position: absolute;
  left: 408px;
  top: 290px;
  width: 687px;
  height: 394px;
  border-radius: 10px 10px 10px 10px;
} */
.map img {
  /* width: 687px;
  height: 394px; */
  position: absolute;
  left: 408px;
  top: 290px;
  width: 687px;
  height: 394px;
  border-radius: 10px 10px 10px 10px;
}
.middle .download {
  position: absolute;
  left: 414px;
  top: 645px;
  width: 165px;
  height: 22px;
  line-height: 20px;
  /* opacity: 1.58;
  color: aliceblue; */
  border-radius: 10px 10px 10px 10px;
  text-align: center;
  border: 1px solid rgba(187, 187, 187, 1);
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
.middle .parameter_form {
  position: absolute;
  left: 408px;
  top: 808px;
  width: 687px;
  height: 250px;
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
.right .card1 {
  position: absolute;

  left: 1139px;
  top: 290px;
  width: 270px;
  height: 164px;
  line-height: 20px;
  opacity: 0.42;
  border-radius: 10px 10px 10px 10px;
  color: rgba(16, 16, 16, 1);
  font-size: 14px;
  text-align: center;
  font-family: Roboto;
  border: 1px solid rgba(92, 92, 92, 1);
}
.right .card2 {
  position: absolute;

  left: 1139px;
  top: 470px;
  width: 270px;
  height: 164px;
  line-height: 20px;
  opacity: 0.42;
  border-radius: 10px 10px 10px 10px;
  color: rgba(16, 16, 16, 1);
  font-size: 14px;
  text-align: center;
  font-family: Roboto;
  border: 1px solid rgba(92, 92, 92, 1);
}
.right .card3 {
  position: absolute;
  left: 1139px;
  top: 650px;
  width: 270px;
  height: 164px;
  line-height: 20px;
  opacity: 0.42;
  border-radius: 10px 10px 10px 10px;
  color: rgba(16, 16, 16, 1);
  font-size: 14px;
  text-align: center;
  font-family: Roboto;
  border: 1px solid rgba(92, 92, 92, 1);
}
.right .card4 {
  position: absolute;
  left: 1139px;
  top: 830px;
  width: 270px;
  height: 164px;
  line-height: 20px;
  opacity: 0.42;
  border-radius: 10px 10px 10px 10px;
  color: rgba(16, 16, 16, 1);
  font-size: 14px;
  text-align: center;
  font-family: Roboto;
  border: 1px solid rgba(92, 92, 92, 1);
}
.card_top {
  width: 252px;
  height: 55px;
  margin-left: 8px;
  border-bottom: 1px solid black;
}
.tb {
  font-size: 35px;
  color: yellow;
  position: absolute;
  left: 221px;
  top: 13px;
  width: 37px;
  height: 37px;
}
.tb2 {
  font-size: 35px;
  color: red;
  position: absolute;
  left: 221px;
  top: 13px;
  width: 37px;
  height: 37px;
}
.number {
  padding-left: 8px;
  margin-top: 5px;
  width: 115px;
  height: 21px;
  color: rgba(79, 85, 108, 1);
  font-size: 16px;
  text-align: left;
  font-family: SourceHanSansSC-regular;
}
.location {
  padding-left: 8px;
  margin-top: 5px;
  width: 200px;
  height: 21px;
  color: rgba(79, 85, 108, 1);
  font-size: 16px;
  text-align: left;
  font-family: SourceHanSansSC-regular;
}
.card_bottom {
  height: 90px;
  width: 252px;
  margin-left: 8px;
  margin-top: 8px;
}
.card_bottom .line {
  text-align: justify;
  margin-bottom: 4px;
}
</style>
