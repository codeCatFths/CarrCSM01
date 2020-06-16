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
    if(inputCounter == 0)
    {
        op1 = digit;
        inputCounter = inputCounter + 1;
        document.getElementById("output").innerHTML = op1;
    }
    else if(inputCounter == 1)
    {
        document.getElementById("output").innerHTML = "+ - * /";
    }
    else if(inputCounter == 2)
    {
        op2 = digit;
        inputCounter = inputCounter + 1;
        document.getElementById("output").innerHTML = op2;
    }
    else
    {
        calculate();
    }
} // end getDigit(digit)

// Responds to press of +,-,*,/ keys, accepts a string
function getOperator(op)
{
    if(inputCounter == 1)
    {
        operator = op;
        inputCounter = inputCounter + 1;
        document.getElementById("output").innerHTML = op;
    }
    else
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
    inputCounter = 0; // track entries for calculation
} // end resetVariables()

// Resonds to press of "equals" key, completes calculation, displays answer
function calculate()
{
    // performs calculation following entry of 2nd operand
    if(inputCounter == 3)
    {
        if(operator == "+") // addition
        {
            result = op1 + op2;
            document.getElementById("output").innerHTML = "= " + result;
            
            // cele-moo-shun
            moo.play();
        }
        else if(operator == "-") // subtraction
        {
            result = op1 - op2;
            document.getElementById("output").innerHTML = "= " + result;
            
            // cele-moo-shun
            moo.play();
        }
        else if(operator == "*") // multiplication
        {
            result = op1 * op2;
            
            if( op1 != 3.14159 && op2 != 3.14159 )
            {
                document.getElementById("output").innerHTML = "= " + result;
            }
            else // decreases decimal output to fit in display
            {
                document.getElementById("output").innerHTML = "= " + result.toFixed(5);
            }
            
            // cele-moo-shun
            moo.play();
        }
        else if(operator == "/" && op2 != 0) // division
        {
            result = op1 / op2;
            
            // decreases decimal output to fit in display
            document.getElementById("output").innerHTML = "= " + result.toFixed(4);
            
            // cele-moo-shun
            moo.play();
        }
        else // outputs division by zero error to display
        {
            // CREDIT: http://www.rosswalker.co.uk/movie_sounds/2001_and_2010.htm
            var audio = new Audio('http://www.rosswalker.co.uk/movie_sounds/sounds_files_20150201_1096714/2001_and_2010/cantdo.wav');
            audio.type = 'audio/wav';
            audio.play();
            document.getElementById("output").innerHTML = "No / by 0";
        }
    }
    else // handles inappropriate user entry
    {
        if( inputCounter == 0 ) // continues processs if operator clicked first
            document.getElementById("output").innerHTML = "pick #";
        
        if( inputCounter == 1 ) // ends process, show current op1 value
            document.getElementById("output").innerHTML = "=" + op1;
        
        if( inputCounter == 2 ) // restarts process
        {
            document.getElementById("output").innerHTML = "do over";
        }
    }
    
    // clear input for next round
    resetVariables();
} // end calculate()
