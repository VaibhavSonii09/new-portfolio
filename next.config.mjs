const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp3|wav)$/i,
      use: {
        loader: "url-loader",
      },
    });

    return config;
  },
  images: {
    domains: ['cdn.discordapp.com'],
  },
};

export default nextConfig;
