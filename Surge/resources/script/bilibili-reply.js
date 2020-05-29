let body = $response.body

body = JSON.parse(body)
body.data.notice = {};
body = JSON.stringify(body);

$done({body})

/*
去除哔哩哔哩热门评论上面的小喇叭
作者：Primovist
http-response https://api.bilibili.com/x/v2/reply/main\?access_key requires-body=1,script-path=https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/script/bilibili-reply.js
hostname = api.bilibili.com
*/