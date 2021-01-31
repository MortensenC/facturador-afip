import express from 'express';
import { loadRoutes } from "./routes/routes";

var app = express();
app.use(express.json());

loadRoutes(app);

app.listen(process.env.PORT || 3000, function () {
    console.log(`App listening on port ${process.env.PORT || 3000}!`);
});
