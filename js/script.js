// //affichage de la date
let ladate = new Date();
let year = ladate.getFullYear();
let month = ladate.getMonth() + 1;
let day = ladate.getDate();
document.getElementById("date").innerHTML = "Nous sommes le " + day + "/" + month + "/" + year;

function pause(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function afficherHeure() {
  while (true) {
    await pause(1000);
    let cejour = new Date();
    let heure = ("0" + cejour.getHours()).slice(-2) + ":" + ("0" + cejour.getMinutes()).slice(-2) + ":" + ("0" + cejour.getSeconds()).slice(-2);
    document.getElementById('heure').innerHTML = "Il est " + heure;
  }
}

afficherHeure();

// éphémeride = lever
fetch("https://www.prevision-meteo.ch/services/json/toulouse")
  .then(function (data) {
    console.log(data);
    return data.json();
  })
  .then(function (obj) {
    console.log(obj);
    document.getElementById("lever").textContent = obj.city_info.sunrise;
  })
  .catch(function (error) {
    console.log(error);
  })
// éphémeride = coucher
fetch("https://www.prevision-meteo.ch/services/json/toulouse")
  .then(function (data) {
    console.log(data);
    return data.json();
  })
  .then(function (obj) {
    console.log(obj);
    document.getElementById("coucher").textContent = obj.city_info.sunset;
  })
  .catch(function (error) {
    console.log(error);
  })




// -----------
let st = fetch("https://nominis.cef.fr/json/nominis.php")
  .then(function (data) {
    return data.json();
  })
  .then(function (obj) {

    const GSt = document.getElementById("St");
    const saints = obj.response.prenoms.majeurs;
    for (let saint in saints) {
      GSt.innerHTML += " " + saint;
    }
  })

  .catch(function (error) {
    console.log(error);
    console.log("cavapas");
  });

// ---------------------------

//image jour 0
fetch("https://www.prevision-meteo.ch/services/json/toulouse")
  .then(function (data) {
    console.log(data);
    return data.json();
  })
  .then(function (obj) {
    console.log(obj);
    document.getElementById("img_jour0").src = obj.fcst_day_0.icon;
  })
  .catch(function (error) {
    console.log(error);
  })

//image jour 1
fetch("https://www.prevision-meteo.ch/services/json/toulouse")
  .then(function (data) {
    console.log(data);
    return data.json();
  })
  .then(function (obj) {
    console.log(obj);
    document.getElementById("img_jour1").src/*ajouter ici le chemin pour accéder à la suite de l'objet */ = obj.fcst_day_1.icon;
  })
  .catch(function (error) {
    console.log(error);
  })
//image jour 2
fetch("https://www.prevision-meteo.ch/services/json/toulouse")
  .then(function (data) {
    console.log(data);
    return data.json();
  })
  .then(function (obj) {
    console.log(obj);
    document.getElementById("img_jour2").src = obj.fcst_day_2.icon;
  })
  .catch(function (error) {
    console.log(error);
  })

// ---------------------------

// nom du jour 0
fetch("https://www.prevision-meteo.ch/services/json/toulouse")
  .then(function (data) {
    console.log(data);
    return data.json();
  })
  .then(function (obj) {
    console.log(obj);
    document.getElementById("jour0").textContent /*ajouter ici le chemin pour accéder à la suite de l'osbjet */ = obj.fcst_day_0.day_long;
  })
  .catch(function (error) {
    console.log(error);
  })
// nom du jour 1
fetch("https://www.prevision-meteo.ch/services/json/toulouse")
  .then(function (data) {
    console.log(data);
    return data.json();
  })
  .then(function (obj) {
    console.log(obj);
    document.getElementById("jour1").textContent = obj.fcst_day_1.day_long;
  })
  .catch(function (error) {
    console.log(error);
  })
// nom du jour 2
fetch("https://www.prevision-meteo.ch/services/json/toulouse")
  .then(function (data) {
    console.log(data);
    return data.json();
  })
  .then(function (obj) {
    console.log(obj);
    document.getElementById("jour2").textContent = obj.fcst_day_2.day_long;
  })
  .catch(function (error) {
    console.log(error);
  })

// ---------------------------

// meteo du jour0
fetch("https://www.prevision-meteo.ch/services/json/toulouse")
  .then(function (data) {
    console.log(data);
    return data.json();
  })
  .then(function (obj) {
    console.log(obj);
    document.getElementById("meteo_jour0").textContent = obj.fcst_day_0.condition;
  })
  .catch(function (error) {
    console.log(error);
  })
// meteo du jour1
fetch("https://www.prevision-meteo.ch/services/json/toulouse")
  .then(function (data) {
    console.log(data);
    return data.json();
  })
  .then(function (obj) {
    console.log(obj);
    document.getElementById("meteo_jour1").textContent = obj.fcst_day_1.condition;
  })
  .catch(function (error) {
    console.log(error);
  })
// meteo du jour2
fetch("https://www.prevision-meteo.ch/services/json/toulouse")
  .then(function (data) {
    console.log(data);
    return data.json();
  })
  .then(function (obj) {
    console.log(obj);
    document.getElementById("meteo_jour2").textContent = obj.fcst_day_2.condition;
  })
  .catch(function (error) {
    console.log(error);
  })

// ---------------------------

// température moyenne du jour0
fetch("https://www.prevision-meteo.ch/services/json/toulouse")
  .then(function (data) {
    console.log(data);
    return data.json();
  })
  .then(function (obj) {
    console.log(obj);
    let tempMoy = Math.round((obj.fcst_day_0.tmax + obj.fcst_day_0.tmin) / 2);
    document.getElementById("moy").textContent = tempMoy;
  })
  .catch(function (error) {
    console.log(error);
  })
// température max du jour0
fetch("https://www.prevision-meteo.ch/services/json/toulouse")
  .then(function (data) {
    console.log(data);
    return data.json();
  })
  .then(function (obj) {
    console.log(obj);
    document.getElementById("max").textContent = obj.fcst_day_0.tmax;
  })
  .catch(function (error) {
    console.log(error);
  })
// température mini du jour0
fetch("https://www.prevision-meteo.ch/services/json/toulouse")
  .then(function (data) {
    console.log(data);
    return data.json();
  })
  .then(function (obj) {
    console.log(obj);
    document.getElementById("min").textContent = obj.fcst_day_0.tmin;
  })
  .catch(function (error) {
    console.log(error);
  })


