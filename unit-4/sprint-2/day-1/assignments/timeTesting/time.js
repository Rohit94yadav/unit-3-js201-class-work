const timeCheck = (time)=>{
    let timeString;
    if(time >= 1000 && time < 60000){
        timeString = `${Math.floor(time/1000)} seconds`;
    }
    else if( time >= 60000 && time < 61000){
        timeString = '1 minute';
    }
    else if ( time > 60000){
        let totalSecs = time/1000;
        let secs = totalSecs % 60;
        let totalMins = Math.floor(totalSecs / 60);
        let mins = totalMins % 60;
        let hrs = Math.floor(totalMins/60);

        if(totalMins < 60 && secs === 0){
            timeString = `${totalMins} minutes`;
        }
        else if(totalMins < 60){
            timeString = `${totalMins} ${totalMins === 1? "minute" : "minutes"} ${secs} ${secs === 1? "second" : "seconds"}`;
        }
        else if (mins === 0 && secs === 0){
            timeString = `${hrs} ${hrs===1?"hour":"hours"}`
        }
        else if (totalMins >= 60 && secs === 0){
            timeString = `${hrs} ${hrs<2? "hour":"hours"} ${mins} ${mins===1? "minute":"minutes"}`;
        }
        else if (totalMins >= 60 && mins === 0){
            timeString = `${hrs} ${hrs<2? "hour":"hours"} ${secs} ${secs===1?"second":"seconds"}`
        }
        else if (totalMins >= 60){
            timeString = `${hrs} ${hrs<2? "hour":"hours"} ${mins} ${mins===1? "minute":"minutes"} ${secs} ${secs===1?"second":"seconds"}`;
        }
    }
    return timeString;
}

module.exports = timeCheck;