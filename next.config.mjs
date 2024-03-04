/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'static.licdn.com',
            port: '',
            pathname: '/scds/common/u/img/webpromo/**',
          },
        ],
      }
};

export default nextConfig;
