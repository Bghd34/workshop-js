
function Personne(nom,prenom,pseudo) {
    this.nom = nom ;
    this.prenom = prenom ;
    this.pseudo =pseudo;


    this.getNomComplet = function () {
       const p1=[this.nom=nom,this.prenom=prenom,this.pseudo=pseudo]
        return p1  ;
    }
    this.afficherPersonne = function (){
        const p2=[this.nom=nom,this.prenom=prenom,this.pseudo=pseudo]
        return p2  ;
    }
}

/*var Medor = new chien('Médor');
alert(Medor.nom);
alert(Medor["nom"]);*/

var jules = new Personne("jules","LEMAIRE","jules77");

var paul = new Personne("paul","LEMAIRE","paul44");

console.log(jules.nom);
console.log(jules.prenom);
console.log(jules.pseudo);
console.log(jules.getNomComplet());

console.log(paul.nom);
console.log(paul.prenom);
console.log(paul.pseudo);
console.log(paul.afficherPersonne());

jules.pseudo="jules44";

console.log(jules.getNomComplet());
