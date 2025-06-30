class parent {
    constructor(fName){
        this.fName = "Md Mahim Islam"
    }
}

class child extends parent{
    constructor(name) {
        super();
        this.name = name;
        
    }
}
const baby = new child("Ayat");
const baby2 = new child("Ayan");
console.log(baby);
console.log(baby2);