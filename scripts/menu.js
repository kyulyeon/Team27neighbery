function writeMenus() {
    var resturantRef = db.collection("menu");
}
// writeRestaurants();

// function menusQuery(){
//     db.collection("menus")
//     .get()
//     .then(function(snap){
//         snap.forEach(function(doc){
//             var n = doc.data().name;

//             console.log(n);
//             var newdom = "<p> " + n + "</p>";
//             $("#menus-goes-here").append(newdom);
//         })
//     })
// }
// menusQuery();

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
                    '<img src="images/' + pic + '"class="card-img-top" alt="...">' +
                    '<div class="card-body">' +
                    '<h5 class="card-title" id = "names">' + item + '</h5>' +
                    '<p>' + descrip + '</p>' +
                    '<p id = "p"> price: ' + price + '</p>' + '</div>' +
                    '<div class="form-check">' +
                    '<input class="form-check-input" type="checkbox" value=" x" id="flexCheckIndeterminate">' +
                    '<label class="form-check-label" for="flexCheckIndeterminate">' +
                    'Add to Cart' +
                    '</label>' +
                    '</div>';
                $("#menus-goes-here").append(codestring);
            })
        })
}
showMenuCollection();


function getCart() {
    document.getElementById("finish").addEventListener('click', function () {
        firebase.auth().onAuthStateChanged(function (user) {

            // get various values from the form
            var name = document.getElementById("names").value;
            var p = document.getElementById("p").value;

            // Either true or false
            var menu = document.getElementById('flexCheckIndeterminate').checked;
          

            db.collection("cart")
                .doc(menu.uid)
                .collection("items")
                .add({
                    "name": menu.name,   //from text field
                    "p":p,
                   "menu": menu,
                })
        })
    })
    
}
getCart();


