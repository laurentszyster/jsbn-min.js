!function(){function t(t,i,r){null!=t&&("number"==typeof t?this.fromNumber(t,i,r):null==i&&"string"!=typeof t?this.fromString(t,256):this.fromString(t,i))}function i(){return new t(null)}function r(t,i,r,e,o,n){for(;--n>=0;){var s=i*this[t++]+r[e]+o;o=Math.floor(s/67108864),r[e++]=67108863&s}return o}function e(t,i,r,e,o,n){for(var s=32767&i,h=i>>15;--n>=0;){var F=32767&this[t],u=this[t++]>>15,f=h*F+u*s;F=s*F+((32767&f)<<15)+r[e]+(1073741823&o),o=(F>>>30)+(f>>>15)+h*u+(o>>>30),r[e++]=1073741823&F}return o}function o(t,i,r,e,o,n){for(var s=16383&i,h=i>>14;--n>=0;){var F=16383&this[t],u=this[t++]>>14,f=h*F+u*s;F=s*F+((16383&f)<<14)+r[e]+o,o=(F>>28)+(f>>14)+h*u,r[e++]=268435455&F}return o}function n(t){return De.charAt(t)}function s(t,i){var r=Ee[t.charCodeAt(i)];return null==r?-1:r}function h(t){for(var i=this.t-1;i>=0;--i)t[i]=this[i];t.t=this.t,t.s=this.s}function F(t){this.t=1,this.s=0>t?-1:0,t>0?this[0]=t:-1>t?this[0]=t+this.DV:this.t=0}function u(t){var r=i();return r.fromInt(t),r}function f(i,r){var e;if(16==r)e=4;else if(8==r)e=3;else if(256==r)e=8;else if(2==r)e=1;else if(32==r)e=5;else{if(4!=r)return this.fromRadix(i,r),void 0;e=2}this.t=0,this.s=0;for(var o=i.length,n=!1,h=0;--o>=0;){var F=8==e?255&i[o]:s(i,o);0>F?"-"==i.charAt(o)&&(n=!0):(n=!1,0==h?this[this.t++]=F:h+e>this.DB?(this[this.t-1]|=(F&(1<<this.DB-h)-1)<<h,this[this.t++]=F>>this.DB-h):this[this.t-1]|=F<<h,h+=e,h>=this.DB&&(h-=this.DB))}8==e&&0!=(128&i[0])&&(this.s=-1,h>0&&(this[this.t-1]|=(1<<this.DB-h)-1<<h)),this.clamp(),n&&t.ZERO.subTo(this,this)}function a(){for(var t=this.s&this.DM;this.t>0&&this[this.t-1]==t;)--this.t}function p(t){if(this.s<0)return"-"+this.negate().toString(t);var i;if(16==t)i=4;else if(8==t)i=3;else if(2==t)i=1;else if(32==t)i=5;else{if(4!=t)return this.toRadix(t);i=2}var r,e=(1<<i)-1,o=!1,s="",h=this.t,F=this.DB-h*this.DB%i;if(h-->0)for(F<this.DB&&(r=this[h]>>F)>0&&(o=!0,s=n(r));h>=0;)i>F?(r=(this[h]&(1<<F)-1)<<i-F,r|=this[--h]>>(F+=this.DB-i)):(r=this[h]>>(F-=i)&e,0>=F&&(F+=this.DB,--h)),r>0&&(o=!0),o&&(s+=n(r));return o?s:"0"}function c(){var r=i();return t.ZERO.subTo(this,r),r}function l(){return this.s<0?this.negate():this}function m(t){var i=this.s-t.s;if(0!=i)return i;var r=this.t;if(i=r-t.t,0!=i)return this.s<0?-i:i;for(;--r>=0;)if(0!=(i=this[r]-t[r]))return i;return 0}function y(t){var i,r=1;return 0!=(i=t>>>16)&&(t=i,r+=16),0!=(i=t>>8)&&(t=i,r+=8),0!=(i=t>>4)&&(t=i,r+=4),0!=(i=t>>2)&&(t=i,r+=2),0!=(i=t>>1)&&(t=i,r+=1),r}function v(){return this.t<=0?0:this.DB*(this.t-1)+y(this[this.t-1]^this.s&this.DM)}function g(t,i){var r;for(r=this.t-1;r>=0;--r)i[r+t]=this[r];for(r=t-1;r>=0;--r)i[r]=0;i.t=this.t+t,i.s=this.s}function d(t,i){for(var r=t;r<this.t;++r)i[r-t]=this[r];i.t=Math.max(this.t-t,0),i.s=this.s}function B(t,i){var r,e=t%this.DB,o=this.DB-e,n=(1<<o)-1,s=Math.floor(t/this.DB),h=this.s<<e&this.DM;for(r=this.t-1;r>=0;--r)i[r+s+1]=this[r]>>o|h,h=(this[r]&n)<<e;for(r=s-1;r>=0;--r)i[r]=0;i[s]=h,i.t=this.t+s+1,i.s=this.s,i.clamp()}function T(t,i){i.s=this.s;var r=Math.floor(t/this.DB);if(r>=this.t)return i.t=0,void 0;var e=t%this.DB,o=this.DB-e,n=(1<<e)-1;i[0]=this[r]>>e;for(var s=r+1;s<this.t;++s)i[s-r-1]|=(this[s]&n)<<o,i[s-r]=this[s]>>e;e>0&&(i[this.t-r-1]|=(this.s&n)<<o),i.t=this.t-r,i.clamp()}function D(t,i){for(var r=0,e=0,o=Math.min(t.t,this.t);o>r;)e+=this[r]-t[r],i[r++]=e&this.DM,e>>=this.DB;if(t.t<this.t){for(e-=t.s;r<this.t;)e+=this[r],i[r++]=e&this.DM,e>>=this.DB;e+=this.s}else{for(e+=this.s;r<t.t;)e-=t[r],i[r++]=e&this.DM,e>>=this.DB;e-=t.s}i.s=0>e?-1:0,-1>e?i[r++]=this.DV+e:e>0&&(i[r++]=e),i.t=r,i.clamp()}function E(i,r){var e=this.abs(),o=i.abs(),n=e.t;for(r.t=n+o.t;--n>=0;)r[n]=0;for(n=0;n<o.t;++n)r[n+e.t]=e.am(0,o[n],r,n,0,e.t);r.s=0,r.clamp(),this.s!=i.s&&t.ZERO.subTo(r,r)}function w(t){for(var i=this.abs(),r=t.t=2*i.t;--r>=0;)t[r]=0;for(r=0;r<i.t-1;++r){var e=i.am(r,i[r],t,2*r,0,1);(t[r+i.t]+=i.am(r+1,2*i[r],t,2*r+1,e,i.t-r-1))>=i.DV&&(t[r+i.t]-=i.DV,t[r+i.t+1]=1)}t.t>0&&(t[t.t-1]+=i.am(r,i[r],t,2*r,0,1)),t.s=0,t.clamp()}function b(r,e,o){var n=r.abs();if(!(n.t<=0)){var s=this.abs();if(s.t<n.t)return null!=e&&e.fromInt(0),null!=o&&this.copyTo(o),void 0;null==o&&(o=i());var h=i(),F=this.s,u=r.s,f=this.DB-y(n[n.t-1]);f>0?(n.lShiftTo(f,h),s.lShiftTo(f,o)):(n.copyTo(h),s.copyTo(o));var a=h.t,p=h[a-1];if(0!=p){var c=p*(1<<this.F1)+(a>1?h[a-2]>>this.F2:0),l=this.FV/c,m=(1<<this.F1)/c,v=1<<this.F2,g=o.t,d=g-a,B=null==e?i():e;for(h.dlShiftTo(d,B),o.compareTo(B)>=0&&(o[o.t++]=1,o.subTo(B,o)),t.ONE.dlShiftTo(a,B),B.subTo(h,h);h.t<a;)h[h.t++]=0;for(;--d>=0;){var T=o[--g]==p?this.DM:Math.floor(o[g]*l+(o[g-1]+v)*m);if((o[g]+=h.am(0,T,o,d,0,a))<T)for(h.dlShiftTo(d,B),o.subTo(B,o);o[g]<--T;)o.subTo(B,o)}null!=e&&(o.drShiftTo(a,e),F!=u&&t.ZERO.subTo(e,e)),o.t=a,o.clamp(),f>0&&o.rShiftTo(f,o),0>F&&t.ZERO.subTo(o,o)}}}function A(r){var e=i();return this.abs().divRemTo(r,null,e),this.s<0&&e.compareTo(t.ZERO)>0&&r.subTo(e,e),e}function C(t){this.m=t}function q(t){return t.s<0||t.compareTo(this.m)>=0?t.mod(this.m):t}function S(t){return t}function I(t){t.divRemTo(this.m,null,t)}function x(t,i,r){t.multiplyTo(i,r),this.reduce(r)}function O(t,i){t.squareTo(i),this.reduce(i)}function M(){if(this.t<1)return 0;var t=this[0];if(0==(1&t))return 0;var i=3&t;return i=i*(2-(15&t)*i)&15,i=i*(2-(255&t)*i)&255,i=i*(2-((65535&t)*i&65535))&65535,i=i*(2-t*i%this.DV)%this.DV,i>0?this.DV-i:-i}function R(t){this.m=t,this.mp=t.invDigit(),this.mpl=32767&this.mp,this.mph=this.mp>>15,this.um=(1<<t.DB-15)-1,this.mt2=2*t.t}function N(r){var e=i();return r.abs().dlShiftTo(this.m.t,e),e.divRemTo(this.m,null,e),r.s<0&&e.compareTo(t.ZERO)>0&&this.m.subTo(e,e),e}function z(t){var r=i();return t.copyTo(r),this.reduce(r),r}function L(t){for(;t.t<=this.mt2;)t[t.t++]=0;for(var i=0;i<this.m.t;++i){var r=32767&t[i],e=r*this.mpl+((r*this.mph+(t[i]>>15)*this.mpl&this.um)<<15)&t.DM;for(r=i+this.m.t,t[r]+=this.m.am(0,e,t,i,0,this.m.t);t[r]>=t.DV;)t[r]-=t.DV,t[++r]++}t.clamp(),t.drShiftTo(this.m.t,t),t.compareTo(this.m)>=0&&t.subTo(this.m,t)}function V(t,i){t.squareTo(i),this.reduce(i)}function Z(t,i,r){t.multiplyTo(i,r),this.reduce(r)}function P(){return 0==(this.t>0?1&this[0]:this.s)}function k(r,e){if(r>4294967295||1>r)return t.ONE;var o=i(),n=i(),s=e.convert(this),h=y(r)-1;for(s.copyTo(o);--h>=0;)if(e.sqrTo(o,n),(r&1<<h)>0)e.mulTo(n,s,o);else{var F=o;o=n,n=F}return e.revert(o)}function H(t,i){var r;return r=256>t||i.isEven()?new C(i):new R(i),this.exp(t,r)}function j(){var t=i();return this.copyTo(t),t}function U(){if(this.s<0){if(1==this.t)return this[0]-this.DV;if(0==this.t)return-1}else{if(1==this.t)return this[0];if(0==this.t)return 0}return(this[1]&(1<<32-this.DB)-1)<<this.DB|this[0]}function X(){return 0==this.t?this.s:this[0]<<24>>24}function Y(){return 0==this.t?this.s:this[0]<<16>>16}function G(t){return Math.floor(Math.LN2*this.DB/Math.log(t))}function Q(){return this.s<0?-1:this.t<=0||1==this.t&&this[0]<=0?0:1}function K(t){if(null==t&&(t=10),0==this.signum()||2>t||t>36)return"0";var r=this.chunkSize(t),e=Math.pow(t,r),o=u(e),n=i(),s=i(),h="";for(this.divRemTo(o,n,s);n.signum()>0;)h=(e+s.intValue()).toString(t).substr(1)+h,n.divRemTo(o,n,s);return s.intValue().toString(t)+h}function J(i,r){this.fromInt(0),null==r&&(r=10);for(var e=this.chunkSize(r),o=Math.pow(r,e),n=!1,h=0,F=0,u=0;u<i.length;++u){var f=s(i,u);0>f?"-"==i.charAt(u)&&0==this.signum()&&(n=!0):(F=r*F+f,++h>=e&&(this.dMultiply(o),this.dAddOffset(F,0),h=0,F=0))}h>0&&(this.dMultiply(Math.pow(r,h)),this.dAddOffset(F,0)),n&&t.ZERO.subTo(this,this)}function W(i,r,e){if("number"==typeof r)if(2>i)this.fromInt(1);else for(this.fromNumber(i,e),this.testBit(i-1)||this.bitwiseTo(t.ONE.shiftLeft(i-1),ni,this),this.isEven()&&this.dAddOffset(1,0);!this.isProbablePrime(r);)this.dAddOffset(2,0),this.bitLength()>i&&this.subTo(t.ONE.shiftLeft(i-1),this);else{var o=new Array,n=7&i;o.length=(i>>3)+1,r.nextBytes(o),n>0?o[0]&=(1<<n)-1:o[0]=0,this.fromString(o,256)}}function $(){var t=this.t,i=new Array;i[0]=this.s;var r,e=this.DB-t*this.DB%8,o=0;if(t-->0)for(e<this.DB&&(r=this[t]>>e)!=(this.s&this.DM)>>e&&(i[o++]=r|this.s<<this.DB-e);t>=0;)8>e?(r=(this[t]&(1<<e)-1)<<8-e,r|=this[--t]>>(e+=this.DB-8)):(r=this[t]>>(e-=8)&255,0>=e&&(e+=this.DB,--t)),0!=(128&r)&&(r|=-256),0==o&&(128&this.s)!=(128&r)&&++o,(o>0||r!=this.s)&&(i[o++]=r);return i}function _(t){return 0==this.compareTo(t)}function ti(t){return this.compareTo(t)<0?this:t}function ii(t){return this.compareTo(t)>0?this:t}function ri(t,i,r){var e,o,n=Math.min(t.t,this.t);for(e=0;n>e;++e)r[e]=i(this[e],t[e]);if(t.t<this.t){for(o=t.s&this.DM,e=n;e<this.t;++e)r[e]=i(this[e],o);r.t=this.t}else{for(o=this.s&this.DM,e=n;e<t.t;++e)r[e]=i(o,t[e]);r.t=t.t}r.s=i(this.s,t.s),r.clamp()}function ei(t,i){return t&i}function oi(t){var r=i();return this.bitwiseTo(t,ei,r),r}function ni(t,i){return t|i}function si(t){var r=i();return this.bitwiseTo(t,ni,r),r}function hi(t,i){return t^i}function Fi(t){var r=i();return this.bitwiseTo(t,hi,r),r}function ui(t,i){return t&~i}function fi(t){var r=i();return this.bitwiseTo(t,ui,r),r}function ai(){for(var t=i(),r=0;r<this.t;++r)t[r]=this.DM&~this[r];return t.t=this.t,t.s=~this.s,t}function pi(t){var r=i();return 0>t?this.rShiftTo(-t,r):this.lShiftTo(t,r),r}function ci(t){var r=i();return 0>t?this.lShiftTo(-t,r):this.rShiftTo(t,r),r}function li(t){if(0==t)return-1;var i=0;return 0==(65535&t)&&(t>>=16,i+=16),0==(255&t)&&(t>>=8,i+=8),0==(15&t)&&(t>>=4,i+=4),0==(3&t)&&(t>>=2,i+=2),0==(1&t)&&++i,i}function mi(){for(var t=0;t<this.t;++t)if(0!=this[t])return t*this.DB+li(this[t]);return this.s<0?this.t*this.DB:-1}function yi(t){for(var i=0;0!=t;)t&=t-1,++i;return i}function vi(){for(var t=0,i=this.s&this.DM,r=0;r<this.t;++r)t+=yi(this[r]^i);return t}function gi(t){var i=Math.floor(t/this.DB);return i>=this.t?0!=this.s:0!=(this[i]&1<<t%this.DB)}function di(i,r){var e=t.ONE.shiftLeft(i);return this.bitwiseTo(e,r,e),e}function Bi(t){return this.changeBit(t,ni)}function Ti(t){return this.changeBit(t,ui)}function Di(t){return this.changeBit(t,hi)}function Ei(t,i){for(var r=0,e=0,o=Math.min(t.t,this.t);o>r;)e+=this[r]+t[r],i[r++]=e&this.DM,e>>=this.DB;if(t.t<this.t){for(e+=t.s;r<this.t;)e+=this[r],i[r++]=e&this.DM,e>>=this.DB;e+=this.s}else{for(e+=this.s;r<t.t;)e+=t[r],i[r++]=e&this.DM,e>>=this.DB;e+=t.s}i.s=0>e?-1:0,e>0?i[r++]=e:-1>e&&(i[r++]=this.DV+e),i.t=r,i.clamp()}function wi(t){var r=i();return this.addTo(t,r),r}function bi(t){var r=i();return this.subTo(t,r),r}function Ai(t){var r=i();return this.multiplyTo(t,r),r}function Ci(){var t=i();return this.squareTo(t),t}function qi(t){var r=i();return this.divRemTo(t,r,null),r}function Si(t){var r=i();return this.divRemTo(t,null,r),r}function Ii(t){var r=i(),e=i();return this.divRemTo(t,r,e),new Array(r,e)}function xi(t){this[this.t]=this.am(0,t-1,this,0,0,this.t),++this.t,this.clamp()}function Oi(t,i){if(0!=t){for(;this.t<=i;)this[this.t++]=0;for(this[i]+=t;this[i]>=this.DV;)this[i]-=this.DV,++i>=this.t&&(this[this.t++]=0),++this[i]}}function Mi(){}function Ri(t){return t}function Ni(t,i,r){t.multiplyTo(i,r)}function zi(t,i){t.squareTo(i)}function Li(t){return this.exp(t,new Mi)}function Vi(t,i,r){var e=Math.min(this.t+t.t,i);for(r.s=0,r.t=e;e>0;)r[--e]=0;var o;for(o=r.t-this.t;o>e;++e)r[e+this.t]=this.am(0,t[e],r,e,0,this.t);for(o=Math.min(t.t,i);o>e;++e)this.am(0,t[e],r,e,0,i-e);r.clamp()}function Zi(t,i,r){--i;var e=r.t=this.t+t.t-i;for(r.s=0;--e>=0;)r[e]=0;for(e=Math.max(i-this.t,0);e<t.t;++e)r[this.t+e-i]=this.am(i-e,t[e],r,0,0,this.t+e-i);r.clamp(),r.drShiftTo(1,r)}function Pi(r){this.r2=i(),this.q3=i(),t.ONE.dlShiftTo(2*r.t,this.r2),this.mu=this.r2.divide(r),this.m=r}function ki(t){if(t.s<0||t.t>2*this.m.t)return t.mod(this.m);if(t.compareTo(this.m)<0)return t;var r=i();return t.copyTo(r),this.reduce(r),r}function Hi(t){return t}function ji(t){for(t.drShiftTo(this.m.t-1,this.r2),t.t>this.m.t+1&&(t.t=this.m.t+1,t.clamp()),this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3),this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);t.compareTo(this.r2)<0;)t.dAddOffset(1,this.m.t+1);for(t.subTo(this.r2,t);t.compareTo(this.m)>=0;)t.subTo(this.m,t)}function Ui(t,i){t.squareTo(i),this.reduce(i)}function Xi(t,i,r){t.multiplyTo(i,r),this.reduce(r)}function Yi(t,r){var e,o,n=t.bitLength(),s=u(1);if(0>=n)return s;e=18>n?1:48>n?3:144>n?4:768>n?5:6,o=8>n?new C(r):r.isEven()?new Pi(r):new R(r);var h=new Array,F=3,f=e-1,a=(1<<e)-1;if(h[1]=o.convert(this),e>1){var p=i();for(o.sqrTo(h[1],p);a>=F;)h[F]=i(),o.mulTo(p,h[F-2],h[F]),F+=2}var c,l,m=t.t-1,v=!0,g=i();for(n=y(t[m])-1;m>=0;){for(n>=f?c=t[m]>>n-f&a:(c=(t[m]&(1<<n+1)-1)<<f-n,m>0&&(c|=t[m-1]>>this.DB+n-f)),F=e;0==(1&c);)c>>=1,--F;if((n-=F)<0&&(n+=this.DB,--m),v)h[c].copyTo(s),v=!1;else{for(;F>1;)o.sqrTo(s,g),o.sqrTo(g,s),F-=2;F>0?o.sqrTo(s,g):(l=s,s=g,g=l),o.mulTo(g,h[c],s)}for(;m>=0&&0==(t[m]&1<<n);)o.sqrTo(s,g),l=s,s=g,g=l,--n<0&&(n=this.DB-1,--m)}return o.revert(s)}function Gi(t){var i=this.s<0?this.negate():this.clone(),r=t.s<0?t.negate():t.clone();if(i.compareTo(r)<0){var e=i;i=r,r=e}var o=i.getLowestSetBit(),n=r.getLowestSetBit();if(0>n)return i;for(n>o&&(n=o),n>0&&(i.rShiftTo(n,i),r.rShiftTo(n,r));i.signum()>0;)(o=i.getLowestSetBit())>0&&i.rShiftTo(o,i),(o=r.getLowestSetBit())>0&&r.rShiftTo(o,r),i.compareTo(r)>=0?(i.subTo(r,i),i.rShiftTo(1,i)):(r.subTo(i,r),r.rShiftTo(1,r));return n>0&&r.lShiftTo(n,r),r}function Qi(t){if(0>=t)return 0;var i=this.DV%t,r=this.s<0?t-1:0;if(this.t>0)if(0==i)r=this[0]%t;else for(var e=this.t-1;e>=0;--e)r=(i*r+this[e])%t;return r}function Ki(i){var r=i.isEven();if(this.isEven()&&r||0==i.signum())return t.ZERO;for(var e=i.clone(),o=this.clone(),n=u(1),s=u(0),h=u(0),F=u(1);0!=e.signum();){for(;e.isEven();)e.rShiftTo(1,e),r?(n.isEven()&&s.isEven()||(n.addTo(this,n),s.subTo(i,s)),n.rShiftTo(1,n)):s.isEven()||s.subTo(i,s),s.rShiftTo(1,s);for(;o.isEven();)o.rShiftTo(1,o),r?(h.isEven()&&F.isEven()||(h.addTo(this,h),F.subTo(i,F)),h.rShiftTo(1,h)):F.isEven()||F.subTo(i,F),F.rShiftTo(1,F);e.compareTo(o)>=0?(e.subTo(o,e),r&&n.subTo(h,n),s.subTo(F,s)):(o.subTo(e,o),r&&h.subTo(n,h),F.subTo(s,F))}return 0!=o.compareTo(t.ONE)?t.ZERO:F.compareTo(i)>=0?F.subtract(i):F.signum()<0?(F.addTo(i,F),F.signum()<0?F.add(i):F):F}function Ji(t){var i,r=this.abs();if(1==r.t&&r[0]<=we[we.length-1]){for(i=0;i<we.length;++i)if(r[0]==we[i])return!0;return!1}if(r.isEven())return!1;for(i=1;i<we.length;){for(var e=we[i],o=i+1;o<we.length&&be>e;)e*=we[o++];for(e=r.modInt(e);o>i;)if(e%we[i++]==0)return!1}return r.millerRabin(t)}function Wi(r){var e=this.subtract(t.ONE),o=e.getLowestSetBit();if(0>=o)return!1;var n=e.shiftRight(o);r=r+1>>1,r>we.length&&(r=we.length);for(var s=i(),h=0;r>h;++h){s.fromInt(we[Math.floor(Math.random()*we.length)]);var F=s.modPow(n,this);if(0!=F.compareTo(t.ONE)&&0!=F.compareTo(e)){for(var u=1;u++<o&&0!=F.compareTo(e);)if(F=F.modPowInt(2,this),0==F.compareTo(t.ONE))return!1;if(0!=F.compareTo(e))return!1}}return!0}function $i(){this.i=0,this.j=0,this.S=new Array}function _i(t){var i,r,e;for(i=0;256>i;++i)this.S[i]=i;for(r=0,i=0;256>i;++i)r=r+this.S[i]+t[i%t.length]&255,e=this.S[i],this.S[i]=this.S[r],this.S[r]=e;this.i=0,this.j=0}function tr(){var t;return this.i=this.i+1&255,this.j=this.j+this.S[this.i]&255,t=this.S[this.i],this.S[this.i]=this.S[this.j],this.S[this.j]=t,this.S[t+this.S[this.i]&255]}function ir(){return new $i}function rr(t){Ce[qe++]^=255&t,Ce[qe++]^=t>>8&255,Ce[qe++]^=t>>16&255,Ce[qe++]^=t>>24&255,qe>=Se&&(qe-=Se)}function er(){rr((new Date).getTime())}function or(){if(null==Ae){for(er(),Ae=ir(),Ae.init(Ce),qe=0;qe<Ce.length;++qe)Ce[qe]=0;qe=0}return Ae.next()}function nr(t){var i;for(i=0;i<t.length;++i)t[i]=or()}function sr(){}function hr(t,i){this.x=i,this.q=t}function Fr(t){return t==this?!0:this.q.equals(t.q)&&this.x.equals(t.x)}function ur(){return this.x}function fr(){return new hr(this.q,this.x.negate().mod(this.q))}function ar(t){return new hr(this.q,this.x.add(t.toBigInteger()).mod(this.q))}function pr(t){return new hr(this.q,this.x.subtract(t.toBigInteger()).mod(this.q))}function cr(t){return new hr(this.q,this.x.multiply(t.toBigInteger()).mod(this.q))}function lr(){return new hr(this.q,this.x.square().mod(this.q))}function mr(t){return new hr(this.q,this.x.multiply(t.toBigInteger().modInverse(this.q)).mod(this.q))}function yr(i,r,e,o){this.curve=i,this.x=r,this.y=e,this.z=null==o?t.ONE:o,this.zinv=null}function vr(){null==this.zinv&&(this.zinv=this.z.modInverse(this.curve.q));var t=this.x.toBigInteger().multiply(this.zinv);return this.curve.reduce(t),this.curve.fromBigInteger(t)}function gr(){null==this.zinv&&(this.zinv=this.z.modInverse(this.curve.q));var t=this.y.toBigInteger().multiply(this.zinv);return this.curve.reduce(t),this.curve.fromBigInteger(t)}function dr(i){if(i==this)return!0;if(this.isInfinity())return i.isInfinity();if(i.isInfinity())return this.isInfinity();var r,e;return r=i.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(i.z)).mod(this.curve.q),r.equals(t.ZERO)?(e=i.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(i.z)).mod(this.curve.q),e.equals(t.ZERO)):!1}function Br(){return null==this.x&&null==this.y?!0:this.z.equals(t.ZERO)&&!this.y.toBigInteger().equals(t.ZERO)}function Tr(){return new yr(this.curve,this.x,this.y.negate(),this.z)}function Dr(i){if(this.isInfinity())return i;if(i.isInfinity())return this;var r=i.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(i.z)).mod(this.curve.q),e=i.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(i.z)).mod(this.curve.q);if(t.ZERO.equals(e))return t.ZERO.equals(r)?this.twice():this.curve.getInfinity();var o=new t("3"),n=this.x.toBigInteger(),s=this.y.toBigInteger(),h=(i.x.toBigInteger(),i.y.toBigInteger(),e.square()),F=h.multiply(e),u=n.multiply(h),f=r.square().multiply(this.z),a=f.subtract(u.shiftLeft(1)).multiply(i.z).subtract(F).multiply(e).mod(this.curve.q),p=u.multiply(o).multiply(r).subtract(s.multiply(F)).subtract(f.multiply(r)).multiply(i.z).add(r.multiply(F)).mod(this.curve.q),c=F.multiply(this.z).multiply(i.z).mod(this.curve.q);return new yr(this.curve,this.curve.fromBigInteger(a),this.curve.fromBigInteger(p),c)}function Er(){if(this.isInfinity())return this;if(0==this.y.toBigInteger().signum())return this.curve.getInfinity();var i=new t("3"),r=this.x.toBigInteger(),e=this.y.toBigInteger(),o=e.multiply(this.z),n=o.multiply(e).mod(this.curve.q),s=this.curve.a.toBigInteger(),h=r.square().multiply(i);t.ZERO.equals(s)||(h=h.add(this.z.square().multiply(s))),h=h.mod(this.curve.q);var F=h.square().subtract(r.shiftLeft(3).multiply(n)).shiftLeft(1).multiply(o).mod(this.curve.q),u=h.multiply(i).multiply(r).subtract(n.shiftLeft(1)).shiftLeft(2).multiply(n).subtract(h.square().multiply(h)).mod(this.curve.q),f=o.square().multiply(o).shiftLeft(3).mod(this.curve.q);return new yr(this.curve,this.curve.fromBigInteger(F),this.curve.fromBigInteger(u),f)}function wr(i){if(this.isInfinity())return this;if(0==i.signum())return this.curve.getInfinity();var r,e=i,o=e.multiply(new t("3")),n=this.negate(),s=this;for(r=o.bitLength()-2;r>0;--r){s=s.twice();var h=o.testBit(r),F=e.testBit(r);h!=F&&(s=s.add(h?this:n))}return s}function br(t,i,r){var e;e=t.bitLength()>r.bitLength()?t.bitLength()-1:r.bitLength()-1;for(var o=this.curve.getInfinity(),n=this.add(i);e>=0;)o=o.twice(),t.testBit(e)?o=r.testBit(e)?o.add(n):o.add(this):r.testBit(e)&&(o=o.add(i)),--e;return o}function Ar(t,i,r){this.q=t,this.a=this.fromBigInteger(i),this.b=this.fromBigInteger(r),this.infinity=new yr(this,null,null),this.reducer=new Pi(this.q)}function Cr(){return this.q}function qr(){return this.a}function Sr(){return this.b}function Ir(t){return t==this?!0:this.q.equals(t.q)&&this.a.equals(t.a)&&this.b.equals(t.b)}function xr(){return this.infinity}function Or(t){return new hr(this.q,t)}function Mr(t){this.reducer.reduce(t)}function Rr(i){switch(parseInt(i.substr(0,2),16)){case 0:return this.infinity;case 2:case 3:return null;case 4:case 6:case 7:var r=(i.length-2)/2,e=i.substr(2,r),o=i.substr(r+2,r);return new yr(this,this.fromBigInteger(new t(e,16)),this.fromBigInteger(new t(o,16)));default:return null}}function Nr(t){if(t.isInfinity())return"00";var i=t.getX().toBigInteger().toString(16),r=t.getY().toBigInteger().toString(16),e=this.getQ().toString(16).length;for(e%2!=0&&e++;i.length<e;)i="0"+i;for(;r.length<e;)r="0"+r;return"04"+i+r}function zr(t,i,r,e){this.curve=t,this.g=i,this.n=r,this.h=e}function Lr(){return this.curve}function Vr(){return this.g}function Zr(){return this.n}function Pr(){return this.h}function kr(i){return new t(i,16)}function Hr(){var i=kr("FFFFFFFDFFFFFFFFFFFFFFFFFFFFFFFF"),r=kr("FFFFFFFDFFFFFFFFFFFFFFFFFFFFFFFC"),e=kr("E87579C11079F43DD824993C2CEE5ED3"),o=kr("FFFFFFFE0000000075A30D1B9038A115"),n=t.ONE,s=new Ar(i,r,e),h=s.decodePointHex("04161FF7528B899B2D0C28607CA52C5B86CF5AC8395BAFEB13C02DA292DDED7A83");return new zr(s,h,o,n)}function jr(){var i=kr("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFAC73"),r=t.ZERO,e=kr("7"),o=kr("0100000000000000000001B8FA16DFAB9ACA16B6B3"),n=t.ONE,s=new Ar(i,r,e),h=s.decodePointHex("043B4C382CE37AA192A4019E763036F4F5DD4D7EBB938CF935318FDCED6BC28286531733C3F03C4FEE");return new zr(s,h,o,n)}function Ur(){var i=kr("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7FFFFFFF"),r=kr("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7FFFFFFC"),e=kr("1C97BEFC54BD7A8B65ACF89F81D4D4ADC565FA45"),o=kr("0100000000000000000001F4C8F927AED3CA752257"),n=t.ONE,s=new Ar(i,r,e),h=s.decodePointHex("044A96B5688EF573284664698968C38BB913CBFC8223A628553168947D59DCC912042351377AC5FB32");return new zr(s,h,o,n)}function Xr(){var i=kr("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFEE37"),r=t.ZERO,e=kr("3"),o=kr("FFFFFFFFFFFFFFFFFFFFFFFE26F2FC170F69466A74DEFD8D"),n=t.ONE,s=new Ar(i,r,e),h=s.decodePointHex("04DB4FF10EC057E9AE26B07D0280B7F4341DA5D1B1EAE06C7D9B2F2F6D9C5628A7844163D015BE86344082AA88D95E2F9D");return new zr(s,h,o,n)}function Yr(){var i=kr("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFF"),r=kr("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFC"),e=kr("64210519E59C80E70FA7E9AB72243049FEB8DEECC146B9B1"),o=kr("FFFFFFFFFFFFFFFFFFFFFFFF99DEF836146BC9B1B4D22831"),n=t.ONE,s=new Ar(i,r,e),h=s.decodePointHex("04188DA80EB03090F67CBF20EB43A18800F4FF0AFD82FF101207192B95FFC8DA78631011ED6B24CDD573F977A11E794811");return new zr(s,h,o,n)}function Gr(){var i=kr("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF000000000000000000000001"),r=kr("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFE"),e=kr("B4050A850C04B3ABF54132565044B0B7D7BFD8BA270B39432355FFB4"),o=kr("FFFFFFFFFFFFFFFFFFFFFFFFFFFF16A2E0B8F03E13DD29455C5C2A3D"),n=t.ONE,s=new Ar(i,r,e),h=s.decodePointHex("04B70E0CBD6BB4BF7F321390B94A03C1D356C21122343280D6115C1D21BD376388B5F723FB4C22DFE6CD4375A05A07476444D5819985007E34");return new zr(s,h,o,n)}function Qr(){var i=kr("FFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFF"),r=kr("FFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFC"),e=kr("5AC635D8AA3A93E7B3EBBD55769886BC651D06B0CC53B0F63BCE3C3E27D2604B"),o=kr("FFFFFFFF00000000FFFFFFFFFFFFFFFFBCE6FAADA7179E84F3B9CAC2FC632551"),n=t.ONE,s=new Ar(i,r,e),h=s.decodePointHex("046B17D1F2E12C4247F8BCE6E563A440F277037D812DEB33A0F4A13945D898C2964FE342E2FE1A7F9B8EE7EB4A7C0F9E162BCE33576B315ECECBB6406837BF51F5");return new zr(s,h,o,n)}function Kr(t){return"secp128r1"==t?Hr():"secp160k1"==t?jr():"secp160r1"==t?Ur():"secp192k1"==t?Xr():"secp192r1"==t?Yr():"secp224r1"==t?Gr():"secp256r1"==t?Qr():null}function Jr(t){return te($r(ie(t)))}function Wr(t,i){return te(_r(ie(t),ie(i)))}function $r(t){return ee(oe(re(t),8*t.length))}function _r(t,i){var r=re(t);r.length>16&&(r=oe(r,8*t.length));for(var e=Array(16),o=Array(16),n=0;16>n;n++)e[n]=909522486^r[n],o[n]=1549556828^r[n];var s=oe(e.concat(re(i)),512+8*i.length);return ee(oe(o.concat(s),672))}function te(t){try{}catch(i){Me=0}for(var r,e=Me?"0123456789ABCDEF":"0123456789abcdef",o="",n=0;n<t.length;n++)r=t.charCodeAt(n),o+=e.charAt(r>>>4&15)+e.charAt(15&r);return o}function ie(t){for(var i,r,e="",o=-1;++o<t.length;)i=t.charCodeAt(o),r=o+1<t.length?t.charCodeAt(o+1):0,i>=55296&&56319>=i&&r>=56320&&57343>=r&&(i=65536+((1023&i)<<10)+(1023&r),o++),127>=i?e+=String.fromCharCode(i):2047>=i?e+=String.fromCharCode(192|i>>>6&31,128|63&i):65535>=i?e+=String.fromCharCode(224|i>>>12&15,128|i>>>6&63,128|63&i):2097151>=i&&(e+=String.fromCharCode(240|i>>>18&7,128|i>>>12&63,128|i>>>6&63,128|63&i));return e}function re(t){for(var i=Array(t.length>>2),r=0;r<i.length;r++)i[r]=0;for(var r=0;r<8*t.length;r+=8)i[r>>5]|=(255&t.charCodeAt(r/8))<<24-r%32;return i}function ee(t){for(var i="",r=0;r<32*t.length;r+=8)i+=String.fromCharCode(t[r>>5]>>>24-r%32&255);return i}function oe(t,i){t[i>>5]|=128<<24-i%32,t[(i+64>>9<<4)+15]=i;for(var r=Array(80),e=1732584193,o=-271733879,n=-1732584194,s=271733878,h=-1009589776,F=0;F<t.length;F+=16){for(var u=e,f=o,a=n,p=s,c=h,l=0;80>l;l++){r[l]=16>l?t[F+l]:Fe(r[l-3]^r[l-8]^r[l-14]^r[l-16],1);var m=he(he(Fe(e,5),ne(l,o,n,s)),he(he(h,r[l]),se(l)));h=s,s=n,n=Fe(o,30),o=e,e=m}e=he(e,u),o=he(o,f),n=he(n,a),s=he(s,p),h=he(h,c)}return Array(e,o,n,s,h)}function ne(t,i,r,e){return 20>t?i&r|~i&e:40>t?i^r^e:60>t?i&r|i&e|r&e:i^r^e}function se(t){return 20>t?1518500249:40>t?1859775393:60>t?-1894007588:-899497514}function he(t,i){var r=(65535&t)+(65535&i),e=(t>>16)+(i>>16)+(r>>16);return e<<16|65535&r}function Fe(t,i){return t<<i|t>>>32-i}function ue(i){return new t(i)}function fe(i){return new t(i||160,Re)}function ae(t){function i(){er()}var r=t.body;r.addEventListener?(r.addEventListener("click",i,!1),r.addEventListener("keyPress",i,!1)):(r.attachEvent("onclick",i),r.attachEvent("keyPress",i))}function pe(t,i){return Wr(t,i).toUpperCase()}function ce(i){var r=new t(i.getN().toString()),e=r.subtract(t.ONE),o=new t(r.bitLength(),Re);return o.mod(e).add(t.ONE)}function le(t){var i=ce(t),r=t.getG(),e=r.multiply(i);return{v:i.toString(),x:e.getX().toBigInteger().toString(),y:e.getY().toBigInteger().toString()}}function me(i,r,e,o){var n=i.getCurve(),s=new yr(n,n.fromBigInteger(new t(e)),n.fromBigInteger(new t(o))),h=new t(r);return s.multiply(h).getX().toBigInteger().toString()}var ye,ve=0xdeadbeefcafe,ge=15715070==(16777215&ve);ge&&"Microsoft Internet Explorer"==navigator.appName?(t.prototype.am=e,ye=30):ge&&"Netscape"!=navigator.appName?(t.prototype.am=r,ye=26):(t.prototype.am=o,ye=28),t.prototype.DB=ye,t.prototype.DM=(1<<ye)-1,t.prototype.DV=1<<ye;var de=52;t.prototype.FV=Math.pow(2,de),t.prototype.F1=de-ye,t.prototype.F2=2*ye-de;var Be,Te,De="0123456789abcdefghijklmnopqrstuvwxyz",Ee=new Array;for(Be="0".charCodeAt(0),Te=0;9>=Te;++Te)Ee[Be++]=Te;for(Be="a".charCodeAt(0),Te=10;36>Te;++Te)Ee[Be++]=Te;for(Be="A".charCodeAt(0),Te=10;36>Te;++Te)Ee[Be++]=Te;C.prototype.convert=q,C.prototype.revert=S,C.prototype.reduce=I,C.prototype.mulTo=x,C.prototype.sqrTo=O,R.prototype.convert=N,R.prototype.revert=z,R.prototype.reduce=L,R.prototype.mulTo=Z,R.prototype.sqrTo=V,t.prototype.copyTo=h,t.prototype.fromInt=F,t.prototype.fromString=f,t.prototype.clamp=a,t.prototype.dlShiftTo=g,t.prototype.drShiftTo=d,t.prototype.lShiftTo=B,t.prototype.rShiftTo=T,t.prototype.subTo=D,t.prototype.multiplyTo=E,t.prototype.squareTo=w,t.prototype.divRemTo=b,t.prototype.invDigit=M,t.prototype.isEven=P,t.prototype.exp=k,t.prototype.toString=p,t.prototype.negate=c,t.prototype.abs=l,t.prototype.compareTo=m,t.prototype.bitLength=v,t.prototype.mod=A,t.prototype.modPowInt=H,t.ZERO=u(0),t.ONE=u(1),Mi.prototype.convert=Ri,Mi.prototype.revert=Ri,Mi.prototype.mulTo=Ni,Mi.prototype.sqrTo=zi,Pi.prototype.convert=ki,Pi.prototype.revert=Hi,Pi.prototype.reduce=ji,Pi.prototype.mulTo=Xi,Pi.prototype.sqrTo=Ui;var we=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997],be=(1<<26)/we[we.length-1];t.prototype.chunkSize=G,t.prototype.toRadix=K,t.prototype.fromRadix=J,t.prototype.fromNumber=W,t.prototype.bitwiseTo=ri,t.prototype.changeBit=di,t.prototype.addTo=Ei,t.prototype.dMultiply=xi,t.prototype.dAddOffset=Oi,t.prototype.multiplyLowerTo=Vi,t.prototype.multiplyUpperTo=Zi,t.prototype.modInt=Qi,t.prototype.millerRabin=Wi,t.prototype.clone=j,t.prototype.intValue=U,t.prototype.byteValue=X,t.prototype.shortValue=Y,t.prototype.signum=Q,t.prototype.toByteArray=$,t.prototype.equals=_,t.prototype.min=ti,t.prototype.max=ii,t.prototype.and=oi,t.prototype.or=si,t.prototype.xor=Fi,t.prototype.andNot=fi,t.prototype.not=ai,t.prototype.shiftLeft=pi,t.prototype.shiftRight=ci,t.prototype.getLowestSetBit=mi,t.prototype.bitCount=vi,t.prototype.testBit=gi,t.prototype.setBit=Bi,t.prototype.clearBit=Ti,t.prototype.flipBit=Di,t.prototype.add=wi,t.prototype.subtract=bi,t.prototype.multiply=Ai,t.prototype.divide=qi,t.prototype.remainder=Si,t.prototype.divideAndRemainder=Ii,t.prototype.modPow=Yi,t.prototype.modInverse=Ki,t.prototype.pow=Li,t.prototype.gcd=Gi,t.prototype.isProbablePrime=Ji,t.prototype.square=Ci,$i.prototype.init=_i,$i.prototype.next=tr;var Ae,Ce,qe,Se=256;if(null==Ce){Ce=new Array,qe=0;var Ie;if(window.crypto&&window.crypto.getRandomValues){var xe=new Uint8Array(32);for(window.crypto.getRandomValues(xe),Ie=0;32>Ie;++Ie)Ce[qe++]=xe[Ie]}if("Netscape"==navigator.appName&&navigator.appVersion<"5"&&window.crypto){var Oe=window.crypto.random(32);for(Ie=0;Ie<Oe.length;++Ie)Ce[qe++]=255&Oe.charCodeAt(Ie)}for(;Se>qe;)Ie=Math.floor(65536*Math.random()),Ce[qe++]=Ie>>>8,Ce[qe++]=255&Ie;qe=0,er()}sr.prototype.nextBytes=nr,hr.prototype.equals=Fr,hr.prototype.toBigInteger=ur,hr.prototype.negate=fr,hr.prototype.add=ar,hr.prototype.subtract=pr,hr.prototype.multiply=cr,hr.prototype.square=lr,hr.prototype.divide=mr,yr.prototype.getX=vr,yr.prototype.getY=gr,yr.prototype.equals=dr,yr.prototype.isInfinity=Br,yr.prototype.negate=Tr,yr.prototype.add=Dr,yr.prototype.twice=Er,yr.prototype.multiply=wr,yr.prototype.multiplyTwo=br,Ar.prototype.getQ=Cr,Ar.prototype.getA=qr,Ar.prototype.getB=Sr,Ar.prototype.equals=Ir,Ar.prototype.getInfinity=xr,Ar.prototype.fromBigInteger=Or,Ar.prototype.reduce=Mr,Ar.prototype.decodePointHex=Rr,Ar.prototype.encodePointHex=Nr,zr.prototype.getCurve=Lr,zr.prototype.getG=Vr,zr.prototype.getN=Zr,zr.prototype.getH=Pr;var Me=0,Re=new sr;window.jsbn={init:ae,sha1:Jr,hmac:pe,big:ue,random:fe},window.jsbn.ec={curve:Kr,random:ce,generate:le,computeKey:me}}();