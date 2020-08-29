import pdf from "html-pdf";

function getHtmlHeader() { 
    return ``;
}
function getHtmlFooter() { 
    return ``;
}
export function generarPDF() {
         var options: pdf.CreateOptions = {
           format: 'A4',

           paginationOffset: 1,
           // Zooming option, can be used to scale images if `options.type` is not pdf
           zoomFactor: "1", // default is 1

           // File options
           type: "pdf",             // allowed file types: png, jpeg, pdf
           quality: "75",           // only used for types png & jpeg
          //  header: {
          //    height: "45mm",
          //    contents: getHtmlHeader(),
          //  },
          //  footer: {
          //    height: "28mm",
          //    contents: {
          //      first: "Cover page",
          //      2: "Second page", // Any page number is working. 1-based index
          //      default: getHtmlFooter(),
          //      last: "Last Page"
          //    }
          //  }
         };

         var html = `
         <!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>PDF Result Template</title>
    <style>
      *{
        box-sizing:border-box;
      }
      .bold{
        font-weight:700;
      }
      .title{
        white-space:nowrap;
        font-size:15px;
        font-weight:700;
      }
      .container{
        width:595px;
        height:842px;
        margin:10px auto;
        font-family:sans-serif;
        font-size: 12px;
      }
      .header{
        font-size:14px;
        padding:5px;
        text-align:center;
        font-weight:700;
        text-transform:uppercase;
        border:1px solid #000;
      }
      .names{
        display:flex;
        align-items:center;
        border-left:1px solid #000;
        border-right:1px solid #000;
      }
      .names .title{
        font-size:20px;
        font-weight:700;
        text-transform:uppercase;
        width:calc(50% - 40px);
      }
      .names .title.r-social{
        text-align:center;
      }
      .names .title.factura{
        padding-left:20px;
      }
      .names .type-container{
        display:flex;
        flex-direction:column;
        justify-content:center;
        width:40px;
        height:50px;
        border:1px solid #000;
        border-top:none;
      }
      .names .type-container .type{
        font-size:30px;
        text-transform:uppercase;
        text-align:center;
        font-weight:700;
      }
      .names .type-container .code{
        font-size:8px;
        text-transform:uppercase;
        text-align:center;
      }
      .data{
        display:flex;
      }
      .data .col{
        width:50%;
        padding:10px;
        border:1px solid #000;
        border-top:0;
      }
      .data .col:nth-of-type(2){
        border-left:0;
        padding-left:70px;
      }
      .data .item{
        display:flex;margin-bottom:15px;
      }
      .data .item.no-margin{
        margin:0;
      }
      .data .content{
        padding-left:10px;
        font-size:15px;
      }
      .period{
        margin:2px 0;
        padding:10px;
        border:1px solid #000;
        display:flex;
        justify-content:space-between;
      }
      .period .col{
        display:flex;
      }
      .client{
        margin:2px 0;
        padding:10px;
        border:1px solid #000;
        display:flex
      }
      .client .title{
        font-size:16px;
        display:inline-block;
        margin-right:10px;
        margin-bottom:10px;
      }
      .client .col:nth-of-type(1){
        width:40%;
      }
      .description{
        min-height:450px;
      }
      .description table{
        width:100%;
        border-collapse:collapse;
        border-spacing:0;
        margin-bottom:10px;
      }
      .description thead th{
        background:#d3d3d3;
        border:1px solid gray;
        padding:5px;
      }
      .description tbody td{
        padding:5px;
      }
      .description tbody td:nth-of-type(4){
        text-align:center;
      }
      .description tbody td:nth-of-type(3),.description tbody td:nth-of-type(5),.description tbody td:nth-of-type(6),.description tbody td:nth-of-type(7),.description tbody td:nth-of-type(8){
        text-align:right;
      }
      .totals{
        border:1px solid #000;
        padding:20px;
      }
      .totals .item{
        margin-bottom:10px;
        margin-left:60%;
        width:40%;
        display:flex;
        justify-content:space-between;
      }
      .totals .item:last-child{
        margin-bottom:0;
      }
      .totals .item .content{
        text-align:right;
      }
      .footer{
        display:flex;
        padding:15px;
      }
      .footer .afip{
        width:calc(50% - 30px);
        align-items:center;
      }
      .footer .page{
        width:60px;
      }
      .footer .page .title{
        padding-right:10px;
      }
      .footer .cae{
        width:calc(50% - 30px);
      }
      .footer .cae .item{
        display:block;
      }
      .footer .cae .item .title{
        width:50%;
        display:inline-block;
        text-align:right;
        margin-right:10px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <!-- Header Begin -->
      <div class="header">original</div>
      <div class="names">
        <div class="title r-social">ar media services s.a.</div>
        <div class="type-container">
          <div class="type">b</div>
          <div class="code">cod. 006</div>
        </div>
        <div class="title factura">factura</div>
      </div>
      <div class="data">
        <div class="col">
            <div class="item">
              <div class="title">Razón Social:</div>
              <div class="content">AR MEDIA SERVICES S.A.</div>
            </div>
            <div class="item">
              <div class="title">Domicilio Comercial:</div>
              <div class="content">Av. Del Libertador 550 Piso:5 - VicenteLopez, Buenos Aires</div>
            </div>
            <div class="item">
              <div class="title">Condición frente al IVA:</div>
              <div class="content bold">IVA Responsable Inscripto</div>
            </div>
        </div>
        <div class="col">
            <div class="item">
              <div class="title">Punto de Venta:</div>
              <div class="content bold">00005</div>
              <div class="title" style="margin-left: 20px;">Comp. Nro:</div>
              <div class="content bold">00000001</div>
            </div>
            <div class="item">
              <div class="title">Fecha de Emisión:</div>
              <div class="content bold">13/05/2019</div>
            </div>
            <div class="item no-margin">
              <div class="title">CUIT:</div>
              <div class="content">33714784329</div>
            </div>
            <div class="item no-margin">
              <div class="title">Ingresos Brutos:</div>
              <div class="content">33-71478432-9</div>
            </div>
            <div class="item no-margin">
              <div class="title">Fecha de Inicio de Actividades:</div>
              <div class="content">01/03/2015</div>
            </div>
        </div>
      </div>
      <div class="period">
        <div class="item"><span class="title">Período Facturado Desde:</span><span>13/05/2019</span></div>
        <div class="item"><span class="title">Hasta:</span><span>13/05/2019</span></div>
        <div class="item"><span class="title">Fecha de Vto. para el pago:</span><span class="content">13/05/2019</span></div>
      </div>
      <div class="client">
        <div class="col">
            <div class="item"><span class="title">Doc.:</span><span class="content"></span></div>
            <div class="item"><span class="title">Condición frente al IVA:</span><span class="content">Consumidor Final</span></div>
            <div class="item"><span class="title">Condición de venta:</span><span class="content">Cuenta Corriente</span></div>
        </div>
        <div class="col">
            <div class="item"><span class="title">Apellido y Nombre / Razón Social:</span><span class="content"></span></div>
            <div class="item"><span class="title">Domicilio:</span><span class="content"></span></div>
        </div>
      </div>
      <!-- Header End -->
      <!-- Body Begin -->
      <div class="description">
        <table>
          <thead>
            <tr>
              <th>Código</th>
              <th>Producto / Servicio</th>
              <th class="number">Cantidad</th>
              <th>U. Medida</th>
              <th class="number">Precio Unit.</th>
              <th class="number">% Bonif</th>
              <th class="number">Imp. Bonif.</th>
              <th class="number">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>001</td>
              <td>001</td>
              <td>001</td>
              <td>001</td>
              <td>001</td>
              <td>001</td>
              <td>001</td>
              <td>001</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Body End -->
      <!-- Footer Begin -->
      <div class="totals">
        <div class="item">
            <div class="title">Subtotal: $</div>
            <div class="content">360,00</div>
        </div>
        <div class="item">
            <div class="title">Importe Otros Tributos: $</div>
            <div class="content">0</div>
        </div>
        <div class="item">
            <div class="title">Importe Total: $</div>
            <div class="content">360,00</div>
        </div>
      </div>
      <div class="footer">
        <div class="afip">
            <div class="svg">AFIP</div>
            <div class="description">Comprobante Autorizado</div>
        </div>
        <div class="page"><span class="title">Page</span><span class="content bold">1/1</span></div>
        <div class="cae">
            <div class="item"><span class="title">CAE N°:</span><span class="content">69219102911658</span></div>
            <div class="item"><span class="title">Fecha de Vto. de CAE:</span><span class="content">23/05/2019</span></div>
        </div>
      </div>
      <!-- Footer End -->
    </div>
  </body>
</html>
    `;

         pdf.create(html, options).toFile("./tmp/factura.pdf", function(err, res) {
           if (err) {
             console.log(err);
           } else {
             console.log(res);
           }
         });
       }
;
