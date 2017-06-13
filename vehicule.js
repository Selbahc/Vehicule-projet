function Vehicule(modele, km, premium, moteur, couleur, voyage) {
  this.modele = modele;
  this.km = km;

  this.premium = premium;
  if (premium == "premium" || premium === true || premium == "oui") {
    this.moteur = moteur;
    this.couleur = couleur;
  } else {
    this.moteur = "essence";
    this.couleur = "blanche";
  }

  this.voyage = function(km) {
    this.km += km;
  }

}

var tesla = new Vehicule("Tesla Model S", 0, "premium", "electrique", "noire");
tesla.voyage(335);

var peugeot107 = new Vehicule("Peugeot 107", 123000, "non");
peugeot107.voyage(545);
peugeot107.voyage(523);

var toyotaPrius = new Vehicule("Toyota Prius", 22000, "oui", "hybride", "grise");

var bmwI3 = new Vehicule("BMW i3", 0, true, "electrique", "noire et blanche");
bmwI3.voyage(246);

var renaultEspace = new Vehicule("Renault Espace", 80037, false);


console.log(tesla);
console.log(peugeot107);
console.log(toyotaPrius);
console.log(bmwI3);
console.log(renaultEspace);
