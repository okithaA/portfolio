/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  experimental: {
    serverExternalPackages: ['next-intl']
  }
};

export default nextConfig;
