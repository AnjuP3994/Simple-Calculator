//1 disply number in text box

function display(num) {
    result.value += num;
}

//2 clear text box
function clearBox(){
    result.value = "";
}

//3 evaluate expression
function evalExp(){
    //method 1:-
    // exp=result.value
    // output=eval(exp)
    // result.value=output

    //method 2:-
    result.value = eval(result.value)
}

//4 remove last item from the text box
function removeLast(){
    currentExp = result.value
    result.value = currentExp.slice(0,-1)
}