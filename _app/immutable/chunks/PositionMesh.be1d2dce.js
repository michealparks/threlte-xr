var y=Object.defineProperty;var f=(s,n,t)=>n in s?y(s,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[n]=t;var a=(s,n,t)=>(f(s,typeof n!="symbol"?n+"":n,t),t);import{V as d,M as x,d as p,ax as W,z as _,aT as I}from"./xr.862aa1eb.js";new d;new d;new d;const u=new x,M=new x,c=[],r=new p,P=s=>s.isMaterial;class j extends W{constructor(t,o){super();a(this,"color");a(this,"instancedMesh");a(this,"instances");this.color=new _("white"),this.instancedMesh=t,this.instances=o}get geometry(){var t;return(t=this.instancedMesh.current)==null?void 0:t.geometry}raycast(t,o){var m;const e=this.instancedMesh.current;if(!e||!e.geometry||!e.material)return;r.geometry=e.geometry;const g=e.matrixWorld,i=this.instances.current.indexOf(this);if(!(i===-1||i>e.count)){e.getMatrixAt(i,u),M.multiplyMatrices(g,u),r.matrixWorld=M,P(e.material)?r.material.side=e.material.side:r.material.side=((m=e.material[0])==null?void 0:m.side)??I,r.raycast(t,c);for(let l=0,w=c.length;l<w;l++){const h=c[l];h.instanceId=i,h.object=this,o.push(h)}c.length=0}}}export{j as P};
