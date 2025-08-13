const G = import.meta.glob('/public/kesh/*.mp3');
console.log(Object.keys(G).length);
let AudioFiles = Object.keys(G).length

let Xdata = [];

for(let i = 1; i < AudioFiles + 1; i++)
{
    Xdata.push({
        text:`part-${i}`,
        src:`/kesh/part-${i}.mp3`}
    )
}


function Xaudio({text,src})
{
    return(
        <>
        <h5>{text}</h5>
        <audio src={src} preload="none" className="p1" controls></audio>
        </>
    )
}


function Xresult()
{
  const FinalResult = Xdata.map((item,index)=>(
    <Xaudio key={index} text={item.text} src={item.src}/>
  ))
return(
  <>  
    {FinalResult}
</>
)
}

export default Xresult