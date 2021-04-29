/*Removing node and filename from the arguments to extract the numbers*/
const args = process.argv.slice(2);

const strArray = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
var output = "";
/*To temporarily store the output of each number*/
var tempOutput = "";

/*Iterates through the arguments*/
for(var i = 0; i < args.length; ++i) {
    var numToString = args[i].toString();
    /*Iterates through each digit*/
    for(var j = 0; j < numToString.length; ++j) {
        /*Adding str of digit to tempOutput*/
        tempOutput += strArray[numToString.charAt(j)];
    }
    output += tempOutput;
    tempOutput = "";
    /*For every argument except the last one, put a comma*/
    if(i < args.length - 1) {
        output += ",";
    }
}

console.log(output);