let name = "Laura";
let age = 25;
let birthday = "July 13";
let detroitGC = true;

if (detroitGC === true) {
  console.log(
    `My name is ${name} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday} .`
  );
} else {
  console.log(
    `My name is ${name} and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ${age} years old and my birthday is on ${birthday} .`
  );
}

{
  let lifeEvents = [
    "I was born in Phiadelphia",
    "I went to PennState",
    "I am a student at Grand Circus",
    "I moved to Michigan"
  ];

  for (let i = 0; i < lifeEvents.length; i++) {
    console.log(lifeEvents[i]);
  }
}
let counter = 0;
while (true) {
  let randomNumber = Math.floor(Math.random() * 11);
  if (randomNumber !== 5) {
    counter++;
    console.log("randomNumber !==5");
  } else {
    counter++;
    console.log(
      `5===5 it took ${counter} iteration to randomly generate the number 5`
    );
    break;
  }
}
