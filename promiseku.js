const a = 'a';
const promiseku = new Promise((resolve, rekect) =>{
    if(a === 'a') {
        resolve("Berhasil");
    }else{
        PromiseRejectionEvent("Gagal");
    }
});

promiseku.then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
});