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

function reviewsQuery() {
    db.collection("reviews")
    .orderBy("date")
    .get()
    .then(function (snap) {
        snap.forEach(function (doc) {
            var n = doc.data().name;
            var r = doc.data().review;
            var d = doc.data().date;
            console.log(n);
            var newdom = "<p> " + n + "<br>" + r + "<br>" + d + "</p>";
            $("#reviews-goes-here").append(newdom);
            //document.getElementById("cities-go-here").innerHTML = newdom;
        })
    })
}

reviewsQuery();

function writeResturants() {
    var resturantRef = db.collection("restaurants");
    resturantRef.add({
        code: "CoffeeBun",
        name: "Coffee Bun",
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

function ShowCollection(){
    db.collection("restaurants")
		.get()    //get whole collection
    .then(function(snap){
        snap.forEach(function(doc){          //cycle thru each doc 
            // do something with each document
            var pic = doc.data().picture;   //key "picture"
            var title = doc.data().name;    //key "name"
            
            // construct the string for card
            var codestring = '<div>'+
            '<img src="images/' + pic + '" class="card-img-top">'+
            '<div class="card-body">'+
            '<h5 class="card-title">' + title + '</h5>'+
            '<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>'+
            '<p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>'+
            '</div>';
            // append with jquery to DOM
            $("#cards-go-here").append(codestring);
        })
    })
}
showCollection();