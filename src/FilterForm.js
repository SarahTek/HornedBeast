import React from 'react';
import Form from 'react-bootstrap/Form';



class FilterForm extends React.Component {


  filter = (event) => {
    const numberOfHorns = parseInt(event.target.value);
    let gallery = this.props.ImageUrls;
    if (numberOfHorns) {
      gallery = this.props.ImageUrls.filter(beast => beast.horns === numberOfHorns);
    }
    this.props.updatedFilterBeasts(gallery);
  }

  render() {
    return (
      < Form >
        <Form.Label>How many horns do you want to see?</Form.Label>
        <Form.Select as="select" onChange={this.filter} >
          <option value="">All of them</option>
          <option value="1">One Horn</option>
          <option value="2">Two Horns</option>
          <option value="3">Three Horns</option>
          <option value="100">So many Horns</option>
        </Form.Select>
      </Form >
    )
  }
};
export default FilterForm;
