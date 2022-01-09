function txt(n=7) {
//  перестановки
    function permutations(n: number) {
        const num: string = [].reduce.call(' '.repeat(n), (t, _, i) => t + ++i, '');
        const p: string[] = [];
        function exchange(str: string, res='') {
            for(let x of str) {
                res = res.slice(0, n - str.length) + x;
                const s = str.replace(x, '');
                s ? exchange(s, res) : p.push(res);
            }
        }
        exchange(num);
        return p;
    }
//  swr: sequence without repetition, размещения
    function swr(n: number) {
        const seq = [];
        function exchange(str: string, n: number, res='') {
            for(let i=n-1; i>=0; i--) {
                let tmp = res + str.replace(str.slice(i, n+1), str[n] + str.slice(i, n));
                seq.push(tmp);
                let m = tmp.slice(i+1+res.length).match(/^[0]+(?=[^0])/);
                if(m)
                    exchange(tmp.slice(i+1+res.length), m[0].length, tmp.slice(0, i+1+res.length));
            }
        }
        for(let p of permutations(n)) {
            let s = '0'.repeat(n) + p;
            seq.push(s);
            exchange(s, n);
        }
        return seq;
    }

    const file = new File([swr(n).join("\n")], "file.txt", {type: "text/plain"});
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => console.log(reader.result.match(/\n/g).length + 1);
    let value = Math.ceil(file.size / (n * 2 + 1));
    
    return value;
}

console.log(txt(4));
