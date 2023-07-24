import{H as Fe,s as F,r as Y,u as Z,v as J,w as K,I as Ae,p as O,a as z,c as I,i as k,G as ae,d as B,y as W,z as te,J as Te,B as j,C as x,D as Ce,F as He,e as D,K as Ue}from"../chunks/scheduler.8d990d37.js";import{S as T,i as H,a as m,t as g,f as ie,b as p,d,m as h,e as b,g as ne,c as re}from"../chunks/index.058f026f.js";import{w as Le,H as Qe,V as R,b as Pe,T as C,Q as ze,S as Xe,f as ue,D as ce,M as fe,g as Ie,a as Se,X as je,u as qe,h as Oe,e as Ye}from"../chunks/xr.9eb1b8fe.js";import{B as Ze}from"../chunks/button-vr.5a80eca5.js";import{R as ee,u as Je,C as se,W as Ke,D as ve}from"../chunks/Collider.9a12e3df.js";import{C as xe}from"../chunks/controllers.6a1fb0ca.js";import{e as q,u as Re,o as Ve}from"../chunks/each.d7561281.js";import{P as et}from"../chunks/PositionMesh.8503d296.js";import{w as Ge}from"../chunks/index.27ef76fe.js";const le=()=>{const o=Fe(),n=Ge(void 0);return Le(n,s=>{s&&Object.entries(o.$$.callbacks).forEach(t=>{const[r,e]=t;r in s.$$.callbacks&&Array.isArray(s.$$.callbacks[r])?s.$$.callbacks[r].push(...e):s.$$.callbacks[r]=e})}),n},$e=(o,n,s)=>{if(o!==void 0){const r=o;return r.reduce((f,a)=>f|1<<a,0)|r.reduce((f,a)=>f|1<<a+16,0)}return s.reduce((r,e)=>r|1<<e,0)|n.reduce((r,e)=>r|1<<e+16,0)};function tt(o){let n;const s=o[4].default,t=Y(s,o,o[3],null);return{c(){t&&t.c()},l(r){t&&t.l(r)},m(r,e){t&&t.m(r,e),n=!0},p(r,[e]){t&&t.p&&(!n||e&8)&&Z(t,s,r,r[3],n?K(s,r[3],e,null):J(r[3]),null)},i(r){n||(m(t,r),n=!0)},o(r){g(t,r),n=!1},d(r){t&&t.d(r)}}}function nt(o,n,s){let{$$slots:t={},$$scope:r}=n,{groups:e=void 0}=n,{filter:f=void 0}=n,{memberships:a=void 0}=n;const i=Ge($e(e,f,a));return Ae("threlte-rapier-collision-group",i),o.$$set=u=>{"groups"in u&&s(0,e=u.groups),"filter"in u&&s(1,f=u.filter),"memberships"in u&&s(2,a=u.memberships),"$$scope"in u&&s(3,r=u.$$scope)},o.$$.update=()=>{o.$$.dirty&7&&i.set($e(e,f,a))},[e,f,a,r,t]}class rt extends T{constructor(n){super(),H(this,n,nt,tt,F,{groups:0,filter:1,memberships:2})}}function st(o){let n,s,t,r;return n=new C.CylinderGeometry({props:{args:[E,E,N]}}),t=new C.MeshPhongMaterial({props:{color:"red"}}),{c(){p(n.$$.fragment),s=z(),p(t.$$.fragment)},l(e){d(n.$$.fragment,e),s=I(e),d(t.$$.fragment,e)},m(e,f){h(n,e,f),k(e,s,f),h(t,e,f),r=!0},p:W,i(e){r||(m(n.$$.fragment,e),m(t.$$.fragment,e),r=!0)},o(e){g(n.$$.fragment,e),g(t.$$.fragment,e),r=!1},d(e){e&&B(s),b(n,e),b(t,e)}}}function ft(o){let n,s;return n=new C.Mesh({props:{slot:"left","rotation.x":Math.PI/2,"position.z":-N/2,$$slots:{default:[st]},$$scope:{ctx:o}}}),n.$on("create",o[5]),{c(){p(n.$$.fragment)},l(t){d(n.$$.fragment,t)},m(t,r){h(n,t,r),s=!0},p(t,r){const e={};r&8192&&(e.$$scope={dirty:r,ctx:t}),n.$set(e)},i(t){s||(m(n.$$.fragment,t),s=!0)},o(t){g(n.$$.fragment,t),s=!1},d(t){b(n,t)}}}function ot(o){let n,s,t,r;return n=new C.CylinderGeometry({props:{args:[E,E,N]}}),t=new C.MeshStandardMaterial({props:{roughness:0,color:"red"}}),{c(){p(n.$$.fragment),s=z(),p(t.$$.fragment)},l(e){d(n.$$.fragment,e),s=I(e),d(t.$$.fragment,e)},m(e,f){h(n,e,f),k(e,s,f),h(t,e,f),r=!0},p:W,i(e){r||(m(n.$$.fragment,e),m(t.$$.fragment,e),r=!0)},o(e){g(n.$$.fragment,e),g(t.$$.fragment,e),r=!1},d(e){e&&B(s),b(n,e),b(t,e)}}}function at(o){let n,s;return n=new C.Mesh({props:{slot:"right","rotation.x":Math.PI/2,"position.z":-N/2,$$slots:{default:[ot]},$$scope:{ctx:o}}}),n.$on("create",o[4]),{c(){p(n.$$.fragment)},l(t){d(n.$$.fragment,t)},m(t,r){h(n,t,r),s=!0},p(t,r){const e={};r&8192&&(e.$$scope={dirty:r,ctx:t}),n.$set(e)},i(t){s||(m(n.$$.fragment,t),s=!0)},o(t){g(n.$$.fragment,t),s=!1},d(t){b(n,t)}}}function it(o){let n,s,t,r;return n=new C.CylinderGeometry({props:{args:[E,E,N]}}),t=new C.MeshStandardMaterial({props:{roughness:0,color:"red"}}),{c(){p(n.$$.fragment),s=z(),p(t.$$.fragment)},l(e){d(n.$$.fragment,e),s=I(e),d(t.$$.fragment,e)},m(e,f){h(n,e,f),k(e,s,f),h(t,e,f),r=!0},p:W,i(e){r||(m(n.$$.fragment,e),m(t.$$.fragment,e),r=!0)},o(e){g(n.$$.fragment,e),g(t.$$.fragment,e),r=!1},d(e){e&&B(s),b(n,e),b(t,e)}}}function lt(o){let n,s;return n=new C.Mesh({props:{slot:"left","rotation.x":Math.PI/2,"position.z":-N/2,$$slots:{default:[it]},$$scope:{ctx:o}}}),n.$on("create",o[7]),{c(){p(n.$$.fragment)},l(t){d(n.$$.fragment,t)},m(t,r){h(n,t,r),s=!0},p(t,r){const e={};r&8192&&(e.$$scope={dirty:r,ctx:t}),n.$set(e)},i(t){s||(m(n.$$.fragment,t),s=!0)},o(t){g(n.$$.fragment,t),s=!1},d(t){b(n,t)}}}function ut(o){let n,s,t,r;return n=new C.CylinderGeometry({props:{args:[E,E,N]}}),t=new C.MeshPhongMaterial({props:{color:"red"}}),{c(){p(n.$$.fragment),s=z(),p(t.$$.fragment)},l(e){d(n.$$.fragment,e),s=I(e),d(t.$$.fragment,e)},m(e,f){h(n,e,f),k(e,s,f),h(t,e,f),r=!0},p:W,i(e){r||(m(n.$$.fragment,e),m(t.$$.fragment,e),r=!0)},o(e){g(n.$$.fragment,e),g(t.$$.fragment,e),r=!1},d(e){e&&B(s),b(n,e),b(t,e)}}}function ct(o){let n,s;return n=new C.Mesh({props:{slot:"right","rotation.x":Math.PI/2,"position.z":-N/2,$$slots:{default:[ut]},$$scope:{ctx:o}}}),n.$on("create",o[6]),{c(){p(n.$$.fragment)},l(t){d(n.$$.fragment,t)},m(t,r){h(n,t,r),s=!0},p(t,r){const e={};r&8192&&(e.$$scope={dirty:r,ctx:t}),n.$set(e)},i(t){s||(m(n.$$.fragment,t),s=!0)},o(t){g(n.$$.fragment,t),s=!1},d(t){b(n,t)}}}function $t(o){let n,s;return n=new se({props:{shape:"capsule",args:[N/2,E]}}),{c(){p(n.$$.fragment)},l(t){d(n.$$.fragment,t)},m(t,r){h(n,t,r),s=!0},p:W,i(t){s||(m(n.$$.fragment,t),s=!0)},o(t){g(n.$$.fragment,t),s=!1},d(t){b(n,t)}}}function mt(o){let n,s;return n=new se({props:{shape:"capsule",args:[N/2,E]}}),{c(){p(n.$$.fragment)},l(t){d(n.$$.fragment,t)},m(t,r){h(n,t,r),s=!0},p:W,i(t){s||(m(n.$$.fragment,t),s=!0)},o(t){g(n.$$.fragment,t),s=!1},d(t){b(n,t)}}}function gt(o){let n,s,t,r,e,f,a,i,u,M;n=new xe({props:{$$slots:{right:[at],left:[ft]},$$scope:{ctx:o}}}),t=new Qe({props:{$$slots:{right:[ct],left:[lt]},$$scope:{ctx:o}}});function l($){o[8]($)}let c={type:"kinematicPosition",$$slots:{default:[$t]},$$scope:{ctx:o}};o[0]!==void 0&&(c.rigidBody=o[0]),e=new ee({props:c}),O.push(()=>ie(e,"rigidBody",l));function w($){o[9]($)}let A={type:"kinematicPosition",$$slots:{default:[mt]},$$scope:{ctx:o}};return o[1]!==void 0&&(A.rigidBody=o[1]),i=new ee({props:A}),O.push(()=>ie(i,"rigidBody",w)),{c(){p(n.$$.fragment),s=z(),p(t.$$.fragment),r=z(),p(e.$$.fragment),a=z(),p(i.$$.fragment)},l($){d(n.$$.fragment,$),s=I($),d(t.$$.fragment,$),r=I($),d(e.$$.fragment,$),a=I($),d(i.$$.fragment,$)},m($,_){h(n,$,_),k($,s,_),h(t,$,_),k($,r,_),h(e,$,_),k($,a,_),h(i,$,_),M=!0},p($,[_]){const S={};_&8196&&(S.$$scope={dirty:_,ctx:$}),n.$set(S);const V={};_&8200&&(V.$$scope={dirty:_,ctx:$}),t.$set(V);const U={};_&8192&&(U.$$scope={dirty:_,ctx:$}),!f&&_&1&&(f=!0,U.rigidBody=$[0],ae(()=>f=!1)),e.$set(U);const y={};_&8192&&(y.$$scope={dirty:_,ctx:$}),!u&&_&2&&(u=!0,y.rigidBody=$[1],ae(()=>u=!1)),i.$set(y)},i($){M||(m(n.$$.fragment,$),m(t.$$.fragment,$),m(e.$$.fragment,$),m(i.$$.fragment,$),M=!0)},o($){g(n.$$.fragment,$),g(t.$$.fragment,$),g(e.$$.fragment,$),g(i.$$.fragment,$),M=!1},d($){$&&(B(s),B(r),B(a)),b(n,$),b(t,$),b(e,$),b(i,$)}}}const E=.02,N=1.4;function _t(o,n,s){const{isHandTracking:t}=Je();let r,e;const f={left:void 0,right:void 0},a={left:void 0,right:void 0},i=new R,u=new ze;Pe(()=>{const _=t.current?a.left:f.left,S=t.current?a.right:f.right;_&&(r.setTranslation(_.getWorldPosition(i),!0),r.setRotation(_.getWorldQuaternion(u),!0)),S&&(e.setTranslation(S.getWorldPosition(i),!0),e.setRotation(S.getWorldQuaternion(u),!0))});const M=({ref:_})=>s(2,f.right=_,f),l=({ref:_})=>s(2,f.left=_,f),c=({ref:_})=>s(3,a.right=_,a),w=({ref:_})=>s(3,a.left=_,a);function A(_){r=_,s(0,r)}function $(_){e=_,s(1,e)}return[r,e,f,a,M,l,c,w,A,$]}class pt extends T{constructor(n){super(),H(this,n,_t,gt,F,{})}}const oe=(1+1e-10)*100,me=o=>`${~~(o.x*oe)},${~~(o.y*oe)},${~~(o.z*oe)}`,dt=(o,n=Math.PI)=>{const s=Math.cos(n),t=[new R,new R,new R],r=new R,e=new R,f=new R,a=new R,i=o.getAttribute("position"),u=o.getAttribute("normal"),M={};for(let l=0,c=i.count/3;l<c;l+=1){const w=3*l;t.forEach(($,_)=>$.fromBufferAttribute(i,w+_)),r.subVectors(t[2],t[1]),e.subVectors(t[0],t[1]);const A=new R().crossVectors(r,e).normalize();t.forEach($=>{var S;const _=me($);M[_]||(M[_]=[]),(S=M[_])==null||S.push(A)})}for(let l=0,c=i.count/3;l<c;l+=1){const w=3*l;t.forEach((A,$)=>A.fromBufferAttribute(i,w+$)),r.subVectors(t[2],t[1]),e.subVectors(t[0],t[1]),f.crossVectors(r,e).normalize(),t.forEach((A,$)=>{var S;const _=me(A);a.set(0,0,0),(S=M[_])==null||S.forEach(V=>{f.dot(V)>s&&a.add(V)}),a.normalize(),u.setXYZ(w+$,a.x,a.y,a.z)})}return o.setAttribute("normal",u),o},ht=o=>({ref:o&131072}),ge=o=>({ref:o[17]});function bt(o){let n;const s=o[12].default,t=Y(s,o,o[15],ge);return{c(){t&&t.c()},l(r){t&&t.l(r)},m(r,e){t&&t.m(r,e),n=!0},p(r,e){t&&t.p&&(!n||e&163840)&&Z(t,s,r,r[15],n?K(s,r[15],e,ht):J(r[15]),ge)},i(r){n||(m(t,r),n=!0)},o(r){g(t,r),n=!1},d(r){t&&t.d(r)}}}function wt(o){let n,s,t={args:[o[2],o[1]],$$slots:{default:[bt,({ref:r})=>({17:r}),({ref:r})=>r?131072:0]},$$scope:{ctx:o}};return n=new C.ExtrudeGeometry({props:t}),o[13](n),n.$on("create",o[14]),{c(){p(n.$$.fragment)},l(r){d(n.$$.fragment,r)},m(r,e){h(n,r,e),s=!0},p(r,[e]){const f={};e&6&&(f.args=[r[2],r[1]]),e&163840&&(f.$$scope={dirty:e,ctx:r}),n.$set(f)},i(r){s||(m(n.$$.fragment,r),s=!0)},o(r){g(n.$$.fragment,r),s=!1},d(r){o[13](null),b(n,r)}}}const G=1e-5;function Mt(o,n,s){let t,r,e,f,a,i,{$$slots:u={},$$scope:M}=n;const l=le();te(o,l,y=>s(3,i=y));let{args:c=[]}=n,{radius:w=.05}=n,{smoothness:A=4}=n,{creaseAngle:$=.4}=n,{steps:_=1}=n;const S=(y,P,Q)=>{const L=new Xe,v=Q-G;return L.absarc(G,G,G,-Math.PI/2,-Math.PI,!0),L.absarc(G,P-v*2,G,Math.PI,Math.PI/2,!0),L.absarc(y-v*2,P-v*2,G,Math.PI/2,0,!0),L.absarc(y-v*2,G,G,0,-Math.PI/2,!0),L};function V(y){O[y?"unshift":"push"](()=>{i=y,l.set(i)})}const U=({ref:y})=>{y.center(),dt(y,$)};return o.$$set=y=>{"args"in y&&s(5,c=y.args),"radius"in y&&s(6,w=y.radius),"smoothness"in y&&s(7,A=y.smoothness),"creaseAngle"in y&&s(0,$=y.creaseAngle),"steps"in y&&s(8,_=y.steps),"$$scope"in y&&s(15,M=y.$$scope)},o.$$.update=()=>{o.$$.dirty&32&&s(11,t=c[0]??1),o.$$.dirty&32&&s(10,r=c[1]??1),o.$$.dirty&32&&s(9,e=c[2]??1),o.$$.dirty&3136&&s(2,f=S(t,r,w)),o.$$.dirty&960&&s(1,a={depth:e-w*2,bevelEnabled:!0,bevelSegments:A*2,steps:_,bevelSize:w-G,bevelThickness:w,curveSegments:A})},[$,a,f,i,l,c,w,A,_,e,r,t,u,V,U,M]}class yt extends T{constructor(n){super(),H(this,n,Mt,wt,F,{args:5,radius:6,smoothness:7,creaseAngle:0,steps:8})}}const De=o=>`threlte-instanced-mesh-${o}`,kt=(o,n)=>{const s={instancedMesh:ue(o),addInstance(t){s.instances.update(r=>(r.push(t),r))},removeInstance(t){s.instances.update(r=>{const e=r.indexOf(t);return e>-1&&r.splice(e,1),r})},instances:ue([])};return Ae(De(n),s),s},Bt=o=>{const n=Te(De(o));if(!n)throw new Error(`No <InstancedMesh> component found for id ${o}`);return n};function At(o){let n,s,t,r,e;n=new C.InstancedBufferAttribute({props:{attach:"instanceMatrix",count:o[1].length/16,array:o[1],itemSize:16,usage:ce}}),t=new C.InstancedBufferAttribute({props:{attach:"instanceColor",count:o[2].length/3,array:o[2],itemSize:3,usage:ce}});const f=o[9].default,a=Y(f,o,o[8],null);return{c(){p(n.$$.fragment),s=z(),p(t.$$.fragment),r=z(),a&&a.c()},l(i){d(n.$$.fragment,i),s=I(i),d(t.$$.fragment,i),r=I(i),a&&a.l(i)},m(i,u){h(n,i,u),k(i,s,u),h(t,i,u),k(i,r,u),a&&a.m(i,u),e=!0},p(i,[u]){a&&a.p&&(!e||u&256)&&Z(a,f,i,i[8],e?K(f,i[8],u,null):J(i[8]),null)},i(i){e||(m(n.$$.fragment,i),m(t.$$.fragment,i),m(a,i),e=!0)},o(i){g(n.$$.fragment,i),g(t.$$.fragment,i),g(a,i),e=!1},d(i){i&&(B(s),B(r)),b(n,i),b(t,i),a&&a.d(i)}}}function Ct(o,n,s){let t,{$$slots:r={},$$scope:e}=n,{instancedMesh:f}=n,{id:a}=n,{limit:i}=n,{range:u}=n,{update:M}=n;const{instances:l}=kt(f,a);te(o,l,P=>s(11,t=P));const c=new fe,w=new Float32Array(i*16);for(let P=0;P<i;P++)c.identity().toArray(w,P*16);const A=new Float32Array([...new Array(i*3)].map(()=>1)),$=new fe,_=new fe,S=new R,V=new ze,U=new R;let y=!1;return Pe(()=>{if(f.updateMatrix(),M||!y){f.updateMatrixWorld(),$.copy(f.matrixWorld).invert();const P=Math.min(i,u!==void 0?u:i,t.length);s(3,f.count=P,f),s(3,f.instanceMatrix.updateRange.count=P*16,f),f.instanceColor&&s(3,f.instanceColor.updateRange.count=P*3,f),f.instanceColor&&s(3,f.instanceColor.needsUpdate=!0,f),s(3,f.instanceMatrix.needsUpdate=!0,f);for(let Q=0;Q<l.current.length;Q++){const L=l.current[Q];L.matrixWorld.decompose(S,V,U),_.compose(S,V,U).premultiply($),_.toArray(w,Q*16),L.color.toArray(A,Q*3)}y=!0}}),o.$$set=P=>{"instancedMesh"in P&&s(3,f=P.instancedMesh),"id"in P&&s(4,a=P.id),"limit"in P&&s(5,i=P.limit),"range"in P&&s(6,u=P.range),"update"in P&&s(7,M=P.update),"$$scope"in P&&s(8,e=P.$$scope)},[l,w,A,f,a,i,u,M,e,r]}class Pt extends T{constructor(n){super(),H(this,n,Ct,At,F,{instancedMesh:3,id:4,limit:5,range:6,update:7})}}const zt=o=>({ref:o&2048}),_e=o=>({ref:o[11]});function It(o){let n;const s=o[8].default,t=Y(s,o,o[10],_e);return{c(){t&&t.c()},l(r){t&&t.l(r)},m(r,e){t&&t.m(r,e),n=!0},p(r,e){t&&t.p&&(!n||e&3072)&&Z(t,s,r,r[10],n?K(s,r[10],e,zt):J(r[10]),_e)},i(r){n||(m(t,r),n=!0)},o(r){g(t,r),n=!1},d(r){t&&t.d(r)}}}function St(o){let n,s;return n=new Pt({props:{instancedMesh:o[11],id:o[0],limit:o[1],range:o[2],update:o[3],$$slots:{default:[It]},$$scope:{ctx:o}}}),{c(){p(n.$$.fragment)},l(t){d(n.$$.fragment,t)},m(t,r){h(n,t,r),s=!0},p(t,r){const e={};r&2048&&(e.instancedMesh=t[11]),r&1&&(e.id=t[0]),r&2&&(e.limit=t[1]),r&4&&(e.range=t[2]),r&8&&(e.update=t[3]),r&3072&&(e.$$scope={dirty:r,ctx:t}),n.$set(e)},i(t){s||(m(n.$$.fragment,t),s=!0)},o(t){g(n.$$.fragment,t),s=!1},d(t){b(n,t)}}}function Rt(o){let n,s,t;const r=[{raycast:Vt},{matrixAutoUpdate:!1},{args:o[6]},o[7]];function e(a){o[9](a)}let f={$$slots:{default:[St,({ref:a})=>({11:a}),({ref:a})=>a?2048:0]},$$scope:{ctx:o}};for(let a=0;a<r.length;a+=1)f=j(f,r[a]);return o[4]!==void 0&&(f.bind=o[4]),n=new C.InstancedMesh({props:f}),O.push(()=>ie(n,"bind",e)),{c(){p(n.$$.fragment)},l(a){d(n.$$.fragment,a)},m(a,i){h(n,a,i),t=!0},p(a,[i]){const u=i&192?Ie(r,[r[0],r[1],i&64&&{args:a[6]},i&128&&Se(a[7])]):{};i&3087&&(u.$$scope={dirty:i,ctx:a}),!s&&i&16&&(s=!0,u.bind=a[4],ae(()=>s=!1)),n.$set(u)},i(a){t||(m(n.$$.fragment,a),t=!0)},o(a){g(n.$$.fragment,a),t=!1},d(a){b(n,a)}}}const Vt=()=>null;function Gt(o,n,s){const t=["id","limit","range","update"];let r=x(n,t),e,{$$slots:f={},$$scope:a}=n,{id:i="default"}=n,{limit:u=1e3}=n,{range:M=1e3}=n,{update:l=!0}=n;const c=le();te(o,c,$=>s(4,e=$));const w=[null,null,0];function A($){e=$,c.set(e)}return o.$$set=$=>{n=j(j({},n),Ce($)),s(7,r=x(n,t)),"id"in $&&s(0,i=$.id),"limit"in $&&s(1,u=$.limit),"range"in $&&s(2,M=$.range),"update"in $&&s(3,l=$.update),"$$scope"in $&&s(10,a=$.$$scope)},[i,u,M,l,e,c,w,r,f,A,a]}class Ee extends T{constructor(n){super(),H(this,n,Gt,Rt,F,{id:0,limit:1,range:2,update:3})}}const Dt=o=>({}),pe=o=>({ref:o[0]});function Et(o){let n;const s=o[5].default,t=Y(s,o,o[7],pe);return{c(){t&&t.c()},l(r){t&&t.l(r)},m(r,e){t&&t.m(r,e),n=!0},p(r,e){t&&t.p&&(!n||e&128)&&Z(t,s,r,r[7],n?K(s,r[7],e,Dt):J(r[7]),pe)},i(r){n||(m(t,r),n=!0)},o(r){g(t,r),n=!1},d(r){t&&t.d(r)}}}function Wt(o){let n,s;const t=[{is:o[0]},o[3]];let r={$$slots:{default:[Et]},$$scope:{ctx:o}};for(let e=0;e<t.length;e+=1)r=j(r,t[e]);return n=new C({props:r}),o[6](n),{c(){p(n.$$.fragment)},l(e){d(n.$$.fragment,e)},m(e,f){h(n,e,f),s=!0},p(e,[f]){const a=f&9?Ie(t,[f&1&&{is:e[0]},f&8&&Se(e[3])]):{};f&128&&(a.$$scope={dirty:f,ctx:e}),n.$set(a)},i(e){s||(m(n.$$.fragment,e),s=!0)},o(e){g(n.$$.fragment,e),s=!1},d(e){o[6](null),b(n,e)}}}function Nt(o,n,s){const t=["id","ref"];let r=x(n,t),e,{$$slots:f={},$$scope:a}=n,{id:i="default"}=n;const{addInstance:u,removeInstance:M,instancedMesh:l,instances:c}=Bt(i),w=new et(l,c);u(w),He(()=>{M(w)});const A=le();te(o,A,_=>s(1,e=_));function $(_){O[_?"unshift":"push"](()=>{e=_,A.set(e)})}return o.$$set=_=>{n=j(j({},n),Ce(_)),s(3,r=x(n,t)),"id"in _&&s(4,i=_.id),"$$scope"in _&&s(7,a=_.$$scope)},[w,e,A,r,i,f,$,a]}class We extends T{constructor(n){super(),H(this,n,Nt,Wt,F,{id:4,ref:0})}get ref(){return this.$$.ctx[0]}}function de(o,n,s){const t=o.slice();return t[10]=n[s].position,t[11]=n[s].force,t[13]=s,t}function he(o,n,s){const t=o.slice();return t[14]=n[s],t}function be(o,n,s){const t=o.slice();return t[10]=n[s].position,t[17]=n[s].color,t[13]=s,t}function we(o){let n,s;return n=new We({props:{color:o[17]}}),{c(){p(n.$$.fragment)},l(t){d(n.$$.fragment,t)},m(t,r){h(n,t,r),s=!0},p:W,i(t){s||(m(n.$$.fragment,t),s=!0)},o(t){g(n.$$.fragment,t),s=!1},d(t){b(n,t)}}}function Ft(o){let n,s,t,r;n=new se({props:{shape:"cuboid",mass:.5,args:[X/2,X/2,X/2]}});let e=o[1][o[13]]&&we(o);return{c(){p(n.$$.fragment),s=z(),e&&e.c(),t=D()},l(f){d(n.$$.fragment,f),s=I(f),e&&e.l(f),t=D()},m(f,a){h(n,f,a),k(f,s,a),e&&e.m(f,a),k(f,t,a),r=!0},p(f,a){f[1][f[13]]?e?(e.p(f,a),a&2&&m(e,1)):(e=we(f),e.c(),m(e,1),e.m(t.parentNode,t)):e&&(ne(),g(e,1,1,()=>{e=null}),re())},i(f){r||(m(n.$$.fragment,f),m(e),r=!0)},o(f){g(n.$$.fragment,f),g(e),r=!1},d(f){f&&(B(s),B(t)),b(n,f),e&&e.d(f)}}}function Tt(o){let n,s,t;function r(...e){return o[6](o[13],...e)}return n=new ee({props:{enabled:o[1][o[13]]??!0,linearVelocity:[0,0,Kt],$$slots:{default:[Ft]},$$scope:{ctx:o}}}),n.$on("contact",r),{c(){p(n.$$.fragment),s=z()},l(e){d(n.$$.fragment,e),s=I(e)},m(e,f){h(n,e,f),k(e,s,f),t=!0},p(e,f){o=e;const a={};f&2&&(a.enabled=o[1][o[13]]??!0),f&524290&&(a.$$scope={dirty:f,ctx:o}),n.$set(a)},i(e){t||(m(n.$$.fragment,e),t=!0)},o(e){g(n.$$.fragment,e),t=!1},d(e){e&&B(s),b(n,e)}}}function Me(o,n){let s,t,r;return t=new C.Group({props:{"position.x":n[10].x,"position.y":n[10].y+Zt,"position.z":n[10].z-Jt,$$slots:{default:[Tt]},$$scope:{ctx:n}}}),{key:o,first:null,c(){s=D(),p(t.$$.fragment),this.h()},l(e){s=D(),d(t.$$.fragment,e),this.h()},h(){this.first=s},m(e,f){k(e,s,f),h(t,e,f),r=!0},p(e,f){n=e;const a={};f&524290&&(a.$$scope={dirty:f,ctx:n}),t.$set(a)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){g(t.$$.fragment,e),r=!1},d(e){e&&B(s),b(t,e)}}}function Ht(o){let n,s,t,r,e=[],f=new Map,a,i;n=new yt({props:{radius:Yt,args:[X,X,X]}}),t=new C.MeshStandardMaterial({props:{roughness:0,metalness:.2}});let u=q(o[2]);const M=l=>l[13];for(let l=0;l<u.length;l+=1){let c=be(o,u,l),w=M(c);f.set(w,e[l]=Me(w,c))}return{c(){p(n.$$.fragment),s=z(),p(t.$$.fragment),r=z();for(let l=0;l<e.length;l+=1)e[l].c();a=D()},l(l){d(n.$$.fragment,l),s=I(l),d(t.$$.fragment,l),r=I(l);for(let c=0;c<e.length;c+=1)e[c].l(l);a=D()},m(l,c){h(n,l,c),k(l,s,c),h(t,l,c),k(l,r,c);for(let w=0;w<e.length;w+=1)e[w]&&e[w].m(l,c);k(l,a,c),i=!0},p(l,c){c&22&&(u=q(l[2]),ne(),e=Re(e,c,M,1,l,u,f,a.parentNode,Ve,Me,a,be),re())},i(l){if(!i){m(n.$$.fragment,l),m(t.$$.fragment,l);for(let c=0;c<u.length;c+=1)m(e[c]);i=!0}},o(l){g(n.$$.fragment,l),g(t.$$.fragment,l);for(let c=0;c<e.length;c+=1)g(e[c]);i=!1},d(l){l&&(B(s),B(r),B(a)),b(n,l),b(t,l);for(let c=0;c<e.length;c+=1)e[c].d(l)}}}function Ut(o){let n,s,t,r;return n=new se({props:{shape:"cuboid",mass:.5,args:[o[3]/2,o[3]/2,o[3]/2]}}),t=new We({props:{color:"#ffffff"}}),{c(){p(n.$$.fragment),s=z(),p(t.$$.fragment)},l(e){d(n.$$.fragment,e),s=I(e),d(t.$$.fragment,e)},m(e,f){h(n,e,f),k(e,s,f),h(t,e,f),r=!0},p:W,i(e){r||(m(n.$$.fragment,e),m(t.$$.fragment,e),r=!0)},o(e){g(n.$$.fragment,e),g(t.$$.fragment,e),r=!1},d(e){e&&B(s),b(n,e),b(t,e)}}}function ye(o){let n,s;return n=new ee({props:{linearVelocity:o[5](o[11]),$$slots:{default:[Ut]},$$scope:{ctx:o}}}),{c(){p(n.$$.fragment)},l(t){d(n.$$.fragment,t)},m(t,r){h(n,t,r),s=!0},p(t,r){const e={};r&1&&(e.linearVelocity=t[5](t[11])),r&524288&&(e.$$scope={dirty:r,ctx:t}),n.$set(e)},i(t){s||(m(n.$$.fragment,t),s=!0)},o(t){g(n.$$.fragment,t),s=!1},d(t){b(n,t)}}}function Lt(o){let n,s,t=q({length:20}),r=[];for(let f=0;f<t.length;f+=1)r[f]=ye(he(o,t,f));const e=f=>g(r[f],1,1,()=>{r[f]=null});return{c(){for(let f=0;f<r.length;f+=1)r[f].c();n=z()},l(f){for(let a=0;a<r.length;a+=1)r[a].l(f);n=I(f)},m(f,a){for(let i=0;i<r.length;i+=1)r[i]&&r[i].m(f,a);k(f,n,a),s=!0},p(f,a){if(a&41){t=q({length:20});let i;for(i=0;i<t.length;i+=1){const u=he(f,t,i);r[i]?(r[i].p(u,a),m(r[i],1)):(r[i]=ye(u),r[i].c(),m(r[i],1),r[i].m(n.parentNode,n))}for(ne(),i=t.length;i<r.length;i+=1)e(i);re()}},i(f){if(!s){for(let a=0;a<t.length;a+=1)m(r[a]);s=!0}},o(f){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)g(r[a]);s=!1},d(f){f&&B(n),Ue(r,f)}}}function ke(o,n){let s,t,r;return t=new C.Group({props:{"position.x":n[10].x,"position.y":n[10].y,"position.z":n[10].z,$$slots:{default:[Lt]},$$scope:{ctx:n}}}),{key:o,first:null,c(){s=D(),p(t.$$.fragment),this.h()},l(e){s=D(),d(t.$$.fragment,e),this.h()},h(){this.first=s},m(e,f){k(e,s,f),h(t,e,f),r=!0},p(e,f){n=e;const a={};f&1&&(a["position.x"]=n[10].x),f&1&&(a["position.y"]=n[10].y),f&1&&(a["position.z"]=n[10].z),f&524289&&(a.$$scope={dirty:f,ctx:n}),t.$set(a)},i(e){r||(m(t.$$.fragment,e),r=!0)},o(e){g(t.$$.fragment,e),r=!1},d(e){e&&B(s),b(t,e)}}}function Qt(o){let n,s,t,r,e=[],f=new Map,a,i;n=new C.BoxGeometry({props:{args:[o[3],o[3],o[3]]}}),t=new C.MeshPhongMaterial({});let u=q(o[0]);const M=l=>l[13];for(let l=0;l<u.length;l+=1){let c=de(o,u,l),w=M(c);f.set(w,e[l]=ke(w,c))}return{c(){p(n.$$.fragment),s=z(),p(t.$$.fragment),r=z();for(let l=0;l<e.length;l+=1)e[l].c();a=D()},l(l){d(n.$$.fragment,l),s=I(l),d(t.$$.fragment,l),r=I(l);for(let c=0;c<e.length;c+=1)e[c].l(l);a=D()},m(l,c){h(n,l,c),k(l,s,c),h(t,l,c),k(l,r,c);for(let w=0;w<e.length;w+=1)e[w]&&e[w].m(l,c);k(l,a,c),i=!0},p(l,c){c&41&&(u=q(l[0]),ne(),e=Re(e,c,M,1,l,u,f,a.parentNode,Ve,ke,a,de),re())},i(l){if(!i){m(n.$$.fragment,l),m(t.$$.fragment,l);for(let c=0;c<u.length;c+=1)m(e[c]);i=!0}},o(l){g(n.$$.fragment,l),g(t.$$.fragment,l);for(let c=0;c<e.length;c+=1)g(e[c]);i=!1},d(l){l&&(B(s),B(r),B(a)),b(n,l),b(t,l);for(let c=0;c<e.length;c+=1)e[c].d(l)}}}function Xt(o){let n,s;return n=new Ee({props:{limit:qt,$$slots:{default:[Qt]},$$scope:{ctx:o}}}),{c(){p(n.$$.fragment)},l(t){d(n.$$.fragment,t)},m(t,r){h(n,t,r),s=!0},p(t,r){const e={};r&524289&&(e.$$scope={dirty:r,ctx:t}),n.$set(e)},i(t){s||(m(n.$$.fragment,t),s=!0)},o(t){g(n.$$.fragment,t),s=!1},d(t){b(n,t)}}}function jt(o){let n,s,t,r;return n=new Ee({props:{limit:Ne,$$slots:{default:[Ht]},$$scope:{ctx:o}}}),t=new rt({props:{memberships:[],filter:[],$$slots:{default:[Xt]},$$scope:{ctx:o}}}),{c(){p(n.$$.fragment),s=z(),p(t.$$.fragment)},l(e){d(n.$$.fragment,e),s=I(e),d(t.$$.fragment,e)},m(e,f){h(n,e,f),k(e,s,f),h(t,e,f),r=!0},p(e,[f]){const a={};f&524290&&(a.$$scope={dirty:f,ctx:e}),n.$set(a);const i={};f&524289&&(i.$$scope={dirty:f,ctx:e}),t.$set(i)},i(e){r||(m(n.$$.fragment,e),m(t.$$.fragment,e),r=!0)},o(e){g(n.$$.fragment,e),g(t.$$.fragment,e),r=!1},d(e){e&&B(s),b(n,e),b(t,e)}}}let Ne=100,qt=1e3;const Be=.4,Ot=8,Yt=.15,X=.6,Zt=1.5,Jt=50,Kt=12;function vt(o,n,s){const t=["#ff5252","#ff4081","#d500f9","#3d5afe","#40c4ff","#18ffff","#f9a825","#ffd740","#bf360c"],r=[[-1,-1],[-1,0],[-1,1],[0,-1],[0,0],[0,1],[1,-1],[1,0],[1,1]];let e=[],f=[],a=[];for(let c=0;c<Ne;c+=1){const[w,A]=r[Math.trunc(Math.random()*r.length)];a.push({position:new R(w-Be,A-Be,-c*Ot),color:t[c%t.length]}),f.push(!0)}const i=X/4,u=(c,w)=>{};return[e,f,a,i,u,c=>{const w=Math.random()-.5,A=Math.random()-.5,$=Math.random()-.5;return[c.x*w*10,c.y*A*10,c.z*$*10]},(c,w)=>u()]}class xt extends T{constructor(n){super(),H(this,n,vt,jt,F,{})}}function en(o){let n,s,t,r;return n=new pt({}),t=new xt({}),{c(){p(n.$$.fragment),s=z(),p(t.$$.fragment)},l(e){d(n.$$.fragment,e),s=I(e),d(t.$$.fragment,e)},m(e,f){h(n,e,f),k(e,s,f),h(t,e,f),r=!0},i(e){r||(m(n.$$.fragment,e),m(t.$$.fragment,e),r=!0)},o(e){g(n.$$.fragment,e),g(t.$$.fragment,e),r=!1},d(e){e&&B(s),b(n,e),b(t,e)}}}function tn(o){let n,s,t,r;return n=new C.CylinderGeometry({props:{args:[2,2,100]}}),t=new C.MeshStandardMaterial({props:{color:"white"}}),{c(){p(n.$$.fragment),s=z(),p(t.$$.fragment)},l(e){d(n.$$.fragment,e),s=I(e),d(t.$$.fragment,e)},m(e,f){h(n,e,f),k(e,s,f),h(t,e,f),r=!0},p:W,i(e){r||(m(n.$$.fragment,e),m(t.$$.fragment,e),r=!0)},o(e){g(n.$$.fragment,e),g(t.$$.fragment,e),r=!1},d(e){e&&B(s),b(n,e),b(t,e)}}}function nn(o){let n,s,t,r,e,f,a,i;return n=new je({props:{$$slots:{default:[en]},$$scope:{ctx:o}}}),t=new C.AmbientLight({}),e=new C.DirectionalLight({}),a=new C.Mesh({props:{"position.y":-50,$$slots:{default:[tn]},$$scope:{ctx:o}}}),{c(){p(n.$$.fragment),s=z(),p(t.$$.fragment),r=z(),p(e.$$.fragment),f=z(),p(a.$$.fragment)},l(u){d(n.$$.fragment,u),s=I(u),d(t.$$.fragment,u),r=I(u),d(e.$$.fragment,u),f=I(u),d(a.$$.fragment,u)},m(u,M){h(n,u,M),k(u,s,M),h(t,u,M),k(u,r,M),h(e,u,M),k(u,f,M),h(a,u,M),i=!0},p(u,[M]){const l={};M&2&&(l.$$scope={dirty:M,ctx:u}),n.$set(l);const c={};M&2&&(c.$$scope={dirty:M,ctx:u}),a.$set(c)},i(u){i||(m(n.$$.fragment,u),m(t.$$.fragment,u),m(e.$$.fragment,u),m(a.$$.fragment,u),i=!0)},o(u){g(n.$$.fragment,u),g(t.$$.fragment,u),g(e.$$.fragment,u),g(a.$$.fragment,u),i=!1},d(u){u&&(B(s),B(r),B(f)),b(n,u),b(t,u),b(e,u),b(a,u)}}}function rn(o){const{scene:n}=qe();return n.background=new Oe("black"),[]}class sn extends T{constructor(n){super(),H(this,n,rn,nn,F,{})}}function fn(o){let n,s;return n=new ve({}),{c(){p(n.$$.fragment)},l(t){d(n.$$.fragment,t)},m(t,r){h(n,t,r),s=!0},i(t){s||(m(n.$$.fragment,t),s=!0)},o(t){g(n.$$.fragment,t),s=!1},d(t){b(n,t)}}}function on(o){let n=localStorage.getItem("debug"),s,t,r,e=n&&fn();return t=new sn({}),{c(){e&&e.c(),s=z(),p(t.$$.fragment)},l(f){e&&e.l(f),s=I(f),d(t.$$.fragment,f)},m(f,a){e&&e.m(f,a),k(f,s,a),h(t,f,a),r=!0},p:W,i(f){r||(m(e),m(t.$$.fragment,f),r=!0)},o(f){g(e),g(t.$$.fragment,f),r=!1},d(f){f&&B(s),e&&e.d(f),b(t,f)}}}function an(o){let n,s;return n=new Ke({props:{gravity:[0,0,0],$$slots:{default:[on]},$$scope:{ctx:o}}}),{c(){p(n.$$.fragment)},l(t){d(n.$$.fragment,t)},m(t,r){h(n,t,r),s=!0},p(t,r){const e={};r&1&&(e.$$scope={dirty:r,ctx:t}),n.$set(e)},i(t){s||(m(n.$$.fragment,t),s=!0)},o(t){g(n.$$.fragment,t),s=!1},d(t){b(n,t)}}}function ln(o){let n,s,t,r;return n=new Ye({props:{$$slots:{default:[an]},$$scope:{ctx:o}}}),t=new Ze({}),{c(){p(n.$$.fragment),s=z(),p(t.$$.fragment)},l(e){d(n.$$.fragment,e),s=I(e),d(t.$$.fragment,e)},m(e,f){h(n,e,f),k(e,s,f),h(t,e,f),r=!0},p(e,[f]){const a={};f&1&&(a.$$scope={dirty:f,ctx:e}),n.$set(a)},i(e){r||(m(n.$$.fragment,e),m(t.$$.fragment,e),r=!0)},o(e){g(n.$$.fragment,e),g(t.$$.fragment,e),r=!1},d(e){e&&B(s),b(n,e),b(t,e)}}}class bn extends T{constructor(n){super(),H(this,n,null,ln,F,{})}}export{bn as component};
