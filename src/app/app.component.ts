import { Component, DestroyRef, inject } from '@angular/core';

const template = `
<h1>{{title}}</h1>
<hr/>
<app-display></app-display>
`

@Component({
  selector: 'app-root',
  template : template
})
export class AppComponent {
   title = "lazy loading component demo";
}
