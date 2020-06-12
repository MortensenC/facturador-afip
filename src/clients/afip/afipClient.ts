const Afip = require("@afipsdk/afip.js");

export async function facturar(params : {CUIT: string, production:boolean}) {
  let res;
  try{
    const afip = new Afip(params);

    const date = new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .split("T")[0];

    const data = {
      CantReg: 1, // Cantidad de comprobantes a registrar
      PtoVta: 1, // Punto de venta
      CbteTipo: 6, // Tipo de comprobante (ver tipos disponibles)
      Concepto: 1, // Concepto del Comprobante: (1)Productos, (2)Servicios, (3)Productos y Servicios
      DocTipo: 80, // Tipo de documento del comprador (ver tipos disponibles)
      DocNro: 20111111112, // Numero de documento del comprador
      CbteDesde: 1, // Numero de comprobante o numero del primer comprobante en caso de ser mas de uno
      CbteHasta: 1, // Numero de comprobante o numero del ultimo comprobante en caso de ser mas de uno
      CbteFch: parseInt(date.replace(/-/g, "")), // (Opcional) Fecha del comprobante (yyyymmdd) o fecha actual si es nulo
      ImpTotal: 150, // Importe total del comprobante
      ImpTotConc: 0, // Importe neto no gravado
      ImpNeto: 0, // Importe neto gravado
      ImpOpEx: 150, // Importe exento de IVA
      ImpIVA: 0, //Importe total de IVA
      ImpTrib: 0, //Importe total de tributos
      FchServDesde: null, // (Opcional) Fecha de inicio del servicio (yyyymmdd), obligatorio para Concepto 2 y 3
      FchServHasta: null, // (Opcional) Fecha de fin del servicio (yyyymmdd), obligatorio para Concepto 2 y 3
      FchVtoPago: null, // (Opcional) Fecha de vencimiento del servicio (yyyymmdd), obligatorio para Concepto 2 y 3
      MonId: "PES", //Tipo de moneda usada en el comprobante (ver tipos disponibles)('PES' para pesos argentinos)
      MonCotiz: 1, // Cotización de la moneda usada (1 para pesos argentinos)
      Opcionales: [
        // (Opcional) Campos auxiliares
        {
          Id: 17, // Codigo de tipo de opcion (ver tipos disponibles)
          Valor: 2 // Valor
        }
      ]
    };

    res = await afip.ElectronicBilling.createVoucher(data);
  }catch(e){
    console.log(e);
    return res;
  }

  //   console.log(res["CAE"]); //CAE asignado el comprobante
  //   console.log(res["CAEFchVto"]); //Fecha de vencimiento del CAE (yyyy-mm-dd)
  //   console.log(res); 

  return res;
}

export async function getVoucherTypes(params: {
  CUIT: string;
  production: boolean;
}) {
    let res;
    try{
        const afip = new Afip(params);
        res = await afip.ElectronicBilling.getVoucherTypes();
    }catch(e){
        res = e;
    }
    return res;
}

export async function facturaElectronicaDummy(params: {
  CUIT: string;
  production: boolean;
}) {
  let res;
  try {
    const afip = new Afip(params);
    res = await afip.ElectronicBilling.getServerStatus();
  } catch (e) {
    res = e;
  }
  return res;
}

export async function aceptarFECred(params: {
  CUIT: string;
  production: boolean;
}) {
  let res;
  try {
    const afip = new Afip(params);

    const data = {};

    res = await afip.ElectronicCreditBilling.aceptarFECred(data);
  } catch (e) {
    res = e;
  }
  return res;
}

export async function rechazarFECred(params: {
  CUIT: string;
  production: boolean;
}) {
  let res;
  try {
    const afip = new Afip(params);

    const data = {};

    res = await afip.ElectronicCreditBilling.rechazarFECred(data);
  } catch (e) {
    res = e;
  }
  return res;
}

export async function rechazarNotaDC(params: {
  CUIT: string;
  production: boolean;
}) {
  let res;
  try {
    const afip = new Afip(params);

    const data = {};

    res = await afip.ElectronicCreditBilling.rechazarNotaDC(data);
  } catch (e) {
    res = e;
  }
  return res;
}

export async function consultarComprobantesFCE(params: {
  CUIT: string;
  production: boolean;
}) {
  let res;
  try {
    const afip = new Afip(params);
    const data = { rolCUITRepresentada: "" };
    res = await afip.ElectronicCreditBilling.consultarComprobantes(data);
  } catch (e) {
    res = e;
  }
  return res;
}

export async function consultarTiposFormasCancelacionFCE(params: {
  CUIT: string;
  production: boolean;
}) {
  let res;
  try {
    const afip = new Afip(params);
    res = await afip.ElectronicCreditBilling.consultarTiposFormasCancelacion();
  } catch (e) {
    res = e;
  }
  return res;
}

export async function consultarObligadoRecepcionFCE(params: {
  CUIT: string;
  production: boolean;
}) {
  let res;
  try {
    const afip = new Afip(params);
    res = await afip.ElectronicCreditBilling.consultarObligadoRecepcion({
      cuitConsultada: params.CUIT
    });
  } catch (e) {
    res = e;
  }
  return res;
}

export async function consultarMontoObligadoRecepcionFCE(
         loginParams: {
           CUIT: string;
           production: boolean;
         },
         dataParams: {
           cuitConsultada: string;
           fechaEmision: string;
         }
       ) {
         let res;
         try {
           const afip = new Afip(loginParams);
           res = await afip.ElectronicCreditBilling.consultarMontoObligadoRecepcion(
             {
               cuitConsultada: dataParams.cuitConsultada,
               fechaEmision: dataParams.fechaEmision
             }
           );
         } catch (e) {
           res = e;
         }
         return res;
}

export async function dummyFCE(params: { CUIT: string; production: boolean }) {
  let res;
  try {
    const afip = new Afip(params);
    res = await afip.ElectronicCreditBilling.getServerStatus();
  } catch (e) {
    res = e;
  }
  return res;
}