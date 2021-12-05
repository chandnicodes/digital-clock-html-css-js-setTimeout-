$(document).ready(function () {

    var digitalClock = function () {

        var thisDate = new Date();
        var unit_hours = thisDate.getHours();
        var unit_minutes = thisDate.getMinutes();
        var unit_seconds = thisDate.getSeconds();
        var unit_miliseconds = thisDate.getMilliseconds();

        setTimeout(digitalClock, 50)

        $('#unit_hour').html(unit_hours + '  :');
        $('#unit_minute').html(unit_minutes + '  :');
        $('#unit_second').html(unit_seconds + '  :');
        $('#unit_milisecond').html(unit_miliseconds);

        if (unit_hour >= 12) {
            $('#day_slot').html('AM')
        }
        else {
            $('#day_slot').html('PM')
        }
    }
    digitalClock();
})