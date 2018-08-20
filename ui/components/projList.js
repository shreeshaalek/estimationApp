import React from 'react';

const ProjContent = ({id, title, endDate, deleteProj=f=>f}) => {
    return (
        <div className='proj-content'>
            <div className='title'>{title}</div>
            <div className='end-date'>{endDate}</div>
            <div className='percent-completed'></div>
            <button className='delete-proj' onClick={()=>{deleteProj(id)}}>delete</button>
        </div>

    )
}

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
        const {projLists} = this.props;
        const id = Date.parse(new Date());
        const projObj = {id, title, endDate};

        return(
        <section className='proj-list-container'>
            {( +projLists !== 0 && projLists.map((item,i)=>
                <ProjContent key={i} {...item} deleteProj={this.props.deleteProj}/>
            ))}
            <button className='add-button' onClick={this.addProj}>+</button>
            {this.state.showAddForm && 
            <div className='form'>
                <label>project Title</label>
                <input type='text' onChange={(e)=>{this.setState({title: e.target.value})}}/>
                <label>end date</label>
                <input type='text' onChange={(e)=>{this.setState({endDate: e.target.value})}}/>
                <button className='submit' onClick={()=>{this.props.addNewProj(projObj)}}>submit</button>
            </div>}
        </section>
        );
    }
}

export default projList;