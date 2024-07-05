function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 34.667685918050864, lng: 135.43027967345125},
    zoom: 18,
    mapId: 'MAP_ID',
    mapTypeControl: false,
    fullScreenControl: false,
    streetViewControl: false
  });

  //Name
  //Latitude, Longitude
  // Image URL
  // scaledSize innerWidth, height
  const markers = [
  [
    "Yoshi\'s House",
    34.66673002217483,
    135.43084588620962,
    "yoshi_house.svg",
    38,
    31
  ],
  [
    "You Are Here",
    34,
    135,
    "pointer.svg",
    30,
    47.8
  ],
  [
    "Ghost House",
    34.668,
    135.4392,
    "ghosthouse.svg",
    40,
    48
  ]
  ];

  for(let i = 0; i < markers.length; i++) {
    const currMarker = markers[i];

    const marker = new google.maps.Marker({
      position: { lat: currMarker[1], lng: currMarker[2] },
      map,
      title: currMarker[0],
      icon: {
        url: currMarker[3],
        scaledSize: new google.maps.Size(currMarker[4], currMarker[5])
      },
      animation: google.maps.Animation.DROP
    });
  
    const infowindow = new google.maps.InfoWindow({
      content: currMarker[0],
    });
  
    marker.addListener("click", () => {
      infowindow.open(map, marker);
    });
  }
}