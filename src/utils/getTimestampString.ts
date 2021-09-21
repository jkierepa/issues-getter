const getTimestampString = (timestamp: number | string): string => {
  let ts = timestamp
  if (typeof timestamp === 'string') {
    ts = new Date(timestamp).getTime()
  }
  const timestampArr = new Date(ts).toString().split(' ')
  const timestampString = `${timestampArr[1]} ${timestampArr[2]} ${timestampArr[4]}`
  return timestampString
}

export default getTimestampString
