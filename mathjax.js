MathJax = {
  loader: { load: ['[tex]/physics',] },
  tex: {
    inlineMath: [
      ['$', '$'],
      ['\\(', '\\)']
    ],
    displayMath: [
      ['$$', '$$'],
      ['\\[', '\\]']
    ],
    packages: {'[+]': ['physics']},
    tags: 'ams',
    macros: {
        'e': '\\mathrm{e}',
        'i': '\\mathrm{i}',
        'RR': '\\mathbb{R}',
        'ZZ': '\\mathbb{Z}',
        'QQ': '\\mathbb{Q}',
      },
  },
  svg: { fontCache: 'global'},
};