var Admob = require('ti.admob');

var adView = Admob.createView({
    publisherId: 'ca-app-pub-1441712581575766/8412605131',
    adBackgroundColor: '#666666',
    keywords: 'sports',
    bottom: 0,
    width: 320,
    height: 50,
    borderColor:'#000',
});

$.showAdmob.add(adView) ;
	
	
function doClick(e) {
   var map = Alloy.createController("map").getView();
   map.open();
}

$.showAdmob.open();
