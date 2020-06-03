import React from "react";
import { Segment, Form, Input, Label } from "semantic-ui-react";

const DateSelector = ({ handleChange }) => {
  return (
    <Segment>
      <Form>
        <Form.Field>
          <Label size="medium">Select a date: </Label>
          <Input
            className="date"
            type="date"
            name="date"
            onChange={handleChange}
          />
        </Form.Field>
      </Form>
    </Segment>
  );
};

export default DateSelector;
