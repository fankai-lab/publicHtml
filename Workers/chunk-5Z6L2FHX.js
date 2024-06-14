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
import{a as O}from"./chunk-DXEZYE3K.js";import{c as I,d as V}from"./chunk-DGCK3LD2.js";import{a as W,b as v}from"./chunk-CUOR5F7T.js";import{a as R}from"./chunk-74N6MC2V.js";import{a as k}from"./chunk-7X2YQ6I4.js";import{e as N}from"./chunk-R2AN7EKC.js";var z=Math.cos,Z=Math.sin,D=Math.sqrt,L={computePosition:function(t,n,a,r,o,s,e){let i=n.radiiSquared,g=t.nwCorner,h=t.boundingRectangle,l=g.latitude-t.granYCos*r+o*t.granXSin,u=z(l),c=Z(l),C=i.z*c,S=g.longitude+r*t.granYSin+o*t.granXCos,w=u*z(S),R=u*Z(S),m=i.x*w,d=i.y*R,O=D(m*w+d*R+C*c);if(s.x=m/O,s.y=d/O,s.z=C/O,a){let n=t.stNwCorner;N(n)?(l=n.latitude-t.stGranYCos*r+o*t.stGranXSin,S=n.longitude+r*t.stGranYSin+o*t.stGranXCos,e.x=(S-t.stWest)*t.lonScalar,e.y=(l-t.stSouth)*t.latScalar):(e.x=(S-h.west)*t.lonScalar,e.y=(l-h.south)*t.latScalar)}}},A=new V,g=new W,F=new v,b=new W,q=new O;function B(t,n,a,r,o,s,e){let i=Math.cos(n),h=r*i,l=a*i,u=Math.sin(n),c=r*u,C=a*u;g=q.project(t,g),g=W.subtract(g,b,g);let S=V.fromRotation(n,A);g=V.multiplyByVector(S,g,g),g=W.add(g,b,g),t=q.unproject(g,t),s-=1,e-=1;let w=t.latitude,R=w+s*C,m=w-h*e,d=w-h*e+s*C,O=Math.max(w,R,m,d),X=Math.min(w,R,m,d),Y=t.longitude,p=Y+s*l,I=Y+e*c,f=Y+e*c+s*l,_=Math.max(Y,p,I,f),M=Math.min(Y,p,I,f);return{north:O,south:X,east:_,west:M,granYCos:h,granYSin:c,granXCos:l,granXSin:C,nwCorner:t}}L.computeOptions=function(t,n,a,r,o,s,e){let i=t.east,g=t.west,h=t.north,l=t.south,u=!1,c=!1;h===R.PI_OVER_TWO&&(u=!0),l===-R.PI_OVER_TWO&&(c=!0);let C,S=h-l;C=g>i?R.TWO_PI-g+i:i-g;let w=Math.ceil(C/n)+1,m=Math.ceil(S/n)+1,d=C/(w-1),O=S/(m-1),X=I.northwest(t,s),Y=I.center(t,F);(0!==a||0!==r)&&(Y.longitude<X.longitude&&(Y.longitude+=R.TWO_PI),b=q.project(Y,b));let p=O,W=d,f=0,_=0,M=I.clone(t,o),V={granYCos:p,granYSin:f,granXCos:W,granXSin:_,nwCorner:X,boundingRectangle:M,width:w,height:m,northCap:u,southCap:c};if(0!==a){let t=B(X,a,d,O,Y,w,m);if(h=t.north,l=t.south,i=t.east,g=t.west,h<-R.PI_OVER_TWO||h>R.PI_OVER_TWO||l<-R.PI_OVER_TWO||l>R.PI_OVER_TWO)throw new k("Rotated rectangle is invalid.  It crosses over either the north or south pole.");V.granYCos=t.granYCos,V.granYSin=t.granYSin,V.granXCos=t.granXCos,V.granXSin=t.granXSin,M.north=h,M.south=l,M.east=i,M.west=g}if(0!==r){a-=r;let t=I.northwest(M,e),n=B(t,a,d,O,Y,w,m);V.stGranYCos=n.granYCos,V.stGranXCos=n.granXCos,V.stGranYSin=n.granYSin,V.stGranXSin=n.granXSin,V.stNwCorner=t,V.stWest=n.west,V.stSouth=n.south}return V};var nt=L;export{nt as a};