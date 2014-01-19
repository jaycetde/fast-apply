module.exports = fastApply;

function fastApply(fn, scope, args) {
    
    switch (args ? args.length : 0) {
        case 0:
            fn.call(scope);
            break;
        case 1:
            fn.call(scope, args[0]);
            break;
        case 2:
            fn.call(scope, args[0], args[1]);
            break;
        case 3:
            fn.call(scope, args[0], args[1], args[2]);
            break;
        case 4:
            fn.call(scope, args[0], args[1], args[2], args[3]);
            break;
        case 5:
            fn.call(scope, args[0], args[1], args[2], args[3], args[4]);
            break;
        default:
            fn.apply(scope, args);
    }
    
}