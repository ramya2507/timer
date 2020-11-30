let args = process.argv;
args = args.slice(2,args.length).map(x => parseInt(x)).sort((a,b) => a - b);
for (let arg of args) {
  if(arg === 0){
    break;
  }
  if (!isNaN(arg) && arg > 0) {
    setTimeout(() => process.stdout.write('\x07'),arg*1000);
  }
}

