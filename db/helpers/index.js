// data extraction helpers

// mongodb helpers

// extract minions from db result set
export function extractMinions(minions) {
  return minions.map((minion) => {
    const {
      _id,
      brand,
      description,
      name,
    } = minion

    // create processed minion object
    const processed = {
      _id,
      brand,
      description,
      name,
    }

    return processed
  })
}