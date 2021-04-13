// function  getCart(){
//     document.getElementById("finished").addEventListener('click', function () {
//       console.log(id + "was clicked")
//         firebase.auth().onAuthStateChanged(function (user) {

//             // get various values from the form


//                 var name = document.getElementById("userName").value;
//                 var price = document.getElementById("p").value;
//                 var flexCheckIndeterminate  = document.getElementById("flexCheckIndeterminate").checked;




//                 db.collection("cart")

//                     .add({
//                         "name": name,   //from text field
//                         "price": price,
//                         "checked":flexCheckIndeterminate
//                     })


//         })
//     })

// }
// getCart();

function getCart() {
    document.getElementById("addtocart").addEventListener('click', function () {
                firebase.auth().onAuthStateChanged(function (user) {
                    
                    var name = document.getElementById("cart").value;
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
                        // "menu": item,
                        // "description": descrip,
                        // "price": price,
                    })
              })
        
            })
        }
        getCart();