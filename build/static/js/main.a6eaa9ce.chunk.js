(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/flower_line_1.89cc6225.png"},,,,function(e,t,a){e.exports=a.p+"static/media/wedding_ceremony_icon.f84166ab.png"},function(e,t,a){e.exports=a.p+"static/media/wedding_reception_icon.a0941370.png"},,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/flower_line_2.c90d3054.png"},function(e,t,a){e.exports=a.p+"static/media/home_1.6bbdaa87.jpg"},function(e,t,a){e.exports=a.p+"static/media/home_2.c6c5d9e0.jpg"},function(e,t,a){e.exports=a.p+"static/media/photos_1.b0c76edd.jpg"},function(e,t,a){e.exports=a.p+"static/media/photos_2.12b02670.jpg"},function(e,t,a){e.exports=a.p+"static/media/photos_4.5599aa7f.jpg"},function(e,t,a){e.exports=a.p+"static/media/photos_5.0f0f0a06.jpg"},function(e,t,a){e.exports=a.p+"static/media/photos_6.705873c1.jpg"},function(e,t,a){e.exports=a.p+"static/media/photos_7.00fa6b46.jpg"},function(e,t,a){e.exports=a.p+"static/media/photos_9.2961034c.jpg"},,function(e,t,a){e.exports=a(87)},,,,,,function(e,t,a){},function(e,t,a){},,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);a(46);var n=a(0),c=a.n(n),r=a(20),l=a.n(r),o=(a(51),a(7)),i=a(2),s=a(3),m=a(5),u=a(4),d=a(6),p=a(12),f=a(16),h=a.n(f),v=(a(52),a(11)),E=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).checkIfHomeActive=a.checkIfHomeActive.bind(Object(p.a)(Object(p.a)(a))),a.checkIfActice=a.checkIfActice.bind(Object(p.a)(Object(p.a)(a))),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=document.querySelectorAll(".sidenav");h.a.Sidenav.init(e)}},{key:"checkIfActice",value:function(e){return this.props.location.pathname.includes(e)?"active":null}},{key:"checkIfHomeActive",value:function(){var e=this.props.location.pathname;return"/"===e.split("")[e.length-1]?"active":null}},{key:"render",value:function(){return c.a.createElement(n.Fragment,null,c.a.createElement("nav",null,c.a.createElement("div",{className:"nav-wrapper"},c.a.createElement("div",{className:"brand-logo center"},"Tu & Lynn"),c.a.createElement(o.b,{to:"","data-target":"nav-mobile",className:"left top-nav sidenav-trigger full hide-on-large-only"},c.a.createElement("i",{className:"material-icons"},"menu")),c.a.createElement("ul",{className:"left hide-on-med-and-down"},c.a.createElement("li",{className:this.checkIfHomeActive()},c.a.createElement(o.b,{to:"/"},"Home")),c.a.createElement("li",{className:this.checkIfActice("/rsvp")},c.a.createElement(o.b,{to:"/rsvp"},"RSVP")),c.a.createElement("li",{className:this.checkIfActice("/photos")},c.a.createElement(o.b,{to:"/photos"},"Photos")),c.a.createElement("li",{className:this.checkIfActice("/events")},c.a.createElement(o.b,{to:"/events"},"Events"))))),c.a.createElement("ul",{id:"nav-mobile",className:"sidenav"},c.a.createElement("li",{className:this.checkIfHomeActive()},c.a.createElement(o.b,{className:"waves-effect",to:"/"},"Home")),c.a.createElement("li",null,c.a.createElement("div",{class:"divider"})),c.a.createElement("li",{className:this.checkIfActice("/rsvp")},c.a.createElement(o.b,{className:"waves-effect",to:"/rsvp"},"RSVP")),c.a.createElement("li",null,c.a.createElement("div",{class:"divider"})),c.a.createElement("li",{className:this.checkIfActice("/photos")},c.a.createElement(o.b,{className:"waves-effect",to:"/photos"},"Photos")),c.a.createElement("li",null,c.a.createElement("div",{class:"divider"})),c.a.createElement("li",{className:this.checkIfActice("/events")},c.a.createElement(o.b,{className:"waves-effect",to:"/events"},"Events"))))}}]),t}(n.Component),b=Object(v.d)(E),g=(a(61),a(34)),y=a.n(g),_=a(35),k=a.n(_),j=a(36),N=a.n(j);function w(){return c.a.createElement("div",{className:"container center home-container"},c.a.createElement("div",{className:"home-image-container"},c.a.createElement("img",{src:k.a,alt:""}),c.a.createElement("img",{src:N.a,alt:""})),c.a.createElement("img",{className:"flower-line",src:y.a,alt:""}),c.a.createElement("h5",null,"Please join us for our wedding celebration on",c.a.createElement("br",null),"Sunday, June 30, 2019"))}a(62);var A=a(13),O=a.n(A),I=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"container rsvp-container"},c.a.createElement("h4",{className:"center"},"You're invited!",c.a.createElement("br",null),c.a.createElement("img",{className:"flower-line",src:O.a,alt:""}),c.a.createElement("br",null),c.a.createElement("a",{className:"hover-effect",href:"https://docs.google.com/forms/d/e/1FAIpQLSeLyGNgUzDHHAKKvoWGDUHWRnBHTnvDU4Vkm_BEh8UGUIvbLw/viewform?usp=sf_link",target:"_blank"},"Click here")," to RSVP"))}}]),t}(n.Component),C=(a(63),a(37)),S=a.n(C),x=a(38),G=a.n(x),P=a(39),L=a.n(P),U=a(40),D=a.n(U),B=a(41),M=a.n(B),H=a(42),J=a.n(H),R=a(43),Y=a.n(R),V=[S.a,G.a,L.a,D.a,M.a,J.a,Y.a],W=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=document.querySelectorAll(".carousel");h.a.Carousel.init(e)}},{key:"renderPhoto",value:function(){return V.map(function(e,t){return c.a.createElement("a",{key:t,className:"carousel-item",href:"#photos".concat(t,"!")},c.a.createElement("img",{src:e}))})}},{key:"render",value:function(){return c.a.createElement("div",{className:"container photo-container"},c.a.createElement("h4",{className:"center"},"Photos",c.a.createElement("br",null),c.a.createElement("img",{className:"flower-line",src:O.a,alt:""})),c.a.createElement("div",{className:"carousel"},this.renderPhoto()))}}]),t}(n.Component),q=(a(64),a(17)),z=a.n(q),K=a(18),Q=a.n(K),F=(a(65),"AIzaSyD-NNZfs0n53D0caUB0M_ERLC2n9psGZfc"),T=a(44),X=a.n(T),Z=[{type:"wedding ceremony",formatted_address:"10801 Stanford Ave, Garden Grove, CA 92840, USA",location:{lat:33.778022,lng:-117.9441904},place_id:"ChIJw41_cgwo3YARgwYIPupA1Mk",name:"Saint Columban Catholic Church",image_url:z.a},{type:"reception",formatted_address:"12181 Brookhurst St, Garden Grove, CA 92840, USA",location:{lat:33.78575,lng:-117.9598178},place_id:"ChIJAyfQnGgo3YARVsXMEf-cqlU",name:"Diamond Seafood Palace 2",image_url:Q.a}],$=function(e,t,a){var n=function(e,t,a){var n=new t.LatLngBounds;return a.forEach(function(e){n.extend(new t.LatLng(e.location.lat,e.location.lng))}),n}(0,t,a);e.fitBounds(n),function(e,t,a){t.event.addDomListenerOnce(e,"idle",function(){t.event.addDomListener(window,"resize",function(){e.fitBounds(a)})})}(e,t,n)},ee=function(e){var t,a=e.image_url,r=e.place_id,l=e.type,o=e.name,i=e.formatted_address;return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"marker"},c.a.createElement("img",{src:a,datatarget:r,onClick:(t=r,void(document.getElementById(t)&&(document.getElementById(t).style.display="inline-block"))),alt:""})),c.a.createElement("div",{id:r},c.a.createElement("div",{className:"arrow-up"}),c.a.createElement("p",{className:"info-box"},c.a.createElement("span",null,l),c.a.createElement("br",null),o,c.a.createElement("br",null),i)))},te=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"renderMarker",value:function(){return Z.map(function(e){return c.a.createElement(ee,{key:e.place_id,place_id:e.place_id,lat:e.location.lat,lng:e.location.lng,type:e.type,name:e.name,formatted_address:e.formatted_address,image_url:e.image_url})})}},{key:"render",value:function(){return c.a.createElement("div",{className:"map-container"},c.a.createElement(X.a,{bootstrapURLKeys:{key:F},defaultCenter:this.props.center,defaultZoom:this.props.zoom,yesIWantToUseGoogleMapApiInternals:!0,onGoogleApiLoaded:function(e){var t=e.map,a=e.maps;return $(t,a,Z)}},this.renderMarker()))}}]),t}(n.Component);te.defaultProps={center:{lat:33.7743,lng:117.938},zoom:11};var ae=te,ne=[{type:"wedding ceremony",formatted_address:"10801 Stanford Ave, Garden Grove, CA 92840, USA",place_id:"ChIJw41_cgwo3YARgwYIPupA1Mk",name:"Saint Columban Catholic Church",time:"3:30 PM Saturday, June 29, 2019",image_url:z.a,direction_url:"https://goo.gl/maps/symiAFq8KkQ2"},{type:"reception",formatted_address:"12181 Brookhurst St, Garden Grove, CA 92840, USA",place_id:"ChIJAyfQnGgo3YARVsXMEf-cqlU",name:"Diamond Seafood Palace 2",time:"5:00 PM Sunday, June 30, 2019",image_url:Q.a,direction_url:"https://goo.gl/maps/JxJ6XYKuQ1m"}],ce=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"renderEventDetail",value:function(){return ne.map(function(e){return c.a.createElement("div",{className:"single-event",key:e.place_id},c.a.createElement("h4",null,c.a.createElement("img",{src:e.image_url,alt:""}),c.a.createElement("span",null,e.type)),c.a.createElement("p",null,e.time,c.a.createElement("br",null),e.name,c.a.createElement("br",null),e.formatted_address,c.a.createElement("br",null),c.a.createElement("i",{className:"material-icons"},"directions"),c.a.createElement("a",{href:e.direction_url,target:"_blank",rel:"noopener noreferrer",className:"get-directions hover-effect"},"Get directions")))})}},{key:"render",value:function(){return c.a.createElement("div",{className:"container events-container"},c.a.createElement("h4",{className:"center"},"Events",c.a.createElement("br",null),c.a.createElement("img",{className:"flower-line",src:O.a,alt:""})),c.a.createElement("div",{className:"container event-map-and-detail-container"},c.a.createElement(ae,null),c.a.createElement("div",{className:"event-detail-container"},this.renderEventDetail())))}}]),t}(n.Component),re=(a(85),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("footer",{className:"bottom page-footer footer-copyright"},c.a.createElement("div",{className:"container"},"\xa9 2019 Tu Lynn Wedding,  All rights reserved."))}}]),t}(n.Component)),le=(a(86),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"app-container"},c.a.createElement(b,null),c.a.createElement("main",null,c.a.createElement(v.a,{exact:!0,path:"/",component:w}),c.a.createElement(v.a,{path:"/rsvp",component:I}),c.a.createElement(v.a,{path:"/photos",component:W}),c.a.createElement(v.a,{path:"/events",component:ce})),c.a.createElement(re,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(o.a,null,c.a.createElement(le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[45,1,2]]]);
//# sourceMappingURL=main.a6eaa9ce.chunk.js.map