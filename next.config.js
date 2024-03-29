/** @type {import('next').NextConfig} */
const nextConfig = {};
const path = require('path');

module.exports = {
  webpack: (config, { isServer }) => {
    
    config.resolve.alias['@'] = path.resolve(__dirname);
    
    return config;
  },
};

module.exports = nextConfig;
