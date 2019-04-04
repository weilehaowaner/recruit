<template>
  <div>
    <mt-header fixed title="心动就报名吧"></mt-header>
    <div class="content">
      <mt-field label="姓名" placeholder="输入姓名" v-model="name"></mt-field>
      <mt-field label="email" placeholder="输入email" type="email" v-model="email"></mt-field>
      <mt-field label="qq号" placeholder="输入qq号"  v-model="qq"></mt-field>
      <mt-field label="电话" placeholder="输入电话"  type="number" v-model="phone"></mt-field>
      <mt-field label="专业" placeholder="输入专业"  v-model="profession"></mt-field>
      <mt-field label="班级" placeholder="输入班级"  v-model="classes"></mt-field>
      <mt-field label="出生年月" placeholder="选择出生年份" type="date" v-model="birthday"></mt-field>

      <mt-field label="个人简介" placeholder="输入个人简介" type="textarea" rows="4" v-model="introduction"></mt-field>
      <mt-field label="学习经历" placeholder="输入程序相关学习经历(若报ui、建模、视频后期方向的同学，请在此附上作品链接)" type="textarea" rows="4" v-model="experience"></mt-field>
      <mt-field label="学习计划" placeholder="输入你大学期间拟定的相关学习计划" type="textarea" rows="4" v-model="plan"></mt-field>
      <mt-checklist
        title="报名方向"
        v-model="direction"
        :options="['UI设计', '三维建模', '前端开发','android开发','ios开发','后端开发','产品经理','视频设计']">
      </mt-checklist>

      <mt-button type="default" size="normal"  @click="submitdata">报名</mt-button>
    </div>
  </div>
</template>

<script>
import { Field } from 'mint-ui'
import Vue from 'vue'

import axios from 'axios'
import { Button } from 'mint-ui'
import { Picker } from 'mint-ui'
import { Checklist } from 'mint-ui'
import { MessageBox } from 'mint-ui'

Vue.component(Button.name, Button)

Vue.component(Checklist.name, Checklist)

Vue.component(Field.name, Field)
Vue.component(Picker.name, Picker)
Vue.component()
export default {
  data: function () {
    return {
      name: '',
      email: '',
      qq: '',
      phone: '',
      profession: '',
      classes: '',
      birthday: '',
      introduction: '',
      experience: '',
      plan: '',
      direction: [],
      slots: [{values: ['年假', '事假', '病假', '婚假', '其他']}]
    }
  },
  methods: {
    submitdata: function (event) {
      let config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      if (this.name === '') {
        MessageBox.alert('请输入姓名')
      }
      else if (this.email === '')
      {
        MessageBox.alert('请输入邮箱')
      }
      else if (this.qq === '')
      {
        MessageBox.alert('请输入qq')
      }
      else if (this.phone === '') {
        MessageBox.alert('请输入电话')
      }
      else if (this.phone.length !== 11)
      {
        MessageBox.alert("请输入正确的号码格式")
      }
      else if (this.profession === '')
      {
        MessageBox.alert('请输入专业')
      }
      else if (this.classes === '')
      {
        MessageBox.alert('请输入班级')
      }
      else if (this.introduction === '')
      {
        MessageBox.alert('请输入个人简介')
      }
      else if (this.experience === '')
      {
        MessageBox.alert('请输入学习经历')
      }
      else if (this.plan === '')
      {
        MessageBox.alert('请输入学习计划')
      }
      else if (this.direction.length === 0) {
        MessageBox.alert('请选择报名方向')
      }
      else {
        try {
          axios.post('http://121.43.59.5:8080/new/new/insert', formData, config)
            .then((response) => {
              if (response.status === 200) {
                MessageBox.alert('操作成功').then(action => {
                  this.$router.push({
                    path: '/our',
                    name: 'our'
                  })
                })
              } else {
                MessageBox.alert('操作失败').then(action => {
                })
              }
            })
            .catch(response => {
              MessageBox.alert('操作失败').then(action => {

              })
            })
        } catch (e) {
          MessageBox.alert('操作失败').then(action => {

          })
        }
      }
    }
  }
}
</script>
<style scoped>
  .content {
    margin-top: 40px;
  }
</style>
