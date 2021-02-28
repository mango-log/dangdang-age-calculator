
exports.getHumanAge = function(birthday) {
    let day1 = new Date();
    let day2 = new Date(birthday);
    let differenceInTime = day1.getTime() - day2.getTime();
    let differenceInDays = differenceInTime / (1000*3600*24); //태어난 후 몇 일 지났는지
    let dogAge = differenceInDays / 365;
    return (dogAge - 2)*4 + 21;

}
// let day1 = new Date();
// let day2 = new Date(birthday);
// let differenceInTime = day1.getTime() - day2.getTime();

