import { Component, Input, Output, EventEmitter, ElementRef,  } from '@angular/core';
import { ViewController, PopoverController } from 'ionic-angular';

@Component({
  selector: 'icon-type',
  template: `
  <ion-item (click)="openIconSelector($event)">
    <ion-label>{{label}}</ion-label>
    <ion-icon item-right [name]="value" (click)="openIconSelector($event)"></ion-icon>
    <ion-icon item-right name="arrow-dropdown" (click)="openIconSelector($event)"></ion-icon>
  </ion-item>
  `
})
export class IconType {
  @Input()
  label: string;
  @Input()
  value: string;
  @Output() valueChange = new EventEmitter();

  constructor(private popoverCtrl: PopoverController) {

  }

  openIconSelector(event) {
    event.stopPropagation();
    let popover = this.popoverCtrl.create(IconTypePopover);
    popover.present({
      ev: event
    });
    popover.onDidDismiss((icon) => {
      this.value = icon;
      this.valueChange.emit(icon);
    });
  }
}
@Component({
  template: `
  <ion-row>
    <ion-col *ngFor="let icon of icons"><ion-icon [name]="icon" (click)="selectIcon(icon)"></ion-icon></ion-col>
  </ion-row>
  `
})
export class IconTypePopover {
  icons = ["add", "add-circle", "alarm", "albums", "alert", "american-football", "analytics", "aperture", "apps", "appstore", "archive", "arrow-back", "arrow-down", "arrow-dropdown", "arrow-dropdown-circle", "arrow-dropleft", "arrow-dropleft-circle", "arrow-dropright", "arrow-dropright-circle",
  "arrow-dropup", "arrow-dropup-circle", "arrow-forward", "arrow-round-back", "arrow-round-down", "arrow-round-forward", "arrow-round-up", "arrow-up", "at", "attach", "backspace", "barcode", "baseball", "basket", "basketball", "battery-charging", "battery-dead", "battery-full", "beaker", "beer",
  "bicycle", "bluetooth", "boat", "body", "bonfire", "book", "bookmark", "bookmarks", "bowtie", "briefcase", "browsers", "brush", "bug", "build", "bulb", "bus", "cafe", "calculator", "calendar", "call",
  "camera", "car", "card", "cart", "cash", "chatboxes", "chatbubbles", "checkbox", "checkmark", "checkmark-circle", "clipboard", "clock", "close", "close-circle", "closed-captioning", "cloud", "cloud-circle", "cloud-done", "cloud-download", "cloud-upload",
  "cloudy", "cloudy-night", "code", "code-download", "code-working", "cog", "color-fill", "color-filter", "color-palette", "color-wand", "compass", "construct", "contact", "contacts", "contract", "contrast", "copy", "create", "crop", "cube",
  "cut", "desktop", "disc", "document", "done-all", "download", "easel", "egg", "exit", "expand", "eye", "eye-off", "fastforward", "female", "filing", "film", "finger-print", "flag", "flame", "flash",
  "flask", "flower", "folder", "folder-open", "football", "funnel", "game-controller-a", "game-controller-b", "git-branch", "git-commit", "git-compare", "git-merge", "git-network", "git-pull-request", "glasses", "globe", "grid", "hammer", "hand", "happy",
  "headset", "heart", "help", "help-buoy", "help-circle", "home", "ice-cream", "image", "images", "infinite", "information", "information-circle", "ionic", "ionitron", "jet", "key", "keypad", "laptop", "leaf", "list",
  "list-box", "locate", "lock", "log-in", "log-out", "magnet", "mail", "mail-open", "male", "man", "map", "medal", "medical", "medkit", "megaphone", "menu", "mic", "mic-off", "microphone", "moon",
  "more", "move", "musical-note", "musical-notes", "navigate", "no-smoking", "notifications",
  "notifications-off", "nuclear", "nutrition", "open", "options", "outlet", "paper", "paper-plane", "partly-sunny", "pause", "paw", "people", "person", "person-add", "phone-landscape", "phone-portrait", "photos", "pie", "pin", "pint",
  "pizza", "plane", "planet", "play", "podium", "power", "pricetag", "pricetags", "print", "pulse", "qr-scanner", "quote", "radio", "radio-button-off", "radio-button-on", "rainy", "recording", "redo", "refresh", "refresh-circle",
  "remove", "remove-circle", "reorder", "repeat", "resize", "restaurant", "return-left", "return-right",
  "reverse-camera", "rewind", "ribbon", "rose", "sad", "school", "search", "send", "settings", "share", "share-alt", "shirt", "shuffle", "skip-backward", "skip-forward", "snow", "speedometer", "square", "star", "star-half",
  "stats", "stopwatch", "subway", "sunny", "swap", "switch", "sync", "tablet-landscape", "tablet-portrait", "tennisball", "text", "thermometer", "thumbs-down", "thumbs-up", "thunderstorm", "time", "timer", "train", "transgender", "trash",
  "trending-down", "trending-up", "trophy", "umbrella", "undo", "unlock", "videocam", "volume-down", "volume-mute", "volume-off", "volume-up", "walk", "warning", "watch", "water", "wifi", "wine", "woman", "android", "angular",
  "apple", "bitcoin", "buffer", "chrome", "codepen", "css3", "designernews", "dribbble", "dropbox", "euro", "facebook", "foursquare", "freebsd-devil", "github", "google", "googleplus", "hackernews", "html5", "instagram", "javascript",
  "linkedin", "markdown", "nodejs", "octocat", "pinterest", "playstation", "python", "reddit",
"rss", "sass", "skype", "snapchat", "steam", "tumblr", "tux", "twitch", "twitter", "usd", "vimeo", "whatsapp", "windows", "wordpress", "xbox", "yahoo", "yen", "youtube"];
  constructor(public viewCtrl: ViewController) {

  }

  selectIcon(icon) {
    this.viewCtrl.dismiss(icon);
  }
}
