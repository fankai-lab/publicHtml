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
import{a as h}from"./chunk-UBIRX2SP.js";import{a as n,c as y,e as a}from"./chunk-CUOR5F7T.js";import{b as f}from"./chunk-7X2YQ6I4.js";var x={},b=new n,P=new n,B=new n,M=new n,w=new h;function z(e,t,o,r,i){let u=n.subtract(e,t,b),a=n.dot(o,u),f=n.dot(r,u);return y.fromElements(a,f,i)}x.validOutline=function(e){f.defined("positions",e);let t=h.fromPoints(e,w).halfAxes,o=a.getColumn(t,0,P),r=a.getColumn(t,1,B),i=a.getColumn(t,2,M),u=n.magnitude(o),m=n.magnitude(r),l=n.magnitude(i);return!(0===u&&(0===m||0===l)||0===m&&0===l)},x.computeProjectTo2DArguments=function(e,t,o,r){f.defined("positions",e),f.defined("centerResult",t),f.defined("planeAxis1Result",o),f.defined("planeAxis2Result",r);let i,u,m=h.fromPoints(e,w),l=m.halfAxes,s=a.getColumn(l,0,P),c=a.getColumn(l,1,B),d=a.getColumn(l,2,M),g=n.magnitude(s),x=n.magnitude(c),p=n.magnitude(d),C=Math.min(g,x,p);return(0!==g||0!==x&&0!==p)&&(0!==x||0!==p)&&((C===x||C===p)&&(i=s),C===g?i=c:C===p&&(u=c),(C===g||C===x)&&(u=d),n.normalize(i,o),n.normalize(u,r),n.clone(m.center,t),!0)},x.createProjectPointsTo2DFunction=function(n,e,t){return function(o){let r=new Array(o.length);for(let i=0;i<o.length;i++)r[i]=z(o[i],n,e,t);return r}},x.createProjectPointTo2DFunction=function(n,e,t){return function(o,r){return z(o,n,e,t,r)}};var O=x;export{O as a};