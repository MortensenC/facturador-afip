import pdf from "html-pdf";

function getHtmlHeader() { 
    return `<div style="height: 100px; border: 1px solid #C4BEBD; border-radius: 3px; padding: 10px;">
    <div style="float: left; width: 40%; height: 99px;"></div>
    <div style="float: left; width: 19.5%; height: 99px;">
        <div style=" text-align: center;">
            <div style="width: 40px; height: 40px; background-color: #C4BEBD; margin: auto; font-size: 2em; font-family: Arial, Helvetica, sans-serif;">A</div>
            <p style="font-size: 1em; font-family: Arial, Helvetica, sans-serif;">Cod. 01</p>
        </div>
    </div>
    <div style="float: left; width: 40%; height: 99px;"></div>
</div>`;
}
function getHtmlFooter() { 
    return '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>';
}
export function generarPDF() {
         var options: pdf.CreateOptions = {
           format: "A4",
           paginationOffset: 1,
           header: {
             height: "45mm",
             contents: getHtmlHeader(),
               
           },
           footer: {
             height: "28mm",
             contents: {
               first: "Cover page",
               2: "Second page", // Any page number is working. 1-based index
               default: getHtmlFooter(),
               last: "Last Page"
             }
           }
         };

         var html = `
         <!doctype html>
    <html>
       <head>
            <meta charset="utf-8">
            <title>PDF Result Template</title>
            <style>
                h1 {
                    color: green;
                }
            </style>
        </head>
        <body>
            <div id="pageHeader">Default header</div>
            <div>
            <h1>Esto es un test de html-pdf</h1>
            <p>Estoy generando PDF a partir de este código HTML sencillo</p>
            </div>
            <div id="pageFooter">Default footer</div>
        </body>
    </html>
    `;

         pdf.create(html, options).toFile("./salida.pdf", function(err, res) {
           if (err) {
             console.log(err);
           } else {
             console.log(res);
           }
         });
       }
;
