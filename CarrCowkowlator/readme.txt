The Cowkowl@tor is a simple calculator with a few tricks up its proverbial "sleeve".

The Cowkowl@tor completes math equations using single digit numbers in the format - operand 1, operator, operand 2, equals.

------------------------------------
DIGIT KEYS 0-9 and OPERATOR KEYS
------------------------------------
Pressing a DIGIT key for first operand both displays the digit and saves it to a variable in memory.

--An internal counting variable tracks the number of the "operation" in the process.
--OPERAND 1 is step 0 in the process. The counter updates after first operand is saved to memory.

ERROR HANDLING: Attempting to press another digit key immediately thereafter triggers an error message "+ - * /" 
                indicating the need to press an operator key next.                
---------------
Pressing an OPERATOR key (following the first digit key press) displays the chosen operator and 
saves it to a variable in memory.

--An internal counting variable tracks the number of the "operation" in the process.
--OPERATOR is step 1 in the process. The counter updates after operator is saved to memory.

ERROR HANDLING: Attempting to press an operator key in process step 0 triggers an error message "pick #" 
                indicating the need to press a digit key first.

ERROR HANDLING: Attempting to press a second operator key immediately after initial press triggers an error message "pick #" 
                indicating the need to press a digit key next.
                
---------------
Pressing a DIGIT key for second operand both displays the digit and saves it to a variable in memory.

--An internal counting variable tracks the number of the "operation" in the process.
--OPERAND 2 is step 2 in the process. The counter updates after second operand is saved to memory.

ERROR HANDLING: Attempting to press another digit key immediately thereafter triggers the calculate() function
                thus displaying the answer to the calculation being processed. It acts as a back up "enter" key.
                
ERROR HANDLING: Attempting to press a second operator key following the second operand triggers the calculate() function
                thus displaying the answer to the calculation being processed. It acts as a back up "enter" key.

------------------------------------
RANDOM KEY
------------------------------------
Pressing the "random" key generates a random integer from 1-100 to act as a digit for process steps 0 and 2.

ERROR HANDLING: Attempting to press the random key after using for operand 1 triggers an error message "+ - * /" 
                indicating the need to press an operator key next.
                
ERROR HANDLING: Attempting to press the random key after using for operand 2 triggers the calculate() function
                thus displaying the answer to the calculation being processed. It acts as a back up "enter" key.

------------------------------------
EQUALS KEY
------------------------------------
Pressing the "equals" key launches the calculation indicated by the chosen operator (+.-,*,/).

If a proper processes has completed, a sound is also triggered when pressing the "equals" key. A cow moos.

ERROR HANDLING: Attempting to press the equals key as first step triggers an error message "pick #" 
                indicating the need to press a digit key.

ERROR HANDLING: Attempting to press the equals key after operand 1 triggers a message showing "= n" 
                where n is the digit previously pressed.
                
ERROR HANDLING: Attempting to press the equals key after initial press triggers an error message "pick #" 
                indicating the need to press a digit key next.

ERROR HANDLING: Attempting to press the equals key after an operator triggers an error message "do over" 
                and restarts the process.
                
------------------------------------
PIE KEY
------------------------------------
Pressing the "pie" key generates the value of PI to 5 decimal places (3.14159) for operand 1 or operand 2 or both.

A sound is also triggered when pressing the "pie" key. Homer Simpson saying "MMM, pie..."

ERROR HANDLING: Attempting to press the pie key after using for operand 1 triggers an error message "+ - * /" 
                indicating the need to press an operator key next.
                
ERROR HANDLING: Attempting to press the pie key after using for operand 2 triggers the calculate() function
                thus displaying the answer to the calculation being processed. It acts as a back up "enter" key.

------------------------------------
DIVIDE BY ZERO ERROR
------------------------------------
Attempting to divide by zero triggers an error message in the display "No / by zero" and ends the process.

A sound is also triggered when dividing by zero. It is a sound clip by HAL from 2001: A Space Odessey.
***This works on desktop and laptop but not in GitHub preview.

------------------------------------
RESULT == 42
------------------------------------
When the result is 42, a text message replaces the author name information for 5 seconds.
It reads "You have discovered the ultimate meaning of Life, the Universe, and Everything!"

------------------------------------
MUSIC ON INITIAL PAGE LOAD
------------------------------------
An embedded audio file is intended to autoplay on a loop.
There are visible controls at the bottom of the screen for user to "pause" if desired.
***This works most times but is limited by browser settings regarding the use of "autoplay".

