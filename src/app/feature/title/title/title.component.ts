import { Component, Input, OnInit } from '@angular/core';
import { TitleService } from '../service/title.service';
import { Title } from '../model/title';

@Component({
  selector: 'writers-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  constructor(private service: TitleService) { }

  obra: Title = {
    author: '',
    title: ',',
    lines: [],
    linecount: '',

  }


  @Input() title: string = '';

  ngOnInit(): void { this.getTitle() }

  getTitle() {

    this.service.find(this.title).subscribe((res)=> this.obra = res[0]);
  }

}
