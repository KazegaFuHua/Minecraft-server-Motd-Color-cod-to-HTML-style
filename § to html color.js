"use strict"
function motdtocolor(originmotd,motdbox) {// 从外部调用函数originmotd输如Minecraft样式，例：var motd = '§a§lA §f§lMinecraft §b§lServer !';var motdbox = document.getElementById('MinecraftMotd');motdbox.innerHTML = motdtocolor(motd,motdbox);
	///////////////////////////////////////////////////////////////////////////////////////准备变量等内容 ↓
	motdbox.innerHTML = '';// 清空原本div里面的内容
	// var originmotd = originmotd.replace(/\s/g,'&nbsp;');
	console.log('########| Minecraft颜色代码转H5样式 |########');
	console.log('输入',originmotd);
	if (originmotd.search('§') != -1) {
		var reg = /(^)?([^§]+)($)?/g;// 去掉所有§符号的正则表达式
		var outputspan = document.createElement('span');// 创建一个span最终输出的
		var len = originmotd.match(reg).length;// 获取原始motd分割后的段数
		var output = '';// 创建最终输出的变量
		///////////////////////////////////////////////////////////////////////////////////////循环开始 ↓
		for (var i=0; i<len; i++) {// 开始遍历分段的motd
			var aa = originmotd.match(reg)[i];// 获取motd分割后的第[i]段
			var a1 = aa.substring(0,1);// 获取第[i]段的第一个字符
			var aa = aa.substr(1);// 获取到第一个字符后，删除第一个字符并重新赋值
			var style = functioncolor(a1);// 创建判断样式后的返回值变量
			var motdtext = '';// 创建span中内容的变量
			///////////////////////////////////////////////////////////////////////////////////////判断此分段是否只有一个样式代码并无其他内容(例：§a§lMinecraft，获取到的第一段motd是"a")
			if (aa.length >= 1) {
				var motdtext = document.createTextNode(aa);// 如果不止一个颜色代码，则输出对应字符到motdtext
			}
			else {
				var motdtext = document.createTextNode('');// 如果只有一个颜色代码，则输出空字符到motdtext
			}
			///////////////////////////////////////////////////////////////////////////////////////给span加样式 ↓
			if (style.substring(0,1) == '#') {
				outputspan.style.color = style;
				outputspan.style.textDecoration = "none";// 下划线和删除线会因为后面有颜色代码而被重置
				outputspan.style.fontStyle = "normal";// 斜体会因为后面有颜色代码而被重置
				outputspan.style.fontFamily = "Minecraft R";// 加粗会因为后面有颜色代码而被重置
			}
			// else if (style == 'Random') {// 随机字符
			// 	return;
			// }
			else if (style == 'Minecraft') {// 粗体
				outputspan.style.fontFamily = style;
			}
			else if (style == 'line-through') {// 删除线
				outputspan.style.textDecoration = style;
				outputspan.style.fontFamily = "Minecraft R";// 加粗会因为后面有删除线代码而被重置
			}
			else if (style == 'underline') {// 下划线
				outputspan.style.textDecoration = style;
				outputspan.style.fontFamily = "Minecraft R";// 加粗会因为后面有下划线代码而被重置
			}
			else if (style == 'italic') {// 斜体
				outputspan.style.fontStyle = style;
			}
			else if (style == 'none') {// 重置
				outputspan.style.color = "#000000";// 默认颜色为黑色
				outputspan.style.fontFamily = "Minecraft R";// 默认字体为Minecraft常规
				outputspan.style.textDecoration = "none";// 默认没有下划线或删除线
				outputspan.style.fontStyle = "normal";// 默认字体不倾斜
			}
			var spanlen = outputspan.childNodes.length;// 获取outputspan中被写入了多少个motdtext，第一遍运行为零，下面的代码将motdtext写入outputspan并输出后，下一遍获取第二段motd的时候会留有第一段的内容，下面的for循环用于删除前面的motdtext
			for(var z=0; z< spanlen; z++) {// 当outputspan中有motdtext的时候，删除他
			    outputspan.removeChild(outputspan.childNodes[0]);
			}
			outputspan.style.whiteSpace = 'pre';// 给所有输出的span加上whiteSpace: pre;以显示空格
			outputspan.appendChild(motdtext);// 将motdtext写入span
			var output = output + outputspan.outerHTML;// 保留原本output的内容，并加入新的outputspan的内容，全都以HTML的格式保存
		}
		///////////////////////////////////////////////////////////////////////////////////////输出 ↓
		console.log('输出',output);
		console.log('########| Minecraft颜色代码转H5样式 |########');
		var output = output.replace(/\\n/g,"<br>");// 强制替换所有 \n 为 <br> 以解决换行问题
		return output;// 返回输出创建的span
		///////////////////////////////////////////////////////////////////////////////////////代码对应样式判断 ↓
		function functioncolor(colorcod) {// 颜色代码返回对应的样式属性判断
			if (colorcod == 'a') {
				return '#55ff55';// 返回对应的颜色
			}
			else if (colorcod == 'b') {
				return '#55ffff';// 返回对应的颜色
			}
			else if (colorcod == 'c') {
				return '#ff5555';// 返回对应的颜色
			}
			else if (colorcod == 'd') {
				return '#ff55ff';// 返回对应的颜色
			}
			else if (colorcod == 'e') {
				return '#ffff55';// 返回对应的颜色
			}
			else if (colorcod == 'f') {
				return '#ffffff';// 返回对应的颜色
			}
			else if (colorcod == 'g') {
				return '#ddd605';// 返回对应的颜色
			}
			else if (colorcod == '0') {
				return '#000000';// 返回对应的颜色
			}
			else if (colorcod == '1') {
				return '#0000aa';// 返回对应的颜色
			}
			else if (colorcod == '2') {
				return '#00aa00';// 返回对应的颜色
			}
			else if (colorcod == '3') {
				return '#00aaaa';// 返回对应的颜色
			}
			else if (colorcod == '4') {
				return '#aa0000';// 返回对应的颜色
			}
			else if (colorcod == '5') {
				return '#aa00aa';// 返回对应的颜色
			}
			else if (colorcod == '6') {
				return '#ffaa00';// 返回对应的颜色
			}
			else if (colorcod == '7') {
				return '#aaaaaa';// 返回对应的颜色
			}
			else if (colorcod == '8') {
				return '#555555';// 返回对应的颜色
			}
			else if (colorcod == '9') {
				return '#5555ff';// 返回对应的颜色
			}
			else if (colorcod == 'k') {
				return 'Random';// 随机字符 想用Gif来实现，有待考虑
			}
			else if (colorcod == 'l') {
				return 'Minecraft';// 加粗 font-family: Minecraft;
			}
			else if (colorcod == 'm') {
				return 'line-through';// 删除线text-decoration:line-through;
			}
			else if (colorcod == 'n') {
				return 'underline';// 下划线 text-decoration:underline;
			}
			else if (colorcod == 'o') {
				return 'italic';// 斜体 font-style: italic;
			}
			else if (colorcod == 'r') {
				return 'none';// 重置样式
			}
			else {
				console.warn('[' + aa + ']' + '该值的第一个字母' + '[' + a1 + ']' + '无法匹配样式，但不要紧，它将会继承前面的样式显示');// 遇到比如motd开头是空格这一类无法识别样式的直接返回，并在控制台输出
				return 'unknown style';
			}
		}
		///////////////////////////////////////////////////////////////////////////////////////
	}
	else {// 假如获取到的服务器motd没有样式属性时，直接返回原本的服务器motd
		return originmotd;
	}
}
