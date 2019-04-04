<template>
  <div>
    <mt-header fixed title="规章制度"></mt-header>
    <div class="wrap">
      <p>日常规定 | 我敢保证,不遵守规定的人会默到手断</p>
      <div class="text-body">
        <div class="pic1"></div>
        <div class="pic3"></div>
        <h1>考勤时间</h1>
        <p>实验室时间考勤上采用规定考勤和自主考勤两种方式。</p>
        <h2>规定考勤</h2>
        <h3>主要针对对象：</h3><p>大一、大二学生</p>
        <h3>时间安排：</h3>
        <table border="1" cellspacing="0" >
          <tr>
            <td style="font-size: 13px;letter-spacing: 0.2em">时段一</td>
            <td style="font-size: 13px;letter-spacing: 0.2em">时段二</td>
            <td style="font-size: 13px;letter-spacing: 0.2em">时段三</td></tr>
          <tr>
            <td style="font-size: 13px;letter-spacing: 0.2em;line-height:2.2em">
              周日至周四
              <br>
              18:00-21:30
            </td>
            <td style="font-size: 13px;letter-spacing: 0.2em;line-height:2.2em">
              周六至周日<br>
              9:00-11:30<br>
              13:30-17:00
            </td>
            <td style="font-size: 13px;letter-spacing: 0.2em;line-height:2.2em">
              周五至周六<br>
              18:00-21:30
            </td>
          </tr>
        </table>
        <h3>要求</h3>
        <p>1、时段I、II要求严格按照考勤要求；时段III可以根据个体情况进行安排。</p>
        <p>2、在规定时间内需要到达实验室进行打卡签到，离开实验室时进行打卡签离。</p>
        <P>3、在考勤时间内，如果离开实验室区域超过一个小时，需在钉钉上提交请假申请。</P>

        <h2>自主考勤</h2>
        <h3>主要针对对象：</h3><p>表现符合要求的大一、大二以及大三、大四</p>
        <h3>时间安排：</h3><p>周一至周日  早7：00-22：00.</p>
        <h3>要求：</h3><p>到实验室进行打卡签到，离开实验室进行打卡签离，每周计算有效工作时间。</p>
        <div class="pic2"></div>
        <h1>实验室纪律要求</h1>
        <p>1、实验室内在<span>时段I，时段II时间内禁止打游戏，包括手机游戏</span>，第一次抓到做警告处理；第二次做清离处理。</p>
        <p>2、实验室<span>禁止虚假打卡（人不在实验室，但是打卡）和代打卡情况</span>，一经发现做清离处理。</p>
        <p>3、实验室内<span>要求严格注意用电安全</span>，人员离开时，关闭桌子上的电源开关；最后一个离开实验室的同学需要关闭实验室的电灯和门窗。</p>
        <p>4、实验室对于考勤人员<span>每周要求固定学习时间不少于20小时</span>；连续2周或者是在一 学期内无正当理由情况下3周不满足20小时最低时间的情况下，收回实验室固定位置，改为流动位置</p>
      </div>

    </div>
  </div>
</template>

<script>
  export default{
    name: 'regulation'
  }
</script>

  <style scoped>
  .wrap {
    width: 100%;
    display:flex;
    flex-direction: column;
    justify-content:center;
  }
  .wrap> p{
    margin-top: 50px;
    font-size: 13px;
    text-align: center;
  }
  p{
    font-size:12px;
    word-break: break-all;
    word-wrap: break-word;
    letter-spacing: 0.3em;
    line-height: 2em;
  }
  h3{
    font-size:14px;
  }
  h2{
    font-size:16px;
  }
  h1{
    font-size:18px;
  }
  .text-head{
    display: flex;
    justify-content:center;
    text-align:center;
    flex-direction: column;
    margin:60px auto;
  }
  .text-body{
    display: flex;
    width:95%;
    flex-direction: column;
    /*text-align:center;*/
    margin:0 auto;
  }
  .pic1{
    width:200px;
    height:100px;
    background: url("../static/603img1.png")no-repeat;
    margin:0 auto;
  }
  .pic2{
    width:133px;
    height:55px;
    background: url("../static/603img2.png") no-repeat;
    margin:40px auto;
  }
  .pic3{
    width:133px;
    height:55px;
    background: url("../static/img3.png") no-repeat;
    margin:10px auto;
  }
  table {
    width: 100%;
    text-align: center;
  }
  span{
    font-weight:bold;
  }
</style>
