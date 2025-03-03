const express = require('express');
const router  = express.Router();
const generalQueries = require('../db/queries/generalQueries');

//This rout displays all emails saved into the database. To visualize these you can either make an API request to this end point or visit the url below using your browser.
//expected to receive an ip address
//http://localhost:8101/notes
router.put('/', (req, res) => {

  const userIp = req.body.ip

  console.log(userIp)

generalQueries.getAllNotes(userIp)
  .then((response) => {
    res.json(response)
    // console.log(response)
  })

});


//This rout saves a new note
//expected object to be sent with the put request: {user_id, note, id}
//http://localhost:8101/notes/new
router.put('/new', (req, res) => {

  //expected object: {user_id: xx, note: xx}
  let obj = req.body
console.log(obj)
  generalQueries.addNewNote(obj)
  .then(() => {
    return res.json("info added to database")
  })
  .catch((error) => {
    return console.log(error.message);
  });
});

//This rout deletes a note
//expected object to be sent with the put request: {id} (the id of the item in the database table)
//http://localhost:8101/notes/delete
router.put('/delete', (req, res) => {

  //expected object: {id: xx}
  let obj = req.body

  generalQueries.deleteNote(obj)
  .then(() => {
    return res.json("info removed from database")
  })
  .catch((error) => {
    return console.log(error.message);
  });
});

//This rout updates a note
//http://localhost:8101/notes/update
router.put('/update', (req, res) => {

  //expected object: {id: xx, note: xx}
  let obj = req.body

  generalQueries.updateNote(obj)
  .then(() => {
    return res.json("info updated in database")
  })
  .catch((error) => {
    return console.log(error.message);
  });
});

module.exports = router;

