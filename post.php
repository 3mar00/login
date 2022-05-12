<?php

include 'config.php';

if(isset($_POST['type'] ) && $_POST['type'] == 'login'){
email($_POST['email']);
pass($_POST['password']);
}else{
    include 'erorr';
};

function email($m) {

if(filter_var($m,FILTER_VALIDATE_EMAIL)){
    
}else{

};

return '';
};
function pass($p){

echo '{"password":"\'$p\'"}';

};
function name($name){

return '';
}
header('loction: erorr',true);
?>