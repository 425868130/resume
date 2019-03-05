<template>
  <div id="app" class="root">
    <Row>
      <!-- 个性签名部分 -->
      <Row class="top-img">
        <Row class="signatrue">
          <Col
            class="sign-text"
            :xs="{span:22,offset:-2}"
            :sm="{span:13,offset:4}"
            :lg="{span:10,offset:6}"
            :md="{span:13,offset:4}"
          >不曾执着追求，就别无谓奢望</Col>
        </Row>
      </Row>
    </Row>
    <!-- 个人简介 -->
    <Row>
      <Col :xs="{span:20,offset:2}" :lg="{span:16,offset:4}">
        <Row class="info-row">
          <!-- 姓名 -->
          <Col :xs="{span:18}" :lg="{span:18}">
            <span class="my-name">徐嘉伟</span>
          </Col>
          <!-- 照片 -->
          <Col :xs="{span:6}" :lg="{span:4,offset:1}">
            <Row type="flex" justify="center" align="top">
              <img src="./assets/photo.jpg" class="photo">
            </Row>
          </Col>
          <!-- 联系信息 -->
          <Col class="text-hidden" span="24">
            <Icon type="md-heart"/>&nbsp;&nbsp;求职意向: 软件开发
            <br>
            <Icon type="md-chatboxes"/>&nbsp;&nbsp;微信/手机: 13016343745
            <br>
            <Icon type="md-people"/>&nbsp;&nbsp;QQ&nbsp;号码: 425868130
            <br>
            <Icon type="md-mail"/>&nbsp;&nbsp;邮箱地址:
            <a
              href="mailto:425868130@outlook.com"
              class="none-style-a"
            >425868130@outlook.com</a>
            <br>
            <Icon type="logo-github"/>&nbsp;&nbsp;
            <a
              href="https://github.com/425868130?tab=repositories"
              target="_blank"
              class="none-style-a"
            >GitHub: github.com/425868130?tab=repositories</a>
            <br>
            <!-- <Icon type="md-heart"/>&nbsp;&nbsp;个人博客: Java软件开发
            <br>-->
          </Col>
        </Row>
        <p class="second-title">IT技能</p>
        <!-- 技能雷达图 -->
        <Row type="flex" justify="center"></Row>
        <Row type="flex" justify="start" align="top">
          <Col :xs="{span:24}" :lg="{span:11}">
            <div ref="radarMap" class="radarMap"></div>
            <p class="radar-tips">注:本图例只代表各维度技能的相对熟练度</p>
          </Col>
          <Col class="col" :lg="{span:13}">计算机语言：C、Java、JavaScript、Android、Node.js
            <p class="col">数据库软件：SQL Server，Oracle，MySql</p>
            <p class="col">编程软件：熟练使用Eclipse，Idea，Visual Studio，VS Code等工具</p>
            <p class="col">后端框架：掌握Spring MVC，Spring Boot，Hibernate，Mybatis等框架 ，能够使用独立完成前后端分离项目。</p>
            <p
              class="col"
            >前端技能：掌握JavaScript、Html、Css、Less，ES6语法，熟悉Promise/async/await异步编程，掌握Vue.js前端框架及其相关技术如vuex</p>
          </Col>
          <Col
            class="col"
            span="24"
          >状态管理及vue-router路由和axios.js异步通信库。使用过Bootstrap、jQuery、基于vue的UI组件库iView和element-ui等前端库，对前端工程化有一定了解，了解并使用过Node、webapack、npm等前端工具。</Col>
          <Col
            class="col"
          >其他技能：了解svn的基本用法，掌握Git的常用命令，个人项目代码使用GitHub保存。了解项目构建工具Maven，Gradle的基本用法，编写过maven插件，了解并能编写正则表达式。掌握Visio, Rational Rose等软件建模工具，熟悉Axure RP原型工具，能够编写软件工程各个生命周期对应文档。使用过阿里云和腾讯云的相关云产品(云服务器、对象存储、数据库、域名等)，能够在云服务器上搭建环境并上线项目，了解部分基础Linux系统命令。</Col>
        </Row>
        <p class="second-title">教育经历</p>2014.09 - 2018.07
        <br>南昌航空大学 软件工程（设计与开发） 本科
        <br>主修课程： C语言、C++、数据结构、操作系统、计算机组成原理、计算机网络、web高级编程、Java程序设计、Android应用开发、软件工程
        <br>大二曾获软件学院C语言程序设计大赛二等奖成绩
        <br>英语四级
        <p class="second-title">项目经验</p>
        <!-- 时间轴 -->
        <Timeline class="text-hidden">
          <TimelineItem color="white">
            <p class="time">2015.5 - 2015.6</p>
            <p class="content">
              <span class="item-title">担任Java课程设计组长，完成“CPU指令执行演示”项目</span>
              <br>
              <br>负责项目80%以上编码设计工作，程序采用JavaFx编写,通过这次项目掌握了JavaFx的桌面编程，学习了JavaFx的动画制作。
              <a
                href="https://github.com/425868130/CpuDemo"
                class="none-style-a"
                target="_blank"
              >本项目GitHub地址: https://github.com/425868130/CpuDemo</a>
            </p>
          </TimelineItem>
          <TimelineItem color="white">
            <p class="time">2016.08 - 2016.11</p>
            <p class="content">
              <span class="item-title">担任网络编程课设组长，完成“班级主页”网站设计</span>
              <br>
              <br>负责项目整体框架搭建和大量编码工作，采用基于Servlet的MVC模式
              <br>前端页面采用Bootsrap 的UI组件库完成设计，学习并快速掌握了bootstrap的基本用法
              <br>个人代码贡献率70%以上，通过这次项目对MVC设计模式有了深刻的认识
            </p>
          </TimelineItem>
          <TimelineItem color="white">
            <p class="time">2017.09 - 2017.10</p>
            <p class="content">
              <span class="item-title">校内组队实训项目:团购网</span>
              <br>
              <br>负责完成整个项目框架搭建，使用Spring MVC+Hibernate，采用前后端分离的开发方式
              <br>负责完成DAO层Service层接口编写，并完成统一异常处理
              <br>负责前端部分页面的编写，采用Vue.js加第三方的UI组件库iView完成界面编写，使用axios完成前后端异步通信
              <br>项目中图片文件存储采用了阿里云OSS（对象存储服务），使用腾讯云学生服务器搭建MySQL数据库，学习了一些基本的Linux命令
              <br>代码贡献率60%左右，这次项目让我对前端工程化开发有了初步认识，更大的意义是使用Spring Rest API对前后端分离开发方式的实践，提升了个人的编程能力和视野
            </p>
          </TimelineItem>
          <TimelineItem color="white">
            <p class="time">2018.05 - 2018.06</p>
            <p class="content">
              <span class="item-title">基于SpringBoot+Vue的单词速记网站</span>
              <br>
              <br>采用前后端分离的开发方式，前端项目使用Vue技术栈，界面UI组件采用iView,通过axios进行前后端通信，使用Vue-router进行前端页面组件路由，Vuex进行前端数据管理，项目通过webpack打包发布。
              <br>本项目GitHub地址:
              <a
                href="https://github.com/425868130/easyWordWeb"
                target="_blank"
                class="none-style-a"
              >https://github.com/425868130/easyWordWeb</a>
              <br>后端项目使用Spring Boot+Mybatis框架搭建，负责项目全部业务逻辑处理。采用Rest风格编程，统一向前端固定格式确定的Json数据。项目中双语新闻通过Jsoup爬虫从第三方网站爬取数据，项目中全部图片资源使用阿里云OSS存储。后端项目GitHub地址:
              <a
                href="https://github.com/425868130/easyword"
                target="_blank"
                class="none-style-a"
              >https://github.com/425868130/easyword</a>
              目前“简词”网站项目已上线，地址为
              <a
                href="http://easyword.xjwcode.com"
                target="_blank"
                class="none-style-a"
              >easyword.xjwcode.com</a>，测试账号为425868130，密码为1320074071
            </p>
          </TimelineItem>
          <TimelineItem color="white">
            <p class="time">2017.11 - 2018.1.31</p>
            <p class="content">
              <span class="item-title">就职于同望科技股份有限公司，担任v3平台框架客户端组开发工程师</span>
              <br>
              <br>1. 基于Vue.js和iView进行二次开发，包装可复用的UI组件。
              <br>2. 负责v3平台二次开发脚手架工具(类似于 Vue CLI )开发，该工具使用NodeJs开发，主要为平台二次开发及外包提供便捷的工具支持，能按照公司内部二次开发项目规范生成对应的初始化项目目录结构，
              通过交互式命令(使用Inquirer.js)对项目类型及细节进行配置，同时提供命令进行项目打包、将构件发布到公司vstore仓库、构件部署、构件安装卸载及依赖管理。从该项目启动之初便深度参与，期间对项目结构进行优化，并提取公用逻辑到单独npm包，提高了代码复用率，截至离职前代码贡献率达65%，
              该工具已发布到npm仓库，地址为:
              <a
                href="https://www.npmjs.com/package/v3-cli"
                target="_blank"
                class="none-style-a"
              >npmjs.com/package/v3-cli</a>总下载量超
              <a
                href="https://npm-stat.com/charts.html?package=v3-cli&from=2018-01-01&to=2019-02-27"
                target="_blank"
              >8千</a>。通过该项目使我学习并掌握了Nodejs开发，接触并学习了Es6语法以及Promise/Async异步编程，了解了webpack及其配置。
              <br>3. 负责平台客户端二次开发窗体打包中心项目(基于NodeJs)，为其修复bug和依据需求增加新功能，如封装并修改webpack的file-loader实现页面图片资源地址依据运行环境动态生成；封装vue的多语言方案vue-i18n，实现平台内部的前端多语言；实现vue文件依赖树解析等。
              <br>4. 负责平台皮肤方案的前端部分，通过编写webpack loader实现打包时解析并提取less文件中的变量定义(通过postcss插件)信息及计算vue的scoped样式属性选择器的值，编写less插件实现less渲染成css时添加对应scoped属性选择器以及将微信端的rpx单位值转换为对应的rem值。
              <br>5. 使用Java编写maven插件，实现在maven install阶段解析pom.xml中v3平台相关配置信息，并按配置执行相关逻辑，如解析配置中指定的less文件，提取其中的less变量定义和注释信息、解析指定js文件中的多语言接口调用，解析后处理成指定格式的xml文件写入到最终生成的jar文件中。
              <br>6. 负责平台执行系统后台(java)与打包服务对接，对接打包服务的多语言和皮肤方案，对窗体打包后的jar文件进行解析提取元信息，生成后台服务所需的配置对象并保存到缓存数据库中。
              <br>7. 其他bug修复及细碎功能。
            </p>
          </TimelineItem>

          <TimelineItem color="white"></TimelineItem>
        </Timeline>
        <!-- 时间轴结束 -->
        <p class="second-title">兴趣爱好</p>◊ 热爱软件编程，喜欢关注IT行业新闻，对新兴的技术有很强的接受能力
        <br>◊ 喜欢专研编程技能，经常浏览CSDN、开源中国、GitHub等社区论坛
        <br>◊ 平时喜欢折腾电子产品，电脑DIY，系统重装统统不在话下
        <br>
        <div class="footer">
          <a
            href="http://www.miitbeian.gov.cn/state/outPortal/loginPortal.action;jsessionid=c8UytEm3uHv9-rBfsZ-RHWo6f6rQeqAm2Qc3Gqe2ziwZtxcXqXGC!-932108810"
          >CopyRight © 2019 Xujw 备案号: 赣ICP备18005465号-1</a>
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
let echarts = require("echarts/lib/echarts");
import radarOption from "./radarOption.js";
// 引入柱状图组件
require("echarts/lib/chart/radar");

export default {
  name: "app",
  data: function() {
    return {};
  },
  mounted() {
    let radar = echarts.init(this.$refs.radarMap);
    radar.setOption(radarOption);
    window.onresize = radar.resize();
  }
};
</script>
<style lang="less" scoped src="./appStyle.less"></style>
