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
import{a as P}from"./chunk-HPBHKP5S.js";import{a as z}from"./chunk-2ED5WI77.js";import"./chunk-2MBPFWCP.js";import{a as H}from"./chunk-MDLPQIMP.js";import{a as Y}from"./chunk-SUQM3OSW.js";import{a as j}from"./chunk-OUXRUXNB.js";import"./chunk-3C74MLG3.js";import"./chunk-4N7SRDH5.js";import{a as W}from"./chunk-JEWHFDAA.js";import"./chunk-YPDO7SPO.js";import"./chunk-7VJK3KHI.js";import{d as E}from"./chunk-DXEZYE3K.js";import"./chunk-VAKC5J5C.js";import"./chunk-VKV642QV.js";import{b as d}from"./chunk-DGCK3LD2.js";import"./chunk-B2SKQ7LU.js";import{a as o}from"./chunk-CUOR5F7T.js";import"./chunk-74N6MC2V.js";import"./chunk-CSISXEG7.js";import"./chunk-VHNZBQTR.js";import"./chunk-NPBZI5YA.js";import"./chunk-7X2YQ6I4.js";import{e as l}from"./chunk-R2AN7EKC.js";function X(e){this.offset=e.offset,this.count=e.count,this.color=e.color,this.batchIds=e.batchIds}var J=X,S=new o,$=d.packedLength+o.packedLength,ee=d.packedLength+2,ne=d.packedLength+o.packedLength,te=o.packedLength+1,u={modelMatrix:new d,boundingVolume:new E};function oe(e,t){let n=t*$,r=o.unpack(e,n,S);n+=o.packedLength;let i=d.unpack(e,n,u.modelMatrix);d.multiplyByScale(i,r,i);let s=u.boundingVolume;return o.clone(o.ZERO,s.center),s.radius=Math.sqrt(3),u}function ce(e,t){let n=t*ee,r=e[n++],i=e[n++],s=o.fromElements(r,r,i,S),a=d.unpack(e,n,u.modelMatrix);d.multiplyByScale(a,s,a);let l=u.boundingVolume;return o.clone(o.ZERO,l.center),l.radius=Math.sqrt(2),u}function se(e,t){let n=t*ne,r=o.unpack(e,n,S);n+=o.packedLength;let i=d.unpack(e,n,u.modelMatrix);d.multiplyByScale(i,r,i);let s=u.boundingVolume;return o.clone(o.ZERO,s.center),s.radius=1,u}function ie(e,t){let n=t*te,r=e[n++],i=o.unpack(e,n,S),s=d.fromTranslation(i,u.modelMatrix);d.multiplyByUniformScale(s,r,s);let a=u.boundingVolume;return o.clone(o.ZERO,a.center),a.radius=1,u}var de=new o;function R(e,t,n,r,i){if(!l(t))return;let s=n.length,a=r.attributes.position.values,c=r.indices,u=e.positions,f=e.vertexBatchIds,h=e.indices,p=e.batchIds,m=e.batchTableColors,b=e.batchedIndices,k=e.indexOffsets,g=e.indexCounts,y=e.boundingVolumes,I=e.modelMatrix,x=e.center,B=e.positionOffset,j=e.batchIdIndex,w=e.indexOffset,A=e.batchedIndicesOffset;for(let l=0;l<s;++l){let e=i(t,l),r=e.modelMatrix;d.multiply(I,r,r);let s=n[l],O=a.length;for(let t=0;t<O;t+=3){let e=o.unpack(a,t,de);d.multiplyByPoint(r,e,e),o.subtract(e,x,e),o.pack(e,u,3*B+t),f[j++]=s}let v=c.length;for(let t=0;t<v;++t)h[w+t]=c[t]+B;let L=l+A;b[L]=new J({offset:w,count:v,color:P.fromRgba(m[s]),batchIds:[s]}),p[L]=s,k[L]=w,g[L]=v,y[L]=E.transform(e.boundingVolume,r),B+=O/3,w+=v}e.positionOffset=B,e.batchIdIndex=j,e.indexOffset=w,e.batchedIndicesOffset+=s}var K=new o,Q=new d;function re(e){let t=new Float64Array(e),n=0;o.unpack(t,n,K),n+=o.packedLength,d.unpack(t,n,Q)}function le(e){let t=e.length,n=0;for(let o=0;o<t;++o)n+=P.packedLength+3+e[o].batchIds.length;return n}function ae(e,t,n){let o=n.length,r=2+o*E.packedLength+1+le(t),i=new Float64Array(r),s=0;i[s++]=e,i[s++]=o;for(let l=0;l<o;++l)E.pack(n[l],i,s),s+=E.packedLength;let a=t.length;i[s++]=a;for(let l=0;l<a;++l){let e=t[l];P.pack(e.color,i,s),s+=P.packedLength,i[s++]=e.offset,i[s++]=e.count;let n=e.batchIds,o=n.length;i[s++]=o;for(let t=0;t<o;++t)i[s++]=n[t]}return i}function fe(e,t){let n=l(e.boxes)?new Float32Array(e.boxes):void 0,o=l(e.boxBatchIds)?new Uint16Array(e.boxBatchIds):void 0,r=l(e.cylinders)?new Float32Array(e.cylinders):void 0,i=l(e.cylinderBatchIds)?new Uint16Array(e.cylinderBatchIds):void 0,s=l(e.ellipsoids)?new Float32Array(e.ellipsoids):void 0,a=l(e.ellipsoidBatchIds)?new Uint16Array(e.ellipsoidBatchIds):void 0,c=l(e.spheres)?new Float32Array(e.spheres):void 0,d=l(e.sphereBatchIds)?new Uint16Array(e.sphereBatchIds):void 0,u=l(n)?o.length:0,f=l(r)?i.length:0,h=l(s)?a.length:0,p=l(c)?d.length:0,m=j.getUnitBox(),b=z.getUnitCylinder(),k=H.getUnitEllipsoid(),g=m.attributes.position.values,y=b.attributes.position.values,I=k.attributes.position.values,x=g.length*u;x+=y.length*f,x+=I.length*(h+p);let B=m.indices,w=b.indices,A=k.indices,E=B.length*u;E+=w.length*f,E+=A.length*(h+p);let O=new Float32Array(x),v=new Uint16Array(x/3),L=W.createTypedArray(x/3,E),S=u+f+h+p,U=new Uint16Array(S),M=new Array(S),C=new Uint32Array(S),P=new Uint32Array(S),V=new Array(S);re(e.packedBuffer);let F={batchTableColors:new Uint32Array(e.batchTableColors),positions:O,vertexBatchIds:v,indices:L,batchIds:U,batchedIndices:M,indexOffsets:C,indexCounts:P,boundingVolumes:V,positionOffset:0,batchIdIndex:0,indexOffset:0,batchedIndicesOffset:0,modelMatrix:Q,center:K};R(F,n,o,m,oe),R(F,r,i,b,ce),R(F,s,a,k,se),R(F,c,d,k,ie);let T=ae(L.BYTES_PER_ELEMENT,M,V);return t.push(O.buffer,v.buffer,L.buffer),t.push(U.buffer,C.buffer,P.buffer),t.push(T.buffer),{positions:O.buffer,vertexBatchIds:v.buffer,indices:L.buffer,indexOffsets:C.buffer,indexCounts:P.buffer,batchIds:U.buffer,packedBuffer:T.buffer}}var Oe=Y(fe);export{Oe as default};