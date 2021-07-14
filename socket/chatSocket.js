const fs=require("fs"),
path=require("path");

const chatSocket = (socket, io) => {
  socket.on("message", (payload) => {
    const {data,filename}=payload
    fs.writeFile(path.join(__dirname,"uploads",filename),payload,(err)=>{
     if(err){
       console.log(err)
     }

     console.log("Done")
    })
  });
};

module.exports = chatSocket;
