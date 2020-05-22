import path from 'path';
import util from 'util';
import fs from 'fs';
import makeDir from 'make-dir';
import { createFilter } from '@rollup/pluginutils';

const fsStatPromise = util.promisify(fs.stat);
const fsReadFilePromise = util.promisify(fs.readFile);
const { posix, sep } = path;
const defaultInclude = ['**/*.md', '**/*.mdx'];

// plug in modified from https://github.com/rollup/plugins/blob/master/packages/url/src/index.js

export default function mdToBase64(options = {}) {
  const { include = defaultInclude, exclude, emitFiles = true } = options;
  const filter = createFilter(include, exclude);

  const copies = Object.create(null);

  return {
    load(id) {
      if (!filter(id)) {
        return null;
      }
      return Promise.all([fsStatPromise(id), fsReadFilePromise(id)]).then(([stats, buffer]) => {
        let data;
        data = buffer.toString('base64');
        return `export default "${data}"`;
      });
    },
    generateBundle: async function write(outputOptions) {
      // Allow skipping saving files for server side builds.
      if (!emitFiles) return;

      const base = options.destDir || outputOptions.dir || path.dirname(outputOptions.file);

      await makeDir(base);

      await Promise.all(
        Object.keys(copies).map(async name => {
          const output = copies[name];
          // Create a nested directory if the fileName pattern contains
          // a directory structure
          const outputDirectory = path.join(base, path.dirname(output));
          await makeDir(outputDirectory);
          return copy(name, path.join(base, output));
        }),
      );
    },
  };
}

function copy(src, dest) {
  return new Promise((resolve, reject) => {
    const read = fs.createReadStream(src);
    read.on('error', reject);
    const write = fs.createWriteStream(dest);
    write.on('error', reject);
    write.on('finish', resolve);
    read.pipe(write);
  });
}
