import { Component, OnInit } from '@angular/core';
import { Package } from '../package.model';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.css'],
})
export class PackageListComponent implements OnInit {
  packages: Package[] = [
    new Package(
      'Churrasco',
      'Churrasco de Picanha',
      'https://www.receiteria.com.br/wp-content/uploads/receitas-de-churrasco-0.png'
    ),
    new Package(
      'Churrasco',
      'Churrasco de Maminha no Alho',
      'https://img.itdg.com.br/tdg/images/recipes/000/140/822/173354/173354_original.jpg?mode=crop&width=710&height=400'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
