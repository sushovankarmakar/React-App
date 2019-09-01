import React from 'react';

class UserDetails extends React.Component {

    getUserDetails(){
        if(this.props.selectedIndex === -1){
            return <div> {this.showUserData("","")} </div>
        }
        else
            return this.props.users.map((item,index)=> 
            {
                if( index === this.props.selectedIndex ){
                    return <div> {this.showUserData(item.fName, item.lName, index)} </div>
                }
            })
    }


    showUserData(fName,lName,index){
        return (
            <div>
                FirstName: <input id='fName' type='text' defaultValue={fName}></input> <br/>
                LastName: <input id='lName' type='text' defaultValue={lName}></input> <br/>
                 
                <button type='button' onClick={() => 
                    this.props.update(document.getElementById('fName').value,
                                      document.getElementById('lName').value, 
                                      index)}
                > 
                    Update 
                </button>
            </div>
        );
    }


    render(){
        return <div> {this.getUserDetails()} </div> ;  
    }
}

export default UserDetails;