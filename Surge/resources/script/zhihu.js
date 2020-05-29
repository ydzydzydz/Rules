const path1 = "/moments?";
const path2 = "/topstory/recommend";
const path3 = "/questions/";
const path4 = "/market/header";

const url = $request.url;
var body = $response.body;

if (url.indexOf(path1) != -1){
body=JSON.parse(body)
body['data'].forEach((element, index)=>{
     if(element.hasOwnProperty('adjson')){      
       body['data'].splice(index,1)  
    }
})
body=JSON.stringify(body)
}

if (url.indexOf(path2) != -1){
body=JSON.parse(body)
body['data'].forEach((element, index)=> {
    if(element['card_type']=="slot_event_card"||element.hasOwnProperty('ad')){      
       body['data'].splice(index,1)  
    }
})
body=JSON.stringify(body)
}

if (url.indexOf(path3) != -1){
body=JSON.parse(body)
delete body['ad_info']
body=JSON.stringify(body)
}

if (url.indexOf(path4) != -1){
body=JSON.parse(body)
body['sub_webs'].splice(0,1)
body['sub_webs'].splice(1,1)
body=JSON.stringify(body)
}

$done({ body })

/*
知乎去广告
作者：Primovist
参考来源：^https?:\/\/ap(i|p).bilibili.com\/x\/(resource\/show\/tab|v2\/(reply\/main|view\/material|account\/mine|view|feed\/index))\?access_key

http-response ^https?:\/\/api\.zhihu\.com\/(moments\?|topstory\/recommend|.*\/questions|market\/header) requires-body=1,max-size=-1,script-path=https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/script/zhihu.js
hostname = api.zhihu.com

URL-REGEX,https://(api|www).zhihu.com/(fringe|zst|commercial|real_time|ad-style-service|banners|topstory/hot-lists|market/popover|mqtt|.*(launch|featured-comment-ad|recommendations|community-ad)|search/(top|tab|preset)|ab),REJECT
AND,((USER-AGENT,ZhihuHybrid*), (NOT,((DOMAIN-SUFFIX,zhihu.com))), (NOT,((DOMAIN-SUFFIX,zhimg.com)))),REJECT
AND,((USER-AGENT,osee2*), (NOT,((DOMAIN-SUFFIX,zhihu.com))), (NOT,((DOMAIN-SUFFIX,zhimg.com)))),REJECT

*/