let body = $response.body

body=JSON.parse(body)
body['data']['relates'].forEach((element, index)=> {
   if(element.hasOwnProperty('is_ad') || element.hasOwnProperty('from')){      
      body['data']['relates'].splice(index,1)  
    }
});

delete body['data']['cms']
body=JSON.stringify(body)
$done({body})

/*
去除哔哩哔哩推广活动
作者：Primovist
http-response https://api.bilibili.com/x/v2/reply/main\?access_key requires-body=1,script-path=https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/script/bilibili-viewrelate.js
hostname = api.bilibili.com
*/