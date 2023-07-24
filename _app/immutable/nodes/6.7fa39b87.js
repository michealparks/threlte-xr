import{s as E,a as M,e as B,c as v,i as w,d as k,y as G}from"../chunks/scheduler.2c057a9d.js";import{S as H,i as L,b as c,d as p,m as _,g as X,c as j,a as m,t as u,e as g}from"../chunks/index.9b7b00d5.js";import{X as D,T as S,u as I,c as N,H as F,r as J,t as K,e as O,f as Q}from"../chunks/xr.6f8fc35a.js";import{B as R}from"../chunks/button-vr.ade700e4.js";import{e as T,u as U,o as V}from"../chunks/each.ed328caf.js";function z(i,r,$){const t=i.slice();return t[4]=r[$],t[6]=$,t}function W(i){let r,$,t,a;return r=new N({}),t=new F({}),t.$on("pinchstart",i[1]),t.$on("pinchend",i[2]),{c(){c(r.$$.fragment),$=M(),c(t.$$.fragment)},l(e){p(r.$$.fragment,e),$=v(e),p(t.$$.fragment,e)},m(e,f){_(r,e,f),w(e,$,f),_(t,e,f),a=!0},p:G,i(e){a||(m(r.$$.fragment,e),m(t.$$.fragment,e),a=!0)},o(e){u(r.$$.fragment,e),u(t.$$.fragment,e),a=!1},d(e){e&&k($),g(r,e),g(t,e)}}}function Y(i){let r,$,t,a;return r=new S.CircleGeometry({props:{args:[1]}}),t=new S.MeshBasicMaterial({}),{c(){c(r.$$.fragment),$=M(),c(t.$$.fragment)},l(e){p(r.$$.fragment,e),$=v(e),p(t.$$.fragment,e)},m(e,f){_(r,e,f),w(e,$,f),_(t,e,f),a=!0},p:G,i(e){a||(m(r.$$.fragment,e),m(t.$$.fragment,e),a=!0)},o(e){u(r.$$.fragment,e),u(t.$$.fragment,e),a=!1},d(e){e&&k($),g(r,e),g(t,e)}}}function A(i,r){let $,t,a;return t=new S({props:{is:r[4]}}),{key:i,first:null,c(){$=B(),c(t.$$.fragment),this.h()},l(e){$=B(),p(t.$$.fragment,e),this.h()},h(){this.first=$},m(e,f){w(e,$,f),_(t,e,f),a=!0},p(e,f){r=e;const l={};f&1&&(l.is=r[4]),t.$set(l)},i(e){a||(m(t.$$.fragment,e),a=!0)},o(e){u(t.$$.fragment,e),a=!1},d(e){e&&k($),g(t,e)}}}function Z(i){let r,$,t,a,e,f,l,P,o=[],x=new Map,d,y;r=new D({props:{foveation:1,$$slots:{default:[W]},$$scope:{ctx:i}}}),t=new S.Mesh({props:{rotation:[-Math.PI/2,0,0],$$slots:{default:[Y]},$$scope:{ctx:i}}}),e=new S.AmbientLight({}),l=new S.DirectionalLight({});let b=T(i[0]);const C=n=>n[6];for(let n=0;n<b.length;n+=1){let s=z(i,b,n),h=C(s);x.set(h,o[n]=A(h,s))}return{c(){c(r.$$.fragment),$=M(),c(t.$$.fragment),a=M(),c(e.$$.fragment),f=M(),c(l.$$.fragment),P=M();for(let n=0;n<o.length;n+=1)o[n].c();d=B()},l(n){p(r.$$.fragment,n),$=v(n),p(t.$$.fragment,n),a=v(n),p(e.$$.fragment,n),f=v(n),p(l.$$.fragment,n),P=v(n);for(let s=0;s<o.length;s+=1)o[s].l(n);d=B()},m(n,s){_(r,n,s),w(n,$,s),_(t,n,s),w(n,a,s),_(e,n,s),w(n,f,s),_(l,n,s),w(n,P,s);for(let h=0;h<o.length;h+=1)o[h]&&o[h].m(n,s);w(n,d,s),y=!0},p(n,[s]){const h={};s&128&&(h.$$scope={dirty:s,ctx:n}),r.$set(h);const q={};s&128&&(q.$$scope={dirty:s,ctx:n}),t.$set(q),s&1&&(b=T(n[0]),X(),o=U(o,s,C,1,n,b,x,d.parentNode,V,A,d,z),j())},i(n){if(!y){m(r.$$.fragment,n),m(t.$$.fragment,n),m(e.$$.fragment,n),m(l.$$.fragment,n);for(let s=0;s<b.length;s+=1)m(o[s]);y=!0}},o(n){u(r.$$.fragment,n),u(t.$$.fragment,n),u(e.$$.fragment,n),u(l.$$.fragment,n);for(let s=0;s<o.length;s+=1)u(o[s]);y=!1},d(n){n&&(k($),k(a),k(f),k(P),k(d)),g(r,n),g(t,n),g(e,n),g(l,n);for(let s=0;s<o.length;s+=1)o[s].d(n)}}}function ee(i,r,$){const{camera:t}=I();t.current.position.z=1.75,t.current.lookAt(0,1.75,1);let a=[];return[a,l=>{const P=l.target,o=.05,x=new J(o,o,o),d=new K({color:Math.random()*16777215}),y=new O(x,d),b=P.joints["index-finger-tip"];y.position.copy(b.position),y.quaternion.copy(b.quaternion),a.push(y),$(0,a)},()=>{}]}class te extends H{constructor(r){super(),L(this,r,ee,Z,E,{})}}function ne(i){let r,$;return r=new te({}),{c(){c(r.$$.fragment)},l(t){p(r.$$.fragment,t)},m(t,a){_(r,t,a),$=!0},i(t){$||(m(r.$$.fragment,t),$=!0)},o(t){u(r.$$.fragment,t),$=!1},d(t){g(r,t)}}}function re(i){let r,$,t,a;return r=new Q({props:{$$slots:{default:[ne]},$$scope:{ctx:i}}}),t=new R({}),{c(){c(r.$$.fragment),$=M(),c(t.$$.fragment)},l(e){p(r.$$.fragment,e),$=v(e),p(t.$$.fragment,e)},m(e,f){_(r,e,f),w(e,$,f),_(t,e,f),a=!0},p(e,[f]){const l={};f&1&&(l.$$scope={dirty:f,ctx:e}),r.$set(l)},i(e){a||(m(r.$$.fragment,e),m(t.$$.fragment,e),a=!0)},o(e){u(r.$$.fragment,e),u(t.$$.fragment,e),a=!1},d(e){e&&k($),g(r,e),g(t,e)}}}class ie extends H{constructor(r){super(),L(this,r,null,re,E,{})}}export{ie as component};
