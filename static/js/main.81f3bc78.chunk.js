(this.webpackJsonpreactweather=this.webpackJsonpreactweather||[]).push([[0],{10:function(e,t,a){e.exports=a(18)},15:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(4),s=a.n(o),c=(a(15),a(1)),i=a.n(c),l=a(2),m=a(5),u=a(6),p=a(8),h=a(7),d=a(9),b=(a(17),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).api_key="mB2Oko638Vjt4o0H8m6nwpiIRVrRM4Eh",a.state={error:null,isLoaded:!1,body:[],measurementDate:"",measurementTime:""},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.fetchData(),setInterval(Object(l.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.fetchData();case 1:case"end":return t.stop()}}),t)}))),3e4)}},{key:"fetchData",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Fetch");try{fetch("http://data.jontzi.com/weather/api/1/latest?api_key="+this.api_key).then((function(e){return e.json()})).then((function(e){var a=t.parseDatetime(e.body[0].time);t.setState({isLoaded:!0,body:e.body,measurementDate:a[0],measurementTime:a[1]})}),(function(e){console.log(e),t.setState({isLoaded:!0,error:e})}))}catch(a){console.log(a)}case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"parseDatetime",value:function(e){var t=[],a=new Date(e);return t[0]=a.toLocaleDateString("en-FI"),t[1]=a.toLocaleTimeString("en-FI"),t}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,n=e.body,o=e.measurementDate,s=e.measurementTime;return t?r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"Error while loading data"),r.a.createElement("p",null,"This might be a problem with the server"))):a?r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-main"},r.a.createElement("h1",{className:"App-temperature"},n[0].temperature,"\xb0C")),r.a.createElement("section",{className:"App-main-bottom"},r.a.createElement("p",null,"\u2193 More data below \u2193")),r.a.createElement("section",{className:"App-extra"},r.a.createElement("h3",null,"Dewpoint: ",n[0].dewpoint.toString().substr(0,5),"\xb0C ",r.a.createElement("br",null),"Humidity: ",n[0].humidity.toString().substr(0,5),"% ",r.a.createElement("br",null),"Pressure: ",n[0].pressure.toString().substr(0,4),".",n[0].pressure.toString().substr(4,2)," hPa ",r.a.createElement("br",null),"Air density: ",n[0].air_density.toString().substr(0,4)," kg/m3"),r.a.createElement("p",null,"Measured at ",s," ",r.a.createElement("br",null)," on ",o," ",r.a.createElement("br",null)," ",r.a.createElement("br",null),"Measurements are updated once per minute.")),r.a.createElement("footer",{className:"App-footer"},r.a.createElement("p",null,"Made by ",r.a.createElement("a",{href:"https://github.com/Jontzii",target:"_blank",rel:"noopener noreferrer",className:"App-link"},"Jontzi")))):r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h2",null,"Loading...")))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.81f3bc78.chunk.js.map