exports.config =
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
          'vendor/javascripts/jquery-1.11.0.min.js'
          'vendor/javascripts/underscore-1.6.js'
        ]

    stylesheets:
      defaultExtension: 'less',
      joinTo:
        'css/main.css': /^(app|vendor)/
      order: {
        before: ['vendor/styles/bootstrap/bootstrap.less']
      }
    templates:
      joinTo: 'js/app.js'
