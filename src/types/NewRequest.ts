export type NewRequest = {
    shipFromId?: string|undefined;
    shipFromName: string;
    shipFromStreet1: string;
    shipFromStreet2: string;
    shipFromCity: string;
    shipFromState: string;
    shipFromZip: string;
    shipToId?: string|undefined;
    shipToName: string;
    shipToStreet1: string;
    shipToStreet2: string;
    shipToCity: string;
    shipToState: string;
    shipToZip: string;
    notes?: string|undefined;
}
