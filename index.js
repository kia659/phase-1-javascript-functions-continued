function saturdayFun(fun = "roller-skate"){
return `This Saturday, I want to ${fun}!`;

}// code your solution here
saturdayFun()


function mondayWork(work = "go to the office"){
return `This Monday, I will ${work}.`

}
mondayWork()

function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    };
}