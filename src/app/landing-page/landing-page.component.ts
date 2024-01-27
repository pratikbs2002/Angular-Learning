import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { DatePipe } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
// import
@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    NavbarComponent,
    HomeComponent,
    CommonModule,
    DatePipe,
    FormsModule,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {
  Username = 'Pratik Suthar';
  Email = 'pratiksuthar1020@gmail.com';
  items = ['item1', 'item2', 'item3', 'item4'];
  heroes = [
    'Thor',
    'SpiderMan',
    'CaptainAmerica',
    'IronMan',
    'Black Widow',
    'Hulk',
  ];

  addItem(newItem: string) {
    this.items.push(newItem);
  }
  addHero(newItem: string) {
    this.heroes.push(newItem);
    alert(newItem);
  }

  codeImageUrl = '../../assets/coding mania.png';
  ironManImageUrl =
    'https://i.pinimg.com/1200x/50/f0/7a/50f07aa7c5e997a9b5f099cc7664c76c.jpg';
  thorImageUrl =
    'https://i.pinimg.com/originals/14/db/bc/14dbbc18aec0c00e4c4f5650e2d30552.jpg';
  spiderManImageUrl =
    'https://i.pinimg.com/originals/cc/40/34/cc4034b842a4a33113ba1325632c42a1.jpg';
  // isUnchanged: boolean = false;
  isUnchanged: boolean = true;

  alertButton = () => {
    alert('button Clicked ');
  };

  // style binding.........

  tableStyle = 'background-color: #022539;color: #f9bd24;';

  //pipe

  birthday = new Date(1988, 3, 15);
  currentDate: number = Date.now();

  // ngForm
  getData = (data: any) => {
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const value: any = data[key];
        alert(`${key}: ${value}`);
        console.log(`${key}: ${value}`);
      }
    }
  };

  // if-else condition
  temp = true;
  changeState = () => {
    this.temp = !this.temp;
  };

  //switch condition
  options: string[] = ['Thor', 'IronMan', 'SpiderMan'];
  selectedOption: string = 'Thor';
}
