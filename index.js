const getArgv = require('./helpers/argv')
const startCli = () =>{
    const arg = getArgv(process.argv)

    if(arg.h){
        //help
    }
    if(arg.s){
        //save
    }
    if(arg.t){
        // token
    }

}
startCli();
