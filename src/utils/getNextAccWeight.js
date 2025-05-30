
export default function getNextAccWeight(pickups, hid) {
  const related = pickups
    .filter(p => p.hid === hid && p.acc_weight !== "")
    .sort((a, b) => a.timestamp.localeCompare(b.timestamp)) // oldest → newest

  const latest = related.at(-1)

  const lastAcc = latest ? Number(latest.acc_weight) : 0
  return lastAcc
}