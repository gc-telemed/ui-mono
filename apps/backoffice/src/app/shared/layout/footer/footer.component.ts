import { Component } from '@angular/core';

import { faFacebook, faGithub, faGitlab, faMarkdown, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'gita-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {

  faGithub = faGithub;
  faGitlab = faGitlab;
  faMarkdown = faMarkdown;
  faTwitter = faTwitter;
  faFacebook = faFacebook;

}
