import{j as o}from"./jsx-runtime-z8MfsBtr.js";import{c as a,g as l}from"./polished.esm-CYzU22sc.js";import"./index-C9rmetsa.js";function c(){return Object.entries(a).map(([e,s])=>o.jsx("div",{style:{backgroundColor:s,padding:"2rem"},children:o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontFamily:"monorepo",color:l(s,"#FFF")<3.5?"#000":"#fff"},children:[o.jsxs("strong",{children:["$",e]}),o.jsx("span",{children:s})]})},e))}const u={title:"Tokens/Colors",component:c},r=()=>{const e=window.getComputedStyle(document.body).backgroundColor,s=l(e,"#FFF")<3.5?"#000":"#FFF";return o.jsxs(o.Fragment,{children:[o.jsxs("div",{style:{color:s},children:[o.jsx("h1",{children:"Colors"}),o.jsx("p",{children:"Essas são as cores utilizadas no Ignite UI"})]}),o.jsx(c,{})]})};r.__docgenInfo={description:"",methods:[],displayName:"Colors"};var n,t,d;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  const backgroundColor = window.getComputedStyle(document.body).backgroundColor;
  const textColor = getContrast(backgroundColor, '#FFF') < 3.5 ? '#000' : '#FFF';
  return <>
      <div style={{
      color: textColor
    }}>
        <h1>Colors</h1>
        <p>Essas são as cores utilizadas no Ignite UI</p>
      </div>
      <ColorsGrid />
    </>;
}`,...(d=(t=r.parameters)==null?void 0:t.docs)==null?void 0:d.source}}};const C=["Colors"];export{r as Colors,C as __namedExportsOrder,u as default};
