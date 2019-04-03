var NiceUtils = (function(){
    return {
        urlSerialize: function(json = {}){
			return "?" + json.keys().map(key=>`${key}=${json[key]}`).join("&");
//             json = json || {};
//             var paramArray = [];
//             for (var item in json) {
//                 var val = json[item];
//                 paramArray.push(item + "=" + val)
//             }
//             return "?" + paramArray.join("&");
        },
		htmlItem: ["<", ">", " ", "<img />", "<img", "/>", "<script" "</script>"],
		baseItem: ["&lt;", "&gt;", "&nbsp;", "&lt;img /&gt;", "&lt;img", "/&gt;", "&lt;script", "&lt/script&gt;" ],
		htmlToBase: function(str){
			return this.htmlItem.reduce(
				(prev, next, index)=>(prev.replace(
					new RegExp(next, "g"),
					this.baseItem[index]
				)),
				str
			);
		},
		baseToHtml: function(str){
			return this.baseItem.reduce(
				(prev, next, index)=>(prev.replace(
					new RegExp(next, "g"),
					this.htmlItem[index]
				)),
				str
			);	
		}
    }
})(window, document);