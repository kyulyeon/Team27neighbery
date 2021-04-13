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
                var codestring = '<div class="card">' +
                    '<img src="images/' + pic + '"class="card-img-top" alt="..." style="width:400px;height:auto;margin-left:auto;margin-right:auto;">' +
                    '<div class="card-body">' +
                    '<h5 class="card-title" id="menuName">' + item + '</h5>' +
                    '<p>' + descrip + '</p>' +
                    '<p id="price"> price: ' + price + '</p>' + '</div>' +
                    // '<input type="hidden" id="menu" value="Ban-Ban Chicken">' 
                    // + '<input type="hidden" id="aboutmenu" value="Half original and half sweet-sour. Boneless. *ALLERGY ALERT: All chicken menu contains PEANUT POWDER">' 
                    // + '<input type="hidden" id="price" value="$30">' +
                    '<input type="button" value="Add to Cart" id ="addtocart">';
                $("#menus-goes-here").append(codestring);
            })
        })
}
showMenuCollection();




