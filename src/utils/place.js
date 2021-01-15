const Place = {
  parse: place => place.split(',').map(s => isNaN(+s) ? s : +s)
}

export default Place;