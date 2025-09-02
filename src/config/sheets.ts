// Google Sheets Configuration
export const GOOGLE_SHEETS_CONFIG = {
  // Google Apps Script Web App URL
  SCRIPT_URL: 'https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLh7axZauUKlJWsNiknOSlZ-H_porwOODiAbyImPx8hNOF0Swa-5ClaWWCyI3A8J0Zr_4nh9IYg7rdFK6I5mHchhG7ESUB2Sz2kn4oef6fuieEn0z9DeIJIyZ94J1ZOMjMWbnZMEwEZdjSnTABcZc0LPuJyMqnIv6u7-sjRGkJfWuoL6G4TrkLhBzxSozl0xCh72AltHSurMKo1Ai_iZfEhH0LWZ72AnreizQwyKrMWejUoo-zXKNFbJyGfhw84KaXn-PLByIUwQN8gtjb3H3JFpkZElvQ&lib=MERRq9i0_VmYjr6zcYIeMQmEtXh2Qkjou',
  
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
