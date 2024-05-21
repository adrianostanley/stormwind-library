"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8577],{7212:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=r(4848),t=r(8453);const s={sidebar_position:3,title:"Commands Handler"},o=void 0,i={id:"resources/commands/commands-handler",title:"Commands Handler",description:"The commands handler is a class that intercepts all commands registered by an",source:"@site/docs/resources/commands/commands-handler.md",sourceDirName:"resources/commands",slug:"/resources/commands/commands-handler",permalink:"/docs/resources/commands/commands-handler",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/resources/commands/commands-handler.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Commands Handler"},sidebar:"tutorialSidebar",previous:{title:"Command",permalink:"/docs/resources/commands/command"},next:{title:"Core",permalink:"/docs/category/core"}},d={},c=[{value:"How it works",id:"how-it-works",level:2},{value:"The help operation",id:"the-help-operation",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"The commands handler is a class that intercepts all commands registered by an\r\naddon. That allows the library to parse arguments and trigger the\r\nregistered callbacks."}),"\n",(0,a.jsxs)(n.p,{children:["As mentioned in the ",(0,a.jsx)(n.a,{href:"overview",children:"overview"}),", one of the motivations behind the\r\ncommands structure is to allow commands to behave as objects, and that's\r\npossible leaving all the command conditionals, parsing, etc, to the handler,\r\nrequiring commands to just expose a callback expecting the desired\r\narguments."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["See how to register commands ",(0,a.jsx)(n.a,{href:"command",children:"here"})]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"When an addon initializes its library instance, it can pass a property in\r\nthe constructor representing the addon main command. That will make the\r\nlibrary register the command during its initialization."}),"\n",(0,a.jsx)(n.li,{children:"The library registers the command associating its own callback at this\r\npoint."}),"\n",(0,a.jsxs)(n.li,{children:["After that, each ",(0,a.jsx)(n.code,{children:"add(command)"})," call will map its operation and the command\r\nitself."]}),"\n",(0,a.jsxs)(n.li,{children:["When the command is executed in game, the library will have its callback\r\ntriggered along with the argument, which is broken by spaces.","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["When a command is executed in the game, everything after the command\r\nitself becomes the argument. Example: ",(0,a.jsx)(n.code,{children:"/myCommand arg1 arg2 arg3"})," will\r\ntrigger the callback with ",(0,a.jsx)(n.code,{children:"arg1 arg2 arg3"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["The Stormwind Library commands handler was designed to forward the\r\narguments like an operating system console where arguments\r\nare separated by blank spaces. Arguments that must contain spaces can\r\nbe wrapped by ",(0,a.jsx)(n.code,{children:'"'})," or ",(0,a.jsx)(n.code,{children:"'"}),". Example: ",(0,a.jsx)(n.code,{children:'/myCommand arg1 "arg2 arg3"'})," will\r\nresult in two arguments ",(0,a.jsx)(n.code,{children:"{'arg1', 'arg2 arg3'}"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["This list of arguments are divided, and the first argument is considered\r\nthe command ",(0,a.jsx)(n.strong,{children:"operation"}),", so it will determine the proper callback to\r\ntrigger in the addon. This callback is the one exposed by the command\r\nobject."]}),"\n",(0,a.jsx)(n.li,{children:"The other arguments (if any) are passed to the operation callback."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"the-help-operation",children:"The help operation"}),"\n",(0,a.jsxs)(n.p,{children:["By default, the commands handler offers a ",(0,a.jsx)(n.strong,{children:"help"})," operation that behaves as\r\na normal command. It basically prints all the available operations (except for\r\nthe help itself) along with their descriptions."]}),"\n",(0,a.jsx)(n.p,{children:"Addons that must need to override the help operation, simply create a command\r\nand add it normally, so the default one will be replaced."})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>i});var a=r(6540);const t={},s=a.createContext(t);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);