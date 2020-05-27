export class DiscoverCard {
  title;
  description;
  imageName;
  latitude;
  longitude;
  carouselImages: string[];
  address;
  openHours;

  generateDiscoverCard(title, imageName) {
    this.title = title;
    this.imageName = imageName;
  }

  setDescription(description) {
    this.description = description;
  }

  setMap(latitude, longitude) {
    this.latitude = latitude;
    this.longitude = longitude;
  }

  setCarouselImages(image1, image2, image3, image4, image5) {
    const images: string[] = [];
    images.push(image1);
    images.push(image2);
    images.push(image3);
    images.push(image4);
    images.push(image5);
    this.carouselImages = images;
  }

  setAddress(address) {
    this.address = address;
  }

  setOpenHours(openHours) {
    this.openHours = openHours;
  }

  getDiscoverCard(): DiscoverCard {
    return this;
  }
}
