import { Observable } from 'rxjs';
export declare class InnerMessageService {
    private subject;
    sendMessage(message: string): void;
    clearMessage(): void;
    getMessage(): Observable<any>;
}
