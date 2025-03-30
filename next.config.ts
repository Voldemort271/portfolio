import type { NextConfig } from "next";
import type { Configuration as WebpackConfig } from "webpack";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack: (config: WebpackConfig) => {
    config.module?.rules?.push({
      test: /\.(glsl|vert|frag)$/,
      type: "asset/source",
    });

    return config;
  },
};

export default nextConfig;
