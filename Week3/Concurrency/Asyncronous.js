// ! Contoh Callback Function, Promise, Async Await (asyncronous hanya 4 task)
const Task = (taskDetail,duration) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (duration > 3000) {
                reject("Enakan ngopi dulu.. gak ngopi gak uuu....")
            }else{
                console.log(taskDetail);
                resolve("Selesai");
            }
        }, duration);
    });
};

async function init(){
    try{
        await Task("Bangun tidur kuterus mandi",3000);
        await Task("Tidak lupa menggosok gigi",2000);
        await Task("Habis mandi kutolong ibu",1000);
        await Task("Membersihkan tempat tidurku",4000);
    } catch (error) {
        console.log(error);
    }
}
init();
// Task("Bangun tidur kuterus mandi",3000)
//     .then(function(message){ 
//         Task("Tidak lupa menggosok gigi",2000);
//     })
//     .then(() => Task("Habis mandi kutolong ibu",1000))
//     .then(() => Task("Membersihkan tempat tidurku",4000))
//     .catch(message => console.log(message));


// Task("Bangun tidur kuterus mandi",3000,() => {
//     Task("Tidak lupa menggosok gigi", 2000, () => {
//         Task("Habis mandi kutolong ibu",1000, () => {
//             Task("Membersihkan tempat tidurku",4000,() => {});
//         })
//     })
// });


// setTimeout(() => {
//     console.log("Bangun tidur kuterus mandi");
//     setTimeout(() => {
//         console.log("Tidak lupa menggosok gigi");
//         setTimeout(() => {
//             console.log("Habis mandi kutolong ibu");
//             setTimeout(() => {
//                 console.log("Membersihkan tempat tidurku");
                
//             }, 4000);
//         }, 1000);
//     }, 2000);
// }, 3000);




