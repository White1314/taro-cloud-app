## 安装及使用

1. 直接下载或者使用 git 克隆项目至本地

   ```
   $ git clone https://github.com/White1314/taro-cloud-app.git
   ```

2. 使用 yarn 全局安装 taro 脚手架工具

   ```
   $ yarn global add @tarojs/cli
   ```

3. 进入项目下的 **client 目录**

   ```
   $ cd D:\Program\taro\taro-cloud-app-master\client
   ```

4. 安装项目所需的模块

   ```
   $ yarn add @tarojs/plugin-sass
   ```

5. 编译

   ```
   $ yarn dev:weapp
   ```

   ![1593762274478](https://7768-white1314-blogs-xxsl2-1302564750.tcb.qcloud.la/about-images/a-01.png?sign=9b2ad4011967382977fe9157b5ed9d5c&t=1593770010)

6. 将项目导入到小程序开发者工具

   ![1593762616492](https://7768-white1314-blogs-xxsl2-1302564750.tcb.qcloud.la/about-images/a-02.png?sign=d1c6b602722550c384450ca48e732e8e&t=1593770078)

7. 点击云开发，开通云服务

   ![1593762763940](https://7768-white1314-blogs-xxsl2-1302564750.tcb.qcloud.la/about-images/a-03.png?sign=43870c40e42ac977b7767e271e44f0c4&t=1593770122)

8. 新建 md 和 menu 集合，将 **test 目录**下的 json 分别导入到对应集合中

   ![1593763555062](https://7768-white1314-blogs-xxsl2-1302564750.tcb.qcloud.la/about-images/a-04.png?sign=7b395be6bef72c711eb0b8a8a1027cd3&t=1593770164)

9. 右键 **functions 目录**选择刚才创建的云环境

   ![1593763957438](https://7768-white1314-blogs-xxsl2-1302564750.tcb.qcloud.la/about-images/a-05.png?sign=cc8882f6cfd66b13578b7e42648f62fc&t=1593770202)

10. 每个云函数的 env 换成自己的云环境 id

    ![1593765044673](https://7768-white1314-blogs-xxsl2-1302564750.tcb.qcloud.la/about-images/a-06.png?sign=7834a62be762626b5af5604c8304d267&t=1593770230)

11. 分别右键**云函数目录**，点击第二个 [创建并部署: 所有文件]，显示云图标则云函数部署成功

    ![1593765361234](https://7768-white1314-blogs-xxsl2-1302564750.tcb.qcloud.la/about-images/a-07.png?sign=73cf248756cf203626f1a1baa185c716&t=1593770257)

12. 项目搭建完成。

    ![1593765883701](https://7768-white1314-blogs-xxsl2-1302564750.tcb.qcloud.la/about-images/a-08.png?sign=8792d182a411894a0aeac4d210855710&t=1593770274)

## 未解决的问题

1. taro 不支持 layout 页面布局，导致多个页面重复引入头部组件，代码冗余。
2. taro 子组件获取不到父组件异步获取的数据，导致获取数据的代码只能写在子组件中。
3. hooks 不支持 config 配置，导致 Markdown 组件是用类的形式编写。
4. wxss 不支持 first-child 等伪类，导致渲染的 md 样式有偏差，比如表格、列表等。

## 说明

1. 本人新手上路，有不合理的地方请多指正。

2. 感谢开源项目 [huangjianke/Gitter](https://github.com/huangjianke/Gitter) 。

3. 1.x 版本修复 bug 和完善功能，预计 2.0 版本引入 redux 和 ts。

4. 初始版本对细节有待完善，但适合新手学习使用。

