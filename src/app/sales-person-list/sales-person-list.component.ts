import { Component } from '@angular/core';
import { SalesPerson } from './SalesPerson';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent {
  title = "hello master class";
  salesPersonList : SalesPerson[]=[
    new SalesPerson("Asma","gharbi","asmagharbi@gmail.com",50000),
    new SalesPerson("Sarra","rouahi","Sarrarouahi@gmail.com",40000),
    new SalesPerson("Amine","hmem","Aminehmem@gmail.com",90000),
    new SalesPerson("Yassine","Rezgui","YassineRezgui@gmail.com",90000),
    new SalesPerson("Yassine","Rezgui","YassineRezgui@gmail.com",90000),
    new SalesPerson("Yassine","Rezgui","YassineRezgui@gmail.com",90000),
    new SalesPerson("Yassine","Rezgui","YassineRezgui@gmail.com",90000),
    new SalesPerson("Yassine","Rezgui","YassineRezgui@gmail.com",90000)
  ];

}
