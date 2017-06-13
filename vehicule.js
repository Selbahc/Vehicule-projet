function Vehicule(modele, km, premium, moteur, couleur, voyage) {
  this.modele = modele;
  this.km = km;

  this.premium = premium;
  if (premium == "premium" || premium === true || premium == "oui") {
    this.moteur = moteur;
    this.couleur = couleur;
  } else {
    this.moteur = "Essence";
    this.couleur = "Blanche";
  }

  this.voyage = function(km) {
    this.km += km;
  }

}

var tesla = new Vehicule("Tesla Model S", 0, "premium", "electrique", "noire");
tesla.voyage(335);
console.log(tesla);
