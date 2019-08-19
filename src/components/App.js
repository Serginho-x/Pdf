import React, { Component } from "react";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

import '../styles/App.css';

class App extends Component {

  state = {
    text: "New Title"
  }

    makePdf = () => {
        var documentDefinition = {
          pageSize: {
            width: 800,
            height: 450  
          },
          background: function () {
              return {
                canvas: [
              {
                type: 'rect',
                x: 0, y: 0, w: 800, h: 450,
                color: 'green'
              }
            ]
            };
          },
            content: 
          [
              {
                table: 
              {
                    headerRows: 1,
                widths: [ '*', '*', '*', '*' ],
                    body: [
                      [
                      { text: this.state.text, style: 'tableHeader' }, 
                      { text: 'Header 2', style: 'tableHeader' }, 
                      { text: 'Header 3', style: 'tableHeader' }
                      ],
                    [
                        { text: 'Hello' }, 
                      { text: 'I' }, 
                      { text: 'am' }
                    ],
                    [
                        { text: 'a' }, 
                      { text: 'table' }, 
                      { text: '.' }
                    ]
                  ]
                }
              },
            {
                text: 'pdfmake', style: 'header' 
            },
            'pdfmake does not generate pdfs from the html. Rather, it generates them directly from javascript.',
                  'It is very fast, but very limited, especially compared to PHP alternatives.',
                  'To get a pdf that looks like the page, you could use html2canvas, which generates an image that can be inserted into the pdf. I think this is a hack and not ideal',
            ],
          styles: 
          {
              header: 
            {
              fontSize: 18,
              bold: true,
              margin: [0, 10, 0, 10],
              alignment: 'center'
            },
              tableHeader: 
            {
                fillColor: '#4CAF50',
                color: 'white'
            },
            defaultStyle: {
              fontSize: 15,
              bold: true
            }
          }
        };
        
        pdfMake.createPdf(documentDefinition).download('testdoc.pdf');
            }
        

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-5">
                        <h1>Todo</h1>
                        <button onClick={() => this.makePdf()} >Generate PDF</button>
                    </div>
                    <div className="col-5">
                        <h1>My React App!</h1>
                    </div>
                    <div className="col-2">
                        <h1>Trash</h1>
                    </div>
                </div>                
            </div>
        );
    }
}

export default App;