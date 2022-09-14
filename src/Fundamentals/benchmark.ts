import { createReadStream } from 'fs';

const argv = process.argv.slice(2);

const displayHelp = () => {
  console.log('Argument processor:', args);
};

const readFile = (file?: string) => {
  if (file?.length) {
    console.log('Reading:', file);
    console.time('read');
    const stream = createReadStream(file);
    stream.on('end', () => {
      console.timeEnd('read');
    });
    stream.pipe(process.stdout);
  } else {
    console.error('A file must be provided with the -r option');
    process.exit(1);
  }
};

const args = {
  '-h': displayHelp,
  '-r': readFile,
};

for (const arg of argv) {
  if (arg === '-r') {
    console.log(args[arg]());
  } else {
    console.log(args['-h']());
  }
}
