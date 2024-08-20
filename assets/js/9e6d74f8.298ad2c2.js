"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6292],{5022:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var r=t(4848),n=t(8453);const s={},c="Target",i={id:"resources/facades/target",title:"Target",description:"The target facade maps all the information that can be retrieved by the",source:"@site/docs/resources/facades/target.md",sourceDirName:"resources/facades",slug:"/resources/facades/target",permalink:"/docs/resources/facades/target",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/resources/facades/target.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"PetJournal",permalink:"/docs/resources/facades/pet-journal"},next:{title:"Tooltip",permalink:"/docs/resources/facades/tooltip"}},o={},d=[{value:"How to get the target facade instance",id:"how-to-get-the-target-facade-instance",level:2},{value:"Marking a target with a raid marker",id:"marking-a-target-with-a-raid-marker",level:2}];function l(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.header,{children:(0,r.jsx)(a.h1,{id:"target",children:"Target"})}),"\n",(0,r.jsx)(a.p,{children:"The target facade maps all the information that can be retrieved by the\r\nWorld of Warcraft API target related methods."}),"\n",(0,r.jsx)(a.p,{children:"This class can also be used to access the target with many other purposes,\r\nlike setting the target icon, etc."}),"\n",(0,r.jsx)(a.h2,{id:"how-to-get-the-target-facade-instance",children:"How to get the target facade instance"}),"\n",(0,r.jsxs)(a.p,{children:["The target facade instance is initialized with the library and can be\r\neasily obtained from the ",(0,r.jsx)(a.code,{children:"target"})," property."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-lua",children:"local targetFacade = library.target\n"})}),"\n",(0,r.jsx)(a.h2,{id:"marking-a-target-with-a-raid-marker",children:"Marking a target with a raid marker"}),"\n",(0,r.jsxs)(a.p,{children:["Target has a method called ",(0,r.jsx)(a.code,{children:"mark()"})," which accepts a ",(0,r.jsx)(a.a,{href:"../models/raid-marker",children:"raid marker"}),"\r\nparameter and then marks the current target (if any)."]}),"\n",(0,r.jsxs)(a.p,{children:["This is a facade for ",(0,r.jsx)(a.code,{children:"SetRaidTarget()"}),"."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-lua",children:"local skullMarker = library.raidMarkers.skull\r\n\r\nlibrary.target:mark(skullMarker)\n"})})]})}function h(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,a,t)=>{t.d(a,{R:()=>c,x:()=>i});var r=t(6540);const n={},s=r.createContext(n);function c(e){const a=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),r.createElement(s.Provider,{value:a},e.children)}}}]);