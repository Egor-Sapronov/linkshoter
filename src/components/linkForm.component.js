import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import checkLinkValid from '../tools/checkLinkValid';
import { shortLink } from '../actions/shortenApi.actions';
import Flex from './common/flex.component';
import Button from './common/button.component';
import TextInput from './common/textInput.component';

const StyledTextInput = styled(TextInput)`
  margin-right: ${props => props.theme.calcGrid(2)};
`;

class LinkForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      link: '',
    };

    this.handleLinkChange = this.handleLinkChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleLinkChange(event) {
    this.setState({
      ...this.state,
      link: event.target.value,
    });
  }

  handleButtonClick() {
    this.props.shortLink(this.state.link);

    this.setState({
      ...this.state,
      link: '',
    });
  }

  get isReadyToShort() {
    return checkLinkValid(this.state.link);
  }

  render() {
    return (
      <Flex layout="row" justify="space-between">
        <StyledTextInput
          value={this.state.link}
          onChange={this.handleLinkChange}
          placeholder="Paste the link you want to shorten"
        />
        <Button
          disabled={!this.isReadyToShort}
          onClick={this.handleButtonClick}
        >
          Shorten this link
        </Button>
      </Flex>
    );
  }
}

LinkForm.propTypes = {
  shortLink: PropTypes.func.isRequired,
};

export default connect(
  () => ({}),
  {
    shortLink,
  },
)(LinkForm);
