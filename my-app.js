const btn = document.getElementById('btn')
const drop = document.getElementById('modal')



btn.addEventListener('click', (e)=> {

    if(drop.style.display === "block") {
        drop.style.display = "none";
    } else {
        drop.style.display = "block"
    }

})

