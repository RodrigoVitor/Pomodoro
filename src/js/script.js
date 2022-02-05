let minutes = document.querySelector('.minute')
let second = document.querySelector('.second')
let m = "00"
let s = "00"
let tmp;

function start(value) {
    if(value === "pomodoro") {
        tmp = setInterval(() => {
            //start second
            s++
            if( s < 10) {
                s = '0' + s
            }
            //start minute
            if(s > 60) {
                s = '00'
                m--
                if(m < 10) {
                    m = '0' + m
                }
            }
            //pause timer
            if(m == 00) {
                clearInterval(tmp)
            }

            second.innerHTML = s
            minutes.innerHTML = m
        }, 1000)
    }

    if(value === "short") {
        tmp = setInterval(() => {
            //start second
            s++
            if( s < 10) {
                s = '0' + s
            }
            //start minute
            if(s > 60) {
                s = '00'
                m--
                if(m < 10) {
                    m = '0' + m
                }
            }
            //pause timer
            if(m == 00) {
                clearInterval(tmp)
            }

            second.innerHTML = s
            minutes.innerHTML = m
        }, 1000)
    } 

    if(value === "long") {
        tmp = setInterval(() => {
            //start second
            s++
            if( s < 10) {
                s = '0' + s
            }
            //start minute
            if(s > 60) {
                s = '00'
                m--
                if(m < 10) {
                    m = '0' + m
                }
            }
            //pause timer
            if(m == 00) {
                clearInterval(tmp)
            }

            second.innerHTML = s
            minutes.innerHTML = m
        }, 1000)}
}

function pause() {
    clearInterval(tmp)
}

function reset(value) {
    if (value === "pomodoro") {
        clearInterval(tmp)
        m = "25"
        s = "00"
        minutes.innerHTML = m
        second.innerHTML = s
    }

    if (value === "short") {
        clearInterval(tmp)
        m = "05"
        s = "00"
        minutes.innerHTML = m
        second.innerHTML = s
    }

    if (value === "long") {
        clearInterval(tmp)
        m = "10"
        s = "00"
        minutes.innerHTML = m
        second.innerHTML = s
    }
}


//pre load
function onLoad(value) {
    if (value === "pomodoro") {
        m = "25"
        minutes.innerHTML = m
        second.innerHTML = s
    }
    if (value === "short") {
        m = "05"
        minutes.innerHTML = m
        second.innerHTML = s
    }

    if (value === "long") {
        m = "10"
        minutes.innerHTML = m
        second.innerHTML = s
    }
}

