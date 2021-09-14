let catKennel = [["Lucy"], ["Fred"], ["Sweetie", "Kitten1", "Kitten2", "Kitten3"]];

console.log(catKennel[2][1])

for (let i = 0; i < catKennel.length; i++) {
  for (let j = 0; j < catKennel[i].length; j++) {
    if (catKennel[i][0] === "Lucy") {
      console.log(`Checked ${catKennel[i]}'s temperature.`)
    } else if (catKennel[i][0] === "Fred") {
      console.log(`We're going to skip ${catKennel[i]}, he's scary.`)
    } else if (catKennel[i][0] === "Anne") {
      console.log(`This should never fire, there is no Anne, omg what happened to Anne!?`)
    } else if (catKennel[i][0] == "Sweetie") {
      console.log(`${catKennel[i][j]} was given vitamins and a checkup.`)
    }
  }
}

/**/