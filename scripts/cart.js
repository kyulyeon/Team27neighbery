function addCartListener() {
    document.getElementById("addtocart").addEventListener('click', function() {
        firebase.auth().onAuthStateChanged(function (user) {

            var menuName = document.getElementById("menuName");
            var price = document.getElementById("price")


            db.collection("cart")
            .add({
                "name": menuName,
                "price" : price
            })
        })
    })
}
addCartListener();

function getCart() {
    document.getElementById("addtocart").addEventListener('click', function () {
                firebase.auth().onAuthStateChanged(function (user) {
                    
                    var name = document.getElementById("cart").value;
                    // var menu = document.getElementById("menu").value;
                    // var aboutmenu = document.getElementById("aboutmenu").value;
                    // var price = document.getElementById("price").value;

                    
                //     db.collection("menu").get().then(function (snap) {
                //     snap.forEach(function (doc) {
                //     var item = doc.data().menu_item;    //key "menu_item"
                //     var descrip = doc.data().description; // key "description"
                //     var price = doc.data().price;
                //     })
                // })
                    db.collection("cart")
                    .add({
                        "name": name,
                        // "menu": menu,
                        // "descrip": aboutmenu,
                        // "price": price,
                    })
              })
        
            })
        }
        getCart();