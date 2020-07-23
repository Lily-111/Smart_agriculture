<template>
  <div class="container">
    <div class='login_box'>
      <div class="login_sign">
        <!-- 标志 -->
        <img src="../assets/sign.png" class="sign_img" />
        <h1>巴蜀农经</h1>
        <h2>智慧农业研究生产系统</h2>
      </div>
      <div class='line'></div>
      <!-- 表单 -->
      <el-form :model="loginForm" :rules="loginFormRules" ref="loginFormRef" label-width="0px" class='login_form'>
        <h3 style="color:#ffff">登录/Login</h3>
        <!-- 用户名 -->
        <input class="input" v-model="loginForm.username" />
        <!-- 密码 -->
        <input class="input" v-model="loginForm.password" type="password" />
        <!-- 验证码 -->
        <input class="input" style="width:120px" v-model="loginForm.verifycode" />
        <img src="../assets/verifycode.png" class="verifyimg" />
        <!-- 按钮 -->
        <el-form-item class='button'>
          <el-button type="primary" style="width: 230px" @click="login">登录</el-button>
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
        verifycode: '验证码'
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
        this.$router.push('/page1')
      })
    }
  }
}
</script>

<style>
.container {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to right, #302b63, #b7f8db);
}
.login_box {
  width: 700px;
  height: 350px;
  background-color: #2a5298;
  border-radius: 30px;
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 1;
  opacity: 0.8;
  transform: translate(-50%, -50%);
  /* animation: in 0.5s ease-out forwards; */
}
.sign_img {
  width: 150px;
  position: absolute;
  left: 10%;
}
h1 {
  color: #ffffff;
  position: absolute;
  left: 15%;
  top: 70%;
}
h2 {
  color: #ffffff;
  position: absolute;
  top: 100%;
  left: 0%;
}
.login_sign {
  width: 300px;
  height: 200px;
  position: absolute;
  left: 10%;
  top: 10%;
}
.line {
  width: 3px;
  height: 250px;
  background-color: rgb(255, 255, 255);
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 15%;
}
.login_form {
  position: absolute;
  width: 40%;
  top: 10%;
  left: 60%;
  /* box-sizing: border-box; */
  z-index: 2;
}
.input {
  background: none;
  width: 80%;
  border: 0;
  outline: none;
  color: rgb(255, 255, 255);
  padding: 10px 0;
  border-bottom: 1px solid rgb(255, 255, 255);
  font-size: 15px;
}
.verifyimg {
  position: absolute;
  width: 90px;
  height: 25px;
  left: 50%;
  top: 60%;
}
.button {
  padding: 10px 0;
  border-radius: 20px;
}
</style>
