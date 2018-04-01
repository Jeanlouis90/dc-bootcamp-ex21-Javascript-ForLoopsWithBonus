console.log("1");
for (var index = -10; index < 20; index++) {
    console.log(index);

}

console.log("Q2");

for (var index = 10; index <= 40; index++) {
    if (index % 2 === 0) {
        console.log(index);

    }

}
console.log("Q3");

for (var index = 300; index <= 333; index++) {
    if (index % 2 != 0) {
        console.log(index);

    }

}
console.log("Q4");

for (var count = 0; count <= 50; count++) {
    if (count % 5 === 0 && count % 3 === 0) {
        console.log(count);
    }
}

alert("Welcome to our site!");
var fullName = prompt("What is your full name, traveler?");

while (fullName.indexOf(" ") == -1) {
    prompt("What is your FULL name, traveler?");
}

alert("Welcome, " + fullName + "!");

while (fullName.indexOf(" ") == -1) {
    prompt("What is your FULL name, traveler?");
}

alert("Welcome, " + fullName + "!");
var faction = prompt("What is your faction, " + fullName + "?");

while (faction.indexOf("Horde" || "Alliance") == -1) {
    var answer = prompt("Are you registering as a lone wolf, " + fullName + "?");

    while (answer.indexOf("Yes" || "No") == -1) {
        var faction = prompt("What is your faction, " + fullName + "?");

        if (answer == "Yes") {
            alert("Thanks!")
        } else {
            var newFaction = prompt("New faction?");
        }
    }
}

if (faction == "Horde") {
    alert("Welcome to the Horde!");
} else if (faction == "Alliance") {
    alert("For the Alliance!");
}