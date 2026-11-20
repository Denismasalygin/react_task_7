export function getRandomDate(random: () => number): string {
    const startDate = new Date(2021, 0, 1)
    const endDate = new Date()

    const startTimestamp = startDate.getTime()
    const endTimestamp = endDate.getTime()

    const timestamp =
        startTimestamp +
        Math.floor(random() * (endTimestamp - startTimestamp + 1))

    return new Date(timestamp).toISOString()
}
