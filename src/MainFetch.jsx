//import MainTable from "./MainTable"
 let UstazData = [
    {
    id:'kuz',
    type:'1,የጀማሪዎች አሰልጣኝ', 
    nameOfUstaz:'አቢ ኢስሃቅ',
    definition:'ስለ ኪታቡ ለማወቅ ያህል...  \nየ መጽሃፉ ስም፡\nእምነትህን ከ ቁራአን እና ጠንካራ ከሆነ ከ ነቢዩ(ሰ.አ.ወ) ንግግር (ሃዲስ) ያዝ።\n አዘጋጅ፡\n በ መካ አል ሙከረማህ ኡስታዝ እንዲሁም ታላቅ ኣሊም በሆኑት ሙሃመድ ጀሚል ዚኑ የተዘጋጀ ሲሆን የ ተወለዱትም በ 1343 (አመተ ሂጅራ) ሃላብ በሚባል ከተማ ሲሆን አሏህ ይዘንላቸውና ወደ አኺራ የሀዱት በ 1431 (አመተ ሂጅራ) በ መካ ሞተዋል።\n የ መጽሃፉ አጻጻፍ ሁነታ፡\n በ ጥያቂና መልስ የቀረበ ሲሆን እጥር ምጥን ያለ መጽሃፍ ነው።',
    kitaName:'ኹዝ-ዐቂደተክ',
    photo:'/images/kuz.jpeg',
    link:'./kuz.html'
    },
    {
    id:'keshf',
    type:'2,የመሃከለኞች አሰልጣኝ', 
    nameOfUstaz:'አቡ-አብዲላህ ኢብኑ ኽይሩ',
    definition:'ስለ መጽሃፉ ለማወቅ ያህል... \nየ ምጽሃፉ ስም፡ \nከሽፉ ሹቡሃት፤ ማምታቻዎችን መግለጽ \nማለትም፡\n የድሮ ጊዘ አልፎም የዘመናችን አጋሪዎች ( ሙሽሪኮች ) ሰዎች ተውሂድን እንዳይገነዘቡ የ ሚያደርጉ ማምታቻዎችን ( ሹቡሃት ) የሚገልጽ የሆነ መጽሃፍ ነው።\n አዘጋጅ፡ \nበ ታላቁ ሙጀዲዱ ዲን እንዲሁም የ ሽርክ (በ አሏህ አምልኮ ላይ ማጋራት) ጠላት በሆኑት ኢብኑ አብዱል ወሃብ ሲሆን፣ የተወለዱት በ 1114 (አመተ ሂጅራ) ነጅድ በሚባል ከተማ ሲሆን አሏህ ይዘንላቸውና ወደ አኺራ የሀዱትም በ 1207 (አመተ ሂጅራ) ነው።',
    kitaName:'ከሽፉ-ሹቡሃት',
    photo:'/images/keshf.jpg',
    link:'./keshf.html'
    }
]

function MainTable(
    {id,type,nameOfUstaz,definition,kitabName,photo,link})
    {

    return(
        <>
            <div className="BeginnerUstaz" id={id}>
                <div className="up">                
                <h1 id="type">{type}</h1>
                <h2 id="nameOfUstaz">ኡስታዝ፡ {nameOfUstaz}</h2>
                <p id="definition" style={{whiteSpace: "pre-line"}}>{definition}</p>
                <h2 id="kitabName">የ መጽሃፉ ስም ፡ {kitabName}</h2>
                </div>
                 <div className="under">
                    <div className="container">
                    <a href={link}><img src={photo} alt="PHOTO OF KITAB" id="photo" loading="lazy"/></a>
                    </div>
                </div>

            </div>
        </>       
    )
}

export default function MainFetch () {
    const Result = UstazData.map((item, index) => {
        return(<>
        <MainTable
        key={index} 
        id={item.id}
        type={item.type}
        nameOfUstaz={item.nameOfUstaz}
        definition={item.definition}
        kitabName={item.kitaName}
        photo={item.photo}
        link={item.link}
        />
        </>
      )
    })
    return(
        <>
        {Result}
        </>
    )
};
