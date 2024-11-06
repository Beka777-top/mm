var hello = "ойын";
alert("Сәлем, біздің ойынға қош келдің!!!");

var question = prompt( "Біздің ойынды ойнағың келема?");
if (question == "ия" || question == "Ия" || question =="кнч") {
    alert("онда жалғастырайық =)") 

    var questionFirst = prompt("Сіз қиылысқа тап боладыңыз." + "\n" +  "Сізде екі жол солға немесе оңға қай жақа барасыз?")
if (questionFirst == "оңға" || questionFirst == "Оңға"){
    alert("Сіз орманға тап болдыңыз. Ол жерден аюды кордіңіз. Сіз аюдан қашып қүтылып көл ге келдіңіз.");
    
    var questionSecond = prompt("Көлдің жағасында қайық және кеме түр қайсысын таңдайсыз?")

    if (questionSecond == "қайық" || questionSecond == "Қайық"){
        alert("Cізді толқындар су тұбіне алып кетті")
    }else if (questionSecond == "кеме" || questionSecond == "кеме"){
        alert("Сіз кеменің ішінен алтын таптыңыз және уйіңіңізге жеттіңіз" +"\n" + "Жеңіс!!!")
    }
} else if (questionFirst == "солға" || questionFirst == "Солға") {
    alert("Четкие пацаны не ходят на лево" +'\n' + "Сіз жеңілдіңіз" )
}
} 

 else {
    alert("сау бол!!!")
}
