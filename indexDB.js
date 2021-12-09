const log = console.log;

const friendsData = [
  { name: "sayed", telNo: 1788 },
  { name: "sobuj", telNo: 1714 },
];

const friendsData2 = [
  { name: "arif", telNo: 17188 },
  { name: "pranto", telNo: 172214 },
  { name: "mukul", telNo: 17112214 },
  { name: "sobuj", telNo: 272214 },
  { name: "sayed", telNo: 1720214 },
  { name: "akib", telNo: 1724 },
];

window.indexedDB =
  window.indexedDB ||
  window.mozIndexDB ||
  window.webkitIndexDB ||
  window.msIndexDB;

log(window.indexedDB.databases());

let req = window.indexedDB.open("myDB1", 2),
  db,
  store,
  tx;

req.onerror = function (e) {
  log("ERROR:", e.errorCode);
};

req.onupgradeneeded = function (e) {
  db = req.result;
  store = db.createObjectStore("friendsStore2", { keyPath: "telNo" });
  index = store.createIndex("nameIndex", "name", { unique: false });
};
req.onsuccess = function (e) {
  db = req.result;
  tx = db.transaction("friendsStore2", "readwrite");
  store = tx.objectStore("friendsStore2");
  index = store.index("nameIndex");

  db.onerror = (e) => {
    console.log("ERROR:", e.target.error);
  };

  /***********@SetDATA ***********/

  //   friendsData2.forEach(function (data) {
  //     store.put(data);
  //   });

  // friendsData2.forEach(function (data) {
  //   store.add(data);
  // });

  /*********** @GETDATA ***********/

  //   let name1 = store.get(1788);
  //   let name2 = index.get("sobuj");
  //   name1.onsuccess = function (e) {
  //     log(name1.result);
  //   };
  //   name2.onsuccess = function (e) {
  //     log(name2.result);
  //   };
  let requResult = store.getAll(IDBKeyRange.upperBound(1720214, true));

  requResult.onsuccess = (e) => {
    let modifiedResult = e.target.result.map((result) => result.telNo * 2);

    log(e.target.result, modifiedResult);
  };

  tx.oncomplete = function (e) {
    db.close();
  };
};
