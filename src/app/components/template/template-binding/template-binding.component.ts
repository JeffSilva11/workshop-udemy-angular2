import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {
  public name = 'Dener Troquatte';
  public age = 32;
  public condition = this.age > 1 ? 'Teste' : 'Teste2';

  public sum(val1: number, val2: number) {
    return val1 + val2;
  }

}
