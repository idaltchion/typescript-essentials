// var, let const
function levels(isActive) {
    console.log('--- Variables in TypeScript ---');
    if (isActive) {
        var level1 = 'var is global';
        var level2 = 'let is local';
        var level3 = 'const is local';
        var level4 = 'this local variable was declared as a string';
    }
    console.log(level1);
    console.log(level2);
    console.log(level3);
    console.log(level4);
}
levels(true);
