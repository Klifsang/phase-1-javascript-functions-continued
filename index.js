// code your solution here
function saturdayFun(params) {
    switch (params) {
        case "bathe my dog":
            return "This Saturday, I want to bathe my dog!";
            break;
    
        default:
            return "This Saturday, I want to roller-skate!";
            break;
    }
}

function mondayWork(params) {
    switch (params) {
        case "work from home":
            return "This Monday, I will work from home.";
            break;
    
        default:
            return "This Monday, I will go to the office.";
            break;
    }
}

function wrapAdjective(wrapper) {
    const adj = function(adjString){
        return "You are "+wrapper+adjString+wrapper+"!";
    }
    return adj;
}