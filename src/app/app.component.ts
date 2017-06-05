import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Http } from '@angular/http';
import { Ng2Highstocks } from 'ng2-highcharts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'app';

  @ViewChild(Ng2Highstocks) stock: Ng2Highstocks;
  chartOptions = {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Fruit Consumption'
    },
    xAxis: {
      categories: ['Apples', 'Bananas', 'Oranges']
    },
    yAxis: {
      title: {
        text: 'Fruit eaten'
      }
    },
    series: [{
      name: 'Jane',
      data: [1, 0, 4]
    }, {
      name: 'John',
      data: [5, 7, 3]
    }]
  };
  chartBar = {
    chart: {
      type: 'column'
    },
    xAxis: {
      categories: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
    series: [
      {
        name: 'NC',
        data: [7057, 6858, 6643, 6570, 6115, 107, 31, 635, 203, 2, 2]
      }, {
        name: 'OK',
        data: [54047, 52484, 50591, 49479, 46677, 33, 156, 947, 408, 6, 2]
      }, {
        name: 'KO',
        data: [11388, 11115, 10742, 10757, 10290, 973, 914, 4054, 732, 34, 2]
      }, {
        name: 'VALID',
        data: [8836, 8509, 8255, 7760, 7621, 973, 914, 4054, 732, 34, 2]
      }, {
        name: 'CHECK',
        data: [115, 162, 150, 187, 172, 973, 914, 4054, 732, 34, 2]
      }, {
        name: 'COR',
        data: [12566, 12116, 11446, 10749, 10439, 973, 914, 4054, 732, 34, 2]
      }
    ]
  };
  chartMap = null;
  mapData = [
    { 'code': 'fo', 'value': 0 },
    { 'code': 'um', 'value': 1 },
    { 'code': 'us', 'value': 2 },
    { 'code': 'jp', 'value': 3 },
    { 'code': 'sc', 'value': 4 },
    { 'code': 'in', 'value': 5 },
    { 'code': 'fr', 'value': 6 },
    { 'code': 'fm', 'value': 7 },
    { 'code': 'cn', 'value': 8 },
    { 'code': 'pt', 'value': 9 },
    { 'code': 'sw', 'value': 10 },
    { 'code': 'sh', 'value': 11 },
    { 'code': 'br', 'value': 12 },
    { 'code': 'ki', 'value': 13 },
    { 'code': 'ph', 'value': 14 },
    { 'code': 'mx', 'value': 15 },
    { 'code': 'es', 'value': 16 },
    { 'code': 'bu', 'value': 17 },
    { 'code': 'mv', 'value': 18 },
    { 'code': 'sp', 'value': 19 },
    { 'code': 'gb', 'value': 20 },
    { 'code': 'gr', 'value': 21 },
    { 'code': 'as', 'value': 22 },
    { 'code': 'dk', 'value': 23 },
    { 'code': 'gl', 'value': 24 },
    { 'code': 'gu', 'value': 25 },
    { 'code': 'mp', 'value': 26 },
    { 'code': 'pr', 'value': 27 },
    { 'code': 'vi', 'value': 28 },
    { 'code': 'ca', 'value': 29 },
    { 'code': 'st', 'value': 30 },
    { 'code': 'cv', 'value': 31 },
    { 'code': 'dm', 'value': 32 },
    { 'code': 'nl', 'value': 33 },
    { 'code': 'jm', 'value': 34 },
    { 'code': 'ws', 'value': 35 },
    { 'code': 'om', 'value': 36 },
    { 'code': 'vc', 'value': 37 },
    { 'code': 'tr', 'value': 38 },
    { 'code': 'bd', 'value': 39 },
    { 'code': 'lc', 'value': 40 },
    { 'code': 'nr', 'value': 41 },
    { 'code': 'no', 'value': 42 },
    { 'code': 'kn', 'value': 43 },
    { 'code': 'bh', 'value': 44 },
    { 'code': 'to', 'value': 45 },
    { 'code': 'fi', 'value': 46 },
    { 'code': 'id', 'value': 47 },
    { 'code': 'mu', 'value': 48 },
    { 'code': 'se', 'value': 49 },
    { 'code': 'tt', 'value': 50 },
    { 'code': 'my', 'value': 51 },
    { 'code': 'pa', 'value': 52 },
    { 'code': 'pw', 'value': 53 },
    { 'code': 'tv', 'value': 54 },
    { 'code': 'mh', 'value': 55 },
    { 'code': 'cl', 'value': 56 },
    { 'code': 'th', 'value': 57 },
    { 'code': 'gd', 'value': 58 },
    { 'code': 'ee', 'value': 59 },
    { 'code': 'ag', 'value': 60 },
    { 'code': 'tw', 'value': 61 },
    { 'code': 'bb', 'value': 62 },
    { 'code': 'it', 'value': 63 },
    { 'code': 'mt', 'value': 64 },
    { 'code': 'vu', 'value': 65 },
    { 'code': 'sg', 'value': 66 },
    { 'code': 'cy', 'value': 67 },
    { 'code': 'lk', 'value': 68 },
    { 'code': 'km', 'value': 69 },
    { 'code': 'fj', 'value': 70 },
    { 'code': 'ru', 'value': 71 },
    { 'code': 'va', 'value': 72 },
    { 'code': 'sm', 'value': 73 },
    { 'code': 'kz', 'value': 74 },
    { 'code': 'az', 'value': 75 },
    { 'code': 'tj', 'value': 76 },
    { 'code': 'ls', 'value': 77 },
    { 'code': 'uz', 'value': 78 },
    { 'code': 'ma', 'value': 79 },
    { 'code': 'co', 'value': 80 },
    { 'code': 'tl', 'value': 81 },
    { 'code': 'tz', 'value': 82 },
    { 'code': 'ar', 'value': 83 },
    { 'code': 'sa', 'value': 84 },
    { 'code': 'pk', 'value': 85 },
    { 'code': 'ye', 'value': 86 },
    { 'code': 'ae', 'value': 87 },
    { 'code': 'ke', 'value': 88 },
    { 'code': 'pe', 'value': 89 },
    { 'code': 'do', 'value': 90 },
    { 'code': 'ht', 'value': 91 },
    { 'code': 'pg', 'value': 92 },
    { 'code': 'ao', 'value': 93 },
    { 'code': 'kh', 'value': 94 },
    { 'code': 'vn', 'value': 95 },
    { 'code': 'mz', 'value': 96 },
    { 'code': 'cr', 'value': 97 },
    { 'code': 'bj', 'value': 98 },
    { 'code': 'ng', 'value': 99 },
    { 'code': 'ir', 'value': 100 },
    { 'code': 'sv', 'value': 101 },
    { 'code': 'sl', 'value': 102 },
    { 'code': 'gw', 'value': 103 },
    { 'code': 'hr', 'value': 104 },
    { 'code': 'bz', 'value': 105 },
    { 'code': 'za', 'value': 106 },
    { 'code': 'cf', 'value': 107 },
    { 'code': 'sd', 'value': 108 },
    { 'code': 'cd', 'value': 109 },
    { 'code': 'kw', 'value': 110 },
    { 'code': 'de', 'value': 111 },
    { 'code': 'be', 'value': 112 },
    { 'code': 'ie', 'value': 113 },
    { 'code': 'kp', 'value': 114 },
    { 'code': 'kr', 'value': 115 },
    { 'code': 'gy', 'value': 116 },
    { 'code': 'hn', 'value': 117 },
    { 'code': 'mm', 'value': 118 },
    { 'code': 'ga', 'value': 119 },
    { 'code': 'gq', 'value': 120 },
    { 'code': 'ni', 'value': 121 },
    { 'code': 'lv', 'value': 122 },
    { 'code': 'ug', 'value': 123 },
    { 'code': 'mw', 'value': 124 },
    { 'code': 'am', 'value': 125 },
    { 'code': 'sx', 'value': 126 },
    { 'code': 'tm', 'value': 127 },
    { 'code': 'zm', 'value': 128 },
    { 'code': 'nc', 'value': 129 },
    { 'code': 'mr', 'value': 130 },
    { 'code': 'dz', 'value': 131 },
    { 'code': 'lt', 'value': 132 },
    { 'code': 'et', 'value': 133 },
    { 'code': 'er', 'value': 134 },
    { 'code': 'gh', 'value': 135 },
    { 'code': 'si', 'value': 136 },
    { 'code': 'gt', 'value': 137 },
    { 'code': 'ba', 'value': 138 },
    { 'code': 'jo', 'value': 139 },
    { 'code': 'sy', 'value': 140 },
    { 'code': 'mc', 'value': 141 },
    { 'code': 'al', 'value': 142 },
    { 'code': 'uy', 'value': 143 },
    { 'code': 'cnm', 'value': 144 },
    { 'code': 'mn', 'value': 145 },
    { 'code': 'rw', 'value': 146 },
    { 'code': 'so', 'value': 147 },
    { 'code': 'bo', 'value': 148 },
    { 'code': 'cm', 'value': 149 },
    { 'code': 'cg', 'value': 150 },
    { 'code': 'eh', 'value': 151 },
    { 'code': 'rs', 'value': 152 },
    { 'code': 'me', 'value': 153 },
    { 'code': 'tg', 'value': 154 },
    { 'code': 'la', 'value': 155 },
    { 'code': 'af', 'value': 156 },
    { 'code': 'ua', 'value': 157 },
    { 'code': 'sk', 'value': 158 },
    { 'code': 'jk', 'value': 159 },
    { 'code': 'bg', 'value': 160 },
    { 'code': 'qa', 'value': 161 },
    { 'code': 'li', 'value': 162 },
    { 'code': 'at', 'value': 163 },
    { 'code': 'sz', 'value': 164 },
    { 'code': 'hu', 'value': 165 },
    { 'code': 'ro', 'value': 166 },
    { 'code': 'ne', 'value': 167 },
    { 'code': 'lu', 'value': 168 },
    { 'code': 'ad', 'value': 169 },
    { 'code': 'ci', 'value': 170 },
    { 'code': 'lr', 'value': 171 },
    { 'code': 'bn', 'value': 172 },
    { 'code': 'iq', 'value': 173 },
    { 'code': 'ge', 'value': 174 },
    { 'code': 'gm', 'value': 175 },
    { 'code': 'ch', 'value': 176 },
    { 'code': 'td', 'value': 177 },
    { 'code': 'kv', 'value': 178 },
    { 'code': 'lb', 'value': 179 },
    { 'code': 'dj', 'value': 180 },
    { 'code': 'bi', 'value': 181 },
    { 'code': 'sr', 'value': 182 },
    { 'code': 'il', 'value': 183 },
    { 'code': 'ml', 'value': 184 },
    { 'code': 'sn', 'value': 185 },
    { 'code': 'gn', 'value': 186 },
    { 'code': 'zw', 'value': 187 },
    { 'code': 'pl', 'value': 188 },
    { 'code': 'mk', 'value': 189 },
    { 'code': 'py', 'value': 190 },
    { 'code': 'by', 'value': 191 },
    { 'code': 'cz', 'value': 192 },
    { 'code': 'bf', 'value': 193 },
    { 'code': 'na', 'value': 194 },
    { 'code': 'ly', 'value': 195 },
    { 'code': 'tn', 'value': 196 },
    { 'code': 'bt', 'value': 197 },
    { 'code': 'md', 'value': 198 },
    { 'code': 'ss', 'value': 199 },
    { 'code': 'bw', 'value': 200 },
    { 'code': 'bs', 'value': 201 },
    { 'code': 'nz', 'value': 202 },
    { 'code': 'cu', 'value': 203 },
    { 'code': 'ec', 'value': 204 },
    { 'code': 'au', 'value': 205 },
    { 'code': 've', 'value': 206 },
    { 'code': 'sb', 'value': 207 },
    { 'code': 'mg', 'value': 208 },
    { 'code': 'is', 'value': 209 },
    { 'code': 'eg', 'value': 210 },
    { 'code': 'kg', 'value': 211 },
    { 'code': 'np', 'value': 212 }
  ];
  chartStock = null;

  constructor(private http: Http) { }

  ngOnInit(): any {
    setInterval(() => {
      this.chartOptions.series = [{
        name: 'Jane',
        data: [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]
      }, {
        name: 'John',
        data: [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)]
      }];
    }, 3000);

    // Stock
    this.http.get('./assets/aapl-c.json').subscribe(
      (aaplc: any) => {
        this.chartStock = {
          rangeSelector: {
            selected: 1
          },
          title: {
            text: 'AAPL Stock Price'
          },
          series: [{
            name: 'AAPL',
            data: aaplc.json(),
            tooltip: {
              valueDecimals: 2
            }
          }]
        };
      },
      (err: any) => {
        console.error('Somethin went wrong', err);
      }
    );

    // Map
    this.http.get('./assets/world.geo.json').subscribe(
      (geojson: any) => {
        this.chartMap = {
          title: {
            text: 'Highmaps basic demo'
          },
          mapNavigation: {
            enabled: true,
            buttonOptions: {
              verticalAlign: 'bottom'
            }
          },
          colorAxis: {
            min: 0,
            max: 300
          },
          series: [{
            data: this.mapData,
            mapData: geojson.json(),
            joinBy: ['hc-key', 'code'],
            name: 'Random data',
            states: {
              hover: {
                color: '#BADA55'
              }
            },
            dataLabels: {
              enabled: true,
              format: '{point.name}'
            }
          }]
        };
      },
      (err: any) => {
        console.error('Somethin went wrong', err);
      }
    );
  }

  ngAfterViewInit(): void {
    // setTimeout(() => { console.log(this.stock.chart); }, 1000);
  }
}
