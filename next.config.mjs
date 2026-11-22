/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;
let repo = '';
if (isGithubActions) {
  const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || '';
  repo = repoName ? `/${repoName}` : '';
}

const nextConfig = {
  output: isGithubActions ? 'export' : undefined,
  basePath: isGithubActions ? repo : '',
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubActions ? repo : '',
  },
};

export default nextConfig;
