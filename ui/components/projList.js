import React from 'react';

class projList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showAddForm: false,
            title: '',
            endDate: ''
        }
    }
    addProj =()=>{
        this.setState((prev)=>{
            return({
                showAddForm: !prev.showAddForm
            })
        })
    }

    render(){
        const {title, endDate} = this.state;
        const {projList} = this.props;
        const projObj = {title, endDate};
        console.log(this.props);
        return(
        <section className='proj-list-container'>
            {projList && projList.map((item,i)=>{
                <projContent {...item}/>
            })}
            <button className='add-button' onClick={this.addProj}>+</button>
            {this.state.showAddForm && 
            <div className='form'>
                <label>project Title</label>
                <input type='text' onChange={(e)=>{this.setState({title: e.target.value})}}/>
                <label>end date</label>
                <input type='text' onChange={(e)=>{this.setState({endDate: e.target.value})}}/>
                <button className='submit' onClick={()=>{this.props.addNewProj.bind(this,projObj)}}>submit</button>
            </div>}
        </section>
        );
    }
}

const projContent = (props) => {
    return (
        <div className='proj-content'>
            <div className='title'>{props.title}</div>
            <div className='end-date'>{props.endDate}</div>
            <div className='percent-completed'></div>
        </div>

    )
}
export default projList;