export default seconds => {
    if (seconds === 0) return "00:00"
    
    const [minutesDisplay, secondsInMinut] = (seconds/60).toString().split(".");
    const secondsDisplay =  parseFloat(`0.${secondsInMinut}`) * 60;

    return [minutesDisplay, secondsDisplay].map(item => {
        item = item.toString();
        
        if (item.length === 1) {
            item = `0${item}`;
        }

        return item;
    }).join(":");
};