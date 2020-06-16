
// declare variables
var random;
var op1 = 0.0;
var op2 = 0.0;
var operator = "@";
var result = 0.0; // calculation answer

var answer = ""; // output to display

var inputCounter = 0; // track entries for calculation

function getRandom(){
    
    // generate and send a random number to cowkowlater display
    random = Math.floor(Math.random() * 100) + 1;
    
    // check entry counter value to validate
    if( inputCounter == 0 )
    {
        op1 = random;
        document.getElementById("output").innerHTML = random;
        inputCounter++;
    }
    
    if( inputCounter == 1 )
    {
        document.getElementById("output").innerHTML = "+,-,*, or /";
    }
    
    if( inputCounter == 2 )
    {
        op2 = random;
        document.getElementById("output").innerHTML = random;
        inputCounter++;
    }
} // end getRandom()

function getDigit(digit){
    
    // check entry counter value to validate
    if( inputCounter == 0 )
    {
        op1 = digit;
    }
    
    if( inputCounter == 1 )
    {
        document.getElementById("output").innerHTML = "+,-,*, or /";
    }
    
    if( inputCounter == 2 )
    {
        op2 = digit;
    }
    
    // display operator keyed in to cowkowlater display
    document.getElementById("output").innerHTML = digit;
}

function getOperator(op){
    operator = op;
    
    // display operator keyed in to cowkowlater display
    document.getElementById("output").innerHTML = op;
}

function clearAll(){
    
    // reset variables
    op1 = 0.0;
    op2 = 0.0;
    operator = "@";
    result = 0.0;
    answer = "":
    inputCounter = 0;
    
    // display operator keyed in to cowkowlater display
    document.getElementById("output").innerHTML = "do over";
}

function calculate(){
    if( inputCounter == 2 )
    {
        if( operator == "+" )
        {
            result = (op1 + op2);
            answer += result;
        }
        
        if( operator == "-" )
        {
            result = (op1 - op2);
            answer += result;
        }
        
        if( operator == "*" )
        {
            result = (op1 * op2);
            answer += result;
        }
        
        if( operator == "/" && op2 != 0 )
        {
            result = (op1 / op2);
            answer += result;
        }
        else
        {
            clearAll();
            
            document.getElementById("output").innerHTML = "do over";
        }
        
        
    }
    else
    {
        clearAll();
        
        document.getElementById("output").innerHTML = "do over";
    }
    
    // display answer in display
    document.getElementById("output").innerHTML = answer;
}
