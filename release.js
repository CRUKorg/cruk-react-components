const { execSync } = require('child_process');
const { version } = require('./package');

console.log(`1/5 creating tag: ${version}`);
execSync(`git tag ${version}`);

console.log(`2/5 pushing tag: ${version}`);
execSync(`git push origin ${version}:${version}`);

console.log(`3/5 installing dependencies`);
execSync('npm ci');

console.log(`4/5 building package`);
execSync('npm run rollup:build-lib');

console.log(`5/5 publishing package`);

let publishCommand = 'npm publish --registry https://npm.pkg.github.com/CRUKorg';

if (version.includes('alpha')) {
  publishCommand += ' --tag alpha';
} else if (version.includes('beta')) {
  publishCommand += ' --tag beta';
}

execSync(publishCommand);
