function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function s(){return Object.create(null)}function r(e){e.forEach(n)}function o(e){return"function"==typeof e}function i(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let a;function c(e,t){return a||(a=document.createElement("a")),a.href=t,e===a.href}function l(e,n,s,r){return e[1]&&r?t(s.ctx.slice(),e[1](r(n))):s.ctx}function u(e){const t={};for(const n in e)"$"!==n[0]&&(t[n]=e[n]);return t}function f(e){return null==e?"":e}let d,h,p=!1;function m(e,t,n,s){for(;e<t;){const r=e+(t-e>>1);n(r)<=s?e=r+1:t=r}return e}function g(e,t){if(p){for(!function(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if("HEAD"===e.nodeName){const e=[];for(let n=0;n<t.length;n++){const s=t[n];void 0!==s.claim_order&&e.push(s)}t=e}const n=new Int32Array(t.length+1),s=new Int32Array(t.length);n[0]=-1;let r=0;for(let e=0;e<t.length;e++){const o=t[e].claim_order,i=(r>0&&t[n[r]].claim_order<=o?r+1:m(1,r,(e=>t[n[e]].claim_order),o))-1;s[e]=n[i]+1;const a=i+1;n[a]=e,r=Math.max(a,r)}const o=[],i=[];let a=t.length-1;for(let e=n[r]+1;0!=e;e=s[e-1]){for(o.push(t[e-1]);a>=e;a--)i.push(t[a]);a--}for(;a>=0;a--)i.push(t[a]);o.reverse(),i.sort(((e,t)=>e.claim_order-t.claim_order));for(let t=0,n=0;t<i.length;t++){for(;n<o.length&&i[t].claim_order>=o[n].claim_order;)n++;const s=n<o.length?o[n]:null;e.insertBefore(i[t],s)}}(e),(void 0===e.actual_end_child||null!==e.actual_end_child&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);null!==e.actual_end_child&&void 0===e.actual_end_child.claim_order;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?void 0===t.claim_order&&t.parentNode===e||e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else t.parentNode===e&&null===t.nextSibling||e.appendChild(t)}function b(e,t,n){e.insertBefore(t,n||null)}function v(e,t,n){p&&!n?g(e,t):t.parentNode===e&&t.nextSibling==n||e.insertBefore(t,n||null)}function _(e){e.parentNode.removeChild(e)}function $(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function w(e){return document.createElement(e)}function y(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function E(e){return document.createTextNode(e)}function S(){return E(" ")}function x(){return E("")}function T(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function A(e){return function(t){return t.preventDefault(),e.call(this,t)}}function N(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function P(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const s in t)null==t[s]?e.removeAttribute(s):"style"===s?e.style.cssText=t[s]:"__value"===s?e.value=e[s]=t[s]:n[s]&&n[s].set?e[s]=t[s]:N(e,s,t[s])}function L(e){return Array.from(e.childNodes)}function I(e){void 0===e.claim_info&&(e.claim_info={last_index:0,total_claimed:0})}function R(e,t,n,s,r=!1){I(e);const o=(()=>{for(let s=e.claim_info.last_index;s<e.length;s++){const o=e[s];if(t(o)){const t=n(o);return void 0===t?e.splice(s,1):e[s]=t,r||(e.claim_info.last_index=s),o}}for(let s=e.claim_info.last_index-1;s>=0;s--){const o=e[s];if(t(o)){const t=n(o);return void 0===t?e.splice(s,1):e[s]=t,r?void 0===t&&e.claim_info.last_index--:e.claim_info.last_index=s,o}}return s()})();return o.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,o}function k(e,t,n,s){return R(e,(e=>e.nodeName===t),(e=>{const t=[];for(let s=0;s<e.attributes.length;s++){const r=e.attributes[s];n[r.name]||t.push(r.name)}t.forEach((t=>e.removeAttribute(t)))}),(()=>s(t)))}function O(e,t,n){return k(e,t,n,w)}function H(e,t,n){return k(e,t,n,y)}function C(e,t){return R(e,(e=>3===e.nodeType),(e=>{const n=""+t;if(e.data.startsWith(n)){if(e.data.length!==n.length)return e.splitText(n.length)}else e.data=n}),(()=>E(t)),!0)}function U(e){return C(e," ")}function j(e,t,n){for(let s=n;s<e.length;s+=1){const n=e[s];if(8===n.nodeType&&n.textContent.trim()===t)return s}return e.length}function M(e,t){const n=j(e,"HTML_TAG_START",0),s=j(e,"HTML_TAG_END",n);if(n===s)return new V(void 0,t);I(e);const r=e.splice(n,s-n+1);_(r[0]),_(r[r.length-1]);const o=r.slice(1,r.length-1);for(const t of o)t.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1;return new V(o,t)}function D(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function G(e,t){e.value=null==t?"":t}function q(e,t,n,s){null===n?e.style.removeProperty(t):e.style.setProperty(t,n,s?"important":"")}function B(){if(void 0===d){d=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(e){d=!0}}return d}function z(e,t){"static"===getComputedStyle(e).position&&(e.style.position="relative");const n=w("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const s=B();let r;return s?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=T(window,"message",(e=>{e.source===n.contentWindow&&t()}))):(n.src="about:blank",n.onload=()=>{r=T(n.contentWindow,"resize",t)}),function(e,t){e.appendChild(t)}(e,n),()=>{(s||r&&n.contentWindow)&&r(),_(n)}}function K(e,t=document.body){return Array.from(t.querySelectorAll(e))}class J{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,t,n=null){this.e||(this.is_svg?this.e=y(t.nodeName):this.e=w(t.nodeName),this.t=t,this.c(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)b(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(_)}}class V extends J{constructor(e,t=!1){super(t),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let t=0;t<this.n.length;t+=1)v(this.t,this.n[t],e)}}function W(e){h=e}function F(){if(!h)throw new Error("Function called outside component initialization");return h}function Y(e){F().$$.on_mount.push(e)}function X(e){F().$$.after_update.push(e)}function Q(e){F().$$.on_destroy.push(e)}const Z=[],ee=[],te=[],ne=[],se=Promise.resolve();let re=!1;function oe(e){te.push(e)}const ie=new Set;let ae=0;function ce(){const e=h;do{for(;ae<Z.length;){const e=Z[ae];ae++,W(e),le(e.$$)}for(W(null),Z.length=0,ae=0;ee.length;)ee.pop()();for(let e=0;e<te.length;e+=1){const t=te[e];ie.has(t)||(ie.add(t),t())}te.length=0}while(Z.length);for(;ne.length;)ne.pop()();re=!1,ie.clear(),W(e)}function le(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(oe)}}const ue=new Set;let fe;function de(){fe={r:0,c:[],p:fe}}function he(){fe.r||r(fe.c),fe=fe.p}function pe(e,t){e&&e.i&&(ue.delete(e),e.i(t))}function me(e,t,n,s){if(e&&e.o){if(ue.has(e))return;ue.add(e),fe.c.push((()=>{ue.delete(e),s&&(n&&e.d(1),s())})),e.o(t)}else s&&s()}function ge(e,t){const n={},s={},r={$$scope:1};let o=e.length;for(;o--;){const i=e[o],a=t[o];if(a){for(const e in i)e in a||(s[e]=1);for(const e in a)r[e]||(n[e]=a[e],r[e]=1);e[o]=a}else for(const e in i)r[e]=1}for(const e in s)e in n||(n[e]=void 0);return n}function be(e){return"object"==typeof e&&null!==e?e:{}}function ve(e){e&&e.c()}function _e(e,t){e&&e.l(t)}function $e(e,t,s,i){const{fragment:a,on_mount:c,on_destroy:l,after_update:u}=e.$$;a&&a.m(t,s),i||oe((()=>{const t=c.map(n).filter(o);l?l.push(...t):r(t),e.$$.on_mount=[]})),u.forEach(oe)}function we(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ye(e,t){-1===e.$$.dirty[0]&&(Z.push(e),re||(re=!0,se.then(ce)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Ee(t,n,o,i,a,c,l,u=[-1]){const f=h;W(t);const d=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:a,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(f?f.$$.context:[])),callbacks:s(),dirty:u,skip_bound:!1,root:n.target||f.$$.root};l&&l(d.root);let m=!1;if(d.ctx=o?o(t,n.props||{},((e,n,...s)=>{const r=s.length?s[0]:n;return d.ctx&&a(d.ctx[e],d.ctx[e]=r)&&(!d.skip_bound&&d.bound[e]&&d.bound[e](r),m&&ye(t,e)),n})):[],d.update(),m=!0,r(d.before_update),d.fragment=!!i&&i(d.ctx),n.target){if(n.hydrate){p=!0;const e=L(n.target);d.fragment&&d.fragment.l(e),e.forEach(_)}else d.fragment&&d.fragment.c();n.intro&&pe(t.$$.fragment),$e(t,n.target,n.anchor,n.customElement),p=!1,ce()}W(f)}class Se{$destroy(){we(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const xe=[];function Te(t,n=e){let s;const r=new Set;function o(e){if(i(t,e)&&(t=e,s)){const e=!xe.length;for(const e of r)e[1](),xe.push(e,t);if(e){for(let e=0;e<xe.length;e+=2)xe[e][0](xe[e+1]);xe.length=0}}}return{set:o,update:function(e){o(e(t))},subscribe:function(i,a=e){const c=[i,a];return r.add(c),1===r.size&&(s=n(o)||e),i(t),()=>{r.delete(c),0===r.size&&(s(),s=null)}}}}const Ae={};var Ne={owner:"linkspreed",repo:"linkspreed_uptime",sites:[{name:"Linkspreed",url:"https://www.linkspreed.com"}],"status-website":{cname:"status.linkspreed.com",logoUrl:"https://raw.githubusercontent.com/upptime/upptime.js.org/master/static/img/icon.svg",name:"Linkspreed Status",introTitle:"**Linkspreed Status** is the open-source uptime monitor and status page, powered entirely by GitHub.",introMessage:"This is a sample status page which uses **real-time** data from our [GitHub repository](https://github.com/upptime/upptime). No server required — just GitHub Actions, Issues, and Pages. [**Get your own for free**](https://github.com/upptime/upptime)",navbar:[{title:"Status",href:"/"},{title:"GitHub",href:"https://github.com/$OWNER/$REPO"}]},path:"https://status.linkspreed.com",i18n:{activeIncidents:"Active Incidents",allSystemsOperational:"All systems are operational",incidentReport:"Incident #$NUMBER report →",activeIncidentSummary:"Opened at $DATE with $POSTS posts",incidentTitle:"Incident $NUMBER Details",incidentDetails:"Incident Details",incidentFixed:"Fixed",incidentOngoing:"Ongoing",incidentOpenedAt:"Opened at",incidentClosedAt:"Closed at",incidentViewOnGitHub:"View and Subscribe on GitHub",incidentCommentSummary:"Posted at $DATE by $AUTHOR",incidentBack:"← Back to all incidents",pastIncidents:"Past Incidents",pastIncidentsResolved:"Resolved in $MINUTES minutes with $POSTS posts",liveStatus:"Live Status",overallUptime:"Overall uptime: $UPTIME",overallUptimeTitle:"Overall uptime",averageResponseTime:"Average response time: $TIMEms",averageResponseTimeTitle:"Average response",sevelDayResponseTime:"7-day response time",responseTimeMs:"Response time (ms)",up:"Up",down:"Down",degraded:"Degraded",ms:"ms",loading:"Loading",navGitHub:"GitHub",footer:"This page is [open source]($REPO), powered by [Upptime](https://upptime.js.org)",rateLimitExceededTitle:"Rate limit exceeded",rateLimitExceededIntro:"You have exceeded the number of requests you can do in an hour, so you'll have to wait before accessing this website again. Alternately, you can add a GitHub Personal Access Token to continue to use this website.",rateLimitExceededWhatDoesErrorMean:"What does this error mean?",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"How can I fix it?",rateLimitExceededErrorFix:"You can wait for another hour and your IP address' limit will be restored. Alternately, you can add your GitHub Personal Access Token, which gives you an additional 5,000 requests per hour.",rateLimitExceededGeneratePAT:"Learn how to generate a Personal Access Token",rateLimitExceededHasSet:"You have a personal access token set.",rateLimitExceededRemoveToken:"Remove token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copy and paste your token",rateLimitExceededSaveToken:"Save token",errorTitle:"An error occurred",errorIntro:"An error occurred in trying to get the latest status details.",errorText:"You can try again in a few moments.",errorHome:"Go to the homepage",pastScheduledMaintenance:"Past Scheduled Maintenance",scheduledMaintenance:"Scheduled Maintenance",scheduledMaintenanceSummaryStarted:"Started at $DATE for $DURATION minutes",scheduledMaintenanceSummaryStarts:"Starts at $DATE for $DURATION minutes",startedAt:"Started at",startsAt:"Starts at",duration:"Duration",durationMin:"$DURATION minutes",incidentCompleted:"Completed",incidentScheduled:"Scheduled"}};function Pe(e,t,n){const s=e.slice();return s[1]=t[n],s}function Le(t){let n,s,r,o=Ne["status-website"]&&!Ne["status-website"].hideNavLogo&&function(t){let n,s;return{c(){n=w("img"),this.h()},l(e){n=O(e,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){N(n,"alt",""),c(n.src,s=Ne["status-website"].logoUrl)||N(n,"src",s),N(n,"class","svelte-a08hsz")},m(e,t){v(e,n,t)},p:e,d(e){e&&_(n)}}}(),i=Ne["status-website"]&&!Ne["status-website"].hideNavTitle&&function(t){let n,s,r=Ne["status-website"].name+"";return{c(){n=w("div"),s=E(r)},l(e){n=O(e,"DIV",{});var t=L(n);s=C(t,r),t.forEach(_)},m(e,t){v(e,n,t),g(n,s)},p:e,d(e){e&&_(n)}}}();return{c(){n=w("div"),s=w("a"),o&&o.c(),r=S(),i&&i.c(),this.h()},l(e){n=O(e,"DIV",{});var t=L(n);s=O(t,"A",{href:!0,class:!0});var a=L(s);o&&o.l(a),r=U(a),i&&i.l(a),a.forEach(_),t.forEach(_),this.h()},h(){N(s,"href",Ne["status-website"].logoHref||Ne.path),N(s,"class","logo svelte-a08hsz")},m(e,t){v(e,n,t),g(n,s),o&&o.m(s,null),g(s,r),i&&i.m(s,null)},p(e,t){Ne["status-website"]&&!Ne["status-website"].hideNavLogo&&o.p(e,t),Ne["status-website"]&&!Ne["status-website"].hideNavTitle&&i.p(e,t)},d(e){e&&_(n),o&&o.d(),i&&i.d()}}}function Ie(e){let t,n,s,r,o,i=e[1].title+"";return{c(){t=w("li"),n=w("a"),s=E(i),o=S(),this.h()},l(e){t=O(e,"LI",{});var r=L(t);n=O(r,"A",{"aria-current":!0,href:!0,target:!0,class:!0});var a=L(n);s=C(a,i),a.forEach(_),o=U(r),r.forEach(_),this.h()},h(){N(n,"aria-current",r=e[0]===("/"===e[1].href?void 0:e[1].href)?"page":void 0),N(n,"href",e[1].href.replace("$OWNER",Ne.owner).replace("$REPO",Ne.repo)),N(n,"target",e[1].target||"_self"),N(n,"class","svelte-a08hsz")},m(e,r){v(e,t,r),g(t,n),g(n,s),g(t,o)},p(e,t){1&t&&r!==(r=e[0]===("/"===e[1].href?void 0:e[1].href)?"page":void 0)&&N(n,"aria-current",r)},d(e){e&&_(t)}}}function Re(t){let n,s,r,o,i,a=Ne["status-website"]&&Ne["status-website"].logoUrl&&Le(),c=Ne["status-website"]&&Ne["status-website"].navbar&&function(e){let t,n=Ne["status-website"].navbar,s=[];for(let t=0;t<n.length;t+=1)s[t]=Ie(Pe(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=x()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=x()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);v(e,t,n)},p(e,r){if(1&r){let o;for(n=Ne["status-website"].navbar,o=0;o<n.length;o+=1){const i=Pe(e,n,o);s[o]?s[o].p(i,r):(s[o]=Ie(i),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){$(s,e),e&&_(t)}}}(t),l=Ne["status-website"]&&Ne["status-website"].navbarGitHub&&!Ne["status-website"].navbar&&function(t){let n,s,r,o=Ne.i18n.navGitHub+"";return{c(){n=w("li"),s=w("a"),r=E(o),this.h()},l(e){n=O(e,"LI",{});var t=L(n);s=O(t,"A",{href:!0,class:!0});var i=L(s);r=C(i,o),i.forEach(_),t.forEach(_),this.h()},h(){N(s,"href",`https://github.com/${Ne.owner}/${Ne.repo}`),N(s,"class","svelte-a08hsz")},m(e,t){v(e,n,t),g(n,s),g(s,r)},p:e,d(e){e&&_(n)}}}();return{c(){n=w("nav"),s=w("div"),a&&a.c(),r=S(),o=w("ul"),c&&c.c(),i=S(),l&&l.c(),this.h()},l(e){n=O(e,"NAV",{class:!0});var t=L(n);s=O(t,"DIV",{class:!0});var u=L(s);a&&a.l(u),r=U(u),o=O(u,"UL",{class:!0});var f=L(o);c&&c.l(f),i=U(f),l&&l.l(f),f.forEach(_),u.forEach(_),t.forEach(_),this.h()},h(){N(o,"class","svelte-a08hsz"),N(s,"class","container svelte-a08hsz"),N(n,"class","svelte-a08hsz")},m(e,t){v(e,n,t),g(n,s),a&&a.m(s,null),g(s,r),g(s,o),c&&c.m(o,null),g(o,i),l&&l.m(o,null)},p(e,[t]){Ne["status-website"]&&Ne["status-website"].logoUrl&&a.p(e,t),Ne["status-website"]&&Ne["status-website"].navbar&&c.p(e,t),Ne["status-website"]&&Ne["status-website"].navbarGitHub&&!Ne["status-website"].navbar&&l.p(e,t)},i:e,o:e,d(e){e&&_(n),a&&a.d(),c&&c.d(),l&&l.d()}}}function ke(e,t,n){let{segment:s}=t;return e.$$set=e=>{"segment"in e&&n(0,s=e.segment)},[s]}class Oe extends Se{constructor(e){super(),Ee(this,e,ke,Re,i,{segment:0})}}var He={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function Ce(e){return e.replace(RegExp("^"+(e.match(/^(\t| )+/)||"")[0],"gm"),"")}function Ue(e){return(e+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function je(e,t){var n,s,r,o,i,a=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,c=[],l="",u=t||{},f=0;function d(e){var t=He[e[1]||""],n=c[c.length-1]==e;return t?t[1]?(n?c.pop():c.push(e),t[0|n]):t[0]:e}function h(){for(var e="";c.length;)e+=d(c[c.length-1]);return e}for(e=e.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(e,t,n){return u[t.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");r=a.exec(e);)s=e.substring(f,r.index),f=a.lastIndex,n=r[0],s.match(/[^\\](\\\\)*\\$/)||((i=r[3]||r[4])?n='<pre class="code '+(r[4]?"poetry":r[2].toLowerCase())+'"><code'+(r[2]?' class="language-'+r[2].toLowerCase()+'"':"")+">"+Ce(Ue(i).replace(/^\n+|\n+$/g,""))+"</code></pre>":(i=r[6])?(i.match(/\./)&&(r[5]=r[5].replace(/^\d+/gm,"")),o=je(Ce(r[5].replace(/^\s*[>*+.-]/gm,""))),">"==i?i="blockquote":(i=i.match(/\./)?"ol":"ul",o=o.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+i+">"+o+"</"+i+">"):r[8]?n='<img src="'+Ue(r[8])+'" alt="'+Ue(r[7])+'">':r[10]?(l=l.replace("<a>",'<a href="'+Ue(r[11]||u[s.toLowerCase()])+'">'),n=h()+"</a>"):r[9]?n="<a>":r[12]||r[14]?n="<"+(i="h"+(r[14]?r[14].length:r[13]>"="?1:2))+">"+je(r[12]||r[15],u)+"</"+i+">":r[16]?n="<code>"+Ue(r[16])+"</code>":(r[17]||r[1])&&(n=d(r[17]||"--"))),l+=s,l+=n;return(l+e.substring(f)+h()).replace(/^\n+|\n+$/g,"")}function Me(e,t,n){const s=e.slice();return s[3]=t[n],s}function De(e,t,n){const s=e.slice();return s[3]=t[n],s}function Ge(e,t,n){const s=e.slice();return s[8]=t[n],s}function qe(t){let n;return{c(){n=w("link"),this.h()},l(e){n=O(e,"LINK",{rel:!0,href:!0}),this.h()},h(){N(n,"rel","stylesheet"),N(n,"href",`${Ne.path}/themes/${(Ne["status-website"]||{}).theme||"light"}.css`)},m(e,t){v(e,n,t)},p:e,d(e){e&&_(n)}}}function Be(t){let n;return{c(){n=w("link"),this.h()},l(e){n=O(e,"LINK",{rel:!0,href:!0}),this.h()},h(){N(n,"rel","stylesheet"),N(n,"href",(Ne["status-website"]||{}).themeUrl)},m(e,t){v(e,n,t)},p:e,d(e){e&&_(n)}}}function ze(t){let n,s;return{c(){n=w("script"),this.h()},l(e){n=O(e,"SCRIPT",{src:!0}),L(n).forEach(_),this.h()},h(){c(n.src,s=t[8].src)||N(n,"src",s),n.async=!!t[8].async,n.defer=!!t[8].async},m(e,t){v(e,n,t)},p:e,d(e){e&&_(n)}}}function Ke(t){let n;return{c(){n=w("link"),this.h()},l(e){n=O(e,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){N(n,"rel",t[3].rel),N(n,"href",t[3].href),N(n,"media",t[3].media)},m(e,t){v(e,n,t)},p:e,d(e){e&&_(n)}}}function Je(t){let n;return{c(){n=w("meta"),this.h()},l(e){n=O(e,"META",{name:!0,content:!0}),this.h()},h(){N(n,"name",t[3].name),N(n,"content",t[3].content)},m(e,t){v(e,n,t)},p:e,d(e){e&&_(n)}}}function Ve(t){let n,s,r,o,i,a,c,u,f,d,h,p,m,b,y,E,T,A,P=je(Ne.i18n.footer.replace(/\$REPO/,`https://github.com/${Ne.owner}/${Ne.repo}`))+"",I=(Ne["status-website"]||{}).customHeadHtml&&function(t){let n,s,r=(Ne["status-website"]||{}).customHeadHtml+"";return{c(){n=new V(!1),s=x(),this.h()},l(e){n=M(e,!1),s=x(),this.h()},h(){n.a=s},m(e,t){n.m(r,e,t),v(e,s,t)},p:e,d(e){e&&_(s),e&&n.d()}}}();let R=((Ne["status-website"]||{}).themeUrl?Be:qe)(t),k=(Ne["status-website"]||{}).scripts&&function(e){let t,n=(Ne["status-website"]||{}).scripts,s=[];for(let t=0;t<n.length;t+=1)s[t]=ze(Ge(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=x()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=x()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);v(e,t,n)},p(e,r){if(0&r){let o;for(n=(Ne["status-website"]||{}).scripts,o=0;o<n.length;o+=1){const i=Ge(e,n,o);s[o]?s[o].p(i,r):(s[o]=ze(i),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){$(s,e),e&&_(t)}}}(t),H=(Ne["status-website"]||{}).links&&function(e){let t,n=(Ne["status-website"]||{}).links,s=[];for(let t=0;t<n.length;t+=1)s[t]=Ke(De(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=x()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=x()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);v(e,t,n)},p(e,r){if(0&r){let o;for(n=(Ne["status-website"]||{}).links,o=0;o<n.length;o+=1){const i=De(e,n,o);s[o]?s[o].p(i,r):(s[o]=Ke(i),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){$(s,e),e&&_(t)}}}(t),C=(Ne["status-website"]||{}).metaTags&&function(e){let t,n=(Ne["status-website"]||{}).metaTags,s=[];for(let t=0;t<n.length;t+=1)s[t]=Je(Me(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=x()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=x()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);v(e,t,n)},p(e,r){if(0&r){let o;for(n=(Ne["status-website"]||{}).metaTags,o=0;o<n.length;o+=1){const i=Me(e,n,o);s[o]?s[o].p(i,r):(s[o]=Je(i),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){$(s,e),e&&_(t)}}}(t),j=Ne["status-website"].css&&function(t){let n,s,r=`<style>${Ne["status-website"].css}</style>`;return{c(){n=new V(!1),s=x(),this.h()},l(e){n=M(e,!1),s=x(),this.h()},h(){n.a=s},m(e,t){n.m(r,e,t),v(e,s,t)},p:e,d(e){e&&_(s),e&&n.d()}}}(),D=Ne["status-website"].js&&function(t){let n,s,r=`<script>${Ne["status-website"].js}<\/script>`;return{c(){n=new V(!1),s=x(),this.h()},l(e){n=M(e,!1),s=x(),this.h()},h(){n.a=s},m(e,t){n.m(r,e,t),v(e,s,t)},p:e,d(e){e&&_(s),e&&n.d()}}}(),G=(Ne["status-website"]||{}).customBodyHtml&&function(t){let n,s,r=(Ne["status-website"]||{}).customBodyHtml+"";return{c(){n=new V(!1),s=x(),this.h()},l(e){n=M(e,!1),s=x(),this.h()},h(){n.a=s},m(e,t){n.m(r,e,t),v(e,s,t)},p:e,d(e){e&&_(s),e&&n.d()}}}();p=new Oe({props:{segment:t[0]}});const q=t[2].default,B=function(e,t,n,s){if(e){const r=l(e,t,n,s);return e[0](r)}}(q,t,t[1],null);return{c(){I&&I.c(),n=x(),R.c(),s=w("link"),r=w("link"),o=w("link"),k&&k.c(),i=x(),H&&H.c(),a=x(),C&&C.c(),c=x(),j&&j.c(),u=x(),D&&D.c(),f=x(),d=S(),G&&G.c(),h=S(),ve(p.$$.fragment),m=S(),b=w("main"),B&&B.c(),y=S(),E=w("footer"),T=w("p"),this.h()},l(e){const t=K('[data-svelte="svelte-fmspuk"]',document.head);I&&I.l(t),n=x(),R.l(t),s=O(t,"LINK",{rel:!0,href:!0}),r=O(t,"LINK",{rel:!0,type:!0,href:!0}),o=O(t,"LINK",{rel:!0,type:!0,href:!0}),k&&k.l(t),i=x(),H&&H.l(t),a=x(),C&&C.l(t),c=x(),j&&j.l(t),u=x(),D&&D.l(t),f=x(),t.forEach(_),d=U(e),G&&G.l(e),h=U(e),_e(p.$$.fragment,e),m=U(e),b=O(e,"MAIN",{class:!0});var l=L(b);B&&B.l(l),l.forEach(_),y=U(e),E=O(e,"FOOTER",{class:!0});var g=L(E);T=O(g,"P",{}),L(T).forEach(_),g.forEach(_),this.h()},h(){N(s,"rel","stylesheet"),N(s,"href",`${Ne.path}/global.css`),N(r,"rel","icon"),N(r,"type","image/svg"),N(r,"href",(Ne["status-website"]||{}).faviconSvg||(Ne["status-website"]||{}).favicon||"https://raw.githubusercontent.com/upptime/upptime/master/assets/upptime-icon.svg"),N(o,"rel","icon"),N(o,"type","image/png"),N(o,"href",(Ne["status-website"]||{}).favicon||"/logo-192.png"),N(b,"class","container"),N(E,"class","svelte-jbr799")},m(e,t){I&&I.m(document.head,null),g(document.head,n),R.m(document.head,null),g(document.head,s),g(document.head,r),g(document.head,o),k&&k.m(document.head,null),g(document.head,i),H&&H.m(document.head,null),g(document.head,a),C&&C.m(document.head,null),g(document.head,c),j&&j.m(document.head,null),g(document.head,u),D&&D.m(document.head,null),g(document.head,f),v(e,d,t),G&&G.m(e,t),v(e,h,t),$e(p,e,t),v(e,m,t),v(e,b,t),B&&B.m(b,null),v(e,y,t),v(e,E,t),g(E,T),T.innerHTML=P,A=!0},p(e,[t]){(Ne["status-website"]||{}).customHeadHtml&&I.p(e,t),R.p(e,t),(Ne["status-website"]||{}).scripts&&k.p(e,t),(Ne["status-website"]||{}).links&&H.p(e,t),(Ne["status-website"]||{}).metaTags&&C.p(e,t),Ne["status-website"].css&&j.p(e,t),Ne["status-website"].js&&D.p(e,t),(Ne["status-website"]||{}).customBodyHtml&&G.p(e,t);const n={};1&t&&(n.segment=e[0]),p.$set(n),B&&B.p&&(!A||2&t)&&function(e,t,n,s,r,o){if(r){const i=l(t,n,s,o);e.p(i,r)}}(B,q,e,e[1],A?function(e,t,n,s){if(e[2]&&s){const r=e[2](s(n));if(void 0===t.dirty)return r;if("object"==typeof r){const e=[],n=Math.max(t.dirty.length,r.length);for(let s=0;s<n;s+=1)e[s]=t.dirty[s]|r[s];return e}return t.dirty|r}return t.dirty}(q,e[1],t,null):function(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let e=0;e<n;e++)t[e]=-1;return t}return-1}(e[1]),null)},i(e){A||(pe(p.$$.fragment,e),pe(B,e),A=!0)},o(e){me(p.$$.fragment,e),me(B,e),A=!1},d(e){I&&I.d(e),_(n),R.d(e),_(s),_(r),_(o),k&&k.d(e),_(i),H&&H.d(e),_(a),C&&C.d(e),_(c),j&&j.d(e),_(u),D&&D.d(e),_(f),e&&_(d),G&&G.d(e),e&&_(h),we(p,e),e&&_(m),e&&_(b),B&&B.d(e),e&&_(y),e&&_(E)}}}function We(e,t,n){let{$$slots:s={},$$scope:r}=t,{segment:o}=t;return e.$$set=e=>{"segment"in e&&n(0,o=e.segment),"$$scope"in e&&n(1,r=e.$$scope)},[o,r,s]}class Fe extends Se{constructor(e){super(),Ee(this,e,We,Ve,i,{segment:0})}}function Ye(e){let t,n,s=e[1].stack+"";return{c(){t=w("pre"),n=E(s)},l(e){t=O(e,"PRE",{});var r=L(t);n=C(r,s),r.forEach(_)},m(e,s){v(e,t,s),g(t,n)},p(e,t){2&t&&s!==(s=e[1].stack+"")&&D(n,s)},d(e){e&&_(t)}}}function Xe(t){let n,s,r,o,i,a,c,l,u,f=t[1].message+"";document.title=n=t[0];let d=t[2]&&t[1].stack&&Ye(t);return{c(){s=S(),r=w("h1"),o=E(t[0]),i=S(),a=w("p"),c=E(f),l=S(),d&&d.c(),u=x(),this.h()},l(e){K('[data-svelte="svelte-1moakz"]',document.head).forEach(_),s=U(e),r=O(e,"H1",{class:!0});var n=L(r);o=C(n,t[0]),n.forEach(_),i=U(e),a=O(e,"P",{class:!0});var h=L(a);c=C(h,f),h.forEach(_),l=U(e),d&&d.l(e),u=x(),this.h()},h(){N(r,"class","svelte-17w3omn"),N(a,"class","svelte-17w3omn")},m(e,t){v(e,s,t),v(e,r,t),g(r,o),v(e,i,t),v(e,a,t),g(a,c),v(e,l,t),d&&d.m(e,t),v(e,u,t)},p(e,[t]){1&t&&n!==(n=e[0])&&(document.title=n),1&t&&D(o,e[0]),2&t&&f!==(f=e[1].message+"")&&D(c,f),e[2]&&e[1].stack?d?d.p(e,t):(d=Ye(e),d.c(),d.m(u.parentNode,u)):d&&(d.d(1),d=null)},i:e,o:e,d(e){e&&_(s),e&&_(r),e&&_(i),e&&_(a),e&&_(l),d&&d.d(e),e&&_(u)}}}function Qe(e,t,n){let{status:s}=t,{error:r}=t;return e.$$set=e=>{"status"in e&&n(0,s=e.status),"error"in e&&n(1,r=e.error)},[s,r,false]}class Ze extends Se{constructor(e){super(),Ee(this,e,Qe,Xe,i,{status:0,error:1})}}function et(e){let n,s,r;const o=[e[4].props];var i=e[4].component;function a(e){let n={};for(let e=0;e<o.length;e+=1)n=t(n,o[e]);return{props:n}}return i&&(n=new i(a())),{c(){n&&ve(n.$$.fragment),s=x()},l(e){n&&_e(n.$$.fragment,e),s=x()},m(e,t){n&&$e(n,e,t),v(e,s,t),r=!0},p(e,t){const r=16&t?ge(o,[be(e[4].props)]):{};if(i!==(i=e[4].component)){if(n){de();const e=n;me(e.$$.fragment,1,0,(()=>{we(e,1)})),he()}i?(n=new i(a()),ve(n.$$.fragment),pe(n.$$.fragment,1),$e(n,s.parentNode,s)):n=null}else i&&n.$set(r)},i(e){r||(n&&pe(n.$$.fragment,e),r=!0)},o(e){n&&me(n.$$.fragment,e),r=!1},d(e){e&&_(s),n&&we(n,e)}}}function tt(e){let t,n;return t=new Ze({props:{error:e[0],status:e[1]}}),{c(){ve(t.$$.fragment)},l(e){_e(t.$$.fragment,e)},m(e,s){$e(t,e,s),n=!0},p(e,n){const s={};1&n&&(s.error=e[0]),2&n&&(s.status=e[1]),t.$set(s)},i(e){n||(pe(t.$$.fragment,e),n=!0)},o(e){me(t.$$.fragment,e),n=!1},d(e){we(t,e)}}}function nt(e){let t,n,s,r;const o=[tt,et],i=[];function a(e,t){return e[0]?0:1}return t=a(e),n=i[t]=o[t](e),{c(){n.c(),s=x()},l(e){n.l(e),s=x()},m(e,n){i[t].m(e,n),v(e,s,n),r=!0},p(e,r){let c=t;t=a(e),t===c?i[t].p(e,r):(de(),me(i[c],1,1,(()=>{i[c]=null})),he(),n=i[t],n?n.p(e,r):(n=i[t]=o[t](e),n.c()),pe(n,1),n.m(s.parentNode,s))},i(e){r||(pe(n),r=!0)},o(e){me(n),r=!1},d(e){i[t].d(e),e&&_(s)}}}function st(e){let n,s;const r=[{segment:e[2][0]},e[3].props];let o={$$slots:{default:[nt]},$$scope:{ctx:e}};for(let e=0;e<r.length;e+=1)o=t(o,r[e]);return n=new Fe({props:o}),{c(){ve(n.$$.fragment)},l(e){_e(n.$$.fragment,e)},m(e,t){$e(n,e,t),s=!0},p(e,[t]){const s=12&t?ge(r,[4&t&&{segment:e[2][0]},8&t&&be(e[3].props)]):{};147&t&&(s.$$scope={dirty:t,ctx:e}),n.$set(s)},i(e){s||(pe(n.$$.fragment,e),s=!0)},o(e){me(n.$$.fragment,e),s=!1},d(e){we(n,e)}}}function rt(e,t,n){let{stores:s}=t,{error:r}=t,{status:o}=t,{segments:i}=t,{level0:a}=t,{level1:c=null}=t,{notify:l}=t;var u,f;return X(l),u=Ae,f=s,F().$$.context.set(u,f),e.$$set=e=>{"stores"in e&&n(5,s=e.stores),"error"in e&&n(0,r=e.error),"status"in e&&n(1,o=e.status),"segments"in e&&n(2,i=e.segments),"level0"in e&&n(3,a=e.level0),"level1"in e&&n(4,c=e.level1),"notify"in e&&n(6,l=e.notify)},[r,o,i,a,c,s,l]}class ot extends Se{constructor(e){super(),Ee(this,e,rt,st,i,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const it=[],at=[{js:()=>Promise.all([import("./index.57576c00.js"),__inject_styles(["client-0275e36e.css","createOctokit-865318f3.css","index-e08df70b.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.8e656276.js"),__inject_styles(["client-0275e36e.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./_number_.af682f1a.js"),__inject_styles(["client-0275e36e.css","createOctokit-865318f3.css","_number_-a58f5d99.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./_number_.42f26e78.js"),__inject_styles(["client-0275e36e.css","createOctokit-865318f3.css","_number_-9a5d58bf.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./error.f9082890.js"),__inject_styles(["client-0275e36e.css","error-64ad0d96.css"])]).then((function(e){return e[0]}))}],ct=(lt=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:e=>({number:lt(e[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:e=>({number:lt(e[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var lt;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function ut(e,t,n,s){return new(n||(n=Promise))((function(r,o){function i(e){try{c(s.next(e))}catch(e){o(e)}}function a(e){try{c(s.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((s=s.apply(e,t||[])).next())}))}function ft(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}let dt,ht=1;const pt="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},mt={};let gt,bt;function vt(e){const t=Object.create(null);return e.length?(e=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(e).entries()]:e.slice(1).split("&").map((e=>{const[,t,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));return[t,n]})))(e).reduce(((e,[t,n])=>("string"==typeof e[t]&&(e[t]=[e[t]]),"object"==typeof e[t]?e[t].push(n):e[t]=n,e)),t):t}function _t(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(gt))return null;let t=e.pathname.slice(gt.length);if(""===t&&(t="/"),!it.some((e=>e.test(t))))for(let n=0;n<ct.length;n+=1){const s=ct[n],r=s.pattern.exec(t);if(r){const n=vt(e.search),o=s.parts[s.parts.length-1],i=o.params?o.params(r):{},a={host:location.host,path:t,query:n,params:i};return{href:e.href,route:s,match:r,page:a}}}}function $t(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;if(e.defaultPrevented)return;const t=ft(e.target);if(!t)return;if(!t.href)return;const n="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,s=String(n?t.href.baseVal:t.href);if(s===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(n?t.target.baseVal:t.target)return;const r=new URL(s);if(r.pathname===location.pathname&&r.search===location.search)return;const o=_t(r);if(o){Et(o,null,t.hasAttribute("sapper:noscroll"),r.hash),e.preventDefault(),pt.pushState({id:dt},"",r.href)}}function wt(){return{x:pageXOffset,y:pageYOffset}}function yt(e){if(mt[dt]=wt(),e.state){const t=_t(new URL(location.href));t?Et(t,e.state.id):location.href=location.href}else!function(e){ht=e}(ht+1),function(e){dt=e}(ht),pt.replaceState({id:dt},"",location.href)}function Et(e,t,n,s){return ut(this,void 0,void 0,(function*(){const r=!!t;if(r)dt=t;else{const e=wt();mt[dt]=e,dt=t=++ht,mt[dt]=n?e:{x:0,y:0}}if(yield bt(e),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let e,n=mt[t];s&&(e=document.getElementById(s.slice(1)),e&&(n={x:0,y:e.getBoundingClientRect().top+scrollY})),mt[dt]=n,n&&(r||e)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function St(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}let xt,Tt=null;function At(e){const t=ft(e.target);t&&t.hasAttribute("sapper:prefetch")&&function(e){const t=_t(new URL(e,St(document)));if(t)Tt&&e===Tt.href||(Tt={href:e,promise:zt(t)}),Tt.promise}(t.href)}function Nt(e){clearTimeout(xt),xt=setTimeout((()=>{At(e)}),20)}function Pt(e,t={noscroll:!1,replaceState:!1}){const n=_t(new URL(e,St(document)));if(n){const s=Et(n,null,t.noscroll);return pt[t.replaceState?"replaceState":"pushState"]({id:dt},"",e),s}return location.href=e,new Promise((()=>{}))}const Lt="undefined"!=typeof __SAPPER__&&__SAPPER__;let It,Rt,kt,Ot=!1,Ht=[],Ct="{}";const Ut={page:function(e){const t=Te(e);let n=!0;return{notify:function(){n=!0,t.update((e=>e))},set:function(e){n=!1,t.set(e)},subscribe:function(e){let s;return t.subscribe((t=>{(void 0===s||n&&t!==s)&&e(s=t)}))}}}({}),preloading:Te(null),session:Te(Lt&&Lt.session)};let jt,Mt,Dt;function Gt(e,t){const{error:n}=e;return Object.assign({error:n},t)}function qt(e){return ut(this,void 0,void 0,(function*(){It&&Ut.preloading.set(!0);const t=function(e){return Tt&&Tt.href===e.href?Tt.promise:zt(e)}(e),n=Rt={},s=yield t,{redirect:r}=s;if(n===Rt)if(r)yield Pt(r.location,{replaceState:!0});else{const{props:t,branch:n}=s;yield Bt(n,t,Gt(t,e.page))}}))}function Bt(e,t,n){return ut(this,void 0,void 0,(function*(){Ut.page.set(n),Ut.preloading.set(!1),It?It.$set(t):(t.stores={page:{subscribe:Ut.page.subscribe},preloading:{subscribe:Ut.preloading.subscribe},session:Ut.session},t.level0={props:yield kt},t.notify=Ut.page.notify,It=new ot({target:Dt,props:t,hydrate:!0})),Ht=e,Ct=JSON.stringify(n.query),Ot=!0,Mt=!1}))}function zt(e){return ut(this,void 0,void 0,(function*(){const{route:t,page:n}=e,s=n.path.split("/").filter(Boolean);let r=null;const o={error:null,status:200,segments:[s[0]]},i={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(r&&(r.statusCode!==e||r.location!==t))throw new Error("Conflicting redirects");r={statusCode:e,location:t}},error:(e,t)=>{o.error="string"==typeof t?new Error(t):t,o.status=e}};if(!kt){const e=()=>({});kt=Lt.preloaded[0]||e.call(i,{host:n.host,path:n.path,query:n.query,params:{}},jt)}let a,c=1;try{const r=JSON.stringify(n.query),l=t.pattern.exec(n.path);let u=!1;a=yield Promise.all(t.parts.map(((t,a)=>ut(this,void 0,void 0,(function*(){const f=s[a];if(function(e,t,n,s){if(s!==Ct)return!0;const r=Ht[e];return!!r&&(t!==r.segment||!(!r.match||JSON.stringify(r.match.slice(1,e+2))===JSON.stringify(n.slice(1,e+2)))||void 0)}(a,f,l,r)&&(u=!0),o.segments[c]=s[a+1],!t)return{segment:f};const d=c++;let h;if(Mt||u||!Ht[a]||Ht[a].part!==t.i){u=!1;const{default:s,preload:r}=yield at[t.i].js();let o;o=Ot||!Lt.preloaded[a+1]?r?yield r.call(i,{host:n.host,path:n.path,query:n.query,params:t.params?t.params(e.match):{}},jt):{}:Lt.preloaded[a+1],h={component:s,props:o,segment:f,match:l,part:t.i}}else h=Ht[a];return o[`level${d}`]=h})))))}catch(e){o.error=e,o.status=500,a=[]}return{redirect:r,props:o,branch:a}}))}var Kt,Jt,Vt;Ut.session.subscribe((e=>ut(void 0,void 0,void 0,(function*(){if(jt=e,!Ot)return;Mt=!0;const t=_t(new URL(location.href)),n=Rt={},{redirect:s,props:r,branch:o}=yield zt(t);n===Rt&&(s?yield Pt(s.location,{replaceState:!0}):yield Bt(o,r,Gt(r,t.page)))})))),Kt={target:document.querySelector("#sapper")},Jt=Kt.target,Dt=Jt,Vt=Lt.baseUrl,gt=Vt,bt=qt,"scrollRestoration"in pt&&(pt.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{pt.scrollRestoration="auto"})),addEventListener("load",(()=>{pt.scrollRestoration="manual"})),addEventListener("click",$t),addEventListener("popstate",yt),addEventListener("touchstart",At),addEventListener("mousemove",Nt),Lt.error?Promise.resolve().then((()=>function(){const{host:e,pathname:t,search:n}=location,{session:s,preloaded:r,status:o,error:i}=Lt;kt||(kt=r&&r[0]);const a={error:i,status:o,session:s,level0:{props:kt},level1:{props:{status:o,error:i},component:Ze},segments:r},c=vt(n);Bt([],a,{host:e,path:t,query:c,params:{},error:i})}())):Promise.resolve().then((()=>{const{hash:e,href:t}=location;pt.replaceState({id:ht},"",t);const n=_t(new URL(location.href));if(n)return Et(n,ht,!0,e)}));export{D as A,T as B,r as C,ee as D,M as E,c as F,f as G,V as H,q as I,K as J,je as K,y as L,H as M,Pt as N,G as O,A as P,t as Q,P as R,Se as S,ge as T,X as U,Q as V,u as W,be as X,oe as Y,z as Z,S as a,O as b,U as c,L as d,w as e,_ as f,N as g,v as h,Ee as i,de as j,he as k,pe as l,E as m,C as n,Y as o,g as p,e as q,Ne as r,i as s,me as t,x as u,$ as v,ve as w,_e as x,$e as y,we as z};

import __inject_styles from './inject_styles.803b7e80.js';