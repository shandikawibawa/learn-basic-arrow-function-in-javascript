// Fungsi panah, juga dikenal sebagai fungsi panah gemuk, adalah cara yang ringkas dan singkat untuk mendefinisikan fungsi dalam JavaScript. Mereka diperkenalkan di ECMAScript 6 (ES6) dan memberikan sintaksis yang lebih ringkas dibandingkan dengan ekspresi fungsi tradisional

greet = (username) => {
    return `Hello ${username}`
}

console.log(greet("Shandika"));

//=====================================//

const double = (n) => n * 2

console.log(double(10));

//=====================================//

// REFACTOR THIS CODE TO ES6 ARROW FUNCTION

setTimeout(() => {
    console.log("Hello");
    setTimeout(() => {
      console.log("How are you ?");
      setTimeout(() => {
        console.log("My name is Shandika");
        setTimeout(() => {
          console.log("and you");
          setTimeout(() => {
            console.log("nice to meet you");
          }, 2000);
        }, 2000);
      }, 2000);
    }, 2000);
}, 2000);

//=====================================//