import React, { Component } from "react";

class UserMngmnt extends Component {
	constructor(props) {
		super(props);
		this.state = {
			form: {
				gender: 0,
				description: "",
				email: "",
				password: "",
				country: "vn",
				rememberMe: 0,
			},
			users: [],
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleOnChange = this.handleOnChange.bind(this);
		this.deletedUser = this.deletedUser.bind(this);
	}
	handleSubmit(e) {
		e.preventDefault();
		this.setState((prev) => {
			return {
				users: [...prev.users, this.state.form],
				form: {
					gender: 0,
					description: "",
					email: "",
					password: "",
					country: "vn",
					rememberMe: 0,
				},
			};
		});
	}

	handleOnChange(e) {
		let key = e.target.name;
		let value = e.target.value;
		let type = e.target.type;
		let isCheckbox = type === "checkbox" || type === "radio";
		let checked = e.target.checked;
		this.setState((prev) => ({
			...prev,
			form: {
				...this.state.form,
				[key]: isCheckbox ? (checked ? 1 : 0) : value,
			},
		}));
		console.log(this.state.form);
	}

	deletedUser(user) {
		let confirm = window.confirm("Are you sure?");
		if (confirm)
			this.setState((prev) => ({
				...prev,
				users: this.state.users.filter((e) => e.email !== user.email),
			}));
	}

	render() {
		const { form, users } = this.state;
		return (
			<div className="body-content">
				<div className="form-regis">
					<form className="form-body" onSubmit={this.handleSubmit}>
						<label>Email</label>
						<input
							type="text"
							name="email"
							onChange={this.handleOnChange}
							value={form.email}
						></input>
						<label>Password</label>
						<input
							type="password"
							name="password"
							onChange={this.handleOnChange}
							value={form.password}
						></input>
						<div>
							<label>Gender</label>
							<span>Male</span>
							<input
								type="radio"
								name="gender"
								onChange={this.handleOnChange}
								defaultChecked={this.state.form.gender === 0}
							/>
							<span>Female</span>
							<input
								type="radio"
								name="gender"
								onChange={this.handleOnChange}
								defaultChecked={this.state.form.gender === 1}
							/>
						</div>
						<div>
							<input
								type="checkbox"
								name="rememberMe"
								onChange={this.handleOnChange}
								defaultChecked={this.state.form.rememberMe === 1}
							></input>
							<span>Remember Me</span>
						</div>
						<label>Country</label>
						<select name="country" id="" onChange={this.handleOnChange}>
							<option value="vn">Viet Nam</option>
							<option value="cn">China</option>
							<option value="jp">Japan</option>
						</select>
						<textarea
							name="description"
							value={form.description}
							onChange={this.handleOnChange}
						></textarea>
						<button>Submit</button>
					</form>
				</div>
				<div className="table">
					<table>
						<thead>
							<tr>
								<th>Email</th>
								<th>Password</th>
								<th>Gender</th>
								<th>Remember me</th>
								<th>Description</th>
								<th>Country</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{users.map((user, i) => {
								const {
									email,
									password,
									gender,
									description,
									country,
									rememberMe,
								} = user;
								return (
									<tr key={i}>
										<td>{email}</td>
										<td>{password}</td>
										<td>{gender === 0 ? "Male" : "Female"}</td>
										<td>{rememberMe}</td>
										<td>{description}</td>
										<td>{country}</td>
										<td>
											<a
												href="#"
												onClick={() => {
													this.deletedUser(user);
												}}
											>
												Delete
											</a>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

export default UserMngmnt;
