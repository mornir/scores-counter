export function countScore(string) {
  const days = string.match(/\(\d+\)/g)

  if (!days) {
    return 0
  }

  return days.reduce((total, day) => {
    const score = parseInt(day.slice(1, -1))
    return (total += score)
  }, 0)
}
