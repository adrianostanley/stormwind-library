"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1525],{8138:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>a});var t=r(4848),i=r(8453);const s={sidebar_position:2,title:"Build"},l=void 0,o={id:"library-structure/build",title:"Build",description:"All the library code is written inside the ./src folder and split into multiple .lua files.",source:"@site/docs/library-structure/build.md",sourceDirName:"library-structure",slug:"/library-structure/build",permalink:"/stormwind-library/docs/library-structure/build",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/library-structure/build.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Build"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/stormwind-library/docs/library-structure/overview"},next:{title:"Import",permalink:"/stormwind-library/docs/library-structure/import"}},d={},a=[{value:"Building with Visual Studio Code and tasks.json",id:"building-with-visual-studio-code-and-tasksjson",level:2}];function c(e){const n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["All the library code is written inside the ",(0,t.jsx)(n.code,{children:"./src"})," folder and split into multiple ",(0,t.jsx)(n.code,{children:".lua"})," files."]}),"\n",(0,t.jsx)(n.p,{children:"This initial build method is pretty rough and should be updated in the future, but it works in\r\na very simple way:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Open the command line"}),"\n",(0,t.jsxs)(n.li,{children:["Navigate to ",(0,t.jsx)(n.code,{children:"./compiler"})]}),"\n",(0,t.jsxs)(n.li,{children:["Run ",(0,t.jsx)(n.code,{children:"node build.js"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["After that, a file called ",(0,t.jsx)(n.code,{children:"stormwind-library.lua"})," is created in the ",(0,t.jsx)(n.code,{children:"./dist"})," folder."]}),"\n",(0,t.jsx)(n.p,{children:"This is the file that must be imported by the addons."}),"\n",(0,t.jsx)(n.h2,{id:"building-with-visual-studio-code-and-tasksjson",children:"Building with Visual Studio Code and tasks.json"}),"\n",(0,t.jsxs)(n.p,{children:["If you're using Visual Studio Code, you can create a file called ",(0,t.jsx)(n.code,{children:"tasks.json"}),"\r\nin the ",(0,t.jsx)(n.code,{children:"./.vscode"})," folder to crate a couple of useful tasks instead of\r\nrunning the commands manually."]}),"\n",(0,t.jsx)(n.p,{children:"This is just an example of how you can create tasks to build the library,\r\nrun the tests, manage the documentation, etc."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\r\n    "version": "2.0.0",\r\n    "tasks": [\r\n        {\r\n            "label": "Build ldoc documentation",\r\n            "type": "shell",\r\n            "options": {\r\n                "cwd": "./dist"\r\n            },\r\n            "command": "ldoc stormwind-library.lua -d ../documentation-ldoc -v",\r\n            "problemMatcher": []\r\n        },\r\n        {\r\n            "label": "Build library",\r\n            "type": "shell",\r\n            "options": {\r\n                "cwd": "./compiler"\r\n            },\r\n            "command": "node build",\r\n            "problemMatcher": []\r\n        },\r\n        {\r\n            "label": "Build library, ldoc, and test",\r\n            "dependsOrder": "sequence",\r\n            "dependsOn": ["Build library", "Build ldoc documentation", "Run unit tests"],\r\n            "problemMatcher": []\r\n        },\r\n        {\r\n            "label": "Run documentation",\r\n            "type": "shell",\r\n            "options": {\r\n                "cwd": "./documentation"\r\n            },\r\n            "command": "npx docusaurus start",\r\n            "problemMatcher": []\r\n        },\r\n        {\r\n            "label": "Run unit tests",\r\n            "type": "shell",\r\n            "command": "lua54 ./tests/unit.lua -v",\r\n            "problemMatcher": []\r\n        }\r\n    ]\r\n}\n'})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>o});var t=r(6540);const i={},s=t.createContext(i);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);