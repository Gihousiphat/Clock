let count = 0;

function updateClock() {
    if(count > 0) {
        return;
    } else {
        let today = new Date();
        let hours = today.getHours();
        let minutes = today.getMinutes();
        let seconds = today.getSeconds();
        if(hours > 12) {
            hours -= 12;
            if(hours < 10) {
                hours = '0' + hours;
            }
        } else if(hours < 10){
            hours = '0' + today.getHours();
        };
        if(minutes < 10) {
            minutes = '0' + today.getMinutes();
        };
        if(seconds < 10) {
            seconds = '0' + today.getSeconds();
        };
        document.getElementById('time').innerHTML = hours + ':' + minutes + ':' + seconds;
        document.getElementById('date').innerHTML = new Date();
        setTimeout(updateClock, 10);
    }
};

function updateClock2() {
    if(count < 1) {
        return;
    } else {
        let today = new Date();
        let hours = today.getHours();
        let minutes = today.getMinutes();
        let seconds = today.getSeconds();
        if(hours < 10) {
                hours = '0' + hours;
        }
        if(minutes < 10) {
            minutes = '0' + today.getMinutes();
        };
        if(seconds < 10) {
            seconds = '0' + today.getSeconds();
        };
        document.getElementById('time').innerHTML = hours + ':' + minutes + ':' + seconds;
        document.getElementById('date').innerHTML = new Date();
        setTimeout(updateClock2, 10);
    }
};

function adjustValue() {
    if(document.getElementById('military').value == 'Military Time') {
        document.getElementById('military').value = 'Standard Time';
        count++;
        updateClock2();
    } else if(document.getElementById('military').value == 'Standard Time') {
        document.getElementById('military').value = 'Military Time';
        count--;
        updateClock();
    }
}

updateClock();

