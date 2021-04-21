//    setTimeout --> Allows us to run the function once after the inteval of time.
        //    clearInterval --> Allows us to run the function repeatedly after the inteval of time.


        function displaytime() {
            time = new Date();
            document.getElementById('time').innerHTML = time;
        }
        stopwatch = setInterval(displaytime, 1000);
        // clearInterval(stopwatch)