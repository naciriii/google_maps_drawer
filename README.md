# google_maps_drawer
a drawer for google maps api drawing maps with given coordinates and setting marker and polyline to track device as it's moving

# Usage
to initialize the map you need to include google maps script with your apikey adjust width and height to whatever you need , if you're setting to 100% each make sure, your body and html elements are set to 100% too.
var drawer=new Drawer(latitude,longitude) ;
to initialize the map and create a marker on the current position
drawer.adjust(newLatitude,newLongitude);
to adjust the map position, change the marker position, and draw a polyline from the old position to the new position


 #This script is developed by Nacer Nsiri.
 # Copyright to Nacer Nsiri.
