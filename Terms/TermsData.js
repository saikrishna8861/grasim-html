
var slidingTagLiAfterStyle = document.createElement("style");
slidingTagLiAfterStyle.innerHTML =
 ".accordion-button.collapsed::after { background-image: url('./imgs/Vector.png') !important; position: relative; top: 10px; } .accordion-button:not(.collapsed)::after {  background-image: url('./imgs/up.png') !important;position: relative; top: 10px; transform: none !important }";
document.head.appendChild(slidingTagLiAfterStyle);





