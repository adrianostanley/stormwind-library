"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3442],{1710:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var s=r(4848),a=r(8453);const i={},t="Callback Loader",l={id:"resources/core/callback-loader",title:"Callback Loader",description:"As described in the build section, the library",source:"@site/docs/resources/core/callback-loader.md",sourceDirName:"resources/core",slug:"/resources/core/callback-loader",permalink:"/docs/resources/core/callback-loader",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/resources/core/callback-loader.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Addon Properties",permalink:"/docs/resources/core/addon-properties"},next:{title:"Classes",permalink:"/docs/resources/core/classes"}},o={},c=[{value:"Usage",id:"usage",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"callback-loader",children:"Callback Loader"})}),"\n",(0,s.jsxs)(n.p,{children:["As described in the ",(0,s.jsx)(n.a,{href:"../../library-structure/build",children:"build section"}),", the library\r\nLua files - spread across multiple directories - are merged into a single Lua\r\nfile."]}),"\n",(0,s.jsxs)(n.p,{children:["This approach eases its distribution but introduces a problem: the importance\r\nof the order in which the files are merged. For instance, if a file ",(0,s.jsx)(n.code,{children:"a.lua"}),"\r\nneeds to call a function defined in ",(0,s.jsx)(n.code,{children:"b.lua"}),", ",(0,s.jsx)(n.code,{children:"b.lua"})," must be merged before, but\r\nif the opposite is also true, a cyclic dependency is created and it's\r\nimpossible to handle. Of course, cyclic dependencies are a sign of bad design,\r\nhowever, in specific cases like the calls between support functions, it's\r\nacceptable."]}),"\n",(0,s.jsxs)(n.p,{children:["Most issues would be observed between model classes. Imagine relationships\r\nbetween classes that reference each other, like a ",(0,s.jsx)(n.code,{children:"Player"})," class that owns an\r\n",(0,s.jsx)(n.code,{children:"Item"})," that is also used by a ",(0,s.jsx)(n.code,{children:"GuildBank"})," class that references a ",(0,s.jsx)(n.code,{children:"Guild"})," that\r\nhas a list of ",(0,s.jsx)(n.code,{children:"Player"}),"s. We don't have a direct cyclic dependency, but an\r\nindirect one."]}),"\n",(0,s.jsxs)(n.p,{children:["To solve problems like this, the library version 1.9.0 introduced the callback\r\nloader mechanism. This mechanism is similar to the jQuery's\r\n",(0,s.jsx)(n.code,{children:"$(document).ready()"})," function and will create a callback queue to be executed\r\nafter all files are merged."]}),"\n",(0,s.jsx)(n.p,{children:"With this queue, all Lua files will be focused on defining their class and\r\nfunction structures, but when it comes to execute code, it will be done later\r\nwhen the library is fully loaded."}),"\n",(0,s.jsxs)(n.admonition,{title:"This is available only for the library itself",type:"warning",children:[(0,s.jsx)(n.p,{children:"Please, note that callback loader is available during the library loading\r\nprocess and it's not available for addons."}),(0,s.jsxs)(n.p,{children:["When the library is instantiated, the callback queue and invocation mechanism\r\nare removed right after their execution, making this an ",(0,s.jsx)(n.strong,{children:"internal"})," system to\r\nimprove the library loading process."]})]}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.p,{children:"As a reminder, the callback loader is available only for the library itself.\r\nThat said, the instructions below must be considered when developing library\r\nfiles, not addons."}),"\n",(0,s.jsxs)(n.p,{children:["Consider the two files below. ",(0,s.jsx)(n.strong,{children:"They're not part of the library"}),", but just a\r\nvery simple example to illustrate the callback loader mechanism."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Inventory.lua"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"function playerHasItem(itemId)\r\n    -- logic to check if the player has an item\r\n    return true\r\nend\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Player.lua"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"function playerIsMissingHearthstone()\r\n    return not playerHasItem(6948)\r\nend\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Now, during the ",(0,s.jsx)(n.strong,{children:"library loading process"}),", some code that's not inside any\r\nclass or function scope does:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"-- on initialization\r\nif playerIsMissingHearthstone() then\r\n    print('Remember to talk to an innkeeper to get a hearthstone!')\r\nend\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The code above will raise errors if the ",(0,s.jsx)(n.code,{children:"PlayerCheckUp.lua"})," file is referenced\r\nbefore ",(0,s.jsx)(n.code,{children:"Inventory.lua"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"To solve such issues, the callback loader mechanism can be used. The code below\r\ncan be placed at the end of any file above and will be executed after all\r\nlibrary resources are loaded."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"-- on initialization\r\nlibrary:onLoad(function()\r\n    if playerIsMissingHearthstone() then\r\n        print('Remember to talk to an innkeeper to get a hearthstone!')\r\n    end\r\nend)\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>l});var s=r(6540);const a={},i=s.createContext(a);function t(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);