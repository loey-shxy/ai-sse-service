/* empty css             *//* empty css                     */import{d as w,t as m,a as C,o,x as a,e,f as u,b as p,A as l,n as B,F as v,z as h,y as E,X as I,c as L,C as A,Q as N,Y as x}from"./index--bHfDvFW.js";const O={class:"model-info scroll-bar"},R={class:"model-info__photo-list"},U={class:"model-info__detail"},P={class:"model-info__detail-instruc"},S={class:"model-info__detail-name"},T={key:0,class:"model-personal-attribute"},V=e("div",{class:"title"},"Personality Attributes:",-1),z={class:"attribute-wrap"},F={class:"attribute-item__icon"},Y=["src"],D={class:"attribute-item__value"},H={class:"label"},Q={class:"value"},J=w({__name:"chat-model-info",props:{model:{default:()=>({})}},setup(f){const i=f,n=m(()=>A()),r=m(()=>{var s;return(s=i.model)!=null&&s.imgs?[i.model.imgs.main,...i.model.imgs.pics]:[]}),b=C([{label:"PERSONALITY",key:"personality",icon:new URL("/image/personality.png",import.meta.url).href},{label:"OCCUPATION",key:"occupation",icon:new URL("/image/occupation.png",import.meta.url).href},{label:"HOBBIES",key:"hobbies",icon:new URL("/image/hobbies.png",import.meta.url).href}]);return(s,X)=>{var c,_;const g=N,y=x,k=I;return o(),a("div",O,[e("div",R,[u(k,{autoplay:!1,arrow:r.value.length>1?"always":"never"},{default:p(()=>[(o(!0),a(v,null,h(r.value,t=>(o(),L(y,{key:t.preview},{default:p(()=>[u(g,{src:t.preview,fit:"cover"},null,8,["src"])]),_:2},1024))),128))]),_:1},8,["arrow"])]),e("div",U,[e("div",P,[e("div",S,l((c=s.model)==null?void 0:c.name),1),e("div",{class:B(["model-info__detail-instruction text-line-clamp",n.value?"text-line-clamp__3":"text-line-clamp__6"])},l((_=s.model)==null?void 0:_.desc),3)]),n.value?(o(),a("div",T,[V,e("div",z,[(o(!0),a(v,null,h(b,t=>{var d;return o(),a("div",{key:t.label,class:"attribute-item"},[e("div",F,[e("img",{src:t.icon,alt:""},null,8,Y)]),e("div",D,[e("div",H,l(t.label),1),e("div",Q,l((d=s.model)==null?void 0:d[t.key]),1)])])}),128))])])):E("",!0)])])}}});export{J as _};