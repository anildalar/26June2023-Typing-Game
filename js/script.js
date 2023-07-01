
let fn = window.localStorage.getItem('first_name');
let ln = window.localStorage.getItem('last_name');

let story=`Once, there was a boy who became bored when he watched over the village sheep grazing on the hillside. To entertain himself, he sang out, “Wolf! Wolf! The wolf is chasing the sheep!”
            When the villagers heard the cry, they came running up the hill to drive the wolf away. But, when they arrived, they saw no wolf. The boy was amused when seeing their angry faces.
            “Don’t scream wolf, boy,” warned the villagers, “when there is no wolf!” They angrily went back down the hill.
            Later, the shepherd boy cried out once again, “Wolf! Wolf! The wolf is chasing the sheep!” To his amusement, he looked on as the villagers came running up the hill to scare the wolf away.
            As they saw there was no wolf, they said strictly, “Save your frightened cry for when there really is a wolf! Don’t cry ‘wolf’ when there is no wolf!” But the boy grinned at their words while they walked grumbling down the hill once more.
            Later, the boy saw a real wolf sneaking around his flock. Alarmed, he jumped on his feet and cried out as loud as he could, “Wolf! Wolf!” But the villagers thought he was fooling them again, and so they didn’t come to help.
            At sunset, the villagers went looking for the boy who hadn’t returned with their sheep. When they went up the hill, they found him weeping.
            “There really was a wolf here! The flock is gone! I cried out, ‘Wolf!’ but you didn’t come,” he wailed.
            An old man went to comfort the boy. As he put his arm around him, he said, “Nobody believes a liar, even when he is telling the truth!”`;
let pertwolinecharactercount = 30;
let initialSequence = 1;
let currentcharterlocation=1;
let totcloc=1;
let prevChar =  [];
let currentChar = '';
let nextChar =''; // Sqaure bracke is an array
//console.log('Total Count',story.length);
var pertwolinecharacter = Math.ceil(story.length/pertwolinecharactercount);

let saveRegistrationInfo = ()=>{
    //console.log('OJKOKOKOKOKOKOK');
            //object.method()
    let fn = document.getElementById("first_name").value;
    let ln = document.getElementById("last_name").value;
    let dur = document.querySelector('.a_myselect').value;

    //console.log(fn);
    //console.log(ln);
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

let playSound = (status)=>{
    ////console.log('Good morning');
    let at = document.querySelector('.a_audio');
    if(status === 'correct'){    
        at.src = '../sound/k.mp3';
        at.play();
    }else{
        at.src = '../sound/error.mp3';
        at.play();
    }
    
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
        //console.log('Next Time', unixTimestamp);
        //console.log('Current Time',now);
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

    //console.log('Page loaded successfully');
    // Get a reference to the modal element
    var modal = document.getElementById('regitrationModel');

    // Create a Bootstrap modal instance using the modal element
    var modalInstance = new bootstrap.Modal(modal);


    // Call the `show` method on the modal instance to launch the modal
    //console.log(fn);
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

        var prevChar2 = prevChar.pop();
        console.log(prevChar);
        console.log(prevChar2);
        if(prevChar2 !== currentChar){
            //Play the error sound
            //console.log('Incorrect',prevChar);
            //console.log('Incorrect',currentChar);
            playSound('correct');
        }else{
            //console.log('Correct',prevChar);
            //console.log('Correct',currentChar);

            //play error sound
            playSound('incorrect');

        }
        //console.log('->',e);
        currentChar = e.key;
        if(e.keyCode == 97){
            let a = document.querySelector('.a_a');
            //console.log(a.classList.add('a_active'));
            document.querySelector('.l_pinky').style.display = 'block';
        } 
        if(e.keyCode == 115){
            let a = document.querySelector('.a_s');
            //console.log(a.classList.add('a_active'));
            document.querySelector('.l_pinky').style.display = 'block';
        } 
        if(e.keyCode == 100){
            let a = document.querySelector('.a_d');
            //console.log(a.classList.add('a_active'));
            document.querySelector('.l_pinky').style.display = 'block';
        } 
        if(e.keyCode == 102){
            let a = document.querySelector('.a_f');
            //console.log(a.classList.add('a_active'));
            document.querySelector('.l_pinky').style.display = 'block';
        } 
        if(e.keyCode == 103){
            let a = document.querySelector('.a_g');
            //console.log(a.classList.add('a_active'));
            document.querySelector('.l_pinky').style.display = 'block';
        } 
        if(e.keyCode == 104){
            let a = document.querySelector('.a_h');
            //console.log(a.classList.add('a_active'));
            document.querySelector('.l_pinky').style.display = 'block';
        } 
        if(e.keyCode == 106){
            let a = document.querySelector('.a_j');
            //console.log(a.classList.add('a_active'));
            document.querySelector('.l_pinky').style.display = 'block';
        } 
        if(e.keyCode == 107){
            let a = document.querySelector('.a_k');
            //console.log(a.classList.add('a_active'));
            document.querySelector('.l_pinky').style.display = 'block';
        } 
        if(e.keyCode == 108){
            let a = document.querySelector('.a_l');
            //console.log(a.classList.add('a_active'));
            document.querySelector('.l_pinky').style.display = 'block';
        } 
        if(e.keyCode == 113){
            let a = document.querySelector('.a_q');
            //console.log(a.classList.add('a_active'));
            document.querySelector('.l_pinky').style.display = 'block';
        } 
        if(e.keyCode == 119){
            let a = document.querySelector('.a_w');
            //console.log(a.classList.add('a_active'));
            document.querySelector('.l_pinky').style.display = 'block';
        } 
        if(e.keyCode == 101){
            let a = document.querySelector('.a_e');
            //console.log(a.classList.add('a_active'));
            document.querySelector('.l_pinky').style.display = 'block';
        } 
        if(e.keyCode == 114){
            let a = document.querySelector('.a_r');
            //console.log(a.classList.add('a_active'));
            document.querySelector('.l_pinky').style.display = 'block';
        } 
        if(e.keyCode == 116){
            let a = document.querySelector('.a_t');
            //console.log(a.classList.add('a_active'));
            document.querySelector('.l_pinky').style.display = 'block';
        } 
        if(e.keyCode == 121){
            let a = document.querySelector('.a_y');
            //console.log(a.classList.add('a_active'));
            document.querySelector('.l_pinky').style.display = 'block';
        } 
        if(e.keyCode == 117){
            let a = document.querySelector('.a_u');
            //console.log(a.classList.add('a_active'));
            document.querySelector('.l_pinky').style.display = 'block';
        } 
        if(e.keyCode == 105){
            let a = document.querySelector('.a_i');
            //console.log(a.classList.add('a_active'));
            document.querySelector('.l_pinky').style.display = 'block';
        } 
        if(e.keyCode == 111){
            let a = document.querySelector('.a_o');
            //console.log(a.classList.add('a_active'));
            document.querySelector('.l_pinky').style.display = 'block';
        } 
        if(e.keyCode == 112){
            let a = document.querySelector('.a_p');
            //console.log(a.classList.add('a_active'));
            document.querySelector('.l_pinky').style.display = 'block';
        } 
        if(e.keyCode == 122){
            let a = document.querySelector('.a_z');
            //console.log(a.classList.add('a_active'));
            document.querySelector('.l_pinky').style.display = 'block';
        } 
        if(e.keyCode == 120){
            let a = document.querySelector('.a_x');
            //console.log(a.classList.add('a_active'));
            document.querySelector('.l_pinky').style.display = 'block';
        } 
        if(e.keyCode == 99){
            let a = document.querySelector('.a_c');
            //console.log(a.classList.add('a_active'));
            document.querySelector('.l_pinky').style.display = 'block';
        } 
        if(e.keyCode == 118){
            let a = document.querySelector('.a_v');
            //console.log(a.classList.add('a_active'));
            document.querySelector('.l_pinky').style.display = 'block';
        } 
        if(e.keyCode == 98){
            let a = document.querySelector('.a_b');
            //console.log(a.classList.add('a_active'));
            document.querySelector('.l_pinky').style.display = 'block';
        } 
        if(e.keyCode == 110){
            let a = document.querySelector('.a_n');
            //console.log(a.classList.add('a_active'));
            document.querySelector('.l_pinky').style.display = 'block';
        } 
        if(e.keyCode == 109){
            let a = document.querySelector('.a_m');
            //console.log(a.classList.add('a_active'));
            document.querySelector('.l_pinky').style.display = 'block';
        } 
    })

    document.addEventListener('keyup',(e)=>{
        ////console.log(e);
        var elements = document.getElementsByClassName('a_active');
  
        for (var i = 0; i < elements.length; i++) {
          elements[i].classList.remove('a_active');
        }

        var elements = document.getElementsByClassName('a_left_pinky');
  
        for (var i = 0; i < elements.length; i++) {
          elements[i].style.display="none";
        }

        //console.log('initialSequence->',initialSequence);
        //console.log('currentcharterlocation->',currentcharterlocation);
        //console.log('pertwolinecharacter->',pertwolinecharactercount);
        
        if(currentcharterlocation >= pertwolinecharactercount){
            currentcharterlocation=0;
            initialSequence++;
            //console.log('new initialSequence',initialSequence)
        }else{
            currentcharterlocation++;
        }
        //If the 

         //string.substring(start, end)
        if(initialSequence === 1){
            
            //console.log('--->',story.substring(initialSequence-1, (initialSequence*pertwolinecharactercount) + pertwolinecharactercount));
            let x = story.substring(initialSequence-1, (initialSequence*pertwolinecharactercount) + pertwolinecharactercount);
            // let x = 'anil';

            // ccl = 2    <span style="color:green">a</span style="text-decoration:underline">n<span>il
            
                
            var p1 = x.substring(0,currentcharterlocation);
            var p2 = x.substring(currentcharterlocation);
            prevChar.push(p2.charAt(0));
            //p2 = x.replace("a", "<span style='text-decoration: underline;'>a</span>");
            p2 = "<span style='text-decoration: underline;font-weight:bolder'>" + p2.charAt(0) + "</span>" + p2.slice(1);
            //console.log('part 1->',p1)
            //console.log('part 2->',p2)

            //
            let a = `<span style="color:red">${p1}</span>`+p2;


            document.querySelector('.a_myparagraph').innerHTML = a;
            //console.log('nextchar-->',nextChar);
        }else{
            //console.log('--->',story.substring((initialSequence-1)*pertwolinecharactercount, (initialSequence*pertwolinecharactercount) + pertwolinecharactercount));
            let x = story.substring((initialSequence-1)*pertwolinecharactercount, (initialSequence*pertwolinecharactercount) + pertwolinecharactercount);
            
            var p1 = x.substring(0,currentcharterlocation);
            var p2 = x.substring(currentcharterlocation);
            prevChar.push(p2.charAt(0));
            //p2 = x.replace("a", "<span style='text-decoration: underline;'>a</span>");
            p2 = "<span style='text-decoration: underline;font-weight:bolder'>" + p2.charAt(0) + "</span>" + p2.slice(1);
            //console.log('part 1->',p1)
            //console.log('part 2->',p2)

            //
            let a = `<span style="color:red">${p1}</span>`+p2;
            document.querySelector('.a_myparagraph').innerHTML = a;
            //console.log('nextchar-->',nextChar);
        }


        totcloc++;


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

   //console.log(o);
   //console.log(document.querySelector('.a_myselect'));
   document.querySelector('.a_myselect').innerHTML = o;
    

   document.querySelector('.a_myduration').innerHTML = localStorage.getItem('duration') === null ?'':localStorage.getItem('duration')+':00';

})();

//()(); IIFE 