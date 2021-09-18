# Minecraft Server Motd to HTML Style

### For now,Temporarily do not consider English users

### [GitHub仓库](https://github.com/KazegaFuHua/Minecraft-server-Motd-Color-cod-to-HTML-style)
### [Gitee仓库](https://gitee.com/xcfuhua/Minecraft-server-Motd-Color-cod-to-HTML-style)
### [基于GitHub Pages服务的预览测试页面（可能需要科学上网）](https://kazegafuhua.github.io/Minecraft-server-Motd-Color-cod-to-HTML-style/)

### 介绍
Minecraft服务器Motd信息转H5样式

一张图看懂这个项目是干啥的，效果啥样

![预览图](/preview.jpg)
<center>预览图</center>

### 用前必看
在写这个项目前我完全不会JavaScript，我只是自己的网站需要用到MC服务器的Motd样式转HTML形式，然后去网上搜索没有搜索到别的大佬的成品，于是自己百度JS语法、各种函数、各种命令，一边学一边写了一个

这个项目肯定不完美，肯定不如别的大佬写出来的作品，我也仅供我自己使用，写出来了顺便分享出来

我并没有任何编程基础，只是两年前看过十几集HTML教学视频，然后自己试着学了HTML和CSS，没有其他任何语言的基础（具体可以看下面的“这个项目背后的一些小事，这个项目的由来”，所以这个项目的有些代码可能会让你血压升高，出现各种超自然现象，本作者概不负责

该项目不支持Minecraft的§k随机符号样式！如果有§k随机符号转换时会在浏览器控制台回报警告，但不会影响正常转换
#### 这个项目背后的一些小事，这个项目的由来
首先，我在开始写这个项目（2021.09.04）之前，完全不会JavaScript这个语言

但我曾经看过一些教程，也只是看了个开头，js如何创建变量，var和let的区别，变量的几种数据类型，差不多就这些

从19年左右，在上学的我，开始对代码感兴趣，首先接触HTML，CSS，看了一系列视频，查了一个星期的百度，我写出了我第一个网站，在本地局域网用IIS上线了这个网页，很简陋，只有一个HTML文件，一张图，两行字，两个a标签超链接，就没了

但两年后21年，我还在写HTML，还在写着CSS，也许网站漂亮了一些，但几乎没有进展，曾经想学编程的执念，到现在还只是写着最基础的前端代码，HTML都不是编程语言，催过自己好几次，去把js学完，就去学C++

但我不是什么“三好学生”，自然一拖再拖，但也并不是三分钟热度，找个借口大概就是“缺少一个事件，来推动我去学习”

“事件”来了

由于这两年对HTML、web、网络等的研究，我依靠网上的帖子，破解了我们家光猫的超级用户（对没错，我家光猫需要手动破解，密码并不是固定的），用家里闲置的电脑开了Minecraft的服务器与朋友联机游玩

由于我们喜欢玩多模组的整合包，游戏打开加载时间很长，服务器也并不是24小时开启，有时候会关闭，就需要发信息询问我服务器有没有开，但我可能上课无法及时回复

且家庭网络的非固定公网IP需要使用DDNS程序，DDNS程序抽风了会导致外网无法连入，并且家庭网络并不像腾讯、阿里等专业服务器平台的网络有BGP协议还有其他什么连接优化，有时扫描不到服务器不知是自己的问题还是服务器的问题

于是就需要一个第三方的程序来检测MC服务器信息，并把它给显示在Web上这个想法

于是我就开始实行了，开始试图查JS能否做到这一点，但似乎百度给我的答案是不可以，想要获取MC服务器信息似乎需要向MC服务器发包，而JS似乎不能发包，总之我找到了替代品，[mcapi.us](https://mcapi.us/)，这个网站提供的api与js直接帮我解决了向MC服务器发包，和把MC服务器返回的数据解析成json以便JS调用

花了一晚上把这个功能写好了，网页提交上线了，可我发现，他返回的服务器Motd信息，还保留了MC的颜色代码，例如`§aHypixel`的`§a`就是绿色的颜色代码，我觉得这样留着不好看，就想将他解析成为HTML可用的格式

我就去网上找，搜了我能想到的所有关键词，比如`我的世界motd转换`,`我的世界颜色代码转HTML格式`等等，没有搜索到我想要的内容

于是就有了这个项目，我整理了一下逻辑，觉得逻辑上来说，并不难实现，于是就开始一点一点的去百度搜索，一点一点地写，遇到不会得，就百度，反复循环，就慢慢地写出来了，大概花了一个多星期，实际写的时间大概20多个小时，从几乎完全没写过js，到写出一个小作品，自己觉得很有成就感

也许有其他大佬已经写过同样的颜色转换，我写的肯定没人家好，但我尽我所能，满足了自己的需求，同时共享出来给大家，说不定也有人像我一样没找到别的大佬的成品

#### 提示
1. 输入的内容举例&emsp;play.hypixel.net&emsp;的服务器motd:<pre style="white-space: pre-wrap;color: #66ccff;">             §aHypixel Network  §c[1.8-1.17]\n          §5§lSKYBLOCK CRYSTAL HOLLOWS!</pre>

2. 输入的内容举例&emsp;hub.mc-complex.com&emsp;的服务器motd:<pre style="white-space: pre-wrap;color: #66ccff;">§b§m-----------§8§l[- §f§lComplex §b§lGaming §8§l-]§b§m----------\n§fQuests/Clans §8| §b#1 Pixelmon Network §8| §fCustom Plugins</pre></p>

3. 该脚本将输入的所有`\n`全都替换为了`<br>`（`<br>`是HTML网页中的换行），所以无法显示\n

4. 如果你觉得网页控制台输出的内容比较烦人，可以用任意文本编辑器打开`§ to html color.js`，将第<font color="#c76079">6、7、66、67</font>这四行整行删除（均为`console.log`开头），你也可以将<font color="#c76079">142</font>行的警告`console.warn`整行删除

5. 你也可以通过MC服务器的API接口获取任意服务器的motd，并使用`motdtocolor()`函数将他们转换为html格式输出

6. 本预览页面使用了两个字体文件，`"Minecraft"`与`"Minecraft-Regular"`，他们并不是MC原本的字体，与MC内显示的效果略有不同

7. <font color="#e53935">请注意！！调用函数后会把输出的容器给清空！！然后塞入函数输出的内容！！</font>
<br>例：
<br>原本的HTML
```html
<div id="MinecraftMotd">原本的内容123456789</div>
```
<br>调用函数后
```html
	<div id="MinecraftMotd">
		<span style="color: rgb(85, 255, 85); text-decoration: none; font-style: normal; font-family: &quot;Minecraft R&quot;; white-space: pre;"></span>
		<span style="color: rgb(85, 255, 85); text-decoration: none; font-style: normal; font-family: Minecraft; white-space: pre;">A </span>
		<span style="color: rgb(255, 255, 255); text-decoration: none; font-style: normal; font-family: &quot;Minecraft R&quot;; white-space: pre;"></span>
		<span style="color: rgb(255, 255, 255); text-decoration: none; font-style: normal; font-family: Minecraft; white-space: pre;">Minecraft </span>
		<span style="color: rgb(85, 255, 255); text-decoration: none; font-style: normal; font-family: &quot;Minecraft R&quot;; white-space: pre;"></span>
		<span style="color: rgb(85, 255, 255); text-decoration: none; font-style: normal; font-family: Minecraft; white-space: pre;">Server !</span>
	</div>
```

#### 安装教程
丢入你的网站目录，在HMTL中加入
```html
<script src="这里填js文件位置" type="text/javascript"></script>
```

#### 使用说明
1.  丢入你的网站目录，在HMTL中加入
```html
<script src="这里填js文件位置" type="text/javascript"></script>
```
2. 调用脚本的函数为motdtocolor()，<font color="#ff7f50">你需要往函数中传入两个变量，分别为<font color="#e53935">需要转换的带有MC颜色代码的文本</font>，<font color="#e53935">以及装输出出来的样式的容器</font></font>
<br>例如:
<br>HTML部分
```html
<div id="MinecraftMotd"></div>
```
<br>JavaScript部分
```javascript
var motd = '§a§lA §f§lMinecraft §b§lServer !';// 创建需要转换的文本
var motdbox = document.getElementById('MinecraftMotd');// 指定输出的容器
motdbox.innerHTML = motdtocolor(motd,motdbox);// 调用函数
```
3. 也可以用按钮来调用
<br>HTML部分
```html
<button type="button" onclick="motdinput()">点击转换！</button>
<!-- 点击触发函数，函数套函数，诶嘿 -->
```
<br>JavaScript部分
```javascript
function motdinput() {
	var motd = '§a§lA §f§lMinecraft §b§lServer !';// 创建需要转换的文本
	var motdbox = document.getElementById('MinecraftMotd');// 指定输出的容器
	motdbox.innerHTML = motdtocolor(motd,motdbox);// 调用函数
}
```
4. 也可以用调用API接口来获取服务器Motd信息，然后丢给函数去处理，加上自动刷新，可以实现实时显示。这里就不多演示了

#### 参与贡献
- 网上各种js教程
- 感谢[菜鸟教程](https://www.runoob.com)
- 感谢[CSDN开发社区](https://www.csdn.net/)
- 感谢[W3学院](https://www.w3school.com.cn/)
- 感谢各种知识分享博客

※以上贡献不分先后