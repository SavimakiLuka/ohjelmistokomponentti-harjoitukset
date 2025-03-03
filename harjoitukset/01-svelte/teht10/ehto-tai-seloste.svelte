<script>
    let { nimi, url } = $props();
</script>

<style>
    .ehto::after{
        content: "|";
        padding: 0 10px;
    }
    a{
        text-decoration: none;
        color: #CED4DA;
        list-style: none;
    }
</style>

<div class="ehdot">
    <a class="ehto" href={url}>{nimi}</a>
</div>