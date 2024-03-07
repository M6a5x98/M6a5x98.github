function transpile(code) {
    let vars = [];
    this.code = code.split("\n")
    for (let i = 0; i < this.code.length; i++) {
        const line = this.code[i];
        if (line.includes("->")) {
            const name = line.split("->")[0]
            let value;
            if (parseFloat(line.split("->")[1]) === NaN) {
              throw new TypeError("Value must be a number got a "+typeof line.split('->')[1])
            }
            vars.push({name:name, value:value})
        }
    }
    console.log(vars)
}
/*
a->12
repeter 12 fois {
    afficher résultat 4
}
a->?
*/

//Var : {name: "a", value: 45}