const steps = document.querySelectorAll(".DataContent > div");
let currentStep = 1;
    
async function loadHTML(path, elementId) {
    try {
        const response = await fetch(path);
        if (!response.ok) {
            throw new Error(`❌ Erreur de chargement : ${path}`);
        }
        const html = await response.text();

        const element = document.getElementById(elementId);
        if (!element) {
            throw new Error(`❌ L'élément ${elementId} n'existe pas dans le DOM`);
        }
        element.innerHTML = html;
    } catch (error) {
        console.error(error);
    }
}


async function loadAllHTML() {
    await loadHTML('./MainPage/MainPage.html', 'Body');
    await loadHTML('./MainPage/Datas/UsersInputs/Step1/Step1.html', 'Step1');
    await loadHTML('./MainPage/Datas/UsersInputs/Step2/Step2.html', 'Step2');
    await loadHTML('./MainPage/Datas/UsersInputs/Step3/Step3.html', 'Step3');
    await loadHTML('./MainPage/Datas/UsersInputs/Step4/Step4.html', 'Step4');
    await loadHTML('./MainPage/Datas/Result/Result.html', 'Result');


    import('./MainPage/Datas/UsersInputs/Step1/Step1.js');
    import('./MainPage/Datas/UsersInputs/Step2/Step2.js');
    import('./MainPage/Datas/UsersInputs/Step3/Step3.js');
    import('./MainPage/Datas/UsersInputs/Step4/Step4.js');
    import('./MainPage/Map/Map.js');
    import('./MainPage/MainPage.js');
    import('./MainPage/Datas/Result/Result.js');
}

loadAllHTML();
