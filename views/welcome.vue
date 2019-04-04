<template>
  <div id="welcome">
    <mt-header fixed title="关于我们"></mt-header>
    <div class="wrap">
      <p>初次见面，我们是矗立在一实顶端的组织</p>
      <div class="text-body">
        <div class="pic1"></div>
        <p>现在是晚上<br/>6:03<br/>回想起在实验室的日子里<br/>一口气跑到第一实验楼的楼顶<br/>
          气喘吁吁地打完卡<br/>然后坐下来<br/></p>
      </div>
      <div class="foot">
        <p style="font-size: 15px;">目前主要创新研究方向包括</p>
        <div>01</div>
        <p style="font-size: 14px;"> 5G网络环境下的Web AR应用创新研究</p>
        <p style="text-align: left;text-indent: 2.6em">在5G的环境下，借助于新型的移动网络形态，应用移动边缘计算、软件定义网络等技术，以智
          能移动终端为业务载体，以移动浏览器为业务平台，辅助物联网等技术，实现相关业务环境的随
          时随地的快捷建立。
        </p>
        <div>02</div>
        <p style="font-size:14px;"> 基于互联网新技术的应用拓展探索</p>
        <p style="text-align:left;text-indent: 2.6em">针对于目前区块链、大数据等新的技术应用，结合在具体的业务应用场景以及相关
          专业方向,进行应用创新，实现新技术在新场景方面的技术尝试，为相关技术的创新产业化应用提供技术支
          持。
        </p>
        <p>不忘初心</p>
        <p>继续前行</p>
        <p>在未来的日子里</p>
        <p>让我们继续携手前行</p>
        <p>欢迎曾经以及现在在实验室的</p>
        <p>把自己在实现码农梦路上的心得</p>
        <p>分享给大家</p>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  name: 'welcome'
}
</script>

<style scoped>
  p{
    font-size:12px;
    word-break: break-all;
    word-wrap: break-word;
    letter-spacing: 0.3em;
    line-height: 2em;
  }
  .wrap {
    width: 100%;
    display:flex;
    flex-direction: column;
    justify-content:center;
  }
  .text-body{
    display: flex;
    width:95%;
    flex-direction: column;
    text-align:center;
    margin:0 auto;
  }
  .foot{
    width:95%;
    display: flex;
    /*align-items: flex-start;*/
    flex-direction: column;
    text-align: center;
    /*position:relative;*/
    margin:0 auto;
  }
  .foot div{
    width:25px;
    height:25px;
    border-radius: 50%;
    background-color: yellow;
    align-items: center;
    color:black;
    margin:0 auto;
  }
  span{
    color: red;
  }
  .pic1{
    width:100px;
    height:100px;
    background: url("../static/640.gif") no-repeat;
    background-size:cover;
    margin:0 auto;
  }
  .pic2{
    width:160px;
    height:48px;
    background:url("../static/603img14.png")no-repeat;
    margin:0 auto;
  }
  .pic3{
    width:160px;
    height:48px;
    background:url("../static/603img15.png") no-repeat;
    margin:10px auto;
  }
</style>
