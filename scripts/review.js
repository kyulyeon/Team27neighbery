
function reviews() {
    var reviewsRef = db.collection("reviews");
    
}
// reviews();

function showReviews() {
    db.collection("reviews")
    .orderBy("date")
    .get()
    .then(function (snap) {
            snap.forEach(function(doc) {
                var n = doc.data().name; //username
                var r = doc.data().review; //review
                var d = doc.data().date; //date

                var codestring = '<div class="customer-reviews">' +
                '<p class="reviewtext">' + r + '</p>'
                + '<div class="whoposted">' 
                + '<div class="name">' + n + '</div>'
                + '<div class="timeposted">' + d + '</div>'
                + '</div>'
                + '</div>';

                //append with jquery to DOM
                $("#reviews-goes-here").append(codestring);
            })
        })
}
showReviews();

$(function () {
 
    $("#rateYo").rateYo({
      precision: 2,
    });
});


  function getReviews() {
      document.getElementById("finish").addEventListener('click', function() {
        firebase.auth().onAuthStateChanged(function (user) {

            var name = document.getElementById("userName").value;
            var review = document.getElementById("userReview").value;
            var date = document.getElementById("date").value;
            db.collection("reviews")
            .add({
                "name": name,
                "review": review,
                "date": date,
            })
      })

    })
}
getReviews();

//reload page after button click function

$(function() {
    $("#btReload").click(function (){
        location.reload(true);
    });
});