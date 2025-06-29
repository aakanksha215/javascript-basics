// Immediately Invoked Function Expression (IIFE)

(function code(){
    console.log(`DB CONNECTED`)
})();

(function moreCode(){
    console.log(`DB IS CONNECTED `)
})();

((name) => {
    console.log(`DB is Connected ${name}`)
})('aakanksha')