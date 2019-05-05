import { Component, OnInit      } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService       } from '@ngx-translate/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  

  constructor(
    private router      : Router,
    private route       : ActivatedRoute,
    public translate    : TranslateService,
    private _location   : Location
  ) {
    translate.addLangs      (['En', 'Fr']);
    translate.setDefaultLang('En');
  }

  backClicked() {
    this._location.back();
  }

  ngOnInit() {

    


  }


}
