const {readFile, writeFile} = require('fs')
console.log('start');
readFile('./content/first.txt', 'utf8',(err,result) =>{
    if(err){
        console.log(err);
        return
    }
    const first = result

    readFile('./content/second.txt', 'utf8', (err, result) =>{
      if(err){
        console.log(err);
        return
    }
    const second = result
    writeFile('./content/result-async.txt',`Hello this is the result of the apps: ${first},${second}`,(err,result) => {
        if(err){
            console.log(err);
            return
        } 

        console.log('Done with the task');
    })
    })

})
console.log('starting the next one');