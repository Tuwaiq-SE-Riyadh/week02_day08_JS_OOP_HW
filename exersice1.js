function Move (title, duration ,  stars ){
    this.title=title
    this.duration=duration
    this.rstars=stars
    this.full =function(){
        let ar=stars.join()
        return "'"+title+" for "+duration+" minutes. Stars:"+ar+".";
    }
}
let movi1=new Move ("Puff the Magic Dragon lasts", 30 ,["Puff", "Jackie", "Living" ," Sneezes"])
document.querySelector("#output").innerHTML=movi1.full()