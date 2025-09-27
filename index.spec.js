const dice = require("./index");
test("Retorme un numero entre el 1 y 6", () => {
    const rollResult = dice.roll();
    console.log(`Resultado es ${rollResult}`);
    expect(rollResult).toBeGreaterThanOrEqual(1);
    expect(rollResult).toBeLessThanOrEqual(6);
});