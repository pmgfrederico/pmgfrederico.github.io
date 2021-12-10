const inception = (function(){
    function createScript(src){
        const script = document.createElement("script");
        script.src = src;
        script.referrerPolicy = "no-referrer-when-downgrade";

        return script;
    }
    
    const url = `https://prod-application.css-prod.caas.oneweb.mercedes-benz.io/bootstrap?referrer=${window.location.href}&version=${self.crypto.randomUUID()}"`;

    return {
        appendScript: function(){
            document.head.appendChild(createScript(encodeURI(url)));
        }
    }    
})();

inception.appendScript();