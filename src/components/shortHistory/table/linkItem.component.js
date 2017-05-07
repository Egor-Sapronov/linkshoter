import React, { Component } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import config from '../../../config';
import { link } from './../shortHistory.props';
import Flex from '../../common/flex.component';
import AccentLink from '../../common/accentLink.component';
import UnimportantText from '../../common/unimportantText.component';
import Action from '../../common/action.component';

class LinkItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHovered: false,
      actionMessage: this.invalidateActionMessage(),
    };

    this.handleMouseEnter = this.handleToggle(true).bind(this);
    this.handleMouseLeave = this.handleToggle(false).bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  invalidateActionMessage(isHovered) {
    return isHovered
      ? 'Click to copy this link'
      : 'Copied!';
  }

  handleToggle(isHovered = false) {
    return function toggle() {
      this.setState({
        ...this.state,
        isHovered,
        actionMessage: this.invalidateActionMessage(isHovered),
      });
    };
  }

  handleClick() {
    this.setState({
      ...this.state,
      actionMessage: this.invalidateActionMessage(false),
    });
  }

  render() {
    const url = `${config.protocol}://${config.shortDomain}/${this.props.link.shortcode}`;

    return (
      <Flex
        layout="column"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <Flex layout="row" justify="space-between" align="center">
          <AccentLink target="_blank" href={url}>
            {`${config.shortDomain}/${this.props.link.shortcode}`}
          </AccentLink>
          {this.state.isHovered &&
            <CopyToClipboard text={url}>
              <Action onClick={this.handleClick}>
                {this.state.actionMessage}
              </Action>
            </CopyToClipboard>
          }
        </Flex>
        <UnimportantText>{this.props.link.link}</UnimportantText>
      </Flex>
    );
  }
}

LinkItem.propTypes = {
  link: link.isRequired,
};

export default LinkItem;
