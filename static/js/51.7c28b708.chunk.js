(self.webpackChunkhospital=self.webpackChunkhospital||[]).push([[51,177],{10533:function(t,e,n){"use strict";n.d(e,{d:function(){return h}});var r=n(74165),i=n(15861),a=n(15671),o=n(43144),c=n(60136),s=n(29388),u=n(45781),h=function(t){(0,c.Z)(n,t);var e=(0,s.Z)(n);function n(){return(0,a.Z)(this,n),e.apply(this,arguments)}return(0,o.Z)(n,[{key:"authenticateUser",value:function(){var t=(0,i.Z)((0,r.Z)().mark((function t(){var e,n,i,a,o,c,s,h,d,p;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.provider&&null!==(e=this.chainConfig)&&void 0!==e&&e.chainId){t.next=2;break}throw u.RM.notConnectedError();case 2:if(n=this.chainConfig,i=n.chainNamespace,a=n.chainId,this.status===u.MP.CONNECTED){t.next=5;break}throw u.RM.notConnectedError("Not connected with wallet, Please login/connect first");case 5:return t.next=7,this.provider.request({method:"eth_accounts"});case 7:if(!((o=t.sent)&&o.length>0)){t.next=26;break}if(!(c=(0,u.Cb)(o[0],this.name))){t.next=14;break}if((0,u.$E)(c)){t.next=14;break}return t.abrupt("return",{idToken:c});case 14:return s={domain:window.location.origin,uri:window.location.href,address:o[0],chainId:parseInt(a,16),version:"1",nonce:Math.random().toString(36).slice(2),issuedAt:(new Date).toISOString()},t.next=17,(0,u.tV)(s,i);case 17:return h=t.sent,t.next=20,this.provider.request({method:"personal_sign",params:[h,o[0]]});case 20:return d=t.sent,t.next=23,(0,u.rn)(i,d,h,this.name,this.sessionTime);case 23:return p=t.sent,(0,u.Fr)(o[0],this.name,p),t.abrupt("return",{idToken:p});case 26:throw u.RM.notConnectedError("Not connected with wallet, Please login/connect first");case 27:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"disconnect",value:function(){var t=(0,i.Z)((0,r.Z)().mark((function t(){var e;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.status===u.MP.CONNECTED){t.next=2;break}throw u.RM.disconnectionError("Not connected with wallet");case 2:return t.next=4,this.provider.request({method:"eth_accounts"});case 4:(e=t.sent)&&e.length>0&&(0,u.qz)(e[0],this.name);case 6:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()}]),n}(u.J5)},57814:function(t,e,n){"use strict";n.r(e),n.d(e,{WalletConnectV1Adapter:function(){return C}});var r=n(74165),i=n(15861),a=n(15671),o=n(43144),c=n(97326),s=n(11752),u=n(61120),h=n(60136),d=n(29388),p=n(4942),l=n(9547),f=n(24156),v=function(t){(0,h.Z)(n,t);var e=(0,d.Z)(n);function n(t,r){return(0,a.Z)(this,n),e.call(this,{cryptoLib:f,connectorOpts:t,pushServerOpts:r})}return(0,o.Z)(n)}(l.Z),w=n(45781),k=n(10533),y=n(27562),g=[{name:"Rainbow",chains:[w.EN.EIP155],logo:"https://images.web3auth.io/login-rainbow.svg",mobile:{native:"rainbow:",universal:"https://rnbwapp.com"},desktop:{native:"",universal:""}},{name:"MetaMask",chains:[w.EN.EIP155],logo:"https://images.web3auth.io/login-metamask.svg",mobile:{native:"metamask:",universal:"https://metamask.app.link"},desktop:{native:"",universal:""}}];function Z(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Z(Object(n),!0).forEach((function(e){(0,p.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var C=function(t){(0,h.Z)(n,t);var e=(0,d.Z)(n);function n(){var t;(0,a.Z)(this,n);var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t=e.call(this),(0,p.Z)((0,c.Z)(t),"name",w.rW.WALLET_CONNECT_V1),(0,p.Z)((0,c.Z)(t),"adapterNamespace",w.yk.EIP155),(0,p.Z)((0,c.Z)(t),"currentChainNamespace",w.EN.EIP155),(0,p.Z)((0,c.Z)(t),"type",w.hN.EXTERNAL),(0,p.Z)((0,c.Z)(t),"adapterOptions",void 0),(0,p.Z)((0,c.Z)(t),"status",w.MP.NOT_READY),(0,p.Z)((0,c.Z)(t),"adapterData",{uri:"",extensionAdapters:g}),(0,p.Z)((0,c.Z)(t),"connector",null),(0,p.Z)((0,c.Z)(t),"wcProvider",null),(0,p.Z)((0,c.Z)(t),"rehydrated",!1),t.adapterOptions=m({},r),t.chainConfig=r.chainConfig||null,t.sessionTime=r.sessionTime||86400,t}return(0,o.Z)(n,[{key:"connected",get:function(){var t;return!(null===(t=this.connector)||void 0===t||!t.connected)}},{key:"provider",get:function(){var t;return(null===(t=this.wcProvider)||void 0===t?void 0:t.provider)||null},set:function(t){throw new Error("Not implemented")}},{key:"init",value:function(){var t=(0,i.Z)((0,r.Z)().mark((function t(){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((0,s.Z)((0,u.Z)(n.prototype),"checkInitializationRequirements",this).call(this),this.chainConfig||(this.chainConfig=(0,w.h2)(w.EN.EIP155,1)),this.connector=this.getWalletConnectInstance(),this.wcProvider=new y.WalletConnectProvider({config:{chainConfig:this.chainConfig},connector:this.connector}),this.emit(w.n2.READY,w.rW.WALLET_CONNECT_V1),this.status=w.MP.READY,w.cM.debug("initializing wallet connect v1 adapter"),!this.connector.connected){t.next=11;break}return this.rehydrated=!0,t.next=11,this.onConnectHandler({accounts:this.connector.accounts,chainId:this.connector.chainId});case 11:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"connect",value:function(){var t=(0,i.Z)((0,r.Z)().mark((function t(){var e,a,o=this;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((0,s.Z)((0,u.Z)(n.prototype),"checkConnectionRequirements",this).call(this),this.connector){t.next=3;break}throw w.Ty.notReady("Wallet adapter is not ready yet");case 3:if(!this.connected){t.next=7;break}return t.next=6,this.onConnectHandler({accounts:this.connector.accounts,chainId:this.connector.chainId});case 6:return t.abrupt("return",this.provider);case 7:if(this.status===w.MP.CONNECTING){t.next=13;break}return null!==(e=this.adapterOptions.adapterSettings)&&void 0!==e&&e.qrcodeModal&&(this.connector=this.getWalletConnectInstance(),this.wcProvider=new y.WalletConnectProvider({config:{chainConfig:this.chainConfig,skipLookupNetwork:null===(a=this.adapterOptions.adapterSettings)||void 0===a?void 0:a.skipNetworkSwitching},connector:this.connector})),t.next=11,this.createNewSession();case 11:this.status=w.MP.CONNECTING,this.emit(w.n2.CONNECTING,{adapter:w.rW.WALLET_CONNECT_V1});case 13:return t.abrupt("return",new Promise((function(t,e){if(!o.connector)return e(w.Ty.notReady("Wallet adapter is not ready yet"));o.connector.on("modal_closed",(0,i.Z)((0,r.Z)().mark((function t(){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o.status=w.MP.READY,o.emit(w.n2.READY,w.rW.WALLET_CONNECT_V1),t.abrupt("return",e(new Error("User closed modal")));case 3:case"end":return t.stop()}}),t)}))));try{o.connector.on("connect",function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n,i){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n&&o.emit(w.n2.ERRORED,n),w.cM.debug("connected event emitted by web3auth"),e.next=4,o.onConnectHandler(i.params[0]);case 4:return e.abrupt("return",t(o.provider));case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())}catch(n){w.cM.error("Wallet connect v1 adapter error while connecting",n),o.status=w.MP.READY,o.rehydrated=!0,o.emit(w.n2.ERRORED,n),e(n instanceof w.up?n:w.RM.connectionError("Failed to login with wallet connect: ".concat((null===n||void 0===n?void 0:n.message)||"")))}})));case 14:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"setAdapterSettings",value:function(t){this.status!==w.MP.READY&&null!==t&&void 0!==t&&t.sessionTime&&(this.sessionTime=t.sessionTime)}},{key:"getUserInfo",value:function(){var t=(0,i.Z)((0,r.Z)().mark((function t(){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.connected){t.next=2;break}throw w.RM.notConnectedError("Not connected with wallet, Please login/connect first");case 2:return t.abrupt("return",{});case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"disconnect",value:function(){var t=(0,i.Z)((0,r.Z)().mark((function t(){var e,i,a=arguments;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=a.length>0&&void 0!==a[0]?a[0]:{cleanup:!1},i=e.cleanup,this.connector&&this.connected){t.next=4;break}throw w.RM.notConnectedError("Not connected with wallet");case 4:return t.next=6,(0,s.Z)((0,u.Z)(n.prototype),"disconnect",this).call(this);case 6:return t.next=8,this.connector.killSession();case 8:this.rehydrated=!1,i?(this.connector=null,this.status=w.MP.NOT_READY,this.wcProvider=null):this.status=w.MP.READY,this.emit(w.n2.DISCONNECTED);case 11:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"addChain",value:function(){var t=(0,i.Z)((0,r.Z)().mark((function t(e){var n,i;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,this.wcProvider){t.next=3;break}throw w.Ty.notReady("Wallet adapter is not ready yet");case 3:if(!(i=null===(n=this.adapterOptions.adapterSettings)||void 0===n?void 0:n.networkSwitchModal)){t.next=7;break}return t.next=7,i.addNetwork({chainConfig:e,appOrigin:window.location.hostname});case 7:return t.next=9,this.wcProvider.addChain(e);case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),w.cM.error(t.t0);case 14:case"end":return t.stop()}}),t,this,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()},{key:"switchChain",value:function(){var t=(0,i.Z)((0,r.Z)().mark((function t(e,n){var i,a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.wcProvider){t.next=2;break}throw w.Ty.notReady("Wallet adapter is not ready yet");case 2:if(!(a=null===(i=this.adapterOptions.adapterSettings)||void 0===i?void 0:i.networkSwitchModal)){t.next=6;break}return t.next=6,a.switchNetwork({currentChainConfig:n,newChainConfig:e,appOrigin:window.location.hostname});case 6:return t.next=8,this.wcProvider.switchChain({chainId:n.chainId,lookup:!1,addChain:!1});case 8:case"end":return t.stop()}}),t,this)})));return function(e,n){return t.apply(this,arguments)}}()},{key:"createNewSession",value:function(){var t=(0,i.Z)((0,r.Z)().mark((function t(){var e,n,a,o,c=this,s=arguments;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=s.length>0&&void 0!==s[0]?s[0]:{forceNewSession:!1},this.connector){t.next=3;break}throw w.Ty.notReady("Wallet adapter is not ready yet");case 3:if(!a.forceNewSession||!this.connector.pending){t.next=6;break}return t.next=6,this.connector.killSession();case 6:if(null===(e=this.adapterOptions)||void 0===e||null===(n=e.adapterSettings)||void 0===n||!n.qrcodeModal){t.next=10;break}return t.next=9,this.connector.createSession({chainId:parseInt((null===(o=this.chainConfig)||void 0===o?void 0:o.chainId)||"0x1",16)});case 9:return t.abrupt("return");case 10:return t.abrupt("return",new Promise((function(t,e){var n;if(!c.connector)return e(w.Ty.notReady("Wallet adapter is not ready yet"));w.cM.debug("creating new session for web3auth wallet connect"),c.connector.on("display_uri",function(){var n=(0,i.Z)((0,r.Z)().mark((function n(i,a){var o,s;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!i){n.next=3;break}return c.emit(w.n2.ERRORED,w.RM.connectionError("Failed to display wallet connect qr code")),n.abrupt("return",e(i));case 3:return s=a.params[0],c.updateAdapterData({uri:s,extensionAdapters:g}),null===(o=c.connector)||void 0===o||o.off("display_uri"),n.abrupt("return",t());case 7:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}()),c.connector.createSession({chainId:parseInt((null===(n=c.chainConfig)||void 0===n?void 0:n.chainId)||"0x1",16)}).catch((function(t){return w.cM.error("error while creating new wallet connect session",t),c.emit(w.n2.ERRORED,t),e(t)}))})));case 11:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"onConnectHandler",value:function(){var t=(0,i.Z)((0,r.Z)().mark((function t(e){var n,i,a,o,c,s;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.connector&&this.wcProvider){t.next=2;break}throw w.Ty.notReady("Wallet adapter is not ready yet");case 2:if(this.chainConfig){t.next=4;break}throw w.Ty.invalidParams("Chain config is not set");case 4:if(n=e.chainId,w.cM.debug("connected chainId in hex"),n===parseInt(this.chainConfig.chainId,16)){t.next=27;break}if(c=(0,w.h2)(w.EN.EIP155,n)||{chainId:"0x".concat(n.toString(16)),displayName:"Unknown Network"},(s=null===(i=this.adapterOptions.adapterSettings)||void 0===i?void 0:i.qrcodeModal)&&(!s||null!==(a=this.adapterOptions)&&void 0!==a&&null!==(o=a.adapterSettings)&&void 0!==o&&o.skipNetworkSwitching)){t.next=27;break}return t.prev=10,t.next=13,this.addChain(this.chainConfig);case 13:return t.next=15,this.switchChain(c,this.chainConfig);case 15:this.connector=this.getWalletConnectInstance(),t.next=27;break;case 18:return t.prev=18,t.t0=t.catch(10),w.cM.error("error while chain switching",t.t0),t.next=23,this.createNewSession({forceNewSession:!0});case 23:return this.emit(w.n2.ERRORED,w.Ty.fromCode(5e3,"Not connected to correct network. Expected: ".concat(this.chainConfig.displayName,", Current: ").concat((null===c||void 0===c?void 0:c.displayName)||n,", Please switch to correct network from wallet"))),this.status=w.MP.READY,this.rehydrated=!0,t.abrupt("return");case 27:return t.next=29,this.wcProvider.setupProvider(this.connector);case 29:this.subscribeEvents(this.connector),this.status=w.MP.CONNECTED,this.emit(w.n2.CONNECTED,{adapter:w.rW.WALLET_CONNECT_V1,reconnected:this.rehydrated});case 32:case"end":return t.stop()}}),t,this,[[10,18]])})));return function(e){return t.apply(this,arguments)}}()},{key:"subscribeEvents",value:function(t){var e=this;t.on("session_update",function(){var t=(0,i.Z)((0,r.Z)().mark((function t(n){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n&&e.emit(w.n2.ERRORED,n);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},{key:"getWalletConnectInstance",value:function(){var t=this.adapterOptions.adapterSettings||{};return t.bridge=t.bridge||"https://bridge.walletconnect.org",new v(t)}}]),n}(k.d)},62859:function(){},75304:function(){},64123:function(){},44507:function(){},29704:function(){},78716:function(){}}]);