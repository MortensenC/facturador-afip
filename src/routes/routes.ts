import express from 'express';
 
export const loadRoutes = (app: express.Application) => {
 var clientRouter = express.Router();
 
 app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
   res.header(
     "Access-Control-Allow-Headers",
     "Origin, X-Requested-With, Content-Type, Accept"
   );
   next();
 });
 
 app.use("/client", clientRouter);
 
 app.get("/", function(req, res) {
   res.send("Hello World!");
 });
};
