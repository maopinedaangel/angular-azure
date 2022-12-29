import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  book: string = '';
  genre: string = '';
  genres = [
    {id: 1, name: 'Poesía'},
    {id: 2, name: 'Novela'},
    {id: 3, name: 'Ciencia-Ficción'}
  ];
  books: any = [];

  findGnreById(id: number) {
    let foundGenre = this.genres.find(g => g.id == id)
    console.log(foundGenre);
    return foundGenre;
  }

  onSubmit(e: Event) {
    e.preventDefault();

    //let genre = this.findGnreById(this.selectedGenre);
    let formData = {
      name: this.book,
      genre: this.findGnreById(+this.genre)?.name
    }
    console.log(formData);
    this.books.push(formData);
    console.log(this.books);
  }
}
