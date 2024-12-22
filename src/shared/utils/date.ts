export const formatDate = (date: string | Date): string => {
  return new Date(date).toLocaleDateString()
}

export const isValidDate = (date: string | Date): boolean => {
  const timestamp = Date.parse(date.toString())
  return !isNaN(timestamp)
}