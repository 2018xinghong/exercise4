// 工具方法

/**
 * 获取地址栏参数
*/
function getURLParam(key) {
    var paramStr = location.search;
    var result = null;
    var obj = {}
    if(paramStr) {
        paramStr = paramStr.substr(1).split('&');
        paramStr.forEach(function(item, index) {
            var temp = item.split('=');
            obj[temp[0]] = temp[1];
        })
    }
    if(key) {
        result = obj[key] ? obj[key] : null;
        
    }else {
        if(JSON.stringify(obj) == '{}') {
            result = null;
        }else {
            result = obj;
        }
    }
    return result;
}