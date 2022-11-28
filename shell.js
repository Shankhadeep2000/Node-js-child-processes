var cp = require("child_process");

var progs = {
    change:"cd",
    pwd:"cd",
    list:"dir",
    exit:"exit"
}

// code for chnakging the directory
//  The term path in below line is the directory address
var child = cp.exec(progs.change ,{cwd:"path"},(error,stdout,stderr)=>{
    if(error)
    {
        console.log(`Name: ${error.name}\nMessage: ${error.message}\nStack: ${error.stack}`);
    }
    else{
        console.log(stdout);
    }
});

// code for showing the directories

 var child1 = cp.exec(progs.list , {cwd:".."},(error,stdout,stderr)=>{
    if(error)
    {
        console.log(`Name: ${error.name}\nMessage: ${error.message}\nStack: ${error.stack}`);
    }
    else{
        console.log(stdout);
    }
});


// code for pwd equivalent in windows 

 var child2 = cp.exec(progs.pwd ,(error,stdout,stderr)=>{
    if(error)
    {
        console.log(`Name: ${error.name}\nMessage: ${error.message}\nStack: ${error.stack}`);
    }
    else{
        console.log(stdout);
    }
});

// code tokill the child process

var spawn = require('child_process').spawn;

var child = spawn('my-command', {detached: true});

process.kill(-child.pid);

