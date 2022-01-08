interface Student {
  name: string;
  avgMark: number;
}

interface Statistics {
  avgMark: number;
  highestMark: string;
  lowestMark: string;
}

function getStatistics(marks: Student[]): Statistics {
	let avg: number = Math.round(marks.reduce((t, c) => t + c.avgMark, 0) / marks.length * 100) / 100;
  // let highMark: string = marks.reduce((t, c) => Math.max(t.avgMark, c.avgMark) == t.avgMark ? t : c).name;
  // let lowMark: string = marks.reduce((t, c) => Math.min(t.avgMark, c.avgMark) == t.avgMark ? t : c).name;
  // return {avgMark: avg, highestMark: highMark, lowestMark: lowMark};
  marks.sort((a, b) => b.avgMark - a.avgMark);
  return {avgMark: avg, highestMark: marks[0].name, lowestMark: marks[marks.length-1].name};
}

const testMarks = [{
  name: 'Vasya',
  avgMark: 3.75
}, {
  name: 'Lena',
  avgMark: 4.89 
}, {
  name: 'Sasha',
  avgMark: 4.52
}]

console.log(getStatistics(testMarks))
