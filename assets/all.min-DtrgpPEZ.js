import{r as u}from"./leaflet-src-gGcrs2yb.js";var m={exports:{}};/*!
Copyright (c) 2016 Dominik Moritz

This file is part of the leaflet locate control. It is licensed under the MIT license.
You can find the project at: https://github.com/domoritz/leaflet-locatecontrol
*/(function(_,g){(function(s,l){typeof l<"u"&&l.L?_.exports=s(L):_.exports=s(u()),typeof l<"u"&&l.L&&(l.L.Control.Locate=s(L))})(function(s){const l=(t,i,e)=>{e=e.split(" "),e.forEach(function(o){s.DomUtil[t].call(this,i,o)})},h=(t,i)=>l("addClass",t,i),c=(t,i)=>l("removeClass",t,i),p=s.Marker.extend({initialize(t,i){s.Util.setOptions(this,i),this._latlng=t,this.createIcon()},createIcon(){const t=this.options;let i="";t.color!==void 0&&(i+=`stroke:${t.color};`),t.weight!==void 0&&(i+=`stroke-width:${t.weight};`),t.fillColor!==void 0&&(i+=`fill:${t.fillColor};`),t.fillOpacity!==void 0&&(i+=`fill-opacity:${t.fillOpacity};`),t.opacity!==void 0&&(i+=`opacity:${t.opacity};`);const e=this._getIconSVG(t,i);this._locationIcon=s.divIcon({className:e.className,html:e.svg,iconSize:[e.w,e.h]}),this.setIcon(this._locationIcon)},_getIconSVG(t,i){const e=t.radius,o=t.weight,n=e+o,a=n*2;return{className:"leaflet-control-locate-location",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="${a}" height="${a}" version="1.1" viewBox="-${n} -${n} ${a} ${a}"><circle r="`+e+'" style="'+i+'" /></svg>',w:a,h:a}},setStyle(t){s.Util.setOptions(this,t),this.createIcon()}}),d=p.extend({initialize(t,i,e){s.Util.setOptions(this,e),this._latlng=t,this._heading=i,this.createIcon()},setHeading(t){this._heading=t},_getIconSVG(t,i){const e=t.radius,o=t.width+t.weight,n=(e+t.depth+t.weight)*2,a=`M0,0 l${t.width/2},${t.depth} l-${o},0 z`,r=`transform: rotate(${this._heading}deg)`;return{className:"leaflet-control-locate-heading",svg:`<svg xmlns="http://www.w3.org/2000/svg" width="${o}" height="${n}" version="1.1" viewBox="-${o/2} 0 ${o} ${n}" style="${r}"><path d="`+a+'" style="'+i+'" /></svg>',w:o,h:n}}}),f=s.Control.extend({options:{position:"topleft",layer:void 0,setView:"untilPanOrZoom",keepCurrentZoomLevel:!1,initialZoomLevel:!1,getLocationBounds(t){return t.bounds},flyTo:!1,clickBehavior:{inView:"stop",outOfView:"setView",inViewNotFollowing:"inView"},returnToPrevBounds:!1,cacheLocation:!0,drawCircle:!0,drawMarker:!0,showCompass:!0,markerClass:p,compassClass:d,circleStyle:{className:"leaflet-control-locate-circle",color:"#136AEC",fillColor:"#136AEC",fillOpacity:.15,weight:0},markerStyle:{className:"leaflet-control-locate-marker",color:"#fff",fillColor:"#2A93EE",fillOpacity:1,weight:3,opacity:1,radius:9},compassStyle:{fillColor:"#2A93EE",fillOpacity:1,weight:0,color:"#fff",opacity:1,radius:9,width:9,depth:6},followCircleStyle:{},followMarkerStyle:{},followCompassStyle:{},icon:"leaflet-control-locate-location-arrow",iconLoading:"leaflet-control-locate-spinner",iconElementTag:"span",textElementTag:"small",circlePadding:[0,0],metric:!0,createButtonCallback(t,i){const e=s.DomUtil.create("a","leaflet-bar-part leaflet-bar-part-single",t);e.title=i.strings.title,e.href="#",e.setAttribute("role","button");const o=s.DomUtil.create(i.iconElementTag,i.icon,e);if(i.strings.text!==void 0){const n=s.DomUtil.create(i.textElementTag,"leaflet-locate-text",e);n.textContent=i.strings.text,e.classList.add("leaflet-locate-text-active"),e.parentNode.style.display="flex",i.icon.length>0&&o.classList.add("leaflet-locate-icon")}return{link:e,icon:o}},onLocationError(t,i){alert(t.message)},onLocationOutsideMapBounds(t){t.stop(),alert(t.options.strings.outsideMapBoundsMsg)},showPopup:!0,strings:{title:"Show me where I am",metersUnit:"meters",feetUnit:"feet",popup:"You are within {distance} {unit} from this point",outsideMapBoundsMsg:"You seem located outside the boundaries of the map"},locateOptions:{maxZoom:1/0,watch:!0,setView:!1}},initialize(t){for(const i in t)typeof this.options[i]=="object"?s.extend(this.options[i],t[i]):this.options[i]=t[i];this.options.followMarkerStyle=s.extend({},this.options.markerStyle,this.options.followMarkerStyle),this.options.followCircleStyle=s.extend({},this.options.circleStyle,this.options.followCircleStyle),this.options.followCompassStyle=s.extend({},this.options.compassStyle,this.options.followCompassStyle)},onAdd(t){const i=s.DomUtil.create("div","leaflet-control-locate leaflet-bar leaflet-control");this._container=i,this._map=t,this._layer=this.options.layer||new s.LayerGroup,this._layer.addTo(t),this._event=void 0,this._compassHeading=null,this._prevBounds=null;const e=this.options.createButtonCallback(i,this.options);return this._link=e.link,this._icon=e.icon,s.DomEvent.on(this._link,"click",function(o){s.DomEvent.stopPropagation(o),s.DomEvent.preventDefault(o),this._onClick()},this).on(this._link,"dblclick",s.DomEvent.stopPropagation),this._resetVariables(),this._map.on("unload",this._unload,this),i},_onClick(){this._justClicked=!0;const t=this._isFollowing();if(this._userPanned=!1,this._userZoomed=!1,this._active&&!this._event)this.stop();else if(this._active){const i=this.options.clickBehavior;let e=i.outOfView;switch(this._map.getBounds().contains(this._event.latlng)&&(e=t?i.inView:i.inViewNotFollowing),i[e]&&(e=i[e]),e){case"setView":this.setView();break;case"stop":this.stop(),this.options.returnToPrevBounds&&(this.options.flyTo?this._map.flyToBounds:this._map.fitBounds).bind(this._map)(this._prevBounds);break}}else this.options.returnToPrevBounds&&(this._prevBounds=this._map.getBounds()),this.start();this._updateContainerStyle()},start(){this._activate(),this._event&&(this._drawMarker(this._map),this.options.setView&&this.setView()),this._updateContainerStyle()},stop(){this._deactivate(),this._cleanClasses(),this._resetVariables(),this._removeMarker()},stopFollowing(){this._userPanned=!0,this._updateContainerStyle(),this._drawMarker()},_activate(){if(!(this._active||!this._map)&&(this._map.locate(this.options.locateOptions),this._map.fire("locateactivate",this),this._active=!0,this._map.on("locationfound",this._onLocationFound,this),this._map.on("locationerror",this._onLocationError,this),this._map.on("dragstart",this._onDrag,this),this._map.on("zoomstart",this._onZoom,this),this._map.on("zoomend",this._onZoomEnd,this),this.options.showCompass)){const t="ondeviceorientationabsolute"in window;if(t||"ondeviceorientation"in window){const i=this,e=function(){s.DomEvent.on(window,t?"deviceorientationabsolute":"deviceorientation",i._onDeviceOrientation,i)};DeviceOrientationEvent&&typeof DeviceOrientationEvent.requestPermission=="function"?DeviceOrientationEvent.requestPermission().then(function(o){o==="granted"&&e()}):e()}}},_deactivate(){!this._active||!this._map||(this._map.stopLocate(),this._map.fire("locatedeactivate",this),this._active=!1,this.options.cacheLocation||(this._event=void 0),this._map.off("locationfound",this._onLocationFound,this),this._map.off("locationerror",this._onLocationError,this),this._map.off("dragstart",this._onDrag,this),this._map.off("zoomstart",this._onZoom,this),this._map.off("zoomend",this._onZoomEnd,this),this.options.showCompass&&(this._compassHeading=null,"ondeviceorientationabsolute"in window?s.DomEvent.off(window,"deviceorientationabsolute",this._onDeviceOrientation,this):"ondeviceorientation"in window&&s.DomEvent.off(window,"deviceorientation",this._onDeviceOrientation,this)))},setView(){if(this._drawMarker(),this._isOutsideMapBounds())this._event=void 0,this.options.onLocationOutsideMapBounds(this);else if(this._justClicked&&this.options.initialZoomLevel!==!1){var t=this.options.flyTo?this._map.flyTo:this._map.setView;t.bind(this._map)([this._event.latitude,this._event.longitude],this.options.initialZoomLevel)}else if(this.options.keepCurrentZoomLevel){var t=this.options.flyTo?this._map.flyTo:this._map.panTo;t.bind(this._map)([this._event.latitude,this._event.longitude])}else{var t=this.options.flyTo?this._map.flyToBounds:this._map.fitBounds;this._ignoreEvent=!0,t.bind(this._map)(this.options.getLocationBounds(this._event),{padding:this.options.circlePadding,maxZoom:this.options.initialZoomLevel||this.options.locateOptions.maxZoom}),s.Util.requestAnimFrame(function(){this._ignoreEvent=!1},this)}},_drawCompass(){if(!this._event)return;const t=this._event.latlng;if(this.options.showCompass&&t&&this._compassHeading!==null){const i=this._isFollowing()?this.options.followCompassStyle:this.options.compassStyle;this._compass?(this._compass.setLatLng(t),this._compass.setHeading(this._compassHeading),this._compass.setStyle&&this._compass.setStyle(i)):this._compass=new this.options.compassClass(t,this._compassHeading,i).addTo(this._layer)}this._compass&&(!this.options.showCompass||this._compassHeading===null)&&(this._compass.removeFrom(this._layer),this._compass=null)},_drawMarker(){this._event.accuracy===void 0&&(this._event.accuracy=0);const t=this._event.accuracy,i=this._event.latlng;if(this.options.drawCircle){const r=this._isFollowing()?this.options.followCircleStyle:this.options.circleStyle;this._circle?this._circle.setLatLng(i).setRadius(t).setStyle(r):this._circle=s.circle(i,t,r).addTo(this._layer)}let e,o;if(this.options.metric?(e=t.toFixed(0),o=this.options.strings.metersUnit):(e=(t*3.2808399).toFixed(0),o=this.options.strings.feetUnit),this.options.drawMarker){const r=this._isFollowing()?this.options.followMarkerStyle:this.options.markerStyle;this._marker?(this._marker.setLatLng(i),this._marker.setStyle&&this._marker.setStyle(r)):this._marker=new this.options.markerClass(i,r).addTo(this._layer)}this._drawCompass();const n=this.options.strings.popup;function a(){return typeof n=="string"?s.Util.template(n,{distance:e,unit:o}):typeof n=="function"?n({distance:e,unit:o}):n}this.options.showPopup&&n&&this._marker&&this._marker.bindPopup(a())._popup.setLatLng(i),this.options.showPopup&&n&&this._compass&&this._compass.bindPopup(a())._popup.setLatLng(i)},_removeMarker(){this._layer.clearLayers(),this._marker=void 0,this._circle=void 0},_unload(){this.stop(),this._map&&this._map.off("unload",this._unload,this)},_setCompassHeading(t){!isNaN(parseFloat(t))&&isFinite(t)?(t=Math.round(t),this._compassHeading=t,s.Util.requestAnimFrame(this._drawCompass,this)):this._compassHeading=null},_onCompassNeedsCalibration(){this._setCompassHeading()},_onDeviceOrientation(t){this._active&&(t.webkitCompassHeading?this._setCompassHeading(t.webkitCompassHeading):t.absolute&&t.alpha&&this._setCompassHeading(360-t.alpha))},_onLocationError(t){t.code==3&&this.options.locateOptions.watch||(this.stop(),this.options.onLocationError(t,this))},_onLocationFound(t){if(!(this._event&&this._event.latlng.lat===t.latlng.lat&&this._event.latlng.lng===t.latlng.lng&&this._event.accuracy===t.accuracy)&&this._active){switch(this._event=t,this._drawMarker(),this._updateContainerStyle(),this.options.setView){case"once":this._justClicked&&this.setView();break;case"untilPan":this._userPanned||this.setView();break;case"untilPanOrZoom":!this._userPanned&&!this._userZoomed&&this.setView();break;case"always":this.setView();break}this._justClicked=!1}},_onDrag(){this._event&&!this._ignoreEvent&&(this._userPanned=!0,this._updateContainerStyle(),this._drawMarker())},_onZoom(){this._event&&!this._ignoreEvent&&(this._userZoomed=!0,this._updateContainerStyle(),this._drawMarker())},_onZoomEnd(){this._event&&this._drawCompass(),this._event&&!this._ignoreEvent&&this._marker&&!this._map.getBounds().pad(-.3).contains(this._marker.getLatLng())&&(this._userPanned=!0,this._updateContainerStyle(),this._drawMarker())},_isFollowing(){if(!this._active)return!1;if(this.options.setView==="always")return!0;if(this.options.setView==="untilPan")return!this._userPanned;if(this.options.setView==="untilPanOrZoom")return!this._userPanned&&!this._userZoomed},_isOutsideMapBounds(){return this._event===void 0?!1:this._map.options.maxBounds&&!this._map.options.maxBounds.contains(this._event.latlng)},_updateContainerStyle(){this._container&&(this._active&&!this._event?this._setClasses("requesting"):this._isFollowing()?this._setClasses("following"):this._active?this._setClasses("active"):this._cleanClasses())},_setClasses(t){t=="requesting"?(c(this._container,"active following"),h(this._container,"requesting"),c(this._icon,this.options.icon),h(this._icon,this.options.iconLoading)):t=="active"?(c(this._container,"requesting following"),h(this._container,"active"),c(this._icon,this.options.iconLoading),h(this._icon,this.options.icon)):t=="following"&&(c(this._container,"requesting"),h(this._container,"active following"),c(this._icon,this.options.iconLoading),h(this._icon,this.options.icon))},_cleanClasses(){s.DomUtil.removeClass(this._container,"requesting"),s.DomUtil.removeClass(this._container,"active"),s.DomUtil.removeClass(this._container,"following"),c(this._icon,this.options.iconLoading),h(this._icon,this.options.icon)},_resetVariables(){this._active=!1,this._justClicked=!1,this._userPanned=!1,this._userZoomed=!1}});return s.control.locate=t=>new s.Control.Locate(t),f},window)})(m);
