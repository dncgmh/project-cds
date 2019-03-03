import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FacebookLogin from 'react-facebook-login';
import { loginFacebook } from '../User/user.action';

export class Facebook extends Component {
  constructor(props) {
    super(props);
    this.responseFacebook = this.responseFacebook.bind(this);
  }
  static propTypes = {
    // prop: PropTypes
  };
  responseFacebook(response) {
    // console.log();
    this.props.loginFacebook(response);
  }
  render() {
    const { isAuthenticated } = this.props.user;
    return (
      <>
        {!isAuthenticated && (
          <div className='icon-bar'>
            <FacebookLogin
              appId='1930035377289135'
              autoLoad={true}
              fields='first_name,last_name,name,email,picture'
              callback={this.responseFacebook}
              cssClass='facebook'
              icon={<i className='fab fa-facebook-f'>&nbsp;</i>}
            />
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = {
  loginFacebook
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Facebook);
