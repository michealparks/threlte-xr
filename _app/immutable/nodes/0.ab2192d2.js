import{s as j,r as E,f as g,a as w,g as v,h as y,d as _,c as A,j as f,i as p,u as M,v as O,w as V,l as q,m as z,x as C}from"../chunks/scheduler.2c057a9d.js";import{S as D,i as I,a as L,t as N}from"../chunks/index.9b7b00d5.js";import{e as k,u as P,d as T}from"../chunks/each.ed328caf.js";const W=!1,x=!0,K=Object.freeze(Object.defineProperty({__proto__:null,prerender:x,ssr:W},Symbol.toStringTag,{value:"Module"}));function $(o,s,t){const i=o.slice();return i[3]=s[t][0],i[4]=s[t][1],i}function S(o,s){let t,i=s[3]+"",c;return{key:o,first:null,c(){t=g("a"),c=q(i),this.h()},l(l){t=v(l,"A",{href:!0,target:!0,class:!0});var r=y(t);c=z(r,i),r.forEach(_),this.h()},h(){f(t,"href",s[4]),f(t,"target",s[4].startsWith("http")?"_tab":"_self"),f(t,"class","hover:underline"),this.first=t},m(l,r){p(l,t,r),C(t,c)},p(l,r){s=l},d(l){l&&_(t)}}}function B(o){let s,t=[],i=new Map,c,l,r,h=k(o[0]);const b=e=>e[4];for(let e=0;e<h.length;e+=1){let a=$(o,h,e),u=b(a);i.set(u,t[e]=S(u,a))}const d=o[2].default,n=E(d,o,o[1],null);return{c(){s=g("nav");for(let e=0;e<t.length;e+=1)t[e].c();c=w(),l=g("div"),n&&n.c(),this.h()},l(e){s=v(e,"NAV",{class:!0});var a=y(s);for(let m=0;m<t.length;m+=1)t[m].l(a);a.forEach(_),c=A(e),l=v(e,"DIV",{class:!0});var u=y(l);n&&n.l(u),u.forEach(_),this.h()},h(){f(s,"class","bg-gray-100 p-2 flex gap-2"),f(l,"class","h-[calc(100vh-40px)]")},m(e,a){p(e,s,a);for(let u=0;u<t.length;u+=1)t[u]&&t[u].m(s,null);p(e,c,a),p(e,l,a),n&&n.m(l,null),r=!0},p(e,[a]){a&1&&(h=k(e[0]),t=P(t,a,b,1,e,h,i,s,T,S,null,$)),n&&n.p&&(!r||a&2)&&M(n,d,e,e[1],r?V(d,e[1],a,null):O(e[1]),null)},i(e){r||(L(n,e),r=!0)},o(e){N(n,e),r=!1},d(e){e&&(_(s),_(c),_(l));for(let a=0;a<t.length;a+=1)t[a].d();n&&n.d(e)}}}function F(o,s,t){let{$$slots:i={},$$scope:c}=s;const l=[["threlte-xr","/"],["github","https://github.com/michealparks/threlte-xr"]];return o.$$set=r=>{"$$scope"in r&&t(1,c=r.$$scope)},[l,c,i]}class Q extends D{constructor(s){super(),I(this,s,F,B,j,{})}}export{Q as component,K as universal};
