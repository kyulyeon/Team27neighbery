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
    reviewsRef.add({
        name: "userName1",
        review: "userName1 review goes here",
        date: "2021-03-01"
    });

    reviewsRef.add({
        name: "userName2",
        review: "userName2 review goes here",
        date: "2021-02-28"
    });

    reviewsRef.add({
        name: "userName3",
        review: "userName3 review goes here",
        date: "2021-02-01"
    });

    reviewsRef.add({
        name: "userName4",
        review: "userName4 review goes here",
        date: "2021-01-25"
    });
    
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
    var citiesRef = db.collection("resturants");
    resturantsRef.add({
        code: "CoffeeBun",
        name: "Coffee Bun",
    });
    citiesRef.add({
        code: "MB",
        name: "Mumbai",
        hemisphere: "south",
        picture: "mumbai.jpg",
        population: 18410000
    });
    citiesRef.add({
        code: "SEL",
        name: "Seoul",
       
       
    });
    citiesRef.add({
        code: "CAPE",
        name: "Cape Town",
       
    });
    citiesRef.add({
        code: "BJ",
        name: "Beijing",
      
    });
}
//writeResturants();