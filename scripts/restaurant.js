

function writeResturants() {
    // var resturantRef = db.collection("restaurants");
    // resturantRef.add({
    //     code: "MUMU",
    //     name: "Mumu Kitchen",
    // });
    // resturantRef.add({
    //     code: "TCG",
    //     name: "The Coquitlam Grill",
    // });
    // resturantRef.add({
    //     code: "Xpress",
    //     name: "Xpress Donair House",
      
    // });
    // resturantRef.add({
    //     code: "COR",
    //     name: "Cora",
      
    // });
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
            var codestring = '</br>' +'<div class="card" style="width:420px;height:auto;margin-left:auto;margin-right:auto;">' +
          '<img src="images/' + pic + '"class="card-img-top" alt="...">' +
          '<div class="card-body">' +
            '<h5 class="card-title">' + title + '</h5>' +
            '<p class="card-text">Vancouver BC, Delivery Price: $1.99 <br><br><a href="reviews.html">Click here to read reviews</a></p>' 
            + '<input type="button" value="Favorite" id =' + doc.id + ' class="btn btn-primary btn-sm" style="float: left;margin-top:25px;">' + '<br>'
            + '<a href="menu_items.html"><button type="button" class="btn btn-primary btn-sm" style="float: right;">Order Now</button>' + '</div>' + '</div>' ;
            

            // append with jquery to DOM
            $("#cards-go-here").append(codestring);
            addFavListenerById(doc.id);
        })
    })
}
showCollection();


function addFavListenerById(docid) {
    document.getElementById(docid).addEventListener("click", function() {
        console.log("favorite " + docid + " to favorite");
        firebase.auth().onAuthStateChanged(function (user) {
            db.collection("users").doc(user.uid)
            .set({
                FavByID: firebase.firestore.FieldValue.arrayUnion(docid)
            }, {
                merge: true
            });
        })
    })
};


function showfavCart() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).onSnapshot(function (doc) {

            var list = doc.data().FavByID;

            document.getElementById("fav-items-go-here").innerHTML = "";

            if (list) {
                list.forEach(function (title) {

                    db.collection("restaurants").doc(title).onSnapshot(function (doc) {
                        var pic = doc.data().imgURL; 
                         var title = doc.data().name; 
                         let msg = '</br>' +'<div class="card" style="width:420px;height:auto;margin-left:auto;margin-right:auto;">' +
                         '<img src="images/' + pic + '"class="card-img-top" alt="...">'
                         msg +=   '<div class="card-body">' +  '<h5 class="card-title">' + title + '</h5>'
                         msg +=  '<p class="card-text">Vancouver BC, Delivery Price: $1.99 <br>Reviews: 5star <a href="reviews.html">Click here to read reviews</a><br>Popular Menus: menu1, menu2, menu3</p>'                         
                         msg += '<a href="index.html" class="btn btn-primary">' + 'Back to Home' + '</a>'  + '</div>' + '</div>';
                          
                        console.log(msg);
                        $("#fav-items-go-here").append(msg);
                    })
                })
            }
        })
    })
}

// showFavCart();

