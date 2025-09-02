# Google Sheets Integration Setup Guide

## 📊 **Connect Your App to Google Sheets**

This guide will help you set up Google Sheets to collect user signup and license information from your app.

## 🚀 **Step 1: Create Google Sheet**

1. **Go to [sheets.google.com](https://sheets.google.com)**
2. **Create a new spreadsheet** named "Content Licensing Signups"
3. **Set up headers** in the first row:

| A | B | C | D | E | F | G | H | I |
|---|---|---|---|---|---|---|---|---|
| Timestamp | Name | Email | Social Media Link | Allow Remix | Allow Commercial Use | Price | Creator Score | Tokens Earned |

## 🔧 **Step 2: Create Google Apps Script**

1. **In your Google Sheet, go to Extensions → Apps Script**
2. **Replace the default code** with this script:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    const timestamp = new Date();
    const rowData = [
      timestamp,
      data.name || '',
      data.email || '',
      data.link || '',
      data.remix ? 'Yes' : 'No',
      data.commercial ? 'Yes' : 'No',
      data.price || '',
      data.creatorScore || '87',
      data.tokensEarned || '100'
    ];
    
    sheet.appendRow(rowData);
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: 'Data saved successfully' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'API is running' }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

## 🚀 **Step 3: Deploy the Script**

1. **Click "Deploy" → "New deployment"**
2. **Choose "Web app"**
3. **Configure settings:**
   - **Execute as**: "Me"
   - **Who has access**: "Anyone"
4. **Click "Deploy"**
5. **Copy the Web App URL** (you'll need this)

## ⚙️ **Step 4: Update Your App Configuration**

1. **Open `src/config/sheets.ts`**
2. **Replace `YOUR_GOOGLE_SCRIPT_URL_HERE`** with your actual Web App URL
3. **Save the file**

Example:
```typescript
export const GOOGLE_SHEETS_CONFIG = {
  SCRIPT_URL: 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec',
  // ... rest of config
};
```

## 📱 **Step 5: Test the Integration**

1. **Deploy your updated app to Vercel**
2. **Go through the complete user flow:**
   - Signup with name and email
   - Create a license
   - Complete the process
3. **Check your Google Sheet** - you should see new rows added!

## 🔍 **What Gets Collected**

Every time a user completes the license process, this data is sent to Google Sheets:

- **Timestamp**: When the license was created
- **Name**: User's name from signup
- **Email**: User's email from signup
- **Social Media Link**: Content link they licensed
- **Allow Remix**: Yes/No checkbox
- **Allow Commercial Use**: Yes/No checkbox
- **Price**: Selected price (Free, ETH, USDC)
- **Creator Score**: Calculated score (87/100)
- **Tokens Earned**: Tokens awarded (100 CREATR)

## 🛠️ **Troubleshooting**

### **Data Not Appearing in Sheets?**
1. Check the browser console for errors
2. Verify your Google Script URL is correct
3. Ensure the Google Script is deployed as a web app
4. Check that "Who has access" is set to "Anyone"

### **CORS Errors?**
Google Apps Script handles CORS automatically, so this shouldn't be an issue.

### **Permission Denied?**
Make sure you're executing the script as yourself and have edit access to the Google Sheet.

## 📈 **Advanced Features**

### **Add Data Validation**
- Set up dropdown lists for price options
- Add data validation rules
- Create conditional formatting

### **Create Dashboards**
- Use Google Sheets' built-in charts
- Create pivot tables for analytics
- Set up automated reports

### **Export Data**
- Download as CSV/Excel
- Connect to Google Data Studio
- Set up automated email reports

## 🎉 **Success!**

Your app now automatically collects user data in Google Sheets! Every signup and license creation will be logged with timestamps, making it easy to track user engagement and analyze your platform's growth.

## 🔄 **Next Steps**

1. **Deploy the updated app** to Vercel
2. **Test the complete flow** end-to-end
3. **Monitor your Google Sheet** for new entries
4. **Set up notifications** or automated reports as needed

Your Content Licensing App is now a data collection powerhouse! 🚀
