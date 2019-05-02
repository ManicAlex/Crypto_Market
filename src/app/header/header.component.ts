import { Component, OnInit      } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService       } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  

  constructor(
    private router      : Router,
    private route       : ActivatedRoute,
    public translate    : TranslateService
  ) {
 
    translate.setDefaultLang('en');
  }

  ngOnInit() {


  }

  useLanguage(language: string) {
    this.translate.use(language);
}

}
