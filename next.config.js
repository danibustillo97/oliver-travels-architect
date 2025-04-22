
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    // Usar tsconfig existente
    tsconfigPath: './tsconfig.json'
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias
    };
    return config;
  }
};

module.exports = nextConfig;
