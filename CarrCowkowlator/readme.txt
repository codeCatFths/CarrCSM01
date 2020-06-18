The Cowkowl@tor is a simple calculator with a few tricks up its proverbial "sleeve".

The Cowkowl@tor completes math equations using single digit numbers in the format - operand 1, operator, operand 2, equals.

Pressing a DIGIT key for first operand both displays the digit and saves it to a variable in memory.
--An internal counting variable tracks the number of the "operation" in the process.
--OPERAND 1 is step 0 in the process. The counter updates after first operand is saved to memory.

ERROR HANDLING: Attempting to press another digit key immediately thereafter triggers an error message "+ - * /" 
                indicating the need to press an operator key.
                
Pressing an OPERATOR key (following the first digit key press) displays the chosen operator and 
saves it to a variable in memory.
--An internal counting variable tracks the number of the "operation" in the process.
--OPERATOR is step 1 in the process. The counter updates after operator is saved to memory.

ERROR HANDLING: Attempting to press an operator key in process step 0 triggers an error message "pick #" 
                indicating the need to press a digit key.

ERROR HANDLING: Attempting to press a second operator key immediately thereafter triggers an error message "pick #" 
                indicating the need to press a digit key.
                
Pressing a DIGIT key for second operand both displays the digit and saves it to a variable in memory.
--An internal counting variable tracks the number of the "operation" in the process.
--OPERAND 2 is step 2 in the process. The counter updates after second operand is saved to memory.

ERROR HANDLING: Attempting to press another digit key immediately thereafter triggers the calculate function
                thus displaying the answer to the calculation being processed. It acts as a back up "enter" key.
                
<!!! SET UP CODE TO HANDLE PRESSING AN OPERATOR KEY AFTER THE SECOND OPERAND - SHOULD LAUNCH CALCULATE()>

