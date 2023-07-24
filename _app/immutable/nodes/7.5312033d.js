import{s as E,a as M,e as C,c as v,i as w,d,y as G}from"../chunks/scheduler.8d990d37.js";import{S as H,i as L,b as c,d as p,m as _,g as X,c as j,a as l,t as u,e as g}from"../chunks/index.058f026f.js";import{X as D,T as S,u as I,H as N,q as F,r as J,d as K,e as O}from"../chunks/xr.9eb1b8fe.js";import{B as Q}from"../chunks/button-vr.5a80eca5.js";import{e as T,u as R,o as U}from"../chunks/each.d7561281.js";import{C as V}from"../chunks/controllers.6a1fb0ca.js";function z(i,r,$){const t=i.slice();return t[4]=r[$],t[6]=$,t}function W(i){let r,$,t,a;return r=new V({}),t=new N({}),t.$on("pinchstart",i[1]),t.$on("pinchend",i[2]),{c(){c(r.$$.fragment),$=M(),c(t.$$.fragment)},l(e){p(r.$$.fragment,e),$=v(e),p(t.$$.fragment,e)},m(e,f){_(r,e,f),w(e,$,f),_(t,e,f),a=!0},p:G,i(e){a||(l(r.$$.fragment,e),l(t.$$.fragment,e),a=!0)},o(e){u(r.$$.fragment,e),u(t.$$.fragment,e),a=!1},d(e){e&&d($),g(r,e),g(t,e)}}}function Y(i){let r,$,t,a;return r=new S.CircleGeometry({props:{args:[1]}}),t=new S.MeshBasicMaterial({}),{c(){c(r.$$.fragment),$=M(),c(t.$$.fragment)},l(e){p(r.$$.fragment,e),$=v(e),p(t.$$.fragment,e)},m(e,f){_(r,e,f),w(e,$,f),_(t,e,f),a=!0},p:G,i(e){a||(l(r.$$.fragment,e),l(t.$$.fragment,e),a=!0)},o(e){u(r.$$.fragment,e),u(t.$$.fragment,e),a=!1},d(e){e&&d($),g(r,e),g(t,e)}}}function A(i,r){let $,t,a;return t=new S({props:{is:r[4]}}),{key:i,first:null,c(){$=C(),c(t.$$.fragment),this.h()},l(e){$=C(),p(t.$$.fragment,e),this.h()},h(){this.first=$},m(e,f){w(e,$,f),_(t,e,f),a=!0},p(e,f){r=e;const m={};f&1&&(m.is=r[4]),t.$set(m)},i(e){a||(l(t.$$.fragment,e),a=!0)},o(e){u(t.$$.fragment,e),a=!1},d(e){e&&d($),g(t,e)}}}function Z(i){let r,$,t,a,e,f,m,P,o=[],x=new Map,k,y;r=new D({props:{foveation:1,$$slots:{default:[W]},$$scope:{ctx:i}}}),t=new S.Mesh({props:{rotation:[-Math.PI/2,0,0],$$slots:{default:[Y]},$$scope:{ctx:i}}}),e=new S.AmbientLight({}),m=new S.DirectionalLight({});let b=T(i[0]);const q=n=>n[6];for(let n=0;n<b.length;n+=1){let s=z(i,b,n),h=q(s);x.set(h,o[n]=A(h,s))}return{c(){c(r.$$.fragment),$=M(),c(t.$$.fragment),a=M(),c(e.$$.fragment),f=M(),c(m.$$.fragment),P=M();for(let n=0;n<o.length;n+=1)o[n].c();k=C()},l(n){p(r.$$.fragment,n),$=v(n),p(t.$$.fragment,n),a=v(n),p(e.$$.fragment,n),f=v(n),p(m.$$.fragment,n),P=v(n);for(let s=0;s<o.length;s+=1)o[s].l(n);k=C()},m(n,s){_(r,n,s),w(n,$,s),_(t,n,s),w(n,a,s),_(e,n,s),w(n,f,s),_(m,n,s),w(n,P,s);for(let h=0;h<o.length;h+=1)o[h]&&o[h].m(n,s);w(n,k,s),y=!0},p(n,[s]){const h={};s&128&&(h.$$scope={dirty:s,ctx:n}),r.$set(h);const B={};s&128&&(B.$$scope={dirty:s,ctx:n}),t.$set(B),s&1&&(b=T(n[0]),X(),o=R(o,s,q,1,n,b,x,k.parentNode,U,A,k,z),j())},i(n){if(!y){l(r.$$.fragment,n),l(t.$$.fragment,n),l(e.$$.fragment,n),l(m.$$.fragment,n);for(let s=0;s<b.length;s+=1)l(o[s]);y=!0}},o(n){u(r.$$.fragment,n),u(t.$$.fragment,n),u(e.$$.fragment,n),u(m.$$.fragment,n);for(let s=0;s<o.length;s+=1)u(o[s]);y=!1},d(n){n&&(d($),d(a),d(f),d(P),d(k)),g(r,n),g(t,n),g(e,n),g(m,n);for(let s=0;s<o.length;s+=1)o[s].d(n)}}}function ee(i,r,$){const{camera:t}=I();t.current.position.z=1.75,t.current.lookAt(0,1.75,1);let a=[];return[a,m=>{const P=m.target,o=.05,x=new F(o,o,o),k=new J({color:Math.random()*16777215}),y=new K(x,k),b=P.joints["index-finger-tip"];y.position.copy(b.position),y.quaternion.copy(b.quaternion),a.push(y),$(0,a)},()=>{}]}class te extends H{constructor(r){super(),L(this,r,ee,Z,E,{})}}function ne(i){let r,$;return r=new te({}),{c(){c(r.$$.fragment)},l(t){p(r.$$.fragment,t)},m(t,a){_(r,t,a),$=!0},i(t){$||(l(r.$$.fragment,t),$=!0)},o(t){u(r.$$.fragment,t),$=!1},d(t){g(r,t)}}}function re(i){let r,$,t,a;return r=new O({props:{$$slots:{default:[ne]},$$scope:{ctx:i}}}),t=new Q({}),{c(){c(r.$$.fragment),$=M(),c(t.$$.fragment)},l(e){p(r.$$.fragment,e),$=v(e),p(t.$$.fragment,e)},m(e,f){_(r,e,f),w(e,$,f),_(t,e,f),a=!0},p(e,[f]){const m={};f&1&&(m.$$scope={dirty:f,ctx:e}),r.$set(m)},i(e){a||(l(r.$$.fragment,e),l(t.$$.fragment,e),a=!0)},o(e){u(r.$$.fragment,e),u(t.$$.fragment,e),a=!1},d(e){e&&d($),g(r,e),g(t,e)}}}class me extends H{constructor(r){super(),L(this,r,null,re,E,{})}}export{me as component};
