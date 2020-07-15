<template>
  <div>
    <!-- 背景图 -->
    <div class='background'>
      <img src="../assets/background.jpg" width="100%" height="100%" alt="img" />
    </div>
    <div class="login_sign">
      <img src="../assets/sign.png" alt="img" />
      <h1 class="h1">巴蜀农经</h1>
      <h2>智慧农业研究生产系统</h2>
    </div>
    <div class='login_box'>
      <div class='line'></div>
      <!-- 表单 -->
      <el-form :model="loginForm" :rules="loginFormRules" ref="loginFormRef" label-width="0px" class='login_form'>
        <h3>登录/Login</h3>
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" type="password"></el-input>
        </el-form-item>
        <!-- 验证码 -->
        <el-form-item prop="verifycode">
          <el-input class="verifycode" style="width:150px" v-model="loginForm.verifycode"></el-input>
          <img src="../assets/verifycode.png" class="verifyimg" />
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item class="button">
          <el-button type="primary" style="width: 280px" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 表单数据绑定
      loginForm: {
        username: 'lalala',
        password: '666666',
        verifycode: null
      },
      // 表单合法性验证规则
      loginFormRules: {
        username: [
          { required: true, message: '请输入登录名称', trigger: 'blur' },
          { min: 3, max: 8, message: '长度在3到8个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          { min: 6, max: 12, message: '长度在6到12个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login () {
      this.$refs.loginFormRef.validate(valid => {
        console.log(valid)
      })
    }
  }
}
</script>

<style scoped>
.h1 {
  position: relative;
  left: 15%;
}
.line {
  width: 3px;
  height: 300px;
  background-color: rgb(255, 255, 255);
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 10%;
}
.background {
  filter: blur(3px);
  width: 100%;
  height: 100%;
  z-index: -1;
  position: absolute;
}
.login_sign {
  position: absolute;
  left: 30%;
  top: 25%;
  z-index: 2;
}
.login_box {
  width: 800px;
  height: 400px;
  background-color: lightslategray;
  border-radius: 3px;
  position: absolute;
  left: 25%;
  top: 20%;
  z-index: 1;
  opacity: 0.5;
}
.login_form {
  position: absolute;
  bottom: 0px;
  width: 40%;
  padding: 0 20px;
  top: 10%;
  left: 55%;
  box-sizing: border-box;
  z-index: 2;
}
.verifycode {
  position: absolute;
  width: 50ox;
}
.verifyimg {
  position: absolute;
  width: 130px;
  height: 40px;
  left: 55%;
}
.button {
  position: absolute;
  top: 70%;
}
</style>
