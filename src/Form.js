import React, { useState } from 'react';

function App() {
const [data, setData] = useState({
	username: 'jjj',
	password: 'kkk'
});
const [form, setForm] = useState({
	username: '',
	password: ''
});
const [submit, submitted] = useState(false);

const printValues = e => {
	e.preventDefault();
	setForm({
	username: data.username,
	password: data.password
	});
	submitted(true);
};

const updateField = e => {
	setData({
	...data,
	[e.target.name]: e.target.value
	});
};

return (
	<div>
	<form onSubmit={printValues}>
	<label>
		Username:
		<input
		value={data.username}
		name="username"
		onChange={updateField}
		/>
	</label>
	<br />
	<label>
		Password:
		<input
		value={data.password}
		name="password"
		type="password"
		onChange={updateField}
		/>
	</label>
	<br />
	<button>Submit</button>
	</form>
	

<p>Usernme: {submit?form.username:null}</p>


	

<p>Pwd: {submit?form.password:null}</p>


</div>
);
}

export default App;
