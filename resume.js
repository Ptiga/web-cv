const { response } = require('express')
const express = require('express')
const app = express()
const port = 3000


// app.use(express.static('public'));
app.use(express.static('public'));

//pour permettre de pouvoir lire le contenu du formulaire envoyé
app.use(express.urlencoded({ extended: true }))

app.listen(port, () => {
    console.log(`Resume app listening on port ${port}`)
})


//traitement du formulaire lors de l'envoi
app.get('/', (requete, reponse) => {
    //TODO: A voir si je conserve la page de base.
    // reponse.redirect('/todolist.html')
    reponse.redirect('/biography.html')
})


//traitement du formulaire lors de l'envoi
app.post('/contact-me', (requete, reponse) => {
    //TODO: A voir si je conserve la page de base.
    // reponse.redirect('/todolist.html')
    console.log(requete.body)
    // alert("Message envoyé")
    reponse.redirect('/mon_web_cv.html')
})

// app.post('/traitement-formulaire',  (req, res) => {
//     res.send('formulaire soumis')
//     console.log(req.body)
// })


