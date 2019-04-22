export default ({message, boolean}) => {
    if (boolean) {
        throw new Error(message)
    }
}