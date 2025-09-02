// Tally Form Configuration
export const TALLY_CONFIG = {
  // Tally form URL
  FORM_URL: 'https://tally.so/r/3jjqrY',
  
  // Form field names (these should match your Tally form exactly)
  FIELDS: {
    NAME: 'Name',
    EMAIL: 'Email',
    LINK: 'Social Media Link',
    REMIX: 'Allow Remix',
    COMMERCIAL: 'Allow Commercial Use',
    PRICE: 'Price',
    CREATOR_SCORE: 'Creator Score',
    TOKENS_EARNED: 'Tokens Earned'
  }
};

// Data structure for Tally form
export interface TallyData {
  name: string;
  email: string;
  link: string;
  remix: boolean;
  commercial: boolean;
  price: string;
  creatorScore: string;
  tokensEarned: string;
}
