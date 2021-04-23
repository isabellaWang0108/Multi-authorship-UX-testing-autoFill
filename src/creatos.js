import React from 'react';

const total = 100;
var owner_count = 1;
export default class Creator extends React.Component {

    state = {
        count: 0,
        creators: [{ name: 'cryptogod', ownership: 100, max: 100 }]
    }


    addCreator() {
        owner_count++;

        var tempArr = this.state.creators;

        for (var i = 0; i < this.state.creators.length; i++) {
            tempArr[i].ownership = total / owner_count;
        }

        tempArr.push({ name: '', ownership: total / owner_count, max: total - owner_count + 1 });

        this.setState({
            creators: tempArr
        })
    };


    deletCreator(e) {
        var tempArr = this.state.creators;
        tempArr.splice(e, 1);
        owner_count--;

        var newCount = 100;
        for (var i = 0; i < this.state.creators.length; i++) {
            newCount -= this.state.creators[i].ownership;
            tempArr[i].ownership = total / owner_count;
            tempArr[i].max = total - owner_count + 1;
        }
        this.setState({ creators: tempArr, count: newCount });
    }


    changeOwnership(event) {
        //   change the current input


        var tempArr = this.state.creators;



        var sum = parseInt(tempArr[0].ownership) + parseInt(tempArr[event.target.id].ownership);

        if (event.target.value === '') {
            tempArr[event.target.id].ownership = 0;
            tempArr[0].ownership = sum - event.target.value;
        } else {
            tempArr[event.target.id].ownership = event.target.value;
            tempArr[0].ownership = sum - event.target.value;

        }

        this.setState({ creators: tempArr });

        // can't exceed max
        if (this.state.creators[event.target.id].ownership >= this.state.creators[event.target.id].max) {
            tempArr[event.target.id].ownership = this.state.creators[event.target.id].max;
            this.setState({ creators: tempArr });
        }

        // can't be negative field
        if (this.state.creators[0].ownership < 0) {
            tempArr[0].ownership = 0;
            tempArr[event.target.id].ownership = sum + 1;
        }

        //can't exceed total of 100
        var total = 0;
        for (var i = 0; i < tempArr.length; i++) {
            total += tempArr[i].ownership;
        }
        if (total > 100) {
            tempArr[event.target.id].ownership -= (total - 100);
        }
    }

    changeName(event) {
        var tempArr = this.state.creators;
        tempArr[event.target.id].name = event.target.value;
        this.setState({ creators: tempArr });
    }
    render() {

        return (
            <div>
                {this.state.creators.map((content, i) => {
                    return <div className="form-row" key={i} style={{ marginBottom: 16 }}>
                        <div className="col-md-5">
                            {i === 0 ?
                                <input type="name" className="form-control" value={content.name} readOnly />
                                : <input type="name" className="form-control" placeholder="username" id={i} value={content.name} onChange={this.changeName.bind(this)} />
                            }
                        </div>
                        <div className="col-md-4">
                            {i === 0 ?
                                <input type="number" value={content.ownership} className="form-control" id="quantity" name="quantity" min="0" max="100" readOnly />
                                :
                                <input type="number" step="0.1" value={content.ownership} id={i} className="form-control" placeholder='00' min="0" max="100" max={content.max} onChange={this.changeOwnership.bind(this)} />
                            }
                        </div>
                        <div className="col-md-2"> % credit </div>
                        {i === 0 ? <div></div> : <div className="col-md-1" style={{ cursor: 'pointer' }} onClick={() => this.deletCreator(i)}> X </div>}
                    </div>
                }
                )}
                <div style={{ cursor: 'pointer', color: 'blue' }} onClick={() => this.addCreator()} id="add_people">Add a collaborator +</div>
                <br />
                <button>submit</button>
            </div>
        )

    }
}