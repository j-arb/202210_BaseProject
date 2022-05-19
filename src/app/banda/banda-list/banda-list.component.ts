import { Component, OnInit } from '@angular/core';
import { Banda } from '../banda';
import { BandaService } from '../banda.service';

@Component({
  selector: 'app-banda-list',
  templateUrl: './banda-list.component.html',
  styleUrls: ['./banda-list.component.css']
})
export class BandaListComponent implements OnInit {

  constructor(private bandaService: BandaService) { }

  bandas: Array<Banda> = []
  selected: Boolean = false;
  selectedBand!: Banda;

  getBandas(): void {
    this.bandaService.getBandas().subscribe((bandas) => {
      this.bandas = bandas;
    })
  }

  getAverageMembers() {
    let suma: number = 0;
    for (let banda of this.bandas) {
      suma = suma + banda.numberOfMembers;
    }
    let avg: number = suma / this.bandas.length;
    return Math.ceil(avg);
  }

  onSelected(banda: Banda) {
    this.selected = true;
    this.selectedBand = banda;
  }

  ngOnInit() {
    this.getBandas();


  }

}
