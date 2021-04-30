/*
软件名称:小宝阅读 
更新时间：2021-04-28 @肥皂
脚本说明：小宝阅读自动阅读
脚本为自动完成小宝阅读的阅读任务
每日收益一两块左右吧，可多号撸。
这个脚本一个月前就写了。不过一直没什么任务。今天看了一下。任务多起来了。可以开搞了。需要手动阅读一次通过鉴权再执行脚本。
目前单价 0.018元。不知道中途要不要鉴权。待测。

复制链接打开
https://app.b4tg3gc.top/app_reg?share_id=d689d21fa27283a1205975

复制后点击手动任务。按提示进入阅读界面即可。
本脚本以学习为主！
使用方法:点击任务大厅的阅读文章
点击开始阅读，等待7-8秒返回获取数据

TG电报群: https://t.me/hahaha8028

boxjs地址 :  

https://raw.githubusercontent.com/age174/-/main/feizao.box.json


小宝阅读
圈X配置如下，其他软件自行测试，定时可以多设置几次，没任务会停止运行的
[task_local]
#小宝阅读
5,35 9-22 * * * https://raw.githubusercontent.com/age174/-/main/xbyd.js, tag=小宝阅读, img-url=https://ae01.alicdn.com/kf/Ubc6bbe61f9f64be78d2b89ec88557fa4f.jpg, enabled=true


[rewrite_local]
#小宝阅读
https://app.b4tg3gc.top/wxread/indexinfo? url script-request-header https://raw.githubusercontent.com/age174/-/main/xbyd.js
#更改等待时长(小宝阅读进入需要等待一分多钟才能点击，添加该重写可以把等待时长改为5秒。)
https:\/\/app\.b4tg3gc\.top\/wxread\/indexinfo\? url response-body limit_time = \d+ response-body limit_time = 5


#loon
https://app.b4tg3gc.top/wxread/indexinfo? script-path=https://raw.githubusercontent.com/age174/-/main/xbyd.js, requires-header=true, timeout=10, tag=小宝阅读



#surge

小宝阅读 = type=http-request,pattern=https://app.b4tg3gc.top/wxread/indexinfo?,requires-header=1,max-size=0,script-path=https://raw.githubusercontent.com/age174/-/main/xbyd.js,script-update-interval=0




[MITM]
hostname = app.b4tg3gc.top


*/


const $ = new Env('小宝阅读自动阅读');
let status;
status = (status = ($.getval("xbydstatus") || "1") ) > 1 ? `${status}` : ""; // 账号扩展字符
const xbydurlArr = [], xbydhdArr = [],xbydcount = ''
let times = Math.round(Date.now() / 1000)
let xbydurl = $.getdata('xbydurl')
let xbydhd = $.getdata('xbydhd')
let xbydkey = '',id = '',uid='',tid='',name='',xx=''
!(async () => {
  if (typeof $request !== "undefined") {
    await xbydck()
   
  } else {xbydurlArr.push($.getdata('xbydurl'))
    xbydhdArr.push($.getdata('xbydhd'))
    let xbydcount = ($.getval('xbydcount') || '1');
  for (let i = 2; i <= xbydcount; i++) {
    xbydurlArr.push($.getdata(`xbydurl${i}`))
    xbydhdArr.push($.getdata(`xbydhd${i}`))
  }
    console.log(`------------- 共${xbydhdArr.length}个账号-------------\n`)
      for (let i = 0; i < xbydhdArr.length; i++) {
        if (xbydhdArr[i]) {
         
          xbydurl = xbydurlArr[i];
          xbydhd = xbydhdArr[i];
          $.index = i + 1;
          console.log(`\n开始【小宝阅读${$.index}】`)
          await xbyd1();
          await xbydxx();

  }
}}

})()
  .catch((e) => $.logErr(e))
  .finally(() => $.done())
//小宝阅读数据获取


function xbydck() {
   if ($request.url.indexOf("user_id") > -1) {
 const xbydurl = $request.url
  if(xbydurl)     $.setdata(xbydurl,`xbydurl${status}`)
    $.log(xbydurl)
  const xbydhd = JSON.stringify($request.headers)
        if(xbydhd)    $.setdata(xbydhd,`xbydhd${status}`)
$.log(xbydhd)
   $.msg($.name,"",'小宝阅读'+`${status}` +'数据获取成功！')
  }
}

//小宝阅读key
function xbyd1(timeout = 0) {
  return new Promise((resolve) => {
    setTimeout( ()=>{
      if (typeof $.getdata('xbydhd') === "undefined") {
        $.msg($.name,"",'请先获取小宝阅读数据!😓',)
        $.done()
      }

let url = {
        url : xbydurl,
        headers : JSON.parse(xbydhd),
        
}
      $.get(url, async (err, resp, data) => {

        try {
          //console.log(data)
    
        if(resp.statusCode == 200){
console.log('\n小宝阅读获取任务信息成功') 
   uid=data.match(/user_id = "(.*?)";/)[1]
tid=data.match(/token = '(.*?)';/)[1]
name=data.match(/<p id="a">(.*?)</)[1]
if(name < 1){
$.msg($.name,'','小宝阅读今日手动阅读小于1次,跳过该账号。')
} else {
await xbydlb(); 

}
       
     
        
} else {
console.log('小宝阅读获取用户信息失败 已停止当前账号运行!')

}
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
      })
    },timeout)
  })
}


//小宝阅读任务列表
function xbydlb(timeout = 0) {
  return new Promise((resolve) => {

let url = {
        url : "https://app.b4tg3gc.top/wxread/startread",
        headers : JSON.parse(xbydhd),
        body : `user_id=${uid}&signature=${tid}&task_type=1`,
       
}
      $.post(url, async (err, resp, data) => {

        try {
    const result = JSON.parse(data)

        if(result.status_code == 200){
if(result.data == ''){
$.log('\n任务更新中')
}else{
tid =result.token
id =data.task_id

        console.log('\n小宝阅读获取任务ID成功\n今日阅读次数'+name+'\n当前任务ID: '+uid+'\n任务token:'+tid+'\n开始循环阅读,等待十秒:')
        await $.wait(10000);
        await xbydyd();
}
} else {
       console.log('\n小宝阅读获取任务ID失败  '+result.message)
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}


//小宝阅读提交
function xbydyd(timeout = 0) {
  return new Promise((resolve) => {
let url = {
        url : "https://app.b4tg3gc.top/wxread/getreadstatus",
        headers : JSON.parse(xbydhd),
        body : `user_id=${uid}&task_id=${id}&signature=${tid}&task_type=1`,
}
      $.post(url, async (err, resp, data) => {
$.log(data)
        try {
           
    const result = JSON.parse(data)
        if(result.data.code == 1){
        console.log('\n小宝阅读任务提交:'+result.message+'\n获得积分:'+result.data.points)

       await xbyd1();
} else {
       console.log('\n小宝阅读任务提交失败 '+result.message)

}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}


//小宝阅读信息
function xbydxx(timeout = 0) {
  return new Promise((resolve) => {

let url = {
        url : "https://app.b4tg3gc.top/get/profit?user_id="+uid,
        headers : JSON.parse(xbydhd),
       
}
      $.get(url, async (err, resp, data) => {
        try {
           
    const result = JSON.parse(data)
        if(result.code == 'S'){
        console.log('\n小宝阅读获取用户信息成功\n今日预估收益:'+result.data.todayProfit+'\n当前账户余额:'+result.data.totalProfit+'\n今日阅读次数:'+result.data.tridTaskNum)
        
} else {
       console.log('\n小宝阅读获取用户信息失败 '+result.msg)
}
   
        } catch (e) {
          //$.logErr(e, resp);
        } finally {
          resolve()
        }
    },timeout)
  })
}



function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
