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
var inputCounter = 0;   // track entries for simple calculation process

// resets variables to default values
function resetVariables()
{
    random       = 0.0;
    op1          = 0.0;
    op2          = 0.0;
    operator     = "@";
    result       = 0.0; // calculation answer
    inputCounter = 0;   // track entries for calculation

} // end resetVariables()

// responds to press of C key, resets variables, reloads page
function clearAll()
{
    resetVariables();
    location.reload();
    
} // end clearAll()

// responds to press of "random" key, generates 1-100
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

// responds to press of digit key, accepts values 0-9
function getDigit(digit)
{
    if(inputCounter == 0)
    {
        if(digit == 3.14159)
        {
            mmmpie.play();
        }
        
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
        if(digit == 3.14159)
        {
            mmmpie.play();
        }
        
        op2 = digit;
        inputCounter = inputCounter + 1;
        
        document.getElementById("output").innerHTML = op2;
    }
    else
    {
        calculate();
    }
    
}

// responds to press of operator keys, accepts +,-,*,/
function getOperator(op)
{
    if(inputCounter == 1)
    {
        operator = op;
        inputCounter = inputCounter + 1;
        
        document.getElementById("output").innerHTML = op;
    }
    else if(inputCounter == 0 || inputCounter == 2)
    {
        document.getElementById("output").innerHTML = "pick #";
    }
    else
    {
        calculate();
    }
    
}

// responds to press of "equals" key, completes calculation, displays answer
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
            document.getElementById("output").innerHTML = "= " + result.toPrecision(5);
            
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
            
            // sound for result of 42
            if( result == 42 )
            {
                document.getElementById("programmer").innerHTML = "You have discovered the ultimate answer to Life, the Universe and Everything!";
            }
            
            // cele-moo-shun
            moo.play();
        }
        else if(operator == "/" && op2 != 0) // division
        {
            result = op1 / op2;
            
            // decreases decimal output to fit in display
            document.getElementById("output").innerHTML = "= " + result.toFixed(5);
            
            // cele-moo-shun
            moo.play();
        }
        else // outputs division by zero error to display
        {
            // CREDIT: http://www.rosswalker.co.uk/movie_sounds/2001_and_2010.htm
            var audioError = new Audio('http://www.rosswalker.co.uk/movie_sounds/sounds_files_20150201_1096714/2001_and_2010/cantdo.wav');
            audioError.type = 'audio/wav';
            audioError.play();
            document.getElementById("output").innerHTML = "No / by 0";
        }
    }
    else // handles inappropriate user entry
    {
        if( inputCounter == 0 ) // continues processs if operator clicked first
        {
            document.getElementById("output").innerHTML = "pick #";
        }
        
        if( inputCounter == 1 ) // ends process, show current op1 value
        {
            document.getElementById("output").innerHTML = "= " + op1;
        
            if( op1 == 3.14159 )
            {
                mmmpie.play();
            }
        }
        
        if( inputCounter == 2 ) // restarts process
        {
            document.getElementById("output").innerHTML = "do over";
        }
    }
    
    // reset programmer text after special result 42 change up
    if( result == 42 || result == 42.00000 )
    {
        setTimeout(function resetProgrammerText(){document.getElementById("programmer").innerHTML = "By: Conni Carr";}, 5000);
    }
    
    // clear input for next round
    resetVariables();
    
} // end calculate()




