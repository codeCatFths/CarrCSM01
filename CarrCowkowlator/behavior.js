var answer = "";

var entryCounter = 0;
var operand1st   = 0.0;
var operand      = '+';
var operand2nd   = 0.0;
var result       = 0.0;

function clearAll()
{
    entryCounter = 0;
    answer     ="";
    operand1st = 0;
    operand    = '+';
    operand2nd = 0;
    result     = 0;
    document.getElementById("datascreen").innerHTML = "c13@r3d";
}

function getKey(key) // runs on digit and arithmetic operator keys
{
    if( entryCounter == 0 ) && ((key >= 0 && key < 10) || key == 42) )
    {
        if( key == 42 )
        {
            operand1st = Math.floor(Math.random() * 101);
        }
        
        operand1st = key;
        entryCounter++;
    }
    else if( entryCounter == 1 ) && (key == '+' || key == '-' || key == '*' || key == '/') )
    {
        operand = key;
        entryCounter++;
    }
    else if( entryCounter == 2 ) && ((key >= 0 && key < 10) || key == 42)  )
    {
        if( key == 42 )
        {
            operand1st = Math.floor(Math.random() * 101);
        }
        
        operand2nd = key;
    }
    else
    {
        clearAll();
        document.getElementById("datascreen").innerHTML = "3RR0R start over";
    }
}

function calculate() // runs on = key
{
    if( operator == '+' )
    {
        result = operand1st + operand2nd;
        answer += result;
        document.getElementById("datascreen").innerHTML = answer;
    }
    else if( operator == '-' )
    {
        result = operand1st - operand2nd;
        answer += result;
        document.getElementById("datascreen").innerHTML = answer;
    }
    else if( operator == '*' )
    {
        result = operand1st * operand2nd;
        answer += result;
        document.getElementById("datascreen").innerHTML = answer;
    }
    else if( operator == '/' && operand2nd == 0 )
    {
        clearAll();
        document.getElementById("datascreen").innerHTML = "3RR0R /0";
    }
    else
    {
        result = operand1st / operand2nd;
        answer += result;
        document.getElementById("datascreen").innerHTML = answer;
    }
}


    
