const log = console.log;

window.indexedDB =
  window.indexDB ||
  window.webkitIndexDB ||
  window.mozIndexDB ||
  window.msIndexDB;

let db,
  tx,
  store,
  index,
  dbName = "StoreDB",
  dbVersion = 1,
  booksData = [
    { id: "c++", price: 2300, created: new Date(), category: ["programming", "cse", "eng"] },
    { id: "java", price: 23330, created: new Date(), category: ["java", "oracle"] },
    { id: "python", price: 210, created: new Date(), category: ["rasberyPi", "computer language"] },
    { id: "ruby", price: 2220, created: new Date(), category: ["web framework"] },

  ];

if (!"indexDB" in window) {
  alert("Sorry you dont have supported indexDB");
}

let $_openDbRequest = window.indexedDB.open(dbName, dbVersion);

$_openDbRequest.onupgradeneeded = (e) => {
  // triggers if the client had no database
  // ...perform initialization...
  db = $_openDbRequest.result;
  log(e);
  switch (e.oldVersion) {
    case 0:
      log("You have no database please initialize");
      //initialization goes here;
      initializationDB();
      break;
    case 1:
      log("cliet had old version please update it");
      break;
    default:
      log("do something default");
  }
};

$_openDbRequest.onsuccess = (e) => {
  log("successfully opend the database");
  db = $_openDbRequest.result;
  log(db.version);

  db.onversionchange = (e) => {
    db.close();
    alert("database is outdated,please reload the database");
  };

  $_openDbRequest.onblocked = function () {
    log("request has been blocked");
    // this event shouldn't trigger if we handle onversionchange correctly
    // it means that there's another open connection to same database
    // and it wasn't closed after db.onversionchange triggered for them
  };

  // ...the db is ready, use it...
  tx = db.transaction(["books"], "readwrite");
  store = tx.objectStore("books");
  index = store.index("bookIndex");

  // $put_and_addData(store);

  // $get_key_andData(store, index);

  $delete_data_fromStore(store, index);

  // $update_data(store, index)

  tx.oncomplete = (e) => {
    log("transaction completed successfully");
    db.close();
  };

};

$_openDbRequest.onerror = e => log("error openig database", e.target.error);

/*****
 * !toDelete the database
 */

// let $_deleteDbRequest = window.indexedDB.deleteDatabase(dbName);
// $_deleteDbRequest.onerror = (e) => log("ERROR:", e.target.error);
// $_deleteDbRequest.onsuccess = (e) => log("successfully deleted db");

function initializationDB() {
  if (!db.objectStoreNames.contains("books")) {
    // store = db.createObjectStore("books"); //NOTE: if objectstore  doesnt have keyPath during intialization then you need to set the key manually while using put or add method to store data
    /*****NOTE:OR****/
    // store=db.createObjectStore("books",{keyPath:"id"});
    /** NOTE:OR ** */
    store = db.createObjectStore("books", { autoIncrement: true });

    // index = store.createIndex("bookIndex", "id", { unique: true });

    /*****NOTE:OR***** */
    index = store.createIndex("bookIndex", "category", { multiEntry: true }); //if we use an array element as a key
  }
  /***
   * !delete objectStore...
   */
  // db.deleteObjectStore('books');
}


function $put_and_addData(store) {
  // let putReq = store.put({
  //   id: "js",
  //   price: 100,
  //   created: new Date(),
  // }, "id");

  /********NOTE: OR***** */
  // let putReq = store.put({
  //   id: "html",
  //   price: 10,
  //   created: new Date(),
  // });
  // putReq.onsuccess = (e) => log("successfully put data to the database");
  // putReq.onerror = (e) => log("ERROR:", e.target.error);

  /*****
   *!put(value, [key]) Add the value to the store. The key is supplied only if the object store did not have keyPath or autoIncrement option. If there’s already a value with the same key, it will be replaced.
   *!add(value, [key]) Same as put, but if there’s already a value with the same key, then the request fails, and an error with the name "ConstraintError" is generated.
   */
  // let addReq = store.add({
  //   id: "css",
  //   price: 1000,
  //   created: new Date(),
  // }, "id");

  /********NOTE: OR***** */
  // let addReq = store.add({
  //   id: "css",
  //   price: 1000,
  //   created: new Date(),
  // });

  // addReq.onsuccess = (e) => log("successfully added data to the store");
  // addReq.onerror = (e) => log("Error:", e.target.error);

  booksData.forEach(data => {
    let req = store.put(data);
    req.onsuccess = e => log("succesfully added data");
    req.onerror = e => log(e.target.error);

  });

}



function $get_key_andData(store, index) {

  /***TODO:Get data using objectStore *******/

  // let getKeyReq = store.getAllKeys(IDBKeyRange.lowerBound(1, true));
  // let getDataReq = store.getAll(IDBKeyRange.lowerBound(1, true));

  // getDataReq.onsuccess = e => log(e.target.result);
  // getDataReq.onerror = e => log("data retrive failed")

  // getKeyReq.onsuccess = e => log(e.target.result);
  // getKeyReq.onerror = e => log("data retrive failed")
  // log(store.count(IDBKeyRange.lowerBound(1, true))); //count the total no of result
  /**
   * 
   *  NOTE:getAll(query,count) 
   *        getAllKeys(query,count)
   *         get(query)
   *           getKey(query)
   *           IDBKeyRange.bound/lowerBound/upperBound
   * 
   */

  /******TODO:get data using index*******/

  // let indexReqData = index.getAll(IDBKeyRange.lowerBound("computer language", true), 3);
  // indexReqData.onsuccess = e => log("%c%s", "color:red", "data is retrived by index:", e.target.result);

  /****
   * !get data by Cursor
   * *openCursor(query,direction)
   *
    query =>is a key or a key range, same as for getAll.
    direction=> is an optional argument, which order to use:
        "next" – the default, the cursor walks up from the record with the lowest key.
        "prev" – the reverse order: down from the record with the biggest key.
        "nextunique", "prevunique" – same as above, but skip records with the same key (only for cursors over indexes, e.g. for multiple books with price=5 only the first one will be returned).

   */
  let cursorReqAscending = store.openCursor(IDBKeyRange.bound(6, 8), "next");

  cursorReqAscending.onsuccess = e => {
    let cursor = cursorReqAscending.result;
    if (cursor) {
      // log(cursor)
      log(cursor.value);
      cursor.advance(2); //!param(count).skipping 2 times including starting position. e.g 6,skip 2 times (start from key 6 to 7)
    } else {
      log("no more data can be retrived by cursor")
    }
  }
  cursorReqAscending.onerror = e => log(e.target.error);

  /*********NOTE: OR ***********/

  // let cursorReqDecending = store.openCursor(IDBKeyRange.bound(6, 8), "prev");
  // cursorReqDecending.onsuccess = e => {
  //   let cursor = cursorReqDecending.result;
  //   if (cursor) {
  //     log(cursor.value);
  // //cursor.continue();
  //     cursor.continue(6); //start from 8,skip 7 and continue from 6
  //   }

  // }
  /***********
   * !param(query,direction)
   *         query=>key or keyrange
   *             direction=> 
   *                   1.next(default ascending)
   *                   2.prev(for descending) 
   *                   3.nextunique(for only unique value search)
   *                   4.prevunique   
   * 
   */

}


function $delete_data_fromStore(store, index) {


  /***TODO: to delete a particular data********/

  // let deleteData = index.getKey("web framework"); //get the key of the store by index key
  // deleteData.onsuccess = e => {
  //   log(e.target.result);
  //   let id = e.target.result;//deleteData.result; 
  //   if (id) {
  //     let delDatareq = store.delete(id);
  //     delDatareq.onsuccess = e => log("deleted data successfully");
  //     delDatareq.onerror = e => log("ERROR data deleting:", e.target.error);
  //   } else {
  //     log("the data is already deleted");
  //   }
  // };

  /*****NOTE:Delete data by Cursor******* */
  let deleteData_ByCursor = store.openCursor();
  deleteData_ByCursor.onsuccess = e => {
    let cursor = e.target.result;
    if (cursor) {
      if (cursor.key === 7) {
        cursor.delete();
      }
      cursor.continue();
    }
  }

  /****NOTE: to delete all key **** */
  // store.clear();

}


function $update_data(store, index) {

  /****NOTE: update data at cursor position ********/

  let req = store.openCursor();
  req.onsuccess = e => {
    let cursor = req.result;
    if (cursor) {
      log(cursor.value);
      let updateData = cursor.value;
      if (cursor.value.id === "python") {
        updateData.id = "webAssembly"
        cursor.update(updateData);
      }
      cursor.continue();
    } else {
      log("there are no more data")
    }
  }

  /*******NOTE: updating data with put(if the key is same the data will update otherwise it will insert new record ) method ********/

  //the id "c++" will be updated "c" at key position 1 
  let putDataUpdate = store.put({
    id: "c",
    price: 200,
    created: new Date(),
    category: ["language", "web Assembly"]
  }, 1);

}

