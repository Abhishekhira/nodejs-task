const notes=require('./notes');
const http=require('http')
console.log(notes.getNotes())
// const data=require('./file.json');
const yargs=require("yargs");

//created add command 
yargs.command({
    command:"add",
    describe:'add a new note',
    builder:{
       title:{
        describe:'Note title',
        demandOption:true,
        type:'string'
       },
       body:{
        describe:"body description you need to describe",
        demandOption:true,
        type:"string"
       }
    },
    handler:function(argv){
       notes.addNotes(argv.title,argv.body);
    }
})

//creating remove command
yargs.command({
    command:"remove",
    describe:"command for removing",
    builder:{
        title:{
          describe:"note remove title",
          demandOption:true,
          type:"string"
        }
    },
    handler:function(argv){
        console.log(argv)
        console.log('app.js is also changes')
       notes.removeNotes(argv.title)
    }
})

//creating read command 
yargs.command({
    command:"read",
    describe:"command for reading note",
    builder:{
      title:{
        describe:'enter title',
        demandOption:true,
        type:"string"
      }
    },
    handler:function(argv){
       
        notes.readNote(argv.title)
    }
})

//creating list command
yargs.command({
    command:"list",
    describe:"command for list is called",
    handler:function(){
        notes.listNotes()
    }
})

yargs.parse()

// http.createServer((req,resp)=>{
//     resp.writeHead(200,{
//         "Content-Type":"application/json"
//     })
//     resp.write(JSON.stringify(data));
//     resp.end()
// }).listen(4600)