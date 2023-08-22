let planet_name_animation = new SplitType('.hero h1');
let image_text = new SplitType('.hero p');

let i=0;
this.document.querySelectorAll('.hero h1 .char').forEach(char => {
    setTimeout(() => {
        char.style.transform = "translateY(0)";
    }, (i*200)+500);
    i++;
});

i=0;
this.document.querySelectorAll('.hero h1 .char').forEach(char => {
    setTimeout(() => {
        char.style.transform = "translateY(-200px)";
    }, (i*200)+3000);
    i++;
});

i=0;
this.document.querySelectorAll('.hero p .line').forEach(line => {
    setTimeout(() => {
        line.querySelectorAll('.char').forEach(char => {
            char.style.transform = "translateY(0px)";
        })
    }, (i*100)+2000);
    i++;
})

setTimeout(() => {
    document.querySelector('.vid-container').style.opacity = 1;
}, 2500);


let video = document.querySelector('.vid-container video');
video.play();

let yLength = window.screen.height;
let image = document.querySelector('.image-with-caption')

window.addEventListener('scroll', function() {
    transformY = (window.scrollY - yLength)/30;
    transformYH = ((window.scrollY - yLength)/2);
    transformYP = (window.scrollY - yLength)/3;
    this.document.querySelector('.vid-container').style.transform = 'translateY(' + transformY + "px)";
    this.document.querySelector('.about p').style.transform = 'translateY(' + transformYP + "px)";
    this.document.querySelector('.about h1').style.transform = 'translateY(' + transformYH + "px)";
})

i = 0;
window.addEventListener('scroll', function() {
    if (image.getBoundingClientRect().top < (window.innerHeight/5)) {
        this.document.querySelector('.image img').style.height = '80vh';
        this.setTimeout(() => {
            this.document.querySelector('.image h1').style.opacity = 1;
            this.document.querySelector('.image h1').style.transform = 'translateY(0)';
        }, 500)
        this.setTimeout(() => {
            this.document.querySelector('.image').style.pointerEvents = 'all';
        }, 1000)
        
    }

    if (this.document.querySelector('.caption').getBoundingClientRect().top < (window.innerHeight / 1.5)) {
        this.document.querySelector('.caption').style.transform = 'scaleX(1)';
        this.document.querySelectorAll('.caption > *').forEach(text => {
            this.setTimeout(() => {
                text.style.opacity = 1;
                text.style.transform = 'translateY(0)';
            }, (i*100)+750)
            i++;
        })
    }

    if (this.document.querySelector('.stats').getBoundingClientRect().top < (window.innerHeight/5)) {
        i=0;
        this.document.querySelector('.stats span').style.transform = 'translateY(0)';
        this.document.querySelectorAll('.stats .row').forEach(text => {
            this.setTimeout(() => {
                text.style.opacity = 1;
                text.style.transform = 'translateY(0)';
            }, (i*50)+500)
            i++;
        })
        this.setTimeout(() => {
            this.document.querySelector('.stats .line').style.opacity = '1';
        }, 900)
    }
})