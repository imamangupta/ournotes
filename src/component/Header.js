import React from 'react'

export default function Header() {

    const darkmode = (e) => {
        if (e.target.checked) {
          document.querySelector("body").setAttribute("data-bs-theme", "light");
        } else {
          document.querySelector("body").setAttribute("data-bs-theme", "dark");
        }
      }
    
    
    return (
        <>

            <nav class="navbar navbar-expand-lg bg-body-tertiary sticy-top">
                <div class="container-fluid">
                    <a class="navbar-brand " href="#">Our Notes</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                          
     
                        </ul>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" onChange={darkmode} id="flexSwitchCheckChecked" />
                            <label class="form-check-label" for="flexSwitchCheckChecked" >Light Mode</label>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}
