/* empty css             *//* empty css               *//* empty css              */import{A as d,b as u}from"./audioPlayer-YNfwgrAq.js";import{d as m,r as _,o as f,x as y,e as r,f as c,b as v,F as b,k as g,p as x,g as A}from"./index--bHfDvFW.js";const B=r("div",{class:"container"},[r("div",{class:"mp3"})],-1),V={class:"container"},z=m({__name:"a-voice",setup(k){const a=_("Hello from a realistic voice."),i=async()=>{var o;const n=new d,e=(o=(await fetch(`playHtApi/say-prompt?prompt=${a.value}`)).body)==null?void 0:o.getReader();for(;e;){const{done:s,value:l}=await e.read();if(s)break;console.log(l);const p=u(l);n.receiveAudioData(p)}};return(n,t)=>{const e=g,o=x;return f(),y(b,null,[B,r("div",V,[c(e,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=s=>a.value=s),size:"large"},null,8,["modelValue"])]),c(o,{class:"voice-button",type:"primary",size:"large",onClick:i},{default:v(()=>[A("Send")]),_:1})],64)}}});export{z as default};
