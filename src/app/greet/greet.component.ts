// import { Component, Input, OnInit, ViewContainerRef, inject } from '@angular/core';
// import { CommonModule } from '@angular/common';

// const template = `
//    <h2>{{message}} </h2>
// `
// @Component({
//   selector: 'app-greet',
//   standalone: true,
//   imports: [CommonModule],
//   template:template
// })
// export class GreetComponent implements OnInit {
//   @Input({required:true}) message? : string; 
//   vcrf = inject(ViewContainerRef);
//   setting = [
//     {
//       title :'datahub',
//       widgets : [
//         'w1',
//         'w3'
//       ]
//     },
//     {
//       title :'compliance1',
//       widgets : [
//         'w1',
//         'w4'
//       ]

//     }
//   ]

//   ngOnInit(){

//     this.setting.forEach(r => {
//       if(r.title == "datahub"){
//          this.loadDataHub(r.widgets);
//       }
//       else if (r.title == "compliance"){
//         this.loadCompilance(r.widgets);
//       }
//       else if (r.title = "data stweradhip"){

//       }
//     })

//   }

//   async loadDataHub(widgets:any){

//     console.log(widgets);

//     const {DatahubComponent} = await import('../datahub/datahub.component');
//     let dhub = this.vcrf.createComponent(DatahubComponent);
//     dhub.instance.widgets = widgets; 

//   }


//   async loadCompilance(widgets:any){

//     const {ComplianceComponent} = await import('../compliance/compliance.component');
//     let compilance = this.vcrf.createComponent(ComplianceComponent);
//    // dhub.instance.widgets = widgets; 

//   }
// }



import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

const template = `
   <h2>{{message}} </h2>
   <button (click)='sendMessage()'>Send Message </button>
`
@Component({
  selector: 'app-greet',
  standalone: true,
  imports: [CommonModule],
  template: template
})
export class GreetComponent {
  @Input({ required: true }) message?: string;
  @Output() messageEvent = new EventEmitter<boolean>();
  sendMessage(): void {
    this.messageEvent.emit(true);
  }
}
