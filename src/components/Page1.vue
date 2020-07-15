<template>
  <div>
    <el-container id="page">
      <el-aside width="73px">
        <div>2</div>
        <div>3</div>
      </el-aside>
      <el-main class="left">1
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
      </el-main>
      <el-main class="middle">2</el-main>
      <el-main class="right">3</el-main>
    </el-container>
  </div>
</template>

<script>
export default {}
</script>

<style>
#page {
  /* left: 0px;
  top: 0px; */
  margin: 0 auto;
  width: 1440px;
  height: 1028px;
  background-color: rgba(254, 254, 254, 1);
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
  padding-top: 20px;
}
.el-main {
  /* background-color: #e9eef3; */
  text-align: center;
  line-height: 160px;
}
.left {
  width: 316px;
  background-color: red;
}
.middle {
  width: 724px;
  background-color: blue;
}
.right {
  width: 326px;
  background-color: chartreuse;
}
</style>
