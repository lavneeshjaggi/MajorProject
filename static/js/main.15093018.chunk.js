(this.webpackJsonphandpose=this.webpackJsonphandpose||[]).push([[0],{483:function(e,i,r){},485:function(e,i,r){},491:function(e,i){},492:function(e,i){},500:function(e,i){},503:function(e,i){},504:function(e,i){},505:function(e,i){},507:function(e,i){},508:function(e,i){},516:function(e,i){},517:function(e,i,r){},518:function(e,i,r){},519:function(e,i,r){},520:function(e,i,r){"use strict";r.r(i);var n=r(39),t=r.n(n),a=r(418),o=r.n(a),c=r(216),g=r(55),d=(r(483),r(52)),l=function(){return Object(d.jsxs)("div",{className:"homepage",children:[Object(d.jsx)(c.b,{className:"sections selectSections",to:"/gestures",children:Object(d.jsx)("h1",{className:"name",children:"Gesture Translation"})}),Object(d.jsx)(c.b,{className:"sections selectSections",to:"/signlanguage",children:Object(d.jsx)("h1",{className:"name",children:"Sign Language Translation"})})]})},u=(r(485),function(){return Object(d.jsxs)("div",{className:"spinner-overlay",children:[Object(d.jsx)("h1",{className:"heading",children:"Getting The Model Ready For Predictions"}),Object(d.jsx)("div",{className:"spinner-container"})]})}),s=r(1),F=r.n(s),D=r(13),h=r(2),p=r(124),f=r(459),A=r(21),m=r(317),C=r.n(m),b={thumb:[0,1,2,3,4],indexFinger:[0,5,6,7,8],middleFinger:[0,9,10,11,12],ringFinger:[0,13,14,15,16],pinky:[0,17,18,19,20]},v=function(e,i){e.length>0&&e.forEach((function(e){for(var r=e.landmarks,n=0;n<Object.keys(b).length;n++)for(var t=Object.keys(b)[n],a=0;a<b[t].length-1;a++){var o=b[t][a],c=b[t][a+1];i.beginPath(),i.moveTo(r[o][0],r[o][1]),i.lineTo(r[c][0],r[c][1]),i.strokeStyle="plum",i.lineWidth=4,i.stroke()}for(var g=0;g<r.length;g++){var d=r[g][0],l=r[g][1];i.beginPath(),i.arc(d,l,5,0,3*Math.PI),i.fillStyle="indigo",i.fill()}}))},j=new A.GestureDescription("i_love_you");j.addCurl(A.Finger.Thumb,A.FingerCurl.NoCurl,1),j.addDirection(A.Finger.Thumb,A.FingerDirection.HorizontalLeft,1),j.addDirection(A.Finger.Thumb,A.FingerDirection.HorizontalRight,1),j.addCurl(A.Finger.Index,A.FingerCurl.NoCurl,1),j.addDirection(A.Finger.Index,A.FingerDirection.VerticalUp,1),j.addCurl(A.Finger.Pinky,A.FingerCurl.NoCurl,1),j.addDirection(A.Finger.Pinky,A.FingerDirection.VerticalUp,1);for(var w=0,x=[A.Finger.Middle,A.Finger.Ring];w<x.length;w++){var T=x[w];j.addCurl(T,A.FingerCurl.FullCurl,1),j.addDirection(T,A.FingerDirection.VerticalDown,1)}var N=new A.GestureDescription("okay");N.addCurl(A.Finger.Thumb,A.FingerCurl.HalfCurl,1),N.addDirection(A.Finger.Thumb,A.FingerDirection.HorizontalLeft,1),N.addDirection(A.Finger.Thumb,A.FingerDirection.HorizontalRight,1),N.addDirection(A.Finger.Thumb,A.FingerDirection.DiagonalUpLeft,1),N.addDirection(A.Finger.Thumb,A.FingerDirection.DiagonalUpRight,1),N.addCurl(A.Finger.Index,A.FingerCurl.HalfCurl,1),N.addDirection(A.Finger.Index,A.FingerDirection.HorizontalLeft,1),N.addDirection(A.Finger.Index,A.FingerDirection.HorizontalRight,1),N.addDirection(A.Finger.Index,A.FingerDirection.DiagonalUpLeft,1),N.addDirection(A.Finger.Index,A.FingerDirection.DiagonalUpRight,1);for(var k=0,y=[A.Finger.Middle,A.Finger.Ring,A.Finger.Pinky];k<y.length;k++){var H=y[k];N.addCurl(H,A.FingerCurl.NoCurl,.75),N.addDirection(H,A.FingerDirection.VerticalUp,1),N.addDirection(H,A.FingerDirection.DiagonalUpLeft,1),N.addDirection(H,A.FingerDirection.DiagonalUpRight,1)}var O=new A.GestureDescription("point_down");O.addCurl(A.Finger.Thumb,A.FingerCurl.NoCurl,1),O.addCurl(A.Finger.Thumb,A.FingerCurl.HalfCurl,1),O.addDirection(A.Finger.Thumb,A.FingerDirection.VerticalDown,1),O.addCurl(A.Finger.Index,A.FingerCurl.NoCurl,1),O.addDirection(A.Finger.Index,A.FingerDirection.VerticalDown,1);for(var I=0,V=[A.Finger.Middle,A.Finger.Ring,A.Finger.Pinky];I<V.length;I++){var z=V[I];O.addCurl(z,A.FingerCurl.FullCurl,1),O.addCurl(z,A.FingerCurl.HalfCurl,1),O.addDirection(z,A.FingerDirection.VerticalDown,1),O.addDirection(z,A.FingerDirection.DiagonalDownLeft,1),O.addDirection(z,A.FingerDirection.DiagonalDownRight,1)}var M=new A.GestureDescription("point_left");M.addCurl(A.Finger.Thumb,A.FingerCurl.FullCurl,1),M.addDirection(A.Finger.Thumb,A.FingerDirection.HorizontalRight,1),M.addCurl(A.Finger.Index,A.FingerCurl.NoCurl,1),M.addDirection(A.Finger.Index,A.FingerDirection.HorizontalRight,1);for(var S=0,E=[A.Finger.Middle,A.Finger.Ring,A.Finger.Pinky];S<E.length;S++){var L=E[S];M.addCurl(L,A.FingerCurl.FullCurl,1),M.addDirection(L,A.FingerDirection.HorizontalRight,1)}var U=new A.GestureDescription("point_right");U.addCurl(A.Finger.Thumb,A.FingerCurl.FullCurl,1),U.addCurl(A.Finger.Index,A.FingerCurl.NoCurl,1),U.addDirection(A.Finger.Index,A.FingerDirection.HorizontalLeft,1);for(var P=0,B=[A.Finger.Middle,A.Finger.Ring,A.Finger.Pinky];P<B.length;P++){var Q=B[P];U.addCurl(Q,A.FingerCurl.FullCurl,1),U.addDirection(Q,A.FingerDirection.HorizontalLeft,1)}var R=new A.GestureDescription("point_up");R.addCurl(A.Finger.Thumb,A.FingerCurl.NoCurl,1),R.addCurl(A.Finger.Thumb,A.FingerCurl.HalfCurl,1),R.addDirection(A.Finger.Thumb,A.FingerDirection.VerticalUp,1),R.addCurl(A.Finger.Index,A.FingerCurl.NoCurl,1),R.addDirection(A.Finger.Index,A.FingerDirection.VerticalUp,1);for(var G=0,W=[A.Finger.Middle,A.Finger.Ring,A.Finger.Pinky];G<W.length;G++){var K=W[G];R.addCurl(K,A.FingerCurl.FullCurl,1),R.addDirection(K,A.FingerDirection.VerticalUp,1),R.addDirection(K,A.FingerDirection.DiagonalUpLeft,1),R.addDirection(K,A.FingerDirection.DiagonalUpRight,1)}for(var J=new A.GestureDescription("stop"),Y=0,Z=[A.Finger.Thumb,A.Finger.Index,A.Finger.Middle,A.Finger.Ring,A.Finger.Pinky];Y<Z.length;Y++){var X=Z[Y];J.addCurl(X,A.FingerCurl.NoCurl,1),J.addDirection(X,A.FingerDirection.VerticalUp,1)}var q=new A.GestureDescription("thumbs_up");q.addCurl(A.Finger.Thumb,A.FingerCurl.NoCurl,1),q.addDirection(A.Finger.Thumb,A.FingerDirection.VerticalUp,1),q.addDirection(A.Finger.Thumb,A.FingerDirection.DiagonalUpLeft,1),q.addDirection(A.Finger.Thumb,A.FingerDirection.DiagonalUpRight,1);for(var _=0,$=[A.Finger.Index,A.Finger.Middle,A.Finger.Ring,A.Finger.Pinky];_<$.length;_++){var ee=$[_];q.addCurl(ee,A.FingerCurl.FullCurl,1),q.addDirection(ee,A.FingerDirection.HorizontalLeft,1),q.addDirection(ee,A.FingerDirection.HorizontalRight,1)}var ie=new A.GestureDescription("thumbs_down");ie.addCurl(A.Finger.Thumb,A.FingerCurl.NoCurl,1),ie.addDirection(A.Finger.Thumb,A.FingerDirection.VerticalDown,1),ie.addDirection(A.Finger.Thumb,A.FingerDirection.DiagonalDownLeft,1),ie.addDirection(A.Finger.Thumb,A.FingerDirection.DiagonalDownRight,1);for(var re=0,ne=[A.Finger.Index,A.Finger.Middle,A.Finger.Ring,A.Finger.Pinky];re<ne.length;re++){var te=ne[re];ie.addCurl(te,A.FingerCurl.FullCurl,1),ie.addDirection(te,A.FingerDirection.HorizontalLeft,1),ie.addDirection(te,A.FingerDirection.HorizontalRight,1)}var ae=new A.GestureDescription("victory");ae.addCurl(A.Finger.Thumb,A.FingerCurl.HalfCurl,1),ae.addDirection(A.Finger.Thumb,A.FingerDirection.VerticalUp,1),ae.addDirection(A.Finger.Thumb,A.FingerDirection.DiagonalUpLeft,1),ae.addDirection(A.Finger.Thumb,A.FingerDirection.DiagonalUpRight,1),ae.addCurl(A.Finger.Index,A.FingerCurl.NoCurl,1),ae.addDirection(A.Finger.Index,A.FingerDirection.VerticalUp,1),ae.addDirection(A.Finger.Index,A.FingerDirection.DiagonalUpLeft,1),ae.addDirection(A.Finger.Index,A.FingerDirection.DiagonalUpRight,1),ae.addCurl(A.Finger.Middle,A.FingerCurl.NoCurl,1),ae.addDirection(A.Finger.Middle,A.FingerDirection.VerticalUp,1),ae.addDirection(A.Finger.Middle,A.FingerDirection.DiagonalUpLeft,1),ae.addDirection(A.Finger.Middle,A.FingerDirection.DiagonalUpRight,1);for(var oe=0,ce=[A.Finger.Ring,A.Finger.Pinky];oe<ce.length;oe++){var ge=ce[oe];ae.addCurl(ge,A.FingerCurl.FullCurl,1),ae.addDirection(ge,A.FingerDirection.VerticalUp,1),ae.addDirection(ge,A.FingerDirection.DiagonalUpLeft,1),ae.addDirection(ge,A.FingerDirection.DiagonalUpRight,1)}var de=new A.GestureDescription("yes");de.addDirection(A.Finger.Thumb,A.FingerDirection.HorizontalLeft,1),de.addDirection(A.Finger.Thumb,A.FingerDirection.HorizontalRight,1);for(var le=0,ue=[A.Finger.Middle,A.Finger.Ring,A.Finger.Pinky];le<ue.length;le++){var se=ue[le];de.addCurl(se,A.FingerCurl.FullCurl,1),de.addCurl(se,A.FingerCurl.HalfCurl,1),de.addDirection(se,A.FingerDirection.VerticalDown,1),de.addDirection(se,A.FingerDirection.DiagonalDownLeft,1),de.addDirection(se,A.FingerDirection.DiagonalDownRight,1)}var Fe=r.p+"static/media/i_love_you.1d8373ac.png",De=r.p+"static/media/okay.fc04f169.png",he=r.p+"static/media/point_down.90ccb6ea.png",pe=r.p+"static/media/point_left.0eeb154c.png",fe=r.p+"static/media/point_right.40d8a6a4.png",Ae=r.p+"static/media/point_up.666106b7.png",me=r.p+"static/media/stop.726aa154.png",Ce=r.p+"static/media/thumbs_up.e52702e1.png",be=r.p+"static/media/victory.8c16544e.png",ve=r.p+"static/media/yes.3cdda3bb.png",je=(r(517),function(){var e=Object(n.useRef)(null),i=Object(n.useRef)(null),r=Object(n.useState)(null),t=Object(h.a)(r,2),a=t[0],o=t[1],c={i_love_you:Fe,okay:De,point_down:he,point_left:pe,point_right:fe,point_up:Ae,stop:me,thumbs_up:Ce,thumbs_down:"data:image/png;base64,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",victory:be,yes:ve},g=function(){var e=Object(D.a)(F.a.mark((function e(){var i;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a();case 2:i=e.sent,setInterval((function(){l(i)}),1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var r=Object(D.a)(F.a.mark((function r(n){var t,a,c,g,d,l,u,s,D;return F.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if("undefined"===typeof e.current||null===e.current||4!==e.current.video.readyState){r.next=19;break}return t=e.current.video,a=e.current.video.videoWidth,c=e.current.video.videoHeight,e.current.video.width=a,e.current.video.height=c,i.current.width=a,i.current.height=c,r.next=10,n.estimateHands(t);case 10:if(!((g=r.sent).length>0)){r.next=17;break}return d=new A.GestureEstimator([j,N,O,M,U,R,J,q,ie,ae,de]),r.next=15,d.estimate(g[0].landmarks,4);case 15:void 0!==(l=r.sent).gestures&&l.gestures.length>0&&(u=l.gestures.map((function(e){return e.score})),s=u.indexOf(Math.max.apply(null,u)),o(l.gestures[s].name));case 17:D=i.current.getContext("2d"),v(g,D);case 19:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}();return Object(n.useEffect)((function(){g()}),[]),Object(d.jsxs)("div",{className:"gestures",children:[Object(d.jsx)("h1",{children:"Gesture Detection and Translation"}),Object(d.jsx)(C.a,{ref:e,className:"webcam"}),Object(d.jsx)("canvas",{ref:i,className:"canvas"}),null!==a?Object(d.jsxs)("div",{className:"translation",children:[Object(d.jsx)("h3",{className:"name",children:{i_love_you:"I LOVE YOU",okay:"OKAY",point_down:"POINT DOWN",point_left:"POINT LEFT",point_right:"POINT RIGHT",point_up:"POINT UP",stop:"STOP",thumbs_up:"THUMBS UP",thumbs_down:"THUMBS DOWN",victory:"VICTORY",yes:"YES"}[a]}),Object(d.jsx)("img",{src:c[a],alt:"emojis",className:"emoji"})]}):""]})}),we={1:{name:"Hello",color:"red"},2:{name:"Thank You",color:"yellow"},3:{name:"I Love You",color:"lime"},4:{name:"Yes",color:"blue"},5:{name:"No",color:"purple"}},xe=function(e,i,r,n,t,a,o){for(var c=0;c<=e.length;c++)if(e[c]&&i[c]&&r[c]>n){var g=Object(h.a)(e[c],4),d=g[0],l=g[1],u=g[2],s=g[3],F=i[c];console.log(we[F].name),o.strokeStyle=we[F].color,o.lineWidth=10,o.fillStyle="white",o.font="30px Arial",o.beginPath(),o.fillText(we[F].name+" - "+Math.round(100*r[c])/100,l*t,d*a-10),o.rect(l*t,d*a,s*t/2,u*a/1.5),o.stroke()}},Te=(r(518),function(){var e=Object(n.useRef)(null),i=Object(n.useRef)(null),r=function(){var e=Object(D.a)(F.a.mark((function e(){var i;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.d("https://tensorflowjsrealtimemodel.s3.au-syd.cloud-object-storage.appdomain.cloud/model.json");case 2:i=e.sent,setInterval((function(){t(i)}),16.7);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=function(){var r=Object(D.a)(F.a.mark((function r(n){var t,a,o,c,g,d,l,u,s,D,h,f;return F.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if("undefined"===typeof e.current||null===e.current||4!==e.current.video.readyState){r.next=31;break}return t=e.current.video,a=e.current.video.videoWidth,o=e.current.video.videoHeight,e.current.video.width=a,e.current.video.height=o,i.current.width=a,i.current.height=o,c=p.a.fromPixels(t),g=p.c.resizeBilinear(c,[640,480]),d=g.cast("int32"),l=d.expandDims(0),r.next=14,n.executeAsync(l);case 14:return u=r.sent,r.next=17,u[1].array();case 17:return s=r.sent,r.next=20,u[2].array();case 20:return D=r.sent,r.next=23,u[4].array();case 23:h=r.sent,f=i.current.getContext("2d"),requestAnimationFrame((function(){xe(s[0],D[0],h[0],.8,a,o,f)})),p.b(c),p.b(g),p.b(d),p.b(l),p.b(u);case 31:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}();return Object(n.useEffect)((function(){r()}),[r]),Object(d.jsx)("div",{className:"sign-language",children:Object(d.jsxs)("header",{className:"App-header",children:[Object(d.jsx)(C.a,{ref:e,muted:!0,style:{position:"absolute",marginLeft:"auto",marginRight:"auto",left:0,right:0,textAlign:"center",zindex:9,width:640,height:480}}),Object(d.jsx)("canvas",{ref:i,style:{position:"absolute",marginLeft:"auto",marginRight:"auto",left:0,right:0,textAlign:"center",zindex:8,width:640,height:480}})]})})}),Ne=(r(519),function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(n.Suspense,{fallback:Object(d.jsx)(u,{}),children:Object(d.jsxs)(g.c,{children:[Object(d.jsx)(g.a,{exact:!0,path:"/",element:Object(d.jsx)(l,{})}),Object(d.jsx)(g.a,{path:"/gestures",element:Object(d.jsx)(je,{})}),Object(d.jsx)(g.a,{path:"/signlanguage",element:Object(d.jsx)(Te,{})})]})})})});o.a.render(Object(d.jsx)(t.a.StrictMode,{children:Object(d.jsx)(c.a,{basename:"/MajorProject",children:Object(d.jsx)(Ne,{})})}),document.getElementById("root"))}},[[520,1,2]]]);
//# sourceMappingURL=main.15093018.chunk.js.map