const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  latex: true
});

const { setupDevPlatform } = require('@cloudflare/next-on-pages/next-dev');

// Conditionally run the setup for the development platform
if (process.env.NODE_ENV === 'development') {
  setupDevPlatform().catch((error) => {
    console.error('Error setting up Cloudflare Dev Platform:', error);
  });
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Any other Next.js configuration you might have
};

module.exports = withNextra(nextConfig);
