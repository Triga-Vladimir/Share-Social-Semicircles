
const shareAlt = document.querySelector('.share-alt');
const social = document.querySelector('.social');
const share = document.querySelector('.share');

shareAlt.addEventListener('click', () => {

	document.querySelectorAll('.branch').forEach((e) => {
        e.classList.remove("no-animation");
        e.classList.toggle("open");
    })
   
});

social.addEventListener('click', () => {

    document.querySelectorAll('.container').forEach((e) => {
        e.classList.remove("no-animation");
        e.classList.toggle("open");
    })
	
});

share.addEventListener('click', () => {
	
    document.querySelectorAll('.float-circle').forEach((e) => {
        e.classList.remove("no-animation");
        e.classList.toggle("open");
    })

});
