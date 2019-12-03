import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { ClientsI} from '../../shared/models/clients.intrface';


@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private afs: AngularFirestore) { }

  public getAllClients(): Observable<ClientsI[]>{
    return this.afs.collection('Clients')
    .snapshotChanges()
    .pipe(
      map(actions =>
        actions.map(a =>{
          const data = a.payload.doc.data() as ClientsI;
          const id = a.payload.doc.id;
          return {id, ...data}
        })
        )
    );
  }
  



  


  public getOneClient(id:ClientsI):Observable<ClientsI>{
    return this.afs.doc<ClientsI>(`cliente/${id}`).valueChanges();
  } 
}
