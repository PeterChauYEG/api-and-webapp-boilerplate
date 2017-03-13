// this setup script configures the .env file
// it copies the contents from .sample-env into a new file called .env
import fs from 'fs';

// create .sample-env
fs.createReadStream('.sample-env')
  .pipe(fs.createWriteStream('.env')); // create a file .env