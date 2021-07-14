import React, {useState} from 'react'
import Icon from "./Components/Icon"
// import react-toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import reactstrap
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import "./Components/Icon"
import "./style.css"

const tiktacArray = new Array(9).fill("")
const App = () => {
    let [isCross, setIsCross] = useState(true)
    let [winMessage, setWinMessage] = useState("")

    const playAgain=()=>{
        setIsCross(true)
        setWinMessage("")
        tiktacArray.fill("")
    }

    const findWinner=()=>{
       if(tiktacArray.fill("") = useState(true)){
           console.log("you won");
       }
       else{
           console.log("Sorry, you lost");
       }
    }

 

    return(
        <div> <Icon choice="sdvkbhf"/> </div>
    )
}

export default App

