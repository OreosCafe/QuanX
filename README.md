##  公众号少年歌行pro：2月4日，新增了子夜大佬的【返利网自动化脚本】，请认真查看使用说明

#### 【返利网自动化脚本】

#### 请将下方代码粘贴到圈x配置文件的对应位置，因子夜的脚本需要手动注释重写，故无法提供懒人一键订阅，请手动添加并注意下方使用说明

#### 使用说明（必须看，少看一行你都有可能使用不了！）

①打开圈x开关后，进入返利网，点击 我的 获取flwurlVal。返利网地址：<br>

http://m.a8fdj.cn/Invite/promotion?id=775&spm=page_name.h5.pty-wxzcpv~std-65354&go=http%3A%2F%2Fhuodong.a8fdj.cn%2Fh5%2FInvitefriendsreward%2FregisterCallback%3Fuserid%3D373511081%26id%3D775%26sn%3D47ecab06aba43e015082e531d8214eb5<br>

②点击 首页--签到赚钱 获取flwheaderVal<br>
③在[rewrite_local]标签下的第一个https前面输入一个#，保存配置文件。<br>
④回到返利网app，点击 首页--- 签到赚钱---- 视频任务，完整看完一个视频广告 ，获取flwspbodyVal<br>
⑤点击 首页----签到赚钱---- 火山热门视频，等待视频悬浮窗转圈一周后， 获取flwqwbodyVal<br>
⑥脚本已可正常运行。注意提现必须关注官方公众号手动提现。<br>
⑦防止黑号，兑换时间限制在10点到11点之间<br>

[rewrite_local]

#返利网获取header

https:\/\/(huodong\.fanli\.com\/*||passport\.fanli\.com\/*||gw\.fanli\.com\/*) url script-request-header https://raw.githubusercontent.com/ziye12/JavaScript/main/Task/flw.js

#返利网获取body

https:\/\/(huodong\.fanli\.com\/*||passport\.fanli\.com\/*||gw\.fanli\.com\/*) url script-request-body https://raw.githubusercontent.com/ziye12/JavaScript/main/Task/flw.js 


[task_local]

0 1-16 10 5,9,10,11,12 * * https://raw.githubusercontent.com/ziye12/JavaScript/main/Task/flw.js, tag=返利网, enabled=true

hostname=huodong.fanli.com,passport.fanli.com,gw.fanli.com,

-------------------------------------

##  公众号少年歌行pro：2月4日，新增了子夜大佬的【笑谱自动化脚本】，请认真查看使用说明

#### 【笑谱自动化脚本】

#### 请将下方代码粘贴到圈x配置文件的对应位置，因子夜的脚本需要手动注释重写，故无法提供懒人一键订阅，请手动添加并注意下方使用说明

#### 使用说明（必须看，少看一行你都有可能使用不了！）
①添加下方代码完成后，打开圈x开关，再打开笑谱app并登陆，会提示你一次获取成功；<br>
②回到圈x，打开配置文件，将下方[rewrite_local]标签下，第一个https签名的#删除，并保存配置文件；<br>
③重新回到app，打开我的或者翻看视频，会再次提示你一次获取成功；<br>
④脚本已可正常运行。<br>

[rewrite_local]

#笑谱获取header

#https:\/\/veishop\.iboxpay\.com\/* url script-request-header https://raw.githubusercontent.com/ziye12/JavaScript/main/Task/iboxpay.js

#笑谱获取更新TOKEN

https:\/\/veishop\.iboxpay\.com\/nf_gateway\/nf-user-auth-web\/ignore_tk\/veishop\/v1\/* url script-response-body https://raw.githubusercontent.com/ziye12/JavaScript/main/Task/iboxpay.js


[task_local]

0 9 * * * https://raw.githubusercontent.com/ziye12/JavaScript/main/Task/iboxpay.js, tag=笑谱, img-url=https://qxzy.top/rules/QuantumultX/img/xp.png, enabled=true


hostname=veishop.iboxpay.com,




-------------------------------------------------------

### 2021年2月4日，增加了i-chenzhe大佬的 京东压岁钱 脚本和 京东直播红包雨脚本 ，您可订阅c-chenzhe单独订阅仓库，或直接订阅我的全网合一仓库

#### i-chenzhe仓库订阅地址：https://raw.githubusercontent.com/sngxpro/QuanX/master/task/i-chenzhe.json
#### 全网合一仓库订阅地址：https://raw.githubusercontent.com/sngxpro/QuanX/master/task/AllinOne.json
#### 添加脚本时会提示添加附件组件，请添加，是获取cookie用的，获取cookie后回到仓库再点一下，选择移除组件，就不再获取cookie了
仓库订阅的一键使用方法可参见群公告具体说明

#### 如果您是ios12用户无法使用仓库订阅功能，请复制下方代码，并粘贴到圈x配置文件的对应标签下：

[task_local

#京东新年压岁钱

10 10 * * * https://raw.githubusercontent.com/i-chenzhe/qx/main/jd_newYearMoney.js,  img-url=https://raw.githubusercontent.com/Orz-3/task/master/jd.png, tag=京东新年压岁钱, enabled=true

#京东直播雨
0,1 19-21 3-5 2 * https://raw.githubusercontent.com/i-chenzhe/qx/main/jd_half_red_rain.js, tag=京东直播雨, img-url=https://raw.githubusercontent.com/Orz-3/task/master/jd.png,  enabled=true


-------------------------------------------

### 2021年2月1日，增加了多看点app自动任务脚本，脚本已加入了age174仓库和我的全网合一仓库，
app下载地址：http://dkd-api.dysdk.com/share.html?uid=13179965<br>
#### lxk0301仓库订阅地址：https://raw.githubusercontent.com/sngxpro/QuanX/master/task/age174.json
#### 全网合一仓库订阅地址：https://raw.githubusercontent.com/sngxpro/QuanX/master/task/AllinOne.json
#### 添加脚本时会提示添加附件组件，请添加，是获取cookie用的，获取cookie后回到仓库再点一下，选择移除组件，就不再获取cookie了
仓库订阅的一键使用方法可参见群公告具体说明

#### 如果您是ios12用户无法使用仓库订阅功能，请复制下方代码，并粘贴到圈x配置文件的对应标签下：

[task_local]
#多看点

10 * * * * https://raw.githubusercontent.com/age174/-/main/dkd.js, tag=多看点, img-url=https://raw.githubusercontent.com/shoujiqiyuan/PokemonGOforQuanX/master/IconSet/X003.png, enabled=true


[rewrite_local]

#获取多看点Cookie

^http:\/\/dkd-api\.dysdk\.com\/user\/index url script-request-body https://raw.githubusercontent.com/age174/-/main/dkd.js


[MITM]

hostname = dkd-api.dysdk.com

----------------------------

### 2021年2月1日，增加了bigfun连续签到脚本，脚本已加入了age174仓库和我的全网合一仓库，
#### lxk0301仓库订阅地址：https://raw.githubusercontent.com/sngxpro/QuanX/master/task/age174.json
#### 全网合一仓库订阅地址：https://raw.githubusercontent.com/sngxpro/QuanX/master/task/AllinOne.json
#### 添加脚本时会提示添加附件组件，请添加，是获取cookie用的，获取cookie后回到仓库再点一下，选择移除组件，就不再获取cookie了
仓库订阅的一键使用方法可参见群公告具体说明

### 如果您是ios12用户无法使用仓库订阅功能，请复制下方代码，并粘贴到圈x配置文件的对应标签下：

[rewrite_local]

#获取bigfunCookie

^https:\/\/api\.bigfun\.cn\/webview\/iphone? url script-request-body https://raw.githubusercontent.com/age174/-/main/bigfun.js


[task_local]

#bigfun

5 1 * * * https://raw.githubusercontent.com/age174/-/main/bigfun.js, tag=bigfun签到, img-url=https://raw.githubusercontent.com/shoujiqiyuan/PokemonGOforQuanX/master/IconSet/Z003.png, enabled=true


[MITM]

hostname = api.bigfun.cn




### 2021年1月30日，对懒人包的基础订阅包进行了更新（非自动脚本哦），订阅地址：
  https://raw.githubusercontent.com/sngxpro/QuanX/master/sngx2021.conf
### 主要更新内容有：
### 1、增加了网易云解锁灰色功能,按配置的策略和对应节点，白色风车和蓝色风车下可以解锁网易云灰色歌曲。
### 2、修复了抖音去广告和去水印脚本造成的黑屏问题，目前去广告和去水印都正常了。
### 3、最近在外开会，脚本不太有时间掌握新动向，如果您有新脚本，请群内联系我。
### 4、开会间隙更新，如有bug，非常正常，烦请通知我修改。

sngxpro@111.com  接受邮件中



------------------------------------

## 以下为新懒人包仓库使用说明<br>

---------

本懒人包赠送5个高速节点，并随订阅长期更新（不被封ip的话)

---------

## 2021版懒人包使用方法（共2步）：<br>

### （一）订阅基础懒人包配置

 1.复制2021版懒人包订阅地址，如下<br>
  https://raw.githubusercontent.com/sngxpro/QuanX/master/sngx2021.conf<br>

  2.打开QuanX，轻点右下角圆形旋转图标，然后将菜单下拉至最底端，选择“下载”<br>
  
  3.将第一步复制的订阅地址粘贴进去，选确定，此时弹出订阅后添加进去的配置文件，点右上角的保存按钮保存即可<br>

  4.回到QuanX的设置菜单，找到 Mitm 页面 ，点击生成证书，并配置安装到手机<br>

  5.在手机的“设置”中安装证书后，记得到手机的 设置-通用-关于本机--证书信任设置中，将圈x的证书开关打开<br>

  6.回到圈x的设置菜单，打开重写功能的开关和Mitm功能的开关<br>

  7.此时基础懒人包已订阅完成<br>
  
  8.基础懒人包赠送了5个高速节点，可以拿来即用<br>

### （二）订阅懒人包任务（task）配置

  1.选择想要加载的库，根据下文对照表，找到订阅地址。（也可在最上方文件列表中，进入task文件夹选择想要的仓库文件，点击raw获取真实地址，复制地址即为订阅地址）<br>

  2.打开圈x软件，在设置菜单中找到调试，选择构造请求并进入<br>

  3.在构造请求界面，点击右上方第一个图标，长的像是一个提示框加2个箭头<br>

  4.弹出界面点加号，将之前选中的仓库订阅地址复制粘贴进来<br>

  5.点击 好，即可看到出现了新建仓库及任务图标<br>
  
  6.注意：第一次点击上一步的好，有可能不出现我们粘贴进去的新仓库，而是出现一个叫sample的空仓库，这是圈x的示例功能，请重复操作一遍即可
  
  ### （三）可用仓库订阅地址对照表【目前共25个】
  
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


❤[i-chenzhe仓库]
https://raw.githubusercontent.com/sngxpro/QuanX/master/task/i-chenzhe.json

---------
❤ 【公众号少年歌行pro多网合一订阅地址】 

https://raw.githubusercontent.com/sngxpro/QuanX/master/task/AllinOne.json

内含上文所有仓库的所有脚本，1月19日共计245个

--------- 
  #### 致谢：本仓库使用的Task脚本，原作者仓库在下方：
  
  ☆【@NobyDa的仓库】
   (https://github.com/NobyDa)

    ☆【@chavyleung的仓库】  (https://github.com/chavyleung)

  ☆【@Peng-YM的仓库】
  (https://github.com/Peng-YM)

    ☆【@zZPiglet的仓库】  (https://github.com/zZPiglet)

  ☆【@Sunert的仓库】
  (https://github.com/Sunert)
  
    ☆【@lowking的仓库】  (https://github.com/lowking)
  
  ☆【@songyangzz的仓库】
  (https://github.com/songyangzz)
    
    ☆【@toulanboy的仓库】  (https://github.com/toulanboy)
  
  ☆【@lxk0301的仓库】
  (https://gitee.com/lxk0301)
  
    ☆【@vinewx的仓库】  (https://ooxx.be/js/)
  
  ☆【@chouchoui的仓库】
  (https://github.com/chouchoui)
  
    ☆【@evilbutcher的仓库】  (https://github.com/evilbutcher)  
  
  ☆【@id77的仓库】
  (https://github.com/id77)   
  
    ☆【@dompling的仓库】  (https://github.com/dompling)  
  
  ☆【@iepngs的仓库】
  (https://github.com/iepngs)  
  
    ☆【@barrym-chen的仓库】  (https://github.com/barrym-chen) 

  ☆【@iisams的仓库】
  (https://github.com/iisams)
  
    ☆【@congcong0806的仓库】  (https://github.com/congcong0806)
  
  ☆【@DD-D1的仓库】
  (https://github.com/DD-D1) 
  
    ☆【@wangdelu2020的仓库】  (https://github.com/wangdelu2020) 
  
  ☆【@passerby-b的仓库】
  (https://gitee.com/passerby-b) 
  
    ☆【@photonmang的仓库】  (https://github.com/photonmang) 
  

  
  #### 致谢：本仓库使用的图标logo脚本，原作者仓库在下方：
  
  ☆【@orz-3的仓库】
 https://github.com/Orz-3/mini
 
 
   ☆【@58xinian的仓库】
 https://github.com/58xinian/icon
 
  
  

