import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import { faFacebook, faGithub, faGitlab, faMarkdown, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'gita-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {

  icons: IconDefinition[] = [faGithub, faGitlab, faMarkdown, faTwitter, faFacebook];

  protected year = new Date().getFullYear();

}
