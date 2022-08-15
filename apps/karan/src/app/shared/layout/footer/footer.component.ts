import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faGitlab, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Component } from '@angular/core';

@Component({
  selector: 'gita-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {

  icons: IconDefinition[] = [faGithub, faGitlab, faTwitter, faFacebook];

}
