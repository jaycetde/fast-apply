module.exports = fastApply;

function fastApply(fn, scope, args) {
    
    switch (args ? args.length : 0) {
        case 0:
            return scope ? fn.call(scope) : fn();
        case 1:
            return scope ? fn.call(scope, args[0]) : fn(args[0]);
        case 2:
            return scope ? fn.call(scope, args[0], args[1]) : fn(args[0], args[1]);
        case 3:
            return scope ? fn.call(scope, args[0], args[1], args[2]) : fn(args[0], args[1], args[2]);
        case 4:
            return scope ? fn.call(scope, args[0], args[1], args[2], args[3]) : fn(args[0], args[1], args[2], args[3]);
        case 5:
            return scope ? fn.call(scope, args[0], args[1], args[2], args[3], args[4]) : fn(args[0], args[1], args[2], args[3], args[4]);
        default:
            return fn.apply(scope, args);
    }
    
}