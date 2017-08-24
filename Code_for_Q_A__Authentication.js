// const bodyParser = require('body-parser');
// const express = require('express');
// const session = require('express-session');
//
// const fs = require('fs');
// const path = require('path');
//
// const STATUS_USER_ERROR = 422;
//
// const server = express();
// server.use(bodyParser.json());
// server.use(session({
//   secret: '6rbjkIyQ2NvCvnQ9kyVvgbndfTWnVmztpEhSV4cjvJEPVkiQni'
// }));
//
// server.use((req, res, next) => {
//   if (req.path === '/') {
//     res.json({ middleware: true });
//   } else {
//     next();
//   }
// });
//
// server.use((req, res, next) => {
//   // __dirname = /foo
//   // req.path = /img/eclipse.jpg
//   // return value = /foo/image/eclipse.jpg
//   // C:\foo\image\eclipse.jpg
//   const fullPath = path.join(__dirname, req.path);
//   fs.readFile(fullPath, (err, buffer) => {
//     if (err) {
//       next();
//       return;
//     }
//
//     const ext = path.extname(fullPath);
//     res.type(ext);
//     res.send(buffer);
//   });
// });
//
// // server.get('/something', (req, res) => {
// //
// // });
//
// // server.get('/index.html', (req, res) => {
// //   // read index.html file
// //   // send contents through res
// // });
// //
// // server.get('/img/eclipse.jpg', (req, res) => {
// //   // read /img/eclipse.jpg file
// //   // send contents through res
// // });
//
//
// // const UserSchema = mongoose.Schema({
// //   // fields
// // });
// //
// // server.get('/', (req, res) => {
// //   // ...
// //   const user = /* ... */;
// //   req.session.userID = user._id;
// // });
// //
// // server.get('/dashboard', (req, res) => {
// //   const userID = req.session.userID;
// //   User.findByID(userID, ...);
// // });
//
// // server.use((req, res, next) => {
// //   if (req.path === "/a") {
// //     res.json({ a: 200 });
// //   } else {
// //     res.json({ middleware: true });
// //   }
// // });
//
// // server.get('/a', (req, res) => {
// //   res.json({ a: 1 });
// // });
//
// server.listen(3000);
