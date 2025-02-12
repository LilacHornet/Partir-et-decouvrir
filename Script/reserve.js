const btn = document.getElementById('btn')

btn.addEventListener('click', () => {
    const lieu = document.getElementById('lieu').value
    const depart = document.getElementById('depart').value
    const retour = document.getElementById('retour').value
    const enfants = document.getElementById('enfants').value
    const adultes = document.getElementById('adultes').value
    const reponse = document.getElementById('reponse')

    reponse.textContent = `Nous sommes désolés, nous n'avons pas de voyage disponible du ${depart} au ${retour} à ${lieu} pour ${enfants} enfants et ${adultes} adultes.`
})