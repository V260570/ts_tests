// создание массива случайных чисел
const arr = Array(5000).fill(0).map(() => Math.floor(Math.random() * 1000000));
// числа с "дырками"
const holes = {'0': 1, '4': 1, '6': 1, '9': 1, '8': 2};

// функция для сортировки, которая возвращает количество "дырок" в числе
const el = a => [...a+''].map(v => Object.keys(holes).includes(v) ? holes[v] : 0).reduce((t, v) => t + v);


const lst = arr.sort((a, b) => a - b).sort((a, b) => el(a) - el(b));

console.log(lst);
