import { Component } from '@angular/core';

@Component({
  selector: 'app-root',//css选择器，表示这个组件可以通过app-root来调用，index.html中有个<app-root>Loading...</app-root>标签，这个标签用来展示该组件的内容
  templateUrl: './app.component.html',//组件的模板，定义了组件的布局和内容
  styleUrls: ['./app.component.css']//该模板引用的css样式
})
export class AppComponent {
  title = 'My First Angular App';
}
