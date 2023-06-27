

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

let playSound = ()=>{
    //console.log('Good morning');
    let at = document.querySelector('.a_audio');
    at.play();
}

// ()();   IIFE 
//Onpage load
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


    //Keypress sound play
    document.addEventListener('keypress',(e)=>{
        console.log('->',e.keyCode);
        if(e.keyCode == 97){
            let a = document.querySelector('.a_a');
            console.log(a.classList.add('a_active'));
            document.querySelector('.l_pinky').style.display = 'block';
        } 
        if(e.keyCode == 113){
            let a = document.querySelector('.a_q');
            console.log(a.classList.add('a_active'));
            document.querySelector('.l_pinky').style.display = 'block';
        } 
        if(e.keyCode == 122){
            let a = document.querySelector('.a_z');
            console.log(a.classList.add('a_active'));
            document.querySelector('.l_pinky').style.display = 'block';
        } 
        if(e.keyCode == 119){
            let a = document.querySelector('.a_w');
            console.log(a.classList.add('a_active'));
            document.querySelector('.l_ring').style.display = 'block';
        } 
        if(e.keyCode == 115){
            let a = document.querySelector('.a_s');
            console.log(a.classList.add('a_active'));
            document.querySelector('.l_ring').style.display = 'block';
        } 
        if(e.keyCode == 120){
            let a = document.querySelector('.a_x');
            console.log(a.classList.add('a_active'));
            document.querySelector('.l_ring').style.display = 'block';
        } 
        //document = whole website
        playSound();
    })

    document.addEventListener('keyup',(e)=>{
        console.log(e);
        var elements = document.getElementsByClassName('a_active');
  
        for (var i = 0; i < elements.length; i++) {
          elements[i].classList.remove('a_active');
        }

        var elements = document.getElementsByClassName('a_left_pinky');
  
        for (var i = 0; i < elements.length; i++) {
          elements[i].style.display="none";
        }


        //document.querySelector('.a_left_pinky').style.display='none';
    });
    
})();

//()(); IIFE 