if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let o={};const t=e=>i(e,c),l={module:{uri:c},exports:o,require:t};s[c]=Promise.all(n.map((e=>l[e]||t(e)))).then((e=>(r(...e),o)))}}define(["./workbox-5b385ed2"],(function(e){"use strict";e.setCacheNameDetails({prefix:"myapp"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/.well-known/assetlinks.json",revision:"1b2b2e932395399fcb6101ed22f136c3"},{url:"/css/app.6969f1c7.css",revision:null},{url:"/firebase-messaging-sw.js",revision:"9283008bfc508c3e2340664c4811c526"},{url:"/index.html",revision:"c45c053677e8fc5a613715aa8f4bf3fa"},{url:"/js/app.ccaf49ad.js",revision:null},{url:"/js/chunk-vendors.c04f4e08.js",revision:null},{url:"/manifest.json",revision:"fb4b0f6c10067ebcb6fed2b06d92b3de"},{url:"/menifest.json",revision:"dedd2bdb762bbf53fc758b9a4b6a0836"},{url:"/privacy.txt",revision:"dd106aadea5fd996dc903403b45dd2bb"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map