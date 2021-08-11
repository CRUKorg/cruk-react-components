module.exports = {
    browser: [
        {width: 800, height: 600, name: 'firefox'},
        {width: 1024, height: 768, name: 'chrome'},
        {width: 1024, height: 768, name: 'safari'},
        {width: 800, height: 600, name: 'edgechromium'},
        {
            deviceName: 'iPhone 11 Pro',
            screenOrientation: 'landscape' 
        },
        {
            deviceName: 'Galaxy S20',
            screenOrientation: 'landscape',
            name: 'chrome' // optional, just to make it explicit this is browser emulation and not a real device. Only chrome is supported for device emulation.
        }
    ],  
   // include: /Radio: */ // only to test stories titled Radio
   // all other configuration variables apply
}