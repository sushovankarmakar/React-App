import React from 'react'
import './index.css';
import './userDetails.jsx'

class UserList extends React.Component {
    
    displayUserList(){
        return this.props.users.map((item, index) => {
            return <button key={index} onClick={()=>this.props.click(index)}>
                {item.fName+' '+item.lName}
            </button>
        });
    }
    
    
    render(){

        return (
            <div>{this.displayUserList()}</div>
        );
    }
}
export default UserList;