import React, { Component } from 'react';
import { connect } from 'react-redux';

import './LoginForm.css';

// Actions //

import { logIn } from '../../actions/auth';

// TODO: Редирект на /profile после успешной авторизации

class LoginForm extends Component {
  state = {
    data: {
      username: '',
      password: ''
    },
    errors: []
  }

  onInputChange = ({ target }) => {
    this.setState({
      data: {
        ...this.state.data,
        [target.name]: target.value
      }
    });
  }

  onSubmit = (event) => {
    event.preventDefault();

    const auth = this.props.logIn(this.state.data);

    if (auth.status === 'OK') {
      this.setState({
        errors: []
      });

      return;
    }

    this.setState({
      errors: auth.errors
    });
  }

  render() {
    const { username, password } = this.state.data;
    const { errors } = this.state;

    return (
      <form className={`${this.props.className} form`} onSubmit={this.onSubmit}>
        {
          errors.length > 0 && (
            <div className='form__errors'>
              {errors.map((err, index) => <p className='form__errors-item' key={index}>{err}</p>)}
            </div>
          )
        }
        <input
          className='form__input'
          type='text'
          name='username'
          onChange={this.onInputChange}
          value={username}
          placeholder='Логин'
        />
        <input
          className='form__input'
          type='password'
          name='password'
          onChange={this.onInputChange}
          value={password}
          placeholder='Пароль'
        />
        <button className='form__submit' type='submit'>Войти</button>
      </form>
    );
  }
};

export default connect(null, { logIn })(LoginForm);