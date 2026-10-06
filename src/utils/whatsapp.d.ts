/* Type declarations for utils/whatsapp.js */

export declare function waUrl(message?: string): string;
export declare function openWhatsApp(message?: string): void;
export declare function telUrl(): string;
export declare function leadToMessage(lead: {
  name: string;
  mobile: string;
  email: string;
}): string;
