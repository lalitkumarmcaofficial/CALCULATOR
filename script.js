
    // FUNCTION FOR CALCULATOR
    function calculator() {

    // TAKING THE VALUE FROM FIRST INPUT
      let num1 =  parseFloat( document.getElementById("num1").value);
    // TAKING THE VALUE FROM SECOND INPUT
      let num2 =  parseFloat( document.getElementById("num2").value);

    // TAKING THE VALUE FROM THIRD INPUT IN CASE YOU ARE USING INPUT TYPE TEXT
    //   let total = document.getElementById("total").value;

      // TAKING THE VALUE FROM THIRD INPUT TYPE RADIO
      let total = document.querySelector('input[name="total"]:checked').value;
      // PRINT THE OUTPUT
      let output = document.getElementById("output");

      // SWITCH CASE FOR OPERATIONS
      switch (total) {
        case ("sum"):
            total = num1 + num2;
            output.innerHTML = total;
            break;

            case ("sub"):
            output.innerHTML = num1 - num2;
            break;

            case ("mul"):
            output.innerHTML = num1 * num2;
            break;

            case ("div"):
            output.innerHTML = num1 / num2;
            break;

            case ("rem"):
            output.innerHTML = num1 % num2;
            break;
      
        default:
            output.innerHTML = "Invalid Data";
            break;
      }
    }
