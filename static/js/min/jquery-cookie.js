(function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)})(function(e){function t(e){return s.raw?e:encodeURIComponent(e)}function n(e){return s.raw?e:decodeURIComponent(e)}function a(e){return t(s.json?JSON.stringify(e):e+"")}function r(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{e=decodeURIComponent(e.replace(i," "))}catch(t){return}try{return s.json?JSON.parse(e):e}catch(t){}}function o(t,n){var a=s.raw?t:r(t);return e.isFunction(n)?n(a):a}var i=/\+/g,s=e.cookie=function(r,i,c){if(void 0!==i&&!e.isFunction(i)){if(c=e.extend({},s.defaults,c),"number"==typeof c.expires){var u=c.expires,l=c.expires=new Date;l.setDate(l.getDate()+u)}return document.cookie=[t(r),"=",a(i),c.expires?"; expires="+c.expires.toUTCString():"",c.path?"; path="+c.path:"",c.domain?"; domain="+c.domain:"",c.secure?"; secure":""].join("")}for(var d=r?void 0:{},p=document.cookie?document.cookie.split("; "):[],f=0,h=p.length;h>f;f++){var m=p[f].split("="),g=n(m.shift()),v=m.join("=");if(r&&r===g){d=o(v,i);break}r||void 0===(v=o(v))||(d[g]=v)}return d};s.defaults={},e.removeCookie=function(t,n){return void 0!==e.cookie(t)?(e.cookie(t,"",e.extend({},n,{expires:-1})),!0):!1}}),$.cookie("has_seen_warning")||($("#warningModal").modal("show"),$.cookie("has_seen_warning","true",{expires:7,path:"/"})),$(document).ready(function(){$(".main-nav").addClass("mobile-enabled"),$(".main-nav").prepend('<button type="button" class="nav-toggle btn btn-default"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span><span class="sr-only">Toggle Navigation</span></button>'),$(".nav-toggle").click(function(){$(".main-nav").toggleClass("active")})}),$(document).ready(function(){$.cookie("openfda_key")&&(api_key=$.cookie("openfda_key"),$("#api-key-form").replaceWith('<div class="api-key-result">Congrats! Your API Key is: <div class="api-key">'+api_key+"</div></div>")),$("#api-key-form").on("submit",function(e){var t=$(this),n=t.find("#email").val();console.log("submit"),e.preventDefault(),$.post("https://api.data.gov/api-umbrella/v1/users.json?api_key=qeFgqbUXRY76Yk0nCKC60ur1J3bEuLUyPKp2remB",{user:{first_name:"openFDA",last_name:"User",email:n,use_description:"Signup through open.fda.gov",terms_and_conditions:"1",send_welcome_email:"0",registration_source:"open.fda.gov"}}).done(function(e){$(t).replaceWith('<div class="api-key-result">Congrats! Your API Key is: <div class="api-key">'+e.user.api_key+"</div></div>"),$.cookie("openfda_key",e.user.api_key,{expires:7,path:"/"})}),e.preventDefault()})});