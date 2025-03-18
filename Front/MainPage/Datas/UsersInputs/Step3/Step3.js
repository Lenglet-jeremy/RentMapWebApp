let SurfaceUserInputValue = document.getElementById('SurfaceUserInputValue');
SurfaceUserInputValue.addEventListener('input', function(event) {
    sessionStorage.setItem('SurfaceUserInputValue', event.target.value)
    console.log(sessionStorage);
    
});


let PiecesNumberUsersInputValue = document.getElementById('PiecesNumberUsersInputValue');
PiecesNumberUsersInputValue.addEventListener('change', function(event) {
    sessionStorage.setItem('PiecesNumberUsersInputValue', event.target.value)
    console.log(sessionStorage);
    
});



document.querySelectorAll('.InputWithButtons').forEach(group => {
    const input = group.querySelector('input');
    const plusBtn = group.querySelector('.Plus');
    const minusBtn = group.querySelector('.Minus');
    
    const inputIdName = input.getAttribute('id');

    plusBtn.addEventListener('click', () => {
        input.value = parseInt(input.value) + 1 || 1;
        sessionStorage.setItem(inputIdName, input.value)
        console.log(sessionStorage);
        
    });

    minusBtn.addEventListener('click', () => {
        input.value = Math.max(1, parseInt(input.value) - 1 || 1);
        sessionStorage.setItem(inputIdName, input.value)
        console.log(sessionStorage);
    });
});


let ElevatorOptionUserChoice = document.getElementById("ElevatorOptionUserChoice")
ElevatorOptionUserChoice.addEventListener( "change", function(event){
    sessionStorage.setItem('ElevatorOptionUserChoice', ElevatorOptionUserChoice.checked)
    console.log(sessionStorage)
})

// Sélectionnez les éléments de sélection pour le GES et le DPE
let dpeSelect = document.getElementById('dpe');
let gesSelect = document.getElementById('ges');

// Ajoutez un écouteur d'événements pour sauvegarder la valeur du DPE dans le sessionStorage
dpeSelect.addEventListener('change', function(event) {
    sessionStorage.setItem('dpeValue', event.target.value);
    console.log(sessionStorage);
});

// Ajoutez un écouteur d'événements pour sauvegarder la valeur du GES dans le sessionStorage
gesSelect.addEventListener('change', function(event) {
    sessionStorage.setItem('gesValue', event.target.value);
    console.log(sessionStorage);
});
