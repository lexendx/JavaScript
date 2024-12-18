const promiseOne= new Promise(function(resolve, reject){
//do any async task
// cryptography task , network call
setTimeout(function(){
    console.log('Async task is completed');
    resolve()
}, 1000)


})
promiseOne.then(function(){
    console.log("promises consumed");
})
const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task is complete");
        resolve({ username: "baibhav", email: "tiwaribaibhav2004@gmail.com" });
    }, 1000);
});

promise.then(function (user) {
    console.log(user); // Log the resolved value
});
const promisefour = new Promise(function(resolve,reject){

    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({username:"baibhav", password:"123"})
        }else {
            reject('ERROR: Something went Wrong' )
        }

    },1000)
})
promisefour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>
{
console.log(username);

})
.catch(function(error){
    console.log(error);
    

})