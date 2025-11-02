import { Component } from '@angular/core';

@Component({
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.page.html',
  styleUrls: ['./qr-scanner.page.scss'],
})
export class QrScannerPage {
  scanning = false;
  lastScan: string | null = null;

  async startScanner() {
    this.scanning = true;
    // Placeholder for Capacitor barcode scanner integration
    setTimeout(() => {
      this.lastScan = 'HS-INVITE-' + Date.now();
      this.scanning = false;
    }, 1500);
  }
}
