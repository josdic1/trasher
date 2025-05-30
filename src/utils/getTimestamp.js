export default function getTimestamp() {
  const now = new Date()

  const MM = String(now.getMonth() + 1).padStart(2, "0")
  const DD = String(now.getDate()).padStart(2, "0")
  const YY = String(now.getFullYear()).slice(-2)
  const HH = String(now.getHours()).padStart(2, "0")
  const mm = String(now.getMinutes()).padStart(2, "0")

  return `${MM}${DD}${YY}-${HH}${mm}`
}