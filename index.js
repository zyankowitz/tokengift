function buildHtml(){
    var elmFirstToken = '<div id="bestSeller" class="tokenCard">'+
                '<div class="tokenCardHeader">'+
                '<img src="img/coing.jfif" style="float:left;padding-left:2vw;width:6vw;height: 3vh">'+
                '<div style="float:right;padding-right:2vw;color:lightgreen">Best Seller</div>'+
                '</div>'+
                '<div class="tokenCardMain">'+
                '<span style="color:white;font-size: 15px;">$100 Crypto Mix</span>'+
                '<span style="color:white;font-size: 15px;">Locked 1 year</span>'+
                '</div>'+
                '<div class="tokenCardFooter">'+
                '<input type="range" min="1" max="100" value="50" class="slider" style="float:left">'+
                '<div class="tokenCardFooterText" >'+
                '       <span>110/119</span>'+
                    
                '</div>'+
                '</div>'+
                '</div>';
    var elmSecondToken = '<div id="bestSeller" class="tokenCardRight">'+
                '<div class="tokenCardHeader">'+
                '<img src="img/new.jpg" style="float:left;padding-left:2vw;width:6vw;height: 3vh">'+
                '<div style="float:right;padding-right:2vw;color:lightgreen">New Offering</div>'+
                '</div>'+
                '<div class="tokenCardMain">'+
                '<span style="color:white;font-size: 15px;">$1000 Crypto Mix</span></br>'+
                '<span style="color:lightgray;font-size: 10px;">include Dodge coin</span>'+
                '</div>'+
                '<div class="tokenCardFooter">'+
                '<input type="range" min="1" max="100" value="50" class="slider" style="float:left">'+
                '<div class="tokenCardFooterText" >'+
                '       <span>4/200</span>'+  
                '</div>'+
                '</div>'+
                '</div>';
     var elmthirdToken = '<div id="bestSeller" class="tokenCard">'+
                '<div class="tokenCardHeader">'+
                '<img src="img/limited.jpg" style="float:left;padding-left:2vw;width:6vw;height: 3vh">'+
                '<div style="float:right;padding-right:2vw;color:lightgreen">Limited Edition</div>'+
                '</div>'+
                '<div class="tokenCardMain">'+
                '<span style="color:white;font-size: 15px;">$10,000 Lovers Mix</span></br>'+
                '<span style="color:lightgray;font-size: 10px;">9 New Tasks</span>'+
                '</div>'+
                '<div class="tokenCardFooter">'+
                '<input type="range" min="1" max="100" value="50" class="slider" style="float:left">'+
                '<div class="tokenCardFooterText" >'+
                '       <span>110/119</span>'+
                    
                '</div>'+
                '</div>'+
                '</div>';
    var elmForthToken = '<div id="bestSeller" class="tokenCardRight">'+
                '<div class="tokenCardHeader">'+
                '<img src="img/risk.jfif" style="float:left;padding-left:2vw;width:6vw;height: 3vh">'+
                '<div style="float:right;padding-right:2vw;color:lightgreen">Risk On</div>'+
                '</div>'+
                '<div class="tokenCardMain">'+
                '<span style="color:white;font-size: 15px;">$1000 High Risk</span></br>'+
                '<span style="color:lightgray;font-size: 10px;">High Potential</span>'+
                '</div>'+
                '<div class="tokenCardFooter">'+
                '<input type="range" min="1" max="100" value="50" class="slider" style="float:left">'+
                '<div class="tokenCardFooterText" >'+
                '       <span>4/200</span>'+  
                '</div>'+
                '</div>'+
                '</div>';
    var groupElem = '<div id="tokenGroupSecond" class="tokenGroupSecond"></div>'
    $(elmFirstToken).appendTo("#tokenGroup");
    $(elmSecondToken).appendTo("#tokenGroup");
    $(groupElem).appendTo("#main");
    $(elmthirdToken).appendTo("#tokenGroupSecond");
    $(elmForthToken).appendTo("#tokenGroupSecond");
    $(".header").click(function(){
        location.replace("mycards.html")
    });

    $(".tokenCard").click(function(){
        
        $("#loadDiv").css("visibility", "visible");
        setTimeout(function() { 
            location.replace("card.html")
        }, 2000);
        // console.log("Asdasd")
        //do something
    });
    $(".tokenCardSecond").click(function(){
        
        $("#loadDiv").css("visibility", "visible");
        setTimeout(function() { 
            location.replace("card.html")
        }, 2000);
        // console.log("Asdasd")
        //do something
    });
}