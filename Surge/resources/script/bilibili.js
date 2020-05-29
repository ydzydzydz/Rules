const path1 = "/x/resource/show/tab?access_key";
const path2 = "/x/v2/feed/index?access_key";
const path3 = "/x/v2/account/mine?access_key";
const path4 = "/x/v2/view?access_key";
const path5 = "/x/v2/view/material?access_key";
const path6 = "/x/v2/reply/main?access_key";

const url = $request.url;
var body = $response.body;

if (url.indexOf(path1) != -1){
body=JSON.parse(body)

body['data']['tab'].forEach((element, index) => {
if(!(["追番","推荐","直播","热门","影视"].includes(element["name"]))) body['data']['tab'].splice(index,1)  
});

body['data']['bottom'].forEach((element, index)=> {
    if(element['pos']==4){      
       body['data']['bottom'].splice(index,1)  
    }
})

delete body['data']['top']
body=JSON.stringify(body)
}

if (url.indexOf(path2) != -1){
body=JSON.parse(body)
body['data']['items'].forEach((element, index)=> {
    //block ad||title||up
   if(element.hasOwnProperty('ad_info')||element.hasOwnProperty('banner_item')||element['card_type']!="small_cover_v2"){ 
         body['data']['items'].splice(index,1)  
    }
})
body=JSON.stringify(body)
}

if (url.indexOf(path3) != -1){
body=JSON.parse(body)
body['data']['sections'].splice(0,1)
body['data']['sections'][0]['items'].splice(3,1)
body['data']['sections'][0]['items'].splice(4,3)
body['data']['sections'].splice(1,1)
body=JSON.stringify(body)
}

if (url.indexOf(path4) != -1){
body=JSON.parse(body)
body['data']['relates'].forEach((element, index)=> {
if(element.hasOwnProperty('is_ad') || element.hasOwnProperty('from')){
      body['data']['relates'].splice(index,1)  
    }
});
delete body['data']['cms']
body=JSON.stringify(body)
}

if (url.indexOf(path5) != -1){
body = JSON.parse(body)
body.data = null;
body = JSON.stringify(body);
}

if (url.indexOf(path6) != -1){
body = JSON.parse(body)
body.data.notice = {};
body = JSON.stringify(body);
}

$done({ body })

/*
N合一脚本
作者：Primovist
参考来源：https://github.com/onewayticket255/Surge-Script
http-response ^https?:\/\/ap(i|p).bilibili.com\/x\/(resource\/show\/tab|v2\/(reply\/main|view\/material|account\/mine|view|feed\/index))\?access_key requires-body=1,max-size=-1,script-path=https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/script/bilibili.js
hostname = api.bilibili.com
*/