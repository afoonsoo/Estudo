const   validarID   =   /\d+ID\b/;

console.log(validarID.test("123456ID"));
console.log(validarID.test("123456"));
console.log(validarID.test("dasdasIDdsa"));
console.log(validarID.test("ID"));