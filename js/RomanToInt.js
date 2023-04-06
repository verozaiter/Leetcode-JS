//https://leetcode.com/problems/roman-to-integer/description/

function romanToInt1(s) {
    let finalNum = 0;
    for (let i=0; i<s.length ; i++){
        switch (s.charAt(i)){
            case "M":
                finalNum += 1000;
                break;
            case "D":
                finalNum += 500;
                break;
            case "C":
                switch (s.charAt(i+1)){
                    case "D":
                    case "M":
                    finalNum -= 100;
                    break;
                    default:
                    finalNum += 100;
                    break;
                }
                break;
            case "L":
                finalNum += 50;
                break;
            case "X":
                switch (s.charAt(i+1)){
                    case "L":
                    case "C":
                    finalNum -= 10;
                    break;
                    default:
                    finalNum += 10;
                    break;
                }
                break;
            case "V":
                finalNum += 5;
                break;
            case "I":
                switch (s.charAt(i+1)){
                    case "V":
                    case "X":
                    finalNum -= 1;
                    break;
                    default:
                    finalNum += 1;
                    break;
                }
                break;
        }
    }

    return finalNum;
};


//better option

symbols = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
};

var romanToInt = function(s) {
    value = 0;
    for(let i = 0; i < s.length; i+=1){
        symbols[s[i]] < symbols[s[i+1]] ? value -= symbols[s[i]]: value += symbols[s[i]]
    }
    return value
};