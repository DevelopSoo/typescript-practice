import { getFileNameAndNumber } from "../utils/getFileNameAndNumber";

const [filename, numberoOfFakeItems] = getFileNameAndNumber('data/fake.csv', 100000)

console.log(filename, numberoOfFakeItems)
