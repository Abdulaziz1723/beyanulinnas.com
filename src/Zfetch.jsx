const G = import.meta.glob('/public/kuz/*.mp3');
console.log(Object.keys(G).length);
let AudioFiles = Object.keys(G).length

let Zdata = [];

for(let i = 1; i < AudioFiles + 1; i++)
{
    Zdata.push({
        text:`part-${i}`,
        src:`/kuz/part-${i}.mp3`}
    )
}

function Zaudio({text,src})
{
    return(
        <>
        <h5>{text}</h5>
        <audio src={src} preload="none" className="p1" controls></audio>
        </>
    )
}

function Zresult()
{
  const FinalResult = Zdata.map((item,index)=>(
    <Zaudio key={index} text={item.text} src={item.src}/>
  ))
return(
  <>  
    {FinalResult}
</>
)
}

export default Zresult