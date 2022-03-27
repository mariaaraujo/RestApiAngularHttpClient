import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'RestApiAngularHttpClient';

  constructor(private http: HttpClient) {
  }
 

  listarTodosItens() {
    this.http.get(`/api/getAll`).subscribe(resultado => console.log(resultado));
   }

   adicionarItem(description: string) {
    var item = { description, done: false};
    this.http.post(`/api/post`,item).subscribe(resultado => {console.log(resultado)});
   }

   removerItem(id: string) {
    this.http.delete(`/api/delete/${id}`).subscribe(resultado => {console.log(resultado)});
   }

   atualizarItem(id: string, description: string, done: boolean) {
    var item = {description, done};
    this.http.patch(`/api/update/${id}`,item).subscribe(resultado => {console.log(resultado)});
   }
   
}

