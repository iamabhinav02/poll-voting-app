import React, { Component } from "react";
import { connect } from "react-redux";
import { authUser, logout } from "../store/actions";

class Auth extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.display = this.display.bind(this);
	}

	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	handleSubmit(event) {
		const { username, password } = this.state;
		const { authType } = this.props;
		event.preventDefault();
		this.props.authUser(authType || "login", { username, password });
	}

	display() {
		const { authType } = this.props;
		if (authType === "login") return "Login Portal";
		else return "Registration Portal";
	}

	render() {
		const { username, password } = this.state;
		return (
			<div>
				<h2 className="text-label">{this.display()}</h2>
				<form className="form" onSubmit={this.handleSubmit}>
					<label className="form-label" htmlFor="username">
						Username
					</label>

					<input
						className="form-input"
						type="text"
						value={username}
						name="username"
						autoComplete="off"
						onChange={this.handleChange}
					></input>

					<label className="form-label" htmlFor="password">
						Password
					</label>

					<input
						className="form-input"
						type="password"
						value={password}
						name="password"
						autoComplete="off"
						onChange={this.handleChange}
					></input>

					<div className="button-center">
						<button className="button" type="submit">
							Submit
						</button>
					</div>
				</form>
			</div>
		);
	}
}

export default connect(() => ({}), { authUser, logout })(Auth);
