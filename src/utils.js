function makeYearMonthDay() {
  const year = new Date().getFullYear()
  const month = new Date().getMonth()
  const day = new Date().getDate()

  return `${year}-${month}-${day}`
}

function unixDate() {
  const todayTimeInUtc = new Date().toUTCString()
  const todayTimeInUnix = Date.parse(todayTimeInUtc)

  return todayTimeInUnix
}

export { makeYearMonthDay, unixDate }