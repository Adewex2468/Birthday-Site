    // Scroll Button
    function scrollToMemories(){
      document.getElementById('memories').scrollIntoView({
        behavior:'smooth'
      });
    }

    // Typing Animation
    const text = "You are the reason my heart smiles every day ❤️";
    const typing = document.querySelector('.typing');
    let index = 0;

    function typeEffect(){
      if(index < text.length){
        typing.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect,70);
      }
    }

    typeEffect();

    // Countdown Timer
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 365);

    function updateCountdown(){
      const now = new Date().getTime();
      const gap = futureDate - now;

      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;

      const days = Math.floor(gap / day);
      const hours = Math.floor((gap % day) / hour);
      const minutes = Math.floor((gap % hour) / minute);
      const seconds = Math.floor((gap % minute) / second);

      document.getElementById('days').innerText = days;
      document.getElementById('hours').innerText = hours;
      document.getElementById('minutes').innerText = minutes;
      document.getElementById('seconds').innerText = seconds;
    }

    setInterval(updateCountdown,1000);

    // Music Toggle
    const song = document.getElementById('birthdaySong');
    let isPlaying = false;

    function toggleMusic(){
      if(isPlaying){
        song.pause();
        isPlaying = false;
      }
      else{
        song.play();
        isPlaying = true;
      }
    }
