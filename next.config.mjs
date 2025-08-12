import { withPWA } from 'next-pwa';

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [], // Replace with your image hosting domain
  },
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development'
},
  experimental: {
    optimizeImages: true
},
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glb|gltf|fbx|obj|mtl|png|jpe?g|gif|svg|mp4|webm|wav|mp3|ogg)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
}
}
});
    return config;
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true
},
    ];
  }
};

export default withPWA(nextConfig);