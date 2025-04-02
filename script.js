
function updateTimer() {
    let endDate = new Date(2025, 3, 1, 17, 46, 30);
    let now = new Date();
  
    let timeDiff = endDate.getTime() - now.getTime();
  
    if (timeDiff <= 0) {
        clearInterval(timerInterval); // Para a repetição
        document.getElementById("cd-day").innerHTML = 0;
        document.getElementById("cd-hour").innerHTML = 0;
        document.getElementById("cd-min").innerHTML = 0;
        document.getElementById("cd-sec").innerHTML = 0;
        return;
    }
  
    let onsec = 1000;
    let onmin = onsec * 60;
    let onhour = onmin * 60;
    let ondeday = onhour * 24;
  
    let day = Math.floor(timeDiff / ondeday);
    let hour = Math.floor((timeDiff % ondeday) / onhour);
    let min = Math.floor((timeDiff % onhour) / onmin);
    let sec = Math.floor((timeDiff % onmin) / onsec);
  
    document.getElementById("cd-day").innerHTML = day;
    document.getElementById("cd-hour").innerHTML = hour;
    document.getElementById("cd-min").innerHTML = min;
    document.getElementById("cd-sec").innerHTML = sec;
  }
  // Inicia o intervalo e armazena a referência
  let timerInterval = setInterval(updateTimer, 1000);
  
   // Chama imediatamente para evitar atraso de 1 segundo