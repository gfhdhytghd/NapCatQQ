function _0x1268(_0x47b728,_0x58721f){const _0x3c9b9a=_0x3c9b();return _0x1268=function(_0x126806,_0x565c63){_0x126806=_0x126806-0x112;let _0x5a24c7=_0x3c9b9a[_0x126806];return _0x5a24c7;},_0x1268(_0x47b728,_0x58721f);}const _0x1e05b2=_0x1268;(function(_0x5178fb,_0x255ff2){const _0x56347f=_0x1268,_0x3743df=_0x5178fb();while(!![]){try{const _0x499152=parseInt(_0x56347f(0x12f))/0x1*(-parseInt(_0x56347f(0x140))/0x2)+parseInt(_0x56347f(0x141))/0x3+-parseInt(_0x56347f(0x11f))/0x4*(parseInt(_0x56347f(0x11a))/0x5)+-parseInt(_0x56347f(0x119))/0x6*(parseInt(_0x56347f(0x129))/0x7)+parseInt(_0x56347f(0x142))/0x8+parseInt(_0x56347f(0x150))/0x9*(parseInt(_0x56347f(0x133))/0xa)+parseInt(_0x56347f(0x144))/0xb;if(_0x499152===_0x255ff2)break;else _0x3743df['push'](_0x3743df['shift']());}catch(_0x5928d4){_0x3743df['push'](_0x3743df['shift']());}}}(_0x3c9b,0xe3312));import{Credentials,selfInfo}from'@/core/data';import{napCatCore}from'@/core';import{ProfileListener}from'@/core/listeners';import{randomUUID}from'crypto';import{HttpGetCookies}from'../../../common/utils/request';import{logError}from'@/common/utils/log';const userInfoCache={},profileListener=new ProfileListener(),userDetailHandlers=new Map();function _0x3c9b(){const _0x387c6a=['7256040mTanOC','ubrdv','24098767MuXdzh','delete','onLoginSuccess','vYjdI','Rcbmz','yITkX','setBuddyProfileLike','GXHDd','getTipOffService','getMsgService','then','FgWVX','45Jqkhse','push','session','wPmrX','getUserDetailInfoWithBizInfo','fromEntries','tVpPG','uin','&clientkey=','now','skey','OljyA','fmtHE','6ifMVXR','38300jdNTxb','addListener','Nljfi','&u1=https%3A%2F%2Fh5.qzone.qq.com%2Fqqnt%2Fqzoneinpcqq%2Ffriend%3Frefresh%3D0%26clientuin%3D0%26darkMode%3D0&keyindex=','PskeyData','496zHUHuu','getRobotUinRange','getPskey','FBoLj','setSelfOnlineStatus','get','assign','getProfileService','Skey','errMsg','5351542FlJOyO','getUserDetailInfo','setQQAvatar','uid','getRobotService','set','4211YQuYfX','getUserDetailInfo\x20timeout','onProfileDetailInfoChanged','gGDHW','318970XcKLVy','domainPskeyMap','getProfileLikeService','PskeyTime','eObFA','HnPMD','result','entries','forceFetchClientKey','CreatTime','getTicketService','forEach','getSkey','338AbUoBV','297888gsHgoX'];_0x3c9b=function(){return _0x387c6a;};return _0x3c9b();}profileListener[_0x1e05b2(0x131)]=_0xa448d0=>{const _0x51c36c=_0x1e05b2;userInfoCache[_0xa448d0[_0x51c36c(0x12c)]]=_0xa448d0,userDetailHandlers[_0x51c36c(0x13e)](_0x1eceac=>_0x1eceac(_0xa448d0));},setTimeout(()=>{const _0xde98fc=_0x1e05b2;napCatCore[_0xde98fc(0x146)](()=>{const _0x3722af=_0xde98fc;napCatCore[_0x3722af(0x11b)](profileListener);});},0x64);export class NTQQUserApi{static async[_0x1e05b2(0x123)](_0x5e4d80,_0x38fb21,_0x5da485){const _0x50cdd0=_0x1e05b2;return napCatCore[_0x50cdd0(0x152)][_0x50cdd0(0x14d)]()['setStatus']({'status':_0x5e4d80,'extStatus':_0x38fb21,'batteryStatus':_0x5da485});}static async['like'](_0x2ff256,_0x286930=0x1){const _0x281551=_0x1e05b2;return napCatCore[_0x281551(0x152)][_0x281551(0x135)]()[_0x281551(0x14a)]({'friendUid':_0x2ff256,'sourceId':0x47,'doLikeCount':_0x286930,'doLikeTollCount':0x0});}static async[_0x1e05b2(0x12b)](_0x189fd0){const _0xe3d99a=_0x1e05b2,_0x4a4283=napCatCore[_0xe3d99a(0x152)]['getProfileService']()['setHeader'](_0x189fd0);return{'result':_0x4a4283?.['result'],'errMsg':_0x4a4283?.[_0xe3d99a(0x128)]};}static async['getSelfInfo'](){}static async['getUserInfo'](_0x4b5a6c){}static async[_0x1e05b2(0x12a)](_0x3dd7cb){const _0x59f6a0=_0x1e05b2,_0x101aa6={'ubrdv':_0x59f6a0(0x130),'lonSM':function(_0x1ce0b1,_0x20ae99){return _0x1ce0b1===_0x20ae99;},'Ztzjz':function(_0x42c39e,_0x506484,_0x4f6846){return _0x42c39e(_0x506484,_0x4f6846);}},_0x2f194b=napCatCore[_0x59f6a0(0x152)][_0x59f6a0(0x126)]();return new Promise((_0x2db17,_0x280df5)=>{const _0x5aea0a=_0x59f6a0,_0x21dfde={'gGDHW':function(_0x35ba27,_0x456876){return _0x35ba27(_0x456876);},'yITkX':_0x101aa6[_0x5aea0a(0x143)],'CZshh':function(_0x41b231,_0x2b8d1d){return _0x101aa6['lonSM'](_0x41b231,_0x2b8d1d);}},_0x4fc382=randomUUID();let _0x36f1a6=![];_0x101aa6['Ztzjz'](setTimeout,()=>{const _0x41019=_0x5aea0a;!_0x36f1a6&&_0x21dfde['gGDHW'](_0x280df5,_0x21dfde[_0x41019(0x149)]);},0x1388),userDetailHandlers[_0x5aea0a(0x12e)](_0x4fc382,_0x408aab=>{const _0x41ac11=_0x5aea0a;_0x21dfde['CZshh'](_0x408aab[_0x41ac11(0x12c)],_0x3dd7cb)&&(_0x36f1a6=!![],userDetailHandlers[_0x41ac11(0x145)](_0x4fc382),_0x21dfde[_0x41ac11(0x132)](_0x2db17,_0x408aab));}),_0x2f194b[_0x5aea0a(0x154)](_0x3dd7cb,[0x0])[_0x5aea0a(0x14e)](_0x233020=>{});});}static async['getPSkey'](_0x231a8a,_0x325c27=!![]){const _0x83b220=_0x1e05b2,_0x31eef8={'GXHDd':function(_0x323a9a,_0x20d2f8){return _0x323a9a||_0x20d2f8;},'vYjdI':function(_0x107e26,_0x342d94){return _0x107e26>_0x342d94;},'Rcbmz':function(_0x47418e,_0x57ce31){return _0x47418e-_0x57ce31;},'Nljfi':function(_0x39db11,_0x17b213){return _0x39db11>_0x17b213;},'wPmrX':function(_0x18bcb1,_0x26e418,_0x3b31e1){return _0x18bcb1(_0x26e418,_0x3b31e1);},'fmtHE':'获取Pskey失败'};let _0x593246=[],_0x51bb6e={};for(let _0x551b58 in _0x231a8a){let _0x2c3d60=Credentials[_0x83b220(0x11e)]['get'](_0x231a8a[_0x551b58]),_0x923218=Credentials['PskeyTime'][_0x83b220(0x124)](_0x231a8a[_0x551b58]);_0x31eef8[_0x83b220(0x14b)](!_0x2c3d60,!_0x923218)||_0x31eef8[_0x83b220(0x147)](_0x31eef8[_0x83b220(0x148)](Date[_0x83b220(0x115)](),_0x923218),0x708*0x3e8)||!_0x325c27?_0x593246[_0x83b220(0x151)](_0x231a8a[_0x551b58]):_0x51bb6e[_0x231a8a[_0x551b58]]=_0x2c3d60;}let _0x561e90={'result':0x0,'errMsg':'','domainPskeyMap':new Map()};_0x31eef8[_0x83b220(0x11c)](_0x593246['length'],0x0)&&(_0x561e90=await napCatCore[_0x83b220(0x152)][_0x83b220(0x14c)]()[_0x83b220(0x121)](_0x593246,!![]));let _0x397a71=_0x561e90[_0x83b220(0x134)];for(let _0x5d6fc2 of _0x397a71[_0x83b220(0x13a)]()){Credentials[_0x83b220(0x11e)][_0x83b220(0x12e)](_0x5d6fc2[0x0],_0x5d6fc2[0x1]),Credentials[_0x83b220(0x136)][_0x83b220(0x12e)](_0x5d6fc2[0x0],Date[_0x83b220(0x115)]());}let _0x6abf2e=Object[_0x83b220(0x125)](Object[_0x83b220(0x155)](_0x397a71),_0x51bb6e);if(_0x561e90[_0x83b220(0x139)]===0x0)return _0x6abf2e;else _0x31eef8[_0x83b220(0x153)](logError,_0x31eef8[_0x83b220(0x118)],_0x561e90[_0x83b220(0x128)]);return{};}static async[_0x1e05b2(0x120)](){const _0x3f5741=_0x1e05b2,_0x4ee1cb=await napCatCore[_0x3f5741(0x152)][_0x3f5741(0x12d)]()['getRobotUinRange']({'justFetchMsgConfig':'1','type':0x1,'version':0x0,'aioKeywordVersion':0x0});return _0x4ee1cb?.['response']?.['robotUinRanges'];}static async[_0x1e05b2(0x13f)](_0x5628e4=!![]){const _0xf2c501=_0x1e05b2,_0x870672={'OljyA':function(_0x937450,_0x84be96){return _0x937450>_0x84be96;},'eObFA':function(_0x5bfc26,_0x4b15f5){return _0x5bfc26+_0x4b15f5;},'tVpPG':function(_0x5ca45e,_0x4e80fc){return _0x5ca45e+_0x4e80fc;},'FgWVX':'https://ssl.ptlogin2.qq.com/jump?ptlang=1033&clientuin=','YyaMN':_0xf2c501(0x114),'FBoLj':_0xf2c501(0x11d),'HnPMD':function(_0x5d5212,_0x67a8c7){return _0x5d5212(_0x67a8c7);},'fpIEt':_0xf2c501(0x116)};try{if(Credentials[_0xf2c501(0x13c)]==0x0||_0x870672[_0xf2c501(0x117)](Date[_0xf2c501(0x115)]()-Credentials['CreatTime'],0x3e8*0xe10)||!_0x5628e4){const _0x1cf6c1=await napCatCore[_0xf2c501(0x152)][_0xf2c501(0x13d)]()[_0xf2c501(0x13b)]('');if(_0x1cf6c1[_0xf2c501(0x139)]!==0x0)return'';const _0x2429d5=_0x1cf6c1['clientKey'],_0x45838c=_0x1cf6c1['keyIndex'],_0x1d7a96=_0x870672[_0xf2c501(0x137)](_0x870672[_0xf2c501(0x112)](_0x870672['tVpPG'](_0x870672['eObFA'](_0x870672[_0xf2c501(0x14f)]+selfInfo[_0xf2c501(0x113)],_0x870672['YyaMN']),_0x2429d5),_0x870672[_0xf2c501(0x122)]),_0x45838c),_0x1d9a38=await _0x870672[_0xf2c501(0x138)](HttpGetCookies,_0x1d7a96),_0x3abbc9=_0x1d9a38[_0xf2c501(0x124)](_0x870672['fpIEt']);if(!_0x3abbc9)return'';return Credentials['CreatTime']=Date['now'](),Credentials[_0xf2c501(0x127)]=_0x3abbc9,_0x3abbc9;}return Credentials[_0xf2c501(0x127)];}catch(_0x46818b){}return undefined;}}