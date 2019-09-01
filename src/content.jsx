import React from 'react';

class Content extends React.Component {
    render() {
        return (
            <div className='content'>
                <section>
                <table border='1'>
                <tbody>
                        <tr>
                            <td>First Name</td>
                            <td>Last Name</td>
                        </tr>
                        <tr>
                            <td>Sushovan</td>
                            <td>Karmakar</td>
                        </tr>    
                </tbody>
                </table>
                </section>
            </div>     
        );
    }
}

export default Content;