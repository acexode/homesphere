import { Component } from '@angular/core';

interface TenantRecord {
  name: string;
  unit: string;
  leaseEnd: string;
  status: 'Active' | 'Expiring';
}

@Component({
  standalone: false,
  selector: 'app-tenant-management',
  templateUrl: './tenant-management.page.html',
  styleUrls: ['./tenant-management.page.scss'],
})
export class TenantManagementPage {
  tenants: TenantRecord[] = [
    { name: 'Kiran & Kavya Rao', unit: 'Tower E - 1502', leaseEnd: '31 Mar 2024', status: 'Active' },
    { name: 'Arvind Singh', unit: 'Tower C - 803', leaseEnd: '15 Feb 2024', status: 'Expiring' },
  ];
}
