"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6692],{5085:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var r=n(4848),o=n(8453);const s={},i="Output",d={id:"resources/core/output",title:"Output",description:"The output structure controls everything that can be printed",source:"@site/docs/resources/core/output.md",sourceDirName:"resources/core",slug:"/resources/core/output",permalink:"/stormwind-library/docs/resources/core/output",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/resources/core/output.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Factory",permalink:"/stormwind-library/docs/resources/core/factory"},next:{title:"Facades",permalink:"/stormwind-library/docs/category/facades"}},a={},l=[{value:"The out() method",id:"the-out-method",level:2},{value:"The print() method",id:"the-print-method",level:2},{value:"Coloring strings",id:"coloring-strings",level:2},{value:"Testing mode",id:"testing-mode",level:2},{value:"Dump and dying - dd()",id:"dump-and-dying---dd",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"output",children:"Output"}),"\n",(0,r.jsx)(t.p,{children:"The output structure controls everything that can be printed\r\nin the Stormwind Library and also by the addons."}),"\n",(0,r.jsxs)(t.p,{children:["Its usage could be easily replaced by ",(0,r.jsx)(t.code,{children:"print()"})," calls, but the\r\nlibrary offers this facade to allow better print formatting, mocking,\r\ntesting, logging, etc."]}),"\n",(0,r.jsx)(t.p,{children:"The output instance can also be replaced by any addons to forward\r\nall the produced output."}),"\n",(0,r.jsx)(t.h2,{id:"the-out-method",children:"The out() method"}),"\n",(0,r.jsx)(t.p,{children:"This is the default printing method for the output structure that addons\r\nand the library itself must use almost all the times."}),"\n",(0,r.jsx)(t.p,{children:"It basically adds a formatting to prefix every message with the addon\r\nname wrapped in the addon's primary color."}),"\n",(0,r.jsxs)(t.p,{children:["Consider an addon called ",(0,r.jsx)(t.strong,{children:"MyAddon"})," whose primary color is red. Then\r\nrunning:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-lua",children:"library.output:out('Content to be printed')\n"})}),"\n",(0,r.jsx)(t.p,{children:"Will produce:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.strong,{children:[(0,r.jsx)("span",{style:{color:"red"},children:"MyAddon |"})," Content to be printed"]})}),"\n",(0,r.jsxs)(t.p,{children:["If the addon needs to print a non-formatted message, then it should use\r\n",(0,r.jsx)(t.code,{children:"output:print()"})," instead. Read the section below for more information."]}),"\n",(0,r.jsx)(t.h2,{id:"the-print-method",children:"The print() method"}),"\n",(0,r.jsxs)(t.p,{children:["Calling Lua's default ",(0,r.jsx)(t.code,{children:"print()"})," function will work perfectly in any\r\naddon using the Stormwind Library, however, it's recommended to use\r\nits default output instance:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-lua",children:"library.output:print('Content to be printed')\n"})}),"\n",(0,r.jsxs)(t.admonition,{title:"Use out() instead of print()",type:"tip",children:[(0,r.jsxs)(t.p,{children:["Although there's a ",(0,r.jsx)(t.code,{children:"print()"})," method in the output structure, it's\r\nrecommended to use ",(0,r.jsx)(t.code,{children:"out()"})," instead, as it will format the message with\r\nthe addon name and color it according to the primary color from the\r\naddon properties."]}),(0,r.jsxs)(t.p,{children:["Consider the ",(0,r.jsx)(t.code,{children:"print()"})," method useful for replacing the standard output,\r\nlike sending all to a frame instead of Lua's default print function."]})]}),"\n",(0,r.jsx)(t.h2,{id:"coloring-strings",children:"Coloring strings"}),"\n",(0,r.jsx)(t.p,{children:"When printing content to World of Warcraft chat, it's very common to\r\nuse colors. Those colors have a specific formatting that's hard for\r\nhumans to read as they mix the hexadecimal color with a couple of other\r\ncharacters."}),"\n",(0,r.jsx)(t.p,{children:"The output structure has a method to easily wrap any string in a\r\nhexadecimal color that can be called with:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-lua",children:"-- do not pass the # character\r\nlibrary.output:color('Content to be printed in white', 'FFFFFF')\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The second parameter represents the color in hexadecimal ",(0,r.jsx)(t.strong,{children:"with no #"}),",\r\nbut this is an optional parameter. When omitted, the ",(0,r.jsx)(t.strong,{children:"primary color"})," set\r\nin the ",(0,r.jsx)(t.a,{href:"addon-properties#colors",children:"addon properties"})," will be used instead."]}),"\n",(0,r.jsx)(t.p,{children:"And even if no primary color was set, the method will return the original\r\ninput, which is the string with no wrapped color."}),"\n",(0,r.jsx)(t.h2,{id:"testing-mode",children:"Testing mode"}),"\n",(0,r.jsxs)(t.p,{children:["This class has a test mode that allows the output to be easily tested\r\ninstead of printing the messages to the system output. That way, unit test\r\ncases don't need to mock the ",(0,r.jsx)(t.code,{children:"print()"})," function nor the output structure."]}),"\n",(0,r.jsxs)(t.p,{children:["Although Output was designed to allow replacing the ",(0,r.jsx)(t.code,{children:"print()"})," function\r\nwhen necessary, it's safe to say that almost every addon will use the\r\n",(0,r.jsx)(t.code,{children:"out()"})," function directly so lots of repeated code can be avoided by using\r\nthis structure in testing mode."]}),"\n",(0,r.jsx)(t.p,{children:"To set the library output in test mode, you can use the setTestingMode()\r\nmethod like this:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-lua",children:"library.output:setTestingMode()\n"})}),"\n",(0,r.jsx)(t.p,{children:"After that, you can use the printed() method to check if a message was\r\nprinted in the output structure."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-lua",children:"library.output:out('Hello, World of Warcraft!')\r\n\r\nlu.assertTrue(library.output:printed('Hello, World of Warcraft!'))\n"})}),"\n",(0,r.jsx)(t.h2,{id:"dump-and-dying---dd",children:"Dump and dying - dd()"}),"\n",(0,r.jsxs)(t.p,{children:["The library's ",(0,r.jsx)(t.code,{children:"dd()"})," function is inspired by PHP Laravel's ",(0,r.jsx)(t.code,{children:"dd()"})," function\r\nand offers a quick way to dump variables and stop the execution of the\r\nscript. ",(0,r.jsx)(t.strong,{children:"It's intended to be used for debugging purposes only."})]}),"\n",(0,r.jsxs)(t.p,{children:["Once called with one or more variables, it will print the their structures\r\nusing the standard ",(0,r.jsx)(t.code,{children:"print()"})," method, which ",(0,r.jsx)(t.strong,{children:"can't be replaced"})," like\r\n",(0,r.jsx)(t.code,{children:"Output:print()"}),", considering that ",(0,r.jsx)(t.code,{children:"dd()"})," is intended for debugging\r\npurposes only."]}),"\n",(0,r.jsx)(t.p,{children:"This method is also prepared to avoid circular references and won't break if\r\na table has a reference to itself. However, it still deserves lots of\r\nimprovements that will be implemented by demand."}),"\n",(0,r.jsxs)(t.p,{children:["Finally, ",(0,r.jsx)(t.code,{children:"dd()"})," can be used in game as well, however, the chat frame has a\r\nline limit that can be reached if the dumped variable is too big, so its usage\r\nis recommended for small tables and variables and mostly for local testing."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-lua",children:"local myTable = { key = 'value' }\r\n\r\n-- this will print the table and stop the execution\r\nlibrary:dd(myTable)\n"})})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>d});var r=n(6540);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);