import { Component } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.css'
})
export class PartnersComponent {
  partners = [ 
    { company: 'Microsoft', trademark: 'https://developer.microsoft.com/_devcom/images/logo-ms-social.png', sponsorship: 'Platinum', website: 'https://www.microsoft.com/en-ph' },   
    { company: 'Apple', trademark: 'https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png', sponsorship: 'Gold', website: 'https://www.apple.com' }, 
    { company: 'Amazon', trademark: 'https://i.insider.com/5ebaeedee3c3fb22cf13fd47', sponsorship: 'Silver', website: 'https://www.amazon.com' }, 
    { company: 'Google', trademark: 'https://blog.hubspot.com/hs-fs/hubfs/image8-2.jpg?width=600&name=image8-2.jpg', sponsorship: 'Bronze', website: 'https://www.google.com' }, 
    ];
}
