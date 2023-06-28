

let saveRegistrationInfo = ()=>{
    console.log('OJKOKOKOKOKOKOK');
            //object.method()
    let fn = document.getElementById("first_name").value;
    let ln = document.getElementById("last_name").value;
    let dur = document.querySelector('.a_myselect').value;

    console.log(fn);
    console.log(ln);
    window.localStorage.setItem('first_name',fn);
    window.localStorage.setItem('last_name',ln);
    window.localStorage.setItem('duration',dur);
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

let start = ()=>{
    //Built-in function
    // Set the date we're counting down to
    var nextTime = new Date().getTime();
    nextTime = new Date(nextTime + ( localStorage.getItem('duration')*60* 1000)); // Add 1 hour
    
        // Create a new Date object with the specified datetime
    const datetime = new Date( nextTime);

    // Get the Unix timestamp by dividing the milliseconds since January 1, 1970, by 1000
    const unixTimestamp = Math.floor(datetime.getTime() / 1000)*1000;

   
    setInterval(function(){
        // Get today's date and time
        var now = new Date().getTime();
        // Add a certain amount of time to the current time
        console.log('Next Time', unixTimestamp);
        console.log('Current Time',now);
         // Find the distance between now and the count down date
        var distance = unixTimestamp - now;

        // Time calculations for days, hours, minutes and seconds
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        document.querySelector(".a_myduration").innerHTML = minutes + "m " + seconds + "s ";

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.querySelector(".a_myduration").innerHTML = "EXPIRED";
        }
    },1000)
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

    /*
        for (expression 1; condition; increment++/decrement) {
            // code block to be executed
        }
    */
   var o = '';
   for(var i=1; i<=60;i++){
        o = o + `<option value="${i}">${i}</option>`;
   }

   console.log(o);
   console.log(document.querySelector('.a_myselect'));
   document.querySelector('.a_myselect').innerHTML = o;
    

   document.querySelector('.a_myduration').innerHTML = localStorage.getItem('duration') === null ?'':localStorage.getItem('duration')+':00';

    

})();

//()(); IIFE 