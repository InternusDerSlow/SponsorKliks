// Dispatcher.js


function dispatch() {
	  var id = 4787;
	  
    chrome.storage.sync.get({
    	  clubId: 4787,
        autoForward: false

    }, function(items) {

    	  if (items.clubId) {
            id = parseInt(items.clubId);
            clubId = id;
            earningsURL = "https://www.sponsorkliks.com/products/commissions.php?club="+ clubId;
        }
        
        if (items.autoForward && (getState() == StateEnum.UNVISITED)) {
            console.log("Sponsorkliks Slow: autoforward running");
            chrome.runtime.sendMessage({type: "autoforward", name:"SponsorKliksNSLTCSlow",
                                        value: "sponsored", url: sk_link_url()});
        }
        
        if (getState() == StateEnum.UNVISITED) {
            $("body")
                .append(notification())
                .append("<div class='sk-shadow'></div>")
                .addClass("sk-body");
        
        } else if (getState() == StateEnum.SPONSORED) {
            $("body")
                .append(smallnotification());
        }
        
        
        
         
        
        
    });
    
    
}



