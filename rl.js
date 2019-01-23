var readline = require("readline");
    rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt('--> ');
rl.prompt();

var toDoList = [];

var commands = {
    ls:function(){
        console.log(toDoList);
    },
    add:function(item){
        toDoList.push(item);
    },
    rm:function(removable) {
        toDoList = toDoList.filter(function(item) {
            return item !== removable
        })
    }
}

rl.on('line', function(line){

    var words = line.split(' '),
        command = words.shift(),
        argsStr = words.join(' ');

    commands[command](argsStr);

    rl.prompt();
});