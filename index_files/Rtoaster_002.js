/**
 * @(#)Rtoaster.Popup.js
 * Copyright (c) 2016-2019 BrainPad, Inc. All right reserved.
 * @version 3.1.0
 */
if(typeof Rtoaster!=="undefined"&&typeof Rtoaster.Popup==="undefined"){Rtoaster.Popup={closeIconSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAMAAABhEH5lAAAAaVBMVEVMaXEpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkqKiovLy8rKystLSwrLCsuLi4xMTHExMQ3ODhcXFwpKSnm5uY7Oztzc3J1dHWLi4utra1OT09TUlLrlZEmAAAAEHRSTlMAP/DcmvpGKPPHQ93Yor8pA03rgQAAALxJREFUeF49j1eShDAMBTVgA2bCKtkmTbz/IVdod+iSquSu548HzhjaGNswwpf+plQM0lsPzmnI5Z88nDzTUDmgZs8lzxy5BDByofKZt1K2+WOORwhCRI+1bltdH3ZKgDaTu9fLDeUWIrl7ruvTD4owZMeVE+EiIlnu+8e75CxyhiuLmKnTVM2J8BU6ZNX3PLFO81tZsQNIzKw2tgYmL4TIbIu7aX7+auOB1Xb6tOCCNkvq4UsXznG4hM4fv0nGE4x2LSp9AAAAAElFTkSuQmCC",closeCallback:void 0};!function(S,W){var A="createElement",B="absolute",C=S.Cookie,D=W.document,E="scroll",F="display",G="style",H="hasOwnProperty",I="_rt.popup.cnt.",J="position",K="offset",L=K+"Width",M="px",N="resize",O="object",P=S.Popup,Q="opacity",R="block",T={width:"auto",height:"auto",opacity:1,border:"1px solid #d9d9d9","border-radius":"5px","background-color":"#fff","box-shadow":"0 6px 15px 0 rgba(0,0,0,0.4)",padding:"15px 20px","z-index":1000},U="top",V="getElementById",X="none",Y="appendChild",Z="div",z=function(a,b,c,d,e){((d=a[G])[e="setProperty"])?d[e](b,""+c):d[b]=c},_A=function(a,b){(b=S.observe)(a,E),b(a,N)},_B=function(a,b){W[b="removeEventListener"](N,a);W[b](E,a)},_C=function(a){return"rt_popup_overlay_"+a},_D=function(a){var b={},c=a[L],d=K+"Height";if(c!==0)b.w=c,b.h=a[d];else{var e="visibility",f=a[G],g=f[J],h=f[e],i=f[F];z(a,J,B);z(a,e,"hidden");z(a,F,R);b.w=a[L];b.h=a[d];z(a,J,g);z(a,e,h);z(a,F,i)}return b},_E=function(a,b){try{var c=b.getBoundingClientRect(),d=(a[L]-a.clientWidth)/2;z(b,U,(c.bottom-c.top)/-2-d+M);z(b,"right",(c.right-c.left)/-2-d+M)}catch(_){}},_F=function(a){return parseInt(C.get(I+a)||0)},_G=function(a){return typeof a===O?a:{id:a}},_H=/*@cc_on@_jscript_version>9&&@*/W["addEventListener"],_I=function(a,b){if(_H&&(a=_G(a))){var c=a.id,d=D[V](c),e="parentNode",f="removeChild",g;if(b)C.remove("_rt.sid");if(d){d[e][f](d);if(g=D[V](a.oid||_C(c)))g[e][f](g);if(g=P.closeCallback)try{g(c)}catch(_){(e=W.console)&&(f=e.error)&&f("[close->"+c+"] "+_)}}}},_J=function(a,b){return function(){_I({id:a.id,oid:b.oid})}};P.show=function(a){var b=D[V](a.id),c={overlay:0,transit:Q,place:"center",offset:10,oid:_C(a.id),speed:.2,delay:20,ctrl:0},d;for(d in T)T[H](d)&&(c[d]=T[d]);for(d in a)a[H](d)&&(c[d]=a[d]);for(d in T)T[H](d)&&z(b,d,c[d]);z(b,J,a="fixed");var e=c.size=_D(b),f="place",g="movingStyle",h="margin-",i="left",j="50%",k,l;if(d=/^(top|bottom)(left|right)$/.exec(c[f]))z(b,d[1],c[K]+M),z(b,c[g]=d[2],c[K]+M);else switch(c[g]=c[f]){case"left":case"right":z(b,c[f],c[K]+M);z(b,U,j);z(b,h+U,-0.5*e.h+M);break;case"top":case"bottom":z(b,c[f],c[K]+M);z(b,i,j);z(b,h+i,-0.5*e.w+M);break;default:z(b,U,j);z(b,i,j);z(b,h+U,-0.5*e.h+M);z(b,h+i,-0.5*e.w+M)}if(f=P.closeIconSrc){d=D[A]("img");d.onload=d.onreadystatechange=function(){_E(b,d)};d.src=f;b[Y](d);z(d,F,R);z(d,J,B);z(d,"cursor","pointer");d.onmousedown=d.onkeydown=d.ontouchstart=function(x){x.stopPropagation()};d.onclick=_J(b,c);S.observe(function(){_E(b,d)},N)}f="speed";switch(c.transit){case"slidein":h="currentPlace";switch(c[g]){case"left":case"right":c[h]=-1.5*e.w;break;case"top":case"bottom":c[h]=-1.5*e.h;break;default:return}z(b,c[g],c[h]+M);k=function(){switch(c[g]){case"left":case"right":case"top":case"bottom":c[h]*=1-c[f];z(b,c[g],(c[h]+c[K])+M);return Math.abs(c[h])>2}};l=function(){switch(c[g]){case"left":case"right":case"top":case"bottom":z(b,c[g],c[K]+M)}};break;default:z(b,Q,0);k=function(x){z(b,Q,(x=parseFloat)(b[G][Q])+c[f]);return x(b[G][Q])<c[Q]-c[f]};l=function(){z(b,Q,c[Q])}}e="closeScrollPercent",j="closeSelector";var m="closeDelay",n="innerHeight",o="scrollPercent",p="selector",q=setTimeout,r=function(x,y){return x&&((y=(!(y=D.compatMode)||y==="BackCompat"?D.body:D.documentElement).scrollHeight-W[n])<=0||W.pageYOffset/y*100>=x)},s=function(x,y){try{return x&&(y=D.querySelector(x).getBoundingClientRect().top)>=0&&y<W[n]}catch(_){}},t=function(){q(_J(b,c),c[m])},u=function(){if(r(c[e])||s(c[j]))_B(u),t()},v=function(){k()?q(v,20):(l(),c[e]||c[j]?(_A(u),u()):c[m]&&t(),c.ctrl||C.set({key:I+c.id,value:_F(c.id)+1,path:"/",expires:new Date(new Date().getTime()+31622400000).toUTCString()}));d&&_E(b,d)},w=function(x){if(x=c[o]?r(c[o])?2:0:c[p]?s(c[p])?2:0:1)x>1&&_B(w),x="z-index",q(function(y){z(b,F,R);c.overlay&&(y=D[A](Z),y.id=c.oid,D.body[Y](y),z(y,x,c[x]-10),z(y,J,a),z(y,U,0),z(y,i,0),z(y,"width","100%"),z(y,"height","150%"),z(y,"background-color","#666"),z(y,Q,"0.5"),y.onclick=_J(b,c));v()},c.delay)};z(b,F,X);(c[o]||c[p])&&_A(w);w()};P.register=function(a){if(_H&&(a=_G(a))){a.limit||(a.limit=1);if(_F(a.id)<a.limit){var b=D.body,c=D[V](a.id);if(b&&!c)c=D[A](Z),c.id=a.id,z(c,F,X),b[Y](c);S.listen(a.id,function(d,e,f){if(typeof e===O){for(f in e)e[H](f)&&(a[f]=e[f]);a.ctrl=1;if(e.frame)return}P.show(a)})}}};P.close=_I}(Rtoaster,window)}