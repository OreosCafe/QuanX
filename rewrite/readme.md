## Quantumult X 少年歌行pro  部分重写规则订阅

### 订阅：

  1、已集成到懒人包中，如果使用懒人包无需手动使用本文件夹中的资源<br>
  2、如果您自建圈x配置文件，或者使用其他懒人配置恰好缺少此文件夹中的规则，可以自取添加到您圈x的配置文件中<br>

### 说明
  本仓库只为收集整理所建，多数资源来自其他大神，在此致谢。


#解锁限制类规则，根据需要选择是否开启
https://ghproxy.com/https://raw.githubusercontent.com/Oreomeow/QuanX/master/rewrite/tiktokJP.conf, tag=tiktok解锁日区（勿混用）, update-interval=86400, opt-parser=true, enabled=true
https://ghproxy.com/https://raw.githubusercontent.com/Oreomeow/QuanX/master/rewrite/tiktokTW.conf, tag=tiktok解锁台区（勿混用）, update-interval=86400, opt-parser=true, enabled=false
https://ghproxy.com/https://raw.githubusercontent.com/Oreomeow/QuanX/master/rewrite/tiktokKR.conf, tag=tiktok解锁韩区（勿混用）, update-interval=86400, opt-parser=true, enabled=false
https://ghproxy.com/https://raw.githubusercontent.com/Oreomeow/QuanX/master/rewrite/tiktokUS.conf, tag=tiktok解锁美区（勿混用）, update-interval=86400, opt-parser=true, enabled=false
#boxjs规则，强烈建议保持开启
https://ghproxy.com/https://raw.githubusercontent.com/chavyleung/scripts/master/box/rewrite/boxjs.rewrite.quanx.conf, tag=BoxJs, update-interval=86400, opt-parser=true, enabled=true
#比价格规则，根据需要选择是否开启
https://ghproxy.com/https://raw.githubusercontent.com/Oreomeow/QuanX/master/rewrite/price.conf, tag=淘宝京东比价格, update-interval=86400, opt-parser=false, enabled=true
#去广告类规则，建议保持开启，但抓取一些看广告得奖励cookie是要关闭
https://ghproxy.com/https://raw.githubusercontent.com/Oreomeow/QuanX/master/rewrite/YouTube.conf, tag=YouTube去广告, update-interval=86400, opt-parser=false, enabled=true
https://ghproxy.com/https://raw.githubusercontent.com/Oreomeow/QuanX/master/rewrite/Rewrite_lhie1.conf, tag=lhie1去广告, update-interval=86400, opt-parser=false, enabled=true
https://ghproxy.com/https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Rewrite/Block/Advertising.conf, tag=神机去广告, update-interval=86400, opt-parser=false, enabled=true
https://ghproxy.com/https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Rewrite/General.conf, tag=神机重定向, update-interval=86400, opt-parser=false, enabled=true
#破解软件规则，建议用的时候开启
https://ghproxy.com/https://raw.githubusercontent.com/Oreomeow/QuanX/master/rewrite/unlockvip.conf, tag=少年歌行解锁vip, update-interval=86400, opt-parser=false, enabled=true
#京东代收货获取ck，和其他规则都冲突，用时候勾选，抓到cookie后立即关闭
https://ghproxy.com/https://raw.githubusercontent.com/Oreomeow/QuanX/master/rewrite/jddsh.conf, tag=京东待收货（和其他规则都冲突抓完关）, update-interval=86400, opt-parser=false, enabled=false
#获取cookie类重写，现抓ck现启用，且注意我单列的基本是互相冲突的
https://ghproxy.com/https://raw.githubusercontent.com/Oreomeow/QuanX/master/rewrite/cookie.conf, tag=获取Cookie（现抓现打勾）, update-interval=86400, opt-parser=false, enabled=true
https://cdn.jsdelivr.net/gh/Oreomeow/QuanX@master/rewrite/csxdr.conf, tag=超市小达人获取ck（与获取cookie、动物研究规则冲突）, update-interval=86400, opt-parser=false, enabled=true
https://ghproxy.com/https://ghproxy.com/https://raw.githubusercontent.com/Oreomeow/QuanX/master/rewrite/dwyjy.conf, tag=动物研究院获取ck（与获取cookie、超市、网红规则冲突）, update-interval=86400, opt-parser=false, enabled=false
https://ghproxy.com/https://ghproxy.com/https://raw.githubusercontent.com/Oreomeow/QuanX/master/rewrite/wdwhd.conf, tag=我的网红店获取ck（与获取cookie、超市、动物规则冲突）, update-interval=86400, opt-parser=false, enabled=false
https://ghproxy.com/https://ghproxy.com/https://raw.githubusercontent.com/Oreomeow/QuanX/master/rewrite/debao.conf, tag=德宝小程序（与获取cookie规则冲突）, update-interval=86400, opt-parser=false,enabled=false
https://ghproxy.com/https://ghproxy.com/https://raw.githubusercontent.com/Oreomeow/QuanX/master/rewrite/yyzb.conf, tag=云云赚呗（与其他规则冲突）, update-interval=86400, opt-parser=false, enabled=false
#下方是可选配置，注意tag说明
https://ghproxy.com/https://raw.githubusercontent.com/Oreomeow/QuanX/master/rewrite/qianheuser.conf, tag=肥皂千禾账户ck先开（不和后开同时打勾）, update-interval=86400, opt-parser=false, enabled=false
https://ghproxy.com/https://raw.githubusercontent.com/Oreomeow/QuanX/master/rewrite/qianhetask.conf, tag=肥皂千禾任务ck后开（不和先开同时打勾）, update-interval=86400, opt-parser=false, enabled=false
https://ghproxy.com/https://raw.githubusercontent.com/Oreomeow/QuanX/master/rewrite/shuqiheader.conf, tag=ziye书旗ck先开（不能和其他书旗同时打勾）, update-interval=86400, opt-parser=false, enabled=false
https://ghproxy.com/https://raw.githubusercontent.com/Oreomeow/QuanX/master/rewrite/shuqibody.conf, tag=ziye书旗ck后开（不能和其他书旗同时打勾）, update-interval=86400, opt-parser=false, enabled=false
https://ghproxy.com/https://raw.githubusercontent.com/Oreomeow/QuanX/master/rewrite/shuqibook.conf, tag=ziye书旗书城ck（不能和其他书旗同时打勾）, update-interval=86400, opt-parser=false, enabled=false
https://ghproxy.com/https://raw.githubusercontent.com/CenBoMin/GithubSync/main/SHUQI/cookie.conf, tag=姐姐书旗一般ck（不能和其他书旗同时打勾）, update-interval=86400, opt-parser=false, enabled=false
https://ghproxy.com/https://raw.githubusercontent.com/CenBoMin/GithubSync/main/SHUQI/spcookie.conf, tag=姐姐书旗极速ck（不能和其他书旗同时打勾）, update-interval=86400, opt-parser=false, enabled=false
https://ghproxy.com/https://raw.githubusercontent.com/CenBoMin/GithubSync/main/SHUQI/lottery.conf, tag=姐姐书旗一般转转转ck（不能和其他书旗同时打勾）, update-interval=86400, opt-parser=false, enabled=false
https://ghproxy.com/https://raw.githubusercontent.com/CenBoMin/GithubSync/main/SHUQI/everday.conf, tag=姐姐书旗刷时长ck（不能和其他书旗同时打勾）, update-interval=86400, opt-parser=false, enabled=false
https://ghproxy.com/https://raw.githubusercontent.com/Oreomeow/QuanX/master/rewrite/qx_rewite.txt, tag=sunert中青cookie获取,  update-interval=86400, opt-parser=false, enabled=false
https://ghproxy.com/https://raw.githubusercontent.com/Oreomeow/QuanX/master/rewrite/qx_youthread.txt, tag=sunert中青阅读body获取,  update-interval=86400, opt-parser=false, enabled=false
https://ghproxy.com/https://raw.githubusercontent.com/ztxtop/x/main/rewrite-zqkkz.plugin, tag=中青看看赚&浏览赚Cookie获取（需资源解析器）, update-interval=86400, opt-parser=true, enabled=false
https://ghproxy.com/https://raw.githubusercontent.com/Oreomeow/QuanX/master/rewrite/jdtqbody.conf, tag=简单天气body（第一个开，单独开）, update-interval=86400, opt-parser=false, enabled=false
https://ghproxy.com/https://raw.githubusercontent.com/Oreomeow/QuanX/master/rewrite/jdtqapi.conf, tag=简单天气api（第二个开，单开）, update-interval=86400, opt-parser=false, enabled=false
https://ghproxy.com/https://raw.githubusercontent.com/Oreomeow/QuanX/master/rewrite/jdtqevent.conf, tag=简单天气event（第三个开，单开）, update-interval=86400, opt-parser=false, enabled=false
