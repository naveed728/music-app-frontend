import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'music-app-frontend';
  constructor(private authService: AuthService) {}

  imageUrls: string[] = [
    'https://images.pexels.com/photos/894156/pexels-photo-894156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/2789128/pexels-photo-2789128.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/167526/pexels-photo-167526.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/2701570/pexels-photo-2701570.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3450887/pexels-photo-3450887.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/3618352/pexels-photo-3618352.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1766236/pexels-photo-1766236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/379962/pexels-photo-379962.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/7149172/pexels-photo-7149172.jpeg?auto=compress&cs=tinysrgb&w=600',
    // Add more image URLs as needed
  ];
  get isAuthenticated(): boolean {
    return this.authService.isAuthenticated;
  }

}
