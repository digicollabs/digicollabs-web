var countDown = new Date("Nov 15, 2020 00:00:00").getTime();

var x = setInterval(function () {

    /*
    Used to get the current time
    */
    var now = new Date().getTime();

    /*
    Used to calculate the countdown timer from the current time
    */
    var distance = countDown - now;

    /*
    Declare a variable for days, hours, minutes, and seconds
    Each of them enforced to show the last two digit using ("0"+number).slice(-2);
    For example, it will show 60 days, 19 hours, 23 minutes, 55 seconds
    */
    var days = ("0" + Math.floor(distance / (1000 * 60 * 60 * 24))).slice(-2);
    var hours = ("0" + Math.floor((distance % (1000 * 60 * 60 * 60)) / (1000 * 60 * 60))).slice(-2);
    var minutes = ("0" + Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).slice(-2);
    var seconds = ("0" + Math.floor((distance % (1000 * 60)) / 1000)).slice(-2);

    /*
    Getting an element by Id, and we create a view
    */
    document.getElementById('countdown').innerHTML = `
    <div class="row justify-content-center">
        <div class="row justify-content-center ml-3 mr-3 marginbottom margintop">
            <div class="row">
                <div class="col mr-3 ml-3">
                    <div class="row">
                        <div class="col nopadding mr-1 d-flex justify-content-end">
                            <div class="card-digicollabs">
                            0
                            </div>
                        </div>
                        <div class="col nopadding d-flex justify-content-start">
                            <div class="card-digicollabs">
                            0
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center" id="labelCountdown">Days</div>
                </div>
                <div class="col ml-3 mr-3">
                    <div class="row">
                        <div class="col nopadding mr-1 d-flex justify-content-end">
                            <div class="card-digicollabs">
                            0
                            </div>
                        </div>
                        <div class="col nopadding d-flex justify-content-start">
                            <div class="card-digicollabs">
                            0
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center" id="labelCountdown">Hours</div>
                </div>
            </div>
        </div>
        <div class="row justify-content-center ml-3 mr-3 margintop marginbottom">
            <div class="row">
                <div class="col ml-3 mr-3">
                    <div class="row">
                        <div class="col nopadding mr-1 d-flex justify-content-end">
                            <div class="card-digicollabs">
                            0
                            </div>
                        </div>
                        <div class="col nopadding d-flex justify-content-start">
                            <div class="card-digicollabs">
                            0
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center" id="labelCountdown">Minutes</div>
                </div>
                <div class="col ml-3 mr-3">
                    <div class="row">
                        <div class="col nopadding d-flex justify-content-end">
                            <div class="card-digicollabs">
                            0
                            </div>
                        </div>
                        <div class="col nopadding ml-1 d-flex justify-content-start">
                            <div class="card-digicollabs">
                            0
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center" id="labelCountdown">Seconds</div>
                </div>
            </div>
        </div>
    </div>
    `;

    // if (distance < 0) {
    //     clearInterval(x);
    //     document.getElementById("countdown").innerHTML = `<p class="text-center" id="labelCountdown">EXPIRED</p>`;
    // }

}, 1000);