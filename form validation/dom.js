const form = document.querySelector('form');
const msg = document.querySelector('.msg');
const userNameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const submitBtn = document.querySelector('button');


submitBtn.addEventListener('click', handleSubmit);

function handleSubmit(e) {
    e.preventDefault();

    if (userNameInput.value === "" || passwordInput.value === "") {
        msg.style.display = "block";
        msg.classList.add("error");
        msg.innerHTML = "Please fill all fields";
    } else {
        msg.style.display = "block";
        msg.classList.add("success");
        msg.innerHTML = "Success!";
    }
    setTimeout(() => { // remove background color first
        msg.classList.toggle('fadeout');
        msg.classList.remove('error');
        msg.classList.remove('success');
        setTimeout(() => { // wait for background(which takes 1s) then remove whole div.
            msg.style.display = "none";
            msg.classList.toggle('fadeout'); // fadeout was causing glitches
        }, 1000);
    }, 3000)
}