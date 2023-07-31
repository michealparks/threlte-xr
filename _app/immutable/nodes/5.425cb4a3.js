import{s as R,a as p,c as h,i as v,d as q,y as H}from"../chunks/scheduler.d099de3d.js";import{S as k,i as y,b as f,d as u,m,a as d,t as _,e as g}from"../chunks/index.5391bafe.js";import{X as M,T as b,u as B,H as S,e as A}from"../chunks/xr.3ffe6951.js";import{B as L}from"../chunks/button-vr.b6044e14.js";import{C as P}from"../chunks/controllers.9f769ef3.js";import{u as E,a as C}from"../chunks/index.be0323b2.js";function T(o){let n,l,t,a;return n=new P({}),n.$on("connected",o[0]),n.$on("disconnected",o[1]),n.$on("select",o[2]),n.$on("selectstart",o[3]),n.$on("selectend",o[4]),n.$on("squeeze",o[5]),n.$on("squeezestart",o[6]),n.$on("squeezeend",o[7]),t=new S({}),t.$on("connected",o[8]),t.$on("disconnected",o[9]),{c(){f(n.$$.fragment),l=p(),f(t.$$.fragment)},l(e){u(n.$$.fragment,e),l=h(e),u(t.$$.fragment,e)},m(e,$){m(n,e,$),v(e,l,$),m(t,e,$),a=!0},p:H,i(e){a||(d(n.$$.fragment,e),d(t.$$.fragment,e),a=!0)},o(e){_(n.$$.fragment,e),_(t.$$.fragment,e),a=!1},d(e){e&&q(l),g(n,e),g(t,e)}}}function D(o){let n,l,t,a;return n=new b.CircleGeometry({props:{args:[1]}}),t=new b.MeshBasicMaterial({}),{c(){f(n.$$.fragment),l=p(),f(t.$$.fragment)},l(e){u(n.$$.fragment,e),l=h(e),u(t.$$.fragment,e)},m(e,$){m(n,e,$),v(e,l,$),m(t,e,$),a=!0},p:H,i(e){a||(d(n.$$.fragment,e),d(t.$$.fragment,e),a=!0)},o(e){_(n.$$.fragment,e),_(t.$$.fragment,e),a=!1},d(e){e&&q(l),g(n,e),g(t,e)}}}function G(o){let n,l,t,a,e,$,i,z;return n=new M({props:{$$slots:{default:[T]},$$scope:{ctx:o}}}),n.$on("sessionstart",o[10]),n.$on("sessionend",o[11]),n.$on("visibilitychange",o[12]),n.$on("inputsourceschange",o[13]),t=new b.Mesh({props:{rotation:[-Math.PI/2,0,0],$$slots:{default:[D]},$$scope:{ctx:o}}}),e=new b.AmbientLight({}),i=new b.DirectionalLight({}),{c(){f(n.$$.fragment),l=p(),f(t.$$.fragment),a=p(),f(e.$$.fragment),$=p(),f(i.$$.fragment)},l(r){u(n.$$.fragment,r),l=h(r),u(t.$$.fragment,r),a=h(r),u(e.$$.fragment,r),$=h(r),u(i.$$.fragment,r)},m(r,c){m(n,r,c),v(r,l,c),m(t,r,c),v(r,a,c),m(e,r,c),v(r,$,c),m(i,r,c),z=!0},p(r,[c]){const w={};c&32768&&(w.$$scope={dirty:c,ctx:r}),n.$set(w);const X={};c&32768&&(X.$$scope={dirty:c,ctx:r}),t.$set(X)},i(r){z||(d(n.$$.fragment,r),d(t.$$.fragment,r),d(e.$$.fragment,r),d(i.$$.fragment,r),z=!0)},o(r){_(n.$$.fragment,r),_(t.$$.fragment,r),_(e.$$.fragment,r),_(i.$$.fragment,r),z=!1},d(r){r&&(q(l),q(a),q($)),g(n,r),g(t,r),g(e,r),g(i,r)}}}function I(o){const{camera:n}=B();return E("select",s=>console.log("useXRControllerEvent",s)),E("squeeze",s=>console.log("useXRControllerEvent",s)),C("connected",s=>console.log("useXRHandEvent",s)),C("pinchstart",s=>console.log("useXRHandEvent",s)),C("pinchend",s=>console.log("useXRHandEvent",s)),n.current.position.z=1.75,n.current.lookAt(0,1.75,1),[s=>console.log("connected:controller",s),s=>console.log("disconnected:controller",s),s=>console.log("select",s),s=>console.log("selectstart",s),s=>console.log("selectend",s),s=>console.log("squeeze",s),s=>console.log("squeezestart",s),s=>console.log("squeezeend",s),s=>console.log("connected:controller",s),s=>console.log("disconnected:controller",s),s=>console.log("sessionstart",s),s=>console.log("sessionend",s),s=>console.log("visibilitychange",s),s=>console.log("inputsourceschange",s)]}class j extends k{constructor(n){super(),y(this,n,I,G,R,{})}}function F(o){let n,l;return n=new j({}),{c(){f(n.$$.fragment)},l(t){u(n.$$.fragment,t)},m(t,a){m(n,t,a),l=!0},i(t){l||(d(n.$$.fragment,t),l=!0)},o(t){_(n.$$.fragment,t),l=!1},d(t){g(n,t)}}}function J(o){let n,l,t,a;return n=new A({props:{$$slots:{default:[F]},$$scope:{ctx:o}}}),t=new L({}),t.$on("click",o[0]),t.$on("error",o[1]),{c(){f(n.$$.fragment),l=p(),f(t.$$.fragment)},l(e){u(n.$$.fragment,e),l=h(e),u(t.$$.fragment,e)},m(e,$){m(n,e,$),v(e,l,$),m(t,e,$),a=!0},p(e,[$]){const i={};$&4&&(i.$$scope={dirty:$,ctx:e}),n.$set(i)},i(e){a||(d(n.$$.fragment,e),d(t.$$.fragment,e),a=!0)},o(e){_(n.$$.fragment,e),_(t.$$.fragment,e),a=!1},d(e){e&&q(l),g(n,e),g(t,e)}}}function K(o){return[t=>console.log("vr button click",t),t=>console.log("vr button error",t)]}class ee extends k{constructor(n){super(),y(this,n,K,J,R,{})}}export{ee as component};