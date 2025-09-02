// Google Sheets Configuration
export const GOOGLE_SHEETS_CONFIG = {
  // Google Apps Script Web App URL
  SCRIPT_URL: 'https://script.google.com/macros/s/AKfycby_PVlT0XdOqQSR_mGjTthqFgkKNkfGxDmWX67DewUMA3Ok-0NRLTwnHY38HfiJKjmH/exec',
  
  // Sheet column mapping
  COLUMNS: {
    TIMESTAMP: 'A',
    NAME: 'B',
    EMAIL: 'C',
    LINK: 'D',
    REMIX: 'E',
    COMMERCIAL: 'F',
    PRICE: 'G',
    CREATOR_SCORE: 'H',
    TOKENS_EARNED: 'I'
  }
};

// Data structure for Google Sheets
export interface SheetData {
  name: string;
  email: string;
  link: string;
  remix: boolean;
  commercial: boolean;
  price: string;
  creatorScore: string;
  tokensEarned: string;
}
