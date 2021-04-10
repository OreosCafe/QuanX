[![Anurag's GitHub stats](https://github-readme-stats.vercel.app/api?username=sngxpro)](https://github.com/anuraghazra/github-readme-stats)

### 公众号少年歌行pro：4月10日19:00，脚本进行如下变动：

#### 尝试更新了tiktok 解锁规则

#### 本次无法远程自动同步，需如下操作：

`方法一：覆盖安装懒人包配置`（此方法会覆盖您的本地配置）

[点击跳转查看安装方法](https://github.com/sngxpro/QuanX/blob/master/howtouse.md)



`方法二：手动编辑自己的圈x配置文件`

```
1、删除配置文件中[rewrite remote]和[filter remote]两个标签下的tiktok旧规则

2、添加如下新规则

[policy]
static=TikTok, proxy, img-url=https://raw.githubusercontent.com/sngxpro/icons/main/genshin/diluke.png

[filter_remote]
https://raw.githubusercontent.com/Semporia/Quantumult-X/master/Filter/TikTok.list, tag=TikTok, force-policy=TikTok, update-interval=86400, opt-parser=false, enabled=true

[rewrite_remote]
https://raw.githubusercontent.com/sngxpro/QuanX/master/rewrite/tiktokJP.conf, tag=tiktok解锁日区（勿混用）, update-interval=86400, opt-parser=true, enabled=true
https://raw.githubusercontent.com/sngxpro/QuanX/master/rewrite/tiktokTW.conf, tag=tiktok解锁台区（勿混用）, update-interval=86400, opt-parser=true, enabled=false
https://raw.githubusercontent.com/sngxpro/QuanX/master/rewrite/tiktokKR.conf, tag=tiktok解锁韩区（勿混用）, update-interval=86400, opt-parser=true, enabled=false
https://raw.githubusercontent.com/sngxpro/QuanX/master/rewrite/tiktokUS.conf, tag=tiktok解锁美区（勿混用）, update-interval=86400, opt-parser=true, enabled=false

```



--------------------



### 公众号少年歌行pro：4月9日7:00，脚本进行如下变动：```
1、就部分脚本作者昨天删库和删脚本造成的404问题进行了修复……

请大家不要那么狗，为难脚本作者干甚……

 ``` 
### 仓库订阅地址：

【圈x订阅地址】
```
https://raw.githubusercontent.com/sngxpro/QuanX/master/task/AllinOne.json
```
【v2p订阅地址,需給瀏覽器翻墻才能正常更新訂閱】
```
https://raw.githubusercontent.com/sngxpro/QuanX/master/V2pTaskSub/sngxprov2p.json
```
### 注意：需配合cookie使用，可使用我的cookie订阅按下方说明操作，或自行按脚本说明手动配置
```
[rewrite remote]

https://raw.githubusercontent.com/sngxpro/QuanX/master/rewrite/cookie.conf, tag=获取Cookie（现抓现打勾）, update-interval=86400, opt-parser=false, enabled=true
```




### 公众号少年歌行pro：4月8日18:00，脚本进行如下变动：
```
 1、新增了  京东每日红包雨（由我代管随缘维护） 脚本 ，该脚本由 lxk0301 大佬原创 ，需每天抓变量，我放在自己github上
随缘日更方便大家直接取用

2、 新增了  i-chenzhe 大佬的 京东自抓直播雨（配合重写每日获取）脚本，该脚本需要配合cookie订阅重写，每天自抓变量更新，比上面那个强在可以圈x自动抓不需要手动操作了

 ``` 
### 仓库订阅地址：

【圈x订阅地址】
```
https://raw.githubusercontent.com/sngxpro/QuanX/master/task/AllinOne.json
```
【v2p订阅地址,需給瀏覽器翻墻才能正常更新訂閱】
```
https://raw.githubusercontent.com/sngxpro/QuanX/master/V2pTaskSub/sngxprov2p.json
```
### 注意：需配合cookie使用，可使用我的cookie订阅按下方说明操作，或自行按脚本说明手动配置
```
[rewrite remote]

https://raw.githubusercontent.com/sngxpro/QuanX/master/rewrite/cookie.conf, tag=获取Cookie（现抓现打勾）, update-interval=86400, opt-parser=false, enabled=true
```

------------

### 公众号少年歌行pro：4月8日16:30，脚本进行了如下变动：
```
1、修复了  iOS黑科技 的 AVbobo 解锁vip 规则

```
### 下载地址（邀请码均为脚本作者的）：
```
https://see-mybb-6.com/webApp/root/static/AppTabView/screen/static/OfficialShareView?code=6BILKPMKOYW
https://caoni-99.com/webApp/root/static/AppTabView/screen/static/OfficialShareView?code=6BILKPMKOYW
```

### 我的解锁vip订阅【认真看使用方法，要同步才能生效】

复制下方规则，粘贴到圈x配置文件[rewrite remote]标签下，回到圈x首页长按右下角风车，再点击左下角刷新按钮即可生效
```
https://raw.githubusercontent.com/sngxpro/QuanX/master/rewrite/unlockvip.conf, tag=少年歌行解锁vip, update-interval=86400, opt-parser=false, enabled=true
```


----------------

### 公众号少年歌行pro：4月8日16:00，脚本进行如下变动：
```
 1、新增了 肥皂 大佬  的  落花无生  脚本 
 
 ``` 
### 仓库订阅地址：

【圈x订阅地址】
```
https://raw.githubusercontent.com/sngxpro/QuanX/master/task/AllinOne.json
```
【v2p订阅地址,需給瀏覽器翻墻才能正常更新訂閱】
```
https://raw.githubusercontent.com/sngxpro/QuanX/master/V2pTaskSub/sngxprov2p.json
```
### 注意：需配合cookie使用，可使用我的cookie订阅按下方说明操作，或自行按脚本说明手动配置
```
[rewrite remote]

https://raw.githubusercontent.com/sngxpro/QuanX/master/rewrite/cookie.conf, tag=获取Cookie（现抓现打勾）, update-interval=86400, opt-parser=false, enabled=true
```

----------------

### 公众号少年歌行pro：4月7日15:00，脚本进行如下变动：
```
 1、新增了 肥皂 大佬  的  V生活  脚本 
 
 2、新增了 photonmang  大佬的 作业帮签到 脚本
``` 
### 仓库订阅地址：

【圈x订阅地址】
```
https://raw.githubusercontent.com/sngxpro/QuanX/master/task/AllinOne.json
```
【v2p订阅地址,需給瀏覽器翻墻才能正常更新訂閱】
```
https://raw.githubusercontent.com/sngxpro/QuanX/master/V2pTaskSub/sngxprov2p.json
```
### 注意：需配合cookie使用，可使用我的cookie订阅按下方说明操作，或自行按脚本说明手动配置
```
[rewrite remote]

https://raw.githubusercontent.com/sngxpro/QuanX/master/rewrite/cookie.conf, tag=获取Cookie（现抓现打勾）, update-interval=86400, opt-parser=false, enabled=true
```

----------------

### 公众号少年歌行pro：4月7日9:00，脚本进行如下变动：
```
 1、再次调整了  新一期京东小魔方 活动的脚本定时；
 
 ```
### 使用方法

【圈x】
```
从构造请求中删除原定时任务，在task仓库中重新添加即可
```
【v2p】
```
task订阅模式选择为替换，从task订阅中直接添加一次即可
```

【手动调整】
```
自行修改cron定时为
10 10 7-9 4 *
```

-----------------------




### 公众号少年歌行pro：4月6日9:20，脚本进行如下变动：
```
 1、调整了  新一期京东小魔方 活动的脚本定时；
 
 2、调整了  新一期母婴跳一跳 活动的脚本定时；
```
### 使用方法

【圈x】
```
从构造请求中删除原定时任务，在task仓库中重新添加即可
```
【v2p】
```
task订阅模式选择为替换，从task订阅中直接添加一次即可
```

-----------------------

### 公众号少年歌行pro：4月5日22:20，脚本进行如下变动：
```
 1、新增了  ztxtop 大佬的 文创阅读小程序 脚本(不是之前那个文创阅读)
 ```
### 仓库订阅地址：

【圈x订阅地址】
```
https://raw.githubusercontent.com/sngxpro/QuanX/master/task/AllinOne.json
```
【v2p订阅地址,需給瀏覽器翻墻才能正常更新訂閱】
```
https://raw.githubusercontent.com/sngxpro/QuanX/master/V2pTaskSub/sngxprov2p.json
```
### 注意：需配合cookie使用，可使用我的cookie订阅按下方说明操作，或自行按脚本说明手动配置
```
[rewrite remote]

https://raw.githubusercontent.com/sngxpro/QuanX/master/rewrite/cookie.conf, tag=获取Cookie（现抓现打勾）, update-interval=86400, opt-parser=false, enabled=true
```

------------

### 公众号少年歌行pro：4月5日21:50，脚本进行了如下变动：
```
1、修复了  iOS黑科技 的 三更 解锁vip 规则

2、新增了  ios黑科技 的 百丽宫  解锁vip规则
```
### 下载地址（邀请码均为脚本作者的）：
```
1、三更：
https://4sq6zh6.cn/5858489?tmp=dy&dir=0

2、百丽宫下载地址：
https://hkj.lanzous.com/ie7zAnexo2b
```

### 我的解锁vip订阅【认真看使用方法，要同步才能生效】

复制下方规则，粘贴到圈x配置文件[rewrite remote]标签下，回到圈x首页长按右下角风车，再点击左下角刷新按钮即可生效
```
https://raw.githubusercontent.com/sngxpro/QuanX/master/rewrite/unlockvip.conf, tag=少年歌行解锁vip, update-interval=86400, opt-parser=false, enabled=true
```



-------------


### 公众号少年歌行pro：4月5日8:20，脚本进行了如下变动：

根据肥皂大佬的指导，

将 微客众智 脚本的定时进行了修改，以避免掉ck问题，

请从task脚本仓库中重新添加一次就可以了。

也可以手动修改定时为：

25,55 1,5,9-22 * * *

--------------
### 公众号少年歌行pro：4月5日8:20，脚本进行了如下变动：
```
1、新增了  nobyda大佬的  扫描全能王 解锁vip 规则

2、新增了  iOS黑科技 的 快撸视频 解锁vip 规则

3、新增了  ios黑科技 的 三更  解锁vip规则
```
### 下载地址：
```
1、扫描全能王    Appstore搜索下载即可

2、快撸视频  
https://klicqi.xyz?p=VSG36N

3、三更：
https://4sq6zh6.cn/5858489?tmp=dy&dir=0
```

### 我的解锁vip订阅【认真看使用方法，要同步才能生效】

复制下方规则，粘贴到圈x配置文件[rewrite remote]标签下，回到圈x首页长按右下角风车，再点击左下角刷新按钮即可生效
```
https://raw.githubusercontent.com/sngxpro/QuanX/master/rewrite/unlockvip.conf, tag=少年歌行解锁vip, update-interval=86400, opt-parser=false, enabled=true
```




### 公众号少年歌行pro：4月2日8:20，脚本进行了如下变动：
```
1、应群友需要，解锁vip订阅新增了  儿歌点点 解锁vip 规则
```
### 下载地址：
```
Appstore搜索下载即可
```

### 我的解锁vip订阅【认真看使用方法，要同步才能生效】

复制下方规则，粘贴到圈x配置文件[rewrite remote]标签下，回到圈x首页长按右下角风车，再点击左下角刷新按钮即可生效
```
https://raw.githubusercontent.com/sngxpro/QuanX/master/rewrite/unlockvip.conf, tag=少年歌行解锁vip, update-interval=86400, opt-parser=false, enabled=true
```

--------------

### 更多历史更新内容，请点击下方链接查看

https://github.com/sngxpro/QuanX/blob/master/updata.md

------------------------------------

## 以下为新懒人包仓库使用说明<br>


## 2021版懒人包使用方法（共2步）：

### （一）订阅基础懒人包配置
```properties

 1.复制2021版懒人包订阅地址，如下
  https://raw.githubusercontent.com/sngxpro/QuanX/master/sngx2021.conf

  2.打开QuanX，轻点右下角圆形旋转图标，然后将菜单下拉至最底端，选择“下载”
  
  3.将第一步复制的订阅地址粘贴进去，选确定，此时弹出订阅后添加进去的配置文件，点右上角的保存按钮保存即可

  4.回到QuanX的设置菜单，找到 Mitm 页面 ，点击生成证书，并配置安装到手机

  5.在手机的“设置”中安装证书后，记得到手机的 设置-通用-关于本机--证书信任设置中，将圈x的证书开关打开

  6.回到圈x的设置菜单，打开重写功能的开关和Mitm功能的开关

  7.此时基础懒人包已订阅完成
  
  8.基础懒人包赠送了5个高速节点，可以拿来即用【失效中，待更新】
```
### （二）订阅懒人包任务（task）配置
```properties

  1.选择想要加载的库，根据下文对照表，找到订阅地址。（也可在最上方文件列表中，进入task文件夹选择想要的仓库文件，点击raw获取真实地址，复制地址即为订阅地址）

  2.打开圈x软件，在设置菜单中找到调试，选择构造请求并进入

  3.在构造请求界面，点击右上方第一个图标，长的像是一个提示框加2个箭头

  4.弹出界面点加号，将之前选中的仓库订阅地址复制粘贴进来

  5.点击 好，即可看到出现了新建仓库及任务图标
  
  6.注意：第一次点击上一步的好，有可能不出现我们粘贴进去的新仓库，而是出现一个叫sample的空仓库，这是圈x的示例功能，请重复操作一遍即可
  ```
### （三）可用仓库订阅地址对照表【为每个脚本作者的脚本制作了独立订阅仓库，其中全网合一仓库包含出shylocks大佬外所有仓库内容】
```properties
#### 1、强烈推荐，真懒人配置，一劳永逸

❤ 【公众号少年歌行pro多网合一订阅地址，包含下方全部仓库的脚本】 

https://raw.githubusercontent.com/sngxpro/QuanX/master/task/AllinOne.json

```
#### 2、各位脚本作者大佬的单独订阅仓库位置，方便大家知道该感谢谁
#### 排名不分先后，仅按我收录的时间排序
  ```properties
❤ 【NobyDa的仓库订阅地址】

https://raw.githubusercontent.com/sngxpro/QuanX/master/task/Nobyda.json

京东多合一|爱奇艺|吾爱破解|哔哩哔哩漫画|百度贴吧|快看漫画

---------
❤ 【Sunert的仓库订阅地址】

https://raw.githubusercontent.com/sngxpro/QuanX/master/task/Sunert.json


NOW直播|京东到家|快手极速版|电视家|实时汇率|来客有礼|新浪新闻|腾讯新闻|微博超话|京东价格提醒|电信套餐查询|谷歌中英互译|中青看点|京喜|墨迹天气|数码之家

---------
❤ 【chavyleung的仓库订阅地址】

https://raw.githubusercontent.com/sngxpro/QuanX/master/task/chavyleung.json

中国电信|中国移动|中国联通|10086查话费|AcFun|APK_TW|百词斩|哔哩哔哩|不背单词|CSDN|豆瓣时间|懂球帝|多看阅读|时光相机|樊登读书|威锋网|分期乐|飞客茶馆|加油广东|海底捞|哈啰出行|HYCAN合创|京东到家|猫咪音乐|叮咚买菜|美团|芒果TV|米读签到|米游社|网易云音乐|网易新闻|蔚来|有道云笔记|七猫小说|QQ音乐|趣头条|去哪儿|人人视频|顺丰速运|什么值得买|百度签到|V2EX|腾讯视频|万达电影|美团外卖|WPS|网易考拉|喜马拉雅|ZAKER|字幕组|智行火车|掌上飞车|百果园|IT之家|南方周末|京东白条

---------
❤ 【Peng-YM的仓库订阅地址】

https://raw.githubusercontent.com/sngxpro/QuanX/master/task/Peng-YM.json

彩云天气|Epic周免|汇率监控|Github|疫情日报|PSN会免|Stream价格|纵横小说|机场流量|Telegram频道图片推送

---------
❤ 【zZPiglet的仓库订阅地址】

https://raw.githubusercontent.com/sngxpro/QuanX/master/task/zZPiglet.json

115|便利蜂|滴滴出行|海底捞|奈雪|掌门好老师|饿了么|欧可林|小黑盒|达美乐|豆瓣电影日历|航旅纵横

---------
❤ 【lowking的仓库订阅地址】

https://raw.githubusercontent.com/sngxpro/QuanX/master/task/lowking.json

QQ萌宠|QQ会员成长值|哔哩哔哩番剧监控|哔哩哔哩大会员特权领取|朴朴|索尼俱乐部|斗鱼鱼吧|微博超话

---------
❤ 【songyangzz的仓库订阅地址】

https://raw.githubusercontent.com/sngxpro/QuanX/master/task/songyangzz.json

饿了么|LOL排行查询|testflight公测监控

---------
❤ 【toulanboy的仓库订阅地址】

https://raw.githubusercontent.com/sngxpro/QuanX/master/task/toulanboy.json

小木虫论坛|微博超话|京东价格提醒

---------
❤ 【lxk0301的仓库订阅地址】

https://raw.githubusercontent.com/sngxpro/QuanX/master/task/lxk0301.json

京东摇钱树|京东宠汪汪|京东天天加速|东东农场|京东萌宠|种豆得豆|京小超 等等

---------
❤ 【vinewx的仓库订阅地址】

https://raw.githubusercontent.com/sngxpro/QuanX/master/task/vinewx.json

无忧行|猫眼电影|优麦医生

---------
❤ 【chouchoui的仓库订阅地址】

https://raw.githubusercontent.com/sngxpro/QuanX/master/task/chouchoui.json

时代天使|NGA刮墙

---------
❤ 【evilbutcher的仓库订阅地址】

https://raw.githubusercontent.com/sngxpro/QuanX/master/task/evilbutcher.json

NASA每日一图|微博超话|Funboat|App价格监控|热门监控|每日环球视野|九木杂物社

---------
❤ 【congcong0806的仓库订阅地址】

https://raw.githubusercontent.com/sngxpro/QuanX/master/task/congcong0806.json

倒数日|今日时间

---------
❤ 【id77的仓库订阅地址】

https://raw.githubusercontent.com/sngxpro/QuanX/master/task/id77.json

京东物流派件提醒|伊利乳品|太好购|网易游戏会员|geekhub|

---------
❤ 【dompling的仓库订阅地址】

https://raw.githubusercontent.com/sngxpro/QuanX/master/task/dompling.json

生日倒计时|小米有品|每日一言|历史上的今天

---------
❤ 【iepngs的仓库订阅地址】

https://raw.githubusercontent.com/sngxpro/QuanX/master/task/iepngs.json

 叮咚农场|步数上传|go语言中文网|携程旅行|今日头条极速版|旅行世界购物版|乐心健康

---------
❤ 【barrym-chen的仓库订阅地址】

https://raw.githubusercontent.com/sngxpro/QuanX/master/task/barrym-chen.json

携程旅行|艺龙酒店|飞常准|工银e生活|京东成长分|同程旅游

---------
❤ 【wangdelu2020的仓库订阅地址】

https://raw.githubusercontent.com/sngxpro/QuanX/master/task/wangdelu2020.json

陌陌极速版|惠头条|趣看天下|趣走|微信打卡

---------
❤ 【iisams的仓库订阅地址】

https://raw.githubusercontent.com/sngxpro/QuanX/master/task/iisams.json

梨涡|京东特权值

---------
❤ 【DD-D1的仓库订阅地址】

https://raw.githubusercontent.com/sngxpro/QuanX/master/task/DD-D1.json

QQ阅读|海德汇一城|民盈国贸城|趣客有礼|水滴筹保险商城小程序|水晶DJ|天天挖矿小程序|微商星球|追书畅读版|京东读书|汽车之家极速版|柚子快报|知音漫客

---------
❤ 【passerby-b的仓库订阅地址】

https://raw.githubusercontent.com/sngxpro/QuanX/master/task/passerby-b.json

云闪付

---------
❤ 【photonmang的仓库订阅地址】

https://raw.githubusercontent.com/sngxpro/QuanX/master/task/photonmang.json

途虎养车

---------
❤ 【adwttk的仓库订阅地址】

https://raw.githubusercontent.com/sngxpro/QuanX/master/task/adwktt.json

一刻视频

---------
❤ 【jiang的仓库订阅地址】

https://raw.githubusercontent.com/sngxpro/QuanX/master/task/Jiang.json

获取并上传互助码

---------
❤ 【混沌的仓库订阅地址】

https://raw.githubusercontent.com/sngxpro/QuanX/master/task/hundun.json

虎课|彩云天气|支付宝捐步数|倒数日|工厂商品|滴滴出行|京东赚赚|京喜农场|京喜财富岛|京喜工厂plus|金牌厂长|泡泡大作战|等等


❤【i-chenzhe 仓库订阅地址】

https://raw.githubusercontent.com/sngxpro/QuanX/master/task/i-chenzhe.json

 京东小魔方| 国际盲盒
 
 --------------
 
 ❤【ziye12 仓库订阅地址】
 
 https://raw.githubusercontent.com/sngxpro/QuanX/master/task/ziye.json
 
 QQ阅读
 
 -----------------
 
 ❤【执意 仓库订阅地址】
 
 https://raw.githubusercontent.com/sngxpro/QuanX/master/task/ZhiYi-N.json
 
 燃旅视频
 
 -----------------

 ❤【age174 仓库订阅地址】
 
 https://raw.githubusercontent.com/sngxpro/QuanX/master/task/age174.json
 
蜗牛吧|多看点|bigfun|金钱豹|芝嫲视频|羊毛赚|陌嗨短视频|
  
````
  
  #### 致谢：本仓库使用的图标logo脚本，原作者仓库在下方：
 ```properties 
  ☆【@orz-3的仓库】
 https://github.com/Orz-3/mini
 
 
   ☆【@58xinian的仓库】
 https://github.com/58xinian/icon
 
 ```
 
 
 
