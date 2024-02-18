import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  imageSrc: string = '';
  showLayer: boolean = false;

  // arrImg: string[] = [];
  // image: string = '';
  getImgSrc(e: any) {
    this.imageSrc = e.src;
    this.showLayer = true;
  }
  closeLayer() {
    this.showLayer = false;
  }
}
