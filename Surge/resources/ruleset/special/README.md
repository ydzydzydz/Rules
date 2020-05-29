## Surge 特殊代理


[配置示例](https://raw.githubusercontent.com/ydzydzydz/Rules/master/conf/zhuangzhuang/zhuangzhuang.conf)   [https://zhuangzhuang.cf/zhuangzhuang.conf](https://zhuangzhuang.cf/zhuangzhuang.conf)

**使用前须在 iCloud云盘/Surge/resources/policy/ 文件夹内创建 [auto.list](https://raw.githubusercontent.com/ydzydzydz/Rules/master/proxy/auto.list) 和[all.list](https://raw.githubusercontent.com/ydzydzydz/Rules/master/proxy/all.list)**

----
# 规则参考

[lhie1](https://github.com/lhie1/Rules)   

[scomper](https://github.com/scomper/surge-list)  

[Blankwonder](https://github.com/Blankwonder/surge-list)  

[Hackl0us](https://github.com/Hackl0us/SS-Rule-Snippet)  

[ConnersHua](https://github.com/ConnersHua/Profiles)  

[JO2EY](https://github.com/JO2EY/Rules)

----
# 更新提醒

从 GitHub 更新 RULE-SET 规则集、Script 提醒

```
[Rule]

# 从GitHub更新规则集提醒
URL-REGEX,^https?:\/\/raw\.githubusercontent\.com\/ydzydzydz\/.*\.list,🚀 Direct,notification-text="正在下载: ZHUANGZHUANG规则 😃",notification-interval=60          // 规则更新提醒
URL-REGEX,^https?:\/\/raw\.githubusercontent\.com\/lhie1\/.*\.list,🚀 Direct,notification-text="正在下载: lhie1规则 😃",notification-interval=60                     // 规则更新提醒
URL-REGEX,^https?:\/\/raw\.githubusercontent\.com\/scomper\/.*\.list,🚀 Direct,notification-text="正在下载: scomper规则 😃",notification-interval=60                 // 规则更新提醒
URL-REGEX,^https?:\/\/raw\.githubusercontent\.com\/ConnersHua\/.*\.list,🚀 Direct,notification-text="正在下载: ConnersHua规则 😃",notification-interval=60           // 规则更新提醒
URL-REGEX,https://raw.githubusercontent.com/(ydzydzydz|yichahucha|mieqq).*.js ,🚀 Direct,notification-text="正在下载: JavaScript脚本 😃",notification-interval=60     // 脚本更新提醒
AND,((DOMAIN,raw.githubusercontent.com), (USER-AGENT,Surge*)),🚀 Direct,notification-text="规则集更新",notification-interval=60                                       // 规则更新提醒


[MITM]

hostname = raw.githubusercontent.com
```

---

# 添加规则集


特殊代理示例
```
RULE-SET,https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/ruleset/special/apple.list,DIRECT
```
----
# 特殊代理

**将特殊代理放在规则最前生效** 

---

AppleNews 地区限制

```
https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/ruleset/special/appnews-region.list
```


AppleNews 

```
https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/ruleset/special/appnews.list
```

---


Bilibili

```
https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/ruleset/special/bilibili.list
```

IQIYI

```
https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/ruleset/special/iqiyi.list
```

letv

```
https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/ruleset/special/letv.list
```

Tencent Video

```
https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/ruleset/special/tencentvideo.list
```

Youku

```
https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/ruleset/special/youku.list
```

ABC

```
https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/ruleset/special/abc.list
```

AbemaTV

```
https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/ruleset/special/abematv.list
```

Amazon Prime Video

```
https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/ruleset/special/amazon.list
```

BBC

```
https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/ruleset/special/bbc.list
```

Bahamut

```
https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/ruleset/special/bahamut.list
```

CHOCO TV


```
https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/ruleset/special/choco-tv.list
```

Fox+


```
https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/ruleset/special/fox+.list
```

HBO&HBO Go

```
https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/ruleset/special/hbo&hbogo.list
```

Hulu


```
https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/ruleset/special/hulu.list
```

Imkan

```
https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/ruleset/special/imkan.list
```

IQIYI(TW)

```
https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/ruleset/special/iqiyi-tw.list
```

MytvSUPER

```
https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/ruleset/special/mytvsuper.list
```

Netflix

```
https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/ruleset/special/netflix.list
```

Pinterest

```
https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/ruleset/special/pinterest.list
```

PBS

```
https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/ruleset/special/pbs.list
```

Sky GO

```
https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/ruleset/special/sky-go.list
```

TVB


```
https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/ruleset/special/tvb.list
```

Vidol


```
https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/ruleset/special/vidol.list
```

viuTV

```
https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/ruleset/special/viutv.list
```

Youtube

```
https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/ruleset/special/youtube.list
```

---

JOOX

```
https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/ruleset/special/joox.list
```

NeteaseMusic

```
https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/ruleset/special/neteasemusic.list
```

SoundCloud

```
https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/ruleset/special/soundcloud.list
```

YoutubeMusic

```
https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/ruleset/special/youtubemusic.list
```

Pandora

```
https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/ruleset/special/pandora.list
```

Spotify

```
https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/ruleset/special/spotify.list
```

---

Alibaba

```
https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/ruleset/special/alibaba.list
```

Tencent

```
https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/ruleset/special/tencent.list
```

Amazon

```
https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/ruleset/special/amazon.list
```

Apple

```
https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/ruleset/special/apple.list
```

Google

```
https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/ruleset/special/google.list
```

Microsoft

```
https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/ruleset/special/microsoft.list
```

---

Facebook

```
https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/ruleset/special/facebook.list
```

KakaoTalk

```
https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/ruleset/special/kakaotalk.list
```

LINE

```
https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/ruleset/special/line.list
```

Potato Chat

```
https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/ruleset/special/potato-chat.list
```

Slack

```
https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/ruleset/special/slack.list
```

TeamViewer

```
https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/ruleset/special/teamviewer.list
```

Telegram

```
https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/ruleset/special/telegram.list
```

WhatsApp

```
https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/ruleset/special/whatsapp.list
```

Twitter

```
https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/ruleset/special/twitter.list
```

Spark

```
https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/ruleset/special/spark.list
```

---

JD

```
https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/ruleset/special/jd.list
```

PayPal

```
https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/ruleset/special/paypal.list
```

LastPass

```
https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/ruleset/special/lastpass.list
```

---

Speedtest

```
https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/ruleset/special/speedtest.list
```

Epicgames

```
https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/ruleset/special/epicgames.list
```

MOO

```
https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/ruleset/special/moo.list
```

Steam

```
https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/ruleset/special/steam.list
```

---

LAN

```
https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/ruleset/special/lan.list
```

SYSTEM

```
https://raw.githubusercontent.com/ydzydzydz/Rules/master/Surge/resources/ruleset/special/system.list
```


