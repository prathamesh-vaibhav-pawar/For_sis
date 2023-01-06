in_name = document.getElementById("in1").value 

if(in_name === " "){
    document.getElementById("Out").innerHTML = " "
}

function Identify(){
    in_name = document.getElementById("in1").value 
    if(in_name === "Sharvi" || in_name ==="sharvi"){
        document.getElementById("Out").innerHTML = "Elizabeth"
        console.log("Elizabeth")
    }
    else if(in_name === "Saumya" || in_name === "saumya"){
        document.getElementById("Out").innerHTML = "PvP"
        console.log("PvP")
    }
}