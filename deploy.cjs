const { spawn } = require('child_process');

const child = spawn('npx.cmd', ['surge', 'dist', 'deepak-webfolio.surge.sh'], {
  cwd: __dirname,
  env: process.env,
  shell: true
});

child.stdout.on('data', (d) => console.log('OUT:', d.toString()));
child.stderr.on('data', (d) => console.error('ERR:', d.toString()));

setTimeout(() => child.stdin.write('deepakkhadkadeploy2027@gmail.com\n'), 3000);
setTimeout(() => child.stdin.write('Deepak2027Deployment!\n'), 6000);
setTimeout(() => child.stdin.write('\n'), 9000);
setTimeout(() => child.stdin.write('\n'), 12000);

child.on('close', (code) => {
  console.log(`Exit code: ${code}`);
});
