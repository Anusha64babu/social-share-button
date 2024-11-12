import { Component } from '@angular/core';

@Component({
  selector: 'app-share-buttons',
  templateUrl: './share-buttons.component.html',
  styleUrls: ['./share-buttons.component.css']
})
export class ShareButtonsComponent {
  currentUrl: string = window.location.href;

  shareOnLinkedIn() {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${this.currentUrl}`;
    window.open(url, '_blank');
  }

  shareOnWhatsApp() {
    const url = `https://api.whatsapp.com/send?text=${this.currentUrl}`;
    window.open(url, '_blank');
  }

  shareOnInstagram() {
    alert('Instagram does not support URL sharing. You can share the link manually.');
  }

  shareOnTwitter() {
    const url = `https://twitter.com/intent/tweet?url=${this.currentUrl}`;
    window.open(url, '_blank');
  }
}
