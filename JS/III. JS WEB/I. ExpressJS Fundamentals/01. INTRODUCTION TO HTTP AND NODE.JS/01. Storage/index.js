const storage = require('./storage');

storage.put("wow", "Hi");
storage.put("kjk", "ddd");
console.log(storage.get('wow'));

console.log(storage.getAll());

storage.update('wow', 'Maraba');
console.log(storage.getAll());

storage.delete('kjk');
console.log(storage.getAll());

storage.clear();
console.log(storage.getAll());

storage.put('first', 'haha');
storage.saveSync();
storage.loadSync();
console.log(storage.getAll());

storage.update('first', 'second');
storage.put('did', 'dad');
storage.saveSync();
storage.loadSync();
console.log(storage.getAll());

storage.clear();
storage.put('first', 'haha');
storage.put('hh', 'dad');
storage.saveWithPromise();
storage.loadWithPromise();
console.log(storage.getAll());

