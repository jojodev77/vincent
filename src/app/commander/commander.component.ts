import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commander',
  templateUrl: './commander.component.html',
  styleUrls: ['./commander.component.css']
})

export class CommanderComponent implements OnInit {
  $: any;
  isChecked = false;
  constructor() { }

  ngOnInit() {
    $('#super').change(function() {
      if ($(this).prop('checked')) {
        $('#achat').show();
        $('#cgv').hide();
      } else {
        $('#achat').hide();
      }
    });


  }

affichezAcheter () {


}


toggle() {
   this.isChecked = !this.isChecked;
   if (this.isChecked) {
    const div = document.getElementById('achat');
    div.style.display = 'block';
   }
}
}
