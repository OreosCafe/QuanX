### 更新方式：

本次无法远程自动同步，需如下操作：

`方法一：覆盖安装懒人包配置`（此方法会覆盖您的本地配置）

[点击跳转查看安装方法](https://github.com/sngxpro/QuanX/blob/master/howtouse.md)

`方法二：手动编辑自己的圈x配置文件`

将以下3个标签下的内容`全部替换`

[filter_remote]
```
https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Filter/Unbreak.list, tag=规则修正, update-interval=86400, opt-parser=false, enabled=true
https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Filter/Guard/Advertising.list, tag=广告拦截, force-policy=reject, update-interval=86400, opt-parser=false, enabled=true
https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/AdRule.list, tag=广告拦截, force-policy=reject, update-interval=86400, opt-parser=false, enabled=true
https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Filter/Guard/Privacy.list, tag=隐私保护, force-policy=reject, update-interval=86400, opt-parser=false, enabled=true
https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Filter/Guard/Hijacking.list, tag=运营劫持, force-policy=reject, update-interval=86400, opt-parser=false, enabled=true
https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Filter/Extra/Telegram/Telegram.list, tag=电报代理, force-policy=电报代理, update-interval=86400, opt-parser=false, enabled=true
https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Filter/StreamingMedia/Music/Spotify.list, tag=声田音乐, force-policy=声田音乐, update-interval=86400, opt-parser=false, enabled=true
https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Filter/StreamingMedia/Video/Netflix.list, tag=网飞影视, force-policy=网飞影视, update-interval=86400, opt-parser=false, enabled=true
https://raw.githubusercontent.com/Semporia/Quantumult-X/master/Filter/TikTok.list, tag=TikTok, force-policy=TikTok, update-interval=86400, opt-parser=false, enabled=true
https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Filter/StreamingMedia/Video/Bahamut.list, tag=动画疯, force-policy=台湾, update-interval=86400, opt-parser=false, enabled=true
https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Filter/StreamingMedia/Streaming.list, tag=国际媒体, force-policy=国际媒体, update-interval=86400, opt-parser=false, enabled=true
https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Filter/StreamingMedia/StreamingSE.list, tag=港台番剧, force-policy=港台番剧, update-interval=86400, opt-parser=false, enabled=true
https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Filter/Global.list, tag=全球加速, force-policy=全球加速, update-interval=86400, opt-parser=false, enabled=true
https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Filter/Extra/Apple/AppStoreConnect.list, tag=苹果服务, force-policy=苹果服务, update-interval=86400, opt-parser=false, enabled=true
https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Filter/Extra/Apple/AppStore.list, tag=苹果服务, force-policy=苹果服务, update-interval=86400, opt-parser=false, enabled=true
https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Filter/Extra/Apple/TestFlight.list, tag=苹果服务, force-policy=苹果服务, update-interval=86400, opt-parser=false, enabled=true
https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Filter/China.list, tag=国内网站, force-policy=direct, update-interval=86400, opt-parser=false, enabled=true
https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Filter/Extra/ChinaIP.list, tag=ChinaIP, update-interval=86400, enabled=true
```

[rewrite_remote]
```
#上方是推荐启用配置
https://raw.githubusercontent.com/sngxpro/QuanX/master/rewrite/tiktokJP.conf, tag=tiktok解锁日区（勿混用）, update-interval=86400, opt-parser=true, enabled=true
https://raw.githubusercontent.com/sngxpro/QuanX/master/rewrite/tiktokTW.conf, tag=tiktok解锁台区（勿混用）, update-interval=86400, opt-parser=true, enabled=false
https://raw.githubusercontent.com/sngxpro/QuanX/master/rewrite/tiktokKR.conf, tag=tiktok解锁韩区（勿混用）, update-interval=86400, opt-parser=true, enabled=false
https://raw.githubusercontent.com/sngxpro/QuanX/master/rewrite/tiktokUS.conf, tag=tiktok解锁美区（勿混用）, update-interval=86400, opt-parser=true, enabled=false
https://raw.githubusercontent.com/chavyleung/scripts/master/box/rewrite/boxjs.rewrite.quanx.conf, tag=BoxJs, update-interval=86400, opt-parser=true, enabled=true
https://raw.githubusercontent.com/sngxpro/QuanX/master/rewrite/YouTube.conf, tag=YouTube去广告, update-interval=86400, opt-parser=false, enabled=true
https://raw.githubusercontent.com/sngxpro/QuanX/master/rewrite/price.conf, tag=淘宝京东比价格, update-interval=86400, opt-parser=false, enabled=true
https://raw.githubusercontent.com/sngxpro/QuanX/master/rewrite/Rewrite_lhie1.conf, tag=lhie1去广告, update-interval=86400, opt-parser=false, enabled=true
https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Rewrite/Block/Advertising.conf, tag=神机去广告, update-interval=86400, opt-parser=false, enabled=true
https://raw.githubusercontent.com/sngxpro/QuanX/master/rewrite/cookie.conf, tag=获取Cookie（现抓现打勾）, update-interval=86400, opt-parser=false, enabled=true
https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Rewrite/General.conf, tag=神机重定向, update-interval=86400, opt-parser=false, enabled=true
https://raw.githubusercontent.com/sngxpro/QuanX/master/rewrite/unlockvip.conf, tag=少年歌行解锁vip, update-interval=86400, opt-parser=false, enabled=true
#下方是可选配置，有需要的删除行首的井号即可生效
#https://raw.githubusercontent.com/sngxpro/QuanX/master/rewrite/shuqiheader.conf, tag=ziye书旗ck先开（不能和其他书旗同时打勾）, update-interval=86400, opt-parser=false, enabled=true
#https://raw.githubusercontent.com/sngxpro/QuanX/master/rewrite/shuqibody.conf, tag=ziye书旗ck后开（不能和其他书旗同时打勾）, update-interval=86400, opt-parser=false, enabled=false
#https://raw.githubusercontent.com/sngxpro/QuanX/master/rewrite/shuqibook.conf, tag=ziye书旗书城ck（不能和其他书旗同时打勾）, update-interval=86400, opt-parser=false, enabled=false
#https://raw.githubusercontent.com/CenBoMin/GithubSync/main/SHUQI/cookie.conf, tag=姐姐书旗一般ck（不能和其他书旗同时打勾）, update-interval=86400, opt-parser=false, enabled=false
#https://raw.githubusercontent.com/CenBoMin/GithubSync/main/SHUQI/spcookie.conf, tag=姐姐书旗极速ck（不能和其他书旗同时打勾）, update-interval=86400, opt-parser=false, enabled=false
#https://raw.githubusercontent.com/CenBoMin/GithubSync/main/SHUQI/lottery.conf, tag=姐姐书旗一般转转转ck（不能和其他书旗同时打勾）, update-interval=86400, opt-parser=false, enabled=false
#https://raw.githubusercontent.com/CenBoMin/GithubSync/main/SHUQI/everday.conf, tag=姐姐书旗刷时长ck（不能和其他书旗同时打勾）, update-interval=86400, opt-parser=false, enabled=false
#https://raw.githubusercontent.com/Sunert/Scripts/master/TaskConf/youth/qx_rewite.txt, tag=sunert中青cookie获取,  update-interval=86400, opt-parser=false, enabled=true
#https://raw.githubusercontent.com/Sunert/Scripts/master/TaskConf/youth/qx_youthread.txt, tag=sunert中青阅读body获取,  update-interval=86400, opt-parser=false, enabled=false
#https://raw.githubusercontent.com/ztxtop/x/main/rewrite-zqkkz.plugin, tag=中青看看赚&浏览赚Cookie获取（需资源解析器）, update-interval=86400, opt-parser=true, enabled=false
#https://raw.githubusercontent.com/sngxpro/QuanX/master/rewrite/jdtqbody.conf, tag=简单天气body（第一个开，单独开）, update-interval=86400, opt-parser=false, enabled=false
#https://raw.githubusercontent.com/sngxpro/QuanX/master/rewrite/jdtqapi.conf, tag=简单天气api（第二个开，单开）, update-interval=86400, opt-parser=false, enabled=false
#https://raw.githubusercontent.com/sngxpro/QuanX/master/rewrite/jdtqevent.conf, tag=简单天气event（第三个开，单开）, update-interval=86400, opt-parser=false, enabled=false
```

[http_backend]
```
#公众号少年歌行PRO提示您：如您不了解，请不要修改
#已将boxjs的加载方式修改为http_backend方式，默认浏览器登录boxjs地址为127.0.0.0:9999
#如果还想用域名方式登录boxjs，先用上面的数字ip登录boxjs，然后点击BoxJs页面最下方的 > 应用按钮(底栏) > 内置应用按钮 > 偏好设置按钮，
#在新页面`HTTP Backend (Quantumult X)` 中填入 http://127.0.0.1:9999 并保存，就可以继续用域名方式登录boxjs了
https://raw.githubusercontent.com/chavyleung/scripts/master/chavy.box.js, tag=BoxJS, path=^/, enabled=true
```
