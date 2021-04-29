/*Removing node and filename from the arguments to extract the numbers*/
const args = process.argv.slice(2);

const strArray = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
var output = "";

/*Iterates through the arguments*/
for(var i = 0; i < args.length; ++i){
    var numToString = args[i].toString();
}