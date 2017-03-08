// root response
const root = (req, res) => {
  res.json({
    message: 'Welcome to the api boilerplate.'
  })
}

// construct export
const api = {
  root,
}

export default api