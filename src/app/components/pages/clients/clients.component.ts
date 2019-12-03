import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientsService} from '../clients.service';
import { Observable, from } from 'rxjs';
// import { ClientsI } from 'src/app/shared/models/clients.intrface';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import { ClientsI } from 'src/app/shared/models/clients.intrface';
import {LoginService} from '../../auth/login.service';
import {AngularFireAuth} from '@angular/fire/auth';
import {UserI} from '../../../shared/models/user.interface'



@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})

export class ClientsComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'nameClient', 'age', 'state','serviceType', 'rating'  ];
  dataSource = new MatTableDataSource();
  selection = new SelectionModel(true, []);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: ClientsI): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.nameClient + 1}`;
  }



  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  
  public client$ :Observable <ClientsI>;
  

  
  constructor(private route:ActivatedRoute, private clientSvc: ClientsService, private loginSvc:LoginService) { }
  
  public isCobranza:any = null;
  public userUid:any = null;

  ngOnInit() {
// función que filtra
    this.clientSvc.getAllClients().subscribe(clients => 
      this.dataSource.data = clients.filter((item) => item.rating <= 6 )
      );
    this.getCurrentUser();
   

  }

  getCurrentUser() {
     this.loginSvc.isAuth().subscribe(auth =>{
      if(auth){
        this.userUid = auth.uid;
         this.loginSvc.isAdmin(this.userUid).subscribe(userRole => {
          this.isCobranza = Object.assign({}, userRole.roles)
          this.isCobranza = this.isCobranza.hasOwnProperty('cobranza')
        })
      }
    })
  }
  
  ngAfterViewInit(){
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort = this.sort;
  }

  // onEditClient(client:ClientsI){
  //   console.log('Se ha editado', client);
    
  // }

  // onDeleteClient(client:ClientsI){
  //   console.log('Se ha eliminado el dato', client);
  // }



}






