module.exports={

    // getBio(req,res){
    //     let db = req.app.get('db')
    //     db.get_bio().then(dbRes=>{
    //         res.status(200).send(dbRes)
    //     })
    // },
    // getAbilities(req,res){

    //     let db = req.app.get('db')

    //     db.get_abilities().then(dbRes=>{
    //         res.status(200).send(dbRes)
    //     })
    // },
    // getDetails(req,res){

    //     let db = req.app.get('db')

    //     db.get_details().then(dbRes=>{
    //         res.status(200).send(dbRes)
    //     })
    // },
    // getHp(req,res){

    //     let db = req.app.get('db')

    //     db.get_hp().then(dbRes=>{
    //         res.status(200).send(dbRes)
    //     })
    // },
    // getPowers(req,res){

    //     let db = req.app.get('db')

    //     db.get_powers().then(dbRes=>{
    //         res.status(200).send(dbRes)
    //     })
    // },

    // getSkills(req,res){
    //     let db = req.app.get('db')

    //     db.get_skills().then(dbRes=>{
    //         res.status(200).send(dbRes)
    //     })
    // },

    getCharacterById(req,res){
        let db = req.app.get('db')
        let {id} = req.params
        db.get_character_by_id({id}).then(dbRes=>{
            res.status(200).send(dbRes)
        })
    },
    addBio(req,res){
        let db = req.app.get('db')
        let {personalitytraits,background,mannersappear,compantions} = req.body
        db.add_bio({personalitytraits, background, mannersappear, compantions}).then(dbRes=>{
            res.status(200).send(dbRes)
        })
    },

    addAbilities(req,res){
        let db = req.app.get('db')
        let {strength, constitution, charisma, dexterity, intelligence, wisdom} = req.body
        let {id} = req.session.user
        db.add_abilities({strength, constitution, charisma, dexterity, intelligence, wisdom,  id}).then(dbRes=>{
            res.status(200).send(dbRes)
        })
    },
    addPowers(req,res){
        let db = req.app.get('db')
        let {atwill,daily,utility}= req.body
        let {id} = req.session.user
        db.add_powers({atwill,daily,utility}).then(dbRes=>{
            res.status(200).send(dbRes)
        })
    },
    addDetails(req,res){

        let db = req.app.get('db')
        let {charactername,level,characterclass,paragon, destiny, totalxp, race, size, age, gender, height, weight, alignment, diety}
        = req.body
        let {id} = req.session.user
        console.log(111111, req.body)
        db.add_details({id, charactername, level, characterclass, paragon, destiny, totalxp, race, size, age, gender, height, weight, alignment, diety})
        .then(dbRes=>{
            res.status(200).send(dbRes)
            
        })
    },
    addSkills(req,res){
        let db = req.app.get('db')
        let {acrobatics, arcana, athletics, bluff, diplomacy, dungeoneering, endurance, heal, history, insight, intimidate, nature, perception, religion, stealth, streetwise, thievery}
        = req.body 
        
        let {id}= req.session.user
        
        db.add_skills({id,acrobatics, arcana, athletics, bluff, diplomacy, dungeoneering, endurance, heal, history, insight, intimidate, nature, perception, religion, stealth, streetwise, thievery})
        .then(dbRes=>{
            res.status(200).send(dbRes)
        })
    },
    addHP(req,res){
        let db = req.app.get('db')
        let {health} = req.body
        db.add_hp({health}).then(dbRes=>{
            res.status(200).send(dbRes)
        })
    }
}