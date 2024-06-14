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
import{a}from"./chunk-YBI55DLZ.js";import{a as b}from"./chunk-FK5KFB6H.js";import{a as W}from"./chunk-YEJWCH6C.js";import{a as V}from"./chunk-KRZBI2MU.js";import"./chunk-C6DMEJQ7.js";import"./chunk-BK3HCS7I.js";import{a as D}from"./chunk-3C74MLG3.js";import{a as F}from"./chunk-VMSXG4OA.js";import"./chunk-7VZHIB6P.js";import{a as j,b as k}from"./chunk-5AG2MVRM.js";import"./chunk-RURL6ZX2.js";import"./chunk-QPOPEH3M.js";import"./chunk-6AUUBDOF.js";import"./chunk-BOPB43LN.js";import{a as M}from"./chunk-JEWHFDAA.js";import{a as B}from"./chunk-YPDO7SPO.js";import{b as U,c as C,d as S}from"./chunk-7VJK3KHI.js";import{d as z}from"./chunk-DXEZYE3K.js";import"./chunk-VAKC5J5C.js";import"./chunk-VKV642QV.js";import"./chunk-DGCK3LD2.js";import{a as w}from"./chunk-B2SKQ7LU.js";import{a as v,d as y}from"./chunk-CUOR5F7T.js";import{a as T}from"./chunk-74N6MC2V.js";import"./chunk-CSISXEG7.js";import"./chunk-VHNZBQTR.js";import{a as P}from"./chunk-NPBZI5YA.js";import{a as G,b as A}from"./chunk-7X2YQ6I4.js";import{e as O}from"./chunk-R2AN7EKC.js";var Y=[],R=[];function K(e,t,i,r,o){let n=F.fromPoints(t,e).projectPointsOntoPlane(t,Y);k.computeWindingOrder2D(n)===j.CLOCKWISE&&(n.reverse(),t=t.slice().reverse());let s,p,u=t.length,h=0;if(r)for(s=new Float64Array(2*u*3),p=0;p<u;p++){let e=t[p],i=t[(p+1)%u];s[h++]=e.x,s[h++]=e.y,s[h++]=e.z,s[h++]=i.x,s[h++]=i.y,s[h++]=i.z}else{let r=0;if(o===b.GEODESIC)for(p=0;p<u;p++)r+=a.subdivideLineCount(t[p],t[(p+1)%u],i);else if(o===b.RHUMB)for(p=0;p<u;p++)r+=a.subdivideRhumbLineCount(e,t[p],t[(p+1)%u],i);for(s=new Float64Array(3*r),p=0;p<u;p++){let r;o===b.GEODESIC?r=a.subdivideLine(t[p],t[(p+1)%u],i,R):o===b.RHUMB&&(r=a.subdivideRhumbLine(e,t[p],t[(p+1)%u],i,R));let n=r.length;for(let e=0;e<n;++e)s[h++]=r[e]}}u=s.length/3;let l=2*u,c=M.createTypedArray(u,l);for(h=0,p=0;p<u-1;p++)c[h++]=p,c[h++]=p+1;return c[h++]=u-1,c[h++]=0,new W({geometry:new C({attributes:new B({position:new S({componentDatatype:w.DOUBLE,componentsPerAttribute:3,values:s})}),indices:c,primitiveType:U.LINES})})}function q(e,t,i,r,o){let n=F.fromPoints(t,e).projectPointsOntoPlane(t,Y);k.computeWindingOrder2D(n)===j.CLOCKWISE&&(n.reverse(),t=t.slice().reverse());let s,p,u=t.length,h=new Array(u),l=0;if(r)for(s=new Float64Array(2*u*3*2),p=0;p<u;++p){h[p]=l/3;let e=t[p],i=t[(p+1)%u];s[l++]=e.x,s[l++]=e.y,s[l++]=e.z,s[l++]=i.x,s[l++]=i.y,s[l++]=i.z}else{let r=0;if(o===b.GEODESIC)for(p=0;p<u;p++)r+=a.subdivideLineCount(t[p],t[(p+1)%u],i);else if(o===b.RHUMB)for(p=0;p<u;p++)r+=a.subdivideRhumbLineCount(e,t[p],t[(p+1)%u],i);for(s=new Float64Array(3*r*2),p=0;p<u;++p){let r;h[p]=l/3,o===b.GEODESIC?r=a.subdivideLine(t[p],t[(p+1)%u],i,R):o===b.RHUMB&&(r=a.subdivideRhumbLine(e,t[p],t[(p+1)%u],i,R));let n=r.length;for(let e=0;e<n;++e)s[l++]=r[e]}}u=s.length/6;let c=h.length,y=2*(2*u+c),f=M.createTypedArray(u+c,y);for(l=0,p=0;p<u;++p)f[l++]=p,f[l++]=(p+1)%u,f[l++]=p+u,f[l++]=(p+1)%u+u;for(p=0;p<c;p++){let e=h[p];f[l++]=e,f[l++]=e+u}return new W({geometry:new C({attributes:new B({position:new S({componentDatatype:w.DOUBLE,componentsPerAttribute:3,values:s})}),indices:f,primitiveType:U.LINES})})}function L(e){if(A.typeOf.object("options",e),A.typeOf.object("options.polygonHierarchy",e.polygonHierarchy),e.perPositionHeight&&O(e.height))throw new G("Cannot use both options.perPositionHeight and options.height");if(O(e.arcType)&&e.arcType!==b.GEODESIC&&e.arcType!==b.RHUMB)throw new G("Invalid arcType. Valid options are ArcType.GEODESIC and ArcType.RHUMB.");let t=e.polygonHierarchy,i=P(e.ellipsoid,y.WGS84),r=P(e.granularity,T.RADIANS_PER_DEGREE),o=P(e.perPositionHeight,!1),n=o&&O(e.extrudedHeight),s=P(e.arcType,b.GEODESIC),p=P(e.height,0),u=P(e.extrudedHeight,p);if(!n){let e=Math.max(p,u);u=Math.min(p,u),p=e}this._ellipsoid=y.clone(i),this._granularity=r,this._height=p,this._extrudedHeight=u,this._arcType=s,this._polygonHierarchy=t,this._perPositionHeight=o,this._perPositionHeightExtrude=n,this._offsetAttribute=e.offsetAttribute,this._workerName="createPolygonOutlineGeometry",this.packedLength=a.computeHierarchyPackedLength(t,v)+y.packedLength+8}L.pack=function(e,t,i){return A.typeOf.object("value",e),A.defined("array",t),i=P(i,0),i=a.packPolygonHierarchy(e._polygonHierarchy,t,i,v),y.pack(e._ellipsoid,t,i),i+=y.packedLength,t[i++]=e._height,t[i++]=e._extrudedHeight,t[i++]=e._granularity,t[i++]=e._perPositionHeightExtrude?1:0,t[i++]=e._perPositionHeight?1:0,t[i++]=e._arcType,t[i++]=P(e._offsetAttribute,-1),t[i]=e.packedLength,t};var J=y.clone(y.UNIT_SPHERE),Q={polygonHierarchy:{}};L.unpack=function(e,t,i){A.defined("array",e),t=P(t,0);let r=a.unpackPolygonHierarchy(e,t,v);t=r.startingIndex,delete r.startingIndex;let o=y.unpack(e,t,J);t+=y.packedLength;let n=e[t++],s=e[t++],p=e[t++],u=1===e[t++],h=1===e[t++],l=e[t++],c=e[t++],f=e[t];return O(i)||(i=new L(Q)),i._polygonHierarchy=r,i._ellipsoid=y.clone(o,i._ellipsoid),i._height=n,i._extrudedHeight=s,i._granularity=p,i._perPositionHeight=h,i._perPositionHeightExtrude=u,i._arcType=l,i._offsetAttribute=-1===c?void 0:c,i.packedLength=f,i},L.fromPositions=function(e){e=P(e,P.EMPTY_OBJECT),A.defined("options.positions",e.positions);let t={polygonHierarchy:{positions:e.positions},height:e.height,extrudedHeight:e.extrudedHeight,ellipsoid:e.ellipsoid,granularity:e.granularity,perPositionHeight:e.perPositionHeight,arcType:e.arcType,offsetAttribute:e.offsetAttribute};return new L(t)},L.createGeometry=function(e){let t=e._ellipsoid,i=e._granularity,r=e._polygonHierarchy,o=e._perPositionHeight,n=e._arcType,s=a.polygonOutlinesFromHierarchy(r,!o,t);if(0===s.length)return;let p,u,h,l=[],c=T.chordLength(i,t.maximumRadius),y=e._height,f=e._extrudedHeight,m=e._perPositionHeightExtrude||!T.equalsEpsilon(y,f,0,T.EPSILON2);if(m)for(h=0;h<s.length;h++){if(p=q(t,s[h],c,o,n),p.geometry=a.scaleToGeodeticHeightExtruded(p.geometry,y,f,t,o),O(e._offsetAttribute)){let t=p.geometry.attributes.position.values.length/3,i=new Uint8Array(t);e._offsetAttribute===D.TOP?i=i.fill(1,0,t/2):(u=e._offsetAttribute===D.NONE?0:1,i=i.fill(u)),p.geometry.attributes.applyOffset=new S({componentDatatype:w.UNSIGNED_BYTE,componentsPerAttribute:1,values:i})}l.push(p)}else for(h=0;h<s.length;h++){if(p=K(t,s[h],c,o,n),p.geometry.attributes.position.values=k.scaleToGeodeticHeight(p.geometry.attributes.position.values,y,t,!o),O(e._offsetAttribute)){let t=p.geometry.attributes.position.values.length;u=e._offsetAttribute===D.NONE?0:1;let i=new Uint8Array(t/3).fill(u);p.geometry.attributes.applyOffset=new S({componentDatatype:w.UNSIGNED_BYTE,componentsPerAttribute:1,values:i})}l.push(p)}let d=V.combineInstances(l)[0],g=z.fromVertices(d.attributes.position.values);return new C({attributes:d.attributes,indices:d.indices,primitiveType:d.primitiveType,boundingSphere:g,offsetAttribute:e._offsetAttribute})};var x=L;function X(e,t){return O(t)&&(e=x.unpack(e,t)),e._ellipsoid=y.clone(e._ellipsoid),x.createGeometry(e)}var Oe=X;export{Oe as default};