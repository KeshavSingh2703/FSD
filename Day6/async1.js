// // // sayhello =()=>{
// // //     console.log("helo world")
// // // };
// // // console.log("start")
// // // setTimeout(sayhello, 4000);
// // // console.log("End")

// // console.log("start");
// // setTimeout(()=>{
// //     console.log("first task completed");
// //     setTimeout(() =>{
// //         console.log("second task completed");
// //         setTimeout(() =>{
// //             console.log("third task completed");
// //         },3000)
// //     },2000)
// // },1000)
// // console.log("End")

// //promises

// const myPromise = new Promise((resolve, reject) => {
//     let success = false;
//    if (success){
//     resolve("data sent successfully");
//    }
//    else{
//     reject("Failed to send data");
//    }
// });

// myPromise.then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });

function task(message,delay){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(message);
            resolve();
        },delay);
    });
}
task("First task completed",1000)
.then(()=>task("Second task is completed", 2000))
.then(()=>task("Third task is completed", 3000))