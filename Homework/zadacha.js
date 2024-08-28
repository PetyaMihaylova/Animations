// [8:36 PM] Григор Янков
// you will day of the week as a number and you need to print it as a name of the day and if is out of the range tell the user.
 
function daysOfTheWeek(num) {
  
    if (num === 1) {
        return 'Monday' }
    else if (num ===2) {
        return 'Tuesday'
    }
    else if (num ===3) {
        return 'Wednesday'
    }
    else if (num === 4) {
        return 'Thursday'
    }
    else if (num ===5) {
        return 'Friday'
    }
    else if (num ===6) {
        return 'Saturday'
    }
    else if (num ===7) {
        return 'Sunday'
    }
    else {return 'Out of range'}
}
console.log(daysOfTheWeek(10)) // no zashto ima greshka? blagodarya