
import LogIn from "../components/LogIn";
import React from 'react'

const LogInPage = () => {

  // Set login status in localStorage
  localStorage.setItem("isLogIn", "true");

  // Retrieve the login status from localStorage to verify it's set correctly
  const localStorageStatus = localStorage.getItem("isLogIn");
  console.log("login status from local storage : LogInPage",localStorageStatus);  // This should now log "true"
  
  return (
<>

<LogIn></LogIn>



</>
  )
}

export default LogInPage