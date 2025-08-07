/*-------------Script for text reveal--------------------*/

/*----------- TOP -----------*/
const srt = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true    
});

srt.reveal('.blacktumbler',{delay: 100})
srt.reveal('.card',{delay: 100, interval: 200})

/*----------- LEFT -----------*/
const srb = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: false     
})

srb.reveal('.contact-container',{delay: 100})
