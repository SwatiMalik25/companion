/** @type {import('next').NextConfig} */
const nextConfig = {
  
    experimental: {
    
      serverActions: true,
  
      output: 'export',
      
     
   
 
    swcMinify:false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "tjzk.replicate.delivery",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "replicate.delivery",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "a16z.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};

module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
}