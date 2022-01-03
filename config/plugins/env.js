const env = {
    name: 'env',
    setup(build) {
        const options = build.initialOptions;
        const environment = {};
        environment['process.env.NODE_ENV'] = process.env?.NODE_ENV ? process.env.NODE_ENV : 'production';
        Object.keys(process.env).forEach((key) => {
            environment[`process.env.${key}`] = JSON.stringify(process.env[key]);
        });
        options.define = { 'process.env': '{}', ...(options.define || {}), ...environment };
    },
};

module.exports = () => env;
