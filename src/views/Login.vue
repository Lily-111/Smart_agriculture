<template>
  <div class="container">
    <div class="login_box">
      <div class="login_sign">
        <!-- 标志 -->
        <img src="../assets/sign.png" class="sign_img" />
        <h1>巴蜀农经</h1>
        <h2>智慧农业研究生产系统</h2>
      </div>
      <div class="line"></div>
      <!-- 表单 -->
    <el-form
      :model="loginForm"
      :rules="fieldRules"
      status-icon
      hide-required-asterisk
      ref="loginForm"
      label-position="left"
      label-width="10px"
      class="demo-ruleForm login_form"
    >
      <h3 class="title">系统登录</h3>
      <el-form-item prop="username">
        <el-input
          type="text"
          v-model="loginForm.username"
          auto-complete="off"
          placeholder="请输入手机号或者用户名"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          type="password"
          v-model="loginForm.password"
          auto-complete="off"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item prop="code">
        <el-row>
          <el-col :span="15">
            <el-input
              v-model="loginForm.code"
              auto-complete="off"
              placeholder="请输入验证码">
            </el-input>
          </el-col>
          <el-col :span="6" class="verifyimg">
            <!-- <img src="../assets/verifycode.png"  /> -->
            <img :src="base64" />
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item style="width: 100%">
        <el-button
          type="primary"
          style="width: 48%"
          @click.native.prevent="login"
          :loading="logining"
          >登 录</el-button
        >
        <el-button
          type="info"
          style="width: 48%"
          @click.native.prevent="reset"
          >重 置</el-button
        >
      </el-form-item>
    </el-form>
    </div>
  </div>
</template>

<script>
export default {
  mounted(){
    var that = this;
    this.$axios({
      method:'GET',
      url:'http://114.116.228.239:8081/api/code'
    }).then(res => {
      that.base64 ="data:image/png;base64," + res.data.data.code
      that.loginForm.identify = res.data.data.identify
      console.log(res)
    })
  },
 data() {
    var checkUserName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入您的手机号或者邮箱"));
      } else {
        callback();
      }
    };
    var checkPassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入您的密码"));
      } else {
        callback();
      }
    };
  var checkCode = (rule, value, callback) =>{
      if (value === "") {
        callback(new Error("请输入验证码"));
      } else {
        callback();
      }
  }
    return {
      logining: false,
      base64:"",
      loginForm: {
        username: "",
        password: "",
        identify:"",
        code:""
      },
      fieldRules: {
        username: [{ validator: checkUserName, trigger: "blur" },
        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }],
        password: [{ validator: checkPassword, trigger: "blur" },
        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }],
        code:[{ validator:checkCode, trigger: 'blur' }]
      },
      logining: false,
    };
  },
  methods: {
    login() {
      var that = this;
      this.logining = true;
      this.$refs.loginForm.validate((val) => {
        if (val) {
         that.logining = false
         that.$axios({
           method:'POST',
           url:'http://114.116.228.239:8081/api/login',
           data:that.loginForm,
         }).then( res =>{
           console.log(res)
           if(res.data.code === 200){
             that.$router.push('/page1')
           }else{
             that.$message("登录失败")
           }
         })
        // that.$message('登录成功')
        // that.$router.push('/page1')
        } else {
          alert("检查表单后重新提交");
          that.logining = false
          return false;
        }
      });
    },
    reset() {
      this.$refs.loginForm.resetFields();
    },
  },
};
</script>

<style scoped>
#app{
width: 100%;
height: 100%;
}
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
  top: 5%;
  left: 55%;
  z-index: 2;
}
.title{
  margin-left: 10px;
}
/* .input {
  background: none;
  width: 80%;
  border: 0;
  outline: none;
  color: rgb(255, 255, 255);
  padding: 10px 0;
  font-size: 15px;
} */
.el-input{
  width: 80%;
}
.verifyimg {
  width: 80px;
  height: 25px;

}
.verifyimg img{
  width: 100px;
  height: 40px;
}
.button {
  padding: 10px 0;
  border-radius: 20px;
}
</style>




      // <el-form
      //   :model="loginForm"
      //   :rules="loginFormRules"
      //   ref="loginFormRef"
      //   label-width="0px"
      //   class="login_form"
      // >
      //   <h3 style="color:#ffff">登录/Login</h3>

      //   <el-form-item prop="username">
      //     <el-input
      //       class="input"
      //       v-model="loginForm.username"
      //       placeholder="请输入用户名">
      //     </el-input>
      //   </el-form-item>
      //   <el-form-item>
      //     <el-input
      //       class="input"
      //       v-model="loginForm.password"
      //       type="password"
      //       placeholder="请输入密码">
      //     </el-input>
      //   </el-form-item>
      //   <el-input
      //     class="input"
      //     style="width:120px"
      //     v-model="loginForm.verifycode"
      //     placeholder="请输入验证码"
      //   />
      //   <img src="../assets/verifycode.png" class="verifyimg" />
      //   <el-form-item class="button">
      //     <el-button type="primary" style="width: 230px" @click="login"
      //       >登录</el-button
      //     >
      //   </el-form-item>
      // </el-form>