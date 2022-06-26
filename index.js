const permutationList = list => {
    if (list.length <= 2) return list.length === 2 ? [list, [list[1], list[0]]] : list;
    return list.reduce(
        (initialState, item, i) =>
            initialState.concat(
                permutationList([...list.slice(0, i), ...list.slice(i + 1)]).map(val => {
                    if (val &&
                        (val[i] !== 'Valo' && val[i + 1] !== 'Mon')
                        &&
                        (val[i + 1] !== 'Valo' && val[i + 2] !== 'Mon')
                        &&
                        !(item === 'Valo' && val[0] === 'Mon')) {
                        return ([
                            item,
                            ...val,
                        ])
                    }
                }
                )
            ),
        []
    );
};

console.log(permutationList(['Aajke', 'Amar', 'Mon', 'Valo', 'Nei']).filter(item => item).length)
console.log(permutationList(['Aajke', 'Amar', 'Mon', 'Valo', 'Nei']).filter(item => item))

// console.log(permutationList(['আজকে', 'আমার', 'মন', 'ভালো', 'নেই']).filter(item => item))