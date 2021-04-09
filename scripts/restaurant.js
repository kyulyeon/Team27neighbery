
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
        code: "Xpress",
        name: "Xpress Donair House",
      
    });
    resturantRef.add({
        code: "COR",
        name: "Cora",
      
    });
}
// writeRestaurants();

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


