"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8617],{7941:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=n(4848),s=n(8453);const r={},i="Container",o={id:"resources/models/container",title:"Container",description:"The Container model represents bags, bank slots, the player's backpack, and",source:"@site/docs/resources/models/container.md",sourceDirName:"resources/models",slug:"/resources/models/container",permalink:"/docs/resources/models/container",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/resources/models/container.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/resources/models/overview"},next:{title:"Inventory",permalink:"/docs/resources/models/inventory"}},c={},d=[{value:"Getting an updated container list of items",id:"getting-an-updated-container-list-of-items",level:2},{value:"The outdated flag",id:"the-outdated-flag",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"container",children:"Container"})}),"\n",(0,a.jsx)(t.p,{children:"The Container model represents bags, bank slots, the player's backpack, and\r\nany other container capable of holding items."}),"\n",(0,a.jsxs)(t.p,{children:["For a more detailed explanation of the Container model and its available\r\nmethods and properties, please refer to the library\r\n",(0,a.jsx)(t.a,{href:"pathname:///lua-docs/classes/Models.Container.html",children:"technical documentation"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"getting-an-updated-container-list-of-items",children:"Getting an updated container list of items"}),"\n",(0,a.jsx)(t.p,{children:"When instantiated, the container instance has no items stored yet."}),"\n",(0,a.jsxs)(t.p,{children:["Given that items are cached internally, when calling ",(0,a.jsx)(t.code,{children:"getItems()"})," in a brand\r\nnew instance will result in a container scan to populate the list."]}),"\n",(0,a.jsxs)(t.p,{children:["After that, the ",(0,a.jsx)(t.code,{children:"refresh()"})," method should be called."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-lua",children:"local backpack = library\r\n    :new('Container')\r\n    :setSlot(Enum.BagIndex.Backpack)\r\n\r\nlocal itemsInBackpack = backpack:getItems()\r\n\r\n-- later in another part of the code if the backpack instance is reused\r\nlocal updatedItemsInBackpack = backpack:refresh():getItems()\n"})}),"\n",(0,a.jsxs)(t.admonition,{title:"Getting the available slot constants",type:"tip",children:[(0,a.jsxs)(t.p,{children:["A list of slots can be found with ",(0,a.jsx)(t.code,{children:"/dump Enum.BagIndex"})," in game."]}),(0,a.jsx)(t.p,{children:"At the time of writing (June 2024), the command above returns the same results\r\nfor Classic Era, Cataclysm Classic and Dragonflight."})]}),"\n",(0,a.jsx)(t.h2,{id:"the-outdated-flag",children:"The outdated flag"}),"\n",(0,a.jsxs)(t.p,{children:["A flag called ",(0,a.jsx)(t.code,{children:"outdated"})," was introduced in the library version 1.8.0 to set a\r\nstate in a container instance that indicates that the items list is outdated."]}),"\n",(0,a.jsxs)(t.p,{children:["Along with this flag, the ",(0,a.jsx)(t.code,{children:"getItems()"})," method was updated to also look for the\r\n",(0,a.jsx)(t.code,{children:"outdated"})," flag and refresh the items list if it's true, along with the ",(0,a.jsx)(t.code,{children:"nil"}),"\r\ncheck that was already in place."]}),"\n",(0,a.jsxs)(t.p,{children:["Calling ",(0,a.jsx)(t.code,{children:"flagOutdated()"})," in a container instance will tell its methods to\r\nrefresh the items list ",(0,a.jsx)(t.strong,{children:"when needed."})," This is important to avoid having to\r\nmap the items multiple times when events like ",(0,a.jsx)(t.code,{children:"BAG_UPDATE"})," are triggered. With\r\nthe flag, regardless of the number of events letting the container instance\r\nknow that the items list is outdated, it will only refresh when they are\r\nrequested."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var a=n(6540);const s={},r=a.createContext(s);function i(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);