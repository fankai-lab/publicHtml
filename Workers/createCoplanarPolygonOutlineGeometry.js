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
import{a as T}from"./chunk-ZYWD6OQH.js";import"./chunk-UBIRX2SP.js";import{a as f}from"./chunk-YBI55DLZ.js";import"./chunk-FK5KFB6H.js";import{a as G}from"./chunk-YEJWCH6C.js";import{a as C}from"./chunk-KRZBI2MU.js";import"./chunk-C6DMEJQ7.js";import"./chunk-BK3HCS7I.js";import"./chunk-VMSXG4OA.js";import"./chunk-7VZHIB6P.js";import"./chunk-5AG2MVRM.js";import{a as L}from"./chunk-RURL6ZX2.js";import"./chunk-QPOPEH3M.js";import"./chunk-6AUUBDOF.js";import"./chunk-BOPB43LN.js";import{a as w}from"./chunk-JEWHFDAA.js";import{a as O}from"./chunk-YPDO7SPO.js";import{b,c as d,d as k}from"./chunk-7VJK3KHI.js";import{d as P}from"./chunk-DXEZYE3K.js";import"./chunk-VAKC5J5C.js";import"./chunk-VKV642QV.js";import"./chunk-DGCK3LD2.js";import{a as H}from"./chunk-B2SKQ7LU.js";import{a as l,d as g}from"./chunk-CUOR5F7T.js";import"./chunk-74N6MC2V.js";import"./chunk-CSISXEG7.js";import"./chunk-VHNZBQTR.js";import{a as c}from"./chunk-NPBZI5YA.js";import{b as a}from"./chunk-7X2YQ6I4.js";import{e as u}from"./chunk-R2AN7EKC.js";function E(r){let t=r.length,e=new Float64Array(3*t),o=w.createTypedArray(t,2*t),n=0,i=0;for(let a=0;a<t;a++){let s=r[a];e[n++]=s.x,e[n++]=s.y,e[n++]=s.z,o[i++]=a,o[i++]=(a+1)%t}let s=new O({position:new k({componentDatatype:H.DOUBLE,componentsPerAttribute:3,values:e})});return new d({attributes:s,indices:o,primitiveType:b.LINES})}function m(r){r=c(r,c.EMPTY_OBJECT);let t=r.polygonHierarchy;a.defined("options.polygonHierarchy",t),this._polygonHierarchy=t,this._workerName="createCoplanarPolygonOutlineGeometry",this.packedLength=f.computeHierarchyPackedLength(t,l)+1}m.fromPositions=function(r){r=c(r,c.EMPTY_OBJECT),a.defined("options.positions",r.positions);let t={polygonHierarchy:{positions:r.positions}};return new m(t)},m.pack=function(r,t,e){return a.typeOf.object("value",r),a.defined("array",t),e=c(e,0),e=f.packPolygonHierarchy(r._polygonHierarchy,t,e,l),t[e]=r.packedLength,t};var v={polygonHierarchy:{}};m.unpack=function(r,t,e){a.defined("array",r),t=c(t,0);let o=f.unpackPolygonHierarchy(r,t,l);t=o.startingIndex,delete o.startingIndex;let n=r[t];return u(e)||(e=new m(v)),e._polygonHierarchy=o,e.packedLength=n,e},m.createGeometry=function(r){let t=r._polygonHierarchy,e=t.positions;if(e=L(e,l.equalsEpsilon,!0),e.length<3||!T.validOutline(e))return;let o=f.polygonOutlinesFromHierarchy(t,!1);if(0===o.length)return;let n=[];for(let a=0;a<o.length;a++){let r=new G({geometry:E(o[a])});n.push(r)}let i=C.combineInstances(n)[0],s=P.fromPoints(t.positions);return new d({attributes:i.attributes,indices:i.indices,primitiveType:i.primitiveType,boundingSphere:s})};var h=m;function A(r,t){return u(t)&&(r=h.unpack(r,t)),r._ellipsoid=g.clone(r._ellipsoid),h.createGeometry(r)}var Z=A;export{Z as default};