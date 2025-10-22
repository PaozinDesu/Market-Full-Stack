import type { NextConfig } from 'next';
import path from 'node:path';

const rootDir = path.resolve(__dirname);

const nextConfig: NextConfig = {
  turbopack: {
    root: rootDir,
  },
};

export default nextConfig;
