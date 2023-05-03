<script lang="ts">
	export let url: string;
	export let title: string;
	export let jokeQuestion: string;
	export let jokeResponse: string;
	export let jokeAnswer: string;
</script>

<div class="mockup-window border bg-base-300">
	<div class="flex flex-col p-4 w-96 bg-base-200 h-full">
		<h3 class="text-2xl font-bold mb-16">{title}</h3>
		<div class="chat chat-start">
			<div class="chat-header">
				Obi-Wan K.
				<time class="text-xs opacity-50">2 hours ago</time>
			</div>
			<div class="chat-bubble">{jokeQuestion}</div>
			<div class="chat-footer opacity-50">Seen</div>
		</div>
		<div class="chat chat-end">
			<div class="chat-header">
				Anakin S.
				<time class="text-xs opacity-50">1 minute ago</time>
			</div>
			<div class="chat-bubble chat-bubble-info">{jokeResponse}</div>
			<div class="chat-footer opacity-50">Delivered</div>
		</div>
		<div class="chat chat-start">
			<div class="chat-header">
				Obi-Wan K.
				<time class="text-xs opacity-50">a few seconds ago</time>
			</div>
			<div class="chat-bubble">{jokeAnswer}</div>
			<div class="chat-footer opacity-50">Seen</div>
		</div>
		<div class="grow" />
		<div class="divider" />
		<a class="btn btn-primary mb-8 hover:btn-success" href={url}>Create "{title}"</a>
	</div>
</div>
