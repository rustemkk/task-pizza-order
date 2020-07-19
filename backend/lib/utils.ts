import * as fs from 'fs';
import * as path from 'path';


export const findFilesInDir = (startPath, filter) => {
  let results = [];
  if (!fs.existsSync(startPath)) {
    return results;
  }
  const files = fs.readdirSync(startPath);
  for (var i = 0; i < files.length; i++) {
    const filename = path.join(startPath, files[i]);
    const stat = fs.lstatSync(filename);
    if (stat.isDirectory()) {
      results = results.concat(findFilesInDir(filename, filter)); //recurse
    } else if (filename.indexOf(filter) >= 0) {
      results.push(filename);
    }
  }

  return results;
}
