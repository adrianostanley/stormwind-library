"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9445],{3383:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=t(4848),i=t(8453);const s={},o="Environment",a={id:"resources/core/environment",title:"Environment",description:"Environment is a library resource used to identify the environment where the",source:"@site/docs/resources/core/environment.md",sourceDirName:"resources/core",slug:"/resources/core/environment",permalink:"/stormwind-library/docs/resources/core/environment",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/resources/core/environment.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/stormwind-library/docs/resources/core/configuration"},next:{title:"Factory",permalink:"/stormwind-library/docs/resources/core/factory"}},c={},l=[{value:"Usage",id:"usage",level:2},{value:"Available flavors",id:"available-flavors",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"environment",children:"Environment"}),"\n",(0,r.jsx)(n.p,{children:"Environment is a library resource used to identify the environment where the\r\naddon is running. By environment, it can be a specific game client version or\r\neven the unit test suite if the addon is being covered by tests."}),"\n",(0,r.jsx)(n.p,{children:"It can serve for many purposes, from cosmetic changes to the addon interface\r\nto the implementations based on available API functions that can be different\r\nbetween game versions."}),"\n",(0,r.jsxs)(n.p,{children:["Once initialized, the Stormwind Library instance will have the environment\r\ninformation available through the ",(0,r.jsx)(n.code,{children:"environment"})," property."]}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(n.p,{children:["Introduced in the Stormwind Library version 1.2.0, the Environment class is\r\nnot instantiable by the ",(0,r.jsx)(n.a,{href:"/stormwind-library/docs/resources/core/factory",children:"factory"})," due to limitations regarding\r\nthe lifecycle and order of initializations, considering that the factory\r\nitself depends on the environment."]}),"\n",(0,r.jsxs)(n.p,{children:["Instead, its unique instance can\r\nbe accessed through the ",(0,r.jsx)(n.code,{children:"environment"})," property of the library."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:"local environment = library.environment\r\n\r\nif environment:getClientFlavor() == environment.constants.CLIENT_CLASSIC then\r\n  -- do something specific to the Classic client\r\nelseif -- ... other client flavors\n"})}),"\n",(0,r.jsx)(n.h3,{id:"available-flavors",children:"Available flavors"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Environment.constants.CLIENT_CLASSIC"}),': The current World of Warcraft\r\nClassic client, which includes TBC, WotLK, Cataclysm, etc. It\'s important to\r\nmention that Blizzard calls "Classic" the current classic progression that\r\nstarted in 2019 with Vanilla and then moved to TBC, WotLK, and so on.']}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Environment.constants.CLIENT_CLASSIC_ERA"}),": Classic Season of Discovery,\r\nHardcore, and any other clients that have no expansions."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Environment.constants.CLIENT_RETAIL"}),": The current World of Warcraft Retail\r\nclient, which is the most recent expansion."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"Environment.constants.TEST_SUITE"}),": The unit test suite, that executes\r\nlocally without any World of Warcraft client. This is important sometimes to\r\navoid calling API functions that are not meant to be called outside the game\r\nand vice versa."]}),"\n"]}),"\n",(0,r.jsxs)(n.admonition,{title:"Note about classic flavors",type:"warning",children:[(0,r.jsx)(n.p,{children:"When this class was designed, the Classic progression was close to the\r\nCataclysm release, which made sense to separate it from the Classic Era\r\nflavor."}),(0,r.jsx)(n.p,{children:"In case Blizzard changes the progression steps and creates something like a\r\nTBC Era, WoTLK Era, etc., the library may be updated to reflect these\r\nchanges and introduce new constants."}),(0,r.jsx)(n.p,{children:"Keep an eye on the library updates to check if new constants were added."})]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var r=t(6540);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);