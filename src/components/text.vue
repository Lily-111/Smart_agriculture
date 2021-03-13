<template>
  <div class="container"></div>
</template>
<script>
export default {

}
      const url =
        "/apiUrl/api/v1/iotat-user-center/shop/register";
      this.$axios({
        method: "POST",
        url: url,
        data: {
          shopName: "店铺名123",
          shopType: 3,
          shopIntroduce: "店铺介绍456",
          shopBan: "中国银行",
          shopBankNumber: "123456789123456789",
          shopManagerRealName: "张三",
          shopManagerPhoneNum: "13312345678",
          shopManagerMail: "418817150@qq.com",
          shopManagerIdCard: "100100200001011234",
          shopAddressText: "四川省绵阳市西南科技大学东9=A350",
          loginPassword: "123456",
          loginPasswordCheck: "123456",
          ticket:
            "t03mJp9hN337iSknoAS552-EUa0bXQe9OhrKoxWqjr5OmjNWA2NFSLbKL6OFZahhGOLznVH7S-cXuRVyiVmQe6PyrAYDIRHGydNcU6h5GEMq6A*",
          randomStr: "@dF5"
        },
        headers: {
          "Content-Type": "application/json;charset=UTF-8"
        }
      }).then(res => {
        console.log(res);
      });
</script>
