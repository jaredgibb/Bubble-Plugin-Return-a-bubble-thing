function(properties, context) {

window.elementInstance.publishState('string',properties.input)
window.elementInstance.triggerEvent('dataPublished')

}