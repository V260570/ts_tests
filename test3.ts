interface HoleObject {
  [index: string]: number;
}

// создание массива случайных чисел
const arr = Array(100).fill(0).map(() => Math.floor(Math.random() * 100000));
// числа с "дырками"
const holes: HoleObject = {0: 1, 4: 1, 6: 1, 9: 1, 8: 2};

// функция для сортировки, которая возвращает количество "дырок" в числе
const el = (a: number): number => [...a + ''].map((v: string): number => Object.keys(holes).includes(v) ? holes[v] : 0).reduce((t, c) => t + c);
const sortedArray = arr.sort((a, b) => a - b).sort((a, b) => el(a) - el(b));

console.log(sortedArray);
