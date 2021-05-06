import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/Task';
import {DataHendlerService} from '../../service/data-hendler.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[];

  constructor(private dataHandler: DataHendlerService) { }

  ngOnInit(): void {
    this.tasks = this.dataHandler.getTask();
    console.log(this.tasks);
  }

}
