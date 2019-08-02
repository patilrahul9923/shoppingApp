// import { openDatabase } from 'react-native-sqlite-storage';
// var db = openDatabase({ name: 'UserDatabase.db' });

// db.transaction(function(txn) {
//     txn.executeSql(
//       query,                 //Query to execute as prepared statement
//       argsToBePassed[],      //Argument to pass for the prepared statement
//       function(tx, res) {}   //Callback function to handle the result response
//     );
//   });


//   db.transaction(function(txn) {
//     txn.executeSql(
//       "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
//       [],
//       function(tx, res) {
//         console.log('item:', res.rows.length);
//         if (res.rows.length == 0) {
//           txn.executeSql('DROP TABLE IF EXISTS table_user', []);
//           txn.executeSql(
//             'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_contact INT(10), user_address VARCHAR(255))',
//             []
//           );
//         }
//       }
    );
  });