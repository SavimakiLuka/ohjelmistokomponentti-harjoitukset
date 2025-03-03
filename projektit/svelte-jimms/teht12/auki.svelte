<script>
    let {aukeaa, sulkeutuu} =  $props()

    aukeaa = "10:00"
    sulkeutuu = "15:00"

    if(aukeaa !== "" || sulkeutuu !== ""){
        if(aukeaa !== ""){
            aukeaa = aukeaa + " - "
        }
        else if(sulkeutuu !== ""){
            sulkeutuu = " - " + sulkeutuu
        }
    }
    else{
        aukeaa = "24/7"
    }
</script>

<style>

</style>

<div>{aukeaa + sulkeutuu}</div>