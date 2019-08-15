const utils = {};

utils.getClassName = (...args) => {
    let classNames = [];

    for (let i = 0; i < args.length; i++) {
        let arg = args[i];

        if (arg) {
            if (Array.isArray(arg)) {
                if (arg[0] && arg[1]) {
                    classNames.push(arg[0]);
                }
            } else {
                classNames.push(arg);
            }
        }
    }

    return classNames.join('');
};

utils.random = (min, max) => {
    return Math.floor((Math.random() * (max - min + 1)) + min);
};

export default utils;
