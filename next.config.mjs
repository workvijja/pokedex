/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                port: '',
                pathname: '/PokeAPI/sprites/master/sprites/pokemon/**',
            },
        ],
    },
};

// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png

export default nextConfig;
