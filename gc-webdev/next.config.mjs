/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",  // <=== enables static exports
    // basePath: '/GC_WebDev/gc-webdev',
    basePath: process.env.NODE_ENV === 'production' ? '/gc-webdev' : '',
    reactStrictMode: true,
};

export default nextConfig;
