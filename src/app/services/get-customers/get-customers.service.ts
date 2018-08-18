import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetCustomersService {
  private _customers = [
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "aaron",
        "last": "harris"
      },
      "location": {
        "street": "5689 tuam street",
        "city": "lower hutt",
        "state": "west coast",
        "postcode": 32036,
        "coordinates": {
          "latitude": "58.3677",
          "longitude": "-56.8825"
        },
        "timezone": {
          "offset": "0:00",
          "description": "Western Europe Time, London, Lisbon, Casablanca"
        }
      },
      "email": "aaron.harris@example.com",
      "login": {
        "uuid": "0479e6f3-7726-4db0-93c0-8e35e4bcfd75",
        "username": "silverbear571",
        "password": "chicken1",
        "salt": "EDly1Tbu",
        "md5": "579000c8df99860f6119d7f1f0d61dc3",
        "sha1": "331d8492e72320bb5a531a58382d4643b6ba6db9",
        "sha256": "1405e8d3f01eef7b4bca3a389aac932ad6c4c0a6be7585773c2875c6363b6dea"
      },
      "dob": {
        "date": "1991-02-19T01:59:06Z",
        "age": 27
      },
      "registered": {
        "date": "2005-09-05T08:42:17Z",
        "age": 12
      },
      "phone": "(927)-798-4357",
      "cell": "(299)-395-1094",
      "id": 1,
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/37.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/37.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/37.jpg"
      },
      "nat": "NZ"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "norbertus",
        "last": "van engelenhoven"
      },
      "location": {
        "street": "3334 gansstraat",
        "city": "'s-hertogenbosch",
        "state": "noord-brabant",
        "postcode": 67284,
        "coordinates": {
          "latitude": "8.4218",
          "longitude": "87.9671"
        },
        "timezone": {
          "offset": "+4:00",
          "description": "Abu Dhabi, Muscat, Baku, Tbilisi"
        }
      },
      "email": "norbertus.vanengelenhoven@example.com",
      "login": {
        "uuid": "4ef5e820-e6b3-4ad9-9308-aa370ace9c4f",
        "username": "brownwolf592",
        "password": "seadog",
        "salt": "NoBaQW6M",
        "md5": "33f5da2751cc0fa522e71e4ca3beb224",
        "sha1": "a2ec12b2df5c6fd16d0694b080cb78a2573ada79",
        "sha256": "5cf17177d164daaa7c3f067d948197a68437bc9052bbd33e1277c345c256e2aa"
      },
      "dob": {
        "date": "1991-03-13T23:39:40Z",
        "age": 27
      },
      "registered": {
        "date": "2007-05-08T14:54:03Z",
        "age": 11
      },
      "phone": "(229)-901-7320",
      "cell": "(553)-165-8978",
      "id": 2,
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/10.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/10.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/10.jpg"
      },
      "nat": "NL"
    },
    {
      "gender": "female",
      "name": {
        "title": "mrs",
        "first": "ülkü",
        "last": "mertoğlu"
      },
      "location": {
        "street": "2468 necatibey cd",
        "city": "tekirdağ",
        "state": "trabzon",
        "postcode": 27117,
        "coordinates": {
          "latitude": "8.5764",
          "longitude": "137.2222"
        },
        "timezone": {
          "offset": "-10:00",
          "description": "Hawaii"
        }
      },
      "email": "ülkü.mertoğlu@example.com",
      "login": {
        "uuid": "5144ff13-c530-4896-a98e-ecdd6327f01e",
        "username": "browntiger464",
        "password": "sheepdog",
        "salt": "JnNEuJch",
        "md5": "801e7591b9db2b3e4883914381ad4288",
        "sha1": "a545bd6c74d642e27326d6f85700c85a06ef3d8f",
        "sha256": "ea9d588575a6251bfafe3f219af6057c20e8119dc735258012402fd18bffbcee"
      },
      "dob": {
        "date": "1992-08-25T03:15:22Z",
        "age": 25
      },
      "registered": {
        "date": "2004-06-23T20:59:38Z",
        "age": 14
      },
      "phone": "(494)-030-5411",
      "cell": "(943)-231-2064",
      "id": 3,
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/11.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/11.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/11.jpg"
      },
      "nat": "TR"
    }
  ];

  constructor() {
  }

  getCustomersById(id: number): any {
    for (let i = 0; i < this._customers.length; i++) {
      if(this._customers[i].id === id) {
        return this._customers[i];
      }
    }

    return 'There is no customer with such id';
  }

  getAllCustomers(): any[] {
    return this._customers;
  }
}
