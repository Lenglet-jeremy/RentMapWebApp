
const input = document.getElementById("Address");
const suggestionsList = document.getElementById("Suggestion");



input.addEventListener("input", async () => {
    const query = input.value;
    
    if (query.length < 3) return; // Évite les requêtes inutiles

    const response = await fetch(`http://127.0.0.1:5000/api/autocomplete?query=${encodeURIComponent(query)}`);
    const data = await response.json();

    suggestionsList.style.display = "flex"
    suggestionsList.style.backgroundColor = "#999999"
    suggestionsList.innerHTML = ""; // Réinitialise la liste

    data.features.forEach((feature) => {
        const li = document.createElement("li");
        li.style.cursor = "pointer"        
        li.textContent = feature.place_name;
        li.onclick = () => (input.value = feature.place_name); // Remplit l'input au clic
        suggestionsList.appendChild(li);
    });
});

input.addEventListener("blur", () => {
    setTimeout(() => {
        suggestionsList.style.display = "none";
    }, 200);
    sessionStorage.setItem("UserInputAdress", input.value)
    
});

input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        suggestionsList.style.display = "none"
        sessionStorage.setItem("UserInputAdress", input.value)
    }
});