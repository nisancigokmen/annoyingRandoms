const textAlphabet = document.querySelector(".textAlphabet");
const clickRandomAlphabet = document.querySelector(".clickRandomAlphabet");

clickRandomAlphabet.addEventListener("click", function(e) {

    /*
    (--------------------------------------)
    random alphabet 
    example firs number  = 1 
    [rand] === [1] 
    alf[0] === A 
    alf[rand];
    random alphabet :D
    (--------------------------------------) 
     */
    const rand = Math.floor(Math.random() * 29);
    const rand2 = Math.floor(Math.random() * 29);
    const rand3 = Math.floor(Math.random() * 29);
    const rand4 = Math.floor(Math.random() * 29);
    const rand5 = Math.floor(Math.random() * 29);
    const rand6 = Math.floor(Math.random() * 29);
    const rand7 = Math.floor(Math.random() * 29);
    const rand8 = Math.floor(Math.random() * 29);
    const rand9 = Math.floor(Math.random() * 29);


    const alf = [
        "A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ", "J", "K", "L", "M", "N", "O", "Ö", "P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z"
    ];

    /*[] -> js arrays method ...*/

    const randomAlph = alf[rand] + alf[rand2] + alf[rand3] + alf[rand4] + alf[rand5] + alf[rand6] + alf[rand7] + alf[rand8] + alf[rand9];
    textAlphabet.textContent = randomAlph;

});

/* (--------------------------------------) */