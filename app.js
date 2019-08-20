import {
  connect
} from "./mqtt.min"
App({
  onLaunch: function() {
    let client = connect('wxs://im.changguwen.com/message', {
      clientId: `ttsj_weapp${Math.random().toString(36).substr(2, 15)}`,
      username: 'changdao',
      password: 'changdao@123'
    })
    client.on('connect', _ => {
      console.log('mqtt连接成功')
      client.subscribe('changdao/live/test', (err) => {
        if (!err) {
          client.publish('changdao/live/test', 'Hello ttsj_weapp')
          console.log('订阅成功')
        }
      })
    })
    client.on('error', error => {
      console.log(error)
    })
    client.on('message', (topic, message) => {
      // message is Buffer
      console.log('收到消息：' + message.toString())

    })
  }
})