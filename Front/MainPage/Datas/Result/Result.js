function normalizeString(str) {
    return str
        ? str.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Supprime les accents
        : "";
}

async function getCityFromCoords(lat, lon) {
    if (!lat || !lon) return "Coordonnées non disponibles";

    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        return (
            data.address.city ||
            data.address.town ||
            data.address.village ||
            data.address.municipality ||
            "Ville non trouvée"
        );
    } catch (error) {
        console.error("Erreur :", error);
        return "Erreur lors de la récupération";
    }
}

async function getDepartementFromCoordinates(latitude, longitude) {
    const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.address && data.address['county']) {
            return data.address['county'];
        } else {
            return "Département non trouvé";
        }
    } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
        return "Erreur lors de la récupération des données";
    }
}

async function fetchNeighborhoodCostRentData(department, city) {
    try {
        const response = await fetch(`http://localhost:5000/api/Refined`);
        const data = await response.json();
        

        let RefinedData = [];

        for (const key in data) {
            if (data.hasOwnProperty(key) && key.includes(normalizeString(department))) {
                for (const collection of data[key]) {
                    if (normalizeString(collection["Ville"]) === normalizeString(city)) {                        
                        RefinedData.push(collection)
                    }
                }
            }
        }        
        return RefinedData;
    } catch (error) {
        console.error('Erreur lors de la récupération des données de population:', error);
        return {};
    }
}

async function fetchVacantsAcommodationsData(department, city) {
    try {
        const response = await fetch(`http://localhost:5000/api/TauxHabitationVacants`);
        const data = await response.json();

        for (const key in data) {
            if (data.hasOwnProperty(key) && key.includes(normalizeString(department))) {
                for (const collection of data[key]) {
                    if (normalizeString(collection["libgeo"]) === normalizeString(city)) {                                  
                        return collection["part_logt_vacant"]
                    }
                }
            }
        }        
    } catch (error) {
        console.error('Erreur lors de la récupération des données de population:', error);
        return ;
    }
}

async function fillNeighborhoodCostRentTable(department, city) {
    const neighborhoodCostRentData = await fetchNeighborhoodCostRentData(department, city);

    const tableBody = document.querySelector('#neighborhoodCostRentTable tbody');
    tableBody.innerHTML = '';

    console.log(neighborhoodCostRentData.length); // Affiche la taille du tableau

    for (let i = 0; i < neighborhoodCostRentData.length; i++) {
        const neighborhoodData = neighborhoodCostRentData[i];

        // Vérifiez si l'élément a la propriété 'Quartier' avant de continuer
        if (neighborhoodData.Quartier) {
            const row = document.createElement('tr');

            const neighborhoodCell = document.createElement('td');
            neighborhoodCell.textContent = neighborhoodData.Quartier;
            row.appendChild(neighborhoodCell);

            const apartmentPriceCell = document.createElement('td');
            apartmentPriceCell.textContent = Number(neighborhoodData['Prix au m2 appartement']).toLocaleString();
            row.appendChild(apartmentPriceCell);

            const housePriceCell = document.createElement('td');
            housePriceCell.textContent = Number(neighborhoodData['Prix au m2 maison']).toLocaleString();
            row.appendChild(housePriceCell);

            const apartmentRentCell = document.createElement('td');
            apartmentRentCell.textContent = Number(neighborhoodData['Loyer au m2 appartement']).toLocaleString();
            row.appendChild(apartmentRentCell);

            const houseRentCell = document.createElement('td');
            houseRentCell.textContent = Number(neighborhoodData['Loyer au m2 maison']).toLocaleString();
            row.appendChild(houseRentCell);

            tableBody.appendChild(row);
        }
    }
}

async function fetchRentabiliteData(department, city, typeOfProperty) {
    try {
        const response = await fetch(`http://localhost:5000/api/Rentabilite`);
        const data = await response.json();

        let cityData = {};

        for (const key in data) {
            if (data.hasOwnProperty(key) && key.includes(normalizeString(department))) {
                for (const collection of data[key]) {
                    if (collection.Villes && normalizeString(collection.Villes) === normalizeString(city)) {
                        cityData = collection;
                        break;
                    }
                }
            }
        }

        return {
            pricePerSquareMeter: typeOfProperty === "Maison" ? cityData["Prix maison"] : cityData["Prix appart"],
            rentPerSquareMeter: typeOfProperty === "Maison" ? cityData["Loyer maison"] : cityData["Loyer appart"],
            yield: typeOfProperty === "Maison" ? cityData["Renta maisons"] : cityData["Renta Appatements"],
            population: cityData["Population"],
            studentsRate: cityData["Taux detudiants"],
            unemploymentRate: cityData["Taux de chomage"]
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return {};
    }
}

async function fetchPopulationData(department, cityName) {
    try {
        const response = await fetch(`http://localhost:5000/api/EvolPop`);
        const data = await response.json();
        

        let populationByYear = {};

        for (const key in data) {
            if (data.hasOwnProperty(key) && key.includes(normalizeString(department))) {
                for (const collection of data[key]) {
                    if (normalizeString(collection["Libelle commune ou ARM"]) === normalizeString(cityName)) {
                        const year = collection["Annee"];

                        if (!populationByYear[year]) {
                            populationByYear[year] = {
                                totalPopulation: 0,
                                total0to14: 0,
                                total15to29: 0,
                                total30to44: 0,
                                total45to59: 0,
                                total60to74: 0,
                                total75toMore: 0,
                            };
                        }
                        populationByYear[year].totalPopulation += Math.round(collection["Population"]);
                        populationByYear[year].total0to14 += Math.round(collection["Pop 0-14 ans"]);
                        populationByYear[year].total15to29 += Math.round(collection["Pop 15-29 ans"]);
                        populationByYear[year].total30to44 += Math.round(collection["Pop 30-44 ans"]);
                        populationByYear[year].total45to59 += Math.round(collection["Pop 45-59 ans"]);
                        populationByYear[year].total60to74 += Math.round(collection["Pop 60-74 ans"]);
                        populationByYear[year].total75toMore += Math.round(collection["Pop 75 ans ou plus"]);
                    }
                }
            }
        }

        return populationByYear;
    } catch (error) {
        console.error('Erreur lors de la récupération des données de population:', error);
        return {};
    }
}

async function fillPopulationTable(department, cityName) {
    const populationData = await fetchPopulationData(department, cityName);
    const tableBody = document.getElementById("TablePopCityName");  
    

    // Parcourir toutes les lignes du tableau
    const rows = tableBody.querySelectorAll("tr");
    
    rows.forEach(row => {
        const year = row.querySelector("td").innerText;
        if (populationData[year]) {
            row.querySelectorAll("td")[1].innerText = populationData[year].totalPopulation.toLocaleString();
            row.querySelectorAll("td")[2].innerText = populationData[year].total0to14.toLocaleString();
            row.querySelectorAll("td")[3].innerText = populationData[year].total15to29.toLocaleString();
            row.querySelectorAll("td")[4].innerText = populationData[year].total30to44.toLocaleString();
            row.querySelectorAll("td")[5].innerText = populationData[year].total45to59.toLocaleString();
            row.querySelectorAll("td")[6].innerText = populationData[year].total60to74.toLocaleString();
            row.querySelectorAll("td")[7].innerText = populationData[year].total75toMore.toLocaleString();
        }
    });

    
    let firstRow = document.querySelector("tbody tr") || document.querySelector("tr"); 
    let cells = firstRow.querySelectorAll("td");

    let data = Array.from(cells).map(cell => cell.textContent.replace(/\s/g, '')).map(Number);

    console.log("Données extraites :", data);

    if (data.length < 8) {
        console.error("Format inattendu des données !");
    } else {
        let populationTotale = data[1];
        let effectifs = data.slice(2);

        let agesMoyens = [7, 22, 37, 52, 67, 80];

        let sommePonderee = effectifs.reduce((sum, effectif, index) => sum + effectif * agesMoyens[index], 0);
        let ageMoyen = sommePonderee / populationTotale;

        console.log("Âge moyen :", ageMoyen.toFixed(2));
        document.getElementById("AverageAge").textContent = ageMoyen.toFixed(2);
    }
    
}

async function fetchNeighborhoodPopulationData(department, city) {
    try {
        const response = await fetch(`http://localhost:5000/api/EvolPop`);
        const data = await response.json();

        let populationData = [];

        for (const key in data) {
            if (data.hasOwnProperty(key) && key.includes(normalizeString(department))) {
                for (const collection of data[key]) {
                    if (normalizeString(collection["Libelle commune ou ARM"]) === normalizeString(city) && String(collection["Annee"]) === "2021") {
                        populationData.push(collection);
                    }
                }
            }
        }
        return populationData;
    } catch (error) {
        console.error('Erreur lors de la récupération des données de population:', error);
        return {};
    }
}

async function fillNeighborhoodPopulationTable(department, city) {
    const neighborhoodPopulationData = await fetchNeighborhoodPopulationData(department, city);

    const tableBody = document.querySelector('#neighborhoodPopulationTable tbody');
    tableBody.innerHTML = '';

    let i = 0;
    while (neighborhoodPopulationData[i] && neighborhoodPopulationData[i]["Libelle de l'IRIS"]) {
        const row = document.createElement('tr');

        const neighborhoodCell = document.createElement('td');
        neighborhoodCell.textContent = neighborhoodPopulationData[i]["Libelle de l'IRIS"];
        row.appendChild(neighborhoodCell);

        // Calcul de la population totale
        const totalPopulation =
            Math.round(neighborhoodPopulationData[i]['Pop 0-14 ans']) +
            Math.round(neighborhoodPopulationData[i]['Pop 15-29 ans']) +
            Math.round(neighborhoodPopulationData[i]['Pop 30-44 ans']) +
            Math.round(neighborhoodPopulationData[i]['Pop 45-59 ans']) +
            Math.round(neighborhoodPopulationData[i]['Pop 60-74 ans']) +
            Math.round(neighborhoodPopulationData[i]['Pop 75 ans ou plus']);

        const totalPopulationCell = document.createElement('td');
        totalPopulationCell.textContent = totalPopulation.toLocaleString();
        row.appendChild(totalPopulationCell);

        const ageGroup0_14Cell = document.createElement('td');
        ageGroup0_14Cell.textContent = Math.round(neighborhoodPopulationData[i]['Pop 0-14 ans']).toLocaleString();
        row.appendChild(ageGroup0_14Cell);

        const ageGroup15_29Cell = document.createElement('td');
        ageGroup15_29Cell.textContent = Math.round(neighborhoodPopulationData[i]['Pop 15-29 ans']).toLocaleString();
        row.appendChild(ageGroup15_29Cell);

        const ageGroup30_44Cell = document.createElement('td');
        ageGroup30_44Cell.textContent = Math.round(neighborhoodPopulationData[i]['Pop 30-44 ans']).toLocaleString();
        row.appendChild(ageGroup30_44Cell);

        const ageGroup45_59Cell = document.createElement('td');
        ageGroup45_59Cell.textContent = Math.round(neighborhoodPopulationData[i]['Pop 45-59 ans']).toLocaleString();
        row.appendChild(ageGroup45_59Cell);

        const ageGroup60_74Cell = document.createElement('td');
        ageGroup60_74Cell.textContent = Math.round(neighborhoodPopulationData[i]['Pop 60-74 ans']).toLocaleString();
        row.appendChild(ageGroup60_74Cell);

        const ageGroup75PlusCell = document.createElement('td');
        ageGroup75PlusCell.textContent = Math.round(neighborhoodPopulationData[i]['Pop 75 ans ou plus']).toLocaleString();
        row.appendChild(ageGroup75PlusCell);

        tableBody.appendChild(row);

        i++;
    }
}

async function fetchPrixImmoData(department, cityName) {
    try {
        const response = await fetch(`http://localhost:5000/api/EvolPrixImmo`);
        const data = await response.json();
        

        let prixImmoByYear = {};

        for (const key in data) {
            if (data.hasOwnProperty(key) && key.includes(normalizeString(department))) {
                for (const collection of data[key]) {
                    if (normalizeString(collection["Villes"]) === normalizeString(cityName)) {
                        const year = collection["Annee"];

                        if (!prixImmoByYear[year]) {
                            
                            prixImmoByYear[year] = {
                                PrixMoyen: 0,
                                Prixm2Moyen: 0,
                                SurfaceMoy: 0,
                            };
                        }
                        prixImmoByYear[year].PrixMoyen += Math.round(collection["PrixMoyen"]);
                        prixImmoByYear[year].Prixm2Moyen += Math.round(collection["Prixm2Moyen"]);
                        prixImmoByYear[year].SurfaceMoy += Math.round(collection["SurfaceMoy"]);
                    }
                }
            }
        }

        return prixImmoByYear;
    } catch (error) {
        console.error('Erreur lors de la récupération des données de population:', error);
        return {};
    }
}

async function fillPrixImmoTable(department, cityName) {
    const prixImmoData = await fetchPrixImmoData(department, cityName);
    const tableBody = document.getElementById("TablePrixImmoCityName");
    

    // Parcourir toutes les lignes du tableau
    const rows = tableBody.querySelectorAll("tr");
    rows.forEach(row => {
        const year = row.querySelector("td").innerText;
        if (prixImmoData[year]) {
            row.querySelectorAll("td")[1].innerText = prixImmoData[year].PrixMoyen.toLocaleString();
            row.querySelectorAll("td")[2].innerText = prixImmoData[year].Prixm2Moyen.toLocaleString();
            row.querySelectorAll("td")[3].innerText = prixImmoData[year].SurfaceMoy.toLocaleString();
        }
    });
}

async function fetchLocativeTension(cityName) {
    
    try {
        const response = await fetch(`http://localhost:5000/api/TensionLocative`);
        const data = await response.json();

        for (const key in data) {
            for (const collection of data[key]) {
                if (normalizeString(collection["Nom"]) === normalizeString(cityName)) {
                    const locTention = collection["Tension locative"];
                    return locTention;
                }
            }
        }

    } catch (error) {
        console.error('Erreur lors de la récupération des données de population:', error);
        return {};
    }
}

export async function updateValues() {
    let typeOfPropertyValue = document.getElementById("TypeOfPropertyValue");
    let costSquare = document.getElementById("CostSquareValue");
    let nbPiecesValue = document.getElementById("NbPiecesValue");
    let surfaceValue = document.getElementById("SurfaceValue");
    let RentValue = document.getElementById("RentValue");
    let cityValue = document.getElementById("CityValue");
    let Population = document.getElementById("Population");
    let StudentsRate = document.getElementById("StudentsRate");
    let UnemployedRate = document.getElementById("UnemployedRate");
    let yieldValue = document.getElementById("YieldValue");
    let cityDescriptionValue = document.querySelector(".CityDescriptionValue");
    let vacantsCommodations = document.getElementById("VacantsCommodationsRate");
    let LocativeTension = document.getElementById("LocativeTension");

    typeOfPropertyValue.innerText = sessionStorage.getItem("propertyType") || "Non spécifié";
    nbPiecesValue.innerText = (sessionStorage.getItem("PiecesNumberUsersInputValue") || "0") + " Pièces";
    surfaceValue.innerText = (sessionStorage.getItem("SurfaceUserInputValue") || "0") + " M²";

    const lat = sessionStorage.getItem("OSMLatitude");
    const lon = sessionStorage.getItem("OSMLongitude");

    const city = await getCityFromCoords(lat, lon);
    const department = await getDepartementFromCoordinates(lat, lon);
    cityValue.innerText = city;

    const data = await fetchRentabiliteData(department, city, typeOfPropertyValue.innerText);

    costSquare.innerText = Number(data.pricePerSquareMeter).toLocaleString("fr-FR") + " €";
    RentValue.innerText = Number(data.rentPerSquareMeter).toLocaleString("fr-FR") + " €";
    yieldValue.innerText = (data.yield * 100).toFixed(2) + " %";
    Population.innerText = parseInt(data.population).toLocaleString();
    StudentsRate.innerText = (data.studentsRate * 100).toFixed(2) + "%";
    UnemployedRate.innerText = (data.unemploymentRate * 100).toFixed(2) + "%";
    
    vacantsCommodations.innerText = await fetchVacantsAcommodationsData(department, city) + " %"

    fillPopulationTable(department, city);
    fillPrixImmoTable(department, city);

    fillNeighborhoodCostRentTable(department, city);
    fillNeighborhoodPopulationTable(department, city);

    LocativeTension.innerText = await fetchLocativeTension(city)

}

updateValues();
