const inception = (function(){
    function createScript(src){
        const script = document.createElement("script");
        script.src = src;
        script.referrerPolicy = "no-referrer-when-downgrade";

        return script;
    }
    
    const url = `https://{some-cluster-ingress-hostname}/bootstrap?referrer=${window.location.href}&version=${self.crypto.randomUUID()}"`;

    return {
        appendScript: function(){
            document.head.appendChild(createScript(encodeURI(url)));
        }
    }    
})();

inception.appendScript();
