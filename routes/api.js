const root = (req, res) => {
  res.json({
    message: 'Welcome to the api boilerplate.'
  })
}

const api = {
  root,
}

export default api