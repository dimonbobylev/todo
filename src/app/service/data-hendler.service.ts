import {Injectable} from '@angular/core';
import {Category} from '../model/Category';
import {TestData} from '../data/TestData';
import {Task} from '../model/Task';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {TaskDAOArray} from '../data/impl/TaskDAOArray';
import {CategoryDAOArray} from '../data/impl/CategoryDAOArray';

@Injectable({
  providedIn: 'root'
})
export class DataHendlerService {

  // tasksSubject = new BehaviorSubject<Task[]>(TestData.tasks);
  // categoriesSubject = new BehaviorSubject<Category[]>(TestData.categories);
  private taskDaoArray = new TaskDAOArray();
  private categoriesDaoArray = new CategoryDAOArray();

  constructor() {
  }

 // tslint:disable-next-line:typedef
 //  filTask() {
 //    this.tasksSubject.next(TestData.tasks);
 //  }
 //
 //  // tslint:disable-next-line:typedef
 //  filTaskByCategory(category: Category) {
 //    const tasks = TestData.tasks.filter(task => task.category === category);
 //    this.tasksSubject.next(tasks);
 //  }
  getAllTasks(): Observable<Task[]> {
    return this.taskDaoArray.getAll();
  }
  getAllCategories(): Observable<Category[]> {
    return this.categoriesDaoArray.getAll();
  }
}
