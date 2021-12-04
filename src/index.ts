import app from './app';

function main (): void{
    app.listen(app.get('port')); // listen in the port 'port' (3000)
    console.log(`Server on port ${app.get('port')}`);
};

main();