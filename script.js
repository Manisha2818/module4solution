var string = ["manisha","varsha","riya","jatin"];
for(var i=0; i<string.length; i++)
{
    if(string[i][0]=="j" || string[i][0]=="J")
    {
        console.log("Goodbye " + "j"+string[i]);
    }
    else{
        console.log("hello "+string[i])
    }
}
