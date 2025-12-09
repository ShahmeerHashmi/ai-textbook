import { build } from '@docusaurus/core';

async function run() {
  try {
    const siteDir = process.cwd();
    console.log(`[docusaurus] Building site at: ${siteDir}`);
    await build(siteDir);
    console.log('[docusaurus] Build completed successfully');
  } catch (err) {
    console.error('[docusaurus] Build failed:', err);
    process.exitCode = 1;
  }
}

run();
