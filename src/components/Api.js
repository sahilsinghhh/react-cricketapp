import { blue } from '@material-ui/core/colors';
import React, { Component } from 'react';

class Api extends Component {
    constructor(props) {
        super(props);
        
        this.state = { MatchList: [] };
    }


    componentDidMount() {
        fetch('https://cricapi.com/api/matches/?apikey=O009vGYmXoYtZGZURF2ItI7xzDO2').then((resp) => {
            resp.json().then((data) => {
                console.log(data.matches);

                // update data in html
                this.setState({ MatchList: data.matches });
            })
        })

    }

    render() {

        return (
            <>
                            
                {
                    this.state.MatchList ?
                        this.state.MatchList.map((list) =>
                        
                                <ul class="list-group list-group-flush border border-primary ">
                                    <li className="list-group  mt-5 text-primary border" >Date-{list.dateTimeGMT}</li>
                                    <li className="list-group text-danger mt-2">Team-{list.['team-1']}</li>
                                    <li className="list-group">vs</li>
                                    <li className="list-group text-danger ">Team-{list.['team-2']}</li>
                                    <li className="list-group mb-5 mt-3 text-success">Winning team-{list.winner_team}</li>
                                </ul>
                      
                        )
                        // <h2>Date-{list.date} Team-A {list.['team-1']} Team-B{list.['team-2']} Winning-Team{list.winner_team} </h2> )
                        :
                        null
                }

            </>);
    }
}

export default Api;

