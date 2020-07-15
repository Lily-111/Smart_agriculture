<template>
  <div class='login'>
    <div class='login_box'>
      <!-- 表单 -->
      <el-form :model="loginForm" :rules="loginFormRules" ref="loginFormRef" label-width="0px" class='login_form'>
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" type="password"></el-input>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item>
          <el-button type="primary" @click="login">登录</el-button>
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
        password: '666'
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

<style scoped>
.login_box {
  width: 450px;
  height: 300px;
  background-color: lightslategray;
  border-radius: 3px;
  position: absolute;
  left: 40%;
  top: 20%;
}
.login_form {
  position: absolute;
  bottom: 0px;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
</style>
