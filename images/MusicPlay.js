/**
 * MP3 播放组件 支持H5
 * @author noyobo<noyobo@gmail.com>
 * @build 2014-04-21 15:07:52
 */
 /**
  * MP3 播放组件 支持H5
  * @author noyobo<noyobo@gmail.com>
  * @build 2014-04-21 15:07:52
  */

 var MUSICIANPLAY = MUSICIANPLAY || {};
 MUSICIANPLAY.Util = {
   ua: {
     browser: function(e) {
       var t = e.toLowerCase();
       var a = /(webkit)[ \/]([\w.]+)/;
       var r = /(opera)(?:.*version)?[ \/]([\w.]+)/;
       var n = /(msie|trident)(?:[\/ ]?)([\w.]+)/;
       var i = /(mozilla)(?:.*? rv:([\w.]+))?/;
       var s = a.exec(t) || r.exec(t) || n.exec(t) || t.indexOf("compatible") < 0 && i.exec(t) || [];
       return {
         browser: s[1] || "",
         version: s[2] || "0"
       }
     },
     ie: function() {
       var e = -1,
         t = navigator.userAgent;
       if (navigator.appName == "Microsoft Internet Explorer") {
         var a = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");
         if (a.exec(t) != null) e = parseFloat(RegExp.$1)
       } else if (navigator.appName == "Netscape") {
         var a = new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})");
         if (a.exec(t) != null) e = parseFloat(RegExp.$1)
       }
       return e
     }
   },
   sospa: function(e) {
     var t = this;
     var a = parseInt(e);
     var r = e.substr(1);
     var n = Math.floor(r.length / a);
     var i = r.length % a;
     var s = new Array;
     var l;
     for (l = 0; l < i; l++) {
       s[l] = r.substr((n + 1) * l, n + 1)
     }
     for (l = i; l < a; l++) {
       s[l] = r.substr(n * (l - i) + (n + 1) * i, n)
     }
     var o = "";
     for (l = 0; l < s[0].length; l++) {
       for (j = 0; j < s.length; j++) {
         o += s[j].substr(l, 1)
       }
     }
     o = t.rtan(o);
     var p = "";
     for (l = 0; l < o.length; l++) {
       if (o.substr(l, 1) == "^") {
         p += "0"
       } else {
         p += o.substr(l, 1)
       }
     }
     return unescape(p)
   },
   rtan: function(e) {
     var t = "";
     for (var a = 0; a < e.length; a++) {
       var r = e.charAt(a);
       if (r == "+") {
         t += " "
       } else if (r == "%") {
         var n = e.substring(a + 1, a + 3);
         if (parseInt("0x" + n) > 127) {
           t += String.fromCharCode(parseInt("0x" + n + e.substring(a + 4, a + 6)));
           a += 5
         } else {
           t += String.fromCharCode(parseInt("0x" + n));
           a += 2
         }
       } else {
         t += r
       }
     }
     return t
   },
   uiTimeFormat: function(e) {
     if (isNaN(e)) return "00:00";
     e /= 1e3;
     return (parseInt(e / 60) + ":" + parseInt(e % 60)).replace(/\b(\d)\b/g, "0$1")
   }
 };
 MUSICIANPLAY.pro = {
   html: '<object data="{swf}" type="application/x-shockwave-flash" width="1" height="1" id="Player-{targetPlayer}" name="Player-{targetPlayer}"><param name="movie" value="{swf}"><param name="quality" value="high"><param name="wmode" value="window"><param name="allowScriptAccess" value="always"></object>',
   flashPlay: false
 };
 MUSICIANPLAY.play = {
   songId: 0,
   lstened: false,
   player: null,
   create: function(e, t) {
     var a = MUSICIANPLAY.Util.ua.browser(navigator.userAgent);
     var r = document.createElement("audio");
     var n = false;
     if (r.canPlayType && (a.browser == 'msie' && a.version != '9.0') || (a.browser != 'msie')) {
       n = !!(r.canPlayType && r.canPlayType('audio/mpeg; codes="mpe"').replace(/no/, ""));
     }
     if (a.browser !== "msie" && a.browser !== "trident" && n) {
       var i = new Audio;
       var s = !!(i.canPlayType && i.canPlayType('audio/mpeg; codecs="mp3"').replace(/no/, ""));
       this.player = i;
       this.player.addEventListener("ended", MUSICIANPLAY.audioEvent.ended);
       this.player.addEventListener("timeupdate", MUSICIANPLAY.audioEvent.timeupdate);
       MUSICIANPLAY.pro.flashPlay = true
     } else {
       var l = document.createElement("DIV");
       l.style.width = 0;
       l.style.height = 0;
       l.style.overflow = "hidden";
       document.body.appendChild(l);
       MUSICIANPLAY.pro.html = MUSICIANPLAY.pro.html.replace(/\{swf\}/g, t);
       MUSICIANPLAY.pro.html = MUSICIANPLAY.pro.html.replace(/\{targetPlayer\}/g, e);
       l.innerHTML = MUSICIANPLAY.pro.html;
       if (MUSICIANPLAY.Util.ua.ie()) var o = MUSICIANPLAY.Util.ua.ie();
       if (o != -1 && o <= 9) {
         this.player = window.document["Player-" + e]
       } else {
         this.player = document.getElementById("Player-" + e)
       }
     }
     this.eventInit()
   },
   eventInit: function() {
     this.play();
     this.pause();
     this.rePlay();
     this.stop();
     this.jumpPlay()
   },
   play: function() {
     if (MUSICIANPLAY.pro.flashPlay) {
       return this.play = function(e, t) {
         MUSICIANPLAY.play.lstened = false;
         this.songId = t;
         this.player.src = MUSICIANPLAY.Util.sospa(e);
         this.player.play()
       }
     } else {
       return this.play = function(e, t) {
         var a = this;
         if (typeof a.player.jsPlay == "function") {
           a.player.jsPlay(e, t)
         } else {
           setTimeout(function() {
             a.play(e, t)
           }, 100)
         }
       }
     }
   },
   stop: function() {
     if (MUSICIANPLAY.pro.flashPlay) {
       return this.stop = function() {
         this.player.pause()
       }
     } else {
       return this.stop = function() {
         this.player.jsStop()
       }
     }
   },
   pause: function() {
     if (MUSICIANPLAY.pro.flashPlay) {
       return this.pause = function() {
         this.player.pause()
       }
     } else {
       return this.pause = function() {
         this.player.jsPause()
       }
     }
   },
   rePlay: function() {
     if (MUSICIANPLAY.pro.flashPlay) {
       return this.rePlay = function() {
         this.player.play()
       }
     } else {
       return this.rePlay = function() {
         this.player.jsRePlay()
       }
     }
   },
   jumpPlay: function() {
     if (MUSICIANPLAY.pro.flashPlay) {
       return this.jumpPlay = function(e) {
         this.player.currentTime = e / 1e3
       }
     } else {
       return this.jumpPlay = function(e) {
         this.player.jsJumpPlay(e)
       }
     }
   },
   setVolume: function(e) {
     this.player.jsSetVolume(e)
   }
 };
 MUSICIANPLAY.audioEvent = {
   timeupdate: function() {
     var e = {
       timeLength: this.duration * 1e3,
       curTime: this.currentTime * 1e3
     };
     if (typeof MUSICIANPLAY.types.timeupdate === "function") {
       MUSICIANPLAY.types.timeupdate(e)
     }
     if (!MUSICIANPLAY.play.lstened && e.curTime > 12e4 && MUSICIANPLAY.play.songId != 0) {
       MUSICIANPLAY.play.lstened = true;
       jQuery.get("/count/playrecord", {
         sid: MUSICIANPLAY.play.songId,
         object_name: "song"
       })
     }
   },
   ended: function() {
     if (MUSICIANPLAY.play.lstened == false) {
       jQuery.get("/count/playrecord", {
         sid: MUSICIANPLAY.play.songId,
         object_name: "song"
       })
     }
     MUSICIANPLAY.play.songId = 0;
     MUSICIANPLAY.play.lstened = false;
     if (typeof MUSICIANPLAY.types.ended === "function") {
       MUSICIANPLAY.types.ended()
     }
   }
 };
 MUSICIANPLAY.types = {};
 MUSICIANPLAY.event = {
   trigger: function(e, t) {
     if (typeof MUSICIANPLAY.types[e] === "function") MUSICIANPLAY.types[e](t)
   },
   addEvent: function(e, t) {
     if (typeof MUSICIANPLAY.types[e] === "undefined") {
       MUSICIANPLAY.types[e] = t
     }
   }
 };
