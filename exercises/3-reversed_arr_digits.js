// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

function digitize(n) {
    let result = '';
    let newArr = 0;
    let arr = Array.from(String(n), Number);
       for(let i = arr.length; i > 0; i--){
        result += arr[i - 1];
        newArr = Array.from(String(result), Number);
       }

        return newArr;
    }



    function digitize(n) {
        return String(n).split('').map(Number).reverse()
      }