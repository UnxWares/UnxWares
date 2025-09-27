<script lang="ts">
	import '../../styles/app.css';
    import {LegalNotices} from '@unxwares/ui-core';
    let { children } = $props();
</script>

<main>
    <LegalNotices >
    
    </LegalNotices>
    {@render children()}
</main>