<script lang="ts">
	export let labelText: string;
	export let labelTextAlt: string = '';
	export let placeholder: string;
	export let bindValue: string;
</script>

<div class="form-control w-full max-w-xs mt-2">
	<label for={labelText} class="label">
		<span class="label-text">{labelText}</span>
	</label>
	<input
		type="text"
		{placeholder}
		class="input input-bordered w-full max-w-xs"
		bind:value={bindValue}
	/>
	{#if labelTextAlt}
		<label for={labelText} class="label">
			<span class="label-text-alt">{labelTextAlt}</span>
		</label>
	{/if}
</div>
