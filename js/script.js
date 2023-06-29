

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
    let currentCharacterPosition=0;

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
        //console.log(e);
        var elements = document.getElementsByClassName('a_active');
  
        for (var i = 0; i < elements.length; i++) {
          elements[i].classList.remove('a_active');
        }

        var elements = document.getElementsByClassName('a_left_pinky');
  
        for (var i = 0; i < elements.length; i++) {
          elements[i].style.display="none";
        }

        currentCharacterPosition = currentCharacterPosition + 1;

        console.log(currentCharacterPosition)


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


   let story =  `Once, there was a boy who became bored when he watched over the village sheep grazing on the hillside. To entertain himself, he sang out, “Wolf! Wolf! The wolf is chasing the sheep!”
   When the villagers heard the cry, they came running up the hill to drive the wolf away. But, when they arrived, they saw no wolf. The boy was amused when seeing their angry faces.
   “Don’t scream wolf, boy,” warned the villagers, “when there is no wolf!” They angrily went back down the hill.
   Later, the shepherd boy cried out once again, “Wolf! Wolf! The wolf is chasing the sheep!” To his amusement, he looked on as the villagers came running up the hill to scare the wolf away.
   As they saw there was no wolf, they said strictly, “Save your frightened cry for when there really is a wolf! Don’t cry ‘wolf’ when there is no wolf!” But the boy grinned at their words while they walked grumbling down the hill once more.
   Later, the boy saw a real wolf sneaking around his flock. Alarmed, he jumped on his feet and cried out as loud as he could, “Wolf! Wolf!” But the villagers thought he was fooling them again, and so they didn’t come to help.
   At sunset, the villagers went looking for the boy who hadn’t returned with their sheep. When they went up the hill, they found him weeping.
   “There really was a wolf here! The flock is gone! I cried out, ‘Wolf!’ but you didn’t come,” he wailed.
   An old man went to comfort the boy. As he put his arm around him, he said, “Nobody believes a liar, even when he is telling the truth!”`
    

    console.log();

    let x = story.split(' ');

    //Function chaining.  a().b().c().d()........
    console.log(x.slice(0,20).join(' '));

    let content = x.slice(0,20).join(' ')

    //Access the dom element
    document.querySelector('.a_tcontent').innerHTML = content;


})();

//()(); IIFE 