import React, { Component } from 'react';
import { useState } from "react";
import ReactDOM from "react-dom";

function StatusForm() {

    const [inputs, setInputs] = useState({});

    const handleSubmit = (event) => {
        alert('You have updated the status ')
        console.log(inputs);
    }

    return (
        <div className="card">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" name='name' required value={inputs.name} />
                </div>
                <div className="form-group">
                    <label>Date</label>
                    <input type="date" name='date' required value={inputs.date} />
                </div>
                <div className="form-group">
                    <label>Accomplishments</label>
                    <input type="text" name='accomplishments' required value={inputs.accomplishments} />
                </div>
                <div className="form-group">
                    <label>Impediments</label>
                    <input type="text" name='impediments' value={inputs.impediments} />
                </div>
                <div className="form-group">
                    <label>Plan for next day</label>
                    <input type="text" name='nextDayPlan' required value={inputs.nextDayPlan} />
                </div>
                <button type="submit" class="btn btn-primary btn-block">Submit</button>
            </form>
        </div>
    )
}
ReactDOM.render(<StatusForm />, document.getElementById('root'));