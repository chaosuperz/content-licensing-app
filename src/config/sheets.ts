// Google Sheets Configuration
export const GOOGLE_SHEETS_CONFIG = {
  // Replace this with your Google Apps Script Web App URL
  SCRIPT_URL: 'YOUR_GOOGLE_SCRIPT_URL_HERE',
  
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
