/**
 This program emulates a simple single-digit only calculator for
 addition, subtraction, multiplication and division problems.
 
 NOTE: Key other than "equals" after 2nd operand forces calculation to complete
 
 @author Conni Carr
 @version 2020-06-16
 
 */

// declare variables, set default values
var random       = 0.0;
var op1          = 0.0;
var op2          = 0.0;
var operator     = "@";
var result       = 0.0; // send to display
var inputCounter = 0; // track entries for simple calculation process

// Responds to press of "random" key, generates 1-100
function getRandom()
{
    if(inputCounter == 0)
    {
        random = Math.floor(Math.random() * 100) + 1;
        op1 = random;
        inputCounter = inputCounter + 1;
        document.getElementById("output").innerHTML = op1;
    }
    else if(inputCounter == 1)
    {
        document.getElementById("output").innerHTML = "+ - * /";
    }
    else if(inputCounter == 2)
    {
        random = Math.floor(Math.random() * 100) + 1;
        op2 = random;
        inputCounter = inputCounter + 1;
        document.getElementById("output").innerHTML = op2;
    }
    else
    {
        calculate();
    }

} // end getRandom()

// Responds to press of number keys, accepts numeric value
function getDigit(digit)
{
    if(inputCounter == 0) // input of first operand
    {
        if(digit == 3.14159)
        {
            mmmpie.play();
        }
        
        op1 = digit;
        inputCounter = inputCounter + 1;
        document.getElementById("output").innerHTML = op1;
    }
    else if(inputCounter == 1) // error message - requires symbol input
    {
        document.getElementById("output").innerHTML = "+ - * /";
    }
    else if(inputCounter == 2) // input of second operand
    {
        if(digit == 3.14159)
        {
            mmmpie.play();
        }
        
        op2 = digit;
        inputCounter = inputCounter + 1;
        document.getElementById("output").innerHTML = op2;
    }
    else // handles any key press other than "equals"
    {
        calculate();
    }
} // end getDigit(digit)

// Responds to press of +,-,*,/ keys, accepts a string
function getOperator(op)
{
    if(inputCounter == 1) // input of operator
    {
        operator = op;
        inputCounter = inputCounter + 1;
        document.getElementById("output").innerHTML = op;
    }
    else // error message - requires digit input
    {
        if(inputCounter == 0 || inputCounter == 2)
            document.getElementById("output").innerHTML = "pick #";
    }
} // end getOperator(op)

// Responds to press of C key, resets variables, reloads page
function clearAll()
{
    resetVariables();
    location.reload();
} // end clearAll()

// Resets variables to default values
function resetVariables()
{
    random       = 0.0;
    op1          = 0.0;
    op2          = 0.0;
    operator     = "@";
    result       = 0.0; // calculation answer
    inputCounter = 0;   // track entries for calculation
} // end resetVariables()

// Responds to press of "equals" key, completes calculation, displays answer
function calculate()
{
    
    if(inputCounter == 3) // performs calculation following entry of 2nd operand
    {
        if(operator == "+") // addition
        {
            result = op1 + op2;
        }
        else if(operator == "-") // subtraction
        {
            result = op1 - op2;
        }
        else if(operator == "*") // multiplication
        {
            result = op1 * op2;
        }
        else if(operator == "/" && op2 != 0) // division
        {
            result = op1 / op2;
        }
        else // outputs division by zero error to display
        {
            // CREDIT: http://www.rosswalker.co.uk/movie_sounds/2001_and_2010.htm
            var errorAudio = new Audio('http://www.rosswalker.co.uk/movie_sounds/sounds_files_20150201_1096714/2001_and_2010/cantdo.wav');
            errorAudio.type = 'audio/wav';
            errorAudio.play();
            document.getElementById("output").innerHTML = "No / by 0";
            
            break;
        }
    }
    else // handles inappropriate user entry
    {
        if( inputCounter == 0 ) // continues processs if operator clicked first
            document.getElementById("output").innerHTML = "pick #";
        
        if( inputCounter == 1 ) // ends process, show current op1 value
        {
            if( op1 == 3.14159 )
            {
                mmmpie.play();
            }
            document.getElementById("output").innerHTML = "= " + op1;
        }
        
        if( inputCounter == 2 ) // restarts process
        {
            document.getElementById("output").innerHTML = "do over";
        }
        
        break;
    }
    
    if( op1 != 3.14159 && op2 != 3.14159 )
    {
        document.getElementById("output").innerHTML = "= " + result;
    }
    else // decreases decimal output to fit in display
    {
        document.getElementById("output").innerHTML = "= " + result.toFixed(5); // HELP: does not work on x - PI ???
    }
    
    // cele-moo-shun
    moo.play();
    
    // clear input for next round
    resetVariables();
} // end calculate()
