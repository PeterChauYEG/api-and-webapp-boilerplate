// logging dep
import * as fs from 'fs';
import FileStreamRotator from 'file-stream-rotator'
import path from 'path'

// initialize log  
const init  = () => {
  // import log directory
  const logDirectory = path.join(__dirname, 'log')
  
  // ensure log directory exists
  fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)
  
  // create a rotating write stream
  const accessLogStream = FileStreamRotator.getStream({
    date_format: 'YYYY-MM-DD',
    filename: path.join(logDirectory, 'access-%DATE%.log'),
    frequency: 'daily',
    verbose: false
  });  
  
  return accessLogStream
}

export default init
