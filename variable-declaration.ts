// var, let const

function levels(isActive: boolean) {
    console.log('--- Variables in TypeScript ---');

    if (isActive) {
        var level1 = 'var is global';
        let level2 = 'let is local';
        const level3 = 'const is local';
        let level4: string = 'this local variable was declared as a string';
    }

    console.log(level1);
    console.log(level2);
    console.log(level3);
    console.log(level4);
}

levels(true);