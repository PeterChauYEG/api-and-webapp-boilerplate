import path from 'path'

const client = (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
}

export default client