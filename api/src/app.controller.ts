import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Address } from './types/Address';

const MOCK_API_TIMEOUT_IN_MS = 500;
const addresses: Address[] = [
  {
    id: 1,
    name: 'John Doe',
    street1: '123 Main St',
    city: 'New York',
    state: 'NY',
    zip: '10001',
  },
  {
    id: 2,
    name: 'Jane Doe',
    street1: '456 Maple Ave',
    city: 'Los Angeles',
    state: 'CA',
    zip: '90001',
  },
  {
    id: 3,
    name: 'Bob Smith',
    street1: '789 Oak Dr',
    city: 'Chicago',
    state: 'IL',
    zip: '60601',
  },
  {
    id: 4,
    name: 'Alice Johnson',
    street1: '321 Elm St',
    city: 'Houston',
    state: 'TX',
    zip: '77001',
  },
  {
    id: 5,
    name: 'Charlie Brown',
    street1: '654 Pine Rd',
    city: 'Phoenix',
    state: 'AZ',
    zip: '85001',
  },
  {
    id: 6,
    name: 'David Davis',
    street1: '987 Cedar Ln',
    city: 'Philadelphia',
    state: 'PA',
    zip: '19019',
  },
  {
    id: 7,
    name: 'Emily Evans',
    street1: '246 Birch Blvd',
    city: 'San Antonio',
    state: 'TX',
    zip: '78201',
  },
  {
    id: 8,
    name: 'Frank Foster',
    street1: '135 Aspen Ave',
    city: 'San Diego',
    state: 'CA',
    zip: '92101',
  },
  {
    id: 9,
    name: 'Grace Green',
    street1: '864 Willow Way',
    city: 'Dallas',
    state: 'TX',
    zip: '75201',
  },
  {
    id: 10,
    name: 'Henry Harris',
    street1: '579 Spruce St',
    city: 'San Jose',
    state: 'CA',
    zip: '95101',
  },
];

// generate a mock async function with a timeout that will return addresses that match the search term
async function searchAddresses(term: string): Promise<Address[]> {
  return new Promise((resolve) => {
    const results: Address[] = addresses.filter((address) => {
      const nameMatch: boolean = address.name.includes(term);

      const street1Match: boolean = address.street1.includes(term);

      const street2Match: boolean = address.street2
        ? address.street2.toLowerCase().includes(term.toLowerCase())
        : false;

      const cityMatch: boolean = address.city.includes(term);

      const stateMatch: boolean = address.state.includes(term);

      const zipMatch: boolean = address.zip.includes(term);

      return (
        nameMatch ||
        street1Match ||
        street2Match ||
        cityMatch ||
        stateMatch ||
        zipMatch
      );
    });

    setTimeout(() => {
      resolve(results);
    }, MOCK_API_TIMEOUT_IN_MS);
  });
}

// generate a mock async function with a timeout that will return all addresses
async function getAllAddresses(): Promise<Address[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(addresses);
    }, MOCK_API_TIMEOUT_IN_MS);
  });
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/api/address')
  getAll(): Promise<Address[]> {
    const results: Promise<Address[]> = getAllAddresses();
    return results;
  }

  @Get('/api/address/search')
  search(@Query('term') term: string): Promise<Address[]> {
    const results: Promise<Address[]> = searchAddresses(term);
    return results;
  }
}
