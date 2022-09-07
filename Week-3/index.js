const fizzBuzz = () => {
    for (let i = 1; i <= 100; i++) {
        console.log((i % 3 ? '' : 'fizz') + (i % 5 ? '' : 'buzz') || i)
    }
}

fizzBuzz()

const printPrimeNumbers = (num) => {
    let primes = []
    for (let i = 3; i <= num; i += 2) {
        if (primes.every((prime) => {return i % prime !== 0})){
            primes.push(i)
        }
    }
    primes.unshift(2)
    console.log(primes)
}

printPrimeNumbers(100)

