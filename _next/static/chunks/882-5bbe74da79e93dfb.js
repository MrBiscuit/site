(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[882],{9882:function(e,t,r){"use strict";r.d(t,{ZP:function(){return T}});r(3808);var n=r(7294),o=r(5697),a=r(4063),i=r(1062),s=Object.defineProperty,l=Object.defineProperties,u=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,f=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,y=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&f(e,r,t[r]);if(c)for(var r of c(t))p.call(t,r)&&f(e,r,t[r]);return e},h=(e,t)=>l(e,u(t));function m(e={}){return h(y({},e),{height:0,width:0,playerVars:h(y({},e.playerVars),{autoplay:0,start:0,end:0})})}var g={videoId:o.string,id:o.string,className:o.string,iframeClassName:o.string,style:o.object,title:o.string,loading:o.oneOf(["lazy","eager"]),opts:o.objectOf(o.any),onReady:o.func,onError:o.func,onPlay:o.func,onPause:o.func,onEnd:o.func,onStateChange:o.func,onPlaybackRateChange:o.func,onPlaybackQualityChange:o.func},v=class extends n.Component{constructor(e){super(e),this.destroyPlayerPromise=void 0,this.onPlayerReady=e=>{var t,r;return null==(r=(t=this.props).onReady)?void 0:r.call(t,e)},this.onPlayerError=e=>{var t,r;return null==(r=(t=this.props).onError)?void 0:r.call(t,e)},this.onPlayerStateChange=e=>{var t,r,n,o,a,i,s,l;switch(null==(r=(t=this.props).onStateChange)||r.call(t,e),e.data){case v.PlayerState.ENDED:null==(o=(n=this.props).onEnd)||o.call(n,e);break;case v.PlayerState.PLAYING:null==(i=(a=this.props).onPlay)||i.call(a,e);break;case v.PlayerState.PAUSED:null==(l=(s=this.props).onPause)||l.call(s,e)}},this.onPlayerPlaybackRateChange=e=>{var t,r;return null==(r=(t=this.props).onPlaybackRateChange)?void 0:r.call(t,e)},this.onPlayerPlaybackQualityChange=e=>{var t,r;return null==(r=(t=this.props).onPlaybackQualityChange)?void 0:r.call(t,e)},this.destroyPlayer=()=>this.internalPlayer?(this.destroyPlayerPromise=this.internalPlayer.destroy().then((()=>this.destroyPlayerPromise=void 0)),this.destroyPlayerPromise):Promise.resolve(),this.createPlayer=()=>{if("undefined"===typeof document)return;if(this.destroyPlayerPromise)return void this.destroyPlayerPromise.then(this.createPlayer);const e=h(y({},this.props.opts),{videoId:this.props.videoId});this.internalPlayer=i(this.container,e),this.internalPlayer.on("ready",this.onPlayerReady),this.internalPlayer.on("error",this.onPlayerError),this.internalPlayer.on("stateChange",this.onPlayerStateChange),this.internalPlayer.on("playbackRateChange",this.onPlayerPlaybackRateChange),this.internalPlayer.on("playbackQualityChange",this.onPlayerPlaybackQualityChange),(this.props.title||this.props.loading)&&this.internalPlayer.getIframe().then((e=>{this.props.title&&e.setAttribute("title",this.props.title),this.props.loading&&e.setAttribute("loading",this.props.loading)}))},this.resetPlayer=()=>this.destroyPlayer().then(this.createPlayer),this.updatePlayer=()=>{var e;null==(e=this.internalPlayer)||e.getIframe().then((e=>{this.props.id?e.setAttribute("id",this.props.id):e.removeAttribute("id"),this.props.iframeClassName?e.setAttribute("class",this.props.iframeClassName):e.removeAttribute("class"),this.props.opts&&this.props.opts.width?e.setAttribute("width",this.props.opts.width.toString()):e.removeAttribute("width"),this.props.opts&&this.props.opts.height?e.setAttribute("height",this.props.opts.height.toString()):e.removeAttribute("height"),this.props.title?e.setAttribute("title",this.props.title):e.setAttribute("title","YouTube video player"),this.props.loading?e.setAttribute("loading",this.props.loading):e.removeAttribute("loading")}))},this.getInternalPlayer=()=>this.internalPlayer,this.updateVideo=()=>{var e,t,r,n;if("undefined"===typeof this.props.videoId||null===this.props.videoId)return void(null==(e=this.internalPlayer)||e.stopVideo());let o=!1;const a={videoId:this.props.videoId};(null==(t=this.props.opts)?void 0:t.playerVars)&&(o=1===this.props.opts.playerVars.autoplay,"start"in this.props.opts.playerVars&&(a.startSeconds=this.props.opts.playerVars.start),"end"in this.props.opts.playerVars&&(a.endSeconds=this.props.opts.playerVars.end)),o?null==(r=this.internalPlayer)||r.loadVideoById(a):null==(n=this.internalPlayer)||n.cueVideoById(a)},this.refContainer=e=>{this.container=e},this.container=null,this.internalPlayer=null}componentDidMount(){this.createPlayer()}componentDidUpdate(e){(function(e,t){var r,n,o,a;return e.id!==t.id||e.className!==t.className||(null==(r=e.opts)?void 0:r.width)!==(null==(n=t.opts)?void 0:n.width)||(null==(o=e.opts)?void 0:o.height)!==(null==(a=t.opts)?void 0:a.height)||e.iframeClassName!==t.iframeClassName||e.title!==t.title})(e,this.props)&&this.updatePlayer(),function(e,t){return e.videoId!==t.videoId||!a(m(e.opts),m(t.opts))}(e,this.props)&&this.resetPlayer(),function(e,t){var r,n;if(e.videoId!==t.videoId)return!0;const o=(null==(r=e.opts)?void 0:r.playerVars)||{},a=(null==(n=t.opts)?void 0:n.playerVars)||{};return o.start!==a.start||o.end!==a.end}(e,this.props)&&this.updateVideo()}componentWillUnmount(){this.destroyPlayer()}render(){return n.createElement("div",{className:this.props.className,style:this.props.style},n.createElement("div",{id:this.props.id,className:this.props.iframeClassName,ref:this.refContainer}))}},b=v;b.propTypes=g,b.defaultProps={videoId:"",id:"",className:"",iframeClassName:"",style:{},title:"",loading:void 0,opts:{},onReady:()=>{},onError:()=>{},onPlay:()=>{},onPause:()=>{},onEnd:()=>{},onStateChange:()=>{},onPlaybackRateChange:()=>{},onPlaybackQualityChange:()=>{}},b.PlayerState={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5};var P=b;function w(){return w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},w.apply(this,arguments)}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function S(e,t){var r="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(r)return(r=r.call(e)).next.bind(r);if(Array.isArray(e)||(r=function(e,t){if(e){if("string"===typeof e)return E(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?E(e,t):void 0}}(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var C=["autoplay","cc_load_policy","color","controls","disablekb","enablejsapi","end","fs","hl","iv_load_policy","list","listType","loop","modestbranding","origin","playlist","playsinline","rel","start"],A=new Set(["autoplay","cc_load_policy","controls","disablekb","fs","loop","modestbranding","playsinline","rel"]),O=n.forwardRef((function(e,t){var r=n.useRef(null),o=n.useCallback((function(e){r.current=e,t&&("function"===typeof t?t(e):t.current=e)}),[t]);n.useEffect((function(){var t,n,o,a;void 0!==e.mute&&(e.mute?null==(t=r.current)||null==(n=t.getInternalPlayer())||n.mute():null==(o=r.current)||null==(a=o.getInternalPlayer())||a.unMute())}),[e.mute,r]);for(var a,i=w({},e),s=S(C);!(a=s()).done;){var l=a.value;if(l in i){var u=i[l];delete i[l],i.opts||(i.opts={}),i.opts.playerVars||(i.opts.playerVars={}),A.has(l)?"cc_load_policy"===l||"modestbranding"===l?u?i.opts.playerVars[l]=1:delete i.opts.playerVars[l]:i.opts.playerVars[l]=u?1:0:i.opts.playerVars[l]=u}}return n.createElement(P,Object.assign({ref:o},i,{iframeClassName:e.className}))}));var T=O},4063:function(e){"use strict";e.exports=function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){if(t.constructor!==r.constructor)return!1;var n,o,a;if(Array.isArray(t)){if((n=t.length)!=r.length)return!1;for(o=n;0!==o--;)if(!e(t[o],r[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if((n=(a=Object.keys(t)).length)!==Object.keys(r).length)return!1;for(o=n;0!==o--;)if(!Object.prototype.hasOwnProperty.call(r,a[o]))return!1;for(o=n;0!==o--;){var i=a[o];if(!e(t[i],r[i]))return!1}return!0}return t!==t&&r!==r}},9090:function(e){function t(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function r(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,n,o){var a=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");"function"===typeof n&&(o=n,n={}),n=n||{},o=o||function(){},i.type=n.type||"text/javascript",i.charset=n.charset||"utf8",i.async=!("async"in n)||!!n.async,i.src=e,n.attrs&&function(e,t){for(var r in t)e.setAttribute(r,t[r])}(i,n.attrs),n.text&&(i.text=""+n.text),("onload"in i?t:r)(i,o),i.onload||t(i,o),a.appendChild(i)}},4155:function(e){var t,r,n=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:o}catch(e){t=o}try{r="function"===typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var s,l=[],u=!1,c=-1;function d(){u&&s&&(u=!1,s.length?l=s.concat(l):c=-1,l.length&&p())}function p(){if(!u){var e=i(d);u=!0;for(var t=l.length;t;){for(s=l,l=[];++c<t;)s&&s[c].run();c=-1,t=l.length}s=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function y(){}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new f(e,t)),1!==l.length||u||i(p)},f.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=y,n.addListener=y,n.once=y,n.off=y,n.removeListener=y,n.removeAllListeners=y,n.emit=y,n.prependListener=y,n.prependOnceListener=y,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}},2703:function(e,t,r){"use strict";var n=r(414);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,a,i){if(i!==n){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return r.PropTypes=r,r}},5697:function(e,t,r){e.exports=r(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},3988:function(e){"use strict";var t;t=function(){var e={},t={};return e.on=function(e,r){var n={name:e,handler:r};return t[e]=t[e]||[],t[e].unshift(n),n},e.off=function(e){var r=t[e.name].indexOf(e);-1!==r&&t[e.name].splice(r,1)},e.trigger=function(e,r){var n,o=t[e];if(o)for(n=o.length;n--;)o[n].handler(r)},e},e.exports=t},6006:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=r(2275),a=(n=o)&&n.__esModule?n:{default:n};t.default={pauseVideo:{acceptableStates:[a.default.ENDED,a.default.PAUSED],stateChangeRequired:!1},playVideo:{acceptableStates:[a.default.ENDED,a.default.PLAYING],stateChangeRequired:!1},seekTo:{acceptableStates:[a.default.ENDED,a.default.PLAYING,a.default.PAUSED],stateChangeRequired:!0,timeout:3e3}},e.exports=t.default},9125:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(r(9215)),o=s(r(8255)),a=s(r(5279)),i=s(r(6006));function s(e){return e&&e.__esModule?e:{default:e}}var l=(0,n.default)("youtube-player"),u={proxyEvents:function(e){var t={},r=function(r){var n="on"+r.slice(0,1).toUpperCase()+r.slice(1);t[n]=function(t){l('event "%s"',n,t),e.trigger(r,t)}},n=!0,o=!1,i=void 0;try{for(var s,u=a.default[Symbol.iterator]();!(n=(s=u.next()).done);n=!0){r(s.value)}}catch(c){o=!0,i=c}finally{try{!n&&u.return&&u.return()}finally{if(o)throw i}}return t},promisifyPlayer:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r={},n=function(n){t&&i.default[n]?r[n]=function(){for(var t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];return e.then((function(e){var t=i.default[n],o=e.getPlayerState(),a=e[n].apply(e,r);return t.stateChangeRequired||Array.isArray(t.acceptableStates)&&-1===t.acceptableStates.indexOf(o)?new Promise((function(r){e.addEventListener("onStateChange",(function n(){var o=e.getPlayerState(),a=void 0;"number"===typeof t.timeout&&(a=setTimeout((function(){e.removeEventListener("onStateChange",n),r()}),t.timeout)),Array.isArray(t.acceptableStates)&&-1!==t.acceptableStates.indexOf(o)&&(e.removeEventListener("onStateChange",n),clearTimeout(a),r())}))})).then((function(){return a})):a}))}:r[n]=function(){for(var t=arguments.length,r=Array(t),o=0;o<t;o++)r[o]=arguments[o];return e.then((function(e){return e[n].apply(e,r)}))}},a=!0,s=!1,l=void 0;try{for(var u,c=o.default[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var d=u.value;n(d)}}catch(p){s=!0,l=p}finally{try{!a&&c.return&&c.return()}finally{if(s)throw l}}return r}};t.default=u,e.exports=t.default},2275:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},e.exports=t.default},5279:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange","volumeChange"],e.exports=t.default},8255:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","getVideoLoadedFraction","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getVideoEmbedCode","getOptions","getOption","addEventListener","destroy","setSize","getIframe"],e.exports=t.default},1062:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=s(r(3988)),a=s(r(5900)),i=s(r(9125));function s(e){return e&&e.__esModule?e:{default:e}}var l=void 0;t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=(0,o.default)();if(l||(l=(0,a.default)(s)),t.events)throw new Error("Event handlers cannot be overwritten.");if("string"===typeof e&&!document.getElementById(e))throw new Error('Element "'+e+'" does not exist.');t.events=i.default.proxyEvents(s);var u=new Promise((function(r){"object"===("undefined"===typeof e?"undefined":n(e))&&e.playVideo instanceof Function?r(e):l.then((function(n){var o=new n.Player(e,t);return s.on("ready",(function(){r(o)})),null}))})),c=i.default.promisifyPlayer(u,r);return c.on=s.on,c.off=s.off,c},e.exports=t.default},5900:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=r(9090),a=(n=o)&&n.__esModule?n:{default:n};t.default=function(e){return new Promise((function(t){if(window.YT&&window.YT.Player&&window.YT.Player instanceof Function)t(window.YT);else{var r="http:"===window.location.protocol?"http:":"https:";(0,a.default)(r+"//www.youtube.com/iframe_api",(function(t){t&&e.trigger("error",t)}));var n=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){n&&n(),t(window.YT)}}}))},e.exports=t.default},9215:function(e,t,r){var n=r(4155);function o(){var e;try{e=t.storage.debug}catch(r){}return!e&&"undefined"!==typeof n&&"env"in n&&(e=n.env.DEBUG),e}(t=e.exports=r(5046)).log=function(){return"object"===typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var r=this.useColors;if(e[0]=(r?"%c":"")+this.namespace+(r?" %c":" ")+e[0]+(r?"%c ":" ")+"+"+t.humanize(this.diff),!r)return;var n="color: "+this.color;e.splice(1,0,n,"color: inherit");var o=0,a=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(o++,"%c"===e&&(a=o))})),e.splice(a,0,n)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(r){}},t.load=o,t.useColors=function(){if("undefined"!==typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!==typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!==typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},t.enable(o())},5046:function(e,t,r){var n;function o(e){function r(){if(r.enabled){var e=r,o=+new Date,a=o-(n||o);e.diff=a,e.prev=n,e.curr=o,n=o;for(var i=new Array(arguments.length),s=0;s<i.length;s++)i[s]=arguments[s];i[0]=t.coerce(i[0]),"string"!==typeof i[0]&&i.unshift("%O");var l=0;i[0]=i[0].replace(/%([a-zA-Z%])/g,(function(r,n){if("%%"===r)return r;l++;var o=t.formatters[n];if("function"===typeof o){var a=i[l];r=o.call(e,a),i.splice(l,1),l--}return r})),t.formatArgs.call(e,i);var u=r.log||t.log||console.log.bind(console);u.apply(e,i)}}return r.namespace=e,r.enabled=t.enabled(e),r.useColors=t.useColors(),r.color=function(e){var r,n=0;for(r in e)n=(n<<5)-n+e.charCodeAt(r),n|=0;return t.colors[Math.abs(n)%t.colors.length]}(e),"function"===typeof t.init&&t.init(r),r}(t=e.exports=o.debug=o.default=o).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var r=("string"===typeof e?e:"").split(/[\s,]+/),n=r.length,o=0;o<n;o++)r[o]&&("-"===(e=r[o].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var r,n;for(r=0,n=t.skips.length;r<n;r++)if(t.skips[r].test(e))return!1;for(r=0,n=t.names.length;r<n;r++)if(t.names[r].test(e))return!0;return!1},t.humanize=r(4680),t.names=[],t.skips=[],t.formatters={}},4680:function(e){var t=1e3,r=60*t,n=60*r,o=24*n,a=365.25*o;function i(e,t,r){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+r:Math.ceil(e/t)+" "+r+"s"}e.exports=function(e,s){s=s||{};var l,u=typeof e;if("string"===u&&e.length>0)return function(e){if((e=String(e)).length>100)return;var i=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!i)return;var s=parseFloat(i[1]);switch((i[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return s*a;case"days":case"day":case"d":return s*o;case"hours":case"hour":case"hrs":case"hr":case"h":return s*n;case"minutes":case"minute":case"mins":case"min":case"m":return s*r;case"seconds":case"second":case"secs":case"sec":case"s":return s*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return s;default:return}}(e);if("number"===u&&!1===isNaN(e))return s.long?i(l=e,o,"day")||i(l,n,"hour")||i(l,r,"minute")||i(l,t,"second")||l+" ms":function(e){if(e>=o)return Math.round(e/o)+"d";if(e>=n)return Math.round(e/n)+"h";if(e>=r)return Math.round(e/r)+"m";if(e>=t)return Math.round(e/t)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}}}]);