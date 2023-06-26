

let saveRegistrationInfo = ()=>{
    console.log('OJKOKOKOKOKOKOK');
            //object.method()
    let fn = document.getElementById("first_name").value;
    let ln = document.getElementById("last_name").value;

    console.log(fn);
    console.log(ln);
    window.localStorage.setItem('first_name',fn);
    window.localStorage.setItem('last_name',ln);
     //Page reload
     window.location.reload();
}

let logout = ()=>{
    window.localStorage.clear();

    //Page reload
    window.location.reload();
}

// ()();   IIFE 
(()=>{
    let fn = window.localStorage.getItem('first_name');
    let ln = window.localStorage.getItem('last_name');
    console.log('Page loaded successfully');
    // Get a reference to the modal element
    var modal = document.getElementById('regitrationModel');

    // Create a Bootstrap modal instance using the modal element
    var modalInstance = new bootstrap.Modal(modal);


    // Call the `show` method on the modal instance to launch the modal
    console.log(fn);
    if(fn === null  ){
            //True
            modalInstance.show();
    } 

    //Check if the localStorage is set or note
    if(fn !== null){
        document.querySelector('.a_welcome').innerHTML = 'Welcome '+fn + " "+ln+'<button class="btn btn-sm btn-danger ms-4" onclick="logout()">Logout</button>';
    }



})();