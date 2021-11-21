let appConfig = {
  max_event_listeners: 30,

  avatar_directory: 'src/public/images/users',
  avatar_types: ['image/jpg', 'image/png', 'image/jpeg'],
  avatar_limit_size: 1048576, //byte = 1MB
  general_avatar_group_chat: 'group-avatar-trungquandev.png',
  image_message_directory: 'src/public/images/chat/message',
  image_message_types: ['image/jpg', 'image/png', 'image/jpeg'],
  image_message_limit_size: 1048576, //byte = 1MB

  attachment_message_directory: 'src/public/images/chat/message',
  attachment_message_limit_size: 1048576, //byte = 1MB
}

export default appConfig
