import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header.jsx';
import Footer from './footer.jsx';
import UserDetails from './userDetails.jsx';
import UserList from './userList.jsx';

//const element = <h1>Hello World</h1>
const rootElement = document.getElementById('root');
//const contentText = <h1>Hello World</h1>

//const element = <div className = 'main'> {contentText} </div>;

const data = [
    {fName: 'Hola', lName: 'Kola'},
    {fName: 'Suso', lName: 'Vila'},
    {fName: 'Jordan', lName: 'Sancho'},
    {fName: 'Vimal', lName: 'Pan'}, ]

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            userData : data,
            selectedIndex : -1,
        };
    }

    updateIndex(index) {
        this.setState({
            selectedIndex : index
        })
    }

    updateUserList(fName, lName, index){
        let updatedUserData = this.state.userData;
        updatedUserData[index] = {"fName": fName, "lName": lName}
        this.setState(
            {
            userData : updatedUserData,
            selectedIndex: -1
            }
        )
    }

    render() {
        return <div className='main'>
            <Header />
            <UserList users={this.state.userData} 
                        click={this.updateIndex.bind(this) }/>
            <UserDetails users={this.state.userData} 
                        selectedIndex={this.state.selectedIndex} 
                        update={this.updateUserList.bind(this) }/>
            <Footer />
        </div>;
    }
}

ReactDOM.render(
    <App />,
    rootElement
);