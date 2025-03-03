<script>
    let { paivat } = $props();
    let tulos = "ma-su";
    const malli = ["ma", "ti", "ke", "to", "pe", "la", "su"];
    const viikon_paivat = ["ma", "ti", "ke", "pe", "la", "su"];
    const naytettavat_viikon_paivat = [];
    const lopullinen_naky = [];
    let puuttuvat_paivat = "";
    let loop = true;
    let pituus = 0;
    let muutettu_pituus = 0;
    let asia = ""
    let yksittainen_paiva = ""
    let lyhennetty_paiva = ""

    if (viikon_paivat) {
        for (let i = 0; i < viikon_paivat.length; i++) {
            naytettavat_viikon_paivat.push(viikon_paivat[i]);
        }

        if (naytettavat_viikon_paivat === malli) {
            if (naytettavat_viikon_paivat.length > 1) {
                tulos =
                    naytettavat_viikon_paivat[0] +
                    "-" +
                    naytettavat_viikon_paivat[
                        naytettavat_viikon_paivat.length - 1
                    ];
            } else {
                tulos = naytettavat_viikon_paivat;
            }
        } else {
            while (pituus < malli.length) {
                while (loop && pituus < malli.length) {
                    if (lopullinen_naky[muutettu_pituus] === "tyhjä") {
                        muutettu_pituus++;
                    }
                    if (naytettavat_viikon_paivat[muutettu_pituus] === malli[pituus]) {
                        lopullinen_naky.push(naytettavat_viikon_paivat[muutettu_pituus]);
                        pituus++;
                        muutettu_pituus++;
                    } else {
                        lopullinen_naky.splice(muutettu_pituus, 0, "tyhjä");
                        naytettavat_viikon_paivat.splice(muutettu_pituus, 0, "tyhjä");
                        loop = false;
                        pituus++;
                        muutettu_pituus++;
                    }
                }

                loop = true;
            }

            tulos = lopullinen_naky.join(",");
            asia = tulos.split("tyhjä")
            if(asia.length[0] > 2){
                yksittainen_paiva === asia[0].split(",")
                lyhennetty_paiva === yksittainen_paiva[0]
            }
            
        }

        puuttuvat_paivat = malli.filter((e) => lopullinen_naky.includes(e));
    }
    console.log("tulos:", tulos);
    console.log("puuttuvat_paivat:", puuttuvat_paivat);

</script>

<div>ma-su</div>

<!-- {#each asia as a}
    <div>{a}</div>
{/each} -->



<style>
</style>
