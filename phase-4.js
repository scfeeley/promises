//practice with async
function num1() {
    return 1;
}
//async keyword makes function return promise
//return value is resolved value of that promise 
async function num2() {
    return 2;
}

 console.log('num1', num1());
 console.log('num2', num2());

 num2().then(result => console.log(result));

///////////////////////////////////////////////////////////
//Practice with await 
//await stops all flow until the promise returns 
async function waiting() {
    const value = await num2();
    console.log("waiting", value)
}

//waiting();

///////////////////////////////////////////////////////////
//Practice creating promises
async function waitForMyPromise() {
    const promise = new Promise((resolve)=> {
        setTimeout( () => {
            resolve("done");
        }, 1000);
    });

    const result = await promise;
    console.log("my promise is", result);
}
waitForMyPromise();

///////////////////////////////////////////////////////////
//Practice using then 
new Promise((resolve) => {
    setTimeout(() => {
        resolve("done");
    }, 1500)
}).then(r => console.log('then my other promise is', r));

///////////////////////////////////////////////////////////
//Practice setTimeout
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms ));
}

function waiter(ms){
    wait(ms).then(() => console.log('I waited'));
}

waiter(2000);
///////////////////////////////////////////////////////////
//Practice rejecting and catching
const tryRandomPromise = (random) => new Promise((resolve, reject) => {
    if(random > 0.5){
        resolve("success!");
    }else{
        reject("random error")
    }   
});

for(let i = 0; i < 10; i++) {
    let num = Math.random() 
    wait(2000 + num * 1000)
        .then(() => tryRandomPromise(num))
        .then((message) => console.log(num + ": " + message))
        .catch((message) => console.log(num + ": " + message));
}
///////////////////////////////////////////////////////////
//Practice try, await, catch
const tryTryAgain = async (i) => {
    const rand = Math.random(); 
    //wait random amount of time
    await wait(3000 + rand * 1000);
    
    try{
        const result= await tryRandomPromise(rand);
        console.log('random again #', i, result)
    } catch (err){
        console.log('random again #', i, err)
    }
}

for (let i = 0; i < 10; i++){
    tryTryAgain(i);
}

console.log('END OF PROGRAM');