function printAutoInfo(){
    document.getElementById("proba").innerHTML="";
}
//print autoinfo
//dodati auto.marka
//id proba nije na buttonu, paragraf ispd buttona

var x=5;

function Proba(){
    console.log("Auto: "+ auto.marka + " " + auto.model);
    console.log("Stanje:" + auto.stanje);
    auto.printInfo();
}

var auto={
    marka: "Volkswagen",
    model: "golf",
    stanje:"polovan",
    printInfo: function(){
        document.write("Ovo je metod auto");
    }
}
auto.mb="123";

