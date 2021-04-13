function  addCartListener(id){
    document.getElementById("finished").addEventListener('click', function () {
      console.log(id + "was clicked")
        firebase.auth().onAuthStateChanged(function (user) {
      
            // get various values from the form
          

                var name = document.getElementById("userName").value;
                var price = document.getElementById("p").value;
                var flexCheckIndeterminate  = document.getElementById("flexCheckIndeterminate").checked;
              
       
              
    
                db.collection("cart")
                   
                    .add({
                        "name": name,   //from text field
                        "price": price,
                        "checked":flexCheckIndeterminate
                    })
            
          
        })
    })
    
}


