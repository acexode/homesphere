import { Component } from '@angular/core';

interface Vendor {
  name: string;
  service: string;
  rating: number;
  contact: string;
}

@Component({
  standalone: false,
  selector: 'app-vendor-directory',
  templateUrl: './vendor-directory.page.html',
  styleUrls: ['./vendor-directory.page.scss'],
})
export class VendorDirectoryPage {
  vendors: Vendor[] = [
    { name: 'SparkClean', service: 'Deep cleaning', rating: 4.6, contact: '+91 98765 43210' },
    { name: 'GreenScape', service: 'Landscaping', rating: 4.9, contact: '+91 91234 56780' },
  ];
}
