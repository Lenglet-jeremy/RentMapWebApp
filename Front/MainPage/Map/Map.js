const amenityConfig = {
    'default': { display: true, color: '#000000' },
    'townhall': { display: true, color: '#478295' }, 
    'restaurant': { display: false, color: '#FF0000' }, // Rouge
    'cafe': { display: false, color: '#00FF00' },       // Vert
    'bar': { display: false, color: '#0000FF' },        // Bleu
    'fast_food': { display: false, color: '#FFA500' },  // Orange
    'pub': { display: false, color: '#800080' },        // Violet
    'hotel': { display: false, color: '#FFFF00' },      // Jaune
    'motel': { display: false, color: '#808080' },      // Gris (non affiché)
    'guest_house': { display: false, color: '#FFC0CB' }, // Rose
    'bakery': { display: false, color: '#FF69B4' },     // Rose foncé
    'convenience': { display: false, color: '#008000' }, // Vert foncé
    'supermarket': { display: false, color: '#00FFFF' }, // Cyan
    'pharmacy': { display: false, color: '#FF1493' },    // Rose vif
    'hospital': { display: false, color: '#DC143C' },   // Cramoisi
    'clinic': { display: false, color: '#B22222' },     // Rouge brique
    'dentist': { display: false, color: '#FF4500' },    // Orange foncé
    'doctors': { display: false, color: '#FF6347' },    // Tomato
    'school': { display: false, color: '#8B4513' },     // Brun
    'university': { display: false, color: '#FFD700' },  // Or
    'college': { display: false, color: '#DAA520' },    // Or foncé
    'prep_school': { display: false, color: '#CD853F' }, // Peru
    'library': { display: false, color: '#DAA520' },     // Or foncé
    'museum': { display: false, color: '#800000' },     // Marron
    'theatre': { display: false, color: '#A52A2A' },    // Brun foncé
    'cinema': { display: false, color: '#DEB887' },     // Brun clair
    'fuel': { display: false, color: '#5F9EA0' },       // Bleu-vert
    'parking': { display: false, color: '#778899' },    // Gris-bleu
    'parking_space': { display: false, color: '#696969' }, // Gris foncé
    'bicycle_parking': { display: false, color: '#1E90FF' }, // Bleu dodger
    'motorcycle_parking': { display: false, color: '#87CEEB' }, // Bleu ciel
    'parking_entrance': { display: false, color: '#6495ED' }, // Bleu ciel foncé
    'ferry_terminal': { display: false, color: '#00BFFF' }, // Deep Sky Blue
    'bank': { display: false, color: '#B0C4DE' },       // Bleu clair
    'atm': { display: false, color: '#ADD8E6' },        // Bleu très clair
    'post_office': { display: false, color: '#F0E68C' }, // Khaki
    'post_box': { display: false, color: '#FF4500' },   // Orange foncé
    'park': { display: false, color: '#E6E6FA' },       // Lavande
    'garden': { display: false, color: '#FFF0F5' },     // Lavande clair
    'playground': { display: false, color: '#FFE4E1' }, // Rose pâle
    'sports_centre': { display: false, color: '#D8BFD8' }, // Violet clair
    'subway_entrance': { display: false, color: '#DDA0DD' }, // Prune
    'bus_stop': { display: false, color: '#EE82EE' },    // Violet
    'train_station': { display: false, color: '#DA70D6' }, // Orchidée
    'aerodrome': { display: false, color: '#BA55D3' },   // Violet moyen
    'shopping_centre': { display: false, color: '#9370DB' }, // Violet foncé
    'toilets': { display: false, color: '#8A2BE2' },     // Bleu-violet
    'drinking_water': { display: false, color: '#5F9EA0' }, // Bleu-vert
    'charging_station': { display: false, color: '#7FFFD4' }, // Aigue-marine
    'bureau_de_change': { display: false, color: '#40E0D0' }, // Turquoise
    'community_centre': { display: false, color: '#6495ED' }, // Bleu ciel
    'fountain': { display: false, color: '#00CED1' },     // Turquoise foncé
    'bench': { display: false, color: '#2E8B57' },       // Vert mer
    'clock': { display: false, color: '#FFD700' },      // Or
    'waste_basket': { display: false, color: '#8B4513' }, // Brun
    'bicycle_rental': { display: false, color: '#1E90FF' }, // Bleu dodger
    'taxi': { display: false, color: '#FFFF00' },        // Jaune
    'ice_cream': { display: false, color: '#FFB6C1' },  // Rose clair
    'recycling': { display: false, color: '#2E8B57' },  // Vert mer
    'public_bookcase': { display: false, color: '#8B4513' }, // Brun
    'monastery': { display: false, color: '#A9A9A9' },  // Gris foncé
    'bicycle_repair_station': { display: false, color: '#FF4500' }, // Orange foncé
    'nightclub': { display: false, color: '#4B0082' },  // Indigo
    'car_sharing': { display: false, color: '#FF6347' }, // Tomato
    'vending_machine': { display: false, color: '#D2691E' }, // Chocolat
    'shower': { display: false, color: '#1E90FF' }, // Bleu dodger
    'place_of_worship': { display: false, color: '#8A2BE2' }, // Bleu-violet
    'waste_disposal': { display: false, color: '#8B4513' }, // Brun
    'marketplace': { display: false, color: '#FFD700' }, // Or
    'water_point': { display: false, color: '#00CED1' }, // Turquoise foncé
    'social_facility': { display: false, color: '#FF6347' }, // Tomato
    'shelter': { display: false, color: '#FF4500' }, // Orange foncé
    'childcare': { display: false, color: '#FFB6C1' }, // Rose clair
    'device_charging_station': { display: false, color: '#7FFFD4' }, // Aigue-marine
    'parcel_locker': { display: false, color: '#6495ED' }, // Bleu ciel foncé
    'handwashing': { display: false, color: '#00CED1' }, // Turquoise foncé
    'photo_booth': { display: false, color: '#FFD700' }, // Or
    'ticket_validator': { display: false, color: '#FF4500' }, // Orange foncé
    'dojo': { display: false, color: '#FF4500' }, // Orange foncé
    'veterinary': { display: false, color: '#2E8B57' }, // Vert mer
    'food_court': { display: false, color: '#FFD700' }, // Or
    'social_centre': { display: false, color: '#FF6347' }, // Tomato
    'car_wash': { display: false, color: '#1E90FF' }, // Bleu dodger
    'kindergarten': { display: false, color: '#FFB6C1' }, // Rose clair
    'weighbridge': { display: false, color: '#A9A9A9' }, // Gris foncé
    'music_school': { display: false, color: '#FFD700' }, // Or
    'police': { display: false, color: '#1E90FF' }, // Bleu dodger
    'compressed_air': { display: false, color: '#B0E0E6' }, // Bleu très clair
    'driving_school': { display: false, color: '#FF4500' }, // Orange foncé
    'arts_centre': { display: false, color: '#FF69B4' }, // Rose foncé
    'personal_service': { display: false, color: '#FFDAB9' }, // Peach puff
    'grit_bin': { display: false, color: '#8B4513' }, // Brun
    'coworking_space': { display: false, color: '#D2B48C' }, // Tan
    'default': { display: false, color: '#888888' },     // Gris par défaut
    'vacuum_cleaner': { display: false, color: '#A9A9A9' }, // Gris foncé
    'art_school': { display: false, color: '#FFD700' }, // Or
    'language_school': { display: false, color: '#FF4500' }, // Orange foncé
    'events_venue': { display: false, color: '#FF69B4' }, // Rose foncé
    'courthouse': { display: false, color: '#8B4513' }, // Brun
    'money_transfer': { display: false, color: '#2E8B57' }, // Vert mer
};

const amenityTranslations = {
    'restaurant': 'Restaurant',
    'cafe': 'Café',
    'bar': 'Bar',
    'fast_food': 'Fast-food',
    'pub': 'Pub',
    'hotel': 'Hôtel',
    'motel': 'Motel',
    'guest_house': 'Maison d\'hôtes',
    'bakery': 'Boulangerie',
    'convenience': 'Supérette',
    'supermarket': 'Super marché',
    'pharmacy': 'Pharmacie',
    'hospital': 'Hôpital',
    'clinic': 'Clinique',
    'dentist': 'Dentiste',
    'doctors': 'Médecins',
    'school': 'École',
    'university': 'Université',
    'college': 'Collège',
    'prep_school': 'École préparatoire',
    'library': 'Bibliothèque',
    'museum': 'Musée',
    'theatre': 'Théâtre',
    'cinema': 'Cinéma',
    'fuel': 'Station-service',
    'parking': 'Parking',
    'parking_space': 'Place de parking',
    'bicycle_parking': 'Parking à vélos',
    'motorcycle_parking': 'Parking moto',
    'parking_entrance': 'Entrée de parking',
    'ferry_terminal': 'Terminal de ferry',
    'bank': 'Banque',
    'atm': 'Distributeur de billets',
    'post_office': 'Bureau de poste',
    'post_box': 'Boîte aux lettres',
    'park': 'Parc',
    'garden': 'Jardin',
    'playground': 'Aire de jeux',
    'sports_centre': 'Centre sportif',
    'subway_entrance': 'Entrée de métro',
    'bus_stop': 'Arrêt de bus',
    'train_station': 'Gare',
    'aerodrome': 'Aérodrome',
    'shopping_centre': 'Centre commercial',
    'toilets': 'Toilettes',
    'drinking_water': 'Eau potable',
    'charging_station': 'Station de recharge',
    'bureau_de_change': 'Bureau de change',
    'community_centre': 'Centre communautaire',
    'fountain': 'Fontaine',
    'bench': 'Banc',
    'clock': 'Horloge',
    'waste_basket': 'Poubelle',
    'bicycle_rental': 'Location de vélos',
    'taxi': 'Taxi',
    'ice_cream': 'Glacier',
    'recycling': 'Recyclage',
    'public_bookcase': 'Bibliothèque publique',
    'monastery': 'Monastère',
    'bicycle_repair_station': 'Station de réparation de vélos',
    'nightclub': 'Boîte de nuit',
    'car_sharing': 'Partage de voiture',
    'vending_machine': 'Distributeur automatique',
    'shower': 'Douche',
    'place_of_worship': 'Lieu de culte',
    'waste_disposal': 'Déchetterie',
    'marketplace': 'Marché',
    'water_point': 'Point d\'eau',
    'social_facility': 'Établissement social',
    'shelter': 'Abri',
    'childcare': 'Garde d\'enfants',
    'device_charging_station': 'Station de recharge d\'appareils',
    'parcel_locker': 'Consignes',
    'handwashing': 'Lavabo',
    'photo_booth': 'Photomaton',
    'ticket_validator': 'Validateur de tickets',
    'dojo': 'Dojo',
    'veterinary': 'Vétérinaire',
    'food_court': 'Cour de restauration',
    'social_centre': 'Centre social',
    'car_wash': 'Lavage auto',
    'kindergarten': 'Jardin d\'enfants',
    'weighbridge': 'Pont-bascule',
    'music_school': 'École de musique',
    'police': 'Police',
    'compressed_air': 'Air comprimé',
    'driving_school': 'Auto-école',
    'arts_centre': 'Centre d\'arts',
    'personal_service': 'Service personnel',
    'grit_bin': 'Bac à sel',
    'coworking_space': 'Espace de coworking',
    'vacuum_cleaner': 'Aspirateur',
    'art_school': 'École d\'art',
    'language_school': 'École de langues',
    'events_venue': 'Lieu d\'événements',
    'courthouse': 'Tribunal',
    'money_transfer': 'Transfert d\'argent',
    'townhall': 'Mairie',
};

let map;
let centerMarker;
let markers = [];
let lastValidLat = 50.523110;
let lastValidLon = 2.625950;
let lastAddress = "";

const defaultLatitude = 50.523110;
const defaultLongitude = 2.625950;
const defautKmRadius = 10;
const defaultRadius = defautKmRadius * 1000; // Rayon par défaut en mètres
const amenityLimit = 10;

function getSelectedAmenities() {
    const checkboxes = document.querySelectorAll('#amenityCheckboxes input[type="checkbox"]');
    const selectedAmenities = {};

    checkboxes.forEach(checkbox => {
        selectedAmenities[checkbox.value] = checkbox.checked;
    });

    return selectedAmenities;
}

async function fetchAmenities(lat, lon, radius = defaultRadius) {
    const overpassQuery = `
        [out:json];
        (
            node(around:${radius}, ${lat}, ${lon})["amenity"];
        );
        out body;
    `;

    const url = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(overpassQuery)}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Erreur HTTP! Statut: ${response.status}`);
        }

        const data = await response.json();
        return data.elements;
    } catch (error) {
        console.error("Erreur lors de la récupération des commodités :", error);
        return [];
    }
}

// Renvoi la clé API de MapBox stocké dans .env
async function fetchMapboxToken() {
    try {
        const response = await fetch('http://localhost:5000/api/mapbox-token');
        if (!response.ok) {
            throw new Error(`Erreur HTTP! Statut: ${response.status}`);
        }
        const data = await response.json();
        return data.accessToken;
    } catch (error) {
        console.error("Erreur lors de la récupération du token Mapbox :", error);
        return null;
    }
}

// Renvoi la distance entre deux coordonnées GPS
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Rayon de la Terre en kilomètres
    // Convertion en radians
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    // Formule de formule de Haversine
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    // Calcul de la distance angulaire
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    // Calcul de la distance finale
    return R * c;
}

// Renvoi les Commodites les plus proche des coordonées utilisateur
function sortAmenitiesByDistance(amenities, userLat, userLon) {
    return amenities.sort((a, b) => {
        const distA = calculateDistance(userLat, userLon, a.lat, a.lon);
        const distB = calculateDistance(userLat, userLon, b.lat, b.lon);
        return distA - distB;
    });
}

async function initializeMap() {
    const token = await fetchMapboxToken();
    if (!token) {
        console.error("Le token Mapbox est manquant");
        return;
    }

    mapboxgl.accessToken = token;

    map = new mapboxgl.Map({
        container: 'Map',
        style: 'mapbox://styles/mapbox/dark-v11',
        // style: 'mapbox://styles/mapbox/navigation-day-v1',
        center: [defaultLongitude, defaultLatitude],
        zoom: 8
    });

    map.addControl(new mapboxgl.NavigationControl());

    centerMarker = new mapboxgl.Marker()
        .setLngLat([defaultLongitude, defaultLatitude])
        .addTo(map);

    map.on('load', () => {
        map.addSource('circle-source', {
            type: 'geojson',
            data: createGeoJSONCircle([defaultLongitude, defaultLatitude], defautKmRadius)
        });

        map.addLayer({
            id: 'circle-outline',
            type: 'line',
            source: 'circle-source',
            paint: {
                'line-color': '#4080FF',
                'line-width': 2,
                'line-opacity': 0.8
            }
        });

        map.addLayer({
            id: 'circle-fill',
            type: 'fill',
            source: 'circle-source',
            paint: {
                'fill-color': '#4080FF',
                'fill-opacity': 0.1
            }
        });

        updateMapWithCurrentValues();
    });

    const amenities = await fetchAmenities(defaultLatitude, defaultLongitude, defaultRadius);
    displayAmenitiesOnMap(map, amenities, defaultLatitude, defaultLongitude, amenityLimit);
}


function updateMapWithCurrentValues() {
    const radiusValue = parseInt(document.getElementById('radius')?.value || defaultRadius / 1000) * 1000;
    const limitValue = parseInt(document.getElementById('amenityLimit')?.value || amenityLimit);
    const addressInput = document.getElementById('Address');

    if (addressInput && addressInput.value.trim() !== "") {
        const currentAddress = addressInput.value.trim();
        if (currentAddress === lastAddress) {
            updateMap(lastValidLat, lastValidLon, radiusValue, limitValue);
        } else {
            geocodeAddress(currentAddress).then(coordinates => {
                if (coordinates) {
                    const { lat, lon } = coordinates;
                    lastValidLat = lat;
                    lastValidLon = lon;
                    lastAddress = currentAddress;
                    updateMap(lat, lon, radiusValue, limitValue);
                }
            });
        }
    } else {
        updateMap(lastValidLat, lastValidLon, radiusValue, limitValue);
    }
}

export async function updateMap(lat, lon, radius = defaultRadius, amenityLimit = 100) {
    if (!map) {
        console.error("La carte n'est pas encore initialisée.");
        return;
    }

    const radiusInKm = radius / 1000;
    if (map.getSource('circle-source')) {
        map.getSource('circle-source').setData(createGeoJSONCircle([lon, lat], radiusInKm));
    } else {
        map.addSource('circle-source', {
            type: 'geojson',
            data: createGeoJSONCircle([lon, lat], radiusInKm)
        });

        map.addLayer({
            id: 'circle-outline',
            type: 'line',
            source: 'circle-source',
            paint: {
                'line-color': '#4080FF',
                'line-width': 2,
                'line-opacity': 0.8
            }
        });

        map.addLayer({
            id: 'circle-fill',
            type: 'fill',
            source: 'circle-source',
            paint: {
                'fill-color': '#4080FF',
                'fill-opacity': 0.1
            }
        });
    }

    markers.forEach(marker => marker.remove());
    markers = [];

    const amenities = await fetchAmenities(lat, lon, radius);
    displayAmenitiesOnMap(map, amenities, lat, lon, amenityLimit);
}

function createGeoJSONCircle(center, radiusInKm) {
    const points = 64;
    const coords = { latitude: center[1], longitude: center[0] };
    const km = radiusInKm;
    const ret = [];
    const distanceX = km / (111.320 * Math.cos(coords.latitude * Math.PI / 180));
    const distanceY = km / 110.574;

    for (let i = 0; i < points; i++) {
        const theta = (i / points) * (2 * Math.PI);
        const x = distanceX * Math.cos(theta);
        const y = distanceY * Math.sin(theta);
        ret.push([coords.longitude + x, coords.latitude + y]);
    }
    ret.push(ret[0]);

    return {
        type: "FeatureCollection",
        features: [{
            type: "Feature",
            geometry: {
                type: "Polygon",
                coordinates: [ret]
            }
        }]
    };
}

const radiusInput = document.getElementById('radius');
if (radiusInput) {
    radiusInput.addEventListener('input', updateMapWithCurrentValues);
}

const amenityLimitInput = document.getElementById('amenityLimit');
if (amenityLimitInput) {
    amenityLimitInput.addEventListener('input', updateMapWithCurrentValues);
}

const amenityCheckboxes = document.getElementById('amenityCheckboxes');
if (amenityCheckboxes) {
    amenityCheckboxes.addEventListener('change', updateMapWithCurrentValues);
}

function displayAmenitiesOnMap(map, amenities, userLat, userLon, amenityLimit) {
    const selectedAmenities = getSelectedAmenities();
    const sortedAmenities = sortAmenitiesByDistance(amenities, userLat, userLon);

    // Filtrer les commodités selon les types sélectionnés et les valeurs 'display' de amenityConfig
    const filteredAmenities = sortedAmenities.filter(amenity => {
        const amenityType = amenity.tags.amenity || 'default';
        const amenityConfigItem = amenityConfig[amenityType] || amenityConfig['default'];
        return selectedAmenities[amenityType] !== false && amenityConfigItem.display;
    });

    const limitedAmenities = filteredAmenities.slice(0, amenityLimit);

    limitedAmenities.forEach(amenity => {
        if (amenity.lat && amenity.lon) {
            const amenityType = amenity.tags.amenity || 'default';
            const amenityConfigItem = amenityConfig[amenityType] || amenityConfig['default'];
            const markerColor = amenityConfigItem.color;
            const amenityName = amenityTranslations[amenityType] || amenityType || "Commodité";

            const marker = new mapboxgl.Marker({ color: markerColor })
                .setLngLat([amenity.lon, amenity.lat])
                .setPopup(new mapboxgl.Popup().setText(amenityName))
                .addTo(map);

            markers.push(marker);
        }
    });
}




async function geocodeAddress(address) {
    const token = await fetchMapboxToken();
    if (!token) {
        console.error("Le token Mapbox est manquant");
        return null;
    }

    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${token}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Erreur HTTP! Statut: ${response.status}`);
        }

        const data = await response.json();
        if (data.features && data.features.length > 0) {
            const [lon, lat] = data.features[0].center;
            return { lat, lon };
        } else {
            console.error("Aucun résultat trouvé pour l'adresse donnée.");
            return null;
        }
    } catch (error) {
        console.error("Erreur lors du géocodage de l'adresse :", error);
        return null;
    }
}

document.getElementById('Address').addEventListener('blur', async function() {
    const address = this.value.trim();
    if (address === "") {
        return;
    }

    const coordinates = await geocodeAddress(address);
    if (coordinates) {
        const { lat, lon } = coordinates;
        lastValidLat = lat;
        lastValidLon = lon;
        lastAddress = address;

        const radiusValue = parseInt(document.getElementById('radius')?.value || defaultRadius / 1000) * 1000;
        const limitValue = parseInt(document.getElementById('amenityLimit')?.value || amenityLimit);
        updateMap(lat, lon, radiusValue, limitValue);

        map.setCenter([lon, lat]);
        centerMarker.setLngLat([lon, lat]);
    }
});

// Ajouter un écouteur pour la touche Entrée
document.getElementById('Address').addEventListener('keydown', async function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Empêche le comportement par défaut (comme soumettre un formulaire)
        
        const address = this.value.trim();
        if (address === "") {
            return;
        }

        const coordinates = await geocodeAddress(address);
        if (coordinates) {
            const { lat, lon } = coordinates;
            lastValidLat = lat;
            lastValidLon = lon;
            lastAddress = address;

            const radiusValue = parseInt(document.getElementById('radius')?.value || defaultRadius / 1000) * 1000;
            const limitValue = parseInt(document.getElementById('amenityLimit')?.value || amenityLimit);
            updateMap(lat, lon, radiusValue, limitValue);

            map.setCenter([lon, lat]);
            centerMarker.setLngLat([lon, lat]);
        }
    }
});

document.getElementById('toggleAmenityList').addEventListener('click', () => {
    const amenityCheckboxes = document.getElementById('amenityCheckboxes');
    if (amenityCheckboxes.children.length === 0) {
        for (const amenity in amenityConfig) {
            const label = document.createElement('label');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.value = amenity;
            checkbox.checked = amenityConfig[amenity].display;
            checkbox.id = `amenity-${amenity}`;

            // Ajouter un écouteur d'événements pour mettre à jour amenityConfig
            checkbox.addEventListener('change', function() {
                amenityConfig[amenity].display = this.checked;
                updateMapWithCurrentValues(); // Mettre à jour la carte avec les nouvelles valeurs
            });

            const amenityName = amenityTranslations[amenity] || amenity.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase());

            label.appendChild(checkbox);
            label.appendChild(document.createTextNode(amenityName));
            amenityCheckboxes.appendChild(label);
            amenityCheckboxes.appendChild(document.createElement('br'));
        }
    }

    amenityCheckboxes.style.display = amenityCheckboxes.style.display === 'none' || amenityCheckboxes.style.display === '' ? 'block' : 'none';
});


initializeMap();
