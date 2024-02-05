import { NewRequest, Request } from "../types";

export class RequestService {
    async createRequest(request: NewRequest): Promise<Request> {
        const response = await fetch('/api/requests', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(request),
        });
        const data = await response.json();
        return data;
    }

    async getRequests(): Promise<Request[]> {
        const response = await fetch('/api/requests');
        const data = await response.json();
        return data;
    }
}

const requestService = new RequestService();

export default requestService;