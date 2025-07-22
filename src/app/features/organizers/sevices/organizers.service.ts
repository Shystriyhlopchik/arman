import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { TeamMember } from '../components/profile-card/team-member.model';

const TEAM_MEMBERS: TeamMember[] = [
    {
        id: 'dmitriy-stepanov',
        fullName: 'Димитрий Степанов',
        photoUrl: 'images/organization-team/dmitriy-stepanov.png',
        bio: 'Отвечаю за всё, что связано с проведением футбольных матчей и не только.',
        route: '/about/team/dmitriy-stepanov',
    },
    {
        id: 'andrey-illarinov',
        fullName: 'Андрей Илларионов',
        photoUrl: 'images/organization-team/andrey-illarinov.png',
        bio: 'Отвечаю за формат соревнований.',
        route: '/about/team/andrey-illarinov',
    },
    {
        id: 'vasilev-leonid',
        fullName: 'Васильев Леонид',
        photoUrl: 'images/organization-team/not-photo.png',
        bio: 'Ровный газон, чёткие линии — это всё моя работа.',
        route: '/about/team/vasilev-leonid',
    },
    {
        id: 'spiridonov-evgeniy',
        fullName: 'Спиридонов Евгений',
        photoUrl: 'images/organization-team/not-photo.png',
        bio: 'Вместе с Леонидом тружусь над качеством поля.',
        route: '/about/team/spiridonov-evgeniy',
    },
    {
        id: 'alina-grigoreva',
        fullName: 'Алина Григорьева',
        photoUrl: 'images/organization-team/alina-grigoreva.png',
        bio: 'Снимаю матчи.',
        route: '/about/team/alina-grigoreva',
    },
    {
        id: 'andreev-dimitriy',
        fullName: 'Андреев Димитрий',
        photoUrl: 'images/organization-team/andreev-dimitriy.png',
        bio: 'Сайт, социальные сети — это моя зона ответственности.',
        route: '/about/team/andreev-dimitriy',
    },
];

@Injectable({
    providedIn: 'root',
})
export class OrganizersService {
    team$ = of(TEAM_MEMBERS);
    constructor() {}
}
