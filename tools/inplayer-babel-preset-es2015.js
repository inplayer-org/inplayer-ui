const ENV = process.env.BABEL_ENV;

const isESBuild = ENV === 'build-es';
const isUMDBuild = ENV === 'build-umd';

module.exports = function () {
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          loose: true,
          modules: isESBuild || isUMDBuild ? false : 'commonjs',
        },
      ],
    ],
  };
};
