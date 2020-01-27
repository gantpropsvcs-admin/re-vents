import React, { Component } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';

class EventForm extends Component {
    state = {
        title: '',
        date: '',
        city: '',
        venue: '',
        hostedBy: '',
    };

    handleFormSubmit = evt => {
        this.props.createEvent(this.state);
        evt.preventDefault();
    };

    handleInputChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    };

    render() {
        const { cancelFormOpen } = this.props;
        const { title, date, city, venue, hostedBy } = this.state;

        return (
            <div>
                <Segment>
                    <Form onSubmit={this.handleFormSubmit} autoComplete="off">
                        <Form.Field>
                            <label>Event Title</label>
                            <input
                                name="title"
                                onChange={this.handleInputChange}
                                placeholder="Event Title"
                                value={title}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Event Date</label>
                            <input
                                type="date"
                                placeholder="Event Date"
                                name="date"
                                onChange={this.handleInputChange}
                                value={date}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>City</label>
                            <input
                                placeholder="City event is taking place"
                                name="city"
                                onChange={this.handleInputChange}
                                value={city}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Venue</label>
                            <input
                                placeholder="Enter the Venue of the event"
                                name="venue"
                                onChange={this.handleInputChange}
                                value={venue}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Hosted By</label>
                            <input
                                placeholder="Enter the name of person hosting"
                                name="hostedBy"
                                onChange={this.handleInputChange}
                                value={hostedBy}
                            />
                        </Form.Field>
                        <Button positive type="submit">
                            Submit
                        </Button>
                        <Button type="button" onClick={cancelFormOpen}>
                            Cancel
                        </Button>
                    </Form>
                </Segment>
            </div>
        );
    }
}

export default EventForm;
