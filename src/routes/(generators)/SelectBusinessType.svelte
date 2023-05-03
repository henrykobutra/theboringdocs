<script lang="ts">
	export let businessType: string = '';
</script>

<h2 class="font-serif text-xl">What kinda business are you?</h2>
<div class="flex flex-col gap-2 py-4">
	<button
		class="btn btn-primary mt-2 hover:btn-success"
		on:click={() => (businessType = 'ecommerce')}
	>
		E-Commerce
	</button>
	<div class="flex flex-row justify-center gap-2">
		<div class="badge badge-outline">you sell stuff online</div>
	</div>

	<button
		class="btn btn-primary mt-2 hover:btn-success"
		on:click={() => (businessType = 'content-creator')}
	>
		Content creator
	</button>
	<div class="flex flex-row justify-center gap-1">
		<div class="badge badge-outline">online educator</div>
		<div class="badge badge-outline">influcencer</div>
		<div class="badge badge-outline">etc.</div>
	</div>

	<button
		class="btn btn-primary mt-2 hover:btn-success"
		on:click={() => (businessType = 'freelancer')}
	>
		Freelancer, Agency, Consultancy
	</button>
	<div class="flex flex-row justify-center gap-1">
		<div class="badge badge-outline">developers</div>
		<div class="badge badge-outline">designers</div>
		<div class="badge badge-outline">marketers</div>
		<div class="badge badge-outline">etc.</div>
	</div>

	<button class="btn btn-primary mt-2 hover:btn-success" on:click={() => (businessType = 'app')}>
		App, SaaS, PaaS, etc.
	</button>
	<div class="flex flex-row justify-center gap-1">
		<div class="badge badge-outline">your app makes money</div>
	</div>
</div>
