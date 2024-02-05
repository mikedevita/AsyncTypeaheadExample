import { Address } from "./Address";

export type Request = {
    id: number;
    shipFromId?: string|undefined;
    shipToId?: string|undefined;
    notes?: string|undefined;
    createdAt: Date|string;

    shipFrom: Address;
    shipTo: Address;
}