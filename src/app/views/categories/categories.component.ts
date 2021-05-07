import {Component, OnInit} from '@angular/core';
import {DataHendlerService} from '../../service/data-hendler.service';
import {Category} from '../../model/Category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category[];
  selectedCategory: Category;

  constructor(private dataHandler: DataHendlerService) {
  }

  ngOnInit(): void {
    this.dataHandler.categoriesSubject.subscribe(categories => this.categories = categories);
  }

  // tslint:disable-next-line:typedef
  showTaskByCategory(category: Category) {
    this.selectedCategory = category;
    this.dataHandler.filTaskByCategory(category);
  }
}
