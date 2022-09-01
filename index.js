// code your solution here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}
activity("I want to bathe my dog");

function mondayWork(work = "go to the office"){
    return `This Monday, I will ${work}.`
}
work("work from home")

function wrapAdjective(star){
    return function (adj = "special") {
        return `You are ${star}${adj}${star}!`;
    }
}
wrapAdjective("*")("a hard worker")