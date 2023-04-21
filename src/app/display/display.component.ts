import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild, ViewContainerRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  private fb = inject(FormBuilder);
  mode : FormGroup; 
  @ViewChild('vi',{read:ViewContainerRef, static:false}) vl?: ViewContainerRef; 
  constructor(){
    this.mode = this.fb.group(
      {
        option: this.fb.control('video')
      }
    )
  }
  ngOnInit(): void {
    this.modeChange();
    this.loadVideo();
  }

  modeChange(){
    this.mode.get('option')?.valueChanges.subscribe((m:any)=>{
      this.vl?.clear();
          if(m == 'video'){
             this.loadVideo();
          }
          else if(m== 'image'){
             this.loadImage();
          }
    })
  }

  async loadImage(){
   const {ImageComponent} = await import('../image/image.component');
   let imgcomponent = this.vl?.createComponent(ImageComponent);
   if(imgcomponent){
    imgcomponent.instance.imgSrc ="Image Source";
   }
  }

  async loadVideo(){
    const {VideoComponent} = await import('../video/video.component');
    let videocomponent = this.vl?.createComponent(VideoComponent);
    if(videocomponent){
     videocomponent.instance.videoSrc ="Video Source";
    }
  }

}
