import{d as r,t as n,o as l,x as d,e,f as m,U as _,s as i}from"./index--bHfDvFW.js";import{_ as u}from"./chat-model-info.vue_vue_type_script_setup_true_lang-YNtBLoUA.js";/* empty css             *//* empty css                     */const p="/image/back.png",h={class:"chat characters-detail scroll-bar"},k=e("img",{class:"icon",src:p},null,-1),f=e("span",null,"Back",-1),b=[k,f],y=r({__name:"characters-detail",setup(B){const o=_(),s=n(()=>o.query.model?JSON.parse(o.query.model):{}),t=i(),c=()=>{t.back()};return(a,g)=>(l(),d("div",h,[e("div",{class:"back",onClick:c},b),m(u,{model:s.value},null,8,["model"])]))}});export{y as default};