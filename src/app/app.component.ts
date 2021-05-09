import {Component, OnInit} from '@angular/core';
import {Task} from './model/Task';
import {DataHendlerService} from './service/data-hendler.service';
import {Category} from './model/Category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Todo';
  tasks: Task[];
  categories: Category[];


  constructor(
    private dataHandler: DataHendlerService, // фасад для работы с данными
  ) {
  }

  ngOnInit(): void {
    this.dataHandler.getAllTasks().subscribe(tasks => this.tasks = tasks);
    this.dataHandler.getAllCategories().subscribe(categories => this.categories = categories);
  }


}
