TCS folder structure, why to use this?

How to start?

1) Download Node.js from [here](https://nodejs.org/en/ "Title") which includes npm.
2) 



1) App that we are developing is growing.

2) Folder Structure always helps in making the work easier by getting what we are looking for.

3) Feature Based Structure: If we use the structure based on the feature then it will be easy to work on that particular feature.
For ex: Let's say we have a functionality where we compare with the competitors so if the view, controllers are there in the same
folder then it will be helpful to developers to change only that part.

4) This folder structure will be helpful for the Team Lead so that he/she can give access to only the needed feature. This helps in
best organizing and managing the project.

How to use it?
1) This is Feature Based, So please make sure the major features are in there particular folder,
so that it will be helpful for other developers to access it.
For ex: We have a feature Pricing,Scenario Planning,Diagnostics will be in separate folder where
there will be great flexibility of accessing the code.(Note for Developers:Please don't create folders as you wish,
please take permission from the Team Lead/Technical Architect)

2) The major thing with feature based is to make work more efficient.
Let's say some bug arises in Scenario Planning then Team Lead will give just an access to this folder,so that it don't
affect any of the other features.

3)To the Team Lead/Technical Architect don't go more than 2 levels of folder structure which will make the understanding
& accessing the folder will become bit complicated.

4) Place the feature/layouts which are repetitive in a common folder so that it can be shared.

5) Placing the modules/sub modules in the app folder.

Naming Conventions

1) The name of the folder should be specific based on it's functionality or feature and it must be lower case.
For ex: controllers,views,pricing.

2) Use app.js for main app modules, use abc.module.js for sub app modules.
For ex:pricing.module.js, scplan.module.js

3) Naming the Configuration files, for main module use config.js and for sub app module use abc.config.js
For ex:pricing.config.js, scplan.config.js

4) Naming the Controllers must be more specific based on the work it do/Feature it provides.
For ex: scplan.controller.js or scplan.js,pricing.controller.js or pricing.js

5) Naming the Routing Configuration file, for main module use config.route.js and for sub app module use abc.config.route.js
or abc.route.js.
For ex: scplan.route.js or scplan.config.route.js

6) Naming the services is based on what it provides, name the assets related to the feature it provides.
Let's say if service provides the data then give it a name data.service.js and the asset as data,if it helps in logging then give
 it a name logger.service.js and asset as logger.