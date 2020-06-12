import express from 'express';
import {
  getVoucherTypes,
  facturaElectronicaDummy,
  consultarTiposFormasCancelacionFCE,
  dummyFCE,
  consultarComprobantesFCE,
  consultarObligadoRecepcionFCE,
  consultarMontoObligadoRecepcionFCE
} from "../clients/afip/afipClient";
import { generarPDF } from '../services/generadorPDF';
 
export const loadRoutes = (app: express.Application) => {
 var clientRouter = express.Router();

 app.use(express.json());
 
 app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
   res.header(
     "Access-Control-Allow-Headers",
     "Origin, X-Requested-With, Content-Type, Accept"
   );
   next();
 });
 
 app.use("/afip", clientRouter);
 
 clientRouter.get("/voucherTypes", async function(req, res) {
   const voucherTypes = await getVoucherTypes({CUIT: "20322583924", production: false});

   res.json(voucherTypes);
 });

  clientRouter.get("/facturar", async function(req, res) {
    // const factura = await facturar({
    //   CUIT: "20322583924",
    //   production: false
    // });

    generarPDF();

    res.json("Ok");
  });

  clientRouter.get(
    "/fce/consultarTiposFormasCancelacion",
    async function(req, res) {
      const state = await consultarTiposFormasCancelacionFCE({
        CUIT: "20322583924",
        production: false
      });

      res.json(state);
    }
  );

  clientRouter.get("/fce/dummy", async function(req, res) {
    const state = await dummyFCE({ CUIT: "20322583924", production: false });

    res.json(state);
  });

  clientRouter.get("/fce/consultarComprobantes", async function(req, res) {
    const state = await consultarComprobantesFCE({
      CUIT: "20322583924",
      production: false
    });

    res.json(state);
  });

  clientRouter.get("/fce/consultarObligadoRecepcion", async function(
    req,
    res
  ) {
    const state = await consultarObligadoRecepcionFCE({
      CUIT: "20322583924",
      production: false
    });

    res.json(state);
  });

  clientRouter.get("/fce/consultarMontoObligadoRecepcion", async function(
    req,
    res
  ) {
    const { cuitConsultada, fechaEmision } = req.body;
    const state = await consultarMontoObligadoRecepcionFCE(
      {
        CUIT: "20322583924",
        production: false,
      },{
        cuitConsultada,
        fechaEmision
      }
    );

    res.json(state);
  });


  clientRouter.get("/fe/dummy", async function(req, res) {
    const state = await facturaElectronicaDummy({
      CUIT: "20322583924",
      production: false
    });

    res.json(state);
  });
 

 app.get("/", function(req, res) {
   res.send("FACTURADOR-AFIP!");
 });
};
