// Event to detect the start and the end of the move move.
(function ($) {
    var moving = false;
    var timeout;
    var interval = 100;

    // Bind on mouse move event that is called each time the mouse is moved.
    $(document).on('mousemove', function (event) {
        // The mouse is not moving, so start the moving process.
        if (moving === false) {
            // trigger the new event on event.target, so that it can bubble appropriately
            $(event.target).trigger('mousemovestart');
            moving = true;
        }

        // The timeout has been defined, so clear it.s
        if (timeout !== undefined) {
            window.clearTimeout(timeout);
        }

        // Defined a timeout on the move of the mouse.
        timeout = window.setTimeout(function () {
            // trigger the new event on event.target, so that it can bubble appropriately.
            $(event.target).trigger('mousemoveend');
            // Set the moving flag to false to trigger the start event the next time.
            moving = false;
        }, interval);
    });
}(jQuery));

// Bind to jQuery the events.
(function ($) {
    $.fn.mousemovestart = function (cb) {
        return this.on('mousemovestart', cb);
    };
    $.fn.mousemoveend = function (cb) {
        return this.on('mousemoveend', cb);
    }
}(jQuery));
