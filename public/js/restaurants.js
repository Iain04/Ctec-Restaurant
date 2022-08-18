function getFeaturedData() {
    var request = new XMLHttpRequest();
    request.open('GET', 'http://ec2-54-236-85-44.compute-1.amazonaws.com:8080/featured', true);
    request.onload = function () {    
        restaurant_array = JSON.parse(request.responseText);    
        console.log(restaurant_array)             	
        displayFeaturedRestaurants();
    }; 
    request.send();
}

function getRestaurantData() {
    var request = new XMLHttpRequest();
    request.open('GET', 'http://ec2-54-236-85-44.compute-1.amazonaws.com:8080/restaurant', true);
    request.onload = function () {    
        restaurant_array = JSON.parse(request.responseText);
        console.log(restaurant_array)             	
        displayRestaurants();
    }; 
    request.send();
}

function searchRestaurant(searchtxt) {
    if (searchtxt.length == 0){
        getRestaurantData();
    }   
    var request = new XMLHttpRequest();
    request.open('POST', 'http://ec2-54-236-85-44.compute-1.amazonaws.com:8080/search', true);
    request.setRequestHeader("Content-Type", "application/json");
    request.onload = function () { 
        restaurant_array = JSON.parse(request.responseText);
        console.log("searched");
        displayRestaurants();
    }; 
    request.send(JSON.stringify({search: searchtxt}));
}

function getRestaurantCategory(categorytxt) {
    if (categorytxt == "clear"){
        getRestaurantData();
    } 
    var request = new XMLHttpRequest();
    request.open('POST', 'http://ec2-54-236-85-44.compute-1.amazonaws.com:8080/category', true);
    request.setRequestHeader("Content-Type", "application/json");
    request.onload = function () {
        restaurant_array = JSON.parse(request.responseText);
        console.log(restaurant_array);
        displayRestaurants();
    }; 
    request.send(JSON.stringify({category: categorytxt}));
}

function displayFeaturedRestaurants(){
    var table = document.getElementById("restaurantsTable");
    table.innerHTML = "";
    totalRestaurants = restaurant_array.length;
    
    for (var count = 0; count < 3; count++) {
        var restaurantID  = restaurant_array[count]._id;
        var restaurantName = restaurant_array[count].restaurantName;
        var location = restaurant_array[count].location;
        var ratingRestaurant = restaurant_array[count].averageRating;
        var priceRestaurant = restaurant_array[count].averagePrice;
        var category = restaurant_array[count].category;
        var picture = restaurant_array[count].picture;
        var totalReviews = restaurant_array[count].totalReviews;
        var cell = '<a class="card featured-card" id="'+restaurantID+'" item="'+count+'" onClick="populateRestaurantDetails(this)" href="restaurant-indiv.html">\
                    <img src="'+picture+'" class="card-img-top" alt="Card image cap">\
                    <div class="card-body">\
                    <h5 class="card-title">'+restaurantName+'</h5>\
                    <p class="card-text">'+location+'</p>\
                    <i class="fas fa-star"></i>\
                    <span class="text">'+ratingRestaurant+'</span>\
                    <i class="fas fa-dollar-sign"></i>\
                    <span class="text">'+priceRestaurant+'</span>\
                    <br><br>\
                    <span class="text-category">'+category+'</span>\
                    <br><br>\
                    <span class="text">'+totalReviews+' Reviews</span>'
        table.insertAdjacentHTML('beforeend', cell);
    }
}

function displayRestaurants(){
    var table = document.getElementById("restaurantsTable");
    table.innerHTML = "";
    totalRestaurants = restaurant_array.length;
    
    console.log(restaurant_array);
    if (restaurant_array[0].restaurantName !== null){
        for (var count = 0; count < totalRestaurants; count++) {
            var restaurantID  = restaurant_array[count]._id;
            var restaurantName = restaurant_array[count].restaurantName;
            var location = restaurant_array[count].location;
            var ratingRestaurant = restaurant_array[count].averageRating;
            var priceRestaurant = restaurant_array[count].averagePrice;
            var category = restaurant_array[count].category;
            var picture = restaurant_array[count].picture;
            var totalReviews = restaurant_array[count].totalReviews;
            var cell = '<a class="card restaurant-card" id="'+restaurantID+'" item="'+count+'" onClick="populateRestaurantDetails(this)" href="restaurant-indiv.html">\
                        <img src="'+picture+'" class="card-img-top" alt="Card image cap">\
                        <div class="card-body">\
                        <h5 class="card-title">'+restaurantName+'</h5>\
                        <p class="card-text">'+location+'</p>\
                        <i class="fas fa-star"></i>\
                        <span class="text">'+ratingRestaurant+'</span>\
                        <i class="fas fa-dollar-sign"></i>\
                        <span class="text">'+priceRestaurant+'</span>\
                        <br><br>\
                        <span class="text-category">'+category+'</span>\
                        <br><br>\
                        <span class="text">'+totalReviews+' Reviews</span>'
            table.insertAdjacentHTML('beforeend', cell);
        }
    }
    else {
        var noRestaurant = '<div class="container-fluid noRestaurants-cell">\
                            <i class="fas fa-ellipsis-h"></i>\
                            <p>Looking for more Restaurants</p>\
                            </div>'
        table.insertAdjacentHTML('beforeend', noRestaurant);
    }
}

function populateRestaurantDetails(element) {
    var item = element.getAttribute("item");
    console.log(restaurant_array)
    localStorage.setItem('restaurantID', restaurant_array[item]._id);
    localStorage.setItem('restaurant-name',  restaurant_array[item].restaurantName);
    localStorage.setItem('rating-restaurant',  restaurant_array[item].averageRating);
    localStorage.setItem('price-restaurant',  restaurant_array[item].averagePrice);
    localStorage.setItem('category-restaurant',  restaurant_array[item].category);
    localStorage.setItem('restaurant-cover-picture', restaurant_array[item].picture);
    localStorage.setItem('contact-restaurant',  restaurant_array[item].contact);
    localStorage.setItem('opening-hours',  restaurant_array[item].openingHours);
    localStorage.setItem('restaurant-desc',  restaurant_array[item].description);
    localStorage.setItem('address-restaurant',  restaurant_array[item].address);
    localStorage.setItem('total-reviews',  restaurant_array[item].totalReviews);
    localStorage.setItem('longtitude',  restaurant_array[item].longtitude);
    localStorage.setItem('latitude',  restaurant_array[item].latitude);
    localStorage.setItem('location-restaurant',  restaurant_array[item].location);
}

function setRestaurantDetails() {
    fetchReviews()
    document.getElementById("restaurant-name").textContent = localStorage.getItem('restaurant-name');
    document.getElementById("rating-restaurant").textContent = localStorage.getItem('rating-restaurant');
    document.getElementById("price-restaurant").textContent = localStorage.getItem('price-restaurant');
    document.getElementById("category-restaurant").textContent = localStorage.getItem('category-restaurant');
    document.getElementById("restaurant-cover-picture").src = localStorage.getItem('restaurant-cover-picture');
    document.getElementById("contact-restaurant").textContent = localStorage.getItem('contact-restaurant');
    document.getElementById("opening-hours").textContent = localStorage.getItem('opening-hours');
    document.getElementById("restaurant-desc").textContent = localStorage.getItem('restaurant-desc');
    document.getElementById("address-restaurant").textContent = localStorage.getItem('address-restaurant');
    document.getElementById("total-reviews").textContent = localStorage.getItem('total-reviews');
}

function showMap() {
    var longtitude = localStorage.getItem('longtitude');
    var latitude = localStorage.getItem('latitude');
    var locationName = localStorage.getItem('location-restaurant');
    var restaurantName = localStorage.getItem('restaurant-name');
    var locations = [longtitude, latitude, locationName, restaurantName]
    console.log(latitude,longtitude)
    map = new google.maps.Map(document.getElementById("map"), {center:{lat:1.8, lng:110.9},zoom:4});
    var infoWindow = new google.maps.InfoWindow();
    var marker, i;
    var markers = [];

    marker = new google.maps.Marker({
        position : new google.maps.LatLng(locations[0], locations[1]),
        map: map,
        icon :{
            url:"http://maps.google.com/mapfiles/ms/icons/restaurant.png"
        }

    });

    markers.push(marker);
    google.maps.event.addListener(marker, 'click', (function (marker,i){
        return function (){
            infoWindow.setContent(locations[3] + " " + locations[2]);
            infoWindow.open(map,marker);
        }
    })(marker, i));

    navigator.geolocation.getCurrentPosition(
        (position)=>{
            const pos ={
                lat:position.coords.latitude,
                lng:position.coords.longitude
            }
            map.setCenter(pos);
            map.setZoom(15);
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(pos.lat, pos.lng),
                map: map,
                icon: {
                    url:"http://maps.google.com/mapfiles/ms/icons/red-dot.png"
                }
            })
            markers.push(marker);
            google.maps.event.addListener(marker, 'click', (function (marker, i){
                return function (){
                    infoWindow.setContent("Your current Location");
                    infoWindow.open(map,marker);
                }
            })(marker, i));

        }
    )
}


