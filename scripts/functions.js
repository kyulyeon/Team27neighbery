function loginSuccess() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            // Do something for the user here. 
            console.log(user.uid);
            db.collection("users")
                .doc(user.uid)
                .get()
                .then(function (doc) {
                    var n = doc.data().name;
                    console.log(n);
                    $("#user-name").text(n);
                })
        } else {
            // No user is signed in.
        }
    });
}
loginSuccess();

function reviews() {
    var reviewsRef = db.collection("reviews");
    // reviewsRef.add({
    //     name: "userName1",
    //     review: "userName1 review goes here",
    //     date: "2021-03-01"
    // });

    // reviewsRef.add({
    //     name: "userName2",
    //     review: "userName2 review goes here",
    //     date: "2021-02-28"
    // });

    // reviewsRef.add({
    //     name: "userName3",
    //     review: "userName3 review goes here",
    //     date: "2021-02-01"
    // });

    // reviewsRef.add({
    //     name: "userName4",
    //     review: "userName4 review goes here",
    //     date: "2021-01-25"
    // });
    
}
// reviews();

function showReviews() {
    db.collection("reviews")
    .orderBy("date")
    .get()
    .then(function (snap) {
            snap.forEach(function(doc) {
                var n = doc.data().name; //username
                var r = doc.data().review; //review
                var d = doc.data().date; //date

                var codestring = '<div class="customer-reviews">' +
                '<p class="reviewtext">' + r + '</p>'
                + '<div class="whoposted">' 
                + '<div class="name">' + n + '</div>'
                + '<div class="timeposted">' + d + '</div>'
                + '</div>'
                + '</div>';

                //append with jquery to DOM
                $("#reviews-goes-here").append(codestring);
            })
        })
}
showReviews();


function writeResturants() {
    var resturantRef = db.collection("restaurants");
    resturantRef.add({
        code: "MUMU",
        name: "Mumu Kitchen",
    });
    resturantRef.add({
        code: "TCG",
        name: "The Coquitlam Grill",
    });
    resturantRef.add({
        code: "Cor",
        name: "Cora",
       
       
    });
    resturantRef.add({
        code: "Nag",
        name: "Nagano Japanese Restaurant",
       
    });
    resturantRef.add({
        code: "Xpress",
        name: "Xpress Donair House",
      
    });
}
//writeRestaurants();

function resturantsQuery(){
    db.collection("restaurants")
    .get()
    .then(function(snap){
        snap.forEach(function(doc){
            var n = doc.data().name;
            
            console.log(n);
            var newdom = "<p> " + n + "</p>";
            $("#resturants-goes-here").append(newdom);
            //document.getElementById("cities-go-here").innerHTML = newdom;
        })
    })
}
resturantsQuery();

function showCollection(){
    db.collection("restaurants")
		.get()    //get whole collection
    .then(function(snap){
        snap.forEach(function(doc){          //cycle thru each doc 
            // do something with each document
            var pic = doc.data().imgURL;   //key "picture"
            var title = doc.data().name;    //key "name"
            
            // construct the string for card
            var codestring = '<div class="card">' +
          '<img src="images/' + pic + '"class="card-img-top" alt="...">' +
          '<div class="card-body">' +
            '<h5 class="card-title">' + title + '</h5>' +
            '<p class="card-text">Vancouver BC, Delivery Price: $1.99 <br>Reviews: 5star <a href="reviews.html">Click here to read reviews</a><br>Popular Menus: menu1, menu2, menu3</p>' +
            '<button type="button" class="btn btn-primary btn-sm" style="float: right;">Order Now</button>' + '</div>' + '</div>';
            // append with jquery to DOM
            $("#cards-go-here").append(codestring);
        })
    })
}
showCollection();


$(function () {
 
    $("#rateYo").rateYo({
      precision: 2,
    });
  });

//SEARCH BAR
function getRestaurants(){
    document.getElementById("submit").addEventListener('click', function () {
        var rest = document.getElementById("restaurants").value;
        console.log(rest);
        		//read cities collection from firestore, with query
                db.collection("restaurants")
                .where("name", "==", res)
                .get()
                .then(function (snap) {
                    snap.forEach(function(doc) {
                        console.log(doc.data());
                        //do something with the data
                    })
                })
    })
}
getRestaurants();


