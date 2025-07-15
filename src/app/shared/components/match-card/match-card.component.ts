import {AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild} from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-match-card',
  imports: [
    NgForOf
  ],
  templateUrl: './match-card.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrl: './match-card.component.scss'
})
export class MatchCardComponent implements AfterViewInit {
  @ViewChild('swiperEl', { static: true }) swiperRef!: ElementRef;

  matches = [
    { team1: 'Сятра', team1_img:'images/teams/syatra.png', team1_goal:'4', team2: 'Шоркино', team2_img:'images/teams/shorkino.png',team2_goal:'2', date: '14 июня, 18:00', season: '2025', round: 1, location: 'Стадион «Трёхэтажка»' },
    { team1: 'Сарбаки', team1_img:'images/teams/sarbaki.png', team1_goal:'0', team2: 'Побои', team2_img:'images/teams/poboi.png',team2_goal:'1', date: '14 июня, 19:00', season: '2025', round: 1, location: 'Стадион «Трёхэтажка»' },
    { team1: 'Сарбаки', team1_img:'images/teams/sarbaki.png', team1_goal:'3',team2: 'Шоркино', team2_img:'images/teams/shorkino.png',team2_goal:'1', date: '21 июня, 18:00', season: '2025', round: 2, location: 'Стадион «Трёхэтажка»' },
    { team1: 'Сятра', team1_img:'images/teams/syatra.png', team1_goal:'0', team2: 'Побои', team2_img:'images/teams/poboi.png',team2_goal:'4', date: '27 июня, 19:00', season: '2025', round: 2, location: 'Стадион «Трёхэтажка»' },
    { team1: 'Шоркино', team1_img:'images/teams/shorkino.png',team1_goal:'0', team2: 'Побои',team2_img:'images/teams/poboi.png',team2_goal:'1', date: '28 июня, 18:00', season: '2025', round: 3, location: 'Стадион «Трёхэтажка»' },
    { team1: 'Сятра', team1_img:'images/teams/syatra.png', team1_goal:'2', team2: 'Сарбаки', team2_img:'images/teams/sarbaki.png', team2_goal:'3', date: '28 июня, 19:00', season: '2025', round: 3, location: 'Стадион «Трёхэтажка»' },
    { team1: 'Шоркино',team1_img:'images/teams/shorkino.png',team1_goal:'3', team2: 'Сятра',team2_img:'images/teams/syatra.png', team2_goal:'5', date: '5 июля, 18:00', season: '2025', round: 4, location: 'Стадион «Трёхэтажка»' },
    { team1: 'Побои',team1_img:'images/teams/poboi.png',team1_goal:'4', team2: 'Сарбаки', team2_img:'images/teams/sarbaki.png', team2_goal:'3', date: '5 июля, 19:00', season: '2025', round: 4, location: 'Стадион «Трёхэтажка»' },
    { team1: 'Побои',team1_img:'images/teams/poboi.png',team1_goal:'4', team2: 'Сятра',team2_img:'images/teams/syatra.png', team2_goal:'3', date: '12 июля, 18:00', season: '2025', round: 5, location: 'Стадион «Трёхэтажка»' },
    { team1: 'Шоркино',team1_img:'images/teams/shorkino.png',team1_goal:'0', team2: 'Сарбаки',team2_img:'images/teams/sarbaki.png', team2_goal:'10', date: '12 июля, 19:00', season: '2025', round: 5, location: 'Стадион «Трёхэтажка»' },
    { team1: 'Побои',team1_img:'images/teams/poboi.png',team1_goal:'-', team2: 'Шоркино',team2_img:'images/teams/shorkino.png',team2_goal:'-', date: '26 июля, 18:00', season: '2025', round: 6, location: 'Стадион «Трёхэтажка»' },
    { team1: 'Сарбаки', team1_img:'images/teams/sarbaki.png', team1_goal:'-', team2: 'Сятра',team2_img:'images/teams/syatra.png', team2_goal:'-', date: '26 июля, 19:00', season: '2025', round: 6, location: 'Стадион «Трёхэтажка»' },
  ];

  ngAfterViewInit(): void {
    const swiperEl = this.swiperRef.nativeElement as any;

    // Важно: Swiper Web Component требует ручной инициализации параметров
    swiperEl.initialize?.(); // вызывает инициализацию, если она не была завершена
  }
}
