


function reviews() {
    var reviewsRef = db.collection("reviews");
    
}
// reviews();




function showReviews() {
    db.collection("reviews")
    .get()
    .then(function (snap) {
            snap.forEach(function(doc) {
                var n = doc.data().name; //username
                var r = doc.data().review; //review
                let x = doc.data().star;
              
            var codestring = '<div class="customer-reviews">' +
            '<div class="star">' +
            '<span class="fa fa-star stars1">' + '</span>'
            +
                '<span class="fa fa-star stars2">' + '</span>' + '<span class="fa fa-star stars3">'
                +
                '</span>'
                +
                '<span class="fa fa-star stars4">'
                    +
                    '</span><span class="fa fa-star stars5">' + '</span>'
                    +'</div>' +
            '<p class="reviewtext">' + r + '</p>'
            + '<div class="whoposted">' 
            + '<div class="name">' + n + '</div>'
            + '</div>'
            + '</div>';

            $("#reviews-goes-here").append(codestring);
           
            for (j = 1; j <= x; j++) {
                $(".stars" + j).css("color", "orange");
            }
            

            })
        })
}
showReviews();

var rating = 0;

            $(document).ready(function () {
                $(".star").click(function (e) {
                    rating = $(e.target).attr("value");
                });
//reload page after button click function
                $("#btReload").click(function () {
                    location.reload(true);
                });

                getReviews();
            }); 





            function getReviews() {
              document.getElementById("finish").addEventListener('click', function() {
                  firebase.auth().onAuthStateChanged(function (user) {
                      var name = document.getElementById("userName").value;
                      var review = document.getElementById("userReview").value;

                      db.collection("reviews")
                      .add({
                          "name": name,
                          "review": review,
                          "star": rating
                      })
                  })
              })
          }




$(".star").click(e => {
  var value = $(e.target).attr("value");
});