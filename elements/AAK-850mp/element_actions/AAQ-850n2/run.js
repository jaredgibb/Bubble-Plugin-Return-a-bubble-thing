function(instance, properties, context) {


 const str = properties.input
 const result = btoa(str)
 instance.publishState("string",result)
 instance.triggerEvent("dataPublished")


}