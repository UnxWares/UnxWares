<div class="classic-separator">
	<span class="line"></span>
	<img src="/favicon.png" alt="" />
	<span class="line"></span>
</div>

<style>
	.classic-separator {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		max-width: 900px;
		margin: 130px auto;
		gap: 20px;
		opacity: 0.6;
	}

	.classic-separator .line {
		height: 1px;
		flex: 1;
		background: linear-gradient(to var(--direction, right), transparent, var(--border-color));
	}

	.classic-separator .line:last-child {
		--direction: left;
	}

	.classic-separator img {
		width: 20px;
		height: 20px;
		filter: grayscale(100%);
	}

	:global([data-theme="dark"]) .classic-separator img {
		filter: grayscale(100%) brightness(10);
	}
</style>
