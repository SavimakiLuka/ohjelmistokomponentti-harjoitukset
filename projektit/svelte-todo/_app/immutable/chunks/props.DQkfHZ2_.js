import{V as D,W as z,X as W,Y as w,Z as X,_ as y,$ as S,a0 as c,j as P,F,a1 as J,a2 as Q,C as k,x as C,N as ee,o as re,E as ae,a3 as te,a4 as ne,M as ie,L as B,a5 as Y,q as M,a6 as U,y as fe,a7 as se,a8 as ue,a9 as le,aa as _e,b as K,ab as de,ac as ve,B as Z,ad as oe,a as ce,ae as be,af as he,ag as V,m as $,ah as ge,ai as ye,aj as Pe,ak as N}from"./runtime.H23nmWjR.js";function I(r,i=null,u){if(typeof r!="object"||r===null||D in r)return r;const f=Q(r);if(f!==z&&f!==W)return r;var a=new Map,d=k(r),b=w(0);d&&a.set("length",w(r.length));var g;return new Proxy(r,{defineProperty(l,e,t){(!("value"in t)||t.configurable===!1||t.enumerable===!1||t.writable===!1)&&X();var s=a.get(e);return s===void 0?(s=w(t.value),a.set(e,s)):y(s,I(t.value,g)),!0},deleteProperty(l,e){var t=a.get(e);if(t===void 0)e in l&&a.set(e,w(c));else{if(d&&typeof e=="string"){var s=a.get("length"),n=Number(e);Number.isInteger(n)&&n<s.v&&y(s,n)}y(t,c),G(b)}return!0},get(l,e,t){var o;if(e===D)return r;var s=a.get(e),n=e in l;if(s===void 0&&(!n||(o=S(l,e))!=null&&o.writable)&&(s=w(I(n?l[e]:c,g)),a.set(e,s)),s!==void 0){var _=P(s);return _===c?void 0:_}return Reflect.get(l,e,t)},getOwnPropertyDescriptor(l,e){var t=Reflect.getOwnPropertyDescriptor(l,e);if(t&&"value"in t){var s=a.get(e);s&&(t.value=P(s))}else if(t===void 0){var n=a.get(e),_=n==null?void 0:n.v;if(n!==void 0&&_!==c)return{enumerable:!0,configurable:!0,value:_,writable:!0}}return t},has(l,e){var _;if(e===D)return!0;var t=a.get(e),s=t!==void 0&&t.v!==c||Reflect.has(l,e);if(t!==void 0||F!==null&&(!s||(_=S(l,e))!=null&&_.writable)){t===void 0&&(t=w(s?I(l[e],g):c),a.set(e,t));var n=P(t);if(n===c)return!1}return s},set(l,e,t,s){var E;var n=a.get(e),_=e in l;if(d&&e==="length")for(var o=t;o<n.v;o+=1){var m=a.get(o+"");m!==void 0?y(m,c):o in l&&(m=w(c),a.set(o+"",m))}n===void 0?(!_||(E=S(l,e))!=null&&E.writable)&&(n=w(void 0),y(n,I(t,g)),a.set(e,n)):(_=n.v!==c,y(n,I(t,g)));var h=Reflect.getOwnPropertyDescriptor(l,e);if(h!=null&&h.set&&h.set.call(s,t),!_){if(d&&typeof e=="string"){var O=a.get("length"),T=Number(e);Number.isInteger(T)&&T>=O.v&&y(O,T+1)}G(b)}return!0},ownKeys(l){P(b);var e=Reflect.ownKeys(l).filter(n=>{var _=a.get(n);return _===void 0||_.v!==c});for(var[t,s]of a)s.v!==c&&!(t in l)&&e.push(t);return e},setPrototypeOf(){J()}})}function G(r,i=1){y(r,r.v+i)}function Re(r,i,u=!1){C&&ee();var f=r,a=null,d=null,b=c,g=u?ae:0,l=!1;const e=(s,n=!0)=>{l=!0,t(n,s)},t=(s,n)=>{if(b===(b=s))return;let _=!1;if(C){const o=f.data===te;!!b===o&&(f=ne(),ie(f),B(!1),_=!0)}b?(a?Y(a):n&&(a=M(()=>n(f))),d&&U(d,()=>{d=null})):(d?Y(d):n&&(d=M(()=>n(f))),a&&U(a,()=>{a=null})),_&&B(!0)};re(()=>{l=!1,i(e),l||t(null,null)},g),C&&(f=fe)}let p=!1;function we(r){var i=p;try{return p=!1,[r(),p]}finally{p=i}}const me={get(r,i){let u=r.props.length;for(;u--;){let f=r.props[u];if(N(f)&&(f=f()),typeof f=="object"&&f!==null&&i in f)return f[i]}},set(r,i,u){let f=r.props.length;for(;f--;){let a=r.props[f];N(a)&&(a=a());const d=S(a,i);if(d&&d.set)return d.set(u),!0}return!1},getOwnPropertyDescriptor(r,i){let u=r.props.length;for(;u--;){let f=r.props[u];if(N(f)&&(f=f()),typeof f=="object"&&f!==null&&i in f){const a=S(f,i);return a&&!a.configurable&&(a.configurable=!0),a}}},has(r,i){if(i===D||i===V)return!1;for(let u of r.props)if(N(u)&&(u=u()),u!=null&&i in u)return!0;return!1},ownKeys(r){const i=[];for(let u of r.props){N(u)&&(u=u());for(const f in u)i.includes(f)||i.push(f)}return i}};function Ie(...r){return new Proxy({props:r},me)}function H(r){for(var i=F,u=F;i!==null&&!(i.f&(de|ve));)i=i.parent;try{return Z(i),r()}finally{Z(u)}}function Se(r,i,u,f){var q;var a=(u&oe)!==0,d=!ce||(u&be)!==0,b=(u&he)!==0,g=(u&Pe)!==0,l=!1,e;b?[e,l]=we(()=>r[i]):e=r[i];var t=D in r||V in r,s=((q=S(r,i))==null?void 0:q.set)??(t&&b&&i in r?v=>r[i]=v:void 0),n=f,_=!0,o=!1,m=()=>(o=!0,_&&(_=!1,g?n=K(f):n=f),n);e===void 0&&f!==void 0&&(s&&d&&se(),e=m(),s&&s(e));var h;if(d)h=()=>{var v=r[i];return v===void 0?m():(_=!0,o=!1,v)};else{var O=H(()=>(a?$:ge)(()=>r[i]));O.f|=ue,h=()=>{var v=P(O);return v!==void 0&&(n=void 0),v===void 0?n:v}}if(!(u&le))return h;if(s){var T=r.$$legacy;return function(v,R){return arguments.length>0?((!d||!R||T||l)&&s(R?h():v),v):h()}}var E=!1,j=!1,x=ye(e),A=H(()=>$(()=>{var v=h(),R=P(x);return E?(E=!1,j=!0,R):(j=!1,x.v=v)}));return a||(A.equals=_e),function(v,R){if(arguments.length>0){const L=R?P(A):d&&b?I(v):v;return A.equals(L)||(E=!0,y(x,L),o&&n!==void 0&&(n=L),K(()=>P(A))),v}return P(A)}}export{I as a,Re as i,Se as p,Ie as s};
