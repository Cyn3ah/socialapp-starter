import React from "react";
import Clock from "../../pages/clock/Clock";


 class DropDown extends React.Component {
    constructor(){
        super();

        this.state = {
           displayMenu: false,
         };
    
      this.showDropdownMenu = this.showDropdownMenu.bind(this);
      this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
    
    };
    
    showDropdownMenu(event) {
        event.preventDefault();
        this.setState({ displayMenu: true }, () => {
        document.addEventListener('click', this.hideDropdownMenu);
        });
      }
    
      hideDropdownMenu() {
        this.setState({ displayMenu: true }, () => {
          document.addEventListener('click', this.hideDropdownMenu);
        });
    
      }
    
      render() {
        return (
            <div  className="dropdown" style = {{background:"white",width:"200px"}} >
             <div className="button" onClick={this.showDropdownMenu}>Menu</div>
    
              { this.state.displayMenu ? (
              <ul>
             
             <li><a href="#Factoids">Factoids</a></li>
             <li><a href="#Comet">Comet</a></li>
             <li><a href="#Eclipse">Eclipse</a></li>
             <li><a href="#Planets">Planets</a></li>
            
              </ul>
            ):
            (
              null
            )
            }

            <div>
                <Clock />
            </div>
    
           </div>
    
        );
      }
    }



export default DropDown;


