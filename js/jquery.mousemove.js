// Event to detect the start and the end of the mouse move.
(function ($) {
    var moving = false;
    var timeout;
    var interval = 100;

    // Bind on mouse move event that is called each time the mouse is moved.
    $(document).on('mousemove', function (event) {
        // The mouse was not moving, so trigger the start mouse move event.
        if (moving === false) {
            // trigger the new event on event.target, so that it can bubble
            // appropriately.
            $(event.target).trigger('mousemovestart');
            moving = true;
        }

        // The timeout has been defined previously,
        // so clear it because the mouse is still moving.
        if (timeout !== undefined) {
            window.clearTimeout(timeout);
        }

        // Defined a timeout on the move of the mouse.
        timeout = window.setTimeout(function () {
            // trigger the new event on event.target, so that it can bubble
            // appropriately.
            $(event.target).trigger('mousemoveend');
            // Set the moving flag to false to trigger the start event the next
            // time the mouse will start to move.
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
