

export default class Npc extends Phaser.GameObjects.Sprite{
  constructor({
    id,
    x,
    y,
    scene,
    spritesheet,
    spriteName,
    mapping,
    currentDialog,
    dialogs,
    canTalk,
    randomMove,
    
  }){
    super(scene, x,y,spritesheet)
    scene.add.existing(this)
    this.x = Math.floor(x/16)
    this.y = Math.floor(y/16)
    this.mapping=mapping
    this.id = id
    this.currentDialog = currentDialog
    this.dialogs = dialogs
    this.randomMove = randomMove
    this.emotions,
    this.canTalk = canTalk
    this.isTalking = false
    
  }

  //Npc emotions
  init(){
    //añadir emote
    let emotionX = this.x * 16
    let emotionY = this.y * 16
    let emotion =this.scene.add.sprite(emotionX, emotionY,'emotions')
    //animar emotions
    emotion.anims.create({
      key:'begin',
      frames: this.anims.generateFrameNumbers('emotions',{
      start:0, end:3}),
     frameRate:5
    })
    emotion.anims.create({
      key:'question',
      frames: this.anims.generateFrameNumbers('emotions',{
        start:8, end:11}),
      frameRate:5
    })
    emotion.anims.create({
      key:'exclamation',
      frames: this.anims.generateFrameNumbers('emotions',{
        start:16, end:19}),
        frameRate:5
    })
    emotion.anims.create({
      key:'love',
      frames: this.anims.generateFrameNumbers('emotions',{
      start:20, end:23}),
    frameRate:5
    })
    emotion.anims.create({
      key:'sleep',
      frames: this.anims.generateFrameNumbers('emotions',{
      start:24, end:27}),
    frameRate:5
    })
    emotion.anims.create({
      key:'happy',
      frames: this.anims.generateFrameNumbers('emotions',{
      start:32, end:35}),
    frameRate:5,
    repeat:-1
    })
    emotion.anims.create({
      key:'talk',
      frames: this.anims.generateFrameNumbers('emotions',{
      start:40, end:43}),
    frameRate:5
    })   
    this.emotions = emotion
    this.emotions.setDepth(9)//cambia la capa en que se muestra
    this.emotions.visible = false
  }

  emotes(){
    
    this.emotions.x = this.x+10
    this.emotions.y = this.y-3
    if(this.isTalking ==true){
    this.emotions.visible = true;
    this.emotions.anims.play('begin')
    this.emotions.on('animationcomplete',()=> this.emotions.anims.play('talk'))
  }else{
    this.emotions.visible = false;
  }
  }

}

