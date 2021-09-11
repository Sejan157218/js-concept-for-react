const money = 800;
const movie = money>500?'cinecomplex' : 'wacthin in TV';
console.log(movie);

function hotel(){
        console.log('Go to big hotel');
}
function home(){
        console.log('Go to big Home');
}

/* const haveMoney = true;
 haveMoney ? hotel() : home(); */
 const haveMoney = true;
haveMoney && hotel(); //if true
haveMoney || home(); //if false