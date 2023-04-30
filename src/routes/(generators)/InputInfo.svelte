<script lang="ts">
	export let businessType: string = '';
	export let generatorType: string = '';
	export let businessName: string = '';
	export let businessEmail: string = '';
</script>

<h2 class="font-serif text-xl">Provide some basic info</h2>
<div class="form-control w-full max-w-xs mt-4">
	<label for="Business Name" class="label">
		<span class="label-text">What's the name?</span>
	</label>
	<input
		type="text"
		placeholder="Banana Inc."
		class="input input-bordered w-full max-w-xs"
		bind:value={businessName}
	/>
</div>
<div class="form-control w-full max-w-xs mb-4 mt-2">
	<label for="Business Contact Email" class="label">
		<span class="label-text">What's a good contact email?</span>
	</label>
	<input
		type="text"
		placeholder="cherry@banana.xyz"
		class="input input-bordered w-full max-w-xs"
		bind:value={businessEmail}
	/>
	<label for="Business Contact Email" class="label">
		<span class="label-text-alt">Used for text generation, not collecting</span>
	</label>
</div>
