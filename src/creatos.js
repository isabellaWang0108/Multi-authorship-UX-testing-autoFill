import React from 'react';

const total = 100;
var owner_count = 1;
export default class Creator extends React.Component {

    state = {
        count: 0,
        creators: [{ name: 'cryptogod', ownership: 100, max: 100 }],
        selected: "custom",
        key: 28,
        show_message: false
    }


    addCreator() {
        owner_count++;

        var tempArr = this.state.creators;
        var divid = parseFloat(total / owner_count).toFixed(1);

        for (var i = 0; i < this.state.creators.length; i++) {
            if (this.state.selected === "auto") {

                tempArr[i].ownership = divid;
            } else {
                if (i === 0)
                    tempArr[i].ownership = Math.ceil(divid);
                else
                    tempArr[i].ownership = Math.floor(divid);
            }
        }

        tempArr.push({ name: '', ownership: Math.floor(divid), max: total - owner_count + 1 });

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
            if (this.state.selected === "auto") {
                tempArr[i].ownership = parseFloat(total / owner_count).toFixed(1);
            } else {
                if (i === 0)
                    tempArr[i].ownership = Math.ceil(total / owner_count);
                else
                    tempArr[i].ownership = Math.floor(total / owner_count);
            }
            tempArr[i].max = total - owner_count + 1;
        }
        this.setState({ creators: tempArr, count: newCount });
    }

    radioSelect(e) {
        this.setState({ selected: e.target.value })
        var tempArr = this.state.creators;
        var share = parseFloat(100 / tempArr.length).toFixed(1);

        if (e.target.value === "auto") {
            for (var i = 0; i < tempArr.length; i++) {
                tempArr[i].ownership = share;
            }
        } else {
            for (var i = 0; i < tempArr.length; i++) {
                if (i === 0)
                    tempArr[i].ownership = Math.ceil(tempArr[i].ownership);
                else
                    tempArr[i].ownership = Math.floor(tempArr[i].ownership);
            }
        }
    }

    onKeyDown(e) {
        console.log("keydown:" + e.key);
        this.setState({ key: e.key.charCodeAt(0) })
    }

    changeOwnership(event) {
        //   change the current input
        const re = /^[0-9\b]+$/;
        console.log(re.test(event.target.value))

        if (re.test(event.target.value)) {
            var tempArr = this.state.creators;

            this.setState({ show_message: false });
            // change between owner and current user
            var sum = parseInt(tempArr[0].ownership) + parseInt(tempArr[event.target.id].ownership);
            console.log(sum);

            if (event.target.value === '') {
                tempArr[event.target.id].ownership = 0;
                tempArr[0].ownership = sum - event.target.value;
            } else {
                tempArr[event.target.id].ownership = event.target.value;
                tempArr[0].ownership = parseInt(sum - event.target.value);
            }

            this.setState({ creators: tempArr });

            // can't exceed max
            if (this.state.creators[event.target.id].ownership >= this.state.creators[event.target.id].max) {
                tempArr[event.target.id].ownership = this.state.creators[event.target.id].max;
                this.setState({ creators: tempArr });
            }

            // // can't be negative field
            if (this.state.creators[0].ownership < 0) {
                tempArr[0].ownership = 0;

                tempArr[event.target.id].ownership = sum;
            }

        } else {
            this.setState({ show_message: true })
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
                <div className="form-row" style={{ marginBottom: 16 }}>
                    <div className="col-md-8" >
                        <input type="radio" style={{ cursor: 'pointer' }} name="drone" value="auto" onChange={this.radioSelect.bind(this)}
                            checked={this.state.selected === "auto"} /><span> Split even</span>

                        <input type="radio" style={{ cursor: 'pointer', marginLeft: 24 }} name="drone" value="custom" onChange={this.radioSelect.bind(this)}
                            checked={this.state.selected === "custom"} /><span> Customize split</span>
                    </div>
                </div>


                {
                    this.state.creators.map((content, i) => {
                        return <div className="form-row" key={i} style={{ marginBottom: 16 }}>
                            <div className="col-md-5">
                                {i === 0 ?
                                    <input type="name" className="form-control" value={content.name} readOnly />
                                    : <input type="name" className="form-control" placeholder="username" id={i} value={content.name} onChange={this.changeName.bind(this)} />
                                }
                            </div>
                            <div className="col-md-4">
                                {i === 0 || this.state.selected === "auto" ?
                                    <input type="number" value={content.ownership} className="form-control" id="quantity" name="quantity" min="0" max="100" readOnly />
                                    :
                                    <input type="number" value={content.ownership} id={i} className="form-control" placeholder='00' min="0" pattern="[0-9]+" max={content.max} onChange={this.changeOwnership.bind(this)} onKeyDown={this.onKeyDown.bind(this)} />
                                }
                            </div>
                            <div className="col-md-2"> % credit </div>
                            {i === 0 ? <div></div> : <div className="col-md-1" style={{ cursor: 'pointer' }} onClick={() => this.deletCreator(i)}> X </div>}
                        </div>
                    }
                    )
                }

                {this.state.show_message ? <p style={{ color: 'red' }}>The input field only supports whole number.</p> : null}
                <div style={{ cursor: 'pointer', color: 'blue' }} onClick={() => this.addCreator()} id="add_people">Add a collaborator +</div>
                <br />
                <button>submit</button>
            </div >
        )

    }
}