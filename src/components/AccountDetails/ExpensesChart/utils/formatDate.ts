export function formatDate(date: string | Date): string {
    const parsedDate = date instanceof Date ? date : new Date(date)

    return parsedDate.toLocaleDateString('ru-RU')
}