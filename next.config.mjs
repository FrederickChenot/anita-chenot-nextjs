/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "equilibrealimentaire.fr" }],
        destination: "https://www.equilibrealimentaire.fr/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
