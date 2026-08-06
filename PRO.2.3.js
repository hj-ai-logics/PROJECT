   const display = document.getElementById('display');

        // Add a character or mathematical operator to the display window
        function appendValue(val) {
            // Prevent user from beginning their expression with multiple operators
            if (display.value === "" && ['+', '*', '/', '%'].includes(val)) {
                return;
            }
            display.value += val;
        }

        // Wipe the entire display back to an empty state
        function clearDisplay() {
            display.value = "";
        }

        // Drop the last character from the input screen
        function deleteLast() {
            display.value = display.value.toString().slice(0, -1);
        }

        // Evaluate the string expression inside the screen and return the answer
        function calculateResult() {
            try {
                // Safeguard against hitting '=' on an empty screen
                if (display.value.trim() === "") return;

                // Evaluate the expression string safely 
                let result = eval(display.value);

                // Handle scenarios that generate mathematically undefined states (e.g., 0/0)
                if (isNaN(result) || !isFinite(result)) {
                    display.value = "Error";
                } else {
                    display.value = result;
                }
            } catch (error) {
                // Catches compilation bugs like trailing operators (e.g., "5++")
                display.value = "Error";
            }
        }