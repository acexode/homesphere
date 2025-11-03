import { Component } from '@angular/core';

interface VehicleEntry {
  plate: string;
  owner: string;
  type: string;
  slot: string;
  status: 'Authorized' | 'Visitor' | 'Violation';
}

@Component({
  standalone: false,
  selector: 'app-vehicle-parking',
  templateUrl: './vehicle-parking.page.html',
  styleUrls: ['./vehicle-parking.page.scss'],
})
export class VehicleParkingPage {
  vehicles: VehicleEntry[] = [
    { plate: 'KA 03 ND 5521', owner: 'Tower B - 904', type: 'Resident', slot: 'B2-45', status: 'Authorized' },
    { plate: 'KA 05 TR 9810', owner: 'Visitor', type: 'Guest', slot: 'GUEST-12', status: 'Visitor' },
    { plate: 'MH 01 AB 1299', owner: 'Unknown', type: 'Unknown', slot: 'Fire-lane', status: 'Violation' },
  ];
}
