import Minion from '../db/models/minion'

// get all minions from database
const getMinions = (req, res) => {

  // get all minions from database
  Minion.find({}, (err, minions) => {
    if (err) {
      return res.send(err)
    }

    // minions
    const data = minions

    // send minions back to client
    return res.send(data)

  })
}

// create a minion in database
const createMinion = (req, res) => {
  const {
    body: {
      minion: {
        brand,
        description,
        name,
      },
    },
  } = req

  // create a new instance of the Minion model
  const minion = new Minion({
    brand,
    dateCreated: new Date(),
    description,
    name,
  })

  // save the minion and check for errors
  minion.save((err, minion) => {
    if (err) {
      return res.send(err)
    }

    return res.send(minion)
  })
}

const minions = {
  getMinions,
  createMinion,
}

export default minions