(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{1615:function(t,e,i){},"6e89":function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-page",{staticClass:"column items-center justify-center"},[i("loadProjectCheckDialog",{attrs:{"dialog-trigger":t.loadProjectDialogTrigger},on:{"trigger-dialog-close":t.loadProjectDialogClose}}),i("newProjectCheckDialog",{attrs:{"dialog-trigger":t.newProjectDialogTrigger},on:{"trigger-dialog-close":t.newProjectDialogClose}}),i("div",{staticClass:"col-12"},[i("h5",{staticClass:"mainSubTitle"},[t._v("Welcome to ")])]),i("div",{staticClass:"col-12"},[i("h2",{staticClass:"mainTitle"},[t._v("Fantasia Archive")])]),i("div",{staticClass:"col-12 q-mb-lg"},[t.projectExists?i("q-btn",{staticClass:"q-px-xl q-py-xs",attrs:{color:"primary",size:"md",outline:t.isDarkMode,to:"/project"}},[i("div",[t._v("Resume project ")])]):t._e()],1),i("div",{staticClass:"col-12 q-mb-lg"},[i("q-btn",{staticClass:"q-px-xl q-py-xs",attrs:{color:"primary",size:"md",outline:t.isDarkMode},on:{click:t.newProjectAssignUID}},[t._v("\n       New Project\n      ")])],1),i("div",{staticClass:"col-12"},[i("q-btn",{staticClass:"q-px-xl q-py-xs",attrs:{color:"primary",outline:t.isDarkMode,size:"md"},on:{click:function(e){return t.saveProjectAssignUID()}}},[t._v("\n      Load existing project\n     ")])],1),t.hideWelcomeScreenSocials?t._e():[i("q-separator",{staticClass:"q-mt-xl q-mb-lg",staticStyle:{opacity:"0.5",width:"400px"},attrs:{color:"primary",horizonatal:"",dark:""}}),i("div",{staticClass:"col-12 q-mx-sm q-my-md"},[i("div",{staticClass:"patreonButton shadow-1",on:{click:t.openPatreonLink}},[t._v("\n          Support Fantasia Archive on Patreon!\n        ")])]),i("div",{staticClass:"col-12 q-mb-lg"},[i("div",{staticClass:"row"},[i("div",{staticClass:"q-mx-sm q-my-md"},[i("div",{staticClass:"discordButton shadow-1",on:{click:t.openDiscordInviteLink}},[t._v("\n              Discord\n            ")])]),i("div",{staticClass:"q-mx-sm q-my-md"},[i("div",{staticClass:"redditButton shadow-1",on:{click:t.openRedditLink}})]),i("div",{staticClass:"q-mx-sm q-my-md"},[i("div",{staticClass:"websiteButton shadow-1",on:{click:t.openWebsiteLink}},[t._v("\n              Website\n            ")])]),i("div",{staticClass:"q-mx-sm q-my-md"},[i("div",{staticClass:"githubButton shadow-1",on:{click:t.openGithubLink}},[t._v("\n              GitHub\n            ")])])])])]],2)},s=[],a=i("60a3"),c=i("f987"),n=i("7e57"),r=i("06de"),l=function(t,e,i,o){var s,a=arguments.length,c=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)c=Reflect.decorate(t,e,i,o);else for(var n=t.length-1;n>=0;n--)(s=t[n])&&(c=(a<3?s(c):a>3?s(e,i,c):s(e,i))||c);return a>3&&c&&Object.defineProperty(e,i,c),c};let d=class extends c["a"]{constructor(){super(...arguments),this.isDarkMode=!1,this.hideWelcomeScreenSocials=!1,this.projectExists=!1,this.newProjectDialogTrigger=!1,this.loadProjectDialogTrigger=!1}onSettingsChange(){const t=this.SGET_options;this.isDarkMode=t.darkMode,this.hideWelcomeScreenSocials=t.hideWelcomeScreenSocials}created(){this.checkProjectStatus()}checkProjectStatus(){this.projectExists=this.SGET_getProjectName.length>0}openDiscordInviteLink(){window.open("https://discord.gg/JQDBvsN9Te")}openPatreonLink(){window.open("https://www.patreon.com/elvanos")}openRedditLink(){window.open("https://www.reddit.com/r/FantasiaArchive/")}openWebsiteLink(){window.open("http://fantasiaarchive.com/")}openGithubLink(){window.open("https://github.com/Elvanos/fantasia-archive")}newProjectDialogClose(){this.newProjectDialogTrigger=!1}newProjectAssignUID(){this.newProjectDialogTrigger=this.generateUID()}loadProjectDialogClose(){this.loadProjectDialogTrigger=!1}saveProjectAssignUID(){this.loadProjectDialogTrigger=this.generateUID()}};l([Object(a["e"])("SGET_options",{immediate:!0,deep:!0})],d.prototype,"onSettingsChange",null),l([Object(a["e"])("SGET_getProjectName")],d.prototype,"checkProjectStatus",null),d=l([Object(a["a"])({components:{loadProjectCheckDialog:n["a"],newProjectCheckDialog:r["a"]}})],d);var g=d,p=g,h=(i("a6e4"),i("8c53"),i("2877")),m=i("9989"),u=i("9c40"),v=i("eb85"),w=i("b498"),j=i("eebe"),C=i.n(j),k=Object(h["a"])(p,o,s,!1,null,"3bd6aafb",null);e["default"]=k.exports;C()(k,"components",{QPage:m["a"],QBtn:u["a"],QSeparator:v["a"],QColor:w["a"]})},"8c53":function(t,e,i){"use strict";i("f868")},a6e4:function(t,e,i){"use strict";i("1615")},f868:function(t,e,i){}}]);