var NiceUtils = (function(){
    return {
        urlSerialize: function(json){
            json = json || {};
            var paramArray = [];
            for (var item in json) {
                var val = json[item];
                paramArray.push(item + "=" + val)
            }
            return "?" + paramArray.join("&");
        }
    }
})(window, document);