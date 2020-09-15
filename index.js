var countDown = new Date("Nov 15, 2020 00:00:00").getTime();

var x = setInterval(function () {

    var now = new Date().getTime();

    var distance = countDown - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 60)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);


    var intFrameWidth = window.innerWidth;

    // 576 768
    if (intFrameWidth > 992) {
        countDownView("Days", "Hours", "Minutes", "Seconds");
    } else if (intFrameWidth > 768) {
        countDownView("Days", "Hours", "Min", "Sec");
    } else {
        countDownView("d", "h", "m", "s");
    }

    function countDownView(labelDays, labelHours, labelMinutes, labelSeconds) {
        return document.getElementById('countdown').innerHTML = `
        <div class="row mb-4">
            <div class="card">
                <div class="card-body">
                    <h5><span>${days}</span> ${labelDays}</h5>
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <h5><span>${hours}</span> ${labelHours}</h5>
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <h5><span>${minutes}</span> ${labelMinutes}</h5>
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <h5><span>${seconds}</span> ${labelSeconds}</h5>
                </div>
            </div>
        </div>
        `;
    }

    if (distance < 0) {
        clearInterval(x);

        document.getElementById("countdown").innerHTML = "EXPIRED";
    }

}, 1000);