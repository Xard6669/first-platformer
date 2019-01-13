var ZPlat = ZPlat || {};

//calculate the dimantions of tge game so that 100% of screen is occupated
ZPlat.getGameLandscapeDimension = function(max_w, max_h){
    //get bpth w and h of the screen (they might exchange)
    var w = window.innerWidth * window.devicePixelRatio;
    var h = window.innerHeight * window.devicePixelRatio;
    
    //get the acual w and h
    var landW = Math.max(w, h);
    var landH = Math.min(w, h);
    
    //do we need to scale to fit in width
    if(landW>max_w){
        var ratioW = max_w / landW;
        landW *= ratioW;
        landH *= ratioW;
    }
     //do we need to scale to fit in height
    if(landW>max_h){
        var ratioH = max_h / landW;
        landW *= ratioH;
        landH *= ratioH;
    }
    
    return {
        w: landW,
        h: landH
    }
    
}