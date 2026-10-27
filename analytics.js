/* Cloudflare Web Analytics para Info SimpleApp.
   Reemplazá PEGAR_TOKEN_AQUI por el token que te da Cloudflare
   (Web Analytics -> tu sitio -> "Manual setup"). Sirve para la landing y para /app/. */
(function () {
  var token = "16770b96eea04e2499ee2625e8f53609";
  if (token.indexOf("PEGAR") === 0) return;
  var s = document.createElement("script");
  s.defer = true;
  s.src = "https://static.cloudflareinsights.com/beacon.min.js";
  s.setAttribute("data-cf-beacon", JSON.stringify({ token: token }));
  document.head.appendChild(s);
})();
