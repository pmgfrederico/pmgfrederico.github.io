const par = document.createElement("p");
const text = document.createTextNode("O conteúdo é introduzido pelo js bloqueado pelo robots. Crawl </=> de dependência.");
par.appendChild(text);
document.body.append(par);