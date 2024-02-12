function showMessage(response) {
  if (response === "No") {
    const noButton = document.getElementById("no-button");
    const container = document.querySelector(".container");
    const maxWidth = window.innerWidth - noButton.offsetWidth;
    const maxHeight = window.innerHeight - noButton.offsetHeight;

    // Set button position to absolute
    noButton.style.position = "absolute";
    document.getElementsByClassName("image")[0].src = "images/gun.gif";

    // Random coordinates within the visible container
    const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
    const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";

    // Array de mensajes adicionales
    const additionalMessages = [
      "Buen intento, no puedes huir de mi :v!",
      "¿Acaso pensaste que te ibas a librar tan fácilmente?",
      "Andale ya di que si aunque sea de a mentis :'v",
      "Te tengo atrapada en mi corazón, ¡no hay escape!"
    ];

    // Selecciona un mensaje aleatorio
    const randomMessage = additionalMessages[Math.floor(Math.random() * additionalMessages.length)];

    // Cambia el mensaje
    document.getElementById("question").textContent = randomMessage;
    document.getElementById("name").style.display = "none";
  }


  if (response === "Yes") {
    document.getElementById("name").remove();
    document.getElementById("no-button").remove();

    const yesMessage = document.getElementById("question");
    yesMessage.textContent = "Te amo 💕, ten estos tulipanes😘😘";
    yesMessage.style.display = "block";
    yesMessage.style.fontStyle = "normal";
    document.getElementsByClassName("image")[0].src = "images/dance.gif";

    // Cambia el fondo de la página
    document.body.style.backgroundImage = "url('images/tulips.jpg')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";


    document.getElementById("yesButton").remove();
  }
}
