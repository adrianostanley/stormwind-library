"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1399],{301:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=r(4848),a=r(8453);const s={},o="Realm",i={id:"resources/models/realm",title:"Realm",description:"The Realm class is a model that maps realm, or server, information.",source:"@site/docs/resources/models/realm.md",sourceDirName:"resources/models",slug:"/resources/models/realm",permalink:"/docs/resources/models/realm",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/resources/models/realm.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Raid Marker",permalink:"/docs/resources/models/raid-marker"},next:{title:"Support",permalink:"/docs/category/support"}},l={},c=[{value:"Getting the current realm instance",id:"getting-the-current-realm-instance",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"realm",children:"Realm"})}),"\n",(0,n.jsx)(t.p,{children:"The Realm class is a model that maps realm, or server, information."}),"\n",(0,n.jsx)(t.p,{children:"Just like any other model, it's used to standardize the way addons interact\r\nwith realm data."}),"\n",(0,n.jsxs)(t.p,{children:["Its first version, introduced in the library version 1.2.0 includes only the\r\n",(0,n.jsx)(t.code,{children:"name"})," property, but this model will grow over time as new expansions are\r\nreleased and new features are implemented in the library."]}),"\n",(0,n.jsxs)(t.p,{children:["For a more detailed explanation of the Realm model and its available methods\r\nand properties, please refer to the library\r\n",(0,n.jsx)(t.a,{href:"pathname:///lua-docs/classes/Models.Realm.html",children:"technical documentation"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"getting-the-current-realm-instance",children:"Getting the current realm instance"}),"\n",(0,n.jsx)(t.p,{children:'The current realm instance can be retrieved using a "static" method of the\r\nRealm class, which also takes care of creating the instance and setting the\r\nrealm name using the World of Warcraft API.'}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lua",children:"local realm = library:getClass('Realm').getCurrentRealm()\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Note that the example above is not not calling ",(0,n.jsx)(t.code,{children:":getCurr..."})," but\r\n",(0,n.jsx)(t.code,{children:".getCurr..."})," because this method is associated with the class itself, not\r\nwith an instance of the class."]})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>i});var n=r(6540);const a={},s=n.createContext(a);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);