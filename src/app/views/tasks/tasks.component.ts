import {Component, OnInit} from '@angular/core';
import {Task} from 'src/app/model/Task';
import {MatTableDataSource} from '@angular/material/table';
import {DataHendlerService} from '../../service/data-hendler.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  // поля для таблицы (те, что отображают данные из задачи - должны совпадать с названиями переменных класса)
  displayedColumns: string[] = ['color', 'id', 'title', 'date', 'priority', 'category'];
  dataSource: MatTableDataSource<Task>; // контейнер - источник данных для таблицы
  // private dataSource: MatTableDataSource<Task>; // контейнер - источник данных для таблицы


  tasks: Task[];

  constructor(private dataHandler: DataHendlerService) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.dataHandler.tasksSubject.subscribe(tasks => this.tasks = tasks);

    // датасорс обязательно нужно создавать для таблицы, в него присваивается любой источник (БД, массивы, JSON и пр.)
    this.dataSource = new MatTableDataSource();

    this.refreshTable();
  }


  toggleTaskCompleted(task: Task): void {
    task.completed = !task.completed;
  }

  // в зависимости от статуса задачи - вернуть цвет названия
  private getPriorityColor(task: Task): string {

    // цвет завершенной задачи
    if (task.completed) {
      return '#F8F9FA'; // TODO вынести цвета в константы (magic strings, magic numbers)
    }

    if (task.priority && task.priority.color) {
      return task.priority.color;
    }

    return '#fff'; // TODO вынести цвета в константы (magic strings, magic numbers)

  }

  // показывает задачи с применением всех текущий условий (категория, поиск, фильтры и пр.)
  private refreshTable(): void {

    this.dataSource.data = this.tasks; // обновить источник данных (т.к. данные массива tasks обновились)
    console.log(this.dataSource.data);


  }
}
