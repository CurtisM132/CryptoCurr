import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private chartData: Array<any>;
  objectKeys = Object.keys;
  cryptos: any;

  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.getPrices()
      .subscribe(res => {
        this.cryptos = res;
        console.log(res);
      });

    setTimeout(() => {
      this.generateData();
        setInterval(() => this.generateData(), 3000);
      }, 1000);
    }
  
    generateData() {
      this.chartData = [];
      for (let i = 0; i < (8 + Math.floor(Math.random() * 10)); i++) {
        this.chartData.push([
          `Index ${i}`,
          Math.floor(Math.random() * 100)
        ]);
      }
    }
}
