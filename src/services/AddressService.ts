import { Address } from "../types";

export class AddressService {

    async search(term: string): Promise<Address[]> {
        const response = await fetch(`/api/address/search?term=${term}`);
        const data = await response.json();
        return data;
    }

    async get(): Promise<Address[]> {
        const response = await fetch('/api/address');
        const data = await response.json();
        return data;
    }
}

const addressService = new AddressService();

export default addressService;