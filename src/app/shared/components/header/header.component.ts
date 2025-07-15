import { Component } from '@angular/core';
import {NgIf, NgOptimizedImage} from '@angular/common';
import {
  CdkMenu,
  CdkMenuGroup,
  CdkMenuItem,
  CdkMenuItemCheckbox,
  CdkMenuItemRadio,
  CdkMenuTrigger
} from '@angular/cdk/menu';
import {CdkConnectedOverlay, CdkOverlayOrigin} from '@angular/cdk/overlay';
import {MatAnchor, MatButton} from '@angular/material/button';

@Component({
  selector: 'app-header',
  imports: [
    NgOptimizedImage,
    NgIf,
    CdkMenuTrigger,
    CdkMenu,
    CdkMenuItemCheckbox,
    CdkMenuGroup,
    CdkMenuItemRadio,
    CdkMenuItem,
    CdkConnectedOverlay,
    CdkOverlayOrigin,
    MatAnchor,
    MatButton,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuOpen = false;
  isSubmenuOpen = false;
  isSubMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleSubmenu() {
    this.isSubmenuOpen = !this.isSubmenuOpen;
  }

  bold = false;
  italic = false;

  sizes = ['Small', 'Normal', 'Large'];
  selectedSize: string | undefined = 'Normal';

  reset() {
    this.bold = false;
    this.italic = false;
    this.selectedSize = 'Normal';
  }
}
