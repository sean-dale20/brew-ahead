export function getEarliestPickup(prepMinutes){
    const now = new Date();
    const earliest = new Date(
        now.getTime() + prepMinutes * 60 * 1000

    );

    if(earliest.getSeconds() > 0 || earliest.getMilliseconds() > 0) {
        earliest.setMinutes(earliest.getMinutes() + 1);
    }
    earliest.setSeconds(0, 0);

    return earliest
}




export function isPickupTimeValid(chosenTime, prepMinutes){
    const earliest = getEarliestPickup(prepMinutes);
    return chosenTime >= earliest
}



// Converts a time string like "14:30" (from <input type="time">) into a Date for today
export function timeStringToDate(timeString){
    const [hours, minutes] = timeString.split(":").map(Number); // "14:30" → ["14", "30"] → [14, 30]
    const date = new Date(); // start with today's date and current time
    date.setHours(hours, minutes, 0, 0); // set hours and minutes, and zero out seconds and milliseconds
    return date // today at the chosen time
}

const chosenTime = timeStringToDate("14:30"); // string → Date
const valid = isPickupTimeValid(chosenTime, 20); // compare against now + 20 min
console.log(valid); // true or false



export function dateToTimeString(date){
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return`${hours}:${minutes}`
}
