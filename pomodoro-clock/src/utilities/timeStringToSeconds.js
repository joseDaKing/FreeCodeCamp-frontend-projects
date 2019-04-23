export default timeString => {
    let [minutes, seconds] = timeString.split(":").map(item => {
        let isFirstCharZero = item[0] === "0";
        
        if (isFirstCharZero) {
            return item[1];
        }

        else {
            return item
        }
    });

    return minutesToSeconds(minutes) + parseInt(seconds);
}

function minutesToSeconds(minutes) {
    minutes = parseInt(minutes);
    return minutes * 60;
}