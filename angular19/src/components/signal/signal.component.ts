import { ChangeDetectionStrategy, Component,signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalComponent {
  firstName = signal('Avinash')
  lastName = signal<string>('Abbina')
  courseName: string = 'Angular'

  rollNo = signal<number>(0)

  constructor(){
    setTimeout(()=>{
      this.courseName = 'React Js'
      // this.firstName.set('salar')
    },2000)
  }

  increment(){
    this.rollNo.update(rollNo=>rollNo+1)
  }
}
