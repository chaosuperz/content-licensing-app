# Content Licensing App

A modern web application for licensing content using AI and blockchain technology. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎯 **Simple Signup Flow** - Quick registration with name and email
- 📄 **Content Licensing** - License your social media content with customizable permissions
- 🔄 **Remix & Commercial Use** - Control how others can use your content
- 💰 **Flexible Pricing** - Set prices in ETH, USDC, or offer for free
- 🎉 **Success Tracking** - View your license details and earn creator tokens
- 📱 **Responsive Design** - Works perfectly on all devices

## Tech Stack

- **Framework**: Next.js 14 with Pages Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: ShadCN UI
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Local Development

1. Clone the repository:
```bash
git clone <your-repo-url>
cd content-licensing-app
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build for Production

```bash
npm run build
npm start
```

## Application Flow

1. **Home Page** (`/`) - Landing page with call-to-action
2. **Signup** (`/signup`) - User registration with name and email
3. **License** (`/license`) - Content licensing form with permissions
4. **Registering** (`/registering`) - Loading state during "on-chain" registration
5. **Success** (`/success`) - License confirmation and token rewards

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign up/login
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"

Your site will be live at `https://your-project-name.vercel.app`

### Environment Variables

No environment variables are required for this application.

## Project Structure

```
src/
├── pages/
│   ├── index.tsx          # Home page
│   ├── signup.tsx         # User signup
│   ├── license.tsx        # License form
│   ├── registering.tsx    # Loading state
│   └── success.tsx        # Success page
├── components/
│   └── ui/                # ShadCN UI components
└── styles/
    └── globals.css        # Global styles
```

## Customization

### Styling
- Modify colors in `src/styles/globals.css`
- Update Tailwind classes in components
- Customize ShadCN UI theme in `components.json`

### Content
- Update text content in each page component
- Modify form fields in `license.tsx`
- Adjust success page rewards and scoring

### Features
- Add more license options
- Integrate with real blockchain
- Add user authentication
- Implement file upload functionality

## Performance

The application is optimized with:
- ✅ Next.js static generation
- ✅ Tailwind CSS for minimal CSS
- ✅ Optimized images and assets
- ✅ Responsive design
- ✅ Fast loading times

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

---

**Ready to deploy?** This application is production-ready and optimized for Vercel deployment! 🚀
