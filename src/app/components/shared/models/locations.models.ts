export class Location {
  id: number;
  heading: string;
  address: string;
  home: boolean;

  map?: any; // todo: improve typing
  transport?: any; // todo: improve typing

  constructor(data: any) {
    this.id = +data.id;
    this.heading = data.heading;
    this.address = data.address;
    this.home = data.home;

    if (data.map) {
      this.map = data.map;
    }

    if (data.transport) {
      this.transport = data.transport;
    }
  }
}
