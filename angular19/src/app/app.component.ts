import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { DataBindingComponent } from '../components/data-binding/data-binding.component';
import { NgIfComponent } from '../components/ng-if/ng-if.component';
import { NgForComponent } from '../components/ng-for/ng-for.component';
import { NgClassComponent } from '../components/ng-class/ng-class.component';
import { NgStyleComponent } from '../components/ng-style/ng-style.component';
import { ControlFlowComponent } from '../components/control-flow/control-flow.component';
import { SignalComponent } from '../components/signal/signal.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular19';
}
