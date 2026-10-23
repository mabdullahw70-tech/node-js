const fs = require('fs').promises;

async function Crudfile(){
    try{
        await fs.writeFile("promisetext.txt", "boom shaka laka");
        console.log("file written successfully");

        let data = await fs.readFile('promisetext.txt', 'utf8');
        console.log("file content :", data);

        await fs.appendFile("promisetext.txt", "\nkia hukam ha mer aka");
        console.log("file appended successfully");

        data = await fs.readFile('promisetext.txt', 'utf8');
        console.log("file content :", data);

        await fs.unlink("promisetext.txt");
        console.log("file deleted successfully");
    }
    catch(error){
        console.error("File operation failed try agian",error);
    }
}
Crudfile();