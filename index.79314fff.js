document.querySelectorAll("li").forEach(function(e){var t=document.createElement("span");e.prepend(t),t.append(t.nextSibling)}),document.querySelector(".tree").addEventListener("click",function(e){if(e.preventDefault(),"SPAN"===e.target.tagName){var t=e.target.parentNode.querySelector("ul");t&&(t.hidden=!t.hidden)}});
//# sourceMappingURL=index.79314fff.js.map
