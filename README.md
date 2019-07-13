# Alexandria

Alexandria is intended to replace any need for a physical library at home. IT is intended to mainly be used via local network, but available outside of a local network if desired. 

Alexandria's goal functionality:

* Ability to read ebooks
* Ability to read comic books
* Provide user accounts to manage progress, favorites, history, and etc of the media provided.

### Launching
`docker-compose build` - build the containers (only needed the first run and after modification)
`docker-compose up -d` - run the containers in detached mode.

The `docker-compose.yml` file is responsible for configuring how each container is spun up and setting up the environment to allow communication between containers.

| Server | Port and information |
|:---|:----|
| (Eventually) React | Port 3000(?) - provides UI, should be authenticated eventually |
| Express | Port 3000 - provides business layer; functions as any other RESTful JSON API. |
| MongoDB | Port 27017 - access to the MongoDB server. Protected via authentication |
| AdminMongo | Port 1234 - admin panel for viewing the status of the MongoDb server. Protected via authentication |

### Architecture

* *React* - front-end javascript framework for UI
* *Express* - javascript framework for back-end. Hosts an API consumed by the front-end.
* *MongoDB* - relational database
* *Mongoose* - ODM (Object data model) used to easily interact with MongoDB. This is used backend with express to provide interaction between the data layer and business layer.
* *Node.js*
* *Docker* - Container platform that aids in assuring the project is maintainable, extendable, and compartmentalized.

### Contributing

* `docker-compose build` - rebuild the docker containers
* `docker-compose up -d` - run the containers in detached mode
* `docker-compose up` - doesn't detach (this can be useful for seeing data during development)

Personally built a script to do both of these for faster restarts.

### Notes

Need to look into more information on deploying for production status (using npm run build).

### Dependencies

| Framework | Docker Image |
|:-----|:----|
| MongoDB | Mongo:4 |
| AdminMongo | Default (mrvautin/adminmongo) |

*note - AdminMongo is a Web application that allows easy interaction/viewing of MongoDB*


### What I've Learned

* Docker is freaking cool!
* Docker is great at enforcing Single Responsibility. I've set up a container for each layer of the application. Due to sandboxing Docker provides, each component can be truly separated from the rest of the system.
* Docker containers are, by design, entirely sandboxed. Additional configuration is necessary to allow communication between images.

### Resources

* [Keeping API Clean using Express Router](https://scotch.io/tutorials/keeping-api-routing-clean-using-express-routers)
* [Basic MERN app tutorial](https://scotch.io/@deityhub/getting-started-with-the-mern-stack#toc-node-server-setup)
* [Old Mern App turorial](https://blog.cloudboost.io/creating-your-first-mern-stack-application-b6604d12e4d3)
