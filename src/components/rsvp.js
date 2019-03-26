// import M from 'materialize-css';
import '../assets/css/rsvp.css';
import flowerLine from '../assets/images/flower_line_1.png';
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

export default class RSVP extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         touched: false,
    //         guestName: '',
    //         firstName: '',
    //         lastName: '',
    //         numOfAdditionalGuests: '',
    //         mailSent: false,
    //         error: null
    //     }
    //     this.handleSubmit = this.handleSubmit.bind(this);
    // }

    // componentDidMount() {
    //     document.getElementsByClassName('warning-text')[0].style.display = "none";

    //     let elems = document.querySelectorAll('.dropdown-trigger');
    //     M.Dropdown.init(elems, { inDuration: 300, outDuration: 225 });

    //     let selectElems = document.querySelectorAll('select');
    //     M.FormSelect.init(selectElems);
    // }

    // sendRSVP() {
    //     axios.get(`http://localhost:5000/api/sendRSVP?guestName=${this.state.firstName} ${this.state.lastName}&&numOfAdditionalGuests=${this.state.numOfAdditionalGuests}`).then(resFromServer => {
    //         var response = resFromServer;
    //         if (response.status === 200) {
    //             this.setState({
    //                 mailSent: true
    //             })
    //         } else {
    //             this.setState({
    //                 error: resFromServer.data
    //             })
    //         }
    //     });
    // }

    // handleSubmit = (event) => async => {
    //     event.preventDefault();
    //     if (this.state.firstName && this.state.lastName && this.state.numOfAdditionalGuests) {
    //         document.getElementsByClassName('warning-text')[0].style.display = "none";
    //         this.setState({
    //             touched: true,
    //             guestName: `${this.state.firstName} ${this.state.lastName}`
    //         });
    //         this.sendRSVP();
    //     }
    //     document.getElementsByClassName('warning-text')[0].style.display = "inline-block";
    // }

    render() {
        // console.log(this.props);
        // console.log("Submitted value:", this.state);
        // if (this.state.mailSent) {
        //     return <div className="container rsvp-container">
        //         <h4 className="center rsvp-sent">Your RSVP was sent! We're looking forward to see you at the wedding.
        //     <br />
        //             <Link className="to-event" to="/events">Visit here</Link> for event details.
        //     </h4>

        //     </div>
        // }
        return <div className="container rsvp-container">
            <h4 className="center">You're invited!
                <br />
                <img className="flower-line" src={flowerLine} alt="" />
                <br />
                <a className="hover-effect" href="https://docs.google.com/forms/d/e/1FAIpQLSeLyGNgUzDHHAKKvoWGDUHWRnBHTnvDU4Vkm_BEh8UGUIvbLw/viewform?usp=sf_link" target="_blank">Click here</a> to RSVP
            </h4>
            {/* <div className="container center">
                <form className="form-style" action="" onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="input-field col s12 m6">
                            <input type="text" id="firstName" name="firstName" value={this.state.firstName} onChange={(event) => {
                                this.setState({
                                    firstName: event.target.value
                                })
                            }} onFocus={() => {
                                document.getElementsByClassName('warning-text')[0].style.display = "none";
                            }} autoComplete="off" />
                            <label htmlFor="">Your first name</label>
                        </div>
                        <div className="input-field col s12 m6">
                            <input type="text" id="lastName" name="lastName" value={this.state.lastName} onChange={(event) => {
                                this.setState({
                                    lastName: event.target.value
                                })
                            }} autoComplete="off" />
                            <label htmlFor="">Your last name</label>
                        </div>
                    </div>
                    <div class="input-field col s12">
                        <select id="numOfAdditionalGuests" name="numOfAdditionalGuests" value={this.state.numOfAdditionalGuests} onChange={(event) => {
                            this.setState({
                                numOfAdditionalGuests: event.target.value
                            })
                        }} >
                            <option value="" disabled>Choose your option</option>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        <label>Number of guests (excluding yourself)</label>
                    </div>
                    <div className="row">
                        <div className="btn right send-btn"><i class="material-icons" onClick={this.handleSubmit}>send</i></div>
                    </div>
                </form>
                <h5 className="warning-text"><i class="material-icons">warning</i> One or more fields is empty. Please fill in.</h5>
            </div> */}
        </div>
    }
}