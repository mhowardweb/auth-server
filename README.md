# auth-server
An Auth Server, built for authenticating web and mobile Apps.

Uses:
nodejs
express
passport
JWT
bcrypt
mongoDB
mongoose

To run the server: npm run dev

To be able to access the mongoDB server data you can use Robo 3T GUI.

All passwords are salted and hashed before being stored in the database.

You will need a running mongoDB instance.

You will need to create a 'config.js' file with your secret key in it.
