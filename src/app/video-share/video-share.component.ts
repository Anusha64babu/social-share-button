import { Component } from '@angular/core';

@Component({
  selector: 'app-video-share',
  templateUrl: './video-share.component.html',
  styleUrls: ['./video-share.component.css']
})
export class VideoShareComponent {
  showShareIcons = false;
  currentUrl: string = window.location.href;

  toggleShareIcons() {
    this.showShareIcons = !this.showShareIcons;
  }

  shareOnLinkedIn() {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${this.currentUrl}`;
    window.open(url, '_blank');
  }

  shareOnWhatsApp() {
    const url = `https://api.whatsapp.com/send?text=${this.currentUrl}`;
    window.open(url, '_blank');
  }

  shareOnInstagram() {
    alert('Instagram does not support direct URL sharing. You can share the link manually.');
  }

  shareOnTwitter() {
    const url = `https://twitter.com/intent/tweet?url=${this.currentUrl}`;
    window.open(url, '_blank');
  }
}
