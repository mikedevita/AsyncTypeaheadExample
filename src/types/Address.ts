export type Address = {
    id?: string|undefined;
    name: string;
    street1: string;
    street2: string;
    city: string;
    state: string;
    zip: string;

    requests?: Request[]|undefined;
}