function solution(N, K){
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    let palindrome = '';
    let rando_arr = [];

    // populate rando_arr with unique selected random letters
    while (rando_arr.length < K){
        let rando = Math.floor(Math.random() * ((letters.length - 1) - 0 + 1)) + 0;
        if (rando_arr.includes(letters[rando]) === false){
            rando_arr.push(letters[rando]);
        }
    }
    // create palindrome based on desired length, if even create half and add the reverse, else create from iterating through selected letters
    if (N % 2 === 0){
        while (palindrome.length < N/2){
            for (let i = 0;i < rando_arr.length;i++){
                if (palindrome.length < N/2){
                    palindrome += rando_arr[i]
                }
            }
        }
        palindrome += palindrome.split("").reverse().join("");
    } else {
        while (palindrome.length < N){
            for (let i = 0;i < rando_arr.length;i++){
                if (palindrome.length < N){
                    palindrome += rando_arr[i]
                }
            }
        }

    }
    return palindrome;
}
console.log(solution(5, 2));
console.log(solution(8, 3));
console.log(solution(3, 2));