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
    this.dataHandler.getAllCategories().subscribe(categories => this.categories = categories);
    // this.dataHandler.categoriesSubject.subscribe(categories => this.categories = categories);
  }


  showTasksByCategory(category: Category): void {
    // this.selectedCategory = category;
    // this.dataHandler.filTaskByCategory(category);
  }
}
