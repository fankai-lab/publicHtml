/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.116
 *
 * Copyright 2011-2022 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/main/LICENSE.md for full licensing details.
 */
import{e as C}from"./chunk-DXEZYE3K.js";import{a as n,e as b}from"./chunk-CUOR5F7T.js";import{a as w}from"./chunk-74N6MC2V.js";var j={},q=new n,L=new n,Q=new C,G=new b;function W(e,t,r,a,o,i,l,s,y,c){let m=e+t;n.multiplyByScalar(a,Math.cos(m),q),n.multiplyByScalar(r,Math.sin(m),L),n.add(q,L,q);let u=Math.cos(e);u*=u;let w=Math.sin(e);w*=w;let x=i/Math.sqrt(l*u+o*w)/s;return C.fromAxisAngle(q,x,Q),b.fromQuaternion(Q,G),b.multiplyByVector(G,y,c),n.normalize(c,c),n.multiplyByScalar(c,s,c),c}var U=new n,Z=new n,N=new n,v=new n;j.raisePositionsToHeight=function(e,t,r){let a=t.ellipsoid,o=t.height,i=t.extrudedHeight,l=r?e.length/3*2:e.length/3,s=new Float64Array(3*l),y=e.length,c=r?y:0;for(let m=0;m<y;m+=3){let t=m+1,l=m+2,y=n.fromArray(e,m,U);a.scaleToGeodeticSurface(y,y);let u=n.clone(y,Z),w=a.geodeticSurfaceNormal(y,v),x=n.multiplyByScalar(w,o,N);n.add(y,x,y),r&&(n.multiplyByScalar(w,i,x),n.add(u,x,u),s[m+c]=u.x,s[t+c]=u.y,s[l+c]=u.z),s[m]=y.x,s[t]=y.y,s[l]=y.z}return s};var D=new n,J=new n,K=new n;j.computeEllipsePositions=function(e,t,r){let a=e.semiMinorAxis,o=e.semiMajorAxis,i=e.rotation,l=e.center,s=8*e.granularity,y=a*a,c=o*o,m=o*a,u=n.magnitude(l),x=n.normalize(l,D),h=n.cross(n.UNIT_Z,l,J);h=n.normalize(h,h);let z=n.cross(x,h,K),f=1+Math.ceil(w.PI_OVER_TWO/s),O=w.PI_OVER_TWO/(f-1),_=w.PI_OVER_TWO-f*O;_<0&&(f-=Math.ceil(Math.abs(_)/O));let p,d,P,M,T,E=f*(f+2)*2,I=t?new Array(3*E):void 0,g=0,V=U,R=Z,j=4*f*3,v=j-1,A=0,S=r?new Array(j):void 0;for(_=w.PI_OVER_TWO,V=W(_,i,z,h,y,m,c,u,x,V),t&&(I[g++]=V.x,I[g++]=V.y,I[g++]=V.z),r&&(S[v--]=V.z,S[v--]=V.y,S[v--]=V.x),_=w.PI_OVER_TWO-O,p=1;p<f+1;++p){if(V=W(_,i,z,h,y,m,c,u,x,V),R=W(Math.PI-_,i,z,h,y,m,c,u,x,R),t){for(I[g++]=V.x,I[g++]=V.y,I[g++]=V.z,P=2*p+2,d=1;d<P-1;++d)M=d/(P-1),T=n.lerp(V,R,M,N),I[g++]=T.x,I[g++]=T.y,I[g++]=T.z;I[g++]=R.x,I[g++]=R.y,I[g++]=R.z}r&&(S[v--]=V.z,S[v--]=V.y,S[v--]=V.x,S[A++]=R.x,S[A++]=R.y,S[A++]=R.z),_=w.PI_OVER_TWO-(p+1)*O}for(p=f;p>1;--p){if(_=w.PI_OVER_TWO-(p-1)*O,V=W(-_,i,z,h,y,m,c,u,x,V),R=W(_+Math.PI,i,z,h,y,m,c,u,x,R),t){for(I[g++]=V.x,I[g++]=V.y,I[g++]=V.z,P=2*(p-1)+2,d=1;d<P-1;++d)M=d/(P-1),T=n.lerp(V,R,M,N),I[g++]=T.x,I[g++]=T.y,I[g++]=T.z;I[g++]=R.x,I[g++]=R.y,I[g++]=R.z}r&&(S[v--]=V.z,S[v--]=V.y,S[v--]=V.x,S[A++]=R.x,S[A++]=R.y,S[A++]=R.z)}_=w.PI_OVER_TWO,V=W(-_,i,z,h,y,m,c,u,x,V);let q={};return t&&(I[g++]=V.x,I[g++]=V.y,I[g++]=V.z,q.positions=I,q.numPts=f),r&&(S[v--]=V.z,S[v--]=V.y,S[v--]=V.x,q.outerPositions=S),q};var tt=j;export{tt as a};