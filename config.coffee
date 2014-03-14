exports.config =
  sourceMaps: false
  paths:
    public:
      'site'
  files:
    javascripts:
      joinTo:
        'js/app.js': /^app/
        'js/libs.js': /^vendor/
      order:
        before: [
          'vendor/javascripts/jquery.min.js'
          'vendor/javascripts/underscore.min.js'
          'vendor/javascripts/bootstrap.min.js'
        ]

    stylesheets:
      defaultExtension: 'less',
      joinTo:
        'css/main.css': /^(app|vendor)/
      order: {
        before: [
          'vendor/styles/bootstrap/bootstrap.less'
          'vendor/styles/bootstrap/dev-mixins.less'
        ]
      }
    templates:
      defaultExtension: 'jst'
      joinTo: 'js/app.js'