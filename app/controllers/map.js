var args = arguments[0] || {};

var MapModule = require('ti.map');
var win = Ti.UI.createWindow({backgroundColor: 'white'});
var opera = MapModule.createAnnotation({
    latitude: -33.8569,
    longitude: 151.2153,
    image: 'SydneyOperaHouse.jpg',
    title: 'Sydney Opera House',
    subtitle: 'Sydney, New South Wales, Australia'
});

var bridge = MapModule.createAnnotation({
    latitude: -33.852222,
    longitude: 151.210556,
    pincolor: MapModule.ANNOTATION_AZURE,
    // Even though we are creating a button, it does not respond to Button events or animates.
    // Use the Map View's click event and monitor the clicksource property for 'leftPane'.
    leftView: Ti.UI.createButton({title: 'Detail'}),
    // For eventing, use the Map View's click event
    // and monitor the clicksource property for 'rightPane'.
    rightButton: 'SydneyHarbourBridge.jpg',    
    title: 'Sydney Harbour Bridge',
    subtitle: 'Port Jackson'
});

var random = MapModule.createAnnotation({
    latitude: -33.87365,
    longitude: 151.20689,
    pincolor: MapModule.ANNOTATION_VIOLET,
    // Even though we are creating a label, it does not respond to Label events.
    // Use the Map View's events instead.    
    customView: Ti.UI.createLabel({
        text: 'MOVE ME!',
        opacity: '80%',
        color: 'red',
        backgroundColor: 'gray',
        font: {
            fontSize: '16dp',
            fontWeight: 'bold'
        }
    }),
    draggable: true
});

var mapview = MapModule.createView({
    mapType: MapModule.NORMAL_TYPE,
    region: {latitude: -33.87365, longitude: 151.20689, latitudeDelta: 0.1, longitudeDelta: 0.1 },
    annotations: [bridge,opera] //< add these annotations upon creation
});

// Add this annotation after creation
mapview.addAnnotation(random);
win.add(mapview);
win.open();