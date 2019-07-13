# TODO:

* [ ] - AdminMongo not initially connecting?
* [ ] - How to share volumes between images?

# Interacting with Docker

Each container is given a name, so we can connect to the detached images.

### Interacting with MongoDB

The mongoDB image has a container_name set to `mongodb`. To connect to that container, run:

 `docker exec -it mongodb bash`

 This will put you in a bash shell inside the container. Then, connect to mongodb by running `mongo`. Interact with the db normally:

 * `show dbs` - shows the existing databases
 * `use $someDatabaseName` - creates a new database named $someDatabaseName
 * `db.people.save({firstname: "Nic", lastname: "Raboy" })` - save a new person to the database with supplied info. This will create the table/schema if it doesn't already exist.

 ### Interacting with Express (backend)

 I created an additional docker-compose that doesn't spin up the Express container. This allows for restarting this server on its own rather than having to wait on the MongoDB and AdminMongo containers to initialize.

 `cd` into the `express-backend` directory and run `node index.js` to launch the server.