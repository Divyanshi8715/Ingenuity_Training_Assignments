import {Application, Container,Resource, Sprite, Texture, AnimatedSprite, DisplayObject,} from 'pixi.js';
import assets from './assets';
import { preLoader } from './PreLoader';
import { getSSAnimTextures } from './Texture';
//import { getTexture} from './Texture';
export class Games{
    private stage : Container;
    private dir_x :number=0;
    private isInitialized = false;
    private dir_y:number=0;
    private speed:number= 3
    private game_over:boolean= false;
    private keyvalue : string = "none";
    //private food : ImageBitmap;

    private readonly background : Container;
    private  snake : Sprite|undefined;
    private  app : Application;
    private food: AnimatedSprite | undefined;
    constructor(app:Application){
        this.app = app;
        this.stage = this.app.stage;
        this.background = new Container();
        this.stage.addChild(this.background);
       
        
        preLoader(assets, ()=>{
            //const gsBT = new BaseTexture(
            //    app.loader.resources['goku-ss'].url
            //)
            //const gokuStill = new Texture(gsBT,new Rectangle(0,0,w,h))
            this.snake = this.createImage(getSSAnimTextures('download','still')[0])
            this.food=this.createImageFood(getSSAnimTextures('black', 'still')[0]);
            
            
            console.log(app)
            window.onkeydown=(e:KeyboardEvent)=>{
                this.keyvalue = e.code
                console.log(e.code)
                this.snake_position_update()
            }

        })
         
    }
    private snake_position_update(){

        if(this.keyvalue==='ArrowLeft'){
            if(this.dir_x!=1){
            this.dir_x =-1;
            this.dir_y =0;}
        }
        else if(this.keyvalue === 'ArrowRight'){
            if(this.dir_x!=-1){
            this.dir_x = 1;
            this.dir_y =0;}
        }
        else if(this.keyvalue === 'ArrowUp'){
            if(this.dir_y!=1){
            this.dir_x =0;
            this.dir_y =-1;}
        }
        else if (this.keyvalue === 'ArrowDown'){
            if(this.dir_y!=-1){
            this.dir_x =0;
            this.dir_y =1}
        }
        else if (this.keyvalue=='Space'){
            this.dir_x=0;
            this.dir_y =0
        }
        if(this.snake){
        this.snake.x+=this.dir_x*this.speed
        this.snake.y+=this.dir_y*this.speed}
    }

   private createImageFood(texture:Texture<Resource>):any{
        
        const img = Sprite.from(texture);
        img.anchor.set(0.1)
        img.position.set(100,200);
        img.scale.set(0.2,0.1)
        img.position.set(this.app.view.width / 5, this.app.view.height / 4);
         return this.stage.addChild(img);

    }
    private createImage(texture:Texture<Resource>):any{
        
        const img = Sprite.from(texture);
        img.anchor.set(0.5)
        img.position.set(730,460);
        img.scale.set(0.40,0.25)
        img.position.set(this.app.view.width / 2, this.app.view.height / 2);
         return this.stage.addChild(img);

    }
   /* private createAnimated(assetId: string, animId:string): AnimatedSprite {
        const anim = new AnimatedSprite(getSSAnimTextures(assetId, animId));
        anim.animationSpeed = 0.05;
        anim.play();
        return this.stage.addChild(anim);
      }*/
  

    check_boundary_constraint(){
        
        if(this.snake){
            console.log(this.snake.y,this.app.view.height)
        if(this.snake.x<65/2  ||  this.snake.x+65/2>800){
            this.game_over = true;

        }
        if(this.snake.y<40 ||  this.snake.y+80/2>500){
            this.game_over = true;

        }
    }}

     update(delta:number):void{
    
        if (this.isInitialized) {
            // console.warn(delta);
            (this.food as DisplayObject).x += delta;
        }
        
         //(this.background.x += delta)
        if(!this.game_over){
            this.snake_position_update()
        this.check_boundary_constraint()
        }
        else{
            location.reload()
        }
         

    }

    
}