(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{101:function(e,t,a){"use strict";a.d(t,"a",function(){return r}),a.d(t,"b",function(){return o}),a.d(t,"c",function(){return l}),a.d(t,"d",function(){return i}),a.d(t,"f",function(){return c}),a.d(t,"e",function(){return s}),a.d(t,"g",function(){return d}),a.d(t,"h",function(){return m});var n=a(83);function r(e){for(var t,a=Math.floor(Math.abs(e)),n="";a>0;)t=(a-1)%26,n=String.fromCharCode(65+t)+n,a=parseInt((a-t)/26);return n}function o(e){for(var t=0,a=0;a<e.length;a++)t=26*t+" ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(e[a]);return t}function l(e,t){return parseInt(t.substring(1))%e*Math.floor(360/e)}function i(e){var t=e.match(/[a-z]+|\d+/gi),a=Object(n.a)(t,4),r=a[0],l=a[1],i=a[2],c=a[3];return r=o(r),i=o(i),l=parseInt(l),c=parseInt(c),r<=i&&l<=c}function c(e){for(var t=e.length,a=new Array(t),l=0;l<t;l++){var i=e[l].match(/[a-z]+|[^a-z]+/gi),c=Object(n.a)(i,2),s=c[0],d=c[1];s=o(s),d=parseInt(d),a[l]=[s,d]}a.sort(function(e,t){return e[0]!==t[0]?e[0]-t[0]:e[1]-t[1]});for(var m=new Array(t),u=0;u<t;u++){var p=Object(n.a)(a[u],2);s=p[0],d=p[1];m[u]=r(s)+d}return m}function s(e,t){e=e.toLowerCase();for(var a=0,n=t.length;a<n;a++)if(-1===e.indexOf(t[a]))return!1;return!0}function d(e){var t=new Date;t.setTime(e);var a=t.getFullYear(),n=t.getMonth()+1,r=t.getDate(),o=t.getHours(),l=t.getMinutes(),i=t.getSeconds();return a+"-"+(n<10?"0"+n:n)+"-"+(r<10?"0"+r:r)+" "+(o<10?"0"+o:o)+":"+(l<10?"0"+l:l)+":"+(i<10?"0"+i:i)}function m(e){var t=new Date,a=new Date;a.setTime(e);var n=t.getTime()-e;if(n<864e5&&t.getDate()===a.getDate())return"Today";if(n<1728e5&&t.getDate()===a.getDate()+1)return"Yesterday";if(n<6048e5)return"Previous 7 Days";if(n<2592e6)return"Previous 30 Days";return t.getFullYear()===a.getFullYear()?["January","February","Match","April","May","June","July","August","September","October","November","December"][a.getMonth()]:a.getFullYear().toString()}},150:function(e,t,a){"use strict";a.d(t,"a",function(){return n});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function n(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},191:function(e,t,a){},598:function(e,t,a){e.exports=a(608)},599:function(e,t,a){},608:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(78),l=a.n(o),i=(a(191),a(90)),c=a(91),s=a(95),d=a(92),m=a(94),u=(a(599),a(101)),p=a(631),h=a(636),f=a(625),w=a(635),v=a(634),g=a(627),E=a(405),y=a(630),b=a(632),k=a(626),S=a(406),N=a(25),j=a(30),x=a(79),P=a(31),C=a.n(P),D=a(38),H=function(e){function t(){return e.apply(this,arguments)||this}return Object(x.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.bsPrefix,a=e.className,n=e.striped,o=e.bordered,l=e.borderless,i=e.hover,c=e.size,s=e.variant,d=e.responsive,m=Object(j.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),u=C()(t,a,s&&t+"-"+s,c&&t+"-"+c,n&&t+"-striped",o&&t+"-bordered",l&&t+"-borderless",i&&t+"-hover"),p=r.a.createElement("table",Object(N.a)({},m,{className:u}));if(d){var h=t+"-responsive";return"string"===typeof d&&(h=h+"-"+d),r.a.createElement("div",{className:h},p)}return p},t}(r.a.Component),z=Object(D.a)(H,"table"),O=a(160),A=a(125),M={prefix:"fas",iconName:"copy",icon:[448,512,[],"f0c5","M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z"]},T={prefix:"fas",iconName:"file-download",icon:[384,512,[],"f56d","M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm76.45 211.36l-96.42 95.7c-6.65 6.61-17.39 6.61-24.04 0l-96.42-95.7C73.42 337.29 80.54 320 94.82 320H160v-80c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v80h65.18c14.28 0 21.4 17.29 11.27 27.36zM377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z"]},L={prefix:"fas",iconName:"search",icon:[512,512,[],"f002","M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"]},I={prefix:"fas",iconName:"sort-down",icon:[320,512,[],"f0dd","M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"]},q={prefix:"fas",iconName:"sort-up",icon:[320,512,[],"f0de","M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z"]},B={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"]},V=function(e){function t(e){var a;Object(i.a)(this,t),a=Object(s.a)(this,Object(d.a)(t).call(this,e));var n=window.localStorage.getItem("server");null==n&&(n="http://localhost:5000",window.localStorage.setItem("server",n)),n.endsWith("/")&&(n=n.slice(0,-1));var r=window.localStorage.getItem("endpoint");return null==r&&(r="http://sitaware.isi.edu:8080/bigdata/namespace/wdq/sparql",window.localStorage.setItem("endpoint",r)),a.state={showSettings:!1,showNewProject:!1,tempNewProject:"",tempSearch:"",tempServer:n,tempEndpoint:r,projectData:[{pid:"1111",ptitle:"Project 1",mdate:1565807259582},{pid:"2222",ptitle:"Project 2",mdate:1565720859582},{pid:"3333",ptitle:"Project 3",mdate:1563906459582}],sortBy:"mdate",isAscending:!1},window.server=n,window.endpoint=r,a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.renderNewProject(),this.renderSettings(),r.a.createElement("div",null,r.a.createElement(p.a,{className:"shadow",bg:"dark",variant:"dark",sticky:"top",style:{height:"50px"}},r.a.createElement(h.a,{placement:"bottom",trigger:"hover",overlay:r.a.createElement(f.a,{style:{width:"fit-content"}},r.a.createElement("div",{className:"text-left"},"Table to Wikidata",r.a.createElement("br",null),"Mapping Language"))},r.a.createElement(p.a.Brand,{className:"pl-2 font-weight-bold",style:{cursor:"help"}},"T2WML\xa0GUI")),r.a.createElement(p.a.Text,{className:"pr-2",style:{cursor:"default"}},"v1.4\xa0(beta)"),r.a.createElement(p.a.Text,{className:"pr-2 ml-auto",style:{verticalAlign:"center"}},r.a.createElement(w.a,{className:"d-inline-block float-right",variant:"outline-light",size:"sm",style:{padding:"0rem 0.5rem"},onClick:this.handleShowSettings.bind(this)},"Settings")))),r.a.createElement("div",{style:{height:"calc(100vh - 50px)",background:"#f8f9fa",paddingTop:"20px"}},r.a.createElement(v.a,{className:"shadow-sm",style:{width:"90%",maxWidth:"800px",height:"calc(100vh - 90px)",margin:"0 auto"}},r.a.createElement(v.a.Header,{style:{height:"40px",padding:"0.5rem 1rem",background:"#343a40"}},r.a.createElement("div",{className:"text-white font-weight-bold d-inline-block text-truncate",style:{width:"100%",cursor:"default"}},"Your Projects")),r.a.createElement(v.a.Body,{style:{padding:"20px 5%",overflowY:"auto"}},r.a.createElement("div",{style:{marginBottom:"20px"}},r.a.createElement("div",{style:{display:"inline-block",width:"40%"}},r.a.createElement(w.a,{variant:"primary",size:"sm",style:{fontWeight:"600"},onClick:this.handleShowNewProject.bind(this)},"New Project")),r.a.createElement("div",{style:{display:"inline-block",width:"60%"}},r.a.createElement(g.a,{size:"sm"},r.a.createElement(g.a.Prepend,null,r.a.createElement(g.a.Text,{style:{background:"whitesmoke"}},r.a.createElement(A.a,{icon:L}))),r.a.createElement(E.a,{placeholder:"Search projects...",onChange:function(t){return e.setState({tempSearch:t.target.value})}})))),this.renderProjects()))))}},{key:"renderNewProject",value:function(){var e=this;return r.a.createElement(y.a,{show:this.state.showNewProject,onHide:function(){}},r.a.createElement(y.a.Header,{style:{background:"whitesmoke"}},r.a.createElement(y.a.Title,null,"New Project")),r.a.createElement(y.a.Body,null,r.a.createElement(b.a,{className:"container"},r.a.createElement(b.a.Group,{as:k.a,style:{marginTop:"1rem"},onChange:function(t){return e.setState({tempNewProject:t.target.value})}},r.a.createElement(b.a.Label,{column:!0,sm:"12",md:"2",className:"text-right"},"Title"),r.a.createElement(S.a,{sm:"12",md:"10"},r.a.createElement(b.a.Control,{type:"text",defaultValue:""}))))),r.a.createElement(y.a.Footer,{style:{background:"whitesmoke"}},r.a.createElement(w.a,{variant:"outline-dark",onClick:this.handleHideNewProject.bind(this)},"Cancel"),r.a.createElement(w.a,{variant:"dark",onClick:this.handleDoNewProject.bind(this),disabled:""===this.state.tempNewProject},"Create")))}},{key:"renderProjects",value:function(){for(var e=this,t=this.state,a=t.projectData,n=t.tempSearch.toLowerCase().split(/ +/),o=[],l=0,i=a.length;l<i;l++){var c=a[l],s=c.pid,d=c.ptitle,m=c.mdate;u.e(d,n)&&o.push(r.a.createElement("tr",{key:l},r.a.createElement("td",null,r.a.createElement("span",null,r.a.createElement("a",{href:"http://localhost:3000/project/"+s,target:"_blank",rel:"noopener noreferrer",style:{color:"hsl(200, 100%, 30%)"}},d))),r.a.createElement("td",null,r.a.createElement(h.a,{placement:"bottom",trigger:"hover",popperConfig:{modifiers:{preventOverflow:{enabled:!1}}},overlay:r.a.createElement(f.a,{style:{width:"fit-content"}},r.a.createElement("span",{className:"text-left small"},u.g(m)))},r.a.createElement("span",{style:{cursor:"default",color:"#495057"}},u.h(m)))),r.a.createElement("td",null,r.a.createElement(h.a,{placement:"bottom",trigger:"hover",popperConfig:{modifiers:{preventOverflow:{enabled:!1}}},overlay:r.a.createElement(f.a,{style:{width:"fit-content"}},r.a.createElement("span",{className:"text-left small"},"Duplicate"))},r.a.createElement("span",{className:"action-duplicate",style:{display:"inline-block",width:"33%",cursor:"pointer"}},r.a.createElement(A.a,{icon:M}))),r.a.createElement(h.a,{placement:"bottom",trigger:"hover",popperConfig:{modifiers:{preventOverflow:{enabled:!1}}},overlay:r.a.createElement(f.a,{style:{width:"fit-content"}},r.a.createElement("span",{className:"text-left small"},"Download"))},r.a.createElement("span",{className:"action-download",style:{display:"inline-block",width:"33%",cursor:"pointer"}},r.a.createElement(A.a,{icon:T}))),r.a.createElement(h.a,{placement:"bottom",trigger:"hover",popperConfig:{modifiers:{preventOverflow:{enabled:!1}}},overlay:r.a.createElement(f.a,{style:{width:"fit-content"}},r.a.createElement("span",{className:"text-left small"},"Delete"))},r.a.createElement("span",{className:"action-delete",style:{display:"inline-block",width:"33%",cursor:"pointer"}},r.a.createElement(A.a,{icon:B}))))))}0===o.length&&o.push(r.a.createElement("tr",{key:-1},r.a.createElement("td",{colSpan:"2",style:{textAlign:"center"}},"No porjects")));var p=this.state,w=p.sortBy,v=p.isAscending;return r.a.createElement(z,{bordered:!0,hover:!0,responsive:!0,size:"sm",style:{fontSize:"14px"}},r.a.createElement("thead",{style:{background:"whitesmoke"}},r.a.createElement("tr",null,r.a.createElement("th",{style:{width:"60%"}},r.a.createElement("span",{style:{cursor:"pointer"},onClick:function(){return e.handleSortProjects("ptitle")}},"Title"),"ptitle"===w?r.a.createElement("span",null,"\xa0",v?r.a.createElement(A.a,{icon:q}):r.a.createElement(A.a,{icon:I})):""),r.a.createElement("th",{style:{width:"30%"}},r.a.createElement("span",{style:{cursor:"pointer"},onClick:function(){return e.handleSortProjects("mdate")}},"Last Modified"),"mdate"===w?r.a.createElement("span",null,"\xa0",v?r.a.createElement(A.a,{icon:q}):r.a.createElement(A.a,{icon:I})):""),r.a.createElement("th",{style:{width:"10%"}},r.a.createElement("span",{style:{cursor:"default"}},"Actions")))),r.a.createElement("tbody",null,o))}},{key:"renderSettings",value:function(){var e=this;return r.a.createElement(y.a,{show:this.state.showSettings,size:"lg",onHide:function(){}},r.a.createElement(y.a.Header,{style:{background:"whitesmoke"}},r.a.createElement(y.a.Title,null,"Settings")),r.a.createElement(y.a.Body,null,r.a.createElement(b.a,{className:"container"},r.a.createElement(b.a.Group,{as:k.a,style:{marginTop:"1rem"}},r.a.createElement(b.a.Label,{column:!0,sm:"12",md:"3",className:"text-right"},"Project\xa0ID"),r.a.createElement(S.a,{sm:"12",md:"9"},r.a.createElement(g.a,null,r.a.createElement(b.a.Control,{type:"text",defaultValue:window.pid,readOnly:!0}),r.a.createElement(g.a.Append,null,r.a.createElement(w.a,{variant:"outline-danger",onClick:function(){e.handleClear(),window.location.reload()}},"\u21bb"))))),r.a.createElement(b.a.Group,{as:k.a,onChange:function(t){return e.setState({tempServer:t.target.value})}},r.a.createElement(b.a.Label,{column:!0,sm:"12",md:"3",className:"text-right"},"Server"),r.a.createElement(S.a,{sm:"12",md:"9"},r.a.createElement(b.a.Control,{type:"url",defaultValue:window.server}))),r.a.createElement(b.a.Group,{as:k.a},r.a.createElement(b.a.Label,{column:!0,sm:"12",md:"3",className:"text-right"},"SPARQL\xa0endpoint"),r.a.createElement(S.a,{sm:"12",md:"9"},r.a.createElement(b.a.Control,{as:"select",onChange:function(t){return e.setState({tempEndpoint:t.target.value})},defaultValue:window.endpoint},r.a.createElement("option",{value:"http://sitaware.isi.edu:8080/bigdata/namespace/wdq/sparql"},"http://sitaware.isi.edu:8080/bigdata/namespace/wdq/sparql"),r.a.createElement("option",{value:"http://kg2018a.isi.edu:8888/bigdata/namespace/wdq/sparql"},"http://kg2018a.isi.edu:8888/bigdata/namespace/wdq/sparql"),r.a.createElement("option",{value:"https://query.wikidata.org/sparql"},"https://query.wikidata.org/sparql")))))),r.a.createElement(y.a.Footer,{style:{background:"whitesmoke"}},r.a.createElement(w.a,{variant:"outline-dark",onClick:this.handleHideSettings.bind(this)},"Cancel"),r.a.createElement(w.a,{variant:"dark",onClick:this.handleDoSettings.bind(this)},"Save")))}},{key:"handleClear",value:function(){var e=new FormData;e.append("id",window.pid);var t=window.server+"/delete_user";fetch(t,{body:e,credentials:"same-origin",method:"POST"}),(new O.a).remove("pid")}},{key:"handleDoNewProject",value:function(e){console.log("<App> created new project: %c"+this.state.tempNewProject,"background: yellow; color: black"),this.setState({showNewProject:!1})}},{key:"handleDoSettings",value:function(e){console.log("<App> updated settings");var t=this.state,a=t.tempServer,n=t.tempEndpoint;a.endsWith("/")&&(a=a.slice(0,-1)),window.server=a,window.localStorage.setItem("server",window.server),window.endpoint=n,window.localStorage.setItem("endpoint",window.endpoint),this.setState({showSettings:!1});var r=new FormData;r.append("id",window.pid),r.append("endpoint",window.endpoint);var o=window.server+"/update_setting";fetch(o,{body:r,credentials:"same-origin",method:"POST"})}},{key:"handleHideNewProject",value:function(e){this.setState({showNewProject:!1})}},{key:"handleHideSettings",value:function(e){this.setState({showSettings:!1})}},{key:"handleShowNewProject",value:function(e){this.setState({showNewProject:!0})}},{key:"handleShowSettings",value:function(e){this.setState({showSettings:!0})}},{key:"handleSortProjects",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=this.state,n=a.sortBy,r=a.isAscending;null===t&&(t=e===n?!r:"mdate"!==e);var o=this.state.projectData;o.sort(function(a,n){return t?a[e]<n[e]?-1:a[e]>n[e]?1:0:a[e]<n[e]?1:a[e]>n[e]?-1:0}),this.setState({projectData:o,sortBy:e,isAscending:t})}}]),t}(r.a.Component),F=a(150);l.a.render(r.a.createElement(V,null),document.getElementById("root")),F.a()},83:function(e,t,a){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=[],n=!0,r=!1,o=void 0;try{for(var l,i=e[Symbol.iterator]();!(n=(l=i.next()).done)&&(a.push(l.value),!t||a.length!==t);n=!0);}catch(c){r=!0,o=c}finally{try{n||null==i.return||i.return()}finally{if(r)throw o}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}a.d(t,"a",function(){return n})}},[[598,7,0,2]]]);
//# sourceMappingURL=home.ce570a80.chunk.js.map