const fs=require('fs');

function getNotes() {
    return "your notes..."
}

function addNotes(title,body) {
    const notes=loadNotes();

   console.log("hiihiii")

    const duplicateNotes=notes.filter(function(note){
     return note.title===title;
    })
    console.log(notes)
    if (duplicateNotes.length===0) {
        notes.push({
            title:title,
            body:body
        })
        console.log(notes)
        saveNotes(notes)
    }else{
        console.log("note is already taken")
    }
}

function saveNotes(notes) {
    const dataJSON=JSON.stringify(notes);
    fs.writeFileSync('file.json',dataJSON)
}
const loadNotes=function(){
    try {
       const dataBuffer=fs.readFileSync('file.json')
       const dataJson=dataBuffer.toString();
       console.log(dataJson)
       return JSON.parse(dataJson);
    } catch (error) {
        return []
    }
}

const removeNotes=function(title){
const notes=loadNotes();
let notesToKeep=notes.filter((value)=>{
   return  value.title !==title;
})

console.log(notesToKeep)

if (notes.length>notesToKeep.length) {
    console.log("note is removed")
    saveNotes(notesToKeep)
}

}

const listNotes=function(){
     const data=fs.readFileSync('file.json','utf8')
    const dataJson=JSON.parse(data);
    dataJson.forEach((element,i) => {
        console.log(`${i} title is ${element.title} and body is ${element.body}`)
    });

}

const readNote=function(title){
    const notes =loadNotes();
    notes.forEach(item=>{
       if (item.title===title) {
         console.log(`${item.title} description is ${item.body}`)
       }else{
        console.log('note not found')
       
       }
    })

}


module.exports={
    getNotes:getNotes,
    addNotes:addNotes,
    removeNotes:removeNotes,
    listNotes:listNotes,
    readNote:readNote
};