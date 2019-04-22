export default (...objects) => (
    objects.reduce((concatedObject, object) => ({...concatedObject, ...object}))
)