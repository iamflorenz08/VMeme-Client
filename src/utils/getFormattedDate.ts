const getFormattedDate = (date: Date): string => {
    const newDate = new Date(date)
    const month = newDate.getMonth() < 10 ? '0' + (newDate.getMonth() + 1) : newDate.getMonth() + 1
    const day = newDate.getDate() < 10 ? '0' + (newDate.getDate() + 1) : newDate.getDate()
    const year = newDate.getFullYear()
    const hours = newDate.getHours() < 10 ? '0' + (newDate.getHours() + 1) : newDate.getHours()
    const minutes = newDate.getMinutes() < 10 ? '0' + (newDate.getMinutes() + 1) : newDate.getMinutes()
    return String(month + '/' + day + '/' + year + ' ' + hours + ':' + minutes)
}


export default getFormattedDate