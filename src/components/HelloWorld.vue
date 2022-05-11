<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{userData.name}}</h1>
    <button @click="sendMail">点击发送邮件</button>
  </div>
</template>

<script>
const nodemailer = require("nodemailer");
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    userData: Object
  },
  data() {
    return {

    }
  },
  methods: {
    sendMail() {
      let transporter = nodemailer.createTransport({
        service: "QQ",//发送方邮件qq
        port: 465,//端口号
        secureConnection: true,
        auth: {
          user: '1501222068@qq.com', // 发送方邮箱地址
          pass: 'mfeuabanznvggcbd'//验证码 获取验证码请查看后面步骤
        }
      });
      //邮件信息
      let mailInfo = {
        from: '"测试" <1501222068@qq.com>', // 发送方邮箱地址
        to: "2915666871@qq.com", // 接收方邮箱
        subject: "测试", // 标题
        text: "Hello world?", // 邮箱内容
        // html: "<b>Hello world?</b>",
        // attachments: [
        // 	{
        // 			filename: 'text.txt',//附件名称
        // 			path: './text.txt'//附件的位置
        // 	}
        // 	]
      }
      //发送邮件
      transporter.sendMail(mailInfo, (err, data) => {
        if (!err) {
          console.log('成功', data);
        } else {
          console.log("🚀 ~ file: emailBoom.js ~ line 36 ~ transporter.sendMail ~ err", err)
        }

      });
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
