var frilling=function(){"use strict";const e=window,t=document,i=function(e,i){return i?t.querySelectorAll(e):t.querySelector(e)},o=function(){if(-1===t.cookie.indexOf("cookies=true")){const e=i(".cookienotice"),o=i("#cookienoticeAccept");e.style.display="block",t.cookie="cookies=true;expires=Fri, 31 Dec 9999 23:59:59 GMT",o.addEventListener("click",()=>{e.style.display="none"},!1)}},c=function(){const e=i("#navbarToggle"),t=i("#navbarMenu");let o=!1;e.addEventListener("click",()=>{o=!o,e.classList.toggle("collapsed"),t.classList.toggle("show"),e.setAttribute("aria-expanded",o),t.setAttribute("aria-hidden",!o)},!1)},n=function(e,t){Array.from(e).forEach(t)},l=function(){const o=i("article pre",!0),c=i("article table",!0);n(c,e=>{const i=e.cloneNode(!0),o=t.createElement("div");i.classList.add("table","table-bordered","table-hover"),o.classList.add("table-responsive"),o.appendChild(i),e.replaceWith(o)}),n(o,t=>{e.hljs.highlightBlock(t)})};return{init:function(e){o(),c(),"item"===e&&l()}}}();