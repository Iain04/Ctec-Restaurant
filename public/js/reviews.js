function fetchReviews() {
    var request = new XMLHttpRequest();

    request.open('GET', "http://ec2-54-236-85-44.compute-1.amazonaws.com:8080/review", true);

    request.onload = function () {
        review_array = JSON.parse(request.responseText);
        console.log(review_array);
        showRestaurantReviews();
    };

    request.send();
}

function showRestaurantReviews() {
    document.getElementById("empty-reviews").innerHTML = "No review yet. Create one now";
    var restaurantName = localStorage.getItem('restaurant-name');
    var restaurantID = localStorage.getItem('restaurantID');
    var review_username = sessionStorage.getItem('username');
    document.getElementById("review-body").textContent = "";
    for (var i = 0; i < review_array.length; i++) {
        if (review_array[i].restaurantReview === restaurantName) {
            document.getElementById("empty-reviews").innerHTML = "";
            selectedRestaurantId = restaurantID;
            var html = '<div class="container-fluid">\
                            <div class="card review-card">\
                                <div class="card-body">\
                                    <div class="row">\
                                        <div class="col-auto me-auto left">\
                                            <img class="profilePic-review" src="'+review_array[i].profilePic+'">\
                                            <span class="card-text">'+review_array[i].username+'</span>\
                                        </div>\
                                        <div class="col-auto right">\
                                            <span class="card-text">'+review_array[i].date+'</span>\
                                            <br>\
                                            Rating:\
                                            <span class="card-text" id="ratingStar' + i + '"></span>\
                                            Price:\
                                            <span class="card-text" id="ratingPrice' + i + '"></span>\
                                        </div>\
                                    </div>\
                                </div>\
                                <div class="card-footer">\
                                <div class="row">\
                                        <div class="col-auto me-auto left">\
                                            <p class="card-text">'+review_array[i].comment+'</p>\
                                        </div>\
                                        <div class="col-auto right">\
                                            <button class="btn-edit" id="btnEdit' + i + '" data-toggle="modal" data-target="#editReviewModal" data-dismiss="modal" item="'+i+'" onclick="editReview(this)" style="display: none">\
                                                Edit\
                                                <span class="card-text" id="editIcon' + i + '"></span>\
                                            </button>\
                                            <button class="btn-delete" id="btnDelete' + i + '" data-dismiss="modal" item="'+i+'" onclick="deleteReview(this)" style="display: none">\
                                                Delete\
                                                <span class="card-text" id="deleteIcon' + i + '"></span>\
                                            </button>\
                                        </div>\
                                    </div>\
                                </div>\
                            </div>\
                        </div>';
            document.getElementById("review-body").insertAdjacentHTML('beforeend', html);

            var ratingStar = "";
            for (var j = 0; j < review_array[i].ratingReview; j++) {
                ratingStar += "<i class='fas fa-star'></i>";
            }
            document.getElementById("ratingStar" + i).insertAdjacentHTML('beforebegin', ratingStar + "<br/>");

            var ratingPrice = "";
            for (var k = 0; k < review_array[i].ratingReview; k++) {
                ratingPrice += "<i class='fas fa-dollar-sign'></i>";
            }
            document.getElementById("ratingPrice" + i).insertAdjacentHTML('beforebegin', ratingPrice + "<br/>");

            var editIcon = "";
            editIcon += "<i class='fas fa-pen'></i>";
            document.getElementById("editIcon" + i).insertAdjacentHTML('beforebegin', editIcon + "<br/>");

            var deleteIcon = "";
            deleteIcon += "<i class='far fa-trash-alt'></i>";
            document.getElementById("deleteIcon" + i).insertAdjacentHTML('beforebegin', deleteIcon + "<br/>");

            if (review_username != null) {
                if (review_array[i].username == review_username) {
                    document.getElementById('btnEdit'+[i]+'').setAttribute("style", "display: inline;");
                    document.getElementById('btnDelete'+[i]+'').setAttribute("style", "display: inline;");
                }
            }
        }
    }
}

function newReview() {
    //Initialise each HTML input elements in the modal window with default value.
    rating = 0;
    document.getElementById("userComments").value = "";
}

function addReview() {
    if (sessionStorage.getItem("username") != null) {
        var review = new Object();
        review.idUser = sessionStorage.getItem('idUser');
        review.idRestaurant = localStorage.getItem('restaurantID');
        review.date = "";
        review.comment = document.getElementById("userComments").value;
        review.ratingReview = rating;
        review.priceReview = pricerating;
        review.restaurantReview = localStorage.getItem('restaurant-name');
        review.usernameReview = sessionStorage.getItem('username');

        var request = new XMLHttpRequest();

        request.open("POST", "http://ec2-54-236-85-44.compute-1.amazonaws.com:8080/review", true); 

        request.setRequestHeader("Content-Type", "application/json");
        request.onload = function () {
            console.log("new review added");
            fetchReviews();     
        };
        request.send(JSON.stringify(review));
    }
    else {
        $('#fail-modal').modal('show');
    }
}

function editReview(element) {
    var item = element.getAttribute('item');
    console.log(review_array[item].comment);
    currentIndex = item;

    document.getElementById("edituserReview").value = review_array[item].comment;
    console.log(review_array[item].ratingReview);
    displayColorStar('editstar', review_array[item].ratingReview);
    displayColorPrice('editprice', review_array[item].priceReview);
}

function displayColorStar(name, num) {
    var stars = document.getElementsByName(name);
    var nameTarget = "[name="+name+"]";
    console.log(nameTarget);

    for (let star of stars) {
        star.classList.replace("fas", "far");
    }
    changeStarIcon(num, nameTarget);
}

function displayColorPrice(name, num) {
    var prices = document.getElementsByName(name);
    var nameTarget = "[name="+name+"]";
    console.log(nameTarget);

    for (let price of prices) {
        price.setAttribute("style", "color: gray;");
    }
    changePriceIcon(num, nameTarget);
}


function updateReview() {
    if (sessionStorage.getItem("username") != null) {
        var response = confirm("Are you sure you want to update this review?");
        if (response == true) {
            var edit_review_url = "http://ec2-54-236-85-44.compute-1.amazonaws.com:8080/review" + "/" + review_array[currentIndex]._id;
            var request = new XMLHttpRequest();
            request.open("PUT", edit_review_url, true); 
            request.setRequestHeader("Content-Type", "application/json");
            review_array[currentIndex].comment = document.getElementById("edituserReview").value;
            review_array[currentIndex].ratingReview = rating;
            review_array[currentIndex].priceReview = pricerating;
            console.log(review_array[currentIndex]);
            request.onload = function () {
                fetchReviews();
            };
            request.send(JSON.stringify(review_array[currentIndex]));
        }
    }
    else {
        $('#fail-modal').modal('show');
    }
}

function deleteReview(element) {
    if (sessionStorage.getItem("username") != null) {
        var response = confirm("Are you sure you want to delete this review?");

        if (response == true) {
            var item = element.getAttribute("item");
            var delete_review_url = "http://ec2-54-236-85-44.compute-1.amazonaws.com:8080/review" + "/" + review_array[item]._id;
            var request = new XMLHttpRequest();
            request.open("DELETE", delete_review_url, true);
            request.onload = function() {
                fetchReviews();
            };
            request.send();
        }
    }
    else {
        $('#fail-modal').modal('show');
    }
}

function rateItStar(element) {
    var num = element.getAttribute("value");
    var name = element.getAttribute("name");
    var stars = document.getElementsByName(name);
    var nameTarget = "[name="+name+"]";
    console.log(nameTarget);

    for (let star of stars) {
        star.classList.replace("fas", "far");
    }

    changeStarIcon(num, nameTarget);
}

function rateItPrice(element) {
    var num = element.getAttribute("value");
    var name = element.getAttribute("name");
    var prices = document.getElementsByName(name);
    var nameTarget = "[name="+name+"]";
    console.log(nameTarget);

    for (let price of prices) {
        price.setAttribute("style", "color: gray;");
    }
    changePriceIcon(num, nameTarget);
}

function changeStarIcon(num, nameTarget) {
    switch (eval(num)) {
        case 1:
            document.querySelector(nameTarget + "[value='1']").classList.replace("far", "fas");
            rating = 1;
            break;
        case 2:
            document.querySelector(nameTarget + "[value='1']").classList.replace("far", "fas");
            document.querySelector(nameTarget + "[value='2']").classList.replace("far", "fas");
            rating = 2;
            break;
        case 3:
            document.querySelector(nameTarget + "[value='1']").classList.replace("far", "fas");
            document.querySelector(nameTarget + "[value='2']").classList.replace("far", "fas");
            document.querySelector(nameTarget + "[value='3']").classList.replace("far", "fas");
            rating = 3;
            break;
        case 4:
            document.querySelector(nameTarget + "[value='1']").classList.replace("far", "fas");
            document.querySelector(nameTarget + "[value='2']").classList.replace("far", "fas");
            document.querySelector(nameTarget + "[value='3']").classList.replace("far", "fas");
            document.querySelector(nameTarget + "[value='4']").classList.replace("far", "fas");
            rating = 4;
            break;
        case 5:
            document.querySelector(nameTarget + "[value='1']").classList.replace("far", "fas");
            document.querySelector(nameTarget + "[value='2']").classList.replace("far", "fas");
            document.querySelector(nameTarget + "[value='3']").classList.replace("far", "fas");
            document.querySelector(nameTarget + "[value='4']").classList.replace("far", "fas");
            document.querySelector(nameTarget + "[value='5']").classList.replace("far", "fas");
            rating = 5;
            break;
    }
}

function changePriceIcon(num, nameTarget) {
    switch (eval(num)) {
        case 1:
            document.querySelector(nameTarget + "[value='1']").setAttribute("style", "color: green;");
            pricerating = 1;
            break;
        case 2:
            document.querySelector(nameTarget + "[value='1']").setAttribute("style", "color: green;");
            document.querySelector(nameTarget + "[value='2']").setAttribute("style", "color: green;");
            pricerating = 2;
            break;
        case 3:
            document.querySelector(nameTarget + "[value='1']").setAttribute("style", "color: green;");
            document.querySelector(nameTarget + "[value='2']").setAttribute("style", "color: green;");
            document.querySelector(nameTarget + "[value='3']").setAttribute("style", "color: green;");
            pricerating = 3;
            break;
        case 4:
            document.querySelector(nameTarget + "[value='1']").setAttribute("style", "color: green;");
            document.querySelector(nameTarget + "[value='2']").setAttribute("style", "color: green;");
            document.querySelector(nameTarget + "[value='3']").setAttribute("style", "color: green;");
            document.querySelector(nameTarget + "[value='4']").setAttribute("style", "color: green;");
            pricerating = 4;
            break;
        case 5:
            document.querySelector(nameTarget + "[value='1']").setAttribute("style", "color: green;");
            document.querySelector(nameTarget + "[value='2']").setAttribute("style", "color: green;");
            document.querySelector(nameTarget + "[value='3']").setAttribute("style", "color: green;");
            document.querySelector(nameTarget + "[value='4']").setAttribute("style", "color: green;");
            document.querySelector(nameTarget + "[value='5']").setAttribute("style", "color: green;");
            pricerating = 5;
            break;
    }
}
