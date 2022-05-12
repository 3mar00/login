$('form').onsubmit = (a) => {
    a.preventDefault();

};
$('.pass1').onclick = (a) => {
    if ($('#pass').type == "text") {

        $('#pass').type = "password";
        a.target.className = 'fa-solid fa-eye-slash pass1';

    } else {

        $('#pass').type = "text";
        a.target.className = 'fa-solid fa-eye pass1';

    }
    $('#pass').focus()
}
$('.pass2').onclick = (a) => {
    if ($('#cpass').type == "text") {

        $('#cpass').type = "password";
        a.target.className = 'fa-solid fa-eye-slash pass2';

    } else {

        $('#cpass').type = "text";
        a.target.className = 'fa-solid fa-eye pass2';

    }
    $('#cpass').focus()

}

$('.send').onclick = () => {
    let data = new FormData($('form'));
    console.log(data);
    data.append('type', 'login');


    senn(data, (a) => {
        console.log(a)
    })
}



function senn(data, fun) {
    const xhr = new XMLHttpRequest;

    xhr.open('POST', 'post.php', true);
    xhr.onload = () => {
        fun(xhr.response);
    };
    xhr.send(data);

}

function $(query) {
    return document.querySelector(query);
}