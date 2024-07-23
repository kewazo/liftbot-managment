<h1>Svelte Google Authorization</h1>

<h2>Main Menu:</h2>

<div class="container">
	<div class="row">
		<div class="col-md-3">
			<div class="card-counter primary">
				<i class="fa fa-code-fork"></i>
				<span class="count-numbers">12</span>
				<span class="count-name">Users</span>
			</div>
		</div>

		<div class="col-md-3">
			<div class="card-counter danger">
				<i class="fa fa-ticket"></i>
				<span class="count-numbers">3</span>
				<span class="count-name">Platforms</span>
			</div>
		</div>

		<div class="col-md-3">
			<div class="card-counter success">
				<i class="fa fa-database"></i>
				<span class="count-numbers">65</span>
				<span class="count-name">Liftbots</span>
			</div>
		</div>

		<div class="col-md-3">
			<a href="/ebox">
				<div class="card-counter info">
					<i class="fa fa-users"></i>
					<span class="count-numbers">72</span>
					<span class="count-name">E-boxes</span>
				</div>
			</a>
		</div>
	</div>
</div>

<p>
	<a href="/authenticated">/authenticated</a> - Route is only available when user is logged in,
	routes to the <a href="https://kit.svelte.dev/docs/routing#error">error page</a> in other situations
</p>

<p>
	<a href="/client-api-call">/client-api-call</a> - Example showing how to call api calls from client
	side
</p>
<p>
	<a href="/server-api-call">/server-api-call</a> - Example showing how to call api calls from server
	side
</p>
<p>
	<a href="/ebox">/ebox</a> - Example of redirecting user to sign in prompt instead of showing popup
</p>

<style>
	.card-counter {
		position: relative;
		box-shadow: 2px 2px 10px #dadada;
		margin: 5px;
		padding: 20px 10px;
		background-color: #fff;
		height: 100px;
		border-radius: 5px;
		transition: 0.3s linear all;
	}

	.card-counter:hover {
		box-shadow: 4px 4px 20px #dadada;
		transition: 0.3s linear all;
	}

	.card-counter.primary {
		background-color: #007bff;
		color: #fff;
	}

	.card-counter.danger {
		background-color: #ef5350;
		color: #fff;
	}

	.card-counter.success {
		background-color: #66bb6a;
		color: #fff;
	}

	.card-counter.info {
		background-color: #26c6da;
		color: #fff;
	}

	.card-counter i {
		font-size: 5em;
		opacity: 0.2;
	}

	.card-counter .count-numbers {
		position: absolute;
		right: 35px;
		top: 20px;
		font-size: 32px;
		display: block;
		color: white;
	}

	.card-counter .count-name {
		position: absolute;
		right: 35px;
		top: 65px;
		font-style: italic;
		text-transform: capitalize;
		opacity: 0.5;
		display: block;
		font-size: 18px;
	}
</style>
