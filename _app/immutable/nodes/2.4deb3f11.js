import{s as C,f,a as A,g as _,h as b,A as E,c as H,d as m,j as d,i as x,x as u,y as v,l as S,m as w}from"../chunks/scheduler.8d990d37.js";import{e as g,u as I,d as M}from"../chunks/each.d7561281.js";import{S as P,i as $}from"../chunks/index.058f026f.js";import{b as j}from"../chunks/paths.c6992d8e.js";function k(r,e,t){const o=r.slice();return o[1]=e[t][0],o[2]=e[t][1],o}function y(r,e){let t,o=e[1]+"",i;return{key:r,first:null,c(){t=f("a"),i=S(o),this.h()},l(s){t=_(s,"A",{href:!0,class:!0});var c=b(t);i=w(c,o),c.forEach(m),this.h()},h(){d(t,"href",j+"/"+e[2]),d(t,"class","block hover:underline"),this.first=t},m(s,c){x(s,t,c),u(t,i)},p(s,c){e=s},d(s){s&&m(t)}}}function q(r){let e,t,o="Demos",i,s=[],c=new Map,h=g(r[0]);const p=a=>a[2];for(let a=0;a<h.length;a+=1){let l=k(r,h,a),n=p(l);c.set(n,s[a]=y(n,l))}return{c(){e=f("main"),t=f("h1"),t.textContent=o,i=A();for(let a=0;a<s.length;a+=1)s[a].c();this.h()},l(a){e=_(a,"MAIN",{class:!0});var l=b(e);t=_(l,"H1",{class:!0,"data-svelte-h":!0}),E(t)!=="svelte-1cv6fnw"&&(t.textContent=o),i=H(l);for(let n=0;n<s.length;n+=1)s[n].l(l);l.forEach(m),this.h()},h(){d(t,"class","font-bold text-xl"),d(e,"class","p-4")},m(a,l){x(a,e,l),u(e,t),u(e,i);for(let n=0;n<s.length;n+=1)s[n]&&s[n].m(e,null)},p(a,[l]){l&1&&(h=g(a[0]),s=I(s,l,p,1,a,h,c,e,M,y,null,k))},i:v,o:v,d(a){a&&m(e);for(let l=0;l<s.length;l+=1)s[l].d()}}}function B(r){return[[["Events","events"],["Custom controller models","models"],["Hands","hands"],["Teleporting","teleport"],["Immersive AR","ar"],["BonkSaber","bonksaber"],["Hand Physics","hand-physics"]]]}class z extends P{constructor(e){super(),$(this,e,B,q,C,{})}}export{z as component};
