// Javascript program to find the factorial of any number where n is the number and nfactorial is the calculated factorial
function getFactorial(n){
    let nfactorial =1;

  
    for (i = 1; i<=n; i++) {
        nfactorial= nfactorial*i;
        
    }
    console.log('factorial of ' + n + ' is ' + nfactorial);

}
getFactorial(7)