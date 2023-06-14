// Complete the solution so that it reverses all of the words within the string passed in.

// Words are separated by exactly one space and there are no leading or trailing spaces.

// Example(Input --> Output):

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

function reverseWords(str){
    let result = str.split(' ');
    let newWords = '';
    for(let i = result.length; i > 0; i--){
        newWords += ' ' + result[i - 1];
    }
    return newWords.trim();
  }



  
function reverseWords(str){
    return str.split(' ').reverse().join(' ');
  }