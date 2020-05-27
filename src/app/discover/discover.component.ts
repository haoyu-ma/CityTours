import { Component, OnInit } from '@angular/core';
import {DiscoverCard} from '../discover-card';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.css']
})
export class DiscoverComponent implements OnInit {

  discoverCards: DiscoverCard[] = [];

  constructor() {
  }

  ngOnInit() {
    const discoverCard1 = new DiscoverCard();
    discoverCard1.generateDiscoverCard('The Bund', 'discover-cover-the-bund.jpg');
    discoverCard1.setDescription('The Bund or Waitan is a waterfront area in central Shanghai. The area centers on a section of Zhongshan Road within the former Shanghai International Settlement, which runs along the western bank of the Huangpu River in the eastern part of Huangpu District.');
    discoverCard1.setMap(31.240298, 121.490588);
    discoverCard1.setCarouselImages('1-1.jpg', '1-2.jpg', '1-3.jpg', '1-4.jpg', '1-5.jpg');
    discoverCard1.setAddress('Zhongshan East 1st Rd, Wai Tan, Huangpu Qu, Shanghai Shi, China');
    discoverCard1.setOpenHours('All time');
    this.discoverCards.push(discoverCard1);

    const discoverCard2 = new DiscoverCard();
    discoverCard2.generateDiscoverCard('Yu Garden', 'discover-cover-yu-garden.jpg');
    discoverCard2.setDescription('Yu Garden or Yuyuan Garden is an extensive Chinese garden located beside the City God Temple in the northeast of the Old City of Shanghai at Huangpu Qu, Shanghai Shi. It abuts the Yuyuan Tourist Mart, the Huxinting Teahouse and the Yu Garden Bazaar.');
    discoverCard2.setMap(31.227272, 121.492105);
    discoverCard2.setCarouselImages('2-1.jpg', '2-2.jpg', '2-3.jpg', '2-4.jpg', '2-5.jpg');
    discoverCard2.setAddress('218 Anren St, Huangpu Qu, China');
    discoverCard2.setOpenHours('8:45-16:45');
    this.discoverCards.push(discoverCard2);

    const discoverCard3 = new DiscoverCard();
    discoverCard3.generateDiscoverCard('Oriental Pearl TV Tower', 'discover-cover-oriental-pearl-tv-tower.jpg');
    discoverCard3.setDescription('The Oriental Pearl Radio & Television Tower is a TV tower in Shanghai. Its location at the tip of Lujiazui in the Pudong New Area by the side of Huangpu River, opposite The Bund, makes it a distinct landmark in the area. Its principal designers were Jiang Huan Chen, Lin Benlin, and Zhang Xiulin.');
    discoverCard3.setMap(31.239716, 121.499766);
    discoverCard3.setCarouselImages('3-1.jpg', '3-2.jpg', '3-3.jpg', '3-4.jpg', '3-5.jpg');
    discoverCard3.setAddress('1 Century Ave, Lu Jia Zui, Pudong Xinqu, Shanghai Shi, China');
    discoverCard3.setOpenHours('8:30-21:00');
    this.discoverCards.push(discoverCard3);

    const discoverCard4 = new DiscoverCard();
    discoverCard4.generateDiscoverCard('Shanghai Tower', 'discover-cover-shanghai-tower.jpg');
    discoverCard4.setDescription('The Shanghai Tower is a 632-metre, 128-story megatall skyscraper in Lujiazui, Pudong, Shanghai. It shares the record of having the world\'s highest observation deck within a building or structure at 562 m, and the world\'s second-fastest elevators at a top speed of 20.5 metres per second.');
    discoverCard4.setMap(31.233555, 121.505629);
    discoverCard4.setCarouselImages('4-1.jpg', '4-2.jpg', '4-3.jpg', '4-4.jpg', '4-5.jpg');
    discoverCard4.setAddress('501 Yincheng Middle Rd, Lu Jia Zui, Lujiazui Residential District, Pudong Xinqu, Shanghai Shi, China');
    discoverCard4.setOpenHours('8:00-22:00');
    this.discoverCards.push(discoverCard4);

    const discoverCard5 = new DiscoverCard();
    discoverCard5.generateDiscoverCard('Shanghai Disney Resort', 'discover-cover-shanghai-disney-resort.jpg');
    discoverCard5.setDescription('Shanghai Disneyland Park is a theme park located in Pudong, Shanghai, China, that is part of the Shanghai Disney Resort. The park is operated by Disney Parks, Experiences and Products and Shanghai Shendi Group, through a joint venture between The Walt Disney Company and Shendi. Construction began on April 8, 2011.');
    discoverCard5.setMap(31.141663, 121.662415);
    discoverCard5.setCarouselImages('5-1.jpg', '5-2.jpg', '5-3.jpg', '5-4.jpg', '5-5.jpg');
    discoverCard5.setAddress('Chuanshaxinzhen, Pudong, China');
    discoverCard5.setOpenHours('8:00-21:30');
    this.discoverCards.push(discoverCard5);

    const discoverCard6 = new DiscoverCard();
    discoverCard6.generateDiscoverCard('Shanghai Museum', 'discover-cover-shanghai-museum.jpg');
    discoverCard6.setDescription('The Shanghai Museum is a museum of ancient Chinese art, situated on the People\'s Square in the Huangpu District of Shanghai, China. Rebuilt at its current location in 1996, it is considered one of China\'s first world-class modern museums.');
    discoverCard6.setMap(31.228377, 121.475533);
    discoverCard6.setCarouselImages('6-1.jpg', '6-2.jpg', '6-3.jpg', '6-4.jpg', '6-5.jpg');
    discoverCard6.setAddress('201 Renmin Ave, Ren Min Guang Chang, Huangpu Qu, China');
    discoverCard6.setOpenHours('9:00-17:00');
    this.discoverCards.push(discoverCard6);
  }

}
