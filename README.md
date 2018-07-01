This is an automaticaly translated chat app. To make it work, you have to have an apache server, and a mysql database.
# Make an usable build
1. On the database create the table from dbcreate.sql.
2. In the directory run `npm install`
3. Create the file public/conn.php. This will contain the db connection data:
  ``` php
  <?php
  $servername = "your_server_name";
  $username = "your_user_name";
  $password = "your_password";
  $db="your_db_name";
  ?>
  ```
4. In the directory run `npm run build`
5. Coppy the build folders content to the server.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
