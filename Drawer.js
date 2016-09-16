var Drawer=function(lat,long){
 var parent=this;//drawer root to make it accessible for functions
 /**Create google maps LatLng from coordinates**/
	this.createLatLng=function(lat,long){
			return new google.maps.LatLng(lat,long);

		};

 var latLng = this.createLatLng(lat,long);


/**initialize the map**/
	this.map = new google.maps.Map(document.getElementById("map"), {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });



/**initialize marker**/ 
	this.marker = new google.maps.Marker({
      map: parent.map,
      animation: google.maps.Animation.DROP,
      position: latLng

  	});

/**initialize polyline**/
	this.polyline = new google.maps.Polyline({
      path:[latLng],
          icons: [
      {
        icon: { path: 'M -2,-2 2,2 M 2,-2 -2,2', strokeColor: '#292',strokeWeight: 4},
        offset: '0%'
      }],
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 2,
      editable: false
    
  	});
//Set the map for the polyline
	this.polyline.setMap(parent.map);

/**Adjust position,marker,polyline for new incomming positions**/
	this.adjust=function(lat,long){
//Set the polyline
  	 parent.polyline.getPath().push(parent.createLatLng(lat,long));
//Set the map camera position
	 parent.map.panTo(parent.createLatLng(lat,long));
//Set the marker position
   	 parent.marker.setPosition(parent.createLatLng(lat,long));
     }
 }
 //end of Drawer class

 //usage
 window.addEventListener("load",function(){
document.write("<div id='map' style='width:500px;height:500px;'></div>");
//initialize the drawer
  var drawer=new Drawer(36.8065,10.1815);
//adjust map position,marker,polyline by coordinates 
  drawer.adjust(36.8181,10.1905);
 });