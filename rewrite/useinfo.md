1、请将下方代码粘贴到圈x配置文件的[rewrite remote]标签下面：
  
```
#除palipali外所有规则
https://raw.githubusercontent.com/sngxpro/QuanX/master/rewrite/unlockvip.conf, tag=少年歌行解锁vip, update-interval=86400, opt-parser=false, enabled=true
```

```
#palipali单独规则，不要混用，用时勾选这个，取消勾选其他
https://raw.githubusercontent.com/sngxpro/QuanX/master/rewrite/palipalivip.conf, tag=少年歌行啪哩vip, update-interval=86400, opt-parser=false, enabled=true
```

2、回到圈x首页，长按左下角风车按钮，在点击左下角刷新按钮，全部刷新完毕即可生效

3、尽量不要与其他破解类规则共用，以防出现冲突失效问题

4、注意自己的本地重写和本地mitm中是否引用过破解类规则，以防冲突失效。
