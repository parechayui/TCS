TCS folder structure, why to use this?

How to start?

1) Download Node.js from [here](https://nodejs.org/en/ "Title") which includes npm.


Why to follow this folder structure.

1) Feature folders optimize for growth.
 
2) Finding relevant files for development and maintenance is faster/easier.
 
3) Feature folders are optimized for angularJS MVC structure by bundling the directly related html and javascript files together, as opposed to dumping all js into one folder and all html into another folder.
 
4) Management and other concerned persons who are not intimately familiar with the code should be able to easily understand and manage development/maintenance as spe continues to grow.
 
How to use it?

1) This structure is feature based, so please make sure the major features are in their particular folder.
 
2) Try not to go more than 2 levels deep.
 
4) Place the feature/layouts/templates/services which can be shared in a common folder.
 
5) Placing the modules/sub modules in the app folder.
 
Naming Conventions
 
1) The name of the folder should be specific based on its’ functionality or feature and it must be lower case.
For ex: controllers, views, pricing.
 
2) Use app.js for main app modules, use abc.module.js for sub app modules.
For ex: pricing.module.js, scplan.module.js
 
3) Naming the configuration files: For main module use config.js and for sub app module use abc.config.js
For ex: pricing.config.js, scplan.config.js
 
4) Naming the controllers must be specific to the work it does/feature it provides.
For ex: scplan.controller.js or scplan.js,pricing.controller.js or pricing.js
 
5) Naming the routing configuration file: For the main module, use config.route.js and for sub app module use abc.config.route.js
or abc.route.js.
For ex: scplan.route.js or scplan.config.route.js
 
6) Name services based on what it provides; name the assets related to the feature it provides.
For ex: If a service provides data then give it a name data.service.js and name the asset “data.” If it helps in logging then give the name logger.services.js and name the asset as “logger.” 
 
 To familiarize with the UI-Route please go through [here](https://github.com/angular-ui/ui-router "Title")
 
 To familiarize with the Karma-Jasmine please go through [here](https://docs.angularjs.org/guide/unit-testing "Title")