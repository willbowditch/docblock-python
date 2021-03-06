'use babel';

export default packageConfig = {
  style: {
    title: 'Style',
    type: 'string',
    default: 'numpy',
    order: 0,
    enum: ['numpy', 'google'],
    description: "Currently we support __*numpy*__ style, based on [A Guide to NumPy/SciPy Documentation](https://github.com/numpy/numpy/blob/master/doc/HOWTO_DOCUMENT.rst.txt), and __*google*__ style, based on [Google Python Style Guide](http://google.github.io/styleguide/pyguide.html)."
  },
  indent: {
    title: 'Initial indent',
    type: 'boolean',
    default: true,
    order: 1
  },
  parameters: {
    title: 'Describe parameters',
    type: 'boolean',
    default: true,
    order: 2
  },
  use_defaults: {
    title: 'Add default value to parameter description',
    type: 'boolean',
    default: false,
    order: 3
  },
  returns: {
    title: 'Describe returned value',
    type: 'boolean',
    default: true,
    order: 4
  },
  raises: {
    title: 'Describe raised exceptions',
    type: 'boolean',
    default: false,
    order: 5
  },
};
