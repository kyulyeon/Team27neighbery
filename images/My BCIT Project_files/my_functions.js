
function sayHello() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            console.log(user.uid);
            db.collection("users")
                .doc(user.uid)
                .get()
                .then(function (doc) {
                    console.log(doc.data().name);
                    var n = doc.data().name;
                    $("#name-goes-here").text(n);
                })
        } else {
            // No user is signed in.
        }
    });
}
sayHello();

function writeCities() {
    var citiesRef = db.collection("cities");
    citiesRef.add({
        code: "YVR",
        name: "Vancouver",
        carly: true,             
        hemisphere: "north",
        population: 675218,
        picture: "yvr.jpg"
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
        hemisphere: "north",
        picture: "seoul.jpg",
        population: 9776000
    });
    citiesRef.add({
        code: "CAPE",
        name: "Cape Town",
        hemisphere: "south",
        population: 433688,
        picture: "capetown.jpg"
    });
    citiesRef.add({
        code: "BJ",
        name: "Beijing",
        hemisphere: "north",
        population: 21540000,
        picture: "beijing.jpg"
    });
}
writeCities();