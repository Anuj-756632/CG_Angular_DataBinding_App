import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'HelloWorldApp';

  //imgUrl="D:\Angular_DataBinding_App\media\bridgelab.png";
  ngOnInit(): void{
    this.title="Hello from BridgeLabz.";
  }
}
