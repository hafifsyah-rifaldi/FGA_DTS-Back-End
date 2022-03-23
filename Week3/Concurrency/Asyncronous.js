// ! Contoh Callback Function (berurutan karena asyncronous hanya 4 task)

setTimeout(() => {
    console.log("Bangun tidur kuterus mandi");
    setTimeout(() => {
        console.log("Tidak lupa menggosok gigi");
        setTimeout(() => {
            console.log("Habis mandi kutolong ibu");
            setTimeout(() => {
                console.log("Membersihkan tempat tidurku");
                
            }, 4000);
        }, 1000);
    }, 2000);
}, 3000);




