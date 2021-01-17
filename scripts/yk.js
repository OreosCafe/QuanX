/*
下载app后，打开，注册账号，登录（如果挂代理不能正常注册请直连）
打开'我的'获取Cookie
邀请码：34544195
圈x
[rewrite_local]
#一刻视频
https://api.yikeapp.com url script-request-body https://raw.githubusercontent.com/sngxpro/QuanX/master/scripts/yk.js

[task_local]
0,30 0-12 * * * https://raw.githubusercontent.com/sngxpro/QuanX/master/scripts/yk.js, tag=一刻, 

loon
[Script]
http-request https://api.yikeapp.com script-path= https://raw.githubusercontent.com/sngxpro/QuanX/master/scripts/yk.js, requires-body=true, timeout=10, tag= 一刻

cron "0,30 0-12 * * *" script-path= https://raw.githubusercontent.com/sngxpro/QuanX/master/scripts/yk.js, tag= 一刻

hostname = api.yikeapp.com,

*/


const $ = new Env('一刻视频')
let CookieVal = $.getdata('yk_ck')
let bodyVal = $.getdata('yk_body')

now = new Date(new Date().getTime() + new Date().getTimezoneOffset()*60*1000 + 8*60*60*1000);  

if ($.isNode()) {
      console.log(`============ 脚本执行-国际标准时间(UTC)：${new Date().toLocaleString()}  =============\n`)
      console.log(`============ 脚本执行-北京时间(UTC+8)：${new Date(new Date().getTime() + 8 * 60 * 60 * 1000).toLocaleString()}  =============\n`)
}

if (typeof $request !== 'undefined') {
   if ($request && $request.method != `OPTIONS` && $request.url.indexOf('customer/info') != -1) {
     const CookieVal = JSON.stringify($request.headers)
     const bodyVal = $request.body
   if(CookieVal)$.setdata(CookieVal,'yk_ck')
   if(bodyVal)$.setdata(bodyVal,'yk_body')
     $.log(`Cookie:${CookieVal}`)
     $.log(`bodyVal:${bodyVal}`)
     $.msg($.name,"获取Cookie成功")
     $.done()
   }
} else {
!(async() => {

   if (now.getHours() <= 12){//通知时间
      $.msg($.name, '自動閱讀开始🎉🎉🎉')
   }else {
      $.log($.name, '当前不在执行时间段,将为您查询账户余额！')
   }
   if (now.getHours() == 0){
      await withDraw();
   }else if (now.getHours() >= 7 && now.getHours() <12 ){//日常任务及普通任务执行时间7-11点
   if (now.getHours() === 7 && now.getMinutes() < 30){//签到时间 7:30之前
      await signIn();
      await doubleId()
      await dailyTaskList();
    }
      await smVideoLimit()
}else if(now.getHours() <= 6 || now.getHours() > 10 && now.getHours() <= 12){//广告视频执行时间 0-6点以及10-12点
for (var k = 1; k <= 119; k++){
      await inspireAd()
     }
      await bubbleList()
      await userInfo()
     }
      await bubbleList()
      await userInfo()
})()
    .catch((e) => $.logErr(e))
    .finally(() => $.done())
}

//签到
function signIn() {
  return new Promise((resolve, reject) =>{
   let signin =  {
      url:  `https://api.yikeapp.com/customer/sign_in`,
      headers: JSON.parse(CookieVal),
      }
   $.post(signin, async(error, response, data) => {
     let sign = JSON.parse(data)
     $.log('sign\n'+data)
     if (sign.code == 200){
          $.log('\n'+ sign2.data.TopContent)
         }else{
          $.log('\n'+data)
      }
     resolve()
    })
  })
}

function signDouble() {
  return new Promise((resolve, reject) =>{
   let signdouble =  {
      url: `https://api.yikeapp.com/customer/coin_double`,
      headers: JSON.parse(CookieVal),
      body: `{"task_id":1,"tmp_id":${ID}}}`,
      }
   $.post(signdouble, async(error, resp, data) => {
     let sign2 = JSON.parse(data)
     $.log('signdouble\n'+data)
     if(sign2.code == 200){
        $.log('\n'+ sign2.data.TopContent)
       }else {
        $.log('\n'+data)
      }
       resolve()
    })
  })
}



function userInfo() {
  return new Promise((resolve, reject) =>{
   let userinfo =  {
      url:  `https://api.yikeapp.com/customer/info`,
      headers: JSON.parse(CookieVal),
      body: bodyVal,
      }
   $.post(userinfo, async(error, resp, data) => {
     let info = JSON.parse(data)
      if(info.code == 200){
       name = info.data.CustomerNickname
       coin = info.data.CoinNumber
       $.msg($.name, "昵称:"+name+" 账户金币"+coin+"💰\n")
           await invite()
     }
     resolve()
    })
  })
}



function smVideoTask() {
  return new Promise((resolve, reject) =>{
   let smvideotask =  {
      url: `https://api.yikeapp.com/customer/play_fullscreen_video_once`,
      headers: JSON.parse(CookieVal),
      body: `{"video_id":${randomId(134000,135000)}}`
      }
   $.post(smvideotask, async(error, resp, data) => {
     let smvideo = JSON.parse(data)
     //$.log(data)
     if(smvideo.code == 200){
     $.log('\n小视频: '+ smvideo.data.TopContent)
         await $.wait(32000)
         await smVideoLimit()
       } else {
         $.log('\n小视频'+data)
         await $.wait(32000)
      }
       resolve()
    })
  })
}


function videoTask() {
  return new Promise((resolve, reject) =>{
   let videotask =  {
      url: `https://api.yikeapp.com/customer/play_video_one`,
      headers: JSON.parse(CookieVal),
      body: `{"video_id":${randomId(134000,135000)}}`
      }
   $.post(videotask, async(error, resp, data) => {
     let video = JSON.parse(data)
     if(video.code == 200){
     $.log('\n视频: '+ video.data.TopContent)
         await $.wait(32000)
       } else {
        $.log('\n视频'+data)
         await $.wait(32000)
      }
       resolve()
    })
  })
}


function inspireAd() {
  return new Promise((resolve, reject) =>{
   let inspiread =  {
      url: `https://api.yikeapp.com/customer/play_ad_one`,
      headers: JSON.parse(CookieVal),
      }
   $.post(inspiread, async(error, resp, data) => {
     let inspire = JSON.parse(data)
     if(inspire.code == 200){
     $.log('\n广告视频: '+ inspire.data.TopContent)
         await $.wait(15000)
       } else {
        $.log('\n广告'+data)
         await $.wait(15000)
      }
       resolve()
    })
  })
}

function doubleId() {
  return new Promise((resolve, reject) =>{
   let doubleid =  {
      url: `https://api.yikeapp.com/customer/sign_in_day`,
      headers: JSON.parse(CookieVal),
      }
   $.post(doubleid, async(error, resp, data) => {
     let double = JSON.parse(data)
     $.log('doubleid\n'+data)
     if (double.code == 200){
       for(doubleid of double.data){
         if(doubleid.CanDouble == true){
            ID = doubleid.ID
            $.log(ID)
            await signDouble()
          }
        }
       }
      resolve()
    })
  })
}



function bubbleList() {
  return new Promise((resolve, reject) =>{
   let bubblelist =  {
      url: `https://api.yikeapp.com/coin/bubble`,
      headers: JSON.parse(CookieVal),
      }
   $.post(bubblelist, async(error, resp, data) => {
     let bubble = JSON.parse(data)
     if (bubble.code == 200){
       for(bubbleid of bubble.data.list){
         id = bubbleid.ID
            $.log(id)
         await coinPick()
         await coinDouble()
        }
       }
      resolve()
    })
  })
}


function coinPick() {
  return new Promise((resolve, reject) =>{
   let coinpick =  {
      url: `https://api.yikeapp.com/coin/pick`,
      headers: JSON.parse(CookieVal),
      body: `{"id":${id}}`
      }
   $.post(coinpick, async(error, resp, data) => {
     let pick = JSON.parse(data)
     if(pick.code == 200){
     $.log('\n pick'+ pick.data.TopContent+'\n'+data)
         //await $.wait(1000)
       } else {
        $.log('\n'+data)
      }
       resolve()
    })
  })
}

function coinDouble() {
  return new Promise((resolve, reject) =>{
   let coindouble =  {
      url: `https://api.yikeapp.com/customer/coin_double`,

      headers: JSON.parse(CookieVal),

      body: `{"bubble_id":${id}}`
      }
   $.post(coindouble, async(error, response, data) => {
     let double = JSON.parse(data)
     if (double.code == 200){
          $.log('\n double'+ double.data.TopContent)
         //await $.wait(1000)
       } else {
        $.log('\n'+data)
      }
       resolve()
    })
  })
}


function welfareVideo() {
  return new Promise((resolve, reject) =>{
   let welfarevideo =  {
      url: `https://api.yikeapp.com/customer/task_finish`,
      headers: JSON.parse(CookieVal),
      body: '{"id":11}',
      }
   $.post(welfarevideo, async(error, resp, data) => {
     let welfare = JSON.parse(data)
     $.log(data)
     if(welfare.code == 200){
     $.log('\n'+ welfare.data.TopContent)
         await welfareDouble()
         await dailyTaskList()
       } else {
        $.log('\n'+data)
         await otherTaskList()
      }
       resolve()
    })
  })
}

function welfareDouble() {
  return new Promise((resolve, reject) =>{
   let welfaredouble =  {
      url: `https://api.yikeapp.com/customer/coin_double`,
      headers: JSON.parse(CookieVal),
      body: '{"task_id":11}',
      }
   $.post(welfaredouble, async(error, resp, data) => {
     let welfare2 = JSON.parse(data)
     $.log(data)
     
     if(welfare2.code == 200){
     $.log('\n'+ welfare2.data.TopContent)

       } else {
        $.log('\n'+data)
      }
       resolve()
    })
  })
}



function shareVideo() {
  return new Promise((resolve, reject) =>{
   let sharevideo =  {
      url: `https://api.yikeapp.com/customer/share_video`,
      headers: JSON.parse(CookieVal),
      }
   $.post(sharevideo, async(error, resp, data) => {
     let share = JSON.parse(data)
     $.log(data)
     if(share.code == 200){
     $.log('\n'+ share.data.TopContent)
         await shareDouble()
         await otherTaskList()
       } else {
        $.log('\n'+data)
      }
       resolve()
    })
  })
}

function shareDouble() {
  return new Promise((resolve, reject) =>{
   let sharedouble =  {
      url: `https://api.yikeapp.com/customer/coin_double`,
      headers: JSON.parse(CookieVal),
      body: '{"task_id":7}',
      }
   $.post(sharedouble, async(error, resp, data) => {
     let share2 = JSON.parse(data)
     $.log(data)
     if(share2.code == 200){
     $.log('\n'+ share2.data.TopContent)
       } else {
        $.log('\n'+data)
      }
       resolve()
    })
  })
}

function withDraw() {
  return new Promise((resolve, reject) =>{
   let withdraw =  {
      url: `https://api.yikeapp.com/customer/withdraw`,
      headers: JSON.parse(CookieVal),
      body: '{"id":2}',
      }
   $.post(withdraw, async(error, resp, data) => {
     let draw = JSON.parse(data)
     //$.log(data)
     if(draw.code == 200){
     $.log('\n'+ draw.msg)
     $.msg($.name,'',draw.msg)
       } else {
        $.log('\n'+data)
     $.msg($.name,'',draw.msg)
      }
       resolve()
    })
  })
}

function dailyTaskList() {
  return new Promise((resolve, reject) =>{
   let dailytasklist =  {
      url: `https://api.yikeapp.com/customer/daily_task_list`,
      headers: JSON.parse(CookieVal),
      }
   $.post(dailytasklist, async(error, resp, data) => {
     let dailytask = JSON.parse(data)
     if (dailytask.code == 200){
       for(limit of dailytask.data.list){
         if (limit.ID == 11){
         welfare = limit.finishCount
         $.log(welfare)
           if(welfare < 9){
              await welfareVideo()
           }else{
              await otherTaskList()
          }
         }
        }
       }
      resolve()
    })
  })
}

function otherTaskList() {
  return new Promise((resolve, reject) =>{
   let othertasklist =  {
      url: `https://api.yikeapp.com/customer/other_task_list`,
      headers: JSON.parse(CookieVal),
      }
   $.post(othertasklist, async(error, resp, data) => {
     let othertask = JSON.parse(data)
     if (othertask.code == 200){
       for(limit of othertask.data.list){
         if (limit.ID == 7){
         share = limit.finishCount
         $.log(share)
           if(share < 50){
              await shareVideo()
          }
         }
        }
       }
      resolve()
    })
  })
}


function smVideoLimit() {
  return new Promise((resolve, reject) =>{
   let smvideolimit =  {
      url: `https://api.yikeapp.com/customer/daily_task_list`,
      headers: JSON.parse(CookieVal),
      }
   $.post(smvideolimit, async(error, resp, data) => {
     let smvideo = JSON.parse(data)
     if (smvideo.code == 200){
       for(limit of smvideo.data.list){
         if (limit.ID == 16){
         smlimit = limit.finishCount
         $.log(smlimit)
           if(smlimit < 30){
              await smVideoTask()
           }else{
              await videoLimit()
          }
         }
        }
       }
      resolve()
    })
  })
}

function videoLimit() {
  return new Promise((resolve, reject) =>{
   let videolimit =  {
      url: `https://api.yikeapp.com/customer/other_task_list`,
      headers: JSON.parse(CookieVal),
      }
   $.post(videolimit, async(error, resp, data) => {
     let video = JSON.parse(data)
     if (video.code == 200){
       for(limit of video.data.list){
         if (limit.ID == 5){
         Videolimit = limit.finishCount
         $.log(Videolimit)
           if(Videolimit < 100){
              await videoTask()
          }
         }
        }
       }
      resolve()
    })
  })
}

function invite() {
   let inv =  {
      url: `https://api.yikeapp.com/customer/update_invite_code`,
      headers: JSON.parse(CookieVal),
      body: '{"invite_code":"12642334"}',
      }
   $.post(inv, (error, response, data) => {
  })
}

function randomId(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
