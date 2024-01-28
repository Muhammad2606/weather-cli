import getArgs from './helpers/argv.js'
import {getWeather} from './servise/api.servise.js'
import {printError, printSuccess, printHelp} from './servise/log.servise.js'
import {saveKeyValue, TOKEN_DICTIONARY} from './servise/stroge.servis.js'

const saveToken = async token => {
	if (!token.length) {
		printError("Token doesn't exist")
		return
	}
	try {
		await saveKeyValue(TOKEN_DICTIONARY.token, token)
		printSuccess('Token was saved')
	} catch (error) {
		printError(error.message)
	}
}

const startCLI = () => {
	const args = getArgs(process.argv)
    console.log(process.env);
	if (args.h) {
		printHelp()
	}
	if (args.s) {
		// save city
	}
	if (args.t) {
		return saveToken(args.t)
	}
	getWeather( process.env.CITY  ?? 'Uzbekistan')
}

startCLI()