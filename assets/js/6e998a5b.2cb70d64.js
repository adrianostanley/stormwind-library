"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3362],{3310:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var n=r(4848),a=r(8453);const t={},l="Classes",o={id:"resources/core/classes",title:"Classes",description:"Lua doesn't offer directly a class structure like every",source:"@site/docs/resources/core/classes.md",sourceDirName:"resources/core",slug:"/resources/core/classes",permalink:"/stormwind-library/docs/resources/core/classes",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/resources/core/classes.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Addon Properties",permalink:"/stormwind-library/docs/resources/core/addon-properties"},next:{title:"Configuration",permalink:"/stormwind-library/docs/resources/core/configuration"}},i={},c=[{value:"Class standards",id:"class-standards",level:2},{value:"Class recipe",id:"class-recipe",level:2},{value:"Models",id:"models",level:2}];function d(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"classes",children:"Classes"}),"\n",(0,n.jsx)(s.p,{children:"Lua doesn't offer directly a class structure like every\r\nOOP languages like PHP and Java. Because of that, there are\r\na couple of ways we can emulate classes and effectively be able to\r\ninstantiate objects that share logic, property, methods\r\nstructure, etc."}),"\n",(0,n.jsx)(s.p,{children:"The Stormwind Library proposes a few standards to achieve\r\nclass structures that are created with a couple of metatables\r\nsettings and some indentation."}),"\n",(0,n.jsx)(s.h2,{id:"class-standards",children:"Class standards"}),"\n",(0,n.jsx)(s.p,{children:"These are the standards used by Stormwind Library for a table to be\r\nconsidered a class:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Each class is defined in its own file, which is later merged to the\r\nsingle library file"}),"\n",(0,n.jsxs)(s.li,{children:["All lines below the first ",(0,n.jsx)(s.code,{children:"local"})," declaration are indented as\r\nthey belong to an opened structure"]}),"\n",(0,n.jsxs)(s.li,{children:["Classes have a constructor similar to PHP's, called ",(0,n.jsx)(s.code,{children:"__construct()"})]}),"\n",(0,n.jsxs)(s.li,{children:['Due to how the library is compiled, when this "class" is being read by\r\nthe Lua compiler, the ',(0,n.jsx)(s.code,{children:"self"})," calls are actually referencing the Library\r\ninstance, not the class being written -- ",(0,n.jsxs)(s.strong,{children:["only the ",(0,n.jsx)(s.code,{children:"self"}),'\'s inside\r\nmethods refer to the "class" itself']}),", and because of that, a ",(0,n.jsx)(s.code,{children:"self:addClass()"}),'\r\nis called at the top, so the library can store a reference for this "class",\r\ndeclared as ',(0,n.jsx)(s.code,{children:"local"}),". After that, the library can instantiate that class\r\nanywhere in the addon code.","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Read the ",(0,n.jsx)(s.a,{href:"factory",children:"factory documentation"})," for more information"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.admonition,{title:'"Private" constructors',type:"tip",children:[(0,n.jsxs)(s.p,{children:["Sometimes it's recommended not to expose classes structures for free\r\ninstantiation. When that happens, simply don't call ",(0,n.jsx)(s.code,{children:"self:addClass()"}),",\r\nso ",(0,n.jsx)(s.code,{children:"library:new()"})," won't have any effects on it, behaving as a private\r\nconstructor, when only the classes themselves can create their own\r\ninstances."]}),(0,n.jsxs)(s.p,{children:["As an example, the ",(0,n.jsx)(s.a,{href:"../models/raid-marker",children:"raid marker"})," model has a\r\nlimited number of possible instances. That class can't be instantiated\r\nby any addons and its instances are generated by the library during\r\nits initialization."]})]}),"\n",(0,n.jsx)(s.admonition,{title:"Abstract methods",type:"tip",children:(0,n.jsx)(s.p,{children:"Abstract methods can be mimicked by creating a method that throws an\r\nerror when called. This way, the developer is forced to implement that\r\nmethod in a child class."})}),"\n",(0,n.jsx)(s.h2,{id:"class-recipe",children:"Class recipe"}),"\n",(0,n.jsx)(s.p,{children:"Use the recipe below to create new classes."}),"\n",(0,n.jsx)(s.p,{children:"This is an example of a simple class with no properties."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-lua",children:"--[[--\r\nClass description.\r\n\r\n@classmod Module.ClassName\r\n]]\r\nlocal ClassName = {}\r\n    ClassName.__index = ClassName\r\n    ClassName.__ = self\r\n    self:addClass('ClassName', ClassName)\r\n\r\n    --[[--\r\n    ClassName constructor.\r\n    ]]\r\n    function ClassName.__construct()\r\n        local self = setmetatable({}, ClassName)\r\n\r\n        -- add properties here\r\n\r\n        return self\r\n    end\r\n-- end of ClassName\n"})}),"\n",(0,n.jsx)(s.p,{children:"And this is an example of the first test class version for the class above:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-lua",children:"TestClassName = BaseTestClass:new()\r\n    -- @covers ClassName:__construct()\r\n    function TestClassName:testConstruct()\r\n        local instance = __:new('ClassName', --[[ args here ]])\r\n\r\n        lu.assertNotNil(instance)\r\n    end\r\n-- end of TestClassName\n"})}),"\n",(0,n.jsx)(s.h2,{id:"models",children:"Models"}),"\n",(0,n.jsxs)(s.p,{children:["Please, refer to the ",(0,n.jsx)(s.a,{href:"../models/overview",children:"models documentation"})," for more\r\ninformation on how to create models following the Stormwind Library standards."]})]})}function h(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,s,r)=>{r.d(s,{R:()=>l,x:()=>o});var n=r(6540);const a={},t=n.createContext(a);function l(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);