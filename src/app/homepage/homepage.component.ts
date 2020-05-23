import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf'; 
import { Http, Response } from '@angular/http';


export type Item = { id: number, name: string };
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  items: Array<Item>;
  constructor(private http: Http) { }

  ngOnInit(): void {
  }
  data={};
  xlsxdata=[];
  keys=[];
  arrayBuffer:any;
  file:File;
  incomingfile(event) 
    {
    this.file= event.target.files[0]; 
    }
  
   Upload() {
        let fileReader = new FileReader();
          fileReader.onload = (e) => {
              this.arrayBuffer = fileReader.result;
              var data1 = new Uint8Array(this.arrayBuffer);
              var arr = new Array();
              for(var i = 0; i != data1.length; ++i) arr[i] = String.fromCharCode(data1[i]);
              var bstr = arr.join("");
              var workbook = XLSX.read(bstr, {type:"binary"});
             var first_sheet_name = workbook.SheetNames[0];
              var worksheet = workbook.Sheets[first_sheet_name];
              console.log(XLSX.utils.sheet_to_json(worksheet,{raw:true}));
              this.data=XLSX.utils.sheet_to_json(worksheet,{raw:true});
              

              for (let k in this.data){
                if(this.data.hasOwnProperty(k)){
                  this.xlsxdata.push(this.data[k]);
                }
              }
            for(let y in this.xlsxdata){
              this.keys.push(Object.keys(this.xlsxdata[y]));
              break;
            }
            this.keys=this.keys[0]
          }
          fileReader.readAsArrayBuffer(this.file);
  }
  
  @ViewChild('xlsxcontnt', {static: false}) xlsxcontnt: ElementRef;
  Download() {
    const doc = new jsPDF();

    const specialElementHandlers = {
      '#editor': function (element, renderer) {
        return true;
      }
    };

    const xlsxcontnt = this.xlsxcontnt.nativeElement;

    doc.fromHTML(xlsxcontnt.innerHTML, 15, 15, {
      width: 550,
      'elementHandlers': specialElementHandlers
    });
    doc.setFont("times");
    doc.setFontType("normal");
    doc.setFontSize(12);
    doc.save('TableToPdf.pdf');
  }

//   ShowJson(){
//     // title = 'json-file-read-angular';
//     // public countryList:{name:string, code:string}[] = countries;
//     // let navItems = this.http.get("../../package.json");
//     //     console.log(navItems);
//     this.http
//       .get("/assets/mock/test/test.json")
//       .map(data => data.json() as Array<Item>)
//       .subscribe(data => {
//         this.items = data;
//         console.log(data);
//       });
//   }
 }
