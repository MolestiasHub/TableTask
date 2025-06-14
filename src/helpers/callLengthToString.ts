export default (length: number) => {
    if(!length) return ""
    const seconds = length%60
    return `${Math.floor(length/60)}:${seconds>9?"":"0"}${seconds}`
}