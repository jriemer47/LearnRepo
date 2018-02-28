getEmails = (people, options= {}) => {

  // options = options || {}
  let withNames = options.withNames
  let onlyActive = options.onlyActive

  if (onlyActive) {
    people = people.filter(isActive)
  }

  return people.map((person, result = '') => {
    // let result = ''
    let names = person.name
    let email = person.email

    if (withNames) {
      result = `${names} <${email}>`
    } else {
      result = `${email}`
    }

    return result
  }).join(', ')
}

getAddresses = (people, options= {}) => {
  // options = options || {}
  let onlyActive = options.onlyActive

  if (onlyActive) {
    people = people.filter(isActive)
  }

  return people.map((person) => {
    let address = person.address
    let name = person.name
    let line1 = address.line1
    let line2 = address.line2

    let fullAddress = `${name}\n${line1}\n`

    if (line2) {
      fullAddress += `${line2}\n`
    }
    let city = address.city
    let state = address.state

    fullAddress += `${city}, ${state}`
    return fullAddress
  }).join('\n\n')
}

getYoungest = (people, ...theRest) => {
  people.sort((personA, personB) => {
    return personA.age - personB.age

  })

  return {
    youngest: people[0],
    others: people.slice(1)
  }
}

isActive = (person={ isActive: true }) => {
  return person.isActive
}

module.exports = {
  getEmails: getEmails,
  getAddresses: getAddresses,
  getYoungest: getYoungest
}
