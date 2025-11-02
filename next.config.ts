import type { NextConfig } from "next";
import {hostname} from "node:os";

const nextConfig: NextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'res.cloudinary.com',
            }
        ]
    },
    reactCompiler: true,
    experimental:{
        turbopackFileSystemCacheForDev: true,
    }
};

export default nextConfig;
