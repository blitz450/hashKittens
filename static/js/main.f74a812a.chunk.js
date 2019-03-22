(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n(34)},28:function(e,t,n){},32:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(15),c=n.n(o),i=n(7),s=n(2),l={searchField:""},u={robots:[],isPending:!0,error:""},h=n(17),d=n(18),f=n(4),p=n(5),b=n(8),g=n(6),m=n(9),v=function(e){e.searchfield;var t=e.searchchange;return a.a.createElement("div",{className:"pa2"},a.a.createElement("input",{"aria-label":"Search Kittens",className:"pa3 ba b--green bg-lightestblue",onChange:t,type:"Search",placeholder:"Search Kittens"}))},E=function(e){return a.a.createElement("div",{style:{overflowY:"scroll",height:"540px"}},e.children)},w=function(e){var t=e.id,n=e.name,r=e.email;return a.a.createElement("div",{className:" tc bg-silver dib br3 pa3 ma2 bw2 grow shadow-5"},a.a.createElement("img",{alt:"robot ",src:"https://robohash.org/".concat(t,"?set=set4&size=130x130")}),a.a.createElement("div",null,a.a.createElement("h4",null,n),a.a.createElement("p",{style:{fontSize:"13px"}},r)))},O=function(e){var t=e.robos;return a.a.createElement("div",null,t.map(function(e){var t=e.id,n=e.name,r=e.email;return a.a.createElement(w,{key:t,id:t,name:n,email:r})}))},y=function(e){function t(e){var n;return Object(f.a)(this,t),(n=Object(b.a)(this,Object(g.a)(t).call(this,e))).state={hasError:!1},n}return Object(m.a)(t,e),Object(p.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"Oops.Error"):this.props.children}}]),t}(r.Component),C=(n(28),function(e){function t(){return Object(f.a)(this,t),Object(b.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.onFetchRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,r=e.robots,o=e.isPending,c=e.error,i=r.filter(function(e){var n=e.name;e.email,e.id;return n.toLowerCase().includes(t.toLowerCase())});return o?a.a.createElement("h1",{className:"tc"},"LOADING ..."):a.a.createElement("div",{className:"tc"},a.a.createElement("h1",{className:"tc"},"Hash Kittens"),a.a.createElement(v,{searchchange:n}),c?"".concat(c):a.a.createElement(E,null,a.a.createElement(y,null,a.a.createElement(O,{robos:i}))))}}]),t}(r.Component)),S=Object(i.b)(function(e){return{searchField:e.searchRobots.searchField,robots:e.fetchRobots.robots,isPending:e.fetchRobots.isPending,error:e.fetchRobots.error}},function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onFetchRobots:function(){return e(function(e){e({type:"FETCH_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e({type:"FETCH_ROBOTS_SUCCESS",payload:t})}).catch(function(t){return e({type:"FETCH_ROBOTS_FAIL",payload:t})})})}}})(C),j=(n(30),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function R(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}n(32);var F=Object(h.createLogger)(),_=Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},fetchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"FETCH_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"FETCH_ROBOTS_SUCCESS":return Object.assign({},e,{isPending:!1,robots:t.payload});case"FETCH_ROBOTS_FAIL":return Object.assign({},e,{isPending:!1,error:t.payload});default:return e}}}),k=Object(s.d)(_,Object(s.a)(d.a,F));c.a.render(a.a.createElement(i.a,{store:k},a.a.createElement(S,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/hashKittens",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/hashKittens","/service-worker.js");j?(function(e,t){fetch(e).then(function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):R(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):R(t,e)})}}()}},[[19,2,1]]]);
//# sourceMappingURL=main.f74a812a.chunk.js.map