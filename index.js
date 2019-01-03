firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    $(".login-cover").hide();
  } else {
    // No user is signed in.
    $(".login-cover").show();
  }
});

$("#logout-button").click(
    function() {
        $(".login-cover").show();
    }
);
