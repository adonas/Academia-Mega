
const esPar = require("./esPar");

test ("4 es par", ()=>{
    expect(espar(4)).toBe(true);
} )

test ("5 no es par", ()=>{
    expect(espar(5)).toBe(false);
})
