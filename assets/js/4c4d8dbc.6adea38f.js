"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4625],{5924:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(4848),s=r(8453);const a={},o="ItemFactory",i={id:"resources/factories/item-factory",title:"ItemFactory",description:"Creates item instances from multiple sources.",source:"@site/docs/resources/factories/item-factory.md",sourceDirName:"resources/factories",slug:"/resources/factories/item-factory",permalink:"/docs/resources/factories/item-factory",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/resources/factories/item-factory.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Factories",permalink:"/docs/category/factories"},next:{title:"Models",permalink:"/docs/category/models"}},c={},l=[{value:"Usage",id:"usage",level:2}];function m(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"itemfactory",children:"ItemFactory"})}),"\n",(0,n.jsx)(t.p,{children:"Creates item instances from multiple sources."}),"\n",(0,n.jsxs)(t.p,{children:["This factory is responsible for being able to instantiate\r\n",(0,n.jsx)(t.a,{href:"../models/item",children:"item"})," objects from different sources, such as item links,\r\nitem ids, item names, complex strings containing item information and any\r\nother source that's available in the game that can be used to identify an item."]}),"\n",(0,n.jsxs)(t.p,{children:["For a complete list of methods available in this factory, please refer to the\r\n",(0,n.jsx)(t.a,{href:"pathname:///lua-docs/classes/Factories.ItemFactory.html",children:"LuaDocs ItemFactory page"})]}),"\n",(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t.p,{children:"In game, it's possible to run a slash command to get item information from any\r\nitem in a bag or in the backpack itself."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"/dump C_Container.GetContainerItemInfo(0, 1)\n"})}),"\n",(0,n.jsx)(t.p,{children:"This command will return a table with a few item properties and this table can\r\nbe passed to the factory to create an item instance."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-lua",children:"local info = C_Container.GetContainerItemInfo(0, 1)\r\nlocal item = library.itemFactory:createFromContainerItemInfo(info)\n"})})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>i});var n=r(6540);const s={},a=n.createContext(s);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);