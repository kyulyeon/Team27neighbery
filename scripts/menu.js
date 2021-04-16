function writeMenus() {
    var resturantRef = db.collection("menu");
}
// writeRestaurants();

function showMenuCollection() {
    db.collection("menu")
        .get()    //get whole collection
        .then(function (snap) {
            snap.forEach(function (doc) {          //cycle thru each doc 
                // do something with each document
                var pic = doc.data().imgURL;   //key "picture"
                var item = doc.data().menu_item;    //key "menu_item"
                var descrip = doc.data().description; // key "description"
                var price = doc.data().price;
                // construct the string for card
                var codestring = '<br>' + '<div class="card" style="width:450px;height:auto;margin-left:auto;margin-right:auto;">' +
                    '<img src="images/' + pic + '"class="card-img-top" alt="..." style="width:400px;height:auto;margin-left:auto;margin-right:auto;">' +
                    '<div class="card-body">' +
                    '<h5 class="card-title" id="menuName">' + item + '</h5>' +
                    '<p>' + descrip + '</p>' +
                    '<p id="price"> price: $' + price + '</p>' + '</div>' +
                    '<input type="button" value="Add to Cart" id =' + doc.id + ' style="width:120px;height:auto;margin-left:300px;">' + '<br>';
                $("#menus-goes-here").append(codestring);
                addCartListenerById(doc.id);
            })
        })
}
// showMenuCollection();

function addCartListenerById(docid) {
    document.getElementById(docid).addEventListener("click", function () {
        console.log("adding " + docid + " to cart");
        firebase.auth().onAuthStateChanged(function (user) {
            db.collection("users").doc(user.uid)
                .set({
                    CartByID: firebase.firestore.FieldValue.arrayUnion(docid)
                }, {
                    merge: true
                });
        })
    })
}

function showShoppingCart() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("users").doc(user.uid).onSnapshot(function (doc) {

            var list = doc.data().CartByID;

            document.getElementById("cart-items-go-here").innerHTML = "";

            if (list) {
                list.forEach(function (item) {

                    db.collection("menu").doc(item).onSnapshot(function (doc) {
                        let name = doc.data().menu_item;
                        let cost = doc.data().price;
                        let msg = '<div class="card" >' + '</br>' + '<div class="card-body"> <h5 class="card-title">' + name + '</h5>';
                        msg += '<p class="card-text">Price: $' + cost + '</p>'
                        msg += '<a href="menu_items.html" class="btn btn-primary">' + 'Back to Menu' + '</a>'
                        console.log(msg);
                        $("#cart-items-go-here").append(msg);
                    })
                })
            }
        })
    })
}

// showShoppingCart();



