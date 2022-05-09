const mqtt = require('mqtt');

const options = {
  // Authentication information
  clientId: 'io.adafruit.com',
  username: 'free_smartwater',
  password: 'aio_zMay02xULZqZoXvPfAsIjlVr2pLd',
}


const client  = mqtt.connect('mqtt://io.adafruit.com:1883', options);

client.on('connect', function () {
  //console.log('Connected')
  client.subscribe('#', function (err) {
    if (!err) {
      client.publish('vazao', '1')
    }
  })
})

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(topic + ' - ' + message.toString())
  //client.end()
})
