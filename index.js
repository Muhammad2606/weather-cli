import getArgs from './helpers/argv.js'
import {printError, printSuccess,printHelp} from './servise/log.servise.js'
const startCli = () =>{
    const arg = getArgs(process.argv)
console.log(arg);
    if(arg.h){
        printHelp()
    }
    if(arg.s){
        //save
    }
    if(arg.t){
        // token
    }

}
startCli();
