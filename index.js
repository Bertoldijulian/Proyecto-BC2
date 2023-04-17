import chalk from "chalk";
import { suma, multiplicacion} from "./modulos/controller.js";

const sumar = suma(1, 2);
const multiplicar = multiplicacion (4, 5)

console.log(sumar)
console.log(chalk.green(multiplicar * 2))