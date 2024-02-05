export type Address = {
  id: number;
  name: string;
  street1: string;
  street2?: string | undefined;
  city: string;
  state: string;
  zip: string;

  requests?: Request[] | undefined;
};
