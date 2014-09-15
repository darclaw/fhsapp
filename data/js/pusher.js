
    // Enable pusher logging - don't include this in production
    Pusher.log = function(message) {
      if (window.console && window.console.log) {
        window.console.log(message);
      }
    };

    var pusher = new Pusher('2c042a2fa66ca59f2787');
    var channel = pusher.subscribe('chan');
    channel.bind('eventn', function(data) {
      alert(data.message);
    });

