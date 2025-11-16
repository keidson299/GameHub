# GameHub
This is a React based website built using Vite that allows users to search for new games based on genre, name, price, and other filters.

## Getting Started
First clone the repo, then open the folder in your preferred IDE. 

### Installing packages
Open a terminal and run
```
npm install
```
This will install all the packages listed in the package.json file and put them into a new node_modules folder

### Adding API Key
Next, you have to add the file that contains your api key for the rawg.io website. You can head over to the website and request an api key for free. Once you have the key, insert it into the key section of the following code block
```
import axios, {CanceledError} from "axios"

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: 'insert api key here'
  }
})

export {CanceledError}
```
Save this file as api-client.ts in the services folder

### Running Dev Instance
Finally, return to the terminal and run
```
npm run dev
```
This will create a locally hosted instance of the website. The local address will be written to the console. Take that address, plug it into your browser of choice and explore the site!
