"use strict";(self.webpackChunkcata_guide=self.webpackChunkcata_guide||[]).push([[409],{7949:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=r(4848),a=r(8453);r(1470),r(9365);const s={sidebar_position:6,title:"\u0421\u0438\u043d\u0435\u0441\u0442\u0440\u0430",description:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0438 \u0442\u0430\u043a\u0442\u0438\u043a\u0430 \u043d\u0430 \u0421\u0438\u043d\u0435\u0441\u0442\u0440\u0443.",image:"/img/bot/Sinestra/Sinestra.jpg"},o=void 0,i={id:"bot/Sinestra",title:"\u0421\u0438\u043d\u0435\u0441\u0442\u0440\u0430",description:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0438 \u0442\u0430\u043a\u0442\u0438\u043a\u0430 \u043d\u0430 \u0421\u0438\u043d\u0435\u0441\u0442\u0440\u0443.",source:"@site/docs/bot/Sinestra.md",sourceDirName:"bot",slug:"/bot/Sinestra",permalink:"/Cata_guide/docs/bot/Sinestra",draft:!1,unlisted:!1,editUrl:"https://github.com/adeptsofcataclysm/Cata_guide/tree/source/docs/bot/Sinestra.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"\u0421\u0438\u043d\u0435\u0441\u0442\u0440\u0430",description:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0438 \u0442\u0430\u043a\u0442\u0438\u043a\u0430 \u043d\u0430 \u0421\u0438\u043d\u0435\u0441\u0442\u0440\u0443.",image:"/img/bot/Sinestra/Sinestra.jpg"},sidebar:"bot",previous:{title:"\u0427\u043e'\u0433\u0430\u043b\u043b",permalink:"/Cata_guide/docs/bot/Chogal"}},u={},l=[];function c(e){const t={img:"img",p:"p",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"text--center",children:(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Drakonia_milfa",src:r(8348).A+"",width:"700",height:"530"})})}),"\n",(0,n.jsx)("div",{className:"text--center",children:(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"wip",src:r(7568).A+"",width:"459",height:"400"})})})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},9365:(e,t,r)=>{r.d(t,{A:()=>o});r(6540);var n=r(4164);const a={tabItem:"tabItem_Ymn6"};var s=r(4848);function o(e){let{children:t,hidden:r,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,o),hidden:r,children:t})}},1470:(e,t,r)=>{r.d(t,{A:()=>j});var n=r(6540),a=r(4164),s=r(3104),o=r(6347),i=r(205),u=r(7485),l=r(1682),c=r(9466);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,l.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function b(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const a=(0,o.W6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,s=p(e),[o,u]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[l,d]=f({queryString:r,groupId:a}),[m,h]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),g=(()=>{const e=l??m;return b({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{g&&u(g)}),[g]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!b({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),h(e)}),[d,h,s]),tabValues:s}}var h=r(2303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(4848);function x(e){let{className:t,block:r,selectedValue:n,selectValue:o,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.a_)(),c=e=>{const t=e.currentTarget,r=u.indexOf(t),a=i[r].value;a!==n&&(l(t),o(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:i.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>u.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function w(e){let{lazy:t,children:r,selectedValue:a}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=m(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,v.jsx)(x,{...e,...t}),(0,v.jsx)(w,{...e,...t})]})}function j(e){const t=(0,h.A)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(t))}},8348:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/Sinestra-1b9708dffb3eb61f5987fad82c3ebc71.png"},7568:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/work-in-progress-3f26e577304983506f5eaf775e95a908.png"},8453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>i});var n=r(6540);const a={},s=n.createContext(a);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);