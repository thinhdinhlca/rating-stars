window.function = function (rating) {

  rating = rating.value ?? "";
  
  if (!rating) {
    return "";
  }
  
  let perc = rating/5*100;
  
  let final = `<div class="ratings">
   \n \n <div class="empty-stars"></div>
    \n \n <div class="full-stars" style="width:${perc}%"></div>
   \n \n </div>
   \n \n <pre><span><style>
   \n \n .ratings {
   \n position: relative;
   \n vertical-align: middle;
   \n display: inline-block;
   \n color: #b1b1b1;
   \n overflow: hidden;
\n }
\n \n.full-stars {
\n    position: absolute;
\n    left: 0;
\n    top: 0;
\n    white-space: nowrap;
\n    overflow: hidden;
\n    color: #fde16d;
\n }
\n \n .empty-stars:before, .full-stars:before {
 \n   content:"\2605\2605\2605\2605\2605";
 \n   font-size: 14pt;
\n }
\n \n .empty-stars:before {
\n    -webkit-text-stroke: 1px #848484;
\n }
\n \n .full-stars:before {
\n    -webkit-text-stroke: 1px orange;
\n }

\n \n @-moz-document url-prefix() {
\n    .full-stars {
\n        color: #ECBE24;
\n    }
\n }

\n \n .full-stars {
\n    color: #ECBE24;
\n }
`;
  
  return final;
}
