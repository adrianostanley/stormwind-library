"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[4437],{7176:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var i=r(4848),s=r(8453);const t={},l="Addon Properties",o={id:"resources/core/addon-properties",title:"Addon Properties",description:"When the library is initialized, addons can pass its properties to",source:"@site/docs/resources/core/addon-properties.md",sourceDirName:"resources/core",slug:"/resources/core/addon-properties",permalink:"/docs/resources/core/addon-properties",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/resources/core/addon-properties.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Core",permalink:"/docs/category/core"},next:{title:"Callback Loader",permalink:"/docs/resources/core/callback-loader"}},a={},d=[{value:"Available properties",id:"available-properties",level:2},{value:"colors",id:"colors",level:3},{value:"command",id:"command",level:3},{value:"data",id:"data",level:3},{value:"inventory",id:"inventory",level:3},{value:"name",id:"name",level:3},{value:"version",id:"version",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"addon-properties",children:"Addon Properties"}),"\n",(0,i.jsx)(n.p,{children:"When the library is initialized, addons can pass its properties to\r\nimprove how it handles its resources."}),"\n",(0,i.jsxs)(n.p,{children:["In the example below, ",(0,i.jsx)(n.code,{children:"MyAddon"})," is the addon main table and ",(0,i.jsx)(n.code,{children:"__"})," is\r\nthe library reference. Please, remember that the library class must\r\ncarry its version to avoid conflicts, but for the sake of simplicity,\r\nit's simply called ",(0,i.jsx)(n.code,{children:"StormwindLibrary"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"MyAddon.__ = StormwindLibrary.new({\r\n  command = 'myAddon',\r\n  name    = 'My Custom Addon',\r\n})\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Once initialized, these properties can be accessed in the library's\r\nproperty called ",(0,i.jsx)(n.code,{children:"addon"}),'. The code below will print "My Custom Addon".']}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"print(MyAddon.__.addon.name)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"available-properties",children:"Available properties"}),"\n",(0,i.jsxs)(n.p,{children:["The following sections list the available properties and their effect\r\non the library. See the first example in this article on how to pass\r\nthe addon properties and each subtitle below represents a table index,\r\nso when showing ",(0,i.jsx)(n.code,{children:"command"})," for example, it means passing a table with\r\n",(0,i.jsx)(n.code,{children:"{command = 'myAddon'}"})," when calling ",(0,i.jsx)(n.code,{children:"new()"})," for a new library instance."]}),"\n",(0,i.jsxs)(n.p,{children:["Some parameters are ",(0,i.jsx)(n.strong,{children:"optional"})," and some are ",(0,i.jsx)(n.strong,{children:"required"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"colors",children:"colors"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"A table containing the primary and the secondary colors"}),"\n",(0,i.jsx)(n.li,{children:"Colors must be provided as hexadecimal strings"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"-- ...\r\ncolors = {\r\n  primary = 'FFFFFF',\r\n  secondary = '000000',\r\n}\r\n-- ...\n"})}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Optional"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Default:"})," ",(0,i.jsx)(n.code,{children:"{}"}),", indicating there are not default colors"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Effect:"})," Most output messages will use the ",(0,i.jsx)(n.strong,{children:"primary"})," color to\r\nhighlight the prefix; the ",(0,i.jsx)(n.strong,{children:"secondary"})," color may also be used to\r\nhighlight secondary information."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"command",children:"command"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type:"})," string"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Optional"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Default:"})," ",(0,i.jsx)(n.code,{children:"nil"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Effect:"})," When initialized, the library will register a command\r\nthat can be executed in game. Please, read the\r\n",(0,i.jsx)(n.a,{href:"../commands/overview",children:"commands documentation"})," for reference."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"data",children:"data"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type:"})," string, that must be informed as a string, not the table variable\r\nitself, given that the library will access it with ",(0,i.jsx)(n.code,{children:"_G"})]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Optional"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Default:"})," ",(0,i.jsx)(n.code,{children:"nil"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Effect:"})," The library will automatically create a ",(0,i.jsx)(n.a,{href:"configuration",children:"configuration"}),"\r\ninstance and enable the ",(0,i.jsx)(n.code,{children:"config(...)"})," proxy method to access the saved\r\nvariables properties. The string must be the name of the saved variables\r\ntable."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"inventory",children:"inventory"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"A table containing flags for inventory management"}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Important note:"})," This property and the inventory tracking feature were\r\nintroduced in version 1.4.0 in an experimental way. Please, use this tracking\r\nflag with caution and expect changes (especially in performance) in future"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"-- ...\r\ninventory = {\r\n  track = true,\r\n}\r\n-- ...\n"})}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Optional"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Default:"})," ",(0,i.jsx)(n.code,{children:"{ track = false }"}),", indicating that the library will not\r\ntrack the player's inventory by default"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Effect:"})," When set to ",(0,i.jsx)(n.code,{children:"true"}),", the library will automatically instantiate\r\nthe ",(0,i.jsx)(n.a,{href:"../models/inventory",children:"player's inventory"})," and keep it updated with the\r\nplayer's containers by listening to the ",(0,i.jsx)(n.code,{children:"BAG_UPDATE"})," event."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"name",children:"name"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type:"})," string"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Required"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Effect:"})," The library will store the addon name for multiple purposes."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"version",children:"version"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Type:"})," string"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Optional"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Effect:"})," When set, the library's ",(0,i.jsx)(n.code,{children:"getVersionLabel()"})," method will return\r\nthe version prefixed with ",(0,i.jsx)(n.code,{children:"'v'"}),". Still, ",(0,i.jsx)(n.code,{children:"getVersionedNameLabel()"})," will also\r\nadd the version label to the addon name."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>o});var i=r(6540);const s={},t=i.createContext(s);function l(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);