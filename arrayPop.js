const hewan = ['singa', 'ular', 'harimau'], tambah = ['buaya', 'beruang', { obj: 'rusa'}]
const arrayPushHewan = async () =>{
    await tambah.pop();
    await tambah.map(res => hewan.push(res))
    console.log(hewan);
}

arrayPushHewan();