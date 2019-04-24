/*
返回格式
browserMsg {
	is32: Boolean;
	system: Mac || Unix || Linux || Win2000 || WinXP || Win2003 || WinVista || Win7 || Win8;
	isAndroid: Boolean;
	isIos: Boolean;
	isMobile: Boolean;
	isNewsApp: Boolean;
	isWeixin: Boolean;
	isQQ: Boolean;
	isYixin: Boolean;
	isWeibo: Boolean;
	isTXWeibo: Boolean;
	browser: Array<String>
}
*/
var browserMsg = (function (root) {
    console.log(navigator.userAgent);
    var needMsg = {},
        userAgent = navigator.userAgent,
        // 获取操作系统
        is32 = (navigator.platform === "Win32"),
        isWin = is32 || (navigator.platform === "Windows"),
        isMac = (navigator.platform == "Mac68K") || (navigator.platform == "MacPPC") || (navigator.platform == "Macintosh") || (navigator.platform == "MacIntel"),
        isUnix = (navigator.platform == "X11") && !isWin && !isMac,
        isLinux = (String(navigator.platform).indexOf("Linux") > -1);
		needMsg["is32"] = is32;
		isMac && (needMsg["system"] = "Mac");
		isUnix && (needMsg["system"] = "Unix");
		isLinux && (needMsg["system"] = "Linux");
		if (isWin) {
			var isWin2K = userAgent.indexOf("Windows NT 5.0") > -1 || userAgent.indexOf("Windows 2000") > -1;
			if (isWin2K) needMsg["system"] = "Win2000";
			var isWinXP = userAgent.indexOf("Windows NT 5.1") > -1 || userAgent.indexOf("Windows XP") > -1;
			if (isWinXP) needMsg["system"] = "WinXP";
			var isWin2003 = userAgent.indexOf("Windows NT 5.2") > -1 || userAgent.indexOf("Windows 2003") > -1;
			if (isWin2003) needMsg["system"] = "Win2003";
			var isWinVista = userAgent.indexOf("Windows NT 6.0") > -1 || userAgent.indexOf("Windows Vista") > -1;
			if (isWinVista) needMsg["system"] = "WinVista";
			var isWin7 = userAgent.indexOf("Windows NT 6.1") > -1 || userAgent.indexOf("Windows 7") > -1;
			if (isWin7) needMsg["system"] = "Win7";
			if (!needMsg["system"]) {
				needMsg["system"] = "Win8+";
			}
		};
		// 获取移动端浏览器
		needMsg["isAndroid"] = /android|adr/gi.test(userAgent);
		needMsg["isIos"] = /iphone|ipod|ipad/gi.test(userAgent) && !isAndroid; // 据说某些国产机的UA会同时包含 android iphone 字符
		needMsg["isMobile"] = needMsg.isAndroid || needMsg.isIos;
		needMsg["isNewsApp"] = /NewsApp\/[\d\.]+/gi.test(userAgent);
		needMsg["isWeixin"] = /MicroMessenger/gi.test(userAgent),
			needMsg["isQQ"] = /QQ\/\d/gi.test(userAgent);
		needMsg["isYixin"] = /YiXin/gi.test(userAgent);
		needMsg["isWeibo"] = /Weibo/gi.test(userAgent);
		needMsg["isTXWeibo"] = /T(?:X|encent)MicroBlog/gi.test(userAgent);
		// 获取主流浏览器
		var re = /(msie|firefox|chrome|opera|version).*?([\d.]+)/i,
			m = userAgent.match(re);
		// console.log(m);
		needMsg.browser = [m[1], m[2]];
		return needMsg;
})(window);