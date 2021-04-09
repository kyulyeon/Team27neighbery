function writeMenus() {
    var resturantRef = db.collection("menu");
}
// writeRestaurants();

function menusQuery(){
    db.collection("menus")
    .get()
    .then(function(snap){
        snap.forEach(function(doc){
            var n = doc.data().name;
            
            console.log(n);
            var newdom = "<p> " + n + "</p>";
            $("#menus-goes-here").append(newdom);
            //document.getElementById("cities-go-here").innerHTML = newdom;
        })
    })
}
menusQuery();

function showMenuCollection(){
    db.collection("menu")
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
            // append with jquery to DOM
            $("#cards-go-here").append(codestring);
        })
    })
}
showCollection();
