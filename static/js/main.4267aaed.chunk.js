(window["webpackJsonpvk-mini-apps"]=window["webpackJsonpvk-mini-apps"]||[]).push([[0],{172:function(e,t,n){},192:function(e,t,n){"use strict";n.r(t);n(94),n(120),n(122),n(123),n(125),n(126),n(127),n(128),n(129),n(130),n(131),n(132),n(134),n(135),n(136),n(137),n(138),n(139),n(140),n(141),n(142),n(143),n(145),n(146),n(147),n(148),n(149),n(150),n(151),n(152),n(153),n(154),n(155),n(156),n(157),n(158),n(159),n(160),n(161),n(162);var a=n(0),c=n.n(a),r=n(59),o=n.n(r),s=n(18),u=n.n(s),i=n(60),l=n.n(i),p=n(89),m=n(36),d=n(92),f=n.n(d),b=n(91),h=n.n(b),v=(n(171),n(90)),g=n.n(v),j=n(46),E=(n(172),function(e){var t=e.id;e.go,e.fetchedUser;return c.a.createElement(g.a,{id:t},c.a.createElement(j.c,null,c.a.createElement(j.a,{className:"map",defaultState:{center:[55.75,37.57],zoom:9}},c.a.createElement(j.b,{geometry:[55.75,37.57]}))))}),O=function(){var e=Object(a.useState)("home"),t=Object(m.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(null),s=Object(m.a)(o,2),i=s[0],d=s[1],b=Object(a.useState)([55.798,49.106]),v=Object(m.a)(b,2),g=v[0],j=v[1],O=Object(a.useState)(c.a.createElement(h.a,{size:"large"})),w=Object(m.a)(O,2),y=w[0],k=w[1];Object(a.useEffect)((function(){function e(){return(e=Object(p.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.sendPromise("VKWebAppGetUserInfo");case 2:return t=e.sent,e.next=5,u.a.send();case 5:e.sent,d(t),k(null);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}u.a.subscribe((function(e){var t=e.detail,n=t.type,a=t.data;if("VKWebAppUpdateConfig"===n){var c=document.createAttribute("scheme");c.value=a.scheme?a.scheme:"client_light",document.body.attributes.setNamedItem(c)}})),k(null),function(){e.apply(this,arguments)}(),u.a.sendPromise("VKWebAppGetGeodata").then((function(e){j([e.lat,e.lon]),console.log("location",g)})).catch((function(e){console.log("error",e)}))}),[]);return c.a.createElement(f.a,{activePanel:n,popout:y},c.a.createElement(E,{id:"home",fetchedUser:i,go:function(e){r(e.currentTarget.dataset.to)}}))};u.a.send("VKWebAppInit"),o.a.render(c.a.createElement(O,null),document.getElementById("root"))},93:function(e,t,n){e.exports=n(192)}},[[93,1,2]]]);
//# sourceMappingURL=main.4267aaed.chunk.js.map