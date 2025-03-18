const radioButtons = document.querySelectorAll('input[name="Choice"]');

// Sauvegarde du choix lorsque l'utilisateur sélectionne une option
radioButtons.forEach(radio => {
    radio.addEventListener("change", function () {
        sessionStorage.setItem("propertyType", this.value);
        console.log(sessionStorage);
        
    });
});
