$(document).ready(function() {
    $("form").submit(function(){
     $(".button").css("background-color", "black");
     $(".button").css("background-color", "black");
     $(".button").css("color", "white");
     $(".button").css("text-align", "center");
     $(".button").text("Message Sent");
     $(".button").css( "font-weight", "bold");
     $(".button").css( "border-radius", "10px");
     $(".button").css( "padding", "7px")
    });
    $("form").submit(function(event) {
        event.preventDefault(); // Prevent default form submission

        $.ajax({
            url: 'mail.php', // Server script to process data
            type: 'POST',
            data: $(this).serialize(),
            success: function(response) {
                $('.button').css('background-color', 'black'); // Change button color on success
                alert('Message sent successfully!');
            },
            error: function() {
                $('.button').css('background-color', 'blue'); // Change button color on error
                alert('Failed to send message.');
            }
        });
    });
});
