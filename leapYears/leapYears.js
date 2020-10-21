const leapYears = function(questionedYear) {
    if (questionedYear % 4 == 0 && questionedYear % 400 == 0) {
        return true
    }
    else if (questionedYear % 4 == 0 && questionedYear % 100 != 0) {
        return true
    }
    else {
        return false
    }
}

module.exports = leapYears
