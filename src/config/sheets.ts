// Google Sheets Configuration
export const GOOGLE_SHEETS_CONFIG = {
  // Google Apps Script Web App URL
  SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbzkf3AlNtKZ-7EWCYl5GZjoTbBqE8jPWDb97UCFL1yy9hr3j86ph4UzhtEeq4Y4rbVg/exec',
  
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
