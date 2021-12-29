import React, { Component } from 'react';


export default class FormData extends Component {
    render() {
        return (
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Date</label>
                        <input type="date" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Accomplishments</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Impediments</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Plan for next day</label>
                        <input type="text" className="form-control" />
                    </div>
                    <button type="submit" class="btn btn-primary btn-block">Submit</button>
                </form>
            </div>
        )
    }
}