export function doorState(val) {
  if (val === true) return { text: 'Open', cls: 'bad' }
  if (val === false) return { text: 'Closed', cls: 'good' }
  return { text: '—', cls: '' }
}

export function climateMode(val) {
  const modes = { 0: 'Off', 1: 'Cooling', 2: 'Heating', 3: 'Auto' }
  return modes[val] || `Mode ${val}`
}

export function gearLabel(val) {
  const gears = { 0: 'Parcheggio', 1: 'Retromarcia', 2: 'Folle', 3: 'Marcia' }
  return gears[val] || (val === 'P' ? 'Parcheggio' : val === 'D' ? 'Marcia' : val === 'R' ? 'Retromarcia' : val === 'N' ? 'Folle' : `Gear ${val}`)
}

export function formatTime(isoStr) {
  try {
    return new Date(isoStr).toLocaleString()
  } catch {
    return isoStr
  }
}

export function formatNumber(val) {
  return typeof val === 'number' ? val.toLocaleString() : val
}
