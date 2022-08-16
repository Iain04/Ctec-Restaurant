var express = require("express"); //using the express web framework

var reviewController = require('./controllers/reviewController'); // set reviewController to the reviewController class
var restaurantController = require('./controllers/restaurantController'); // set restaurantController to the restaurantController class
var userController = require('./controllers/userController');
var favouriteController = require('./controllers/favouriteController');
var app = express(); // set variable app to be an instance of express framework. From now on, app is the express

app.use(express.static("./public")); //static files are to be served from the public folder - for eg. html, images, css
app.use(express.json()); // json() is a method inbuilt in express to recognize the incoming Request Object from the web client as a JSON Object.
// In time to come we will need to accept new or edited comments from user

app.route('/restaurant').get(restaurantController.getAllRestaurant);// activate the getAllRestaurant method if the route is GET(method) /restaurant
app.route('/search').post(restaurantController.searchRestaurant);
app.route('/category').post(restaurantController.getRestaurantCategory);
app.route('/featured').get(restaurantController.getAllFeatured);
app.route('/restaurantUserReview').get(restaurantController.getAllRestaurantUserReview);

app.route('/review').get(reviewController.getAllReview); // activate the getAllReview method if the route is GET(method) /review
app.route('/review/:id').get(reviewController.getAllReviewByUserRestaurant);
app.route('/review').post(reviewController.addReview); // activate the addReview method if the route is POST(method) /review
app.route('/review/:id').put(reviewController.updateReview) // activate the updateReview method if the route is PUT(method) /review/:id
app.route('/review/:id').delete(reviewController.deleteReview); // activate the deleteReview method if the route is DELETE(method) /review/:id

app.route('/user').get(userController.getAllUser); // activate the getAllReview method if the route is GET(method) /review
app.route('/login').post(userController.login); 
app.route('/member').post(userController.getMember); // activate the addReview method if the route is POST(method) /review
app.route('/user').post(userController.addUser); // activate the addReview method if the route is POST(method) /review
app.route('/user').put(userController.updateUser); // activate the updateReview method if the route is PUT(method) /review/:id
app.route('/user/:id').delete(userController.deleteUser);

app.route('/favourite/:id').get(favouriteController.getFavouriteRestaurant);
app.route('/favourite').post(favouriteController.addFavourite); 
app.route('/favourite/:id').delete(favouriteController.deleteFavourite);

app.listen(8080, "ec2-54-166-17-19.compute-1.amazonaws.com");
console.log("web server running @ec2-54-166-17-19.compute-1.amazonaws.com:8080")
