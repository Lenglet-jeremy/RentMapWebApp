const express = require("express");
const cors = require("cors");
const fs = require('fs');
const path = require('path');

const { spawn } = require("child_process");

require('dotenv').config();

// Définir un seul port
const PORT = process.env.PORT || 5000;
const dataFolder = "../../RentabiliteBiensDistance"

const app = express();
const MAPBOX_TOKEN = process.env.MAPBOX_TOKEN;

app.use(cors());
// Servir les fichiers statiques
app.use(express.static('public'));


const directoryPath = path.join(__dirname, 'Documents');

console.log("Démarrage du serveur...");

app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});


function readAllJsonFilesWithPattern(directory, pattern) {
  const files = fs.readdirSync(directory);

  const results = {};
  
  
  const filteredFiles = files.filter(file => file.endsWith(pattern) && file.endsWith('.json'));
  
  filteredFiles.forEach(file => {
    const filePath = path.join(directory, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    try {
      results[file] = JSON.parse(fileContent);
    } catch (error) {
      console.error(`Erreur lors du parsing du fichier ${file}:`, error);
    }
  });
  
  return results;
}

app.get('/data', (req, res) => {
  res.json({
      years: ['2018', '2019', '2020', '2021', '2022'],
      prices: [3200, 3400, 3600, 3800, 4000]
  });
});

app.get("/api/Refined", (req, res) => {
  try {
    const allJsonData = readAllJsonFilesWithPattern(dataFolder, "Refined.json");
    res.json(allJsonData);
  } catch (error) {
    console.error("Erreur lors de la lecture des fichiers JSON :", error);
    res.status(500).json({ error: "Erreur lors de la récupération des données JSON." });
  }
});

app.get("/api/Rentabilite", (req, res) => {
  try {
    const allJsonData = readAllJsonFilesWithPattern(dataFolder, "Rentabilite.json");
    res.json(allJsonData);
  } catch (error) {
    console.error("Erreur lors de la lecture des fichiers JSON :", error);
    res.status(500).json({ error: "Erreur lors de la récupération des données JSON." });
  }
});

app.get("/api/EvolPop", (req, res) => {
  try {
    const allJsonData = readAllJsonFilesWithPattern(dataFolder, "EvolPopulation.json");
    res.json(allJsonData);
  } catch (error) {
    console.error("Erreur lors de la lecture des fichiers JSON :", error);
    res.status(500).json({ error: "Erreur lors de la récupération des données JSON." });
  }
});

app.get("/api/EvolPrixImmo", (req, res) => {
  try {
    const allJsonData = readAllJsonFilesWithPattern(dataFolder, "EvolPrixImmo.json");
    res.json(allJsonData);
  } catch (error) {
    console.error("Erreur lors de la lecture des fichiers JSON :", error);
    res.status(500).json({ error: "Erreur lors de la récupération des données JSON." });
  }
});

app.get("/api/TauxHabitationVacants", (req, res) => {
  try {
    const allJsonData = readAllJsonFilesWithPattern(dataFolder, "TauxHabitationVacants.json");
    res.json(allJsonData);
  } catch (error) {
    console.error("Erreur lors de la lecture des fichiers JSON :", error);
    res.status(500).json({ error: "Erreur lors de la récupération des données JSON." });
  }
});

app.get("/api/TensionLocative", (req, res) => {
  try {
    const allJsonData = readAllJsonFilesWithPattern(dataFolder, "TensionLocative.json");
    res.json(allJsonData);
  } catch (error) {
    console.error("Erreur lors de la lecture des fichiers JSON :", error);
    res.status(500).json({ error: "Erreur lors de la récupération des données JSON." });
  }
});

app.get("/run-python", (req, res) => {
  const city = req.query.city || "Rennes";
  console.log("Ville reçue du frontend :", city);

  if (city !== "Coordonnées non disponibles") {
    console.log("Exécution du fichier python");

    // const pythonProcess = spawn("python", [path.join(__dirname, "APIChatGPTDescriptionVille.py"), city]);

    let dataString = "";

    pythonProcess.stdout.on("data", (data) => {
      dataString += data.toString();
    });

    pythonProcess.stderr.on("data", (data) => {
      console.error(`Erreur : ${data}`);
    });

    pythonProcess.on("close", () => {
      try {
        const result = JSON.parse(dataString.trim());
        res.json(result);
      } catch (error) {
        res.status(500).json({ error: "Erreur lors de la récupération de la description." });
      }
    });
  }

});

app.get("/api/mapbox-token", (req, res) => {
  res.json({ accessToken: process.env.MAPBOX_TOKEN });
});

app.get("/api/departements", (req, res) => {
  const filePath = path.join(__dirname, "public", "departements.geojson");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Erreur de lecture du fichier GeoJSON :", err);
      return res.status(500).json({ error: "Erreur lors de la récupération du fichier GeoJSON." });
    }

    res.setHeader("Content-Type", "application/json");
    res.send(data);
  });
});

app.get("/api/communes", (req, res) => {
  const filePath = path.join(__dirname, "public", "communes-5m.geojson");
  // const filePath = path.join(__dirname, "public", "communes-1000m.geojson");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Erreur de lecture du fichier GeoJSON :", err);
      return res.status(500).json({ error: "Erreur lors de la récupération du fichier GeoJSON." });
    }

    res.setHeader("Content-Type", "application/json");
    res.send(data);
  });
});

app.get("/api/quartiers", (req, res) => {
  const filePath = path.join(__dirname, "public", "iris.geojson");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Erreur de lecture du fichier GeoJSON :", err);
      return res.status(500).json({ error: "Erreur lors de la récupération du fichier GeoJSON." });
    }

    res.setHeader("Content-Type", "application/json");
    res.send(data);
  });
});


app.get("/api/evolPopulation", (req, res) => {
  
  try {
    const allJsonData = readAllJsonFiles(dataFolder);
    res.json(allJsonData);
  } catch (error) {
    console.error("Erreur lors de la lecture des fichiers JSON :", error);
    res.status(500).json({ error: "Erreur lors de la récupération des données JSON." });
  }
});

app.get("/api/autocomplete", async (req, res) => {
  const query = req.query.query;
  if (!query) return res.status(400).json({ error: "Query parameter is required" });

  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query)}.json?access_token=${MAPBOX_TOKEN}&autocomplete=true&types=address&limit=5&country=fr&bbox=-5.1,41.3,9.7,51.1`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la requête à Mapbox" });
  }
});




