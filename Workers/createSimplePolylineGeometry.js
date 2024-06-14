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
import{a as r}from"./chunk-HPBHKP5S.js";import{a as L}from"./chunk-FK5KFB6H.js";import{a as E}from"./chunk-LDCAXLGS.js";import"./chunk-NUSW5B6A.js";import"./chunk-QPOPEH3M.js";import"./chunk-6AUUBDOF.js";import"./chunk-BOPB43LN.js";import{a as X}from"./chunk-JEWHFDAA.js";import{a as Q}from"./chunk-YPDO7SPO.js";import{b as j,c as K,d as Y}from"./chunk-7VJK3KHI.js";import{d as W}from"./chunk-DXEZYE3K.js";import"./chunk-VAKC5J5C.js";import"./chunk-VKV642QV.js";import"./chunk-DGCK3LD2.js";import{a as H}from"./chunk-B2SKQ7LU.js";import{a as k,d as b}from"./chunk-CUOR5F7T.js";import{a as q}from"./chunk-74N6MC2V.js";import"./chunk-CSISXEG7.js";import"./chunk-VHNZBQTR.js";import{a as w}from"./chunk-NPBZI5YA.js";import{a as D}from"./chunk-7X2YQ6I4.js";import{e as u}from"./chunk-R2AN7EKC.js";function Z(e,t,o,a,n,i,l){let s,u=E.numberOfPoints(e,t,n),p=o.red,c=o.green,h=o.blue,f=o.alpha,m=a.red,y=a.green,k=a.blue,g=a.alpha;if(r.equals(o,a)){for(s=0;s<u;s++)i[l++]=r.floatToByte(p),i[l++]=r.floatToByte(c),i[l++]=r.floatToByte(h),i[l++]=r.floatToByte(f);return l}let d=(m-p)/u,B=(y-c)/u,T=(k-h)/u,w=(g-f)/u,_=l;for(s=0;s<u;s++)i[_++]=r.floatToByte(p+s*d),i[_++]=r.floatToByte(c+s*B),i[_++]=r.floatToByte(h+s*T),i[_++]=r.floatToByte(f+s*w);return _}function R(e){e=w(e,w.EMPTY_OBJECT);let t=e.positions,o=e.colors,a=w(e.colorsPerVertex,!1);if(!u(t)||t.length<2)throw new D("At least two positions are required.");if(u(o)&&(a&&o.length<t.length||!a&&o.length<t.length-1))throw new D("colors has an invalid length.");this._positions=t,this._colors=o,this._colorsPerVertex=a,this._arcType=w(e.arcType,L.GEODESIC),this._granularity=w(e.granularity,q.RADIANS_PER_DEGREE),this._ellipsoid=w(e.ellipsoid,b.WGS84),this._workerName="createSimplePolylineGeometry";let n=1+t.length*k.packedLength;n+=u(o)?1+o.length*r.packedLength:1,this.packedLength=n+b.packedLength+3}R.pack=function(e,t,o){if(!u(e))throw new D("value is required");if(!u(t))throw new D("array is required");o=w(o,0);let a,n=e._positions,i=n.length;for(t[o++]=i,a=0;a<i;++a,o+=k.packedLength)k.pack(n[a],t,o);let l=e._colors;for(i=u(l)?l.length:0,t[o++]=i,a=0;a<i;++a,o+=r.packedLength)r.pack(l[a],t,o);return b.pack(e._ellipsoid,t,o),o+=b.packedLength,t[o++]=e._colorsPerVertex?1:0,t[o++]=e._arcType,t[o]=e._granularity,t},R.unpack=function(e,t,o){if(!u(e))throw new D("array is required");t=w(t,0);let a,n=e[t++],i=new Array(n);for(a=0;a<n;++a,t+=k.packedLength)i[a]=k.unpack(e,t);n=e[t++];let l=n>0?new Array(n):void 0;for(a=0;a<n;++a,t+=r.packedLength)l[a]=r.unpack(e,t);let s=b.unpack(e,t);t+=b.packedLength;let p=1===e[t++],c=e[t++],h=e[t];return u(o)?(o._positions=i,o._colors=l,o._ellipsoid=s,o._colorsPerVertex=p,o._arcType=c,o._granularity=h,o):new R({positions:i,colors:l,ellipsoid:s,colorsPerVertex:p,arcType:c,granularity:h})};var F=new Array(2),N=new Array(2),$={positions:F,height:N,ellipsoid:void 0,minDistance:void 0,granularity:void 0};R.createGeometry=function(e){let t,o,a,n,i,l=e._positions,s=e._colors,p=e._colorsPerVertex,c=e._arcType,h=e._granularity,f=e._ellipsoid,m=q.chordLength(h,f.maximumRadius),y=u(s)&&!p,g=l.length,d=0;if(c===L.GEODESIC||c===L.RHUMB){let e,a,p;c===L.GEODESIC?(e=q.chordLength(h,f.maximumRadius),a=E.numberOfPoints,p=E.generateArc):(e=h,a=E.numberOfPointsRhumbLine,p=E.generateRhumbArc);let k=E.extractHeights(l,f),B=$;if(c===L.GEODESIC?B.minDistance=m:B.granularity=h,B.ellipsoid=f,y){let c=0;for(t=0;t<g-1;t++)c+=a(l[t],l[t+1],e)+1;o=new Float64Array(3*c),n=new Uint8Array(4*c),B.positions=F,B.height=N;let h=0;for(t=0;t<g-1;++t){F[0]=l[t],F[1]=l[t+1],N[0]=k[t],N[1]=k[t+1];let e=p(B);if(u(s)){let o=e.length/3;i=s[t];for(let e=0;e<o;++e)n[h++]=r.floatToByte(i.red),n[h++]=r.floatToByte(i.green),n[h++]=r.floatToByte(i.blue),n[h++]=r.floatToByte(i.alpha)}o.set(e,d),d+=e.length}}else if(B.positions=l,B.height=k,o=new Float64Array(p(B)),u(s)){for(n=new Uint8Array(o.length/3*4),t=0;t<g-1;++t){let e=l[t],r=l[t+1],o=s[t],a=s[t+1];d=Z(e,r,o,a,m,n,d)}let e=s[g-1];n[d++]=r.floatToByte(e.red),n[d++]=r.floatToByte(e.green),n[d++]=r.floatToByte(e.blue),n[d++]=r.floatToByte(e.alpha)}}else{a=y?2*g-2:g,o=new Float64Array(3*a),n=u(s)?new Uint8Array(4*a):void 0;let e=0,p=0;for(t=0;t<g;++t){let a=l[t];if(y&&t>0&&(k.pack(a,o,e),e+=3,i=s[t-1],n[p++]=r.floatToByte(i.red),n[p++]=r.floatToByte(i.green),n[p++]=r.floatToByte(i.blue),n[p++]=r.floatToByte(i.alpha)),y&&t===g-1)break;k.pack(a,o,e),e+=3,u(s)&&(i=s[t],n[p++]=r.floatToByte(i.red),n[p++]=r.floatToByte(i.green),n[p++]=r.floatToByte(i.blue),n[p++]=r.floatToByte(i.alpha))}}let B=new Q;B.position=new Y({componentDatatype:H.DOUBLE,componentsPerAttribute:3,values:o}),u(s)&&(B.color=new Y({componentDatatype:H.UNSIGNED_BYTE,componentsPerAttribute:4,values:n,normalize:!0})),a=o.length/3;let T=2*(a-1),w=X.createTypedArray(a,T),_=0;for(t=0;t<a-1;++t)w[_++]=t,w[_++]=t+1;return new K({attributes:B,indices:w,primitiveType:j.LINES,boundingSphere:W.fromPoints(l)})};var J=R;function x(e,r){return u(r)&&(e=J.unpack(e,r)),e._ellipsoid=b.clone(e._ellipsoid),J.createGeometry(e)}var _e=x;export{_e as default};